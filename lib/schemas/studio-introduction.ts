import { z } from "zod";
import { ImageSchema, NonEmptyString, Enabled } from "./common";

export const StudioIntroductionSchema = z.object({
  enabled: Enabled,
  image: ImageSchema,
  badge: z.object({ value: NonEmptyString, label: NonEmptyString }),
  eyebrow: NonEmptyString,
  headline: NonEmptyString,
  paragraphs: z.array(NonEmptyString),
  quote: NonEmptyString,
});

export type StudioIntroductionContent = z.infer<
  typeof StudioIntroductionSchema
>;
