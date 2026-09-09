import { z } from "zod";
import { ImageSchema, NonEmptyString, CtaSchema, Enabled } from "./common";

export const InstructorSchema = z.object({
  enabled: Enabled,
  image: ImageSchema,
  eyebrow: NonEmptyString,
  heading: NonEmptyString,
  paragraphs: z.array(NonEmptyString),
  name: NonEmptyString,
  title: NonEmptyString,
  cta: CtaSchema,
});

export type InstructorContent = z.infer<typeof InstructorSchema>;
