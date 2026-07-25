"use client";

import type { ServiceTimesContent } from "@/content/home-content";

interface ServiceTimesEditorProps {
  value: ServiceTimesContent;
  onChange: (next: ServiceTimesContent) => void;
}

export function ServiceTimesEditor({
  value,
  onChange,
}: ServiceTimesEditorProps) {
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
          <span>Enable service times section</span>
        </label>
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="service-times-eyebrow"
        >
          Eyebrow
        </label>
        <input
          id="service-times-eyebrow"
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
          htmlFor="service-times-heading"
        >
          Heading
        </label>
        <input
          id="service-times-heading"
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
          htmlFor="service-times-intro"
        >
          Intro
        </label>
        <textarea
          id="service-times-intro"
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
        {value.services.map((service, index) => (
          <div
            key={`${service.title}-${index}`}
            className="rounded-md border border-border/60 p-4"
          >
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor={`service-times-title-${index}`}
              >
                Service title {index + 1}
              </label>
              <input
                id={`service-times-title-${index}`}
                type="text"
                value={service.title}
                onChange={(event) =>
                  onChange({
                    ...value,
                    services: value.services.map((item, itemIndex) =>
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
                htmlFor={`service-times-time-${index}`}
              >
                Time {index + 1}
              </label>
              <input
                id={`service-times-time-${index}`}
                type="text"
                value={service.time}
                onChange={(event) =>
                  onChange({
                    ...value,
                    services: value.services.map((item, itemIndex) =>
                      itemIndex === index
                        ? { ...item, time: event.target.value }
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
                htmlFor={`service-times-description-${index}`}
              >
                Description {index + 1}
              </label>
              <textarea
                id={`service-times-description-${index}`}
                value={service.description}
                onChange={(event) =>
                  onChange({
                    ...value,
                    services: value.services.map((item, itemIndex) =>
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
