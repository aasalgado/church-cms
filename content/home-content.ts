export interface CtaContent {
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

export interface ServiceTimeItem {
  title: string;
  time: string;
  description: string;
}

export interface ServiceTimesContent {
  enabled: boolean;
  eyebrow: string;
  heading: string;
  intro: string;
  services: ServiceTimeItem[];
}

export interface MinistryItem {
  title: string;
  description: string;
}

export interface MinistriesContent {
  enabled: boolean;
  eyebrow: string;
  heading: string;
  intro: string;
  ministries: MinistryItem[];
}

export interface PastorMessageContent {
  enabled: boolean;
  image: {
    src: string;
    alt: string;
  };
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  name: string;
  title: string;
  cta: CtaContent;
}

export interface ContactDetail {
  label: string;
  value: string;
}

export interface LocationContactContent {
  enabled: boolean;
  eyebrow: string;
  heading: string;
  intro: string;
  details: ContactDetail[];
  button: CtaContent;
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
  primaryCta: CtaContent;
  secondaryCta: CtaContent;
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

export const serviceTimesContent: ServiceTimesContent = {
  enabled: true,
  eyebrow: "Gather With Us",
  heading: "Service Times",
  intro:
    "Come as you are. Our doors open early so you can grab a coffee and settle in before worship begins.",
  services: [
    {
      title: "Sunday Worship",
      time: "9:00 & 11:00 AM",
      description:
        "Contemporary worship, teaching, and community for all ages.",
    },
    {
      title: "Wednesday Gathering",
      time: "7:00 PM",
      description: "Midweek prayer, small groups, and Bible study.",
    },
    {
      title: "In Person & Online",
      time: "Every Week",
      description:
        "Join us at the chapel or stream the service live from home.",
    },
  ],
};

export const ministriesContent: MinistriesContent = {
  enabled: true,
  eyebrow: "Get Involved",
  heading: "Ministries For Every Season of Life",
  intro:
    "There's a place for you to belong, grow, and make a difference. Explore the many ways to connect at Grace Hollow.",
  ministries: [
    {
      title: "Kids & Nursery",
      description:
        "A safe, joyful space where children learn and grow in faith.",
    },
    {
      title: "Youth Group",
      description: "Friendship, fun, and faith for students in grades 6–12.",
    },
    {
      title: "Small Groups",
      description:
        "Connect deeply through weekly gatherings in homes near you.",
    },
    {
      title: "Worship & Arts",
      description: "Use your gifts in music, song, and creative expression.",
    },
    {
      title: "Outreach & Service",
      description: "Love our neighbors by serving the city and those in need.",
    },
    {
      title: "Care & Prayer",
      description: "Walk through life's seasons supported in prayer and care.",
    },
  ],
};

export const pastorMessageContent: PastorMessageContent = {
  enabled: true,
  image: {
    src: "/pastor.png",
    alt: "Pastor David Reyes, lead pastor of Grace Hollow Church",
  },
  eyebrow: "A Word From Our Pastor",
  heading: "Faith is a journey, and we walk it together",
  paragraphs: [
    "When you join us on Sunday, my hope is simple: that you would feel seen, welcomed, and reminded that you are deeply loved. We're not a community of people who have it all figured out — we're a family learning to follow Jesus one honest step at a time.",
    "Bring your doubts, your hopes, and your whole self. There is room for you here, and I can't wait to meet you.",
  ],
  name: "Pastor David Reyes",
  title: "Lead Pastor, Grace Hollow Church",
  cta: {
    enabled: true,
    label: "Read Recent Sermons",
    href: "#contact",
  },
};

export const locationContactContent: LocationContactContent = {
  enabled: true,
  eyebrow: "Plan Your Visit",
  heading: "We'd Love to Meet You",
  intro:
    "Have a question or planning to join us for the first time? Reach out — we'll save you a seat and help you feel right at home.",
  details: [
    {
      label: "Visit Us",
      value: "142 Maple Grove Lane, Cedar Falls, IA 50613",
    },
    {
      label: "Sundays",
      value: "9:00 AM & 11:00 AM",
    },
    {
      label: "Call",
      value: "(319) 555-0142",
    },
    {
      label: "Email",
      value: "hello@gracehollow.church",
    },
  ],
  button: {
    enabled: true,
    label: "Get Directions",
    href: "https://maps.google.com",
  },
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
