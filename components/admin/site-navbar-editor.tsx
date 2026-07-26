"use client";

import type { SiteContent } from "@/content/site-content";

interface SiteNavbarEditorProps {
  value: SiteContent;
  onChange: (next: SiteContent) => void;
}

export function SiteNavbarEditor({ value, onChange }: SiteNavbarEditorProps) {
  return (
    <div className="space-y-4 rounded-lg border border-border bg-card p-6 shadow-sm">
      <div className="space-y-4 rounded-md border border-border/60 p-4">
        <p className="text-sm font-medium text-foreground">Brand</p>

        <div className="space-y-2">
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="navbar-brand-name"
          >
            Brand name
          </label>
          <input
            id="navbar-brand-name"
            type="text"
            value={value.brand.name}
            onChange={(event) =>
              onChange({
                ...value,
                brand: { ...value.brand, name: event.target.value },
              })
            }
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="navbar-brand-href"
          >
            Brand link
          </label>
          <input
            id="navbar-brand-href"
            type="text"
            value={value.brand.href}
            onChange={(event) =>
              onChange({
                ...value,
                brand: { ...value.brand, href: event.target.value },
              })
            }
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
          />
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-foreground">Navigation links</p>
        {value.navigation.map((link, index) => (
          <div key={index} className="rounded-md border border-border/60 p-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor={`navbar-nav-label-${index}`}
              >
                Link {index + 1} label
              </label>
              <input
                id={`navbar-nav-label-${index}`}
                type="text"
                value={link.label}
                onChange={(event) =>
                  onChange({
                    ...value,
                    navigation: value.navigation.map((item, i) =>
                      i === index
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
                htmlFor={`navbar-nav-href-${index}`}
              >
                Link {index + 1} href
              </label>
              <input
                id={`navbar-nav-href-${index}`}
                type="text"
                value={link.href}
                onChange={(event) =>
                  onChange({
                    ...value,
                    navigation: value.navigation.map((item, i) =>
                      i === index
                        ? { ...item, href: event.target.value }
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
        <p className="text-sm font-medium text-foreground">Primary CTA</p>

        <div className="space-y-2">
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="navbar-cta-label"
          >
            CTA label
          </label>
          <input
            id="navbar-cta-label"
            type="text"
            value={value.primaryCta.label}
            onChange={(event) =>
              onChange({
                ...value,
                primaryCta: { ...value.primaryCta, label: event.target.value },
              })
            }
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="navbar-cta-href"
          >
            CTA link
          </label>
          <input
            id="navbar-cta-href"
            type="text"
            value={value.primaryCta.href}
            onChange={(event) =>
              onChange({
                ...value,
                primaryCta: { ...value.primaryCta, href: event.target.value },
              })
            }
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
          />
        </div>
      </div>
    </div>
  );
}
