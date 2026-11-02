import {
  DynamoDBClient,
  GetItemCommand,
  BatchGetItemCommand,
  type AttributeValue,
} from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { SectionSchemas, type SectionId } from "../../../lib/schemas";

const REGION = process.env.AWS_REGION || "us-east-1";
const TABLE_NAME = process.env.TABLE_NAME || "CmsContent";

const client = new DynamoDBClient({ region: REGION });

function respond(statusCode: number, body: unknown) {
  return {
    statusCode,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  };
}

// Verify that a section ID exists in our schemas.
function isSectionId(id: string): id is SectionId {
  return Object.prototype.hasOwnProperty.call(SectionSchemas, id);
}

// Convert DynamoDB's published attribute into JavaScript data.
function parsePublished(attribute: AttributeValue): unknown {
  if (attribute.M !== undefined) {
    return unmarshall(attribute.M);
  }

  if (attribute.S !== undefined) {
    return JSON.parse(attribute.S);
  }

  // Preserve existing fallback behavior for other attribute types.
  return attribute;
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
      event?.queryStringParameters?.sectionId;

    if (path.startsWith("/content/") || sectionId) {
      const id = sectionId || path.split("/content/")[1];

      if (!id) {
        return respond(400, { message: "missing sectionId" });
      }

      return await handleGetSection(id);
    }

    if (path === "/content" || path === "/content/") {
      return await handleGetAll();
    }

    return respond(404, { message: "not found" });
  } catch (err) {
    console.error("handler error", err);

    return respond(500, {
      message: "internal server error",
    });
  }
};

async function handleGetSection(sectionId: string) {
  // Validate the section ID before querying DynamoDB.
  if (!isSectionId(sectionId)) {
    console.error("unknown sectionId", sectionId);

    return respond(404, {
      message: "unknown sectionId",
    });
  }

  const cmd = new GetItemCommand({
    TableName: TABLE_NAME,
    Key: { sectionId: { S: sectionId } },
  });

  const res = await client.send(cmd);

  if (!res.Item || !res.Item.published) {
    return respond(404, { message: "not found" });
  }

  const schema = SectionSchemas[sectionId];

  try {
    const published = parsePublished(res.Item.published);
    const parsed = schema.parse(published);

    return respond(200, {
      sectionId,
      published: parsed,
      metadata: extractMetadata(res.Item),
    });
  } catch (err) {
    console.error("invalid published data", {
      sectionId,
      error: err,
    });

    return respond(502, {
      message: "invalid published data",
    });
  }
}

function extractMetadata(item: Record<string, AttributeValue>) {
  const meta: {
    version?: number;
    publishedAt?: string;
    publishedBy?: string;
  } = {};

  if (item.version?.N !== undefined) {
    meta.version = Number(item.version.N);
  }

  if (item.publishedAt?.S !== undefined) {
    meta.publishedAt = item.publishedAt.S;
  }

  if (item.publishedBy?.S !== undefined) {
    meta.publishedBy = item.publishedBy.S;
  }

  return meta;
}

async function handleGetAll() {
  // Use schema keys as the list of expected section IDs.
  const sectionIds = Object.keys(SectionSchemas) as SectionId[];

  // Build the BatchGetItem request.
  const keys = sectionIds.map((id) => ({
    sectionId: { S: id },
  }));

  const cmd = new BatchGetItemCommand({
    RequestItems: {
      [TABLE_NAME]: {
        Keys: keys,
      },
    },
  });

  const res = await client.send(cmd);

  const responses = res.Responses?.[TABLE_NAME] || [];

  // Fail loudly if DynamoDB did not process all requested keys.
  if (res.UnprocessedKeys && Object.keys(res.UnprocessedKeys).length > 0) {
    console.error("BatchGetItem returned UnprocessedKeys", res.UnprocessedKeys);

    return respond(502, {
      message: "unprocessed keys from BatchGetItem",
    });
  }

  // Check that every expected section was returned.
  const returnedIds: string[] = responses
    .map((item) => item.sectionId?.S)
    .filter((id): id is string => typeof id === "string");

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

  const result: Record<string, unknown> = {};

  for (const item of responses) {
    if (!item.published) {
      console.error("missing published for item", item);

      return respond(502, {
        message: "missing published for one or more items",
      });
    }

    const id = item.sectionId?.S;

    if (!id) {
      console.error("missing sectionId for item", item);

      return respond(502, {
        message: "missing sectionId for one or more items",
      });
    }

    // Ensure DynamoDB returned a recognized section.
    if (!isSectionId(id)) {
      console.error("unknown sectionId", id);

      return respond(502, {
        message: "unknown sectionId",
      });
    }

    const schema = SectionSchemas[id];

    try {
      const published = parsePublished(item.published);
      const parsed = schema.parse(published);

      result[id] = parsed;
    } catch (err) {
      console.error("invalid published data for section", id, err);

      return respond(502, {
        message: `invalid published data for section ${id}`,
      });
    }
  }

  return respond(200, { all: result });
}
