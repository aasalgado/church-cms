import { z } from "zod";
import { NonEmptyString, Timestamp } from "./common";

export const CmsContentMetadataSchema = z.object({
  sectionId: NonEmptyString,
  version: z.number().int().nonnegative(),
  lastEditedAt: Timestamp.optional(),
  lastEditedBy: z.string().optional(),
  publishedAt: Timestamp.optional(),
  publishedBy: z.string().optional(),
});

export type CmsContentMetadata = z.infer<typeof CmsContentMetadataSchema>;
