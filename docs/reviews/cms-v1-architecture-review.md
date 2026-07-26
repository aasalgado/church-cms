# CMS v1 Architecture Review

**Date:** 2025  
**Scope:** Read-only review of the completed CMS v1 implementation  
**Reviewer:** Amazon Q  
**Status:** Pre-backend — no persistence, no API, no authentication

---

## Files Reviewed

- `content/home-content.ts`
- `content/site-content.ts`
- `app/page.tsx`
- `app/admin/page.tsx`
- `components/announcement-banner.tsx`
- `components/hero-section.tsx`
- `components/service-times.tsx`
- `components/welcome-message.tsx`
- `components/ministries-section.tsx`
- `components/pastor-message.tsx`
- `components/location-contact.tsx`
- `components/site-navbar.tsx`
- `components/site-footer.tsx`
- `components/admin/announcement-editor.tsx`
- `components/admin/hero-editor.tsx`
- `components/admin/welcome-editor.tsx`
- `components/admin/service-times-editor.tsx`
- `components/admin/ministries-editor.tsx`
- `components/admin/pastor-message-editor.tsx`
- `components/admin/location-contact-editor.tsx`
- `components/admin/site-navbar-editor.tsx`
- `components/admin/site-footer-editor.tsx`
- `prompts/add-cms-section.md`

---

## Overall Assessment

The CMS v1 implementation is **architecturally sound and internally consistent**. The core pattern — typed content objects, pure presentational components, controlled editors, and a single registry-driven admin page — is applied uniformly across all nine sections. No presentation component imports its own content. No editor mutates state directly. The public homepage is fully decoupled from admin draft state.

The issues found are not structural failures. They are a small set of focused problems — primarily around React key stability in editors, a stale description string in the admin UI, and a minor inconsistency in how the `add-cms-section.md` prompt describes the content model location — that should be resolved before a backend is introduced, because persistence will make them more visible and harder to fix retroactively.

---

## Strengths

1. **Complete prop-passing discipline.** Every presentation component accepts a required `content` prop and imports no content object internally. This is true for all nine components including the two most recently refactored ones (`SiteNavbar`, `SiteFooter`).

2. **Fully typed registry.** `AdminSectionId` is a string literal union. `AdminSectionConfig` is a typed interface. Every section entry is structurally identical. TypeScript will catch a missing or mismatched section at compile time.

3. **Strict immutability in all editors.** Every `onChange` call spreads the current value and replaces only the changed field. Nested objects (`image`, `badge`, `cta`, `primaryCta`, `secondaryCta`, `button`, `brand`, `explore`, `connect`) are spread correctly at every level. Arrays are updated with `.map()` and index comparison. No direct mutation was found anywhere.

4. **Clean separation of public and admin surfaces.** `app/page.tsx` imports only static content objects. It has no knowledge of any draft state. The admin page owns all draft state and passes it only to its own preview and editor nodes.

5. **Consistent file organization.** Presentation components live in `components/`, editors in `components/admin/`, content models and static data in `content/`. The naming convention (`*-editor.tsx`, `*Content` types, `*Content` object names) is applied without exception.

6. **`enabled` flag pattern.** Seven of nine sections implement an `enabled: boolean` field that short-circuits rendering with an early `return null`. This is a clean, low-cost visibility toggle that will map naturally to a boolean column when persistence is added.

7. **No unnecessary abstractions.** There is no shared editor base component, no generic field renderer, no form library. Each editor is a self-contained, readable file. This is appropriate for the current scale.

8. **`add-cms-section.md` is actionable.** The prompt accurately describes the pattern, enforces the right constraints, and produces consistent results as demonstrated by the nine sections that were built with it.

---

## Issues

### Critical

None. No issues were found that would cause data loss, runtime errors, or incorrect behavior under current usage.

---

### Important

#### I-1: Unstable React keys on array items in two editors

**Files:**
- `components/admin/site-navbar-editor.tsx` (navigation links loop)
- `components/admin/site-footer-editor.tsx` (explore links loop, connect items loop)

**Detail:**

In `site-navbar-editor.tsx`, the navigation links are rendered with `key={index}`:

```tsx
{value.navigation.map((link, index) => (
  <div key={index} ...>
```

In `site-footer-editor.tsx`, both the explore links and connect items loops use `key={index}`:

```tsx
{value.explore.links.map((link, index) => (
  <div key={index} ...>

{value.connect.items.map((item, index) => (
  <div key={index} ...>
```

Using a bare numeric index as a React key is safe only when the list is static and items are never reordered or removed. In an editor context where items could eventually be reordered or deleted, index keys cause React to reuse DOM nodes incorrectly, which produces input focus loss and incorrect controlled input values mid-edit.

The other editors that handle arrays — `service-times-editor.tsx`, `ministries-editor.tsx`, `location-contact-editor.tsx` — all use composite keys (`key={\`${item.title}-${index}\`}`, `key={\`${item.label}-${index}\`}`) that are consistent with the rest of the codebase.

**Contrast with correct usage in the same codebase:**

```tsx
// service-times-editor.tsx — correct
key={`${service.title}-${index}`}

// ministries-editor.tsx — correct
key={`${ministry.title}-${index}`}

// site-navbar-editor.tsx — inconsistent, index only
key={index}
```

**Recommended fix:**

`site-navbar-editor.tsx` navigation links:
```tsx
key={`${link.href}-${index}`}
```

`site-footer-editor.tsx` explore links:
```tsx
key={`${link.href}-${index}`}
```

`site-footer-editor.tsx` connect items:
```tsx
key={`${item}-${index}`}
```

Note: The `site-footer-editor.tsx` explore links loop was written with a composite key in the initial implementation but the file as committed uses `key={index}`. Both navbar and footer editors need the fix.

---

#### I-2: Stale admin page description copy

**File:** `app/admin/page.tsx` (lines ~100–103)

**Detail:**

The admin page header contains a description paragraph that reads:

```
Switch between announcement and hero content and preview the changes locally.
```

This was accurate when only the Announcement and Hero sections existed. The admin now manages nine sections. This copy will be seen by any future admin user or developer and is misleading about the scope of the tool.

**Recommended fix:**

```tsx
<p className="max-w-2xl text-sm text-muted-foreground">
  Select a section to edit its content and preview changes in real time.
</p>
```

---

#### I-3: `SiteContent` and `SiteFooterContent` share `SiteBrandContent` but are edited independently

**Files:**
- `content/site-content.ts`
- `components/admin/site-navbar-editor.tsx`
- `components/admin/site-footer-editor.tsx`

**Detail:**

Both `SiteContent` and `SiteFooterContent` contain a `brand: SiteBrandContent` field with identical runtime values (`name: "Grace Hollow"`, `href: "#home"`). They are separate objects in separate draft states. An admin editing the brand name in the Navbar editor will not see the change reflected in the Footer preview, and vice versa.

This is not a bug under the current in-memory architecture — drafts are intentionally independent. However, it becomes a data integrity problem the moment persistence is introduced: a save from the Navbar editor and a save from the Footer editor will write conflicting brand values to two separate records unless the backend is designed to handle this.

This is the most important structural issue to resolve before adding a backend.

**Options:**

1. **Extract a shared `siteBrandContent` object** that both `siteContent` and `siteFooterContent` reference, and add a dedicated `BrandEditor` or surface brand editing in only one place (e.g., a top-level "Site Settings" section).
2. **Merge navbar and footer into a single `SiteContent` type** with a unified `brand` field, a `nav` sub-object, and a `footer` sub-object, edited by a single `SiteEditor`.
3. **Accept the duplication** and handle deduplication at the persistence layer (e.g., a single `brand` table row referenced by both sections).

Option 1 is the lowest-disruption path and fits the existing architecture.

---

### Minor

#### M-1: `add-cms-section.md` references only `content/home-content.ts` for content models

**File:** `prompts/add-cms-section.md`

**Detail:**

The prompt's inspection checklist reads:

> the typed content models in `content/home-content.ts`

And the "Before making changes" section does not mention `content/site-content.ts`. The Navbar and Footer sections were added using types from `site-content.ts`, not `home-content.ts`. A developer following the prompt for a future site-level section (e.g., a cookie banner, a global alert bar) would look only at `home-content.ts` and miss the correct file.

**Recommended fix:**

Update the inspection checklist line to:

```
- the typed content models in `content/home-content.ts` and `content/site-content.ts`
```

And add a note in the "Section details" block:

```
- Content file: `content/home-content.ts` | `content/site-content.ts` (choose the appropriate file)
```

---

#### M-2: `WelcomeEditor` and `PastorMessageEditor` use a newline-join strategy for `paragraphs[]`

**Files:**
- `components/admin/welcome-editor.tsx`
- `components/admin/pastor-message-editor.tsx`

**Detail:**

Both editors serialize the `paragraphs: string[]` array into a single textarea by joining with `\n` and splitting on `\n` to reconstruct the array:

```tsx
value={value.paragraphs.join("\n")}
onChange={(event) =>
  onChange({
    ...value,
    paragraphs: event.target.value
      .split("\n")
      .map((p) => p.trim())
      .filter(Boolean),
  })
}
```

This is a pragmatic approach that works correctly for the current data. However, it has two edge cases:

1. A paragraph that intentionally contains a leading or trailing space will have it silently stripped by `.trim()`.
2. An admin pressing Enter to create a blank line between paragraphs will have that blank line silently removed by `.filter(Boolean)`.

Neither is a problem today because the content doesn't use either pattern. But the behavior is implicit and could surprise a future content editor.

This is not worth changing before a backend is added — the textarea approach may be replaced entirely by a richer text input at that point. It is worth documenting.

**Recommended fix (deferred):** Add a `// Each line becomes one paragraph` comment above the textarea, or replace with per-paragraph inputs (matching the pattern used for `services[]` and `ministries[]`) when the editor UI is revisited.

---

#### M-3: `HeroCta` is reused as the type for `PastorMessageContent.cta` and `LocationContactContent.button`

**File:** `content/home-content.ts`

**Detail:**

`HeroCta` is defined as:

```ts
export interface HeroCta {
  enabled: boolean;
  label: string;
  href: string;
}
```

It is used as the type for:
- `HeroContent.primaryCta`
- `HeroContent.secondaryCta`
- `PastorMessageContent.cta`
- `LocationContactContent.button`

The name `HeroCta` implies it belongs to the Hero section, but it is a general-purpose CTA type used across three sections. This is a naming inconsistency that will become more confusing as the content model grows.

**Recommended fix:**

Rename to `CtaContent` or `ContentCta` before the model is serialized to a database schema, where the type name may appear as a table or column name.

```ts
export interface CtaContent {
  enabled: boolean;
  label: string;
  href: string;
}
```

This is a pure rename with no behavioral change. All four usages would be updated.

---

#### M-4: `NavLinkContent` and `SiteFooterLinkContent` are structurally identical

**File:** `content/site-content.ts`

**Detail:**

```ts
export interface NavLinkContent {
  label: string;
  href: string;
}

export interface SiteFooterLinkContent {
  label: string;
  href: string;
}
```

These two interfaces are byte-for-byte identical. TypeScript's structural typing means they are interchangeable, but having two names for the same shape adds noise to the type system and will create confusion when mapping to a backend schema.

**Recommended fix:**

Remove `SiteFooterLinkContent` and replace its usages with `NavLinkContent` (or rename both to a shared `LinkContent`). `SiteFooterSectionContent` would become:

```ts
export interface SiteFooterSectionContent {
  heading: string;
  links: NavLinkContent[];
}
```

---

#### M-5: `app/page.tsx` import of `site-content` is missing a semicolon

**File:** `app/page.tsx`

**Detail:**

```ts
import { siteContent, siteFooterContent } from "@/content/site-content"
```

This line is missing the trailing semicolon that every other import in the file has. TypeScript and the build tolerate this, but it is inconsistent with the rest of the file and the project's style.

**Recommended fix:**

```ts
import { siteContent, siteFooterContent } from "@/content/site-content";
```

---

## Section Coverage Checklist

| Section | Typed model | Static content | Draft state | Controlled editor | Live preview | Pure component |
|---|---|---|---|---|---|---|
| Announcement | ✅ `AnnouncementContent` | ✅ `announcementContent` | ✅ `announcementDraft` | ✅ `AnnouncementEditor` | ✅ | ✅ |
| Hero | ✅ `HeroContent` | ✅ `heroContent` | ✅ `heroDraft` | ✅ `HeroEditor` | ✅ | ✅ |
| Service Times | ✅ `ServiceTimesContent` | ✅ `serviceTimesContent` | ✅ `serviceTimesDraft` | ✅ `ServiceTimesEditor` | ✅ | ✅ |
| Welcome | ✅ `WelcomeMessageContent` | ✅ `welcomeMessageContent` | ✅ `welcomeDraft` | ✅ `WelcomeEditor` | ✅ | ✅ |
| Ministries | ✅ `MinistriesContent` | ✅ `ministriesContent` | ✅ `ministriesDraft` | ✅ `MinistriesEditor` | ✅ | ✅ |
| Pastor Message | ✅ `PastorMessageContent` | ✅ `pastorMessageContent` | ✅ `pastorDraft` | ✅ `PastorMessageEditor` | ✅ | ✅ |
| Location & Contact | ✅ `LocationContactContent` | ✅ `locationContactContent` | ✅ `locationContactDraft` | ✅ `LocationContactEditor` | ✅ | ✅ |
| Navbar | ✅ `SiteContent` | ✅ `siteContent` | ✅ `navbarDraft` | ✅ `SiteNavbarEditor` | ✅ | ✅ |
| Footer | ✅ `SiteFooterContent` | ✅ `siteFooterContent` | ✅ `footerDraft` | ✅ `SiteFooterEditor` | ✅ | ✅ |

All nine sections pass every check.

---

## `add-cms-section.md` Accuracy Assessment

The prompt accurately reflects the final architecture in all material respects:

| Requirement | Accurate? | Notes |
|---|---|---|
| Draft state pattern (`useState` initialized from static object) | ✅ | Matches all nine implementations |
| Controlled editor props (`value` / `onChange`) | ✅ | Consistent across all editors |
| Pure presentational component requirement | ✅ | All nine components comply |
| No optional `content` prop / no fallback to static object | ✅ | No violations found |
| Public homepage passes static object explicitly | ✅ | `app/page.tsx` complies |
| Typed section registry (`AdminSectionId` union + `AdminSectionConfig`) | ✅ | Registry is fully typed |
| Immutable array/object updates | ✅ | All editors comply |
| Architecture constraints (no Context, no reducers, no persistence) | ✅ | None added |
| Content model file reference | ⚠️ | Only mentions `home-content.ts`; `site-content.ts` is not referenced (see M-1) |
| Inspection checklist mentions `AnnouncementEditor`, `HeroEditor`, `WelcomeEditor` | ⚠️ | These are the original three; `SiteNavbarEditor` and `SiteFooterEditor` now also serve as reference implementations and could be added |

---

## Proposed Fix Order

Ordered by impact and effort. All are small, targeted changes.

| Priority | Issue | Effort | Reason |
|---|---|---|---|
| 1 | **I-1** — Fix index-only React keys in `site-navbar-editor.tsx` and `site-footer-editor.tsx` | ~5 min | Prevents focus loss bugs; trivial fix; inconsistent with the rest of the codebase right now |
| 2 | **I-2** — Update stale admin page description | ~2 min | Misleading to any future user or developer; one-line fix |
| 3 | **M-5** — Add missing semicolon in `app/page.tsx` | ~1 min | Style consistency; trivial |
| 4 | **M-1** — Update `add-cms-section.md` to reference `site-content.ts` | ~5 min | Prevents a future developer from looking in the wrong file |
| 5 | **M-4** — Deduplicate `NavLinkContent` / `SiteFooterLinkContent` | ~10 min | Clean up type system before schema is defined |
| 6 | **M-3** — Rename `HeroCta` to `CtaContent` | ~10 min | Naming clarity before the type name appears in a database schema |
| 7 | **I-3** — Resolve shared `brand` between Navbar and Footer | ~30 min | Must be resolved before persistence; requires a design decision |
| 8 | **M-2** — Document or refactor `paragraphs[]` textarea strategy | Deferred | Low urgency; likely superseded by a richer editor when persistence arrives |

---

## Pre-Backend Readiness

The following items should be resolved **before** introducing a backend, in order of importance:

1. **I-3 (brand duplication)** — The most structurally significant issue. Two separate draft states editing the same logical data will produce conflicting writes without a deliberate backend design to prevent it.
2. **M-3 (rename `HeroCta`)** — Type names that appear in content models will likely map to database column or table names. Renaming after a schema is created is more disruptive.
3. **M-4 (deduplicate link types)** — Same reason as M-3.
4. **I-1 (React keys)** — Not backend-related, but should be fixed before the editor is used in production, which persistence would enable.

Items I-2, M-1, M-2, and M-5 can be addressed at any time without affecting backend design.
