export function WelcomeMessage() {
  return (
    <section id="welcome" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative">
          <img
            src="/welcome-gathering.png"
            alt="Members of the Grace Hollow community greeting one another after a service"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
          />
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-primary px-6 py-5 text-primary-foreground shadow-lg sm:block">
            <p className="font-serif text-3xl font-semibold">25+</p>
            <p className="text-sm opacity-85">Years serving our town</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Welcome
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            You&apos;re not a stranger here. You&apos;re family.
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Whether you&apos;ve been walking with faith your whole life or
              you&apos;re simply curious, Grace Hollow is a place where questions
              are welcome and people are loved exactly as they are.
            </p>
            <p>
              We believe church should feel less like an obligation and more
              like coming home — a place of warmth, honesty, and grace. We&apos;d
              be honored to share the journey with you.
            </p>
          </div>
          <p className="mt-8 font-serif text-lg italic text-foreground">
            &ldquo;Come to me, all you who are weary, and I will give you rest.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
