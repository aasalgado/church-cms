import { welcomeMessageContent } from "@/content/home-content";

export function WelcomeMessage() {
  if (!welcomeMessageContent.enabled) {
    return null;
  }

  return (
    <section id="welcome" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative">
          <img
            src={welcomeMessageContent.image.src}
            alt={welcomeMessageContent.image.alt}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
          />
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-primary px-6 py-5 text-primary-foreground shadow-lg sm:block">
            <p className="font-serif text-3xl font-semibold">
              {welcomeMessageContent.badge.value}
            </p>
            <p className="text-sm opacity-85">
              {welcomeMessageContent.badge.label}
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {welcomeMessageContent.eyebrow}
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            {welcomeMessageContent.headline}
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            {welcomeMessageContent.paragraphs.map((paragraph, index) => (
              <p key={`${paragraph}-${index}`}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8 font-serif text-lg italic text-foreground">
            &ldquo;{welcomeMessageContent.quote}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
