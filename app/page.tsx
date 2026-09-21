import { EventBanner } from "@/components/event-banner";
import { SiteNavbar } from "@/components/site-navbar";
import { HeroSection } from "@/components/hero-section";
import { ClassSchedule } from "@/components/class-schedule";
import { StudioIntroduction } from "@/components/studio-introduction";
import { DanceStyles } from "@/components/dance-styles";
import { InstructorSection } from "@/components/instructor-section";
import { LocationContact } from "@/components/location-contact";
import { SiteFooter } from "@/components/site-footer";
import contentService from "@/lib/content-service";

export default async function Page() {
  const all = await contentService.getAllPublished();

  const eventBannerContent = all["event-banner"];
  const heroContent = all.hero;
  const locationContactContent = all["location-contact"];
  const danceStylesContent = all["dance-styles"];
  const instructorContent = all.instructor;
  const classScheduleContent = all["class-schedule"];
  const studioIntroductionContent = all["studio-introduction"];
  const siteContent = all.navbar;
  const siteFooterContent = all.footer;

  return (
    <div className="min-h-screen bg-background">
      <EventBanner content={eventBannerContent} />
      <SiteNavbar content={siteContent} />
      <main>
        <HeroSection content={heroContent} />
        <ClassSchedule content={classScheduleContent} />
        <StudioIntroduction content={studioIntroductionContent} />
        <DanceStyles content={danceStylesContent} />
        <InstructorSection content={instructorContent} />
        <LocationContact content={locationContactContent} />
      </main>
      <SiteFooter content={siteFooterContent} />
    </div>
  );
}
