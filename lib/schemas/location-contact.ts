import { z } from "zod";
import { NonEmptyString, CtaSchema, Enabled } from "./common";

export const ContactDetailSchema = z.object({
  label: NonEmptyString,
  value: NonEmptyString,
});

export const LocationContactSchema = z.object({
  enabled: Enabled,
  eyebrow: NonEmptyString,
  heading: NonEmptyString,
  intro: NonEmptyString,
  details: z.array(ContactDetailSchema),
  button: CtaSchema,
});

export type ContactDetail = z.infer<typeof ContactDetailSchema>;
export type LocationContactContent = z.infer<typeof LocationContactSchema>;
