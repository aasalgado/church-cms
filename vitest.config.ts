import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globals: false,
    include: [
      "lib/content-service-api.test.ts",
      "services/content-read/test/handler.test.ts",
    ],
  },
});
