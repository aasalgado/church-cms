"use client";

import type { DanceStylesContent } from "@/content/home-content";

interface DanceStylesEditorProps {
  value: DanceStylesContent;
  onChange: (next: DanceStylesContent) => void;
}

export function DanceStylesEditor({ value, onChange }: DanceStylesEditorProps) {
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
          <span>Enable dance styles section</span>
        </label>
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="dance-styles-eyebrow"
        >
          Eyebrow
        </label>
        <input
          id="dance-styles-eyebrow"
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
          htmlFor="dance-styles-heading"
        >
          Heading
        </label>
        <input
          id="dance-styles-heading"
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
          htmlFor="dance-styles-intro"
        >
          Intro
        </label>
        <textarea
          id="dance-styles-intro"
          value={value.intro}
          onChange={(event) =>
            onChange({
              ...value,
              intro: event.target.value,
            })
          }
          rows={3}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </div>

      <div className="space-y-3">
        {value.styles.map((style, index) => (
          <div
            key={`${style.title}-${index}`}
            className="rounded-md border border-border/60 p-4"
          >
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor={`dance-styles-title-${index}`}
              >
                Style title {index + 1}
              </label>
              <input
                id={`dance-styles-title-${index}`}
                type="text"
                value={style.title}
                onChange={(event) =>
                  onChange({
                    ...value,
                    styles: value.styles.map((s, i) =>
                      i === index ? { ...s, title: event.target.value } : s,
                    ),
                  })
                }
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              />
            </div>

            <div className="mt-3 space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor={`dance-styles-description-${index}`}
              >
                Description {index + 1}
              </label>
              <textarea
                id={`dance-styles-description-${index}`}
                value={style.description}
                onChange={(event) =>
                  onChange({
                    ...value,
                    styles: value.styles.map((s, i) =>
                      i === index
                        ? { ...s, description: event.target.value }
                        : s,
                    ),
                  })
                }
                rows={3}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
