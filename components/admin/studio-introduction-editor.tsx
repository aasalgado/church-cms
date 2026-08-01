"use client";

import type { StudioIntroductionContent } from "@/content/home-content";

interface StudioIntroductionEditorProps {
  value: StudioIntroductionContent;
  onChange: (next: StudioIntroductionContent) => void;
}

export function StudioIntroductionEditor({
  value,
  onChange,
}: StudioIntroductionEditorProps) {
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
          <span>Enable studio introduction section</span>
        </label>
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="studio-intro-image-src"
        >
          Image path
        </label>
        <input
          id="studio-intro-image-src"
          type="text"
          value={value.image.src}
          onChange={(event) =>
            onChange({
              ...value,
              image: {
                ...value.image,
                src: event.target.value,
              },
            })
          }
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="studio-intro-image-alt"
        >
          Image alt text
        </label>
        <input
          id="studio-intro-image-alt"
          type="text"
          value={value.image.alt}
          onChange={(event) =>
            onChange({
              ...value,
              image: {
                ...value.image,
                alt: event.target.value,
              },
            })
          }
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="studio-intro-badge-value"
        >
          Badge value
        </label>
        <input
          id="studio-intro-badge-value"
          type="text"
          value={value.badge.value}
          onChange={(event) =>
            onChange({
              ...value,
              badge: {
                ...value.badge,
                value: event.target.value,
              },
            })
          }
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="studio-intro-badge-label"
        >
          Badge label
        </label>
        <input
          id="studio-intro-badge-label"
          type="text"
          value={value.badge.label}
          onChange={(event) =>
            onChange({
              ...value,
              badge: {
                ...value.badge,
                label: event.target.value,
              },
            })
          }
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="studio-intro-eyebrow"
        >
          Eyebrow
        </label>
        <input
          id="studio-intro-eyebrow"
          type="text"
          value={value.eyebrow}
          onChange={(event) =>
            onChange({
              ...value,
              eyebrow: event.target.value,
            })
          }
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="studio-intro-headline"
        >
          Headline
        </label>
        <input
          id="studio-intro-headline"
          type="text"
          value={value.headline}
          onChange={(event) =>
            onChange({
              ...value,
              headline: event.target.value,
            })
          }
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="studio-intro-paragraphs"
        >
          Paragraphs
        </label>
        <textarea
          id="studio-intro-paragraphs"
          value={value.paragraphs.join("\n")}
          onChange={(event) =>
            onChange({
              ...value,
              paragraphs: event.target.value
                .split("\n")
                .map((paragraph) => paragraph.trim())
                .filter(Boolean),
            })
          }
          rows={4}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="studio-intro-quote"
        >
          Quote
        </label>
        <textarea
          id="studio-intro-quote"
          value={value.quote}
          onChange={(event) =>
            onChange({
              ...value,
              quote: event.target.value,
            })
          }
          rows={3}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </div>
    </div>
  );
}
