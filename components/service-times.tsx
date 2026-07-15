import { Clock, MapPin, Users } from "lucide-react"

const services = [
  {
    icon: Clock,
    title: "Sunday Worship",
    time: "9:00 & 11:00 AM",
    description: "Contemporary worship, teaching, and community for all ages.",
  },
  {
    icon: Users,
    title: "Wednesday Gathering",
    time: "7:00 PM",
    description: "Midweek prayer, small groups, and Bible study.",
  },
  {
    icon: MapPin,
    title: "In Person & Online",
    time: "Every Week",
    description: "Join us at the chapel or stream the service live from home.",
  },
]

export function ServiceTimes() {
  return (
    <section id="services" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Gather With Us
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Service Times
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Come as you are. Our doors open early so you can grab a coffee and
            settle in before worship begins.
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
              <p className="mt-1 text-lg font-medium text-primary">{service.time}</p>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
