"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SiteContent } from "@/content/site-content";

interface SiteNavbarProps {
  content: SiteContent;
}

export function SiteNavbar({ content }: SiteNavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href={content.brand.href} aria-label="RhythmAddict Dance Studio">
          <img
            src="/branding/logo/rythm-addict-logo.png"
            alt="RhythmAddict Dance Studio"
            className="h-16 w-auto object-contain"
          />
        </a>

        <nav
          className="hidden items-center gap-4 md:flex lg:gap-8"
          aria-label="Main navigation"
        >
          {content.navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            nativeButton={false}
            render={<a href={content.primaryCta.href} />}
            className="rounded-full px-4 lg:px-6"
          >
            {content.primaryCta.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4"
            aria-label="Mobile navigation"
          >
            {content.navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <Button
              nativeButton={false}
              render={
                <a
                  href={content.primaryCta.href}
                  onClick={() => setOpen(false)}
                />
              }
              className="mt-2 w-full rounded-full"
            >
              {content.primaryCta.label}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
