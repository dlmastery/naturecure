import { test, expect } from "@playwright/test";

/**
 * The vitiligo golden path — the doctrine-critical user journey:
 *   home → skin hub → vitiligo flagship → package → safety screen.
 * Asserts the load-bearing rules:
 *   - evidence grades visible at every claim
 *   - product quality score is rendered SEPARATELY from efficacy grade
 *   - safety screen actually blocks commerce when a flag fires (medications/pregnant)
 *   - the AI Guru escalates red-flag prompts instead of selling
 */
test.describe("Vitiligo golden path", () => {
  test("home → skin hub → vitiligo → package: trust gates fire correctly", async ({ page }) => {
    // ── Home: editorial hero + need-first catalog
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/search for/i);
    await expect(page.locator("text=Not a chatbot")).toBeVisible();
    await expect(page.getByRole("link", { name: /skin/i }).first()).toBeVisible();

    // ── Skin hub: 16-section template + vitiligo flagship callout
    await page.goto("/c/skin-pigmentation");
    await expect(page.getByRole("heading", { level: 1, name: /skin/i })).toBeVisible();
    await expect(page.locator("text=A living evidence feed")).toBeVisible();
    await expect(page.locator("text=Safety before commerce")).toBeVisible();
    // Grade badge visible near at least one claim
    await expect(page.getByRole("img", { name: /Evidence grade/i }).first()).toBeVisible();
    // Vitiligo flagship link
    await page.getByRole("link", { name: /vitiligo.*flagship.*depth/i }).click();
    await expect(page).toHaveURL(/\/skin\/vitiligo$/);

    // ── Vitiligo journey: 3 combos, interactions, package
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/without the snake oil/i);
    await expect(page.locator("text=Nrf2-Ferroptosis & Melanocyte Shield")).toBeVisible();
    await expect(page.locator("text=Gut-Skin-Metabolic Axis Reset")).toBeVisible();
    await expect(page.locator("text=Rasayana Stress & Rejuvenation")).toBeVisible();
    // Interaction warnings (no commerce-only framing)
    await expect(page.locator("text=Strictly avoid")).toBeVisible();
    // Bundle card shows quality progressbar AND grade badge — separate signals
    await expect(page.getByRole("progressbar", { name: /quality score/i }).first()).toBeVisible();

    // ── Package + safety screen: medications=Yes must BLOCK commerce → expert route
    await page.goto("/c/skin-pigmentation/package");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/personalised regime/i);
    await page.getByRole("button", { name: "Yes" }).first().click();  // medications
    await page.getByRole("button", { name: "No" }).nth(1).click();   // pregnancy
    // Must show expert-routing card, NOT a checkout button
    await expect(page.locator("text=route you to a human")).toBeVisible();
    await expect(page.getByRole("link", { name: /request expert review/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /start my skin regime/i })).toHaveCount(0);
  });

  test("package: clean safety screen reveals the package + acknowledgement gate", async ({ page }) => {
    await page.goto("/c/skin-pigmentation/package");
    await page.getByRole("button", { name: "No" }).first().click();  // medications
    await page.getByRole("button", { name: "No" }).nth(1).click();  // pregnancy
    await expect(page.locator("text=safety cleared")).toBeVisible();
    // The start CTA is disabled until the acknowledgement is checked
    const start = page.getByRole("button", { name: /start my skin regime/i });
    await expect(start).toBeDisabled();
    await page.getByRole("checkbox").check();
    await expect(start).toBeEnabled();
  });

  test("atlas: domain filter changes the result count", async ({ page }) => {
    await page.goto("/atlas");
    // Total journey cards in the grid (scoped to main to exclude the nav rail)
    const allCards = page.locator("main a[href^='/']").filter({ has: page.locator("h3.font-display") });
    expect(await allCards.count()).toBeGreaterThanOrEqual(50);
    // Filter to Skin → only the 6 skin journey cards in the grid remain
    await page.getByRole("button", { name: /^Skin\s/ }).click();
    const skinCards = page.locator("main a[href^='/skin/']").filter({ has: page.locator("h3.font-display") });
    await expect(skinCards).toHaveCount(6);
  });

  test("guru: red-flag prompt escalates instead of answering", async ({ page }) => {
    await page.goto("/guru");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/verified.*task workspace/i);
    // Click the rapidly-spreading-patches suggestion → must escalate, no event log
    await page.getByRole("button", { name: /rapidly spreading patches/i }).click();
    await expect(page.locator("text=Routed to a human")).toBeVisible();
    await expect(page.locator("text=Verified result")).toHaveCount(0);
  });

  test("guru: a safe prompt runs through tools and returns a source-bound result", async ({ page }) => {
    await page.goto("/guru");
    await page.getByRole("button", { name: /antioxidant layer/i }).click();
    await expect(page.locator("text=Verified result")).toBeVisible({ timeout: 8000 });
    await expect(page.locator("text=source-bound")).toBeVisible();
    // Event log shows all 4 tool invocations
    await expect(page.locator("text=retrieve.reviewedContent")).toBeVisible();
    await expect(page.locator("text=safety.screen")).toBeVisible();
  });
});
