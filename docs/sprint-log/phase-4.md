# Phase 4

---

## Sprint 4.1 — Backend Architecture

### Status

Completed

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
