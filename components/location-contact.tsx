import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LocationContactContent } from "@/content/home-content";

interface LocationContactProps {
  content: LocationContactContent;
}

const detailIcons = [MapPin, Clock, Phone, Mail];

export function LocationContact({ content }: LocationContactProps) {
  if (!content.enabled) {
    return null;
  }

  return (
    <section id="contact" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              {content.eyebrow}
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              {content.heading}
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {content.intro}
            </p>

            <ul className="mt-8 space-y-5">
              {content.details.map((item, index) => {
                const Icon = detailIcons[index % detailIcons.length] ?? MapPin;

                return (
                  <li key={`${item.label}-${index}`} className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-pretty font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            {content.button.enabled && (
              <Button
                nativeButton={false}
                render={
                  <a
                    href={content.button.href}
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                size="lg"
                className="mt-9 rounded-full px-8"
              >
                {content.button.label}
              </Button>
            )}
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
            <iframe
              title="Map showing the location of RhythmAddict Dance Studio"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.1!2d-117.594447!3d34.0978237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c335bc808e8acd%3A0xe8cf41abce93ed50!2sRhythmAddict%20Dance%20Studio!5e0!3m2!1sen!2sus!4v1"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
