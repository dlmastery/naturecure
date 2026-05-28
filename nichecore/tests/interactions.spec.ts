import { test, expect, type Page, type Locator } from "@playwright/test";

/**
 * Audit · Interactions
 * Every interactive surface: safety screen permutations (all 4), atlas filter across
 * every domain, Guru 4 suggested prompts (3 safe + 1 red-flag), checkout gate.
 */

/** Locator for the segmented Yes/No control under a labelled question.
 *  Finds the question's <p>, then climbs to its immediate parent div which
 *  contains both the <p> and the Yes/No buttons. */
function questionRow(page: Page, label: RegExp): Locator {
  return page.locator("p", { hasText: label }).locator("..").first();
}

async function openPackage(page: Page, route = "/c/skin-pigmentation/package") {
  await page.goto(route, { waitUntil: "domcontentloaded" });
  // Wait for client hydration via a uniquely-textual marker.
  await expect(page.getByText("Safety screen", { exact: true })).toBeVisible();
}

async function answerSafety(page: Page, meds: "Yes" | "No", preg: "Yes" | "No") {
  await questionRow(page, /prescription medications/i).getByRole("button", { name: meds }).click();
  await questionRow(page, /pregnant or breastfeeding/i).getByRole("button", { name: preg }).click();
}

test.describe("Package · safety-screen permutations", () => {
  const matrix: { meds: "Yes" | "No"; preg: "Yes" | "No"; expectsCommerce: boolean }[] = [
    { meds: "No",  preg: "No",  expectsCommerce: true },
    { meds: "Yes", preg: "No",  expectsCommerce: false },
    { meds: "No",  preg: "Yes", expectsCommerce: false },
    { meds: "Yes", preg: "Yes", expectsCommerce: false },
  ];

  for (const m of matrix) {
    test(`meds=${m.meds}, pregnant=${m.preg} -> ${m.expectsCommerce ? "package shown" : "routed to expert"}`, async ({ page }) => {
      await openPackage(page);
      await answerSafety(page, m.meds, m.preg);
      if (m.expectsCommerce) {
        await expect(page.getByText("safety cleared")).toBeVisible();
        await expect(page.getByRole("button", { name: /start my skin regime/i })).toBeVisible();
      } else {
        await expect(page.getByText(/route you to a human/i)).toBeVisible();
        await expect(page.getByRole("link", { name: /request expert review/i })).toBeVisible();
        await expect(page.getByRole("button", { name: /start my skin regime/i })).toHaveCount(0);
      }
    });
  }

  test("acknowledgement gate: start button toggles with the checkbox", async ({ page }) => {
    await openPackage(page);
    await answerSafety(page, "No", "No");
    const start = page.getByRole("button", { name: /start my skin regime/i });
    await expect(start).toBeVisible();
    await expect(start).toBeDisabled();
    await page.getByRole("checkbox").check();
    await expect(start).toBeEnabled();
    await page.getByRole("checkbox").uncheck();
    await expect(start).toBeDisabled();
  });

  test("budget pills cycle and each one becomes the active selection", async ({ page }) => {
    await openPackage(page);
    // DOM text is lowercase ("starter"); CSS `capitalize` makes it visually "Starter".
    for (const b of ["starter", "core", "premium"] as const) {
      const btn = page.getByRole("button", { name: b, exact: true });
      await btn.click();
      // Active state inlines the forest brand color into the button's style attribute.
      await expect(btn).toHaveAttribute("style", /var\(--color-forest\)/);
    }
  });
});

test.describe("Atlas · domain filter", () => {
  const expected: Record<string, number> = {
    Skin: 6, Hair: 4, Metabolic: 5, Gut: 5,
    "Stress & Sleep": 7, "Brain & Eye": 5, "Mobility & Energy": 5,
    "Hormones & Vitality": 7, "Immune & Oral": 3, "Cardio, Liver & Longevity": 3,
  };
  const escape = (s: string) => s.replace(/[.&,]/g, "\\$&");

  for (const [label, count] of Object.entries(expected)) {
    test(`filter "${label}" shows ${count} cards`, async ({ page }) => {
      await page.goto("/atlas");
      const btn = page.getByRole("button", { name: new RegExp(`^${escape(label)}\\s`) });
      await btn.click();
      const cards = page.locator("main a[href^='/']").filter({ has: page.locator("h3.font-display") });
      await expect(cards).toHaveCount(count);
    });
  }

  test('filter "All" shows all 50 cards', async ({ page }) => {
    await page.goto("/atlas");
    await page.getByRole("button", { name: /^All\s/ }).click();
    const cards = page.locator("main a[href^='/']").filter({ has: page.locator("h3.font-display") });
    await expect(cards).toHaveCount(50);
  });
});

test.describe("Guru · agentic workspace", () => {
  test("safe prompt: antioxidant layer streams 4 tool invocations then a source-bound result", async ({ page }) => {
    await page.goto("/guru");
    await page.getByRole("button", { name: /antioxidant layer/i }).click();
    await expect(page.getByText(/Verified result/i)).toBeVisible({ timeout: 8000 });
    await expect(page.getByText(/source-bound/i)).toBeVisible();
    for (const tool of ["retrieve.reviewedContent", "evidence.grade.lookup", "safety.screen", "compose.answer"]) {
      await expect(page.getByText(tool)).toBeVisible();
    }
  });

  test('safe prompt: "why pick magnesium glycinate" also runs the chain', async ({ page }) => {
    await page.goto("/guru");
    await page.getByRole("button", { name: /magnesium glycinate over citrate/i }).click();
    await expect(page.getByText(/Verified result/i)).toBeVisible({ timeout: 8000 });
  });

  test("red-flag prompt: rapidly spreading patches escalates instead of answering", async ({ page }) => {
    await page.goto("/guru");
    await page.getByRole("button", { name: /rapidly spreading patches/i }).click();
    await expect(page.getByText(/Routed to a human/i)).toBeVisible();
    await expect(page.getByText(/Verified result/i)).toHaveCount(0);
  });
});

test.describe("Nav rail · active state", () => {
  test("the rail item matching the current route has aria-current=page", async ({ page }) => {
    await page.goto("/atlas");
    const active = page.locator('a[aria-current="page"]');
    await expect(active).toHaveText(/atlas/i);
  });

  test("active route is the Vitiligo flagship on /skin/vitiligo", async ({ page }) => {
    await page.goto("/skin/vitiligo");
    await expect(page.locator('a[aria-current="page"]').first()).toHaveText(/vitiligo/i);
  });
});
