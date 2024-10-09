import { test } from "@playwright/test";

test("Emulate Page", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.pause();
});
