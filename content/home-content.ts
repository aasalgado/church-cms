export interface CtaContent {
  enabled: boolean;
  label: string;
  href: string;
}

export interface EventBannerContent {
  enabled: boolean;
  title: string;
  message: string;
}

export interface StudioIntroductionContent {
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

export interface ClassScheduleItem {
  title: string;
  time: string;
  description: string;
}

export interface ClassScheduleContent {
  enabled: boolean;
  eyebrow: string;
  heading: string;
  intro: string;
  classes: ClassScheduleItem[];
}

export interface DanceStyleItem {
  title: string;
  description: string;
}

export interface DanceStylesContent {
  enabled: boolean;
  eyebrow: string;
  heading: string;
  intro: string;
  styles: DanceStyleItem[];
}

export interface InstructorContent {
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

export const eventBannerContent: EventBannerContent = {
  enabled: true,
  title: "Friday Night Social",
  message: "Join us for an evening of Salsa, Bachata, and Cumbia. All levels are welcome.",
};

export const studioIntroductionContent: StudioIntroductionContent = {
  enabled: true,
  image: {
    src: "/welcome-gathering.png",
    alt: "Members of the Grace Hollow community greeting one another after a service",
  },
  badge: {
    value: "25+",
    label: "Years serving our town",
  },
  eyebrow: "Everyone Starts Somewhere",
  headline: "Discover the Joy of Social Dancing",
  paragraphs: [
    "Whether you've never danced before or you're looking to build on your experience, RhythmAddict is a place where you can learn, grow, and have fun.",
    "Our classes are designed to help you build confidence, meet new people, and enjoy every step of your dance journey. With supportive instructors and a welcoming community, you'll feel comfortable from your very first class.",
  ],
  quote: "The first step is showing up. We'll help you find the rhythm.",
};

export const classScheduleContent: ClassScheduleContent = {
  enabled: true,
  eyebrow: "Find Your Rhythm",
  heading: "Choose Your Class and Start Dancing",
  intro:
    "Whether you're taking your first steps or continuing your dance journey, we offer welcoming classes designed to help you build confidence, improve your skills, and enjoy social dancing.",
  classes: [
    {
      title: "Salsa",
      time: "Tuesdays & Thursdays • 7:00 PM",
      description:
        "Build a strong foundation in Salsa while developing timing, partner connection, and confidence.",
    },
    {
      title: "Bachata",
      time: "Mondays & Wednesdays • 7:00 PM",
      description:
        "Learn the fundamentals of Bachata in a fun and welcoming environment designed for all experience levels.",
    },
    {
      title: "Cumbia",
      time: "Mondays • 7:30 PM",
      description:
        "Enjoy one of the most popular social dances with easy-to-follow instruction and great music.",
    },
  ],
};

export const danceStylesContent: DanceStylesContent = {
  enabled: true,
  eyebrow: "Dance Styles",
  heading: "Find the Style That's Right for You",
  intro:
    "Every dance has its own personality. Explore the styles we teach and discover the one that inspires you to get on the dance floor.",
  styles: [
    {
      title: "Salsa",
      description:
        "Energetic partner dancing focused on musicality, footwork, and social dancing.",
    },
    {
      title: "Bachata",
      description:
        "A fun and approachable Latin dance that emphasizes rhythm, connection, and smooth partner movement.",
    },
    {
      title: "Cumbia",
      description:
        "An easy-to-learn social dance that's perfect for beginners and enjoyable for dancers of all levels.",
    },
    {
      title: "Ballroom & Swing",
      description:
        "Classic partner dances that build confidence for weddings, parties, and social events.",
    },
  ],
};

export const instructorContent: InstructorContent = {
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
  preHeading: "Adult Dance Studio • Rancho Cucamonga",
  headline: "Learn Salsa, Bachata & More in a Fun, Welcoming Community",
  copy: "Whether you're taking your very first dance class or looking to grow your social dancing skills, RhythmAddict offers welcoming instruction, supportive instructors, and a community you'll love being part of.",
  primaryCta: {
    enabled: true,
    label: "View Class Schedule",
    href: "#classes",
  },
  secondaryCta: {
    enabled: true,
    label: "Learn More",
    href: "#welcome",
  },
};
