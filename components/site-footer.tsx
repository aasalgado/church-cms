import { Church } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Church className="size-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-xl font-semibold">Grace Hollow</span>
            </div>
            <p className="mt-4 max-w-xs text-pretty leading-relaxed text-background/70">
              A welcoming community of faith in Cedar Falls. However you found
              us, we&apos;re so glad you&apos;re here.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-background/90">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-background/70">
              <li><a href="#welcome" className="transition-colors hover:text-background">About Us</a></li>
              <li><a href="#services" className="transition-colors hover:text-background">Service Times</a></li>
              <li><a href="#ministries" className="transition-colors hover:text-background">Ministries</a></li>
              <li><a href="#contact" className="transition-colors hover:text-background">Plan a Visit</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-background/90">
              Connect
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-background/70">
              <li>142 Maple Grove Lane</li>
              <li>Cedar Falls, IA 50613</li>
              <li>(319) 555-0142</li>
              <li>hello@gracehollow.church</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/15 pt-6 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Grace Hollow Church. All are welcome.</p>
        </div>
      </div>
    </footer>
  )
}
