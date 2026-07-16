import { Baby, BookOpen, HandHeart, Heart, Music, Users } from "lucide-react";
import { ministriesContent } from "@/content/home-content";

const ministries = [
  {
    icon: Baby,
    title: ministriesContent.ministries[0]?.title ?? "",
    description: ministriesContent.ministries[0]?.description ?? "",
  },
  {
    icon: Users,
    title: ministriesContent.ministries[1]?.title ?? "",
    description: ministriesContent.ministries[1]?.description ?? "",
  },
  {
    icon: BookOpen,
    title: ministriesContent.ministries[2]?.title ?? "",
    description: ministriesContent.ministries[2]?.description ?? "",
  },
  {
    icon: Music,
    title: ministriesContent.ministries[3]?.title ?? "",
    description: ministriesContent.ministries[3]?.description ?? "",
  },
  {
    icon: HandHeart,
    title: ministriesContent.ministries[4]?.title ?? "",
    description: ministriesContent.ministries[4]?.description ?? "",
  },
  {
    icon: Heart,
    title: ministriesContent.ministries[5]?.title ?? "",
    description: ministriesContent.ministries[5]?.description ?? "",
  },
];

export function MinistriesSection() {
  if (!ministriesContent.enabled) {
    return null;
  }

  return (
    <section id="ministries" className="bg-muted py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {ministriesContent.eyebrow}
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            {ministriesContent.heading}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {ministriesContent.intro}
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
  );
}
