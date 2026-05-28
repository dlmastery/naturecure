import { test, expect } from "@playwright/test";
import { ALL_ROUTES } from "./_routes";

/**
 * Audit · Coverage
 * Every linked route returns 200 with no critical browser console errors.
 * Acceptance: zero 404s, zero "Application error: a server-side exception" pages.
 */

const IGNORED_CONSOLE_PATTERNS = [
  /favicon/i,
  /downloadable font/i,
  /chrome-extension/i,
  /Failed to load resource.*chrome-extension/i,
];

for (const route of ALL_ROUTES) {
  test(`renders ${route}`, async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (m) => {
      if (m.type() !== "error") return;
      const text = m.text();
      if (IGNORED_CONSOLE_PATTERNS.some((re) => re.test(text))) return;
      errors.push(text);
    });
    page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));

    const res = await page.goto(route, { waitUntil: "domcontentloaded" });
    expect(res?.status(), `${route} HTTP status`).toBe(200);

    // Must not be the not-found page
    await expect(page.getByText(/this page could not be found/i)).toHaveCount(0);
    // Must have an h1
    await expect(page.locator("h1").first()).toBeVisible();

    // Brief settle so any post-load console errors surface
    await page.waitForTimeout(300);
    expect(errors, `${route} console errors`).toEqual([]);
  });
}
