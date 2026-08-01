import { EventBanner } from "@/components/event-banner";
import { SiteNavbar } from "@/components/site-navbar";
import { HeroSection } from "@/components/hero-section";
import { ClassSchedule } from "@/components/class-schedule";
import { StudioIntroduction } from "@/components/studio-introduction";
import { DanceStyles } from "@/components/dance-styles";
import { InstructorSection } from "@/components/instructor-section";
import { LocationContact } from "@/components/location-contact";
import { SiteFooter } from "@/components/site-footer";
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

export default function Page() {
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
