import { z } from "zod";
import { NonEmptyString, Enabled } from "./common";

export const EventBannerSchema = z.object({
  enabled: Enabled,
  title: NonEmptyString,
  message: NonEmptyString,
});

export type EventBannerContent = z.infer<typeof EventBannerSchema>;
