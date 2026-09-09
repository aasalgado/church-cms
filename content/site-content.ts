import type {
  SiteContent,
  SiteFooterContent,
  SiteBrandContent,
} from "@/lib/schemas";
export type {
  SiteContent,
  SiteFooterContent,
  SiteBrandContent,
} from "@/lib/schemas";

export const siteFooterContent: SiteFooterContent = {
  brand: {
    name: "RhythmAddict",
    href: "#home",
  },
  description:
    "A welcoming adult dance community in Rancho Cucamonga where students can build confidence, improve their skills, and connect through Salsa, Bachata, Cumbia, Ballroom, and Swing.",
  explore: {
    heading: "Explore",
    links: [
      { label: "About Us", href: "#welcome" },
      { label: "Class Schedule", href: "#classes" },
      { label: "Dance Styles", href: "#styles" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  connect: {
    heading: "Connect",
    items: [
      "9651 Business Center Drive",
      "Building 15, Suite A",
      "Rancho Cucamonga, CA",
      "(909) 265-7647",
      "Dance@RhythmAddictDance.com",
    ],
  },
  copyright: "RhythmAddict Dance Studio. Learn, connect, and keep dancing.",
};

export const siteContent: SiteContent = {
  brand: {
    name: "RhythmAddict",
    href: "#home",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#welcome" },
    { label: "Classes", href: "#classes" },
    { label: "Dance Styles", href: "#styles" },
    { label: "Contact", href: "#contact" },
  ],
  primaryCta: {
    label: "View Class Schedule",
    href: "#classes",
  },
};
