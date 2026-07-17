"use client";

import { useState } from "react";
import { Menu, X, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site-content";

export function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href={siteContent.brand.href} className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Church className="size-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
            {siteContent.brand.name}
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {siteContent.navigation.map((link) => (
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
            render={<a href={siteContent.primaryCta.href} />}
            className="rounded-full px-6"
          >
            {siteContent.primaryCta.label}
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
            {siteContent.navigation.map((link) => (
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
                  href={siteContent.primaryCta.href}
                  onClick={() => setOpen(false)}
                />
              }
              className="mt-2 w-full rounded-full"
            >
              {siteContent.primaryCta.label}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
