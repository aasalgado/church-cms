import { EventBannerSchema, EventBannerContent } from "./event-banner";
import { HeroSchema, HeroContent } from "./hero";
import {
  StudioIntroductionSchema,
  StudioIntroductionContent,
} from "./studio-introduction";
import { ClassScheduleSchema, ClassScheduleContent } from "./class-schedule";
import { DanceStylesSchema, DanceStylesContent } from "./dance-styles";
import { InstructorSchema, InstructorContent } from "./instructor";
import {
  LocationContactSchema,
  LocationContactContent,
} from "./location-contact";
import { SiteContentSchema, SiteContent, SiteBrandContent } from "./navbar";
import { SiteFooterSchema, SiteFooterContent } from "./footer";
import { CmsContentMetadataSchema } from "./cms-content-item";
import { Cta } from "./common";

export const SectionSchemas = {
  "event-banner": EventBannerSchema,
  hero: HeroSchema,
  "studio-introduction": StudioIntroductionSchema,
  "class-schedule": ClassScheduleSchema,
  "dance-styles": DanceStylesSchema,
  instructor: InstructorSchema,
  "location-contact": LocationContactSchema,
  navbar: SiteContentSchema,
  footer: SiteFooterSchema,
} as const;

export type SectionId = keyof typeof SectionSchemas;

export type {
  EventBannerContent,
  HeroContent,
  StudioIntroductionContent,
  ClassScheduleContent,
  DanceStylesContent,
  InstructorContent,
  LocationContactContent,
  SiteContent,
  SiteFooterContent,
  SiteBrandContent,
};
export type { Cta as CtaContent };

export { CmsContentMetadataSchema };
