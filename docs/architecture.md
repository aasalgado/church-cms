# Project Architecture

## Purpose

This document records the target backend architecture for the RhythmAddict CMS (v1) and the rationale for decisions made during Phase 4. The goal is a simple, secure, maintainable, and affordable serverless architecture using API Gateway, Lambda, DynamoDB, S3, Cognito, CloudWatch, and IAM.

---

## Current Architecture

- **TypeScript content models:** Content shapes and interfaces live in `content/*.ts` (for example `content/home-content.ts` and `content/site-content.ts`). These provide the compile-time DTOs used by components.
- **React state:** The admin editor stores drafts in client-side React state (`useState`) in `app/admin/page.tsx` and child editor components under `components/admin/`.
- **Static content imports:** The public site (`app/page.tsx`) imports content modules directly and passes them into presentational components. There is no network API for content in the current codebase.
- **Local draft editing:** Admin edits are held in-memory on the client. Unsaved edits are lost on refresh. There is no persistent draft or publish workflow today.

---

## Target Architecture

The target architecture for v1 uses a minimal serverless stack:

- **Next.js** — Hosts the public site and the admin UI. Server-side rendering or server components call public read endpoints to fetch published content. Admin UI uses client-side code and Cognito for authentication.
- **Amazon API Gateway** — Public REST surface for content read and admin write/preview operations. Public read endpoints are unauthenticated; admin endpoints are protected by Cognito JWT authorizers.
- **AWS Lambda** — Implements business logic: validation, draft persistence, publish transactions, and generating S3 presigned URLs. Keep Lambdas focused and small.
- **Amazon DynamoDB** — Stores structured content: `CmsContent` table with one item per editable section, containing `draft` and `published` attributes plus metadata (version, timestamps, author).
- **Amazon S3** — Stores media (images). Admin obtains presigned URLs from Lambda and uploads directly to S3. S3 objects are referenced by key in DynamoDB content items.
- **Amazon Cognito** — User Pool for admin users; issues JWTs used to protect admin API endpoints.
- **Amazon CloudWatch** — Centralized logs and metrics for Lambdas and API Gateway; set alarms for failed publishes and error-rate thresholds.
- **IAM** — Least-privilege roles for Lambdas (DynamoDB/S3/CloudWatch access); policies for API Gateway and other AWS resources.

---

## Data Flow

Public Website

Browser
↓
Next.js (server components OR client fetch)
↓
API Gateway (GET /v1/content/\*)
↓
Lambda (read handler)
↓
DynamoDB (published payloads)

Admin CMS

Admin (browser)
↓
Edit (React state)
↓
Save (POST /v1/content/:sectionId with Cognito JWT)
↓
API Gateway
↓
Lambda (validation + draft persist)
↓
DynamoDB (draft attribute on section item)

Publish

Admin → POST /v1/content/:sectionId/publish (Cognito JWT)
↓
API Gateway → Lambda (transactional copy of `draft` → `published`, version increment)
↓
DynamoDB (published attribute updated)

---

## Content Storage Strategy (APPROVED v1)

- **CmsContent table:** A single DynamoDB table named `CmsContent`.
- **One item per editable section:** Each editable homepage section (hero, event-banner, class-schedule, etc.) is a separate DynamoDB item (partition key = section id).
- **No manifest in v1:** The homepage composition and ordering remain controlled by React components in Next.js. A manifest may be introduced later if dynamic composition is required.

Rationale: per-section items keep writes small and localized (good for partial saves), avoid item size limits, and enable straightforward per-section versioning. Avoiding a manifest simplifies v1 and preserves the current React-driven composition.

### V1 item schema (approved)

Each DynamoDB item in the `CmsContent` table represents a single editable section. The approved v1 attributes are:

- `sectionId` (PK, string) — unique identifier for the section (e.g., `hero`, `navbar`, `footer`).
- `draft` (map, nullable) — JSON payload for the current saved draft.
- `published` (map, nullable) — JSON payload for the last published content.
- `version` (number) — publish revision number; incremented on successful publish.
- `lastEditedAt` (string, ISO8601) — timestamp of the last draft save.
- `lastEditedBy` (string) — user id or email who last saved the draft.
- `publishedAt` (string, ISO8601, nullable) — timestamp of the last successful publish.
- `publishedBy` (string, nullable) — user id or email who published the content.
- `etag` or `draftHash` (string, optional) — optional optimistic-concurrency token for edits.
- `meta` (map, optional) — free-form metadata/tags.

Note: the `type` attribute is intentionally omitted because `sectionId` uniquely identifies the section and content shape.

### Schema is a design, not an implementation

This DynamoDB item schema is the approved v1 data model for Phase 4. It is a design artifact: no AWS resources have been created yet and no database schema has been provisioned. Implementation of this schema will occur during the backend implementation sprints (starting in Sprint 4.2).

---

### Draft workflow (content lifecycle)

- When the CMS editor opens a section, the client requests the section item. If a saved `draft` exists, the editor loads the saved draft into React state.
- If no `draft` exists, the editor initializes its state using the `published` payload.
- While editing, changes remain in React state only and are not persisted until the user saves.
- Clicking **Save Draft** sends the current editor state to the API, which persists the JSON into the item's `draft` attribute and updates `lastEditedAt` and `lastEditedBy`.
- The public website continues to read only the `published` attribute; saved drafts do not affect public content.
- Clicking **Publish** triggers a publish operation (authenticated): the backend validates the draft, copies `draft` → `published`, increments `version`, sets `publishedAt` and `publishedBy`, and (optionally) clears or retains the `draft` depending on policy.

---

---

## AWS Resource Inventory

Status: No AWS resources currently exist for this project. The infrastructure inventory and resource provisioning plan will begin during the backend implementation sprints (starting in Sprint 4.2).

Records of provisioned resources, ARNs, and IaC references will be added here as Sprint 4 progresses and resources are created.

---

### Versioning and history (v1)

- The `version` attribute is metadata only in v1 and represents the current published revision number. It MUST be incremented when a draft is successfully published.
- Full historical version storage and a history UI are intentionally deferred to a later sprint. Possible future approaches include:
  - a separate `CmsContentHistory` table storing snapshots per publish,
  - versioned items in the same `CmsContent` table using a sort key (e.g., `sk = "version#<n>"`), or
  - snapshotting published payloads to S3 and recording keys in a light history index.

These options will be evaluated and implemented only when the team requires full historical retrieval or rollback capabilities.

---

## AWS Service Responsibilities

- **Next.js:** Render public pages; call read endpoints; host admin UI; obtain Cognito tokens for admin users.
- **API Gateway:** Expose REST endpoints; route to Lambdas; enforce Cognito authorizer for admin routes.
- **Lambda:** Validate payloads, persist drafts, execute publish transactions, generate presigned S3 URLs, and return structured errors.
- **DynamoDB:** Store per-section content items with `draft` and `published` attributes and metadata.
- **S3:** Store uploaded media; serve assets via CloudFront later.
- **Cognito:** Provide authentication for admin users and issue JWTs used by API Gateway/Lambda.
- **CloudWatch:** Log Lambda invocations, errors, and publish events; host dashboards and alarms.
- **IAM:** Provide least-privilege access for Lambdas and service integrations.

---

## Architecture Decisions

- **ADR-001:** One DynamoDB item per editable CMS section. (Approved in Sprint 4.1)
- **ADR-002:** No manifest in Version 1; React controls homepage composition. (Approved in Sprint 4.1)
- **ADR-003:** Use Cognito for admin authentication; protect admin write/preview endpoints via JWT authorizers. (Approved in Sprint 4.1)

Future architecture decisions and ADRs will be appended here as Phase 4 progresses.

---

## Future Expansion (deferred)

The following features are intentionally deferred for later phases and will receive separate architecture work:

- Students management
- Bookings and scheduling engine
- Payments integration
- Media library and management UI
- CloudFront origin + advanced image transforms
- Full version history UI and archival strategy
- Dynamic page builder / manifest-driven composition

---

## Architecture Principles

- Keep components presentation-focused.
- Keep backend logic inside Lambda functions.
- Store structured content in DynamoDB per-section.
- Store media in S3; use presigned uploads for admin uploads.
- Use Cognito for admin authentication and JWT-based API protection.
- Prefer simple architecture and iterate — build only what is needed for v1.
