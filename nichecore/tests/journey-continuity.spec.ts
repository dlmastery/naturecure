import { test, expect } from "@playwright/test";

/**
 * Audit · Linear journey continuity
 * Every consumer page renders a `<NextStep>` ribbon (uniquely findable via
 * `[data-nextstep]` + aria-label "Up next: ...") and that ribbon's link resolves to 200.
 */

const PAGES_WITH_NEXT_STEP = [
  { route: "/", expectedHrefPrefix: "/skin/vitiligo" },
  { route: "/skin/vitiligo", expectedHrefPrefix: "/c/skin-pigmentation/package" },
  { route: "/c/skin-pigmentation", expectedHrefPrefix: "/c/skin-pigmentation/package" },
  { route: "/companion", expectedHrefPrefix: "/progress" },
  // The new unified journey detail
  { route: "/skin/acne-prone", expectedHrefPrefix: "/c/skin-pigmentation/package" },
];

for (const p of PAGES_WITH_NEXT_STEP) {
  test(`${p.route} has a NextStep ribbon that resolves`, async ({ page }) => {
    await page.goto(p.route, { waitUntil: "domcontentloaded" });
    const ribbon = page.locator("[data-nextstep]");
    await expect(ribbon).toBeVisible();
    const href = await ribbon.getAttribute("href");
    expect(href, `${p.route} NextStep href`).toBeTruthy();
    expect(href!).toMatch(p.expectedHrefPrefix);
    const res = await page.request.get(href!);
    expect(res.status(), `${href} HTTP`).toBe(200);
  });
}

test("Package NextStep (post-safety-screen) points to the companion", async ({ page }) => {
  await page.goto("/c/skin-pigmentation/package");
  await expect(page.getByText("Safety screen", { exact: true })).toBeVisible();
  const medsRow = page.locator("p", { hasText: /prescription medications/i }).locator("..").first();
  const pregRow = page.locator("p", { hasText: /pregnant or breastfeeding/i }).locator("..").first();
  await medsRow.getByRole("button", { name: "No" }).click();
  await pregRow.getByRole("button", { name: "No" }).click();
  const ribbon = page.locator("[data-nextstep]");
  await expect(ribbon).toBeVisible();
  await expect(ribbon).toHaveAttribute("href", "/companion");
});
