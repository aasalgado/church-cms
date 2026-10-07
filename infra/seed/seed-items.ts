import fs from "fs";
import path from "path";
import {
  DynamoDBClient,
  BatchWriteItemCommand,
} from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { SectionSchemas } from "../../lib/schemas";

// This script prepares batch write items for CmsContent. It requires AWS creds to run.
// It does not run automatically. Use only after review and with caution.

async function main() {
  const seedPath = path.join(process.cwd(), "infra/seed/seed-items.json");
  const data = JSON.parse(fs.readFileSync(seedPath, "utf8"));

  if (!process.env.AWS_REGION)
    throw new Error("Set AWS_REGION to run seed script");
  if (!process.env.TABLE_NAME)
    throw new Error("Set TABLE_NAME to run seed script");

  const DRY_RUN = process.env.DRY_RUN === "true";

  const client = new DynamoDBClient({ region: process.env.AWS_REGION });
  const table = process.env.TABLE_NAME;

  // Validate and marshall items
  const marshalledPutRequests: any[] = [];
  const sectionIds: string[] = [];

  for (const it of data.items) {
    const sectionId = it.sectionId;
    if (!sectionId) throw new Error("seed item missing sectionId");
    const schema = (SectionSchemas as any)[sectionId];
    if (!schema) throw new Error(`Unknown sectionId in seed: ${sectionId}`);

    // Validate draft and published
    try {
      if (it.draft) schema.parse(it.draft);
      if (it.published) schema.parse(it.published);
    } catch (err) {
      throw new Error(
        `Schema validation failed for ${sectionId}: ${String(err)}`,
      );
    }

    // Prepare marshalled DynamoDB item (AttributeValue map)
    const item = { ...it };
    const marshalled = marshall(item, { removeUndefinedValues: true });
    marshalledPutRequests.push({ PutRequest: { Item: marshalled } });
    sectionIds.push(sectionId);
  }

  if (DRY_RUN) {
    console.log(
      `DRY_RUN: region=${process.env.AWS_REGION} table=${table} items=${marshalledPutRequests.length}`,
    );
    console.log(`sectionIds: ${sectionIds.join(",")}`);
    return;
  }

  const chunkSize = 25;
  const maxAttempts = 5;

  const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

  // Send chunks with retry on UnprocessedItems
  for (let i = 0; i < marshalledPutRequests.length; i += chunkSize) {
    let chunk = marshalledPutRequests.slice(i, i + chunkSize);
    let attempt = 0;
    let unprocessed: any = { [table]: chunk };
    while (Object.keys(unprocessed).length > 0) {
      const cmd = new BatchWriteItemCommand({ RequestItems: unprocessed });
      const res = await client.send(cmd);
      unprocessed =
        res.UnprocessedItems && Object.keys(res.UnprocessedItems).length > 0
          ? res.UnprocessedItems
          : {};
      if (Object.keys(unprocessed).length === 0) break;
      attempt++;
      if (attempt > maxAttempts)
        throw new Error("UnprocessedItems remain after retry limit");
      const backoff = 50 * Math.pow(2, attempt);
      await sleep(backoff);
      // continue loop to retry only the unprocessed items
    }
  }

  console.log("seed completed (if AWS credentials and table exist)");
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
