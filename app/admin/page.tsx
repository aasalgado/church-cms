import AdminPageClient from "./page.client";
import contentService from "@/lib/content-service";

export default async function AdminPage() {
  const eventBannerContent = await contentService.getPublished("event-banner");
  const heroContent = await contentService.getPublished("hero");
  const classScheduleContent =
    await contentService.getPublished("class-schedule");
  const studioIntroductionContent = await contentService.getPublished(
    "studio-introduction",
  );
  const danceStylesContent = await contentService.getPublished("dance-styles");
  const instructorContent = await contentService.getPublished("instructor");
  const locationContactContent =
    await contentService.getPublished("location-contact");
  const siteContent = await contentService.getPublished("navbar");
  const siteFooterContent = await contentService.getPublished("footer");

  return (
    <AdminPageClient
      eventBannerContent={eventBannerContent}
      heroContent={heroContent}
      classScheduleContent={classScheduleContent}
      studioIntroductionContent={studioIntroductionContent}
      danceStylesContent={danceStylesContent}
      instructorContent={instructorContent}
      locationContactContent={locationContactContent}
      siteContent={siteContent}
      siteFooterContent={siteFooterContent}
    />
  );
}
