"use client";

import type { EventBannerContent } from "@/content/home-content";

interface EventBannerEditorProps {
  value: EventBannerContent;
  onChange: (next: EventBannerContent) => void;
}

export function EventBannerEditor({
  value,
  onChange,
}: EventBannerEditorProps) {
  return (
    <div className="space-y-4 rounded-lg border border-border bg-card p-6 shadow-sm">
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-foreground">
          <input
            type="checkbox"
            checked={value.enabled}
            onChange={(event) =>
              onChange({
                ...value,
                enabled: event.target.checked,
              })
            }
            className="h-4 w-4 rounded border-border"
          />
          <span>Enable event banner</span>
        </label>
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="event-banner-title"
        >
          Title
        </label>
        <input
          id="event-banner-title"
          type="text"
          value={value.title}
          onChange={(event) =>
            onChange({ ...value, title: event.target.value })
          }
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="event-banner-message"
        >
          Message
        </label>
        <textarea
          id="event-banner-message"
          value={value.message}
          onChange={(event) =>
            onChange({ ...value, message: event.target.value })
          }
          rows={3}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </div>
    </div>
  );
}
