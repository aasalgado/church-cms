Sprint 4.4 infra and local testing notes

Important: This directory contains SAM templates and a Lambda scaffold for the read-only CMS API.
DO NOT deploy resources without review and AWS credentials.

Files added:

- `sam-template.yaml` — SAM manifest for the `CmsContent` table and `ContentReadFunction` Lambda (Node.js 24.x).
- `seed/seed-items.json` — placeholder for DynamoDB seed items.
- `seed/seed-items.ts` — Node seed script (uses AWS SDK v3). Requires `AWS_REGION` and AWS credentials to run.

Local testing:

- Build the Lambda bundle:
  ```bash
  cd services/content-read
  npm install
  npm run build
  ```
- Unit tests are recommended; this scaffold includes a basic build step only.

Environment variables:

- `CMS_API_BASE` — required by `lib/content-service-api.ts` when you wire the API adapter into Next.js. This must be server-side only.
- `AWS_REGION`, `TABLE_NAME` — used for seeding if you run the seed script.

Seeding:

- Edit `infra/seed/seed-items.json` to include DynamoDB PutItem shapes for `CmsContent`.
- Run the seed script (requires AWS creds):
  ```bash
  AWS_REGION=us-east-1 node infra/seed/seed-items.js
  ```

Notes:

- The Lambda handler expects items with a `published` attribute stored as either a Map or JSON string. It validates `published` with the shared `lib/schemas` Zod schemas and fails loud on validation errors.
- No runtime fallback to local content is implemented.
