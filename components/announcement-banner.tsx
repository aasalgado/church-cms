import { Sparkles } from "lucide-react"

export function AnnouncementBanner() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2.5 text-center text-sm">
        <Sparkles className="size-4 shrink-0" aria-hidden="true" />
        <span className="font-medium">Christmas Eve Candlelight Service</span>
        <span className="opacity-80">December 24 at 6:00 PM — everyone is welcome</span>
      </div>
    </div>
  )
}
