import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const details = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "142 Maple Grove Lane, Cedar Falls, IA 50613",
  },
  {
    icon: Clock,
    label: "Sundays",
    value: "9:00 AM & 11:00 AM",
  },
  {
    icon: Phone,
    label: "Call",
    value: "(319) 555-0142",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@gracehollow.church",
  },
]

export function LocationContact() {
  return (
    <section id="contact" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Plan Your Visit
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              We&apos;d Love to Meet You
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Have a question or planning to join us for the first time? Reach
              out — we&apos;ll save you a seat and help you feel right at home.
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
                    <p className="text-pretty font-medium text-foreground">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Button
              nativeButton={false}
              render={<a href="https://maps.google.com" target="_blank" rel="noreferrer" />}
              size="lg"
              className="mt-9 rounded-full px-8"
            >
              Get Directions
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
  )
}
