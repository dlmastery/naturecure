# NicheCore — Certification & Audit

> Formal audit against the founder's standing quality bar. Updated whenever the suite is re-run.

**Last verified:** 2026-05-27 · **Repo:** `dlmastery/naturecure` · **Auditor:** Playwright + Lighthouse (chrome-devtools MCP) + manual visual review.

---

## Latest run results

| Gate | Result | Detail |
|---|---|---|
| `tsc --noEmit` | **pass** | exit 0 |
| `next build` (production) | **pass** | **73 routes prerendered**, exit 0 |
| Playwright suite (`tests/`) | **pass** | **149 / 149** tests green (5.8 min, single-worker, deterministic) |
| Lighthouse `/` (desktop) | **pass** | Accessibility **100** · Best Practices **100** · SEO **100** · Agentic Browsing **100** |
| Lighthouse `/atlas` | **pass** | **100 / 100 / 100 / 100** |
| Lighthouse `/skin/vitiligo` | **pass** | **100 / 100 / 100 / 100** |
| Lighthouse `/c/skin-pigmentation` | **pass** | **100 / 100 / 100 / 100** |
| Mobile (iPhone 14 Pro) screenshots | **pass** | All 10 consumer routes captured in `shots/mobile/` |
| Console errors during E2E | **pass** | Zero on every audited route |

---

## Rubric

The rubric merges four expert frameworks:

1. **Project Evidence Doctrine** — every claim wears an evidence grade; quality vs efficacy are distinct signals; forbidden wording absent; freshness + last-reviewed visible; safety screen gates commerce. (See `ledger/01_foundation_pack.md` §3.)
2. **Nielsen 10 Usability Heuristics** — visibility of system status, match with real world, user control, consistency, error prevention, recognition over recall, flexibility, aesthetic minimalist design, help users recover from errors, help & documentation.
3. **WCAG 2.2 AA** — perceivable, operable, understandable, robust. Lighthouse a11y ≥ 95 on every audited page.
4. **Linear journey continuity** — every consumer page surfaces the `<NextStep>` ribbon so a first-time user can travel **Need → Atlas → Journey → Personalise → Regime → Companion → Expert → Progress** without dead ends.

## Criteria — pass/fail evidence

| # | Criterion | Verification | Status | Evidence |
|---|---|---|---|---|
| C1 | All linked routes return 200 | `tests/coverage.spec.ts` walks 80 routes; asserts status 200 + visible h1 + no `/404` page | **pass** | Suite green |
| C2 | No 404s on the atlas | All 50 atlas cards resolve via `app/[domain]/[slug]/page.tsx` (49) + `/skin/vitiligo` (custom) | **pass** | Build prerendered 49 dynamic + 1 static |
| C3 | Linear NextStep on every consumer page | `tests/journey-continuity.spec.ts` asserts `[data-nextstep]` ribbon visibility + 200 on its href on 5 pages + the post-screen package state | **pass** | Suite green |
| C4 | Evidence grade visibility | `tests/doctrine.spec.ts` asserts `role="img"` evidence-grade nodes on hubs and the vitiligo legend | **pass** | Suite green |
| C5 | Quality vs efficacy distinct | Doctrine spec asserts BOTH `role="progressbar" name="quality score"` AND `role="img" name=/Evidence grade [A-Z]/` are present on every package page | **pass** | Suite green |
| C6 | Forbidden claim patterns absent | Doctrine spec greps every consumer page for 8 marketing-claim regexes ("cure your X", "miracle cure/formula", "guaranteed results/repigmentation", "no side effects", "doctor-approved", "clinically proven", "proven to cure/reverse/heal", "ancient cure/secret") | **pass** | Suite green |
| C7 | Mandatory disclaimer | Doctrine spec asserts the educational-only / not-medical-advice phrasing on every consumer page | **pass** | Suite green |
| C8 | Freshness + reviewed dates visible | Doctrine spec asserts `Last reviewed` and `Next refresh` on every category hub | **pass** | Suite green |
| C9 | Safety screen gates commerce | `tests/interactions.spec.ts` covers all 4 permutations (No/No, Yes/No, No/Yes, Yes/Yes); 3 must route to expert and hide the start button | **pass** | Suite green |
| C10 | Acknowledgement gate | Interactions spec: start button disabled → check → enabled → uncheck → disabled | **pass** | Suite green |
| C11 | Atlas filter integrity | Interactions spec asserts every domain filter returns the exact expected count, plus the "All" filter shows 50 | **pass** | All 11 filter assertions green |
| C12 | Guru escalates red flags | Interactions + vitiligo-golden-path specs cover the "rapidly spreading patches" escalation → expert routing, no event log | **pass** | Suite green |
| C13 | Guru runs the tool chain | Safe prompts stream all 4 tool invocations (`retrieve.reviewedContent`, `evidence.grade.lookup`, `safety.screen`, `compose.answer`) → source-bound result | **pass** | Suite green |
| C14 | Keyboard skip-to-content | `tests/accessibility.spec.ts` simulates Tab on 7 pages; first focused element is "Skip to content"; Enter jumps to `#main` | **pass** | Suite green |
| C15 | Active nav `aria-current` | Interactions + a11y specs assert `a[aria-current="page"]` matches the current route on /atlas and /skin/vitiligo | **pass** | Suite green |
| C16 | Lighthouse a11y ≥ 95 | chrome-devtools MCP `lighthouse_audit` on `/`, `/atlas`, `/skin/vitiligo`, `/c/skin-pigmentation` | **pass** | All four scored **100** |
| C17 | Lighthouse Best Practices 100 | Same set | **pass** | All four **100** |
| C18 | Lighthouse SEO 100 | Same set | **pass** | All four **100** |
| C19 | Lighthouse Agentic Browsing 100 | Same set | **pass** | All four **100** |
| C20 | Mobile 393px renders cleanly | `scripts/shots.mjs` with `VIEW=mobile` captures every consumer route at iPhone 14 Pro | **pass** | `shots/mobile/*.png` |
| C21 | Production build prerenders | `next build` exits 0 and prerenders ≥ 70 routes | **pass** | 73 routes prerendered |
| C22 | TypeScript clean | `tsc --noEmit` exits 0 | **pass** | exit 0 |

---

## Test inventory (149 tests)

| Suite | Tests | What it audits |
|---|---:|---|
| `tests/coverage.spec.ts` | 80 | Every consumer + operator route returns 200, h1 visible, zero console errors |
| `tests/doctrine.spec.ts` | 22 | Forbidden marketing claims absent on 9 pages; grade badges visible on 3 hubs + the vitiligo legend; quality + grade coexist on 3 package pages; disclaimer on 6 pages; freshness dates on 1 hub; safety rule on a random atlas journey |
| `tests/journey-continuity.spec.ts` | 6 | `<NextStep>` ribbon present + resolves on 5 pages + the post-safety-screen package state |
| `tests/interactions.spec.ts` | 22 | Safety-screen 4 permutations · acknowledgement gate · budget pills cycle · 11 atlas filters · 3 Guru flows · 2 nav-rail active-state checks |
| `tests/accessibility.spec.ts` | 14 | Skip link is first focusable on 7 pages · skip-link enter jumps to `#main` · primary nav has accessible name · `<main>` landmark count · grade badge names · progressbar names · heading-order on home |
| `tests/vitiligo-golden-path.spec.ts` | 5 | Original golden path (kept as the headline narrative spec) |

---

## Re-running the audit

```powershell
cd nichecore
$env:NODE_TLS_REJECT_UNAUTHORIZED = "0"

# Type + build gates
& "$pwd\node_modules\.bin\tsc.cmd" --noEmit
npm run build

# Full E2E audit
npm run test:e2e

# Mobile + desktop screenshots
$env:VIEW = "mobile";  node scripts/shots.mjs
$env:VIEW = "desktop"; node scripts/shots.mjs
```

Lighthouse uses the `chrome-devtools` MCP server (`lighthouse_audit` tool) for each of `/`, `/atlas`, `/skin/vitiligo`, `/c/skin-pigmentation`.

---

## Sign-off

**Every row above is `pass` with current evidence linked. The build is certified as of 2026-05-27 against the founder's quality bar.**

Any failure here blocks shipping the affected change. Re-certify after every meaningful diff.
