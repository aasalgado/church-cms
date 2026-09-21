"use client";

import { type ReactNode, useState } from "react";
import { EventBanner } from "@/components/event-banner";
import { EventBannerEditor } from "@/components/admin/event-banner-editor";
import { HeroEditor } from "@/components/admin/hero-editor";
import { LocationContactEditor } from "@/components/admin/location-contact-editor";
import { DanceStylesEditor } from "@/components/admin/dance-styles-editor";
import { InstructorSectionEditor } from "@/components/admin/instructor-section-editor";
import { ClassScheduleEditor } from "@/components/admin/class-schedule-editor";
import { SiteNavbarEditor } from "@/components/admin/site-navbar-editor";
import { SiteFooterEditor } from "@/components/admin/site-footer-editor";
import { StudioIntroductionEditor } from "@/components/admin/studio-introduction-editor";
import { HeroSection } from "@/components/hero-section";
import { LocationContact } from "@/components/location-contact";
import { DanceStyles } from "@/components/dance-styles";
import { InstructorSection } from "@/components/instructor-section";
import { ClassSchedule } from "@/components/class-schedule";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { StudioIntroduction } from "@/components/studio-introduction";
import type {
  EventBannerContent,
  HeroContent,
  LocationContactContent,
  DanceStylesContent,
  InstructorContent,
  ClassScheduleContent,
  StudioIntroductionContent,
  SiteContent,
  SiteFooterContent,
} from "@/lib/schemas";

type AdminSectionId =
  | "event-banner"
  | "hero"
  | "class-schedule"
  | "studio-introduction"
  | "dance-styles"
  | "instructor"
  | "location-contact"
  | "navbar"
  | "footer";

interface AdminSectionConfig {
  id: AdminSectionId;
  label: string;
  preview: ReactNode;
  editor: ReactNode;
}

export default function AdminPageClient(props: {
  eventBannerContent: EventBannerContent;
  heroContent: HeroContent;
  locationContactContent: LocationContactContent;
  danceStylesContent: DanceStylesContent;
  instructorContent: InstructorContent;
  classScheduleContent: ClassScheduleContent;
  studioIntroductionContent: StudioIntroductionContent;
  siteContent: SiteContent;
  siteFooterContent: SiteFooterContent;
}) {
  const [activeSection, setActiveSection] =
    useState<AdminSectionId>("event-banner");
  const [footerDraft, setFooterDraft] = useState(props.siteFooterContent);
  const [navbarDraft, setNavbarDraft] = useState(props.siteContent);
  const [eventBannerDraft, setEventBannerDraft] = useState(
    props.eventBannerContent,
  );
  const [heroDraft, setHeroDraft] = useState(props.heroContent);
  const [classScheduleDraft, setClassScheduleDraft] = useState(
    props.classScheduleContent,
  );
  const [studioIntroductionDraft, setStudioIntroductionDraft] = useState(
    props.studioIntroductionContent,
  );
  const [danceStylesDraft, setDanceStylesDraft] = useState(
    props.danceStylesContent,
  );
  const [instructorDraft, setInstructorDraft] = useState(
    props.instructorContent,
  );
  const [locationContactDraft, setLocationContactDraft] = useState(
    props.locationContactContent,
  );

  const sections: AdminSectionConfig[] = [
    {
      id: "navbar",
      label: "Navbar",
      preview: <SiteNavbar content={navbarDraft} />,
      editor: (
        <SiteNavbarEditor value={navbarDraft} onChange={setNavbarDraft} />
      ),
    },
    {
      id: "event-banner",
      label: "Event Banner",
      preview: <EventBanner content={eventBannerDraft} />,
      editor: (
        <EventBannerEditor
          value={eventBannerDraft}
          onChange={setEventBannerDraft}
        />
      ),
    },
    {
      id: "hero",
      label: "Hero",
      preview: <HeroSection content={heroDraft} />,
      editor: <HeroEditor value={heroDraft} onChange={setHeroDraft} />,
    },
    {
      id: "class-schedule",
      label: "Class Schedule",
      preview: <ClassSchedule content={classScheduleDraft} />,
      editor: (
        <ClassScheduleEditor
          value={classScheduleDraft}
          onChange={setClassScheduleDraft}
        />
      ),
    },
    {
      id: "studio-introduction",
      label: "Studio Introduction",
      preview: <StudioIntroduction content={studioIntroductionDraft} />,
      editor: (
        <StudioIntroductionEditor
          value={studioIntroductionDraft}
          onChange={setStudioIntroductionDraft}
        />
      ),
    },
    {
      id: "dance-styles",
      label: "Dance Styles",
      preview: <DanceStyles content={danceStylesDraft} />,
      editor: (
        <DanceStylesEditor
          value={danceStylesDraft}
          onChange={setDanceStylesDraft}
        />
      ),
    },
    {
      id: "instructor",
      label: "Instructor",
      preview: <InstructorSection content={instructorDraft} />,
      editor: (
        <InstructorSectionEditor
          value={instructorDraft}
          onChange={setInstructorDraft}
        />
      ),
    },
    {
      id: "location-contact",
      label: "Location & Contact",
      preview: <LocationContact content={locationContactDraft} />,
      editor: (
        <LocationContactEditor
          value={locationContactDraft}
          onChange={setLocationContactDraft}
        />
      ),
    },
    {
      id: "footer",
      label: "Footer",
      preview: <SiteFooter content={footerDraft} />,
      editor: (
        <SiteFooterEditor value={footerDraft} onChange={setFooterDraft} />
      ),
    },
  ];

  const selectedSection =
    sections.find((section) => section.id === activeSection) ?? sections[0];

  return (
    <div className="min-h-screen bg-background px-4 py-10 text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Admin
          </p>
          <h1 className="text-3xl font-semibold">Content editor</h1>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Select a section to edit its content and preview changes in real
            time.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => setActiveSection(section.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Live preview</h2>
              <div className="mt-4 overflow-hidden rounded-md border border-border">
                {selectedSection.preview}
              </div>
            </div>
          </div>

          {selectedSection.editor}
        </div>
      </div>
    </div>
  );
}
