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
  eyebrow: "Gather With Us",
  heading: "Service Times",
  intro:
    "Come as you are. Our doors open early so you can grab a coffee and settle in before worship begins.",
  classes: [
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

export const danceStylesContent: DanceStylesContent = {
  enabled: true,
  eyebrow: "Get Involved",
  heading: "Ministries For Every Season of Life",
  intro:
    "There's a place for you to belong, grow, and make a difference. Explore the many ways to connect at Grace Hollow.",
  styles: [
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
