Extend the existing admin CMS by adding support for editing the [SECTION_NAME] section.

Before making changes, inspect the existing implementations for:

- EventBannerEditor
- HeroEditor
- StudioIntroductionEditor
- SiteNavbarEditor
- SiteFooterEditor
- the existing presentation component for [SECTION_NAME]
- the public homepage
- the admin section registry
- the typed content models in `content/home-content.ts`
- the typed content models in `content/site-content.ts`

Determine whether the section contains:

- page-specific content, which belongs in `content/home-content.ts`
- site-wide content, which belongs in `content/site-content.ts`

Use the content file specified in the section details below.

Do not create a new content file unless there is a clear architectural reason.

Follow the existing architecture and reuse the established editing pattern. Do not redesign or broadly refactor the current admin implementation.

## Section details

- Section label: [SECTION_NAME]
- Presentation component: [PRESENTATION_COMPONENT]
- Content type: [CONTENT_TYPE]
- Static content object: [CONTENT_OBJECT]
- Content file: [CONTENT_FILE]
- New editor file: `components/admin/[EDITOR_FILE]`

## Requirements

### 1. Add a new local draft state in the admin page

Use a name based on the existing content object and initialize it from `[CONTENT_OBJECT]`.

Example pattern:

```ts
const [sectionDraft, setSectionDraft] = useState<ContentType>(contentObject);
```

Use the actual section-specific names rather than the generic names above.

### 2. Create a new controlled editor component

Create the editor at:

`components/admin/[EDITOR_FILE]`

Use props equivalent to:

```ts
interface EditorProps {
  value: [CONTENT_TYPE];
  onChange: (next: [CONTENT_TYPE]) => void;
}
```

Use a section-specific interface name.

The editor must:

- receive the current draft through `value`
- report updated content through `onChange`
- update objects and arrays immutably
- use clear TypeScript types
- avoid `any`
- preserve input focus while editing

For arrays rendered with `.map()`:

- do not use editable values such as labels, titles, text, or `href` values as React keys
- use an existing permanent ID when one is available
- for a fixed list that cannot be added to, removed from, or reordered, using the array index is acceptable
- do not modify the content model solely to add IDs unless the feature requires editable list operations

### 3. Refactor `[PRESENTATION_COMPONENT]` into a pure presentation component if needed

It must accept a required prop equivalent to:

```ts
interface PresentationComponentProps {
  content: [CONTENT_TYPE];
}
```

Do not make the prop optional.

Do not provide a fallback to `[CONTENT_OBJECT]`.

Do not import `[CONTENT_OBJECT]` inside `[PRESENTATION_COMPONENT]`.

The component should render only the content passed through its required `content` prop.

### 4. Update the public homepage

The public homepage must explicitly pass the static content object:

```tsx
<[PRESENTATION_COMPONENT] content={[CONTENT_OBJECT]} />
```

The public homepage must not consume or depend on admin draft state.

### 5. Update the existing admin page

- Add the new section-specific draft state.
- Add a new `[SECTION_NAME]` entry to the existing typed section registry.
- Render `[PRESENTATION_COMPONENT]` with the new draft in the registry preview.
- Render the new controlled editor in the registry editor.
- Reuse the current registry architecture.
- Preserve the existing section-switching behavior.
- Do not modify the overall admin layout.

### 6. Add editor fields

Expose all ordinary administrator-editable fields already defined in the existing `[CONTENT_TYPE]` model.

Do not add new content fields unless required to preserve content currently rendered by the presentation component.

Do not add:

- image uploading
- styling controls
- layout controls
- typography controls
- persistence
- APIs
- authentication

For nested objects or arrays, provide practical controls that match the existing model and update them immutably.

## Architecture constraints

- Keep one `/admin` page.
- Keep the existing typed section registry.
- Keep separate typed draft state for every section.
- Do not combine all drafts into one object.
- Do not add React Context.
- Do not add reducers.
- Do not add `localStorage`.
- Do not add persistence.
- Do not add authentication.
- Do not add APIs.
- Do not add AWS services.
- Do not add a database.
- Do not modify unrelated components.
- Preserve the existing public website appearance and behavior.
- Keep the public homepage independent from admin draft state.

## Implementation quality

- Follow the same architecture established across the existing CMS-enabled sections.
- Keep editor components controlled by the admin page.
- Reuse the existing presentation component for the live preview.
- Keep the implementation small and consistent with the current architecture.
- Avoid unnecessary abstractions.
- Avoid unrelated cleanup or formatting changes.
- Preserve existing navigation and responsive behavior where applicable.
- Do not duplicate an existing shared content type when the same general-purpose type already represents the required data.

## Validation

After implementation:

1. Run:

```bash
npm run build
```

2. Fix any TypeScript or build errors caused by the changes.

3. Manually verify that:

- editor inputs retain focus while typing
- draft changes appear immediately in the live preview
- the public homepage still renders from static content
- existing responsive and interactive behavior still works

4. Summarize:

- every file created
- every file modified
- which content file was used and why
- how `[SECTION_NAME]` was integrated into the existing registry
- how the public homepage remains separate from admin draft state
- how nested content was updated, if applicable
- how React keys were handled for editable arrays, if applicable
- any assumptions made based on the existing `[CONTENT_TYPE]` model

Do not expand the scope beyond the requirements above.
