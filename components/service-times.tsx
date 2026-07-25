import { Clock, MapPin, Users } from "lucide-react";
import type { ServiceTimesContent } from "@/content/home-content";

interface ServiceTimesProps {
  content: ServiceTimesContent;
}

const serviceIcons = [Clock, Users, MapPin];

export function ServiceTimes({ content }: ServiceTimesProps) {
  if (!content.enabled) {
    return null;
  }

  return (
    <section id="services" className="bg-secondary py-20 sm:py-24">
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
          {content.services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length] ?? Clock;

            return (
              <div
                key={`${service.title}-${index}`}
                className="flex flex-col items-start rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-1 text-lg font-medium text-primary">
                  {service.time}
                </p>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
