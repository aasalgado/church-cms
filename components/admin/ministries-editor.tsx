"use client";

import type { MinistriesContent } from "@/content/home-content";

interface MinistriesEditorProps {
  value: MinistriesContent;
  onChange: (next: MinistriesContent) => void;
}

export function MinistriesEditor({ value, onChange }: MinistriesEditorProps) {
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
          <span>Enable ministries section</span>
        </label>
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="ministries-eyebrow"
        >
          Eyebrow
        </label>
        <input
          id="ministries-eyebrow"
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
          htmlFor="ministries-heading"
        >
          Heading
        </label>
        <input
          id="ministries-heading"
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
          htmlFor="ministries-intro"
        >
          Intro
        </label>
        <textarea
          id="ministries-intro"
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
        {value.ministries.map((ministry, index) => (
          <div
            key={`${ministry.title}-${index}`}
            className="rounded-md border border-border/60 p-4"
          >
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor={`ministries-title-${index}`}
              >
                Ministry title {index + 1}
              </label>
              <input
                id={`ministries-title-${index}`}
                type="text"
                value={ministry.title}
                onChange={(event) =>
                  onChange({
                    ...value,
                    ministries: value.ministries.map((item, itemIndex) =>
                      itemIndex === index
                        ? { ...item, title: event.target.value }
                        : item,
                    ),
                  })
                }
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              />
            </div>

            <div className="mt-3 space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor={`ministries-description-${index}`}
              >
                Description {index + 1}
              </label>
              <textarea
                id={`ministries-description-${index}`}
                value={ministry.description}
                onChange={(event) =>
                  onChange({
                    ...value,
                    ministries: value.ministries.map((item, itemIndex) =>
                      itemIndex === index
                        ? { ...item, description: event.target.value }
                        : item,
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
