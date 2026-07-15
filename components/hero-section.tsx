import { Button } from "@/components/ui/button"
import { heroContent } from "@/content/home-content"

export function HeroSection() {
  if (!heroContent.enabled) {
    return null
  }

  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img
        src={heroContent.image.src}
        alt={heroContent.image.alt}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-foreground/65 via-foreground/45 to-foreground/65"
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-[88vh] max-w-4xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-background/80">
          {heroContent.preHeading}
        </p>
        <h1 className="text-balance font-serif text-4xl font-semibold leading-tight text-background sm:text-5xl md:text-6xl lg:text-7xl">
          {heroContent.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-background/85 sm:text-lg">
          {heroContent.copy}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          {heroContent.primaryCta.enabled && (
            <Button nativeButton={false} render={<a href={heroContent.primaryCta.href} />} size="lg" className="rounded-full px-8 text-base">
              {heroContent.primaryCta.label}
            </Button>
          )}
          {heroContent.secondaryCta.enabled && (
            <Button
              nativeButton={false}
              render={<a href={heroContent.secondaryCta.href} />}
              size="lg"
              variant="outline"
              className="rounded-full border-background/40 bg-transparent px-8 text-base text-background hover:bg-background/10 hover:text-background"
            >
              {heroContent.secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
