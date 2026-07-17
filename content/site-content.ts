export interface NavLinkContent {
  label: string;
  href: string;
}

export interface SiteBrandContent {
  name: string;
  href: string;
}

export interface SiteCtaContent {
  label: string;
  href: string;
}

export interface SiteFooterLinkContent {
  label: string;
  href: string;
}

export interface SiteFooterSectionContent {
  heading: string;
  links: SiteFooterLinkContent[];
}

export interface SiteFooterContactContent {
  heading: string;
  items: string[];
}

export interface SiteFooterContent {
  brand: SiteBrandContent;
  description: string;
  explore: SiteFooterSectionContent;
  connect: SiteFooterContactContent;
  copyright: string;
}

export interface SiteContent {
  brand: SiteBrandContent;
  navigation: NavLinkContent[];
  primaryCta: SiteCtaContent;
}

export const siteFooterContent: SiteFooterContent = {
  brand: {
    name: "Grace Hollow",
    href: "#home",
  },
  description:
    "A welcoming community of faith in Cedar Falls. However you found us, we're so glad you're here.",
  explore: {
    heading: "Explore",
    links: [
      { label: "About Us", href: "#welcome" },
      { label: "Service Times", href: "#services" },
      { label: "Ministries", href: "#ministries" },
      { label: "Plan a Visit", href: "#contact" },
    ],
  },
  connect: {
    heading: "Connect",
    items: [
      "142 Maple Grove Lane",
      "Cedar Falls, IA 50613",
      "(319) 555-0142",
      "hello@gracehollow.church",
    ],
  },
  copyright: "Grace Hollow Church. All are welcome.",
};

export const siteContent: SiteContent = {
  brand: {
    name: "Grace Hollow",
    href: "#home",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#welcome" },
    { label: "Services", href: "#services" },
    { label: "Ministries", href: "#ministries" },
    { label: "Visit", href: "#contact" },
  ],
  primaryCta: {
    label: "Plan a Visit",
    href: "#services",
  },
};
