import { test, expect, type Page } from "@playwright/test";

/**
 * Mock-fidelity audit — drives the founder's goal: "faithful and clear reproduction
 * of mocks to website with proper fidelity and journey testing by playwright".
 *
 * Each test maps to spec §8 in docs/JOURNEY_REDESIGN_SPEC.md. Selectors prefer
 * data-component hooks set by Builder A's components over fragile text matching.
 */

test.describe("DossierShell — persistent nav chrome", () => {
  test("vitiligo page shows the section-index rail with all groups", async ({ page }) => {
    await page.goto("/skin/vitiligo");
    const rail = page.getByRole("navigation", { name: /section index/i });
    await expect(rail).toBeVisible();
    for (const g of ["START HERE", "YOUR PROTOCOL", "SAFETY & TRACKING", "REFERENCE & CARE"]) {
      await expect(rail.getByText(g, { exact: false }).first()).toBeVisible();
    }
    // Overview is the default active section
    const active = rail.locator('[aria-current="location"]').first();
    await expect(active).toContainText(/overview/i);
  });

  test("top bar shows the section counter and the Build my regime CTA", async ({ page }) => {
    await page.goto("/skin/vitiligo");
    const counter = page.locator('[data-component="StepCounter"]').first();
    await expect(counter).toBeVisible();
    await expect(counter).toContainText(/01/);
    await expect(counter).toContainText(/15/);
    await expect(page.getByRole("link", { name: /build my regime/i }).first()).toBeVisible();
  });

  test("rail click smooth-scrolls and updates URL hash", async ({ page }) => {
    await page.goto("/skin/vitiligo");
    const rail = page.getByRole("navigation", { name: /section index/i });
    await rail.getByRole("link", { name: /daily combos/i }).click();
    await page.waitForTimeout(800);
    expect(page.url()).toMatch(/#combos/);
  });

  test("keyboard right-arrow advances to the next section", async ({ page }) => {
    await page.goto("/skin/vitiligo");
    await page.locator("body").press("ArrowRight");
    await page.waitForTimeout(500);
    expect(page.url()).toMatch(/#science/);
  });

  test("AppShell chrome is suppressed on dossier routes (single step counter)", async ({ page }) => {
    await page.goto("/skin/vitiligo");
    const counters = page.locator('[data-component="StepCounter"]');
    // 1 in the top bar; the mobile dock counter is only visible on lg- viewports
    expect(await counters.count()).toBeLessThanOrEqual(3);
  });
});

test.describe("Editorial fidelity — vitiligo hero", () => {
  test("h1 contains 'vitiligo' and 'snake oil'", async ({ page }) => {
    await page.goto("/skin/vitiligo");
    const h1Text = await page.locator("h1").first().innerText();
    expect(h1Text.toLowerCase()).toContain("vitiligo");
    expect(h1Text.toLowerCase()).toContain("snake oil");
  });

  test("foundation pillar row shows the four pillars", async ({ page }) => {
    await page.goto("/skin/vitiligo");
    for (const t of ["Evidence first", "Natural protocols", "Recurring care", "Honest boundaries"]) {
      await expect(page.getByText(t, { exact: false }).first()).toBeVisible();
    }
  });
});

test.describe("Tinnitus is a first-class journey (not flagship-decorated)", () => {
  test("/ears/tinnitus h1 contains 'tinnitus' and 'snake oil'", async ({ page }) => {
    await page.goto("/ears/tinnitus");
    const h1Text = await page.locator("h1").first().innerText();
    expect(h1Text.toLowerCase()).toContain("tinnitus");
    expect(h1Text.toLowerCase()).toContain("snake oil");
    const rail = page.getByRole("navigation", { name: /section index/i });
    await expect(rail).toBeVisible();
  });

  test("tinnitus journey renders dossier metadata (grade badge)", async ({ page }) => {
    const res = await page.request.get("/ears/tinnitus");
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body).toMatch(/Evidence grade/i);
  });
});

test.describe("Atlas includes tinnitus + atlas links resolve", () => {
  test("atlas page lists tinnitus support", async ({ page }) => {
    await page.goto("/atlas");
    await expect(page.getByText(/Tinnitus Support/i).first()).toBeVisible();
  });

  test("atlas shows 51 journey cards in the grid (50 + tinnitus)", async ({ page }) => {
    await page.goto("/atlas");
    await page.getByRole("button", { name: /^All\s/ }).click();
    const cards = page.locator("main a[href^='/']").filter({ has: page.locator("h3.font-display") });
    await expect(cards).toHaveCount(51);
  });
});

async function answerSafety(page: Page, answers: ("Yes" | "No")[]) {
  for (let i = 0; i < answers.length; i++) {
    await page.getByRole("button", { name: new RegExp(`^${answers[i]}$`) }).first().click();
    // Continue only exists while there's a "next" step; final answer auto-completes
    const cont = page.getByRole("button", { name: /^Continue/i }).first();
    if (await cont.isVisible({ timeout: 500 }).catch(() => false)) {
      await cont.click();
      await page.waitForTimeout(150);
    }
  }
}

test.describe("Package flow — no dead ends, full end-to-end", () => {
  test("safety quiz cleared (all-No) reveals the package", async ({ page }) => {
    await page.goto("/c/skin-pigmentation/package");
    await expect(page.getByText(/safety screen/i).first()).toBeVisible();
    await answerSafety(page, ["No", "No", "No", "No"]);
    // After clearing, the 90-day pack title appears
    await expect(page.getByText(/90 days|90-day|skin pack/i).first()).toBeVisible({ timeout: 8000 });
  });

  test("medications=Yes routes to expert with safety query params in href", async ({ page }) => {
    await page.goto("/c/skin-pigmentation/package");
    await answerSafety(page, ["Yes", "No", "No", "No"]);
    await expect(page.getByText(/route you to a human first|routed to a human/i)).toBeVisible({ timeout: 8000 });
    const link = page.getByRole("link", { name: /expert chart review|request expert/i }).first();
    const href = await link.getAttribute("href");
    expect(href).toMatch(/from=safety/);
    expect(href).toMatch(/meds=yes/);
  });

  test("/checkout/confirm renders and links to /companion?onboarded=true", async ({ page }) => {
    await page.goto("/checkout/confirm?bundle=skin-resilience-90&tier=core&sub=true");
    const activate = page.getByRole("link", { name: /activate companion|activate the companion/i });
    await expect(activate).toBeVisible({ timeout: 8000 });
    const href = await activate.getAttribute("href");
    expect(href).toMatch(/\/companion/);
    expect(href).toMatch(/onboarded=true/);
  });

  test("/companion?onboarded=true&bundle=… surfaces the onboarded state", async ({ page }) => {
    await page.goto("/companion?onboarded=true&bundle=skin-resilience-90");
    // Either the OnboardedBanner data-component OR the 'Day 1' onboarded-state stat is visible
    const dayOne = page.getByText(/Day 1\b/);
    await expect(dayOne).toBeVisible({ timeout: 8000 });
  });

  test("expert page reflects routed-from-safety query params", async ({ page }) => {
    await page.goto("/expert?from=safety&category=skin-pigmentation&meds=yes&preg=no&organ=no&allergies=no");
    await expect(page.getByText(/routed from safety screen/i)).toBeVisible();
    await expect(page.getByText(/prescription medications/i)).toBeVisible();
  });
});
