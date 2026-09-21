import type {
  SectionId,
  EventBannerContent,
  HeroContent,
  StudioIntroductionContent,
  ClassScheduleContent,
  DanceStylesContent,
  InstructorContent,
  LocationContactContent,
  SiteContent,
  SiteFooterContent,
} from "@/lib/schemas";

import {
  eventBannerContent,
  heroContent,
  locationContactContent,
  danceStylesContent,
  instructorContent,
  classScheduleContent,
  studioIntroductionContent,
} from "@/content/home-content";
import { siteContent, siteFooterContent } from "@/content/site-content";

type ContentMap = {
  // definting the type for the content map, which maps section ids to their corresponding content types
  "event-banner": EventBannerContent;
  hero: HeroContent;
  "studio-introduction": StudioIntroductionContent;
  "class-schedule": ClassScheduleContent;
  "dance-styles": DanceStylesContent;
  instructor: InstructorContent;
  "location-contact": LocationContactContent;
  navbar: SiteContent;
  footer: SiteFooterContent;
};

export type ContentFor<K extends SectionId> = ContentMap[K]; // Given a section ID, look up the content type that belongs to that section.

export interface ContentService {
  // defining the content service interface
  getPublished<K extends SectionId>(sectionId: K): Promise<ContentFor<K>>;
  getAllPublished(): Promise<{ [K in SectionId]: ContentFor<K> }>;
}

const LOCAL_CONTENT: { [K in SectionId]: ContentMap[K] } = {
  // defining the local content for each section
  "event-banner": eventBannerContent,
  hero: heroContent,
  "studio-introduction": studioIntroductionContent,
  "class-schedule": classScheduleContent,
  "dance-styles": danceStylesContent,
  instructor: instructorContent,
  "location-contact": locationContactContent,
  navbar: siteContent,
  footer: siteFooterContent,
};

export const contentService: ContentService = {
  async getPublished<K extends SectionId>(
    sectionId: K,
  ): Promise<ContentFor<K>> {
    // Promise<ContentFor<K>> = what this function promises to return.

    return LOCAL_CONTENT[sectionId] as ContentFor<K>;
    // `as ContentFor<K>` = tells TypeScript that this particular
    // LOCAL_CONTENT lookup satisfies that promised return type.
    // The return type is a requirement; it does not automatically
    // make the returned value that type.
  },

  async getAllPublished(): Promise<{ [K in SectionId]: ContentMap[K] }> {
    return LOCAL_CONTENT as { [K in SectionId]: ContentMap[K] };
  },
};

export default contentService;
