import { Clock, MapPin, Users } from "lucide-react";
import { serviceTimesContent } from "@/content/home-content";

const services = [
  {
    icon: Clock,
    title: serviceTimesContent.services[0]?.title ?? "",
    time: serviceTimesContent.services[0]?.time ?? "",
    description: serviceTimesContent.services[0]?.description ?? "",
  },
  {
    icon: Users,
    title: serviceTimesContent.services[1]?.title ?? "",
    time: serviceTimesContent.services[1]?.time ?? "",
    description: serviceTimesContent.services[1]?.description ?? "",
  },
  {
    icon: MapPin,
    title: serviceTimesContent.services[2]?.title ?? "",
    time: serviceTimesContent.services[2]?.time ?? "",
    description: serviceTimesContent.services[2]?.description ?? "",
  },
];

export function ServiceTimes() {
  if (!serviceTimesContent.enabled) {
    return null;
  }

  return (
    <section id="services" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {serviceTimesContent.eyebrow}
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            {serviceTimesContent.heading}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {serviceTimesContent.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-start rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <service.icon className="size-6" aria-hidden="true" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
