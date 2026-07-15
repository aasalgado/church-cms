export interface HeroCta {
  enabled: boolean
  label: string
  href: string
}

export interface HeroContent {
  enabled: boolean
  image: {
    src: string
    alt: string
  }
  preHeading: string
  headline: string
  copy: string
  primaryCta: HeroCta
  secondaryCta: HeroCta
}

export const heroContent: HeroContent = {
  enabled: true,
  image: {
    src: '/hero-church.png',
    alt: 'Sunlight streaming through the windows of the Grace Hollow sanctuary',
  },
  preHeading: 'Welcome Home',
  headline: 'A place to belong, believe, and become',
  copy: "Grace Hollow Church is a warm community of ordinary people seeking hope, grace, and a deeper faith together. Wherever you are on your journey, there's a seat saved for you.",
  primaryCta: {
    enabled: true,
    label: 'Join Us Sunday',
    href: '#services',
  },
  secondaryCta: {
    enabled: true,
    label: 'Learn More',
    href: '#welcome',
  },
}
