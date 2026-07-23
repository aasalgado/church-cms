import { AnnouncementBanner } from "@/components/announcement-banner";
import { SiteNavbar } from "@/components/site-navbar";
import { HeroSection } from "@/components/hero-section";
import { ServiceTimes } from "@/components/service-times";
import { WelcomeMessage } from "@/components/welcome-message";
import { MinistriesSection } from "@/components/ministries-section";
import { PastorMessage } from "@/components/pastor-message";
import { LocationContact } from "@/components/location-contact";
import { SiteFooter } from "@/components/site-footer";
import {
  announcementContent,
  heroContent,
  welcomeMessageContent,
} from "@/content/home-content";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBanner content={announcementContent} />
      <SiteNavbar />
      <main>
        <HeroSection content={heroContent} />
        <ServiceTimes />
        <WelcomeMessage content={welcomeMessageContent} />
        <MinistriesSection />
        <PastorMessage />
        <LocationContact />
      </main>
      <SiteFooter />
    </div>
  );
}
