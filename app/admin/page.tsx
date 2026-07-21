"use client";

import { useState } from "react";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { AnnouncementEditor } from "@/components/admin/announcement-editor";
import { announcementContent } from "@/content/home-content";

export default function AdminPage() {
  const [draft, setDraft] = useState(announcementContent);

  return (
    <div className="min-h-screen bg-background px-4 py-10 text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Admin
          </p>
          <h1 className="text-3xl font-semibold">Announcement editor</h1>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Edit the announcement banner locally and preview the changes
            instantly.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Live preview</h2>
              <div className="mt-4 overflow-hidden rounded-md border border-border">
                <AnnouncementBanner content={draft} />
              </div>
            </div>
          </div>

          <AnnouncementEditor value={draft} onChange={setDraft} />
        </div>
      </div>
    </div>
  );
}
