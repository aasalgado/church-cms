import { z } from "zod";
import { NonEmptyString, Href, LinkSchema } from "./common";

export const SiteBrandSchema = z.object({ name: NonEmptyString, href: Href });

export const SiteContentSchema = z.object({
  brand: SiteBrandSchema,
  navigation: z.array(LinkSchema),
  primaryCta: z.object({ label: NonEmptyString, href: Href }),
});

export type SiteBrandContent = z.infer<typeof SiteBrandSchema>;
export type SiteContent = z.infer<typeof SiteContentSchema>;
