import { z } from "zod";
import { NonEmptyString, Enabled } from "./common";

export const ClassScheduleItemSchema = z.object({
  title: NonEmptyString,
  time: NonEmptyString,
  description: NonEmptyString,
});

export const ClassScheduleSchema = z.object({
  enabled: Enabled,
  eyebrow: NonEmptyString,
  heading: NonEmptyString,
  intro: NonEmptyString,
  classes: z.array(ClassScheduleItemSchema),
});

export type ClassScheduleItem = z.infer<typeof ClassScheduleItemSchema>;
export type ClassScheduleContent = z.infer<typeof ClassScheduleSchema>;
