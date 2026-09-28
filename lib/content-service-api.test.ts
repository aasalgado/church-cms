import { vi, describe, it, expect, afterEach, beforeEach } from "vitest";

// Ensure CMS_API_BASE is set before importing the adapter (adapter throws on import if missing)
process.env.CMS_API_BASE = "http://mock-api";

let adapter: any;

beforeEach(async () => {
  // import adapter after setting CMS_API_BASE
  adapter = await import("./content-service-api");
});

afterEach(() => {
  vi.restoreAllMocks();
  delete process.env.CMS_API_BASE;
});

describe("content-service-api", () => {
  it("getPublished: successful fetch and validation", async () => {
    const called: string[] = [];
    vi.stubGlobal("fetch", async (url: string) => {
      called.push(url);
      return {
        ok: true,
        json: async () => ({
          published: {
            enabled: true,
            image: { src: "/x.png", alt: "a" },
            preHeading: "p",
            headline: "h",
            copy: "c",
            primaryCta: { enabled: false, label: "l", href: "#" },
            secondaryCta: { enabled: false, label: "l2", href: "#" },
          },
        }),
      } as any;
    });

    const result = await adapter.default.getPublished("hero");
    expect(result).toBeTruthy();
    expect(called[0]).toBe("http://mock-api/content/hero");
  });

  it("getAllPublished: successful fetch and validation", async () => {
    const called: string[] = [];
    vi.stubGlobal("fetch", async (url: string) => {
      called.push(url);
      return {
        ok: true,
        json: async () => ({
          all: {
            hero: {
              enabled: true,
              image: { src: "/x.png", alt: "a" },
              preHeading: "p",
              headline: "h",
              copy: "c",
              primaryCta: { enabled: false, label: "l", href: "#" },
              secondaryCta: { enabled: false, label: "l2", href: "#" },
            },
          },
        }),
      } as any;
    });

    const all = await adapter.default.getAllPublished();
    expect(all).toBeTruthy();
    expect(called[0]).toBe("http://mock-api/content");
    expect(all.hero).toBeTruthy();
  });

  it("invalid API content: adapter rejects on schema validation", async () => {
    vi.stubGlobal(
      "fetch",
      async () =>
        ({
          ok: true,
          json: async () => ({ published: { bad: "data" } }),
        }) as any,
    );
    await expect(adapter.default.getPublished("hero")).rejects.toThrow();
  });

  it("HTTP failure: non-2xx responses cause fetch error", async () => {
    vi.stubGlobal("fetch", async () => ({ ok: false, status: 502 }) as any);
    await expect(adapter.default.getAllPublished()).rejects.toThrow();
  });
});
