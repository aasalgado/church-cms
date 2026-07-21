"use client";

import type { HeroContent } from "@/content/home-content";

interface HeroEditorProps {
  value: HeroContent;
  onChange: (next: HeroContent) => void;
}

export function HeroEditor({ value, onChange }: HeroEditorProps) {
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
          <span>Enable hero section</span>
        </label>
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="hero-image-src"
        >
          Image path
        </label>
        <input
          id="hero-image-src"
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
          htmlFor="hero-image-alt"
        >
          Image alt text
        </label>
        <input
          id="hero-image-alt"
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
          htmlFor="hero-preheading"
        >
          Pre-heading
        </label>
        <input
          id="hero-preheading"
          type="text"
          value={value.preHeading}
          onChange={(event) =>
            onChange({
              ...value,
              preHeading: event.target.value,
            })
          }
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="hero-headline"
        >
          Headline
        </label>
        <input
          id="hero-headline"
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
          htmlFor="hero-copy"
        >
          Body copy
        </label>
        <textarea
          id="hero-copy"
          value={value.copy}
          onChange={(event) =>
            onChange({
              ...value,
              copy: event.target.value,
            })
          }
          rows={4}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </div>

      <div className="space-y-4 rounded-md border border-border/60 p-4">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <input
              type="checkbox"
              checked={value.primaryCta.enabled}
              onChange={(event) =>
                onChange({
                  ...value,
                  primaryCta: {
                    ...value.primaryCta,
                    enabled: event.target.checked,
                  },
                })
              }
              className="h-4 w-4 rounded border-border"
            />
            <span>Show primary CTA</span>
          </label>
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="hero-primary-label"
          >
            Primary CTA label
          </label>
          <input
            id="hero-primary-label"
            type="text"
            value={value.primaryCta.label}
            onChange={(event) =>
              onChange({
                ...value,
                primaryCta: {
                  ...value.primaryCta,
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
            htmlFor="hero-primary-href"
          >
            Primary CTA link
          </label>
          <input
            id="hero-primary-href"
            type="text"
            value={value.primaryCta.href}
            onChange={(event) =>
              onChange({
                ...value,
                primaryCta: {
                  ...value.primaryCta,
                  href: event.target.value,
                },
              })
            }
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
          />
        </div>
      </div>

      <div className="space-y-4 rounded-md border border-border/60 p-4">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <input
              type="checkbox"
              checked={value.secondaryCta.enabled}
              onChange={(event) =>
                onChange({
                  ...value,
                  secondaryCta: {
                    ...value.secondaryCta,
                    enabled: event.target.checked,
                  },
                })
              }
              className="h-4 w-4 rounded border-border"
            />
            <span>Show secondary CTA</span>
          </label>
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="hero-secondary-label"
          >
            Secondary CTA label
          </label>
          <input
            id="hero-secondary-label"
            type="text"
            value={value.secondaryCta.label}
            onChange={(event) =>
              onChange({
                ...value,
                secondaryCta: {
                  ...value.secondaryCta,
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
            htmlFor="hero-secondary-href"
          >
            Secondary CTA link
          </label>
          <input
            id="hero-secondary-href"
            type="text"
            value={value.secondaryCta.href}
            onChange={(event) =>
              onChange({
                ...value,
                secondaryCta: {
                  ...value.secondaryCta,
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
