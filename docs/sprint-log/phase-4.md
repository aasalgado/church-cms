# Phase 4

---

## Sprint 4.1 — Backend Architecture

---

## Sprint 4.2 — Contracts & Runtime Schemas

### Status

Completed

### Goal

Introduce runtime validation and a single source-of-truth for CMS content shapes so the backend migration can rely on validated, versioned payloads.

### Completed

- Added Zod as the runtime schema library (code under `lib/schemas/`).
- Implemented Zod-first schemas for each editable section (hero, event-banner, studio-introduction, class-schedule, dance-styles, instructor, location-contact, navbar, footer).
- Exported TypeScript types inferred with `z.infer` and preserved existing type names via re-exports in `content/home-content.ts` and `content/site-content.ts` for compatibility with existing consumers.
- Added shared schema primitives (`NonEmptyString`, `Href`, `ImageSchema`, `CtaSchema`, `LinkSchema`, `Timestamp`) to enforce consistent validation rules across sections.
- Created `SectionSchemas` mapping that associates `sectionId` keys to their Zod schema for programmatic lookup.
- Added `CmsContentMetadataSchema` with approved v1 metadata fields: `sectionId`, `version`, `lastEditedAt`, `lastEditedBy`, `publishedAt`, `publishedBy` (timestamps applied as optional at the field level).
- Ensured no API/Lambda/DynamoDB/AWS wiring or publish workflows were implemented in this sprint.
- Did not introduce a test framework in this sprint.
- Verified local build and type-check: `npm run build` and `npx tsc --noEmit` pass in your environment.

### Notes & Follow-ups

- The Zod schemas are the authoritative source for content shapes going forward. Any future API or Lambda should validate payloads against these schemas before persisting to DynamoDB.
- Small schema consistency items may be addressed in follow-up patches (for example aligning all link `href` fields to use the shared `Href` schema). Those changes are minor and were intentionally limited during this sprint.

### Goal

Perform a backend architecture review and approve a v1 AWS-backed CMS architecture suitable for a small dance studio. Deliverables included an architecture document, sprint-log reorganization, and selection of DynamoDB storage approach.

### Completed

- Current architecture review (TypeScript content models, React state, static content imports, admin editor behavior)
- Backend readiness analysis for DynamoDB, Lambda, API Gateway, S3, Cognito, CloudWatch, and IAM
- AWS service responsibility decisions and v1 responsibilities for each service
- DynamoDB content-storage evaluation and selection of APPROVED v1 decision: one DynamoDB item per editable CMS section (one CmsContent table)
- Decision: no manifest in v1; React controls homepage composition and order
- Draft vs published content planning (draft attribute + published attribute per section, publish transaction model)
- API surface planning (read endpoints public, write/preview endpoints protected by Cognito)
- S3 image upload strategy (presigned URLs for direct uploads) and image key storage guidance
- Cognito integration planning for admin authentication and API protection
- CloudWatch logging and monitoring guidance; IAM least-privilege guidance
- Phase 4 implementation roadmap (Sprint 4.2 → Sprint 4.9)
- Created `docs/architecture.md` documenting the approved architecture
- Reorganized sprint logs into `docs/sprint-log/phase-*.md`

### Decisions & Notes

- APPROVED v1 storage decision: One `CmsContent` DynamoDB table with one item per editable CMS section (Option B). No manifest will be used in v1; a manifest may be introduced later if dynamic page composition is required.
- ADRs created in `docs/architecture.md` (ADR-001 through ADR-003) documenting these approved decisions.

---

## Sprint 4.3 — ContentService Abstraction & API Adapter foundation

### Status

Completed

### Goal

Introduce a minimal async `ContentService` boundary so the rest of the application can load CMS content without coupling to the local file-based implementation. Prepare the codebase for a future API-backed adapter without changing UI components or editor behavior.

### Completed

- Added `lib/content-service.ts` implementing a typed async `ContentService` interface with two read operations: `getPublished<K extends SectionId>(sectionId: K)` and `getAllPublished()`.
- Implemented `ContentMap` and `ContentFor<K>` typing so each `sectionId` maps to its corresponding inferred content type (e.g., `getPublished('hero')` returns `HeroContent`).
- Added `LOCAL_CONTENT` as the temporary local source of truth behind the `ContentService`; the implementation returns existing objects from `content/home-content.ts` and `content/site-content.ts`.
- Updated `app/page.tsx` (server component) to asynchronously load published content via `contentService.getAllPublished()` and pass the same typed props to presentational components.
- Updated admin area architecture: replaced the prior client entry with a small server-side wrapper `app/admin/page.tsx` that loads initial content through `contentService.getPublished(...)` and renders a new client component `app/admin/page.client.tsx` which contains the unchanged interactive editor UI seeded by typed props.
- Ensured presentational components remain prop-driven and the admin editors continue to use local `useState` for drafts and live preview; no editor internals changed.
- Did not implement any API adapter, persistence, publish, authentication, or AWS integration in this sprint — the `ContentService` is intentionally local-backed for now.
- No runtime Zod validation was added in this sprint; runtime validation will be introduced when external/API content is consumed.
- Verified `npx tsc --noEmit` and `npm run build` passed locally; manual smoke testing of public site and `/admin` route was performed before commit.

### Notes & Boundaries

- The `ContentService` provides a single place to swap a local implementation for an API adapter in a future sprint; that swap should be contained to `lib/content-service` (or a new adapter module) and not require changes to UI components.
- Follow-up work (Sprint 4.4+) will add a read-only API adapter and integrate network validation and caching strategies; nothing of that nature was added here.

---

## Sprint 4.4 — Read-Only AWS CMS Backend

### Status

Completed

### Goal

Ship the read-only AWS-backed CMS backend for published content. The backend should provide a stable public API for reading CMS sections, validate response payloads, and enough operational confidence to support the next frontend integration sprint.

### Completed

- Created the `CmsContent` DynamoDB table and seeded it with 9 CMS sections.
- Deployed the Node.js 24 Lambda `content-read-function` using AWS SAM and CloudFormation.
- Configured the API Gateway REST API (`cms-content-api`, `dev` stage) with Lambda invoke permissions for the public content routes.
- Implemented read logic for published content using DynamoDB `GetItem` and `BatchGetItem` calls.
- Used AWS SDK `unmarshall()` to convert DynamoDB `AttributeValue` objects into JavaScript objects before response shaping.
- Added Zod validation for published content responses before returning them to the caller.
- Verified the deployed APIs:
  - `GET /content` returned HTTP 200 with all 9 sections.
  - `GET /content/hero` returned HTTP 200 with the published hero content and metadata.
- Confirmed the deployment completed successfully in the `cms-backend-dev` stack in `us-west-1`.

### Scope still pending

The following items are explicitly not part of Sprint 4.4 and remain planned for future work:

- Next.js frontend integration to consume the read-only API and render published CMS content
- Admin editing workflow and draft persistence
- Draft save and publish operations
- Cognito authentication for admin endpoints
- Publishing/versioning and media upload flows

### Next Sprint

The next planned sprint in the existing roadmap is Sprint 4.5: **Cognito & Admin Authentication**.

This follows the current Phase 4 plan and continues the sequence from read-only backend delivery into protected admin functionality, persisting drafts, and the eventual publishing workflow.
