"use client";

import { type ReactNode, useState } from "react";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { AnnouncementEditor } from "@/components/admin/announcement-editor";
import { HeroEditor } from "@/components/admin/hero-editor";
import { MinistriesEditor } from "@/components/admin/ministries-editor";
import { PastorMessageEditor } from "@/components/admin/pastor-message-editor";
import { WelcomeEditor } from "@/components/admin/welcome-editor";
import { HeroSection } from "@/components/hero-section";
import { MinistriesSection } from "@/components/ministries-section";
import { PastorMessage } from "@/components/pastor-message";
import { WelcomeMessage } from "@/components/welcome-message";
import {
  announcementContent,
  heroContent,
  ministriesContent,
  pastorMessageContent,
  welcomeMessageContent,
} from "@/content/home-content";

type AdminSectionId =
  | "announcement"
  | "hero"
  | "welcome"
  | "ministries"
  | "pastor";

interface AdminSectionConfig {
  id: AdminSectionId;
  label: string;
  preview: ReactNode;
  editor: ReactNode;
}

export default function AdminPage() {
  const [activeSection, setActiveSection] =
    useState<AdminSectionId>("announcement");
  const [announcementDraft, setAnnouncementDraft] =
    useState(announcementContent);
  const [heroDraft, setHeroDraft] = useState(heroContent);
  const [welcomeDraft, setWelcomeDraft] = useState(welcomeMessageContent);
  const [ministriesDraft, setMinistriesDraft] = useState(ministriesContent);
  const [pastorDraft, setPastorDraft] = useState(pastorMessageContent);

  const sections: AdminSectionConfig[] = [
    {
      id: "announcement",
      label: "Announcement",
      preview: <AnnouncementBanner content={announcementDraft} />,
      editor: (
        <AnnouncementEditor
          value={announcementDraft}
          onChange={setAnnouncementDraft}
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
      id: "welcome",
      label: "Welcome",
      preview: <WelcomeMessage content={welcomeDraft} />,
      editor: <WelcomeEditor value={welcomeDraft} onChange={setWelcomeDraft} />,
    },
    {
      id: "ministries",
      label: "Ministries",
      preview: <MinistriesSection content={ministriesDraft} />,
      editor: (
        <MinistriesEditor
          value={ministriesDraft}
          onChange={setMinistriesDraft}
        />
      ),
    },
    {
      id: "pastor",
      label: "Pastor Message",
      preview: <PastorMessage content={pastorDraft} />,
      editor: (
        <PastorMessageEditor value={pastorDraft} onChange={setPastorDraft} />
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
            Switch between announcement and hero content and preview the changes
            locally.
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
