import { Button } from "@/components/ui/button";
import { pastorMessageContent } from "@/content/home-content";

export function PastorMessage() {
  if (!pastorMessageContent.enabled) {
    return null;
  }

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <img
            src={pastorMessageContent.image.src}
            alt={pastorMessageContent.image.alt}
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lg"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {pastorMessageContent.eyebrow}
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            {pastorMessageContent.heading}
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            {pastorMessageContent.paragraphs.map((paragraph, index) => (
              <p key={`${paragraph}-${index}`}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-7">
            <p className="font-serif text-lg font-semibold text-foreground">
              {pastorMessageContent.name}
            </p>
            <p className="text-sm text-muted-foreground">
              {pastorMessageContent.title}
            </p>
          </div>
          <Button
            nativeButton={false}
            render={<a href={pastorMessageContent.cta.href} />}
            variant="outline"
            className="mt-7 rounded-full bg-transparent px-7"
          >
            {pastorMessageContent.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
