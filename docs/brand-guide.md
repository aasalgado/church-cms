# RhythmAddict Dance Studio

## Brand Guide

---

# Purpose

This document defines the visual identity and design direction of the RhythmAddict Dance Studio CMS.

The goal is **not** to redesign RhythmAddict's brand.

The goal is to modernize the website while preserving the studio's existing identity.

This document serves as the source of truth for all future UI decisions.

---

# Implementation Status

This document defines the approved design direction for the RhythmAddict Dance Studio website.

Some recommendations in this guide have been fully implemented. Others are planned and will be applied in upcoming sprints.

Where a recommendation is not yet implemented, it represents the approved direction — not a completed change. Implementation is tracked in the sprint log and roadmap.

---

# Brand Identity

Business Name

RhythmAddict Dance Studio

Brand Personality

- Welcoming
- Energetic
- Modern
- Community-focused
- Professional
- Beginner-friendly

Visitors should feel:

- Excited to learn
- Comfortable attending their first class
- Confident contacting the studio
- Inspired by the community

---

# Design Goals

The RhythmAddict website should accomplish the following:

- Make beginners feel welcome and confident enough to take their first class
- Reflect the existing RhythmAddict brand identity without reinventing it
- Emphasize community — students, instructors, and social dancing together
- Present a modern, approachable experience that feels professional without being intimidating
- Communicate clearly what the studio offers, who it is for, and how to get started
- Inspire visitors to get on the dance floor

The interface should never feel like a performance venue, a competition studio, or a nightclub. It should feel like a place where anyone can walk in and belong.

---

# Logo

The official RhythmAddict logo is the source of truth for the brand identity.

Logo location:

`public/branding/logo/rhythm-addict-logo.png`

- Use the official RhythmAddict logo throughout the website.
- Do not redesign, replace, or modernize the logo.
- The logo's colors — warm black, gold, and brick red — define the brand palette.

The logo should appear consistently in:

- Navbar
- Footer
- Browser favicon
- Social sharing
- Future CMS login page

Future consideration: a light version of the logo may be needed for use on dark backgrounds where the logo's dark elements would not be visible. This should be sourced or created before implementing dark-background sections.

---

# Color Palette

The approved palette is derived directly from the official RhythmAddict logo. No colors are invented. Every color traces back to the logo's existing identity.

## Brand Gold

- Hex: `#f0b429`
- Purpose: primary interactive color
- Use for: CTA buttons, active navigation states, eyebrow labels, icon accents, hover states, event banner background
- Why: the logo's dominant accent color. Using it as the primary interactive color creates immediate visual coherence between the logo and the UI. It communicates energy and warmth without aggression.

## Brand Black (Deep Charcoal)

- Hex: `#1a0a06`
- Purpose: primary dark color
- Use for: primary headings, footer background, dark section backgrounds, hero overlay, primary text on light backgrounds
- Why: sampled directly from the logo's darkest tones. It is not a cold neutral black — it carries a warm, dark brown-red undertone that keeps the palette cohesive.

## Brick Red (Burgundy Accent)

- Hex: `#7a2700`
- Purpose: secondary accent
- Use for: promotional highlights, event banner title, badge backgrounds, accent elements
- Why: present in the logo as a secondary color. Warm and energetic without reading as aggressive. Reinforces the Latin dance character of the brand.

## Warm Cream

- Hex: `#fdf6ec`
- Purpose: primary light background
- Use for: primary page background, card backgrounds, light section backgrounds
- Why: a pure white background would feel cold against the warm gold and brick red. Warm cream keeps the palette cohesive and approachable.

## Warm Sand

- Hex: `#f5e8d0`
- Purpose: alternate section background
- Use for: alternating section backgrounds to create visible page rhythm
- Why: provides meaningful visual separation between sections while staying within the warm palette. Replaces the near-identical light grays currently used.

## Why This Palette Supports the Brand

The current website uses a muted amber/brown primary that is in the right color family but too desaturated. It reads as calm and earthy — appropriate for a community organization, but underselling the energy of a dance studio.

The approved palette uses the logo's own colors at their full confidence. The gold is vivid and warm. The black is deep and grounded. The brick red adds a Latin character. Together they communicate exactly what the brand personality requires: welcoming, energetic, modern, and community-focused — without tipping into nightclub or competition aesthetics.

---

# Typography

## Body Font

**Inter** — confirmed. Neutral, highly legible, modern, and widely trusted. No change needed.

## Heading Font

**Current:** Playfair Display

Playfair Display is a high-contrast serif with strong literary and editorial associations. It communicates elegance and reverence — appropriate for church, wedding, and luxury hospitality brands. For RhythmAddict, it communicates the wrong emotional register. A dance studio headline should feel like movement. Playfair feels like a hymnal.

**Approved direction:** Evaluate Plus Jakarta Sans as the replacement heading font.

Plus Jakarta Sans is a geometric, modern sans-serif available on Google Fonts and supported by Next.js font optimization. It communicates:

- Modern — clean geometry without feeling corporate
- Friendly — subtle warmth in its curves that complements the logo's hand-crafted quality
- Energetic — bold weights have genuine presence without literary heaviness
- Readable — performs well across all sizes from hero headlines to card titles
- Complementary to the logo — shares proportions with Inter and does not compete with the logo's own typographic character

This is the approved design direction. The font has not yet been implemented.

## Type Scale (Planned)

- Hero headline: Plus Jakarta Sans, 700 weight, large (responsive 4xl–7xl)
- Section headings: Plus Jakarta Sans, 600 weight
- Eyebrow labels: Inter, 500 weight, uppercase, tracked
- Body text: Inter, 400 weight
- CTA buttons: Inter or Plus Jakarta Sans, 600 weight
- Card titles: Plus Jakarta Sans, 600 weight
- Captions and muted text: Inter, 400 weight

---

# Photography

Photography should emphasize:

- Real dance classes
- Salsa
- Bachata
- Cumbia
- Ballroom
- Partner dancing
- Movement
- Community
- Beginners
- Authentic moments
- Warm lighting
- Instructor interaction
- Smiling students

Photography style:

- Candid over posed
- Motion blur is acceptable and encouraged — it communicates energy
- Warm indoor lighting; golden hour tones where possible
- Close crops on hands, feet, and connection points work well as accent images
- Wide shots of the full studio floor work well for hero and section backgrounds
- Diverse adult students of varying ages and experience levels

Avoid:

- Generic stock imagery
- Empty studios
- Nightclub lighting (deep blue, purple, strobe effects)
- Competition or performance aesthetics (elaborate costumes, stage makeup)
- Church imagery

---

# Iconography

Icons should communicate:

- Music
- Dance
- Calendar
- Time
- Location
- Phone
- Email

Icons should reinforce the dance and community character of the brand. Utility icons (phone, email, map pin, clock) are appropriate in contact and schedule contexts. Decorative icons in section cards should relate directly to dance, music, or movement.

Remaining church-oriented icons (including the Church icon currently used in the navbar and footer logo mark) will be replaced during implementation. The official RhythmAddict logo image is the approved replacement for the navbar and footer brand mark.

---

# Buttons

## Shape

Rounded-full. Communicates approachability and modernity. Consistent across all button types.

## Hierarchy

- **Primary:** Brand Gold background, Brand Black text. Used for the most important action in each section.
- **Secondary (outline):** Transparent background, Brand Gold border, Brand Black text. Hover state fills with Brand Gold. Used for secondary actions.
- **Tertiary (ghost):** Text only, Brand Gold color, underline on hover. Used for low-emphasis actions.

Each section should contain at most one primary button. This creates a clear visual hierarchy that guides users toward the most important action.

## Hover States

Color transitions are the current implementation. Subtle scale or lift micro-interactions are planned for a future polish sprint.

---

# Cards

## Class Schedule Cards

Cards display class title, time, and description. Planned improvements:

- Add a Brand Gold top border accent (3–4px) to each card to signal brand identity
- Display class time in Brand Gold to make schedule information more prominent
- Consider a subtle warm background tint on hover

## Dance Styles Cards

Cards display style name and description with an icon. Planned improvements:

- Unify icon container shape to rounded-full (currently rounded-xl) for consistency with schedule cards
- Replace church-inherited icons with dance and music icons
- Consider a subtle warm background tint on hover in addition to the current border color change

---

# UI Principles

- **Approachable first, energetic second.** The brand leads with welcome. Energy comes through accent colors, photography, and motion — not aggressive typography or dark-dominant layouts.
- **Energy through contrast, not chaos.** Bold gold-on-black moments should feel exciting. Light sections should feel clean and welcoming. The contrast between them creates energy without overwhelming beginners.
- **Warm over cold.** Every color, background, and typographic choice should lean warm. Cold neutrals belong to tech and finance brands, not dance studios.
- **The logo is the visual anchor.** Every color decision traces back to the logo. If a color does not appear in or complement the logo, it does not belong in the UI.
- **Consistency over decoration.** Maintain consistent shape language (rounded-full buttons, rounded-3xl image containers, rounded-full icon containers) rather than adding decorative elements.
- **Clear visual hierarchy.** Each section has one primary action. Supporting actions use secondary or ghost button styles.
- **Generous whitespace.** The current section spacing rhythm is good and should be preserved. Whitespace communicates confidence and gives content room to breathe.
- **Every section should have a clear purpose.** No section exists for decoration. Each one answers a question a prospective student would have.

---

# Content Principles

Speak to beginners.

Avoid jargon.

Keep calls-to-action short and action-oriented.

Use positive, encouraging language.

---

# Implementation Priorities

The following improvements are approved and will be implemented in upcoming sprints, in order of priority:

1. Replace the Church icon in the navbar and footer with the official RhythmAddict logo image
2. Update the global color palette to the approved Brand Gold, Brand Black, Brick Red, Warm Cream, and Warm Sand system
3. Evaluate and implement the Plus Jakarta Sans heading font
4. Replace remaining placeholder photography (hero image, studio introduction image)
5. Update iconography — replace church-inherited icons with dance and music icons
6. Refine buttons and cards — strengthen outline button style, add card accent borders, unify icon container shapes

---

# Future Enhancements

Potential future additions include:

- Testimonials
- Student success stories
- Gallery
- Pricing
- FAQ
- Registration
- Online payments
- Event calendar

---

# Design Philosophy

This project is not intended to copy the current RhythmAddict website.

Instead, it aims to create a cleaner, more maintainable, and more user-friendly experience while preserving the studio's existing identity and brand.
