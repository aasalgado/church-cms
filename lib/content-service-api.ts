import { SectionSchemas, type SectionId } from "./schemas";

function requireCmsApiBase(): string {
  const v = process.env.CMS_API_BASE;
  if (!v) throw new Error("CMS_API_BASE is required for API content service");
  return v;
}

const BASE = requireCmsApiBase();

async function fetchJson(path: string) {
  const url = `${BASE.replace(/\/$/, "")}${path}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`fetch failed: ${res.status}`);
  return await res.json();
}

export default {
  async getPublished(sectionId: SectionId) {
    const data = await fetchJson(`/content/${sectionId}`);
    const schema = SectionSchemas[sectionId];
    const parsed = schema.parse(data.published);
    return parsed;
  },

  async getAllPublished() {
    const data = await fetchJson(`/content`);
    const all = data.all;
    // Validate each
    for (const k of Object.keys(all)) {
      const schema = SectionSchemas[k as SectionId];
      schema.parse(all[k]);
    }
    return all as Record<string, any>;
  },
} as const;
