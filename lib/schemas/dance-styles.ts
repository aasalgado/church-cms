import { z } from "zod";
import { NonEmptyString, Enabled } from "./common";

export const DanceStyleItemSchema = z.object({
  title: NonEmptyString,
  description: NonEmptyString,
});

export const DanceStylesSchema = z.object({
  enabled: Enabled,
  eyebrow: NonEmptyString,
  heading: NonEmptyString,
  intro: NonEmptyString,
  styles: z.array(DanceStyleItemSchema),
});

export type DanceStyleItem = z.infer<typeof DanceStyleItemSchema>;
export type DanceStylesContent = z.infer<typeof DanceStylesSchema>;
