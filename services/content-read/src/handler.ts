import {
  DynamoDBClient,
  GetItemCommand,
  BatchGetItemCommand,
} from "@aws-sdk/client-dynamodb";
import { SectionSchemas, type SectionId } from "../../../lib/schemas";
import { z } from "zod";

const REGION = process.env.AWS_REGION || "us-east-1";
const TABLE_NAME =
  process.env.TABLE_NAME || process.env.TABLE_NAME || "CmsContent";

const client = new DynamoDBClient({ region: REGION });

function respond(statusCode: number, body: unknown) {
  return {
    statusCode,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  };
}

export const handler = async (event: any) => {
  try {
    const path =
      event?.rawPath ||
      event?.path ||
      event?.requestContext?.http?.path ||
      "/content";
    const sectionId =
      event?.pathParameters?.sectionId ||
      (event?.queryStringParameters && event.queryStringParameters.sectionId);

    if (path.startsWith("/content/") || sectionId) {
      const id = sectionId || path.split("/content/")[1];
      if (!id) return respond(400, { message: "missing sectionId" });
      return await handleGetSection(id as SectionId);
    }

    if (path === "/content" || path === "/content/") {
      return await handleGetAll();
    }

    return respond(404, { message: "not found" });
  } catch (err) {
    console.error("handler error", err);
    return respond(500, { message: "internal server error" });
  }
};

async function handleGetSection(sectionId: SectionId) {
  const cmd = new GetItemCommand({
    TableName: TABLE_NAME,
    Key: { sectionId: { S: sectionId } },
  });

  const res = await client.send(cmd);
  if (!res.Item || !res.Item.published) {
    return respond(404, { message: "not found" });
  }

  // DynamoDB represents maps as M - but assuming stored JSON in 'published' as S or M
  let published: any;
  if (res.Item.published.M) {
    published = unmarshall(res.Item.published.M);
  } else if (res.Item.published.S) {
    published = JSON.parse(res.Item.published.S);
  } else {
    published = res.Item.published;
  }

  const schema = SectionSchemas[sectionId];
  try {
    const parsed = schema.parse(published);
    return respond(200, {
      sectionId,
      published: parsed,
      metadata: extractMetadata(res.Item),
    });
  } catch (zErr) {
    console.error("validation failed", { sectionId, error: zErr });
    return respond(502, { message: "validation failed" });
  }
}

function extractMetadata(item: any) {
  const meta: any = {};
  if (item.version && item.version.N) meta.version = Number(item.version.N);
  if (item.publishedAt && item.publishedAt.S)
    meta.publishedAt = item.publishedAt.S;
  if (item.publishedBy && item.publishedBy.S)
    meta.publishedBy = item.publishedBy.S;
  return meta;
}

function unmarshall(map: any): any {
  // Minimal unmarshall: convert DynamoDB JSON shape to plain JS
  const out: any = {};
  for (const key of Object.keys(map)) {
    const v = map[key];
    if (v.S !== undefined) out[key] = v.S;
    else if (v.N !== undefined) out[key] = Number(v.N);
    else if (v.M !== undefined) out[key] = unmarshall(v.M);
    else if (v.L !== undefined)
      out[key] = v.L.map((i: any) => {
        if (i.S !== undefined) return i.S;
        if (i.N !== undefined) return Number(i.N);
        if (i.M !== undefined) return unmarshall(i.M);
        return i;
      });
    else out[key] = v;
  }
  return out;
}

async function handleGetAll() {
  // Use the SectionSchemas keys as the list of sectionIds
  const sectionIds = Object.keys(SectionSchemas) as SectionId[];

  // Build BatchGetItem request
  const keys = sectionIds.map((id) => ({ sectionId: { S: id } }));
  const cmd = new BatchGetItemCommand({
    RequestItems: {
      [TABLE_NAME]: {
        Keys: keys,
      },
    },
  });

  const res = await client.send(cmd);
  const responses = (res.Responses && res.Responses[TABLE_NAME]) || [];

  // Fail-loud if DynamoDB indicates any unprocessed keys
  if (res.UnprocessedKeys && Object.keys(res.UnprocessedKeys).length > 0) {
    console.error("BatchGetItem returned UnprocessedKeys", res.UnprocessedKeys);
    return respond(502, { message: "unprocessed keys from BatchGetItem" });
  }

  // Ensure we received every expected sectionId; fail loudly if any are missing
  const returnedIds: string[] = responses
    .map((it: any) => (it.sectionId && it.sectionId.S) || undefined)
    .filter((x): x is string => typeof x === "string");

  const missing = sectionIds.filter((id) => !returnedIds.includes(id));
  if (missing.length > 0) {
    console.error("BatchGetItem missing items", {
      expected: sectionIds.length,
      got: returnedIds.length,
      missing,
    });
    return respond(502, {
      message: "missing items in BatchGetItem response",
      missing,
    });
  }

  const result: Record<string, any> = {};
  for (const item of responses) {
    if (!item.published) {
      console.error("missing published for item", item);
      return respond(502, {
        message: "missing published for one or more items",
      });
    }
    const id = item.sectionId.S;
    if (!id) {
      console.error("missing sectionId for item", item);
      return respond(502, {
        message: "missing sectionId for one or more items",
      });
    }
    let published: any;
    if (item.published.M) published = unmarshall(item.published.M);
    else if (item.published.S) published = JSON.parse(item.published.S);
    else published = item.published;

    const schema = SectionSchemas[id as SectionId];
    try {
      const parsed = schema.parse(published);
      result[id] = parsed;
    } catch (zErr) {
      console.error("validation failed for section", id, zErr);
      return respond(502, { message: `validation failed for section ${id}` });
    }
  }

  return respond(200, { all: result });
}
