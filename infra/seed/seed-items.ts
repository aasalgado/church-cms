import fs from "fs";
import path from "path";
import {
  DynamoDBClient,
  BatchWriteItemCommand,
} from "@aws-sdk/client-dynamodb";

// This script prepares batch write items for CmsContent. It requires AWS creds to run.
// It does not run automatically. Use only after review and with caution.

async function main() {
  const seedPath = path.join(process.cwd(), "infra/seed/seed-items.json");
  const data = JSON.parse(fs.readFileSync(seedPath, "utf8"));

  if (!process.env.AWS_REGION)
    throw new Error("Set AWS_REGION to run seed script");

  const client = new DynamoDBClient({ region: process.env.AWS_REGION });
  const table = process.env.TABLE_NAME || "CmsContent";

  const putRequests = data.items.map((it: any) => ({
    PutRequest: { Item: it },
  }));

  const chunkSize = 25;
  for (let i = 0; i < putRequests.length; i += chunkSize) {
    const chunk = putRequests.slice(i, i + chunkSize);
    const cmd = new BatchWriteItemCommand({
      RequestItems: {
        [table]: chunk,
      },
    });
    await client.send(cmd);
  }

  console.log("seed completed (if AWS credentials and table exist)");
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
