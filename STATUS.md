# NicheCore — session checkpoint (2026-05-30)

You paused on low battery. This file is the snapshot so the next session picks up cleanly.

## Where we are

**v6.2.3 dossier regen wave is in progress.** Tinnitus (already at v6.2.1) was the exemplar; the skill was bumped to v6.2.3; nine bucket-agents were dispatched to regen the other 50 ailments. Several agents crashed mid-flight on socket timeouts (~28-34 min wall time when given 5+ dossiers). Recovery agents in smaller chunks (≤3 dossiers each) have been completing cleanly.

## Committed at this checkpoint

| Commit | What |
|---|---|
| `151d7c0` | v6.2.3 regen wave — 21 dossiers landed across 8 buckets |
| `77fcd1a` | Hair bucket v6.2.3 (4 dossiers, 63.5k words) |
| `e1bfffc` | Dossier chrome (clickable brand, back-nav, GO TO site-nav, widened body, table polish) + skill v6.2.3 web-rendering contract |
| `ec0a3c4` | Skill v6.2.1 → v6.2.2 — absorbed 4 tinnitus-agent defect callouts |
| `8633389` | Tree-rail: never label sub-sections "Overview"; tables must have TL;DR |
| `79a2ac7` | Tinnitus v6.2.1 dossier (17,984w, the exemplar) |
| `b42cbe7` | ailment-360 skill v6.1 → v6.2 (seven load-bearing rules) |
| `180a955` | Cloud Run deployment track (Dockerfile + cloudbuild + GH Actions + runbook) |
| `313f6f4` | NicheCore UX: home-hero search, mind-map wrap, atlas grade legend, tree rail, DeepDive |

## Dossier landing scorecard (50 + tinnitus)

### Done — v6.2.3 (25 + tinnitus v6.2.1 = 26 of 50)

**Tinnitus exemplar:** `tinnitus-support` (v6.2.1, 17,984w)

**Skin (4/6):** vitiligo-support · acne-prone-skin · eczema-prone-skin · psoriasis-prone-skin

**Hair (4/4 — FULL):** hair-thinning-density · stress-shedding · dandruff-scalp-comfort · premature-greying

**Metabolic (3/5):** blood-sugar-support · weight-belly-fat · insulin-resistance-support

**Gut (5/5 — FULL):** gut-bloating · ibs-like-patterns · reflux-support · constipation-regularity · microbiome-reset

**Stress-Sleep + Mental (2/7):** anxiety-like-calm · low-mood-support

**Brain-Eye (1/5, excl. tinnitus):** brain-fog-focus

**Mobility-Energy (1/5):** daily-energy-fatigue

**Hormone-Vitality (3/7):** pcos-support · menopause-perimenopause · mens-testosterone-vitality

**Immune+Oral+Cardio+Liver+Longevity+Respiratory (2/6):** heart-cholesterol-bp · liver-alcohol-recovery

### Still pre-v6.2.3 (25 of 50 remaining)

**Skin (2):** melasma-hyperpigmentation · skin-aging-collagen
**Metabolic (2):** glp1-maintenance · cravings-emotional-eating
**Stress-Sleep + Mental (5):** sleep-onset · night-waking · stress-cortisol-balance · burnout-recovery · emotional-eating
**Brain-Eye (4):** memory-aging · screen-eye-strain · dry-eye-comfort · macular-support
**Mobility-Energy (4):** joint-stiffness · knee-mobility · tendon-recovery · sports-recovery
**Hormone-Vitality (4):** fertility-readiness · prostate-wellness · pms-support · libido-stamina
**Immune+ (4):** immune-allergy-comfort · respiratory-seasonal · oral-gum-breath · longevity-healthy-aging

### Background agents that may still be in flight (status unverified at checkpoint)

These were dispatched but I don't know their state since the session paused:
- Skin recovery (`a9d1018a5d54ac11f`) — 3 dossiers: psoriasis ✅, skin-aging ⏳, melasma ⏳ (psoriasis landed in `151d7c0`; skin-aging + melasma may be pending or crashed)
- Metabolic recovery (`abbeb79921dd6fd9c`) — 3 dossiers: insulin-resistance ✅, glp1 ⏳, cravings ⏳
- Hormone recovery (`acbd0f4bffa43d19e`) — 5 dossiers: men's-T ✅, fertility ⏳, pms ⏳, prostate ⏳, libido ⏳
- Stress-A recovery (`ad4792e36bdf5bf51`) — 3 dossiers: low-mood ✅, cortisol ⏳, burnout ⏳
- Stress-B recovery (`a8c2df4c5e81ede17`) — 3 dossiers: emotional-eating ⏳, night-waking ⏳, sleep-onset ⏳
- Brain-Eye first-pass (`a23f6950742c1851a`) — 5 dossiers: brain-fog ✅, memory ⏳, screen-eye ⏳, dry-eye ⏳, macular ⏳
- Mobility-Energy first-pass (`afd15d887f209f926`) — 5 dossiers: daily-energy ✅, joint ⏳, knee ⏳, tendon ⏳, sports ⏳
- Immune+ first-pass (`a16dfe6b868b9e28d`) — 6 dossiers: heart ✅, liver ✅, longevity ⏳, immune ⏳, respiratory ⏳, oral ⏳

**Next session: first action — run the audit script below to see which dossiers landed while you were away.**

## How to resume

### 1. Audit which v6.2.3 dossiers landed while you were away

```bash
cd /c/Users/evija/naturecure/nichecore/research
for f in *.md; do
  v=$(grep '^schemaVersion' "$f" | head -1 | grep -oE 'v6\.2\.3' || echo '-')
  printf '%s %s\n' "$v" "$f"
done | sort
```

Any file showing `v6.2.3` but in the "still pre-v6.2.3" list above = newly landed since checkpoint. `git status --short` will show them as modified.

### 2. Commit any newly landed dossiers

Group by bucket. Example pattern:

```bash
git -C /c/Users/evija/naturecure add nichecore/research/<file1>.md nichecore/research/<file2>.md
git -C /c/Users/evija/naturecure commit -m "Bucket-X v6.2.3 partial — N dossiers landed"
```

### 3. Redispatch agents for anything still pre-v6.2.3

Use the prompt template that worked for the recovery agents (small, 3-dossier max each, explicit reference exemplars). See `tinnitus-support.md` + `vitiligo-support.md` + `anxiety-like-calm.md` as exemplars for any new agent brief.

The pattern that worked: **3 dossiers per agent max** — anything larger crashes at ~28-34 min wall time on socket timeout. Recovery agents at this size completed cleanly.

### 4. Build verification after each commit

```bash
cd /c/Users/evija/naturecure/nichecore
NODE_TLS_REJECT_UNAUTHORIZED=0 npx next build 2>&1 | tail -5
```

Expect `75 routes generated, exit 0`.

## Other in-progress threads

### Dossier chrome polish — DEFERRED

The founder asked whether search / top header / footer are on every page. Honest answer:
- **Search:** real `<JourneySearch>` only on home; AppShell desktop status bar has a NON-FUNCTIONAL placeholder input; dossier pages have no search.
- **Top header:** present everywhere but with two different designs (AppShell vs DossierShell).
- **Footer:** missing on `/atlas`, `/guru`, `/c/[category]/package`, `/checkout/confirm`.

Standardization PR not yet shipped — founder paused before greenlighting. To ship next session:
1. Wire AppShell's `<input type="search">` (`components/app-shell.tsx:132`) to actually open `<JourneySearch>` (or render it inline).
2. Add a compact search affordance to `DossierShell` top bar.
3. Render `<Footer />` from `app/page.tsx` on the four missing pages (`atlas/page.tsx`, `guru/page.tsx`, `c/[category]/package/page.tsx`, `checkout/confirm/page.tsx`).

### 25-journey expansion (50 → 75) — QUEUED behind 50-regen completion

Founder picked option (b) — wait for the 50-regen to finish, then ship Wave 1 (5 dossiers). See `docs/EXPANSION_PROPOSAL.md` (to be written) or scroll back in the session transcript for the prioritized 25 in 5 waves:

- **Wave 1 (ship after 50-regen lands):** type-2-diabetes-active · migraine-headache · hashimoto-hypothyroid · nafld-mash-fatty-liver · uti-recurrence-prevention
- **Wave 2:** asthma-chronic-control · endometriosis-natural · osteoarthritis-systemic · adult-adhd-support · osteoporosis-bone-density
- **Wave 3:** fibromyalgia-chronic-pain · ibd-crohns-uc · afib-natural-adjunct · ocd-adjunctive · peripheral-neuropathy
- **Wave 4:** rheumatoid-arthritis-adjunct · copd-natural-support · pregnancy-postpartum-nutrition · kidney-stones-prevention · rosacea-redness
- **Wave 5:** type-1-diabetes-adjunct · chronic-venous-insufficiency · stroke-recovery-adjunctive · vertigo-dizziness · caregiver-burnout

Each new journey needs:
1. `nichecore/research/<id>.md` (full v6.2.3 regen via agent)
2. `nichecore/lib/data.ts` Journey entry under the right domain bucket (`Skin` / `Metabolic` / `BrainEye` etc.)
3. Route mapping in `nichecore/app/[domain]/[slug]/page.tsx` — see `PARENT_OVERRIDES` map for parent-category routing
4. Optionally a `JOURNEY_BUNDLE_OVERRIDES` entry if the journey wants its own bundle (see how `tinnitus-support` → `tinnitus-quiet-90` works)

### Cloud Run deployment — READY, not yet executed

Files committed in `180a955`. Founder runbook at `docs/DEPLOY_CLOUDRUN.md` explains:
1. GCP project bootstrap
2. Artifact Registry setup
3. Deployer SA + IAM
4. Workload Identity Federation (preferred) or SA-key fallback for GitHub
5. First deploy: `gcloud builds submit --config nichecore/cloudbuild.yaml --substitutions=_REGION=us-central1 ./nichecore`
6. Custom domain, cost model, rollback, day-2 ops

Nothing automated until founder runs the runbook.

## Skill v6.2.3 — current state

`.claude/skills/ailment-360-research/SKILL.md` is the source of truth. v6.2.3 is the current ceiling. The Hair-bucket agent flagged one minor defect for future v7:

> The "Quick start" verbatim label appears 1× per dossier (only in §1.2) rather than throughout every section/sub-section. Rule 1 spec implies it for every section open, but in practice forcing it across 70+ H3s would balloon word counts past the 18k ceiling and degrade reader experience. Current dossiers use "Quick start" at top-level §1.2 + §5.1 (where it most matters) and lead all other sections with `**For you, in plain words.**` then content then `#### Open the science`. This is a defensible interpretation of Rule 1 but worth a skill clarification in v7.

When you sit down for v6.2.4 / v7, decide: keep current interpretation (Quick start only at top + key action sections) or require it everywhere (then raise ceiling further).

## Files touched but not the focus

- `nichecore/app/page.tsx` — home hero search + featured journeys + regime stages
- `nichecore/app/atlas/page.tsx` — grade legend strip
- `nichecore/app/[domain]/[slug]/page.tsx` — DeepDive integration, H3 sub-section rendering, bundle override
- `nichecore/components/journey-search.tsx` — new component
- `nichecore/components/layout/deep-dive.tsx` — new component
- `nichecore/components/layout/dossier-shell.tsx` — tree-rail wiring + back-nav + clickable brand
- `nichecore/components/nav/left-rail-nav.tsx` — tree expansion + GO TO site-nav
- `nichecore/components/nav/mind-map-strip.tsx` — flex-wrap (no horizontal scroll)
- `nichecore/lib/research.ts` — splitChunkByH3 + DEEP_DIVE marker convention
- `nichecore/app/globals.css` — table min-width + scroll-shadow + dossier-prose polish

All clean. Build green. Ready to resume.
