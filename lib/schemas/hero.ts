import { z } from "zod";
import { ImageSchema, NonEmptyString, CtaSchema, Enabled } from "./common";

export const HeroSchema = z.object({
  enabled: Enabled,
  image: ImageSchema,
  preHeading: NonEmptyString,
  headline: NonEmptyString,
  copy: NonEmptyString,
  primaryCta: CtaSchema,
  secondaryCta: CtaSchema,
});

export type HeroContent = z.infer<typeof HeroSchema>;
