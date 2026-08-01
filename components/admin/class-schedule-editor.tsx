"use client";

import type { ClassScheduleContent } from "@/content/home-content";

interface ClassScheduleEditorProps {
  value: ClassScheduleContent;
  onChange: (next: ClassScheduleContent) => void;
}

export function ClassScheduleEditor({
  value,
  onChange,
}: ClassScheduleEditorProps) {
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
          <span>Enable class schedule section</span>
        </label>
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="class-schedule-eyebrow"
        >
          Eyebrow
        </label>
        <input
          id="class-schedule-eyebrow"
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
          htmlFor="class-schedule-heading"
        >
          Heading
        </label>
        <input
          id="class-schedule-heading"
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
          htmlFor="class-schedule-intro"
        >
          Intro
        </label>
        <textarea
          id="class-schedule-intro"
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
        {value.classes.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="rounded-md border border-border/60 p-4"
          >
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor={`class-schedule-title-${index}`}
              >
                Class title {index + 1}
              </label>
              <input
                id={`class-schedule-title-${index}`}
                type="text"
                value={item.title}
                onChange={(event) =>
                  onChange({
                    ...value,
                    classes: value.classes.map((c, i) =>
                      i === index ? { ...c, title: event.target.value } : c,
                    ),
                  })
                }
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              />
            </div>

            <div className="mt-3 space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor={`class-schedule-time-${index}`}
              >
                Time {index + 1}
              </label>
              <input
                id={`class-schedule-time-${index}`}
                type="text"
                value={item.time}
                onChange={(event) =>
                  onChange({
                    ...value,
                    classes: value.classes.map((c, i) =>
                      i === index ? { ...c, time: event.target.value } : c,
                    ),
                  })
                }
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              />
            </div>

            <div className="mt-3 space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor={`class-schedule-description-${index}`}
              >
                Description {index + 1}
              </label>
              <textarea
                id={`class-schedule-description-${index}`}
                value={item.description}
                onChange={(event) =>
                  onChange({
                    ...value,
                    classes: value.classes.map((c, i) =>
                      i === index
                        ? { ...c, description: event.target.value }
                        : c,
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
