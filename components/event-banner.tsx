import { Sparkles } from "lucide-react";
import type { EventBannerContent } from "@/content/home-content";

interface EventBannerProps {
  content: EventBannerContent;
}

export function EventBanner({ content }: EventBannerProps) {
  if (!content.enabled) {
    return null;
  }

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2.5 text-center text-sm">
        <Sparkles className="size-4 shrink-0" aria-hidden="true" />
        <span className="font-medium">{content.title}</span>
        <span className="opacity-80">{content.message}</span>
      </div>
    </div>
  );
}
