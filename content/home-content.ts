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
    src: "/branding/photography/studio-community.png",
    alt: "Students and instructors at RhythmAddict Dance Studio",
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
    src: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/MGyH4kHfwqGY581rV9FX/media/6a2a61d361b1ee5d887aadc4.jpg",
    alt: "Esther, owner and lead instructor at RhythmAddict Dance Studio",
  },
  eyebrow: "Meet Your Instructor",
  heading: "Helping You Find Confidence on the Dance Floor",
  paragraphs: [
    "Esther is the owner and lead instructor at RhythmAddict Dance Studio. Her goal is to create a welcoming place where adults can learn to dance, build confidence, and enjoy connecting with others.",
    "Whether you're stepping onto the dance floor for the first time or continuing to develop your skills, Esther and the RhythmAddict community are ready to support you throughout your dance journey.",
  ],
  name: "Esther",
  title: "Owner & Lead Instructor",
  cta: {
    enabled: true,
    label: "View Class Schedule",
    href: "#classes",
  },
};

export const locationContactContent: LocationContactContent = {
  enabled: true,
  eyebrow: "Visit the Studio",
  heading: "Come Dance With Us",
  intro:
    "Have a question or ready to take your first class? Contact RhythmAddict or visit the studio in Rancho Cucamonga. We'll help you find the class that's right for you.",
  details: [
    {
      label: "Visit Us",
      value: "9651 Business Center Drive, Building 15, Suite A, Rancho Cucamonga, CA",
    },
    {
      label: "Class Times",
      value: "View the class schedule for current days and times",
    },
    {
      label: "Call",
      value: "(909) 265-7647",
    },
    {
      label: "Email",
      value: "Dance@RhythmAddictDance.com",
    },
  ],
  button: {
    enabled: true,
    label: "Get Directions",
    href: "https://www.google.com/maps/place/RhythmAddict+Dance+Studio/@34.0978237,-117.594447,17z/data=!3m1!4b1!4m6!3m5!1s0x80c335bc808e8acd:0xe8cf41abce93ed50!8m2!3d34.0978237!4d-117.594447!16s%2Fg%2F1tf2y1y7?entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D",
  },
};

export const heroContent: HeroContent = {
  enabled: true,
  image: {
    src: "/branding/photography/hero-dance.png",
    alt: "Dancers at RhythmAddict Dance Studio",
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
