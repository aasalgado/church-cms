// Basic unit test scaffold for Lambda handler
import { test, expect } from "vitest";
import { handler } from "../src/handler";

test("handler exists", async () => {
  expect(typeof handler).toBe("function");
});
