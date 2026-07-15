import { Button } from "@/components/ui/button"

export function PastorMessage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <img
            src="/pastor.png"
            alt="Pastor David Reyes, lead pastor of Grace Hollow Church"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lg"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            A Word From Our Pastor
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Faith is a journey, and we walk it together
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              When you join us on Sunday, my hope is simple: that you would feel
              seen, welcomed, and reminded that you are deeply loved. We&apos;re
              not a community of people who have it all figured out — we&apos;re
              a family learning to follow Jesus one honest step at a time.
            </p>
            <p>
              Bring your doubts, your hopes, and your whole self. There is room
              for you here, and I can&apos;t wait to meet you.
            </p>
          </div>
          <div className="mt-7">
            <p className="font-serif text-lg font-semibold text-foreground">
              Pastor David Reyes
            </p>
            <p className="text-sm text-muted-foreground">Lead Pastor, Grace Hollow Church</p>
          </div>
          <Button nativeButton={false} render={<a href="#contact" />} variant="outline" className="mt-7 rounded-full bg-transparent px-7">
            Read Recent Sermons
          </Button>
        </div>
      </div>
    </section>
  )
}
