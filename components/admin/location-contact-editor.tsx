"use client";

import type { LocationContactContent } from "@/content/home-content";

interface LocationContactEditorProps {
  value: LocationContactContent;
  onChange: (next: LocationContactContent) => void;
}

export function LocationContactEditor({
  value,
  onChange,
}: LocationContactEditorProps) {
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
          <span>Enable location & contact section</span>
        </label>
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="location-contact-eyebrow"
        >
          Eyebrow
        </label>
        <input
          id="location-contact-eyebrow"
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
          htmlFor="location-contact-heading"
        >
          Heading
        </label>
        <input
          id="location-contact-heading"
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
          htmlFor="location-contact-intro"
        >
          Intro
        </label>
        <textarea
          id="location-contact-intro"
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
        {value.details.map((detail, index) => (
          <div
            key={`${detail.label}-${index}`}
            className="rounded-md border border-border/60 p-4"
          >
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor={`location-contact-detail-label-${index}`}
              >
                Detail label {index + 1}
              </label>
              <input
                id={`location-contact-detail-label-${index}`}
                type="text"
                value={detail.label}
                onChange={(event) =>
                  onChange({
                    ...value,
                    details: value.details.map((item, itemIndex) =>
                      itemIndex === index
                        ? { ...item, label: event.target.value }
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
                htmlFor={`location-contact-detail-value-${index}`}
              >
                Detail value {index + 1}
              </label>
              <input
                id={`location-contact-detail-value-${index}`}
                type="text"
                value={detail.value}
                onChange={(event) =>
                  onChange({
                    ...value,
                    details: value.details.map((item, itemIndex) =>
                      itemIndex === index
                        ? { ...item, value: event.target.value }
                        : item,
                    ),
                  })
                }
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 rounded-md border border-border/60 p-4">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <input
              type="checkbox"
              checked={value.button.enabled}
              onChange={(event) =>
                onChange({
                  ...value,
                  button: {
                    ...value.button,
                    enabled: event.target.checked,
                  },
                })
              }
              className="h-4 w-4 rounded border-border"
            />
            <span>Show button</span>
          </label>
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="location-contact-button-label"
          >
            Button label
          </label>
          <input
            id="location-contact-button-label"
            type="text"
            value={value.button.label}
            onChange={(event) =>
              onChange({
                ...value,
                button: {
                  ...value.button,
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
            htmlFor="location-contact-button-href"
          >
            Button link
          </label>
          <input
            id="location-contact-button-href"
            type="text"
            value={value.button.href}
            onChange={(event) =>
              onChange({
                ...value,
                button: {
                  ...value.button,
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
