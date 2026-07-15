import { AnnouncementBanner } from "@/components/announcement-banner"
import { SiteNavbar } from "@/components/site-navbar"
import { HeroSection } from "@/components/hero-section"
import { ServiceTimes } from "@/components/service-times"
import { WelcomeMessage } from "@/components/welcome-message"
import { MinistriesSection } from "@/components/ministries-section"
import { PastorMessage } from "@/components/pastor-message"
import { LocationContact } from "@/components/location-contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBanner />
      <SiteNavbar />
      <main>
        <HeroSection />
        <ServiceTimes />
        <WelcomeMessage />
        <MinistriesSection />
        <PastorMessage />
        <LocationContact />
      </main>
      <SiteFooter />
    </div>
  )
}
