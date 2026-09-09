import { z } from "zod";
import { NonEmptyString, LinkSchema, Href } from "./common";

export const SiteFooterSectionSchema = z.object({
  heading: NonEmptyString,
  links: z.array(LinkSchema),
});

export const SiteFooterContactSchema = z.object({
  heading: NonEmptyString,
  items: z.array(NonEmptyString),
});

export const SiteFooterSchema = z.object({
  brand: z.object({ name: NonEmptyString, href: Href }),
  description: NonEmptyString,
  explore: SiteFooterSectionSchema,
  connect: SiteFooterContactSchema,
  copyright: NonEmptyString,
});

export type SiteFooterContent = z.infer<typeof SiteFooterSchema>;
