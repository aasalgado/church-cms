"use client";

import { useState } from "react";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { AnnouncementEditor } from "@/components/admin/announcement-editor";
import { HeroEditor } from "@/components/admin/hero-editor";
import { HeroSection } from "@/components/hero-section";
import { announcementContent, heroContent } from "@/content/home-content";

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState<"announcement" | "hero">(
    "announcement",
  );
  const [announcementDraft, setAnnouncementDraft] =
    useState(announcementContent);
  const [heroDraft, setHeroDraft] = useState(heroContent);

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
          <button
            type="button"
            onClick={() => setActiveSection("announcement")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeSection === "announcement"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            Announcement
          </button>
          <button
            type="button"
            onClick={() => setActiveSection("hero")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeSection === "hero"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            Hero
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Live preview</h2>
              <div className="mt-4 overflow-hidden rounded-md border border-border">
                {activeSection === "announcement" ? (
                  <AnnouncementBanner content={announcementDraft} />
                ) : (
                  <HeroSection content={heroDraft} />
                )}
              </div>
            </div>
          </div>

          {activeSection === "announcement" ? (
            <AnnouncementEditor
              value={announcementDraft}
              onChange={setAnnouncementDraft}
            />
          ) : (
            <HeroEditor value={heroDraft} onChange={setHeroDraft} />
          )}
        </div>
      </div>
    </div>
  );
}
