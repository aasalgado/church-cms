import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { locationContactContent } from "@/content/home-content";

const details = [
  {
    icon: MapPin,
    label: locationContactContent.details[0]?.label ?? "",
    value: locationContactContent.details[0]?.value ?? "",
  },
  {
    icon: Clock,
    label: locationContactContent.details[1]?.label ?? "",
    value: locationContactContent.details[1]?.value ?? "",
  },
  {
    icon: Phone,
    label: locationContactContent.details[2]?.label ?? "",
    value: locationContactContent.details[2]?.value ?? "",
  },
  {
    icon: Mail,
    label: locationContactContent.details[3]?.label ?? "",
    value: locationContactContent.details[3]?.value ?? "",
  },
];

export function LocationContact() {
  if (!locationContactContent.enabled) {
    return null;
  }

  return (
    <section id="contact" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              {locationContactContent.eyebrow}
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              {locationContactContent.heading}
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {locationContactContent.intro}
            </p>

            <ul className="mt-8 space-y-5">
              {details.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <item.icon className="size-5" aria-hidden="true" />
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
              ))}
            </ul>

            <Button
              nativeButton={false}
              render={
                <a
                  href={locationContactContent.button.href}
                  target="_blank"
                  rel="noreferrer"
                />
              }
              size="lg"
              className="mt-9 rounded-full px-8"
            >
              {locationContactContent.button.label}
            </Button>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
            <iframe
              title="Map showing the location of Grace Hollow Church"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-92.46%2C42.49%2C-92.40%2C42.54&layer=mapnik"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
