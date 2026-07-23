import { Baby, BookOpen, HandHeart, Heart, Music, Users } from "lucide-react";
import type { MinistriesContent } from "@/content/home-content";

interface MinistriesSectionProps {
  content: MinistriesContent;
}

const ministryIcons = [Baby, Users, BookOpen, Music, HandHeart, Heart];

export function MinistriesSection({ content }: MinistriesSectionProps) {
  if (!content.enabled) {
    return null;
  }

  return (
    <section id="ministries" className="bg-muted py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            {content.heading}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {content.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.ministries.map((ministry, index) => {
            const Icon = ministryIcons[index % ministryIcons.length] ?? Heart;

            return (
              <div
                key={`${ministry.title}-${index}`}
                className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  {ministry.title}
                </h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {ministry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
