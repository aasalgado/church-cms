"use client";

import type { PastorMessageContent } from "@/content/home-content";

interface PastorMessageEditorProps {
  value: PastorMessageContent;
  onChange: (next: PastorMessageContent) => void;
}

export function PastorMessageEditor({
  value,
  onChange,
}: PastorMessageEditorProps) {
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
          <span>Enable pastor message section</span>
        </label>
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="pastor-image-src"
        >
          Image path
        </label>
        <input
          id="pastor-image-src"
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
          htmlFor="pastor-image-alt"
        >
          Image alt text
        </label>
        <input
          id="pastor-image-alt"
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
          htmlFor="pastor-eyebrow"
        >
          Eyebrow
        </label>
        <input
          id="pastor-eyebrow"
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
          htmlFor="pastor-heading"
        >
          Heading
        </label>
        <input
          id="pastor-heading"
          type="text"
          value={value.heading}
          onChange={(event) =>
            onChange({
              ...value,
              heading: event.target.value,
            })
          }
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="pastor-paragraphs"
        >
          Paragraphs
        </label>
        <textarea
          id="pastor-paragraphs"
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
          htmlFor="pastor-name"
        >
          Pastor name
        </label>
        <input
          id="pastor-name"
          type="text"
          value={value.name}
          onChange={(event) =>
            onChange({
              ...value,
              name: event.target.value,
            })
          }
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="pastor-title"
        >
          Pastor title
        </label>
        <input
          id="pastor-title"
          type="text"
          value={value.title}
          onChange={(event) =>
            onChange({
              ...value,
              title: event.target.value,
            })
          }
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </div>

      <div className="space-y-4 rounded-md border border-border/60 p-4">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <input
              type="checkbox"
              checked={value.cta.enabled}
              onChange={(event) =>
                onChange({
                  ...value,
                  cta: {
                    ...value.cta,
                    enabled: event.target.checked,
                  },
                })
              }
              className="h-4 w-4 rounded border-border"
            />
            <span>Show CTA</span>
          </label>
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="pastor-cta-label"
          >
            CTA label
          </label>
          <input
            id="pastor-cta-label"
            type="text"
            value={value.cta.label}
            onChange={(event) =>
              onChange({
                ...value,
                cta: {
                  ...value.cta,
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
            htmlFor="pastor-cta-href"
          >
            CTA link
          </label>
          <input
            id="pastor-cta-href"
            type="text"
            value={value.cta.href}
            onChange={(event) =>
              onChange({
                ...value,
                cta: {
                  ...value.cta,
                  href: event.target.value,
                },
              })
            }
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
          />
        </div>
      </div>
    </div>
  );
}
