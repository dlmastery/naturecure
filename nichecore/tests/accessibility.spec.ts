import { test, expect } from "@playwright/test";

/**
 * Audit · Accessibility (keyboard + ARIA spot checks).
 * Lighthouse a11y scores are run separately via the chrome-devtools MCP and recorded in
 * docs/CERTIFICATION.md; this suite enforces the load-bearing patterns directly.
 */

const PAGES = ["/", "/atlas", "/skin/vitiligo", "/c/skin-pigmentation", "/guru", "/companion", "/expert"];

test.describe("Skip-to-content link is the first focusable element", () => {
  for (const r of PAGES) {
    test(`${r} → Tab focuses "Skip to content"`, async ({ page }) => {
      await page.goto(r, { waitUntil: "domcontentloaded" });
      // bring focus into the document
      await page.evaluate(() => document.body.tabIndex = -1);
      await page.keyboard.press("Tab");
      const focused = await page.evaluate(() => document.activeElement?.textContent?.trim() ?? "");
      expect(focused).toMatch(/^Skip to content$/i);
    });
  }
  test("activating the skip link jumps focus past the nav", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    // URL should now have the #main fragment
    expect(page.url()).toMatch(/#main$/);
  });
});

test.describe("ARIA + semantic landmarks", () => {
  test("primary nav has an accessible name", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("navigation", { name: /^Primary$/ })).toBeVisible();
  });
  test("main landmark exists exactly once", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("main#main")).toHaveCount(1);
  });
  test("evidence grade badges expose readable accessible names", async ({ page }) => {
    await page.goto("/skin/vitiligo");
    const badges = page.getByRole("img", { name: /^Evidence grade [A-Z]/ });
    expect(await badges.count()).toBeGreaterThan(3);
  });
  test("quality progressbars have an accessible name", async ({ page }) => {
    await page.goto("/skin/vitiligo");
    const bars = page.getByRole("progressbar", { name: /quality/i });
    expect(await bars.count()).toBeGreaterThan(0);
  });
});

test.describe("Heading order", () => {
  test("home: h1 -> h2 only (no h3 before an h2)", async ({ page }) => {
    await page.goto("/");
    const levels = await page.locator("main h1, main h2, main h3").evaluateAll((els) =>
      els.map((e) => Number(e.tagName.substring(1))),
    );
    expect(levels[0]).toBe(1);
    // No level should jump by more than +1 from the running max-seen.
    let maxSeen = 0;
    for (const lvl of levels) {
      if (lvl > maxSeen + 1) {
        throw new Error(`Heading order jump on /: saw h${lvl} after max-seen h${maxSeen}`);
      }
      maxSeen = Math.max(maxSeen, lvl);
    }
  });
});
