"use client";

import type { SiteFooterContent } from "@/content/site-content";

interface SiteFooterEditorProps {
  value: SiteFooterContent;
  onChange: (next: SiteFooterContent) => void;
}

export function SiteFooterEditor({ value, onChange }: SiteFooterEditorProps) {
  return (
    <div className="space-y-4 rounded-lg border border-border bg-card p-6 shadow-sm">
      <div className="space-y-4 rounded-md border border-border/60 p-4">
        <p className="text-sm font-medium text-foreground">Brand</p>

        <div className="space-y-2">
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="footer-brand-name"
          >
            Brand name
          </label>
          <input
            id="footer-brand-name"
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
            htmlFor="footer-brand-href"
          >
            Brand link
          </label>
          <input
            id="footer-brand-href"
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

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="footer-description"
        >
          Description
        </label>
        <textarea
          id="footer-description"
          value={value.description}
          onChange={(event) =>
            onChange({ ...value, description: event.target.value })
          }
          rows={3}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </div>

      <div className="space-y-3">
        <div className="space-y-2">
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="footer-explore-heading"
          >
            Explore heading
          </label>
          <input
            id="footer-explore-heading"
            type="text"
            value={value.explore.heading}
            onChange={(event) =>
              onChange({
                ...value,
                explore: { ...value.explore, heading: event.target.value },
              })
            }
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
          />
        </div>

        {value.explore.links.map((link, index) => (
          <div key={index} className="rounded-md border border-border/60 p-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor={`footer-explore-label-${index}`}
              >
                Explore link {index + 1} label
              </label>
              <input
                id={`footer-explore-label-${index}`}
                type="text"
                value={link.label}
                onChange={(event) =>
                  onChange({
                    ...value,
                    explore: {
                      ...value.explore,
                      links: value.explore.links.map((item, i) =>
                        i === index
                          ? { ...item, label: event.target.value }
                          : item,
                      ),
                    },
                  })
                }
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              />
            </div>

            <div className="mt-3 space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor={`footer-explore-href-${index}`}
              >
                Explore link {index + 1} href
              </label>
              <input
                id={`footer-explore-href-${index}`}
                type="text"
                value={link.href}
                onChange={(event) =>
                  onChange({
                    ...value,
                    explore: {
                      ...value.explore,
                      links: value.explore.links.map((item, i) =>
                        i === index
                          ? { ...item, href: event.target.value }
                          : item,
                      ),
                    },
                  })
                }
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <div className="space-y-2">
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="footer-connect-heading"
          >
            Connect heading
          </label>
          <input
            id="footer-connect-heading"
            type="text"
            value={value.connect.heading}
            onChange={(event) =>
              onChange({
                ...value,
                connect: { ...value.connect, heading: event.target.value },
              })
            }
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
          />
        </div>

        {value.connect.items.map((item, index) => (
          <div key={index} className="space-y-2">
            <label
              className="text-sm font-medium text-foreground"
              htmlFor={`footer-connect-item-${index}`}
            >
              Connect item {index + 1}
            </label>
            <input
              id={`footer-connect-item-${index}`}
              type="text"
              value={item}
              onChange={(event) =>
                onChange({
                  ...value,
                  connect: {
                    ...value.connect,
                    items: value.connect.items.map((existing, i) =>
                      i === index ? event.target.value : existing,
                    ),
                  },
                })
              }
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
            />
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="footer-copyright"
        >
          Copyright
        </label>
        <input
          id="footer-copyright"
          type="text"
          value={value.copyright}
          onChange={(event) =>
            onChange({ ...value, copyright: event.target.value })
          }
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </div>
    </div>
  );
}
