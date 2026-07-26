import { Church } from "lucide-react";
import type { SiteFooterContent } from "@/content/site-content";

interface SiteFooterProps {
  content: SiteFooterContent;
}

export function SiteFooter({ content }: SiteFooterProps) {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Church className="size-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-xl font-semibold">
                {content.brand.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-pretty leading-relaxed text-background/70">
              {content.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-background/90">
              {content.explore.heading}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-background/70">
              {content.explore.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-background/90">
              {content.connect.heading}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-background/70">
              {content.connect.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/15 pt-6 text-center text-sm text-background/60">
          <p>
            &copy; {new Date().getFullYear()} {content.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
