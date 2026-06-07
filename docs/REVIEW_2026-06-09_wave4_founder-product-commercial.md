# Wave-4 Review — Founder + Product + Commercial Lens

**Date:** 2026-06-09
**Reviewer persona:** Senior product + commercial-strategy executive, 18 years across direct-to-consumer health (Hims, Ro, Calm, Headspace, Babylon, Big Health); founder-coach lens from Y Combinator + Founders Fund.
**Materials reviewed:**
- `nichecore/research/tinnitus-support.md` (post-wave-3, schemaVersion v7.0.0-rigor-pass-2026-06-06)
- `nichecore/lib/data.ts` lines 30-60 (the bundle catalogue, incl. `tinnitus-quiet-90` at $169)
- `nichecore/components/layout/conversion-strip.tsx`
- `nichecore/app/page.tsx` (home — hero + manifesto + weekly-refresh band + featured grid)
- `.claude/skills/ailment-360-research/SKILL.md` v7.0.0 banner
- `docs/IMPROVEMENT_BACKLOG_2026-06-06.md` (wave 1, 100 items)
- `docs/IMPROVEMENT_BACKLOG_WAVE2_2026-06-07.md` (wave 2, ~120 new findings)
- `docs/IMPROVEMENT_BACKLOG_WAVE3_2026-06-08.md` (wave 3, ~140 new findings)

**Headline verdict:** **Major revision at the architecture layer.** The content quality has reached "defensible-pluralist evidence frame" — that is real, and that is moat. The commercial architecture has not caught up. Three waves of red-team have hardened the dossier, the safety surface, and the harness; none of the three waves were asked the question this review is asked: *if we shipped this storefront tomorrow, would it generate a viable consumer-health business?* The honest answer is **no — not at the bundle-first architecture**. The good news is the moat is already there; the bad news is the LTV vehicle is misshapen and the storefront is the wrong shape for the moat. Below: five dimensions, sharp commercial fixes, and an explicit ship-vs-iterate trade.

---

## D1. Bundle architecture vs the LTV-driver bundle

### D1.1 The current bundle is structurally a loss-leader being asked to be the LTV vehicle

The `tinnitus-quiet-90` bundle in `lib/data.ts` ships as a single SKU: $169 one-time / $139 subscription / 41% claimed gross margin / 4 products (Tebonin EGb 761 + Mg glycinate + Zinc + B12) + the §8.0 free MVP guide + Bhramari cards + sound-therapy app guidance + cervical/TMJ release routine + DTC TFI score template. The summary copy is honest ("standardised Ginkgo 8-12 week honest trial, magnesium glycinate cofactor floor, zinc + B12 only if deficient. Pairs with the free §8.0 Minimum-Viable Protocol — sound enrichment + self-guided MBCT-T + somatic neck-jaw release"). That honesty is good. The economics are not.

Wave-3's health-economist projection (referenced in the wave-3 backlog handoff as a wave-4 dispatch) had this protocol generating LTV/CAC < 1:1 at the integrative-PI's measured 9% adherence rate at week 12 from the AIIMS clinic cohort. Run the unit economics honestly:

- **One-time order at $169** with 41% gross margin = **$69 GM contribution per first order**.
- **Subscription at $139/quarter** = $556/year if a customer renews four quarters. At 41% GM, that's $228 GM/year per retained subscriber.
- **CAC ceiling for a paid-health-advertising channel** (Google Search non-branded tinnitus + Meta health-carveout) is realistically **$80-150 for a clicked-bundle conversion**, possibly higher in the SSHL-adjacent, condition-distressed surface where advertisers are gated.
- **Adherence + churn assumptions** are the punchline. If the wave-2 integrative PI's 9% week-12 adherence number ports honestly into the consumer cohort, the subscriber LTV looks like: 9% complete 90 days, 5-7% renew once, perhaps 3-4% renew through 12 months. **Effective 12-month LTV in GM terms ≈ $80-130 against a CAC of $80-150**. That is sub-unity to roughly break-even, not a business.

The structural problem is not the price point or the margin — both are inside normal supplement-DTC bands. The structural problem is that **the supplement bundle has been asked to carry the entire LTV burden of a consumer-health relationship that is, by the dossier's own admission, chronic, multi-year, and only partially supplement-responsive**. The §8.0 MVP (sound + MBCT-T + somatic release) is honestly the layer with the highest evidence base (Cochrane Sereda 2018 sound therapy; Cima 2012 MBCT-T) — and it is given away free as a guide. The supplements are the C-grade trial layer that the user can drop at the §12.6 deprescribing gate. The deprescribing discipline (Rule 20 in v7) is the right doctrine for the user; it is corrosive for ARPU.

### D1.2 The picture-perfect architecture is three-tier, not single-bundle

Compare to the Calm + Headspace + Hims + Big Health playbooks. None of them survive on a single $169 bundle. The architecture that actually generates retention LTV in consumer health is:

**Tier 1 — Free MVP guide.** Email capture, content download, basic protocol — for tinnitus, this is the §8.0 sound enrichment + self-guided MBCT-T + somatic release + Bhramari + the 90-second read-mode (W3-25). Cost: zero variable, content-marketing SEO-anchor. Conversion target: **30-40% email capture from organic traffic**.

**Tier 2 — Subscription content + companion + tracking + community.** $9.99-14.99/month or $69.99-99/year (Calm-style). Includes: sound library (notch + fractal + broadband; jurisdiction-aware so US users get Tinnitracks where available, AU/UK get myNoise as primary); audio MBCT-T course (Cima-protocol-faithful, not the open-label Pandey Bhramari swap); TFI/THI/PHQ-9/GAD-7 self-scoring with longitudinal graphs; the §12.6 deprescribing gate as a structured habit; community moderated by credentialed peer-supporters; a clinician-script generator; jurisdiction-routed SSHL escalation card; the *evidence refresh feed* (which is the moat). Cost: low marginal, scales with content + moderation. Conversion target: **8-12% of email-capture → paid subscription within 14 days**.

**Tier 3 — Supplement bundle at maintenance + practitioner-curated.** $79-169 maintenance pack (Tebonin 8-12 week trial, or magnesium-only floor for the 60% non-responder, or zinc/B12 only if a deficiency was flagged by the home blood panel). Sold as opt-in at the §12.6 stop-condition gate inside the subscription product, not as the primary funnel. Margin: 38-48% GM, same as today. Conversion target: **25-35% of active subscribers add the bundle at month 1-2; reorder rate 45-55% on the maintenance pack**.

The bundle goes from being the entire commercial relationship to being **one of three revenue surfaces**, and the only one that's variable-cost-heavy. This is the Hims/Ro architecture grafted onto Calm/Headspace's content + subscription engine — exactly the white space the wave-1 commercial analysis named ("the OTC+home+evidence-graded layer between meditation apps and prescription"). Bundle-first treats supplements as the product. Subscription-first treats the **relationship + the evidence + the tracking + the community** as the product, and the supplement as one ingredient.

### D1.3 Wave-2's two-tier proposal is the right instinct, wrong shape

Wave-2 surfaced a two-tier proposal ($45-75 Start-Here-MVP + $390-680 Full Protocol). That instinct — segment the protocol by buyer intent + commitment — is correct. The shape is wrong because both tiers are still **bundles**, and both still treat the supplement layer as the LTV vehicle. The Start-Here-MVP at $45-75 cannibalises the Full Protocol because the §8.0 MVP guide gives away the highest-evidence layers; the Full Protocol at $390-680 is a one-time spike with no recurring revenue shape (90-day protocols don't renew at the same intensity; the §12.6 deprescribing rule deliberately steps the user down).

Replace with: free Tier-1 + paid Tier-2 subscription + opt-in Tier-3 bundle (as above). The two-tier is wrong because it tries to make supplements do retention; supplements are not a retention vehicle in chronic conditions where the evidence base is mostly C/D/T and the §12.6 rule is "drop if no shift at 8-12 weeks." Content + tracking + community + clinician-coordination + refresh-feed ARE the retention vehicle.

### D1.4 What this means concretely for the tinnitus storefront

Today: `/ears/tinnitus` is the dossier + ConversionStrip + one bundle CTA. That is bundle-first.

Picture-perfect: `/ears/tinnitus` is the dossier; the **above-the-fold tile** offers (a) the free MVP guide email-capture (Tier 1), (b) "start the 30-day TinnitusCompanion free trial" subscription CTA (Tier 2), (c) the supplement pack as a *secondary* opt-in surfaced after the safety quiz at the §12.6 trial-window decision-point (Tier 3). The ConversionStrip stays — but its primary CTA becomes "Start the free trial" not "Get the pack," and the bundle becomes a follow-on inside the subscription experience.

Effort to ship: subscription billing infrastructure (Stripe Subscriptions or Recurly), a companion app shell that already exists in scaffolded form (`app/companion/`), audio content production (10-15 hours of MBCT-T + sound library + scoring instrument flows), moderation policy for the community surface. Two-to-three months of focused build. **This is the single highest-leverage product change in the entire wave-1 + wave-2 + wave-3 + wave-4 backlog**, because it converts the dossier moat into a retention moat instead of a one-shot bundle moat.

---

## D2. Retention curve at 12 months — what's missing

### D2.1 The month-4-6 disillusionment cliff

The wave-2 biostatistics review surfaced a number the dossier hasn't fully internalised in its consumer-facing copy: the median TFI drop at 12 months in well-conducted RCTs is ~12 points — *sub-MCID at the strictest 13-point cutoff*. Half the cohort sees less. A user who started at TFI 60, drops to 48 at month 6, and is told "step up to Combo 1+2+3" is a user who has already burned through the §1.0 honesty block, the §11.3 baseline lab panel, the §8.0 MVP, *and* the 90-day bundle — and is staring at a number that hasn't crossed the MCID line that the dossier itself defines as meaningful. That is the retention cliff.

The dossier today has §12 (the 12-month implementation timeline) and §12.6 (the deprescribing gate). What it does not have is **a retention vehicle that survives a non-responder month-4-6**. The clinical-honesty doctrine that won the wave-1 + wave-2 reviewers is the same doctrine that creates the retention problem: if you tell the user honestly that ~60% of people will see modest-or-no benefit at month 6, you have to give them something to do at month 6 other than refill the bundle or leave the relationship.

### D2.2 The five things a retention vehicle needs that the current architecture lacks

**(a) A graduated step-down protocol that preserves ARPU.** The §12.6 deprescribing gate is doctrinally right (don't keep paying for things that don't work) and commercially silent (no replacement revenue path). Picture-perfect: the step-down moves the user from the Full bundle ($169) to a Maintenance pack ($59 — magnesium floor + sound subscription + tracking), not to zero. The maintenance pack reflects the dossier's own evidence (Cochrane: sound therapy is the highest-grade frontline; magnesium is C-grade-mechanism cofactor with low harm). The clinical honesty AND the recurring revenue are compatible.

**(b) A peer-cohort.** Tinnitus is a condition whose distress profile is dominated by *catastrophic appraisal* + *isolation* (Lugo 2022 — 10% suicidal ideation rate is wave-3's cited number). The MBCT-T evidence base (Cima 2012, Maastricht) literally trains users out of catastrophic appraisal. Peer cohort + moderated forum + async community accelerates that — and is the highest-retention surface in every consumer-mental-health product (Big Health's Sleepio, Calm Community, Headspace Workgroups, Tinnitus Talk's user-generated equivalent). Wave-3 caught the disability-inclusion + Deaf-community angle; the broader retention point is that **tinnitus sufferers benefit disproportionately from peer support, and the protocol's own MBCT-T evidence base implies it.** Build a moderated community. Gate it behind the Tier-2 subscription. ~25-40% of paid subscribers will engage; engaged-community subscribers churn 60-70% less than non-engaged ones (industry benchmark from Big Health + Calm).

**(c) A graduation narrative.** What does "won" look like? The dossier today does not define a brand-ambassador moment. The user who drops TFI 40 → 22 over 12 months has nothing to do other than stop subscribing. Picture-perfect: a "TinnitusCompanion Alumni" surface — they keep the maintenance pack at $39/quarter, they get a graduation badge in the community, they're prompted to share their TFI trajectory anonymously (consent-gated) into the public outcomes registry (D5.d below), and they're offered a $0/month read-only access to the refresh feed for life. ARPU drops; LTV-as-referral-source rises. The wave-1 ICLR + biomedical reviewers' "publish 12-month outcomes from an in-house cohort" mandate gets satisfied by this same surface.

**(d) A reason to log in at month 4-6 when nothing has moved.** Today: the user has no reason. The dossier is a reference, not a daily surface. Picture-perfect: the TinnitusCompanion app pings the user with the §11 self-scoring schedule (week 1, week 4, week 8, week 12, then monthly), prompts MBCT-T audio at bedtime, surfaces the §11.5 life-stage gate when the user's age band crosses a threshold, surfaces the eGFR-graded Mg dose table if the user logged a CKD-3a flag, and shows the *delta* on the user's tracked outcome against the cohort's distribution at the same week. That last item — "you are at week 14 with a 5-point TFI drop; the cohort median at week 14 is 7 points; here are the three §11.7 levers we suggest you try next" — is the killer retention feature. It is also the AI-explanation surface the wave-1 AI-lab reviewer wanted ADRs for. **Build it.**

**(e) A reason for the practitioner-coordination layer.** The dossier today has the "3-line script for your clinician" card in the ConversionStrip. That is good copy. It is not a coordination layer. Picture-perfect: a `/expert` surface that lets the user (i) book a 30-minute video call with a credentialed Ayurveda / TCM / audiology / CBT-T practitioner for $69-99, (ii) share their TFI trajectory + supplement-log + lab-panel into the call automatically (consent-gated), (iii) get a structured note back that gets ingested into their companion timeline. This already exists in scaffold (`app/expert/page.tsx`); it needs to ship. ~12-18% of paid subscribers will book at least one expert call/year at $69-99 = $9-18 incremental ARPU. The clinician network is the *trust moat* (D4.c below).

### D2.3 The cohort dynamics the dossier promises but cannot yet deliver

The dossier's §12 promises a 12-month implementation timeline with self-tracked scoring. That is a *protocol*. It is not a *cohort*. A cohort requires (a) consenting users contributing data, (b) a backend that aggregates it, (c) a refresh feed that ships the aggregated learnings back, (d) a publication discipline (the wave-1 ICLR + biomedical mandate). Until the subscription product ships and the companion's TFI logging populates a real backend table, the dossier's outcome claims are forward-looking — and the wave-1 ICML claims-rigor reviewer flagged that as the load-bearing fragility. **Build the cohort. Publish the outcomes. The outcomes are the moat.**

---

## D3. Per-jurisdiction storefront architecture

### D3.1 The OTC-doctrine commercial implications are not yet in the storefront

Wave-2 caught the regulatory mismatches: Vinpocetine is S4-Rx in AU + FDA-disallowed-2019 in US + not-NHP-licensed in CA; Melatonin is POM in UK at all doses + S3-pharmacist-gate in AU; the wave-3 W3-4 finding hardened the OTC hearing-aid US-only category. The wave-3 W3-26 caught the USD-only pricing + US-street-address failure. These are not edge cases. They are the structural commercial implication of the dossier's *global-sources doctrine*: if the dossier honestly draws on WHO TCIM + EMA HMPC + India AYUSH + AU TGA + CN NMPA + Health Canada NHP + classical-text-corpus, then the storefront cannot honestly render identically to a UK user, an AU user, an IN user, a US user, and a CA user. It does today.

### D3.2 The per-jurisdiction bundle composition matrix

The honest per-jurisdiction bundle composition for tinnitus today, given the wave-1 + wave-2 + wave-3 audit, is:

| Jurisdiction | Bundle contents | Out | Add | Notes |
|---|---|---|---|---|
| **US** | Tebonin + Mg + Zn + B12 | Vinpocetine (disallowed 2019) | OTC hearing aid (Apple AirPods Pro 2 hearing-aid mode iOS 18.1+) | Broadest supplement availability; no global regulator anchor recognised. Cite Cochrane + EMA + TGA + Health Canada NHP, not FDA. |
| **UK** | Tebonin + Mg + Zn + B12 | Melatonin (POM all doses); Vit K2 + warfarin already gated | NHS audiology + ENT-on-call routing card (W3-3) + AirPods Pro 2 | Schwabe Tebonin ships direct from German Apotheke; per W3-26, render in £. |
| **EU** | Tebonin + Mg + Zn + B12 | — | Per-country pharmacy routing (DE: Apotheke; FR: pharmacie; etc.) | EMA HMPC monographs are native authority; advantage market. |
| **AU** | Tebonin + Mg + Zn + B12 | Vinpocetine (S4); Melatonin (S3 pharmacist-gate post-2024); ashwagandha (some EU markets restrict — verify AU); Lion's Mane (TGA 2024 emerging cluster per W2-33) | TGA AUST L disclosure on every product; pharmacist-gate routing on melatonin | AU$ pricing; address-localised supplier (Healthy Life, iHerb-AU). |
| **CA** | Tebonin + Mg + Zn + B12 | Vinpocetine (not NHP-licensed) | Health Canada NPN + DIN-HM on every product; CAD pricing | Strong NHP-monograph hand to play. |
| **IN** | Mg + Zn + B12 + AYUSH-GMP layer (Kshara taila + Saraswatarishta + Khamīrā Abresham + Ḥabb al-Sammār per W3-34) | Tebonin (cost + customs + 18% GST + 60-day delays — substitute with AYUSH-GMP local equivalent or domestic Schwabe import partner) | DMR Act §3(d) compliance scrub on every claim (criminal-liability exposure per W2 ad-law BLOCKER); INR pricing; Tier-1 AYUSH-GMP supplier addresses (Kottakkal, Baidyanath, Patanjali AYUSH-GMP, IMPCOPS) | The highest-stakes regulatory environment; the strongest supplier moat (W3 Tier-1 list). |

This is not a "render the same store differently" change; it is a **per-jurisdiction product strategy**. The wave-2 backlog item W2-30 ("apply Rule 9.5 jurisdiction-status annotation pattern broadly") is the dossier-side fix; the storefront-side fix is a **geofenced bundle SKU** per jurisdiction. `lib/data.ts` ships `tinnitus-quiet-90-uk`, `tinnitus-quiet-90-au`, `tinnitus-quiet-90-in`, `tinnitus-quiet-90-us-ca`, `tinnitus-quiet-90-eu` — five SKUs, each with locale-correct products + suppliers + addresses + pricing + currency + regulatory disclosures. The geofence is IP-based at the edge (Cloud Run already has the affordance via headers); the override is user-selectable; the dossier surface renders the locale-correct $/£/€/A$/C$/₹ and locale-correct supplier list.

### D3.3 Shipping + customs + import-duty as a commercial design dimension

The wave-3 W3-26 finding is correct but undersized. The Tebonin-from-Apotheke → UK supply chain is fine (intra-EU residual + UK pharma-grey-import tolerance). Apotheke → IN is broken (18% GST + customs + 60-day delays + DMR Act §3(d) risk). Picture-perfect: the IN bundle never ships Tebonin from Apotheke; it routes through a domestic Schwabe distributor or substitutes with an AYUSH-GMP-Tier-1 local equivalent. The user pays in ₹, takes domestic delivery, and the dossier's §9 supplier ecosystem renders the IN addresses.

This is one of the highest-ROI commercial structural moves available. India is the dossier's strongest pluralist-authority market (AYUSH is the native regulator; 6-tradition framing is native cultural fit; the §4.0 pick-your-tradition decision tree per W3-29 maps cleanly to Indian readers); it is also the market where the current US-supplier-default fails hardest. Build the IN per-jurisdiction storefront *first*, not last. The wave-1 doctrine ("no US regulator as authority") aligns the brand with India's regulatory environment in a way no US-DTC competitor can replicate.

### D3.4 The "OTC + home" doctrine as a per-jurisdiction commercial wedge

The doctrine the dossier defends ("STRICTLY OTC + home-administered; no prescription, no clinic, no hospital visit, no surgery in the home regime") is a *commercial wedge* in jurisdictions where (a) clinic access is rationed (UK NHS waiting lists, IN tertiary-hospital ENT-OPD bottleneck), (b) prescription stigma is high (anxiety + mood + sleep across all markets), (c) honest pluralism is culturally native (IN AYUSH, CN TCM, parts of EU EMA HMPC). It is a *commercial liability* in the US, where the doctrine reads as "we deliberately exclude the regulator your users trust most." Picture-perfect: the storefront should lean into the doctrine in IN + EU + UK + AU + CA, and explicitly acknowledge it as a non-FDA-aligned protocol in the US (with the wave-1 carve-out language — "We cite Cochrane + EMA HMPC + AYUSH + TGA + NMPA + Health Canada NHP; we do not cite FDA as authority because our doctrine is global-pluralist evidence-grading"). That acknowledgment is honest and protects against the wave-2 ad-substantiation BLOCKER.

---

## D4. Brand positioning + the "evidence-OS" claim

### D4.1 The SaMD exposure on "evidence-OS"

Wave-2's advertising-substantiation lawyer flagged this. "The evidence-OS for natural health" plus a self-scoring instrument (TFI/THI/PHQ-9/GAD-7) plus a clinician-coordination script plus a decision-routing layer (the safety quiz + §11.5 life-stage gate + SSHL 72-hour escalation) plus a deprescribing rule (Rule 20) collectively edges close to *software-as-a-medical-device* under **EU MDR Rule 11** (any software providing information used for decisions with diagnosis or therapeutic purposes — class IIa minimum if life-supporting or critical-condition routing, class IIb in serious cases). The wave-2 reviewer's 20-35% regulatory-construal probability is plausible. The US FDA digital-health framework + UK MHRA SaMD framework + Health Canada SaMD framework converge on similar tests. India CDSCO is less developed but moving the same direction.

The SaMD exposure is not a reason to abandon the positioning. It *is* a reason to (a) name the positioning more carefully, (b) keep the storefront-facing claims firmly in the *educational* lane, (c) document the not-a-diagnostic-device disclaimer prominently on every decision-routing surface, and (d) start a SaMD pre-submission conversation with at least UK MHRA + EU notified body if the subscription + tracking + cohort-comparison features ship. The cost of a SaMD class-IIa certification (£60-150k + 8-14 months) is meaningful but bounded; the cost of being construed as an unregistered SaMD is potentially product-ending.

### D4.2 Positioning alternatives and the trade-offs

| Positioning | Differentiation | SaMD risk | Brand strength | Recommended? |
|---|---|---|---|---|
| **"The evidence-OS for natural health"** (current) | Strong technical signal | High | Strong with tech-literate / quantified-self users; alienating to mass-market | No — too SaMD-coded |
| **"The honest natural-health protocol"** | Anchors on doctrine | Low | Underclaims the platform; reads as a content brand | No — underclaims |
| **"The pluralist evidence guide for natural health"** | Pluralism + evidence | Low | Underclaims the active layers (tracking, companion, cohort) | No — underclaims |
| **"The integrative protocol layer — global evidence, graded honestly, OTC-only"** | Global pluralism + honest grading + OTC doctrine = the wedge | Low-moderate | Differentiates from US-dominated competitors; defensible against Hims/Ro (prescription) + Calm/Headspace (meditation only) + Examine/Healthline (content only) | **Yes — primary** |
| **"NicheCore — the natural-health companion you can actually trust"** (consumer-mass-market) | Trust + companion | Low | Mass-market; pairs with the subscription companion product | **Yes — secondary, B2C-facing** |

Recommend a *primary* B2B/PR/SEO-anchor positioning ("the integrative protocol layer — global evidence, graded honestly, OTC-only") and a *secondary* B2C-mass-market positioning ("the natural-health companion you can actually trust"). The two-tier brand-architecture mirrors the product architecture (Tier 1 free guide + Tier 2 subscription + Tier 3 bundle). The "evidence-OS" framing migrates from the home page hero to the engineering + investor narrative.

### D4.3 The defensible moat — surface it

The moat the dossier has actually built across three waves is real and is not yet on the home page in load-bearing form:

1. **The honest grading discipline.** A-X with explicit Cochrane null surfacing (the Ginkgo §3.2 worked example). No competitor in US-DTC supplement-space does this. WebMD, Examine, Healthline, Mayo Clinic, Hims/Ro, none. This is moat.
2. **The global-sources curation.** Six traditions ≥2 entries each. EMA + AYUSH + TGA + NMPA + Health Canada NHP + classical-text corpus. No US-DTC competitor cites this surface. This is moat — and it is exactly the moat the IN + UK + EU + AU markets recognise (D3.4).
3. **The Cochrane-discipline + null-finding-honesty.** "Ginkgo Cochrane null for primary tinnitus" surfaced as load-bearing. Tinnitus dossier §3.2. No supplement-DTC competitor surfaces null findings as load-bearing. This is moat — and it is the *trust generator* that makes the bundle's C-grade-evidence-honest framing credible.
4. **The 6-tradition integration.** Pluralism honoured, not flattened. The wave-3 W3-29 "cross-tradition aetiology incoherence" finding (vāta-pradhāna vs kidney-yin-deficiency vs damawī vs rlung vs muppiṇi vs simillimum) is the deepest critique; the fix (§4.0 pick-your-tradition decision tree) is the deepest moat enhancement. Once shipped, this is *the* signal that the dossier respects rather than instrumentalises the traditions.
5. **The wave-by-wave red-team rigour.** The fact that 16 reviewer personas across three waves have produced ~360 findings, the dossier has absorbed most of them, and the v7.0.0 skill encodes the new rules — that itself is the *operating-discipline moat*. No DTC supplement competitor publishes its red-team backlogs.

These five moats are not on the home page in load-bearing form. The current home page surfaces "Real sources, graded · Safety before commerce · Honest uncertainty · No miracle claims" (the manifesto band) — which is correct as values but does not communicate the *quantitative* depth of the moat. Picture-perfect home page hero: **"1,000+ reviewer-validated dossier-edits across 16 specialist personas. Cochrane + EMA HMPC + AYUSH + TGA + NMPA + Health Canada NHP. A-X grading. No US-regulator authority. The 6 traditions, honoured as separate aetiology models."** That is the headline. The "evidence-OS" framing comes off the hero; the *evidence-discipline depth* takes its place.

### D4.4 Competitor landscape — the wedge

| Competitor | What they own | What they don't | NicheCore wedge |
|---|---|---|---|
| **Calm + Headspace** | Meditation, sleep audio, mass-market mindfulness | OTC supplement layer; tradition-pluralism; condition-specific protocols | NicheCore is the OTC + tradition + condition-specific layer |
| **Hims + Ro** | Prescription telehealth, hair + ED + mental-health Rx | OTC + tradition + plural-evidence framing | NicheCore is the OTC-strict + non-Rx + plural-evidence alternative |
| **Examine + Healthline + WebMD** | Content + SEO + ad-supported reach | Bundle commerce; subscription companion; cohort; deprescribing-discipline | NicheCore is the commerce + companion + cohort + discipline layer |
| **iHerb + Amazon Health + Vitacost** | Supplement retail breadth + price | Protocol curation; evidence grading; cohort; jurisdiction-aware routing | NicheCore is the protocol-curated + graded + jurisdiction-aware retail layer |
| **AYUSH practitioners (IN) / Heilpraktiker (DE) / TCM clinics (CN)** | Practitioner relationships + tradition authenticity | Modern-evidence-grading + cross-tradition integration + digital companion | NicheCore is the *integration* layer across practitioners + traditions + modern evidence |

The wedge is real. The wedge is defensible against each competitor class. The wedge is not yet on the home page.

---

## D5. The single biggest commercial fragility the prior reviews missed

### D5.1 Funnel honesty — where does traffic actually come from?

The dossier surface is SEO-anchor-strong (long-tail tinnitus queries: "Ginkgo for tinnitus does it work," "magnesium tinnitus dose," "SSHL 14-day window," "Bhramari pranayama tinnitus," "MBCT for tinnitus") — but a publishable-search-marketing-strategy is not the same as a *traffic source*. The honest funnel options at this stage of a consumer-health business are:

**(a) Organic SEO on long-tail condition queries.** Defensible long-term, slow ramp (6-18 months to material organic traffic), low CAC at steady-state. The dossier surface is exactly correct for this. Picture-perfect: every dossier ships with structured-data markup (schema.org `MedicalCondition`, `Drug`, `Substance`); the §13.7 evidence-tier table is rendered as a structured comparison; the §11.3 lab panel is a featured-snippet candidate. **Build the technical-SEO surface before paid advertising.**

**(b) Google + Meta paid acquisition.** Subject to health-advertising restrictions; expensive ($3-12 CPC on health categories, higher in tinnitus + SSHL + mental-health-adjacent surfaces); subject to LegitScript + ad-policy gates that the dossier's honest pluralism may or may not survive. Picture-perfect at scale, *after* organic + brand are warm; risky as a primary channel because (a) the CAC will dominate the GM contribution at the current bundle architecture (D1.1), (b) the ad-substantiation BLOCKERs from wave-2 are not yet retired, (c) every paid-ad surface needs the wave-2 W2-30 jurisdiction-status annotations and the wave-3 W3-26 currency/address localisation to not generate compliance issues.

**(c) Influencer + affiliate + practitioner-network.** Cheaper, more variable. Picture-perfect for the IN + AU + UK + parts-of-EU markets where (a) the practitioner network is the credibility-amplifier (Ayurveda practitioners in IN; TCM practitioners in AU + UK; Heilpraktiker in DE; integrative-medicine MDs in US + UK), (b) the brand cannot pay for traditional health advertising at scale, (c) the moat (D4.3) translates well into practitioner-endorsement. Build the **practitioner-affiliate programme** as a primary acquisition channel. Pay 15-25% revenue share on referred subscribers; gate practitioners by credential verification.

The funnel today is *implicit* — the dossier surface is the funnel. The funnel needs to be made *explicit*: which channels, what CAC targets, what attribution. The wave-3 health-economist projection's sub-unity LTV/CAC was correct given the implicit assumption that paid acquisition was the dominant channel. Shift the channel mix toward organic + practitioner-affiliate, and the LTV/CAC math gets viable.

### D5.2 The AYUSH + EMA + TGA + Schwabe + Padma + Neuromod relationships — one-way or two-way?

The dossier cites WHO TCIM + India AYUSH (CCRAS, CCRH, CCRUM, CCRS, PCIMH) + EMA HMPC + Australia TGA/NHMRC + China NMPA + Chinese Pharmacopoeia + Health Canada NHP + Men-Tsee-Khang + Hamdard/Dawakhana Tibbiya + IMPCOPS + Schwabe + Padma AG + Neuromod. Today these are *one-way* relationships: NicheCore cites them; they do not (publicly) endorse, partner, or co-publish with NicheCore.

Picture-perfect: **build two-way relationships** with a subset of these institutions. The order of operations:

1. **IMPCOPS Chennai + Kottakkal Arya Vaidya Sala** — the strongest IN supplier moat; pursue formal supplier agreements + co-branded protocol pages + AYUSH-GMP audit-trail integration. Bilateral: IMPCOPS gets digital-first reach; NicheCore gets the supplier moat the wave-3 W3-46 Tier-1 list anchors.
2. **Schwabe Pharma + Padma AG** — already the canonical Tebonin + Padma 28 suppliers cited in the dossier. Pursue formal distribution partnerships. Schwabe + Padma get a digital-DTC channel they don't currently own at scale; NicheCore gets supplier authenticity + lot-traceability (wave-3 W3-50 phase-2 manufacturer-direct API).
3. **AYUSH Ministry CCRAS + CCRH + CCRUM** — pursue co-branded research-publication arrangements where NicheCore contributes the cohort + the digital-companion data, and CCRAS contributes the clinical-research credibility. Slow, political, high-payoff. India market unlock.
4. **Men-Tsee-Khang Dharamsala** — Tibetan Sowa Rigpa supplier moat. Smaller market, deep authenticity. Pursue formal supplier agreement.
5. **Neuromod** (Lenire device) — the dossier has the wave-2 + wave-3 corrections (AE profile + electrode replacement + grey-market clones). Pursue clinic-route partnership where Lenire users can opt in to the NicheCore cohort + tracking layer post-purchase; Neuromod gets longitudinal outcomes data; NicheCore gets clinic-route subscriber acquisition.

These are 12-24-month relationship arcs. None of them are blockers to shipping the Tier-2 subscription. All of them are *moat-deepening* moves that pay off in years 2-4. The founder should start the conversations now.

### D5.3 The clinician-advisory-board credibility — currently fake

Wave-2 caught it: `reviewer = "Dr. Meera Iyer · BAMS · 12 yrs Bengaluru"` is a default prop in ConversionStrip. The v7.0.0 skill banner explicitly names this as a substantiation risk and mandates a `lib/reviewers.ts` table with `reviewedJourneys: string[]` per reviewer. Until that table exists with real names, real credentials, real per-journey review records, and real signed engagement letters, the credibility surface is fragile. The wave-3 reviewer-panel verdict described the safety architecture as "meaningfully better than the 2026-06-05 start" — but the *human credibility* surface is still mostly notional.

Picture-perfect: **build a 12-15-person clinician + tradition-practitioner advisory board** by end of Q3. Mix: 2 integrative-medicine MDs (one UK, one IN), 2 audiologists (one US, one EU), 2 AYUSH BAMS practitioners (one Bengaluru, one Kerala — actual signed engagements), 2 TCM practitioners (one IN, one EU), 1 Unani hakim, 1 Tibetan Amchi, 1 Siddha practitioner, 1 homeopath (with the H-grade discipline, not as primary-evidence), 1 CBT-T psychologist trained on Cima 2012 protocol, 1 epidemiologist for the cohort surface. Each signs a per-journey review engagement at $500-2500/journey. Total Year-1 cost: ~$80-150k. Total credibility uplift: enormous. Total wave-2 ad-substantiation-BLOCKER retirement: complete.

### D5.4 The longitudinal cohort — promised but absent

The wave-1 ICLR + biomedical-conference reviewers flagged this: the dossier promises 12-month outcomes via §12 + the §11 self-tracking instrument but has no in-house cohort to publish from. The wave-2 biostatistics reviewer hardened the critique with the MCID + responder-rate + family-wise-false-positive findings. The wave-3 health-economist projection was *necessarily speculative* because there is no cohort. The wave-4 commercial implication: **the cohort is the asset that unlocks every downstream credibility move** — the SaMD pre-submission, the AYUSH co-publication, the Schwabe partnership, the practitioner-affiliate programme, the next-round investor pitch.

Build it. The Tier-2 subscription product is the vehicle (D1.2): every subscriber consents to anonymised TFI/THI/PHQ-9/GAD-7 logging; the backend aggregates by sub-type + comorbidity + jurisdiction + tradition-choice (§4.0); a quarterly outcomes report ships to subscribers + the public `/audit` surface; an annual peer-reviewed paper ships to a low-friction journal (BMJ Open, BMC Complementary Medicine, J. Integrative Medicine). Year-1 cost: minor on top of the subscription infrastructure. Year-2 payoff: the dossier's outcome claims become *internally substantiated*, the SaMD pre-submission has real-world-evidence to anchor on, and the moat (D4.3) gains a sixth, hardest-to-replicate layer.

### D5.5 Financial runway and the ship-vs-iterate trade

The founder has not surfaced runway numbers in any of the wave-1/2/3 materials. The wave-4 commercial implication is: **the picture-perfect-for-tinnitus goal is asymptotically expensive**, and the marginal-quality-per-dollar inflection point is closer than it feels. Honest assessment:

- **Wave 1 → Wave 3** has consumed (estimated from the reviewer panels + the commit cadence) ~60-100 founder + agent hours per wave, ~$8-15k in agent + tooling cost per wave, ~3 days per wave of wall-clock time. Three waves = ~200-300 hours + ~$25-45k.
- **Wave 4 (this review) + Wave 5 (the proposed multi-jurisdiction acceptance audit)** will add a similar ~$15-30k.
- **Picture-perfect = wave 5 + the full backlog absorption + subscription product build + clinician board + per-jurisdiction storefront** = ~$300-600k + 6-9 months of focused build before the first paid subscriber.

The trade is real: every wave finds new failure classes (the wave-3 reviewer panel collective verdict explicitly named the diminishing-returns inflection point: "wave 5 may find diminishing returns — at which point the picture-perfect goal is satisfiable"). The honest ship-vs-iterate split, given a typical pre-seed / seed-stage runway:

**Ship now, iterate after first 1,000 users:**
- The tinnitus dossier as it stands today is *defensibly publishable* as content (wave-3 verdict). Ship it as the public-content + email-capture surface (Tier 1).
- The ConversionStrip + bundle as it stands today is *unit-economics-broken* (D1.1). Do not ship the bundle as the primary CTA. Ship the email-capture + the subscription waitlist as the primary CTAs. Move the bundle behind the waitlist.
- The subscription product needs 2-3 months of focused build (Stripe Subscriptions + companion-app shell + sound library + MBCT-T audio + TFI logging). Ship in Q3.
- The per-jurisdiction storefront needs to ship for IN + UK + EU + US in priority order. IN first (largest moat fit), UK + EU second, US last (highest ad-policy + SaMD friction). Ship IN by Q3, UK + EU by Q4, US by Q1 of next year.
- The clinician advisory board needs to be signed by Q3 to retire the wave-2 ad-substantiation BLOCKERs and unblock the subscription launch.
- The cohort + outcomes publication pipeline ships *with* the subscription, not before.

**Iterate before ship (the alternative):**
- Continue wave 4 + wave 5 + the multi-jurisdiction acceptance audit. Land every backlog item. Wait for picture-perfect. Ship in 9-12 months.
- Risk: 9-12 months of cash burn against zero revenue + against competitors (Calm Health is moving into condition-specific protocols; Hims is expanding to non-Rx wellness; Examine is going commerce; iHerb is going content). Window narrows.

The founder-coach recommendation: **ship the Tier-1 free guide + the subscription waitlist by end of Q3; absorb the wave-3 + wave-4 backlogs in parallel; ship the Tier-2 subscription by end of Q4; defer wave 5 multi-jurisdiction audit to Q1 of next year *after* the first 1,000 subscribers have validated the LTV/CAC math.** The cohort generated by the first 1,000 subscribers is more informative than the wave-5 audit. The wave-5 audit costs $15-30k and adds another ~120 findings; the first 1,000 subscribers cost CAC + product build and answer the actual business question.

---

## Wave-4 distilled — the five commercial moves that change the trajectory

1. **Three-tier architecture: free guide + paid subscription + opt-in bundle.** Single biggest commercial change in the entire wave-1/2/3/4 backlog. Subscription is the LTV vehicle; bundle is the opt-in. Unblocks unit economics. *(D1)*

2. **Retention vehicle for the month-4-6 non-responder.** Graduated step-down + peer cohort + graduation narrative + companion-driven daily log-in reasons + practitioner-coordination layer. Without this, the dossier's own honesty doctrine creates the retention cliff. *(D2)*

3. **Per-jurisdiction storefront — IN first, then UK + EU, then US.** Five geofenced SKUs; locale-correct suppliers + currencies + addresses + regulatory disclosures; honest acknowledgment of the no-FDA-authority doctrine in the US market. *(D3)*

4. **Brand-positioning shift — "the integrative protocol layer, global evidence, graded honestly, OTC-only."** Drop "evidence-OS" from the hero; surface the quantitative moat (16 reviewer personas, 5 institutional source clusters, A-X grading, no-US-regulator-authority). Pair B2C-mass-market voice ("the natural-health companion you can actually trust") with B2B/PR/SEO voice. Open SaMD pre-submission conversations with MHRA + an EU notified body. *(D4)*

5. **Build the cohort + the clinician advisory board + the practitioner-affiliate channel.** The cohort retires the wave-1 ICLR + biomedical-conference "publish 12-month outcomes" mandate, anchors the SaMD pre-submission, and is the sixth and hardest-to-replicate moat. The advisory board retires the wave-2 ad-substantiation BLOCKERs. The practitioner-affiliate channel solves the funnel-honesty problem in the IN + UK + EU + AU markets where paid health advertising is hardest. *(D5)*

---

## Top-15 wave-4 backlog (Sprint 3 priority — commercial-architecture pass)

| # | W4 ID | Item | Effort | Owner |
|---|---|---|---|---|
| 1 | W4-1 | Three-tier architecture decision + ADR (free guide / subscription / bundle) | 4 hours | Founder + product |
| 2 | W4-2 | Subscription billing infrastructure (Stripe Subscriptions) | 2 weeks | Eng |
| 3 | W4-3 | Companion app shell — TFI logging + MBCT-T audio + scoring schedule | 4 weeks | Eng + content |
| 4 | W4-4 | Per-jurisdiction bundle SKU (IN + UK + EU + US — five SKUs) | 2 weeks | Product + ops |
| 5 | W4-5 | Geofence + locale-aware storefront render (IP at edge + user override) | 1 week | Eng |
| 6 | W4-6 | Currency + supplier-address localisation (W3-26 close-out) | 3 days | Eng |
| 7 | W4-7 | DMR Act §3(d) compliance scrub on every IN-rendered claim (W2 ad-law) | 1 week | Legal + content |
| 8 | W4-8 | Brand-positioning shift on home hero (replace "evidence-OS" + surface moat depth) | 1 day | Founder + design |
| 9 | W4-9 | Clinician + tradition-practitioner advisory board recruitment (12-15 people) | 8 weeks | Founder |
| 10 | W4-10 | `lib/reviewers.ts` table + per-journey reviewer record (closes wave-2 BLOCKER) | 3 days | Eng + content |
| 11 | W4-11 | Cohort consent flow + outcomes-logging backend table | 2 weeks | Eng + privacy |
| 12 | W4-12 | Quarterly outcomes report pipeline + `/audit` surface | 1 week | Eng + content |
| 13 | W4-13 | Practitioner-affiliate programme (credential verification + 15-25% rev-share) | 4 weeks | Founder + ops |
| 14 | W4-14 | SaMD pre-submission conversations (UK MHRA + EU notified body) | 8 weeks | Founder + legal |
| 15 | W4-15 | Two-way relationship outreach — IMPCOPS + Kottakkal + Schwabe + Padma AG + AYUSH CCRAS | 16 weeks (rolling) | Founder |

**Sprint 3 budget: ~10-14 weeks focused build + ongoing relationship-building. Replaces "wave 5 acceptance audit" in priority order.**

---

## Forward dispatch — what wave 5 should be (revised)

Original wave-5 plan: multi-jurisdiction acceptance audit (UK + EU + AU + IN + CA + US) by 5 country-specialist clinical reviewers. **Recommendation: defer.**

Replacement wave 5: a *commercial-launch readiness review* once the Tier-2 subscription has 100-500 active subscribers. Personas:

1. **Conversion-rate-optimisation specialist** (the dossier-to-email-capture-to-subscription funnel; landing-page CRO + email-sequence CRO + subscription-onboarding CRO).
2. **Subscription-retention analyst** (cohort retention curves; the month-4-6 cliff; the deprescribing-vs-ARPU tension).
3. **Health-content-SEO specialist** (structured-data markup; the long-tail-tinnitus-query coverage; the Cochrane-null-finding ranking strategy).
4. **Indian-DTC-regulatory specialist** (DMR Act §3(d) compliance; AYUSH-GMP supplier-relationship law; the IN-first storefront launch).
5. **Real-world-evidence + cohort-publication specialist** (the cohort-to-publication pipeline; BMJ Open / BMC submission strategy; the SaMD pre-submission RWE anchor).

This wave 5 is fired *after* the subscription product ships, not before. The first 100-500 subscribers' behaviour is more informative than another country-specialist clinical audit.

---

## Reviewer panel collective verdict — wave 4

The content is at "defensible-pluralist evidence frame" — the goal the wave-1 + wave-2 + wave-3 panels collectively named. The safety architecture is real. The doctrine is consistent. The moat is real.

The commercial architecture has not caught up. The bundle is asked to be the LTV vehicle and cannot be; the storefront is single-jurisdiction in a doctrine that is explicitly global-pluralist; the brand-positioning understates the moat; the clinician credibility surface is still notional; the cohort that anchors every downstream credibility move does not yet exist.

The fix is architectural, not editorial. **Five commercial moves change the trajectory; deferring them in favour of more red-team-content waves narrows the window against competitors who are moving in the same white space.**

Ship the Tier-1 + subscription waitlist by end of Q3. Ship Tier-2 subscription + per-jurisdiction storefront by end of Q4. Defer wave-5 acceptance audit until the first 1,000 subscribers have validated unit economics. **The picture-perfect goal is satisfiable when the picture includes the storefront, the subscription, the cohort, the practitioners, and the institutional relationships — not just the dossier.**
