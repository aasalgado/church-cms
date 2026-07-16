export interface HeroCta {
  enabled: boolean;
  label: string;
  href: string;
}

export interface AnnouncementContent {
  enabled: boolean;
  title: string;
  message: string;
}

export interface WelcomeMessageContent {
  enabled: boolean;
  image: {
    src: string;
    alt: string;
  };
  badge: {
    value: string;
    label: string;
  };
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  quote: string;
}

export interface HeroContent {
  enabled: boolean;
  image: {
    src: string;
    alt: string;
  };
  preHeading: string;
  headline: string;
  copy: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
}

export const announcementContent: AnnouncementContent = {
  enabled: true,
  title: "Christmas Eve Candlelight Service",
  message: "December 24 at 6:00 PM — everyone is welcome",
};

export const welcomeMessageContent: WelcomeMessageContent = {
  enabled: true,
  image: {
    src: "/welcome-gathering.png",
    alt: "Members of the Grace Hollow community greeting one another after a service",
  },
  badge: {
    value: "25+",
    label: "Years serving our town",
  },
  eyebrow: "Welcome",
  headline: "You're not a stranger here. You're family.",
  paragraphs: [
    "Whether you've been walking with faith your whole life or you're simply curious, Grace Hollow is a place where questions are welcome and people are loved exactly as they are.",
    "We believe church should feel less like an obligation and more like coming home — a place of warmth, honesty, and grace. We'd be honored to share the journey with you.",
  ],
  quote: "Come to me, all you who are weary, and I will give you rest.",
};

export const heroContent: HeroContent = {
  enabled: true,
  image: {
    src: "/hero-church.png",
    alt: "Sunlight streaming through the windows of the Grace Hollow sanctuary",
  },
  preHeading: "Welcome Home",
  headline: "A place to belong, believe, and become",
  copy: "Grace Hollow Church is a warm community of ordinary people seeking hope, grace, and a deeper faith together. Wherever you are on your journey, there's a seat saved for you.",
  primaryCta: {
    enabled: true,
    label: "Join Us Sunday",
    href: "#services",
  },
  secondaryCta: {
    enabled: true,
    label: "Learn More",
    href: "#welcome",
  },
};
