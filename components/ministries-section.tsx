import { Baby, BookOpen, HandHeart, Heart, Music, Users } from "lucide-react"

const ministries = [
  {
    icon: Baby,
    title: "Kids & Nursery",
    description: "A safe, joyful space where children learn and grow in faith.",
  },
  {
    icon: Users,
    title: "Youth Group",
    description: "Friendship, fun, and faith for students in grades 6–12.",
  },
  {
    icon: BookOpen,
    title: "Small Groups",
    description: "Connect deeply through weekly gatherings in homes near you.",
  },
  {
    icon: Music,
    title: "Worship & Arts",
    description: "Use your gifts in music, song, and creative expression.",
  },
  {
    icon: HandHeart,
    title: "Outreach & Service",
    description: "Love our neighbors by serving the city and those in need.",
  },
  {
    icon: Heart,
    title: "Care & Prayer",
    description: "Walk through life's seasons supported in prayer and care.",
  },
]

export function MinistriesSection() {
  return (
    <section id="ministries" className="bg-muted py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Get Involved
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Ministries For Every Season of Life
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            There&apos;s a place for you to belong, grow, and make a difference.
            Explore the many ways to connect at Grace Hollow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry) => (
            <div
              key={ministry.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <ministry.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                {ministry.title}
              </h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                {ministry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
