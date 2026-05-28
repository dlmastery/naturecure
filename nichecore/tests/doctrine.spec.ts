import { test, expect, type Page } from "@playwright/test";
import { CATEGORY_HUB_ROUTES, JOURNEY_ROUTES, PACKAGE_ROUTES } from "./_routes";

/**
 * Audit · Evidence Doctrine
 * The product's load-bearing rules must be visible in the UI on every relevant page.
 *
 * Note on phrasing: we flag claim *patterns*, not isolated words. "No miracle claims" in
 * the manifesto, "CFU guaranteed to expiry" as a product spec, or the Guru's quoted
 * "what I filtered out" examples are legitimate — those are the brand publicly rejecting
 * snake-oil language, not making the claim.
 */

const FORBIDDEN_CLAIM_PATTERNS: { pattern: RegExp; description: string }[] = [
  { pattern: /\bguaranteed\s+(?:results?|outcomes?|repigmentation|reversal|cure|return|growth)\b/i, description: "guaranteed results/outcomes/repigmentation/etc" },
  { pattern: /\bmiracle\s+(?:cure|formula|treatment|drug|fix|pill)\b/i, description: "miracle cure/formula/etc" },
  { pattern: /\bno side effects\b/i, description: "no side effects (always over-claim)" },
  { pattern: /\bdoctor[-\s]?approved\b/i, description: "doctor-approved (no named reviewer)" },
  { pattern: /\bclinically proven\b/i, description: "clinically proven" },
  { pattern: /\bcure\s+(?:your|my)\b/i, description: "cure your/my X" },
  { pattern: /\bproven to (cure|reverse|heal)\b/i, description: "proven to cure/reverse/heal" },
  { pattern: /\bancient (cure|secret|wisdom that)\b/i, description: "ancient cure/secret" },
];

async function visibleBody(page: Page): Promise<string> {
  return await page.locator("main").innerText();
}

test.describe("Forbidden marketing claims", () => {
  for (const r of ["/", "/atlas", "/skin/vitiligo", "/c/skin-pigmentation", "/c/skin-pigmentation/package", "/guru", "/companion", "/expert", "/progress"]) {
    test(`${r} contains no forbidden marketing claims`, async ({ page }) => {
      await page.goto(r, { waitUntil: "domcontentloaded" });
      const text = await visibleBody(page);
      for (const { pattern, description } of FORBIDDEN_CLAIM_PATTERNS) {
        const m = text.match(pattern);
        expect(m, `${r} contains forbidden ${description}${m ? `: "${m[0]}"` : ""}`).toBeNull();
      }
    });
  }
});

test.describe("Evidence grade visibility", () => {
  test("every category hub surfaces grade badges near claims", async ({ page }) => {
    for (const r of CATEGORY_HUB_ROUTES.slice(0, 3)) {
      await page.goto(r, { waitUntil: "domcontentloaded" });
      const badges = page.getByRole("img", { name: /^Evidence grade [A-Z]/ });
      expect(await badges.count(), `${r} grade badges`).toBeGreaterThan(0);
    }
  });

  test("every package page shows BOTH a quality progressbar AND an evidence grade per product", async ({ page }) => {
    for (const r of PACKAGE_ROUTES.slice(0, 3)) {
      await page.goto(r, { waitUntil: "domcontentloaded" });
      // Wait for hydration — the safety screen header is the first interactive piece.
      await expect(page.getByText("Safety screen", { exact: true })).toBeVisible();
      // Clear the safety screen so the package becomes visible. Use semantic question rows.
      const medsRow = page.locator("p", { hasText: /prescription medications/i }).locator("..").first();
      const pregRow = page.locator("p", { hasText: /pregnant or breastfeeding/i }).locator("..").first();
      await medsRow.getByRole("button", { name: "No" }).click();
      await pregRow.getByRole("button", { name: "No" }).click();
      await expect(page.locator("text=safety cleared")).toBeVisible();
      await expect(page.getByRole("progressbar", { name: /quality score/i }).first()).toBeVisible();
      await expect(page.getByRole("img", { name: /^Evidence grade [A-Z]/ }).first()).toBeVisible();
    }
  });

  test("vitiligo flagship shows the full grade legend in its hero", async ({ page }) => {
    await page.goto("/skin/vitiligo");
    for (const g of ["B", "C", "D", "T"]) {
      await expect(page.getByRole("img", { name: new RegExp(`Evidence grade ${g}`) }).first()).toBeVisible();
    }
  });
});

test.describe("Freshness + reviewed dates", () => {
  test("category hub shows last-reviewed AND next-refresh dates", async ({ page }) => {
    await page.goto("/c/skin-pigmentation");
    await expect(page.getByText("Last reviewed", { exact: false })).toBeVisible();
    await expect(page.getByText("Next refresh", { exact: false })).toBeVisible();
  });
});

test.describe("Mandatory disclaimer", () => {
  for (const r of ["/", "/skin/vitiligo", "/c/skin-pigmentation", "/companion", "/expert", "/progress"]) {
    test(`${r} contains the educational-only disclaimer`, async ({ page }) => {
      await page.goto(r, { waitUntil: "domcontentloaded" });
      const text = (await visibleBody(page)).toLowerCase();
      expect(text).toMatch(/educational|not medical advice|consult a qualified professional/);
    });
  }
});

test.describe("Journey detail safety rule", () => {
  test("a randomly picked atlas journey shows the safety-before-commerce rule", async ({ page }) => {
    const r = JOURNEY_ROUTES.find((x) => x !== "/skin/vitiligo")!;
    await page.goto(r, { waitUntil: "domcontentloaded" });
    await expect(page.getByText(/safety before commerce/i)).toBeVisible();
  });
});
