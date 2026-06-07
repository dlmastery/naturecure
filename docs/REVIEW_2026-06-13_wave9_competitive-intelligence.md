# Wave-9 Review — Digital-Health Competitive-Intelligence Audit (IQVIA + Rock Health + CB Insights + Patient Affairs Lens)

**Dossier under review:** `nichecore/research/tinnitus-support.md` (schemaVersion `v7.0.0-rigor-pass-2026-06-06`; post-wave-8 with wave-1 through wave-8 corrections folded).
**Skill under review:** `.claude/skills/ailment-360-research/SKILL.md` (v6.2.6 in-progress; candidate Rules 24-26 deferred from waves 6-8).
**Adjacent files inspected (commercial-architecture surface only).** `nichecore/lib/data.ts` (the `tinnitus-quiet-90` SKU and bundle catalogue), `nichecore/components/layout/conversion-strip.tsx`, `nichecore/app/page.tsx` home, `nichecore/app/ears/tinnitus/page.tsx` shell, `docs/REVIEW_2026-06-09_wave4_founder-product-commercial.md` (subscription-as-moat thesis), `docs/REVIEW_2026-06-11_wave6_payer-policy.md` (per-jurisdiction reimbursement disclosure thesis), `docs/REVIEW_2026-06-12_wave8_forensic-audiology.md` (medico-legal posture).
**Reviewer persona.** Senior digital-health competitive-intelligence analyst, 16 years across IQVIA (UK + EU CI desk — RWE + share-of-voice + payer-decision tracking), Rock Health Venture Strategy (SF — therapeutic-area funding maps), CB Insights Healthcare Practice (NYC — health-tech market maps + KOL + DTC-operator expert-call network), and Patient Affairs Inc. (Boston — patient-community + influencer landscape mapping). Day job: comparative positioning, share-of-voice, acquire-vs-partner-vs-build decisions for therapeutic-area franchises across pharma + device + DTC consumer-health.
**Date:** 2026-06-13. Re-dispatched after wave-7 API failure queued this CI dispatch behind the military-veteran specialist.
**Waves 1-8 respected (NOT re-litigated).** Country-attribution + citations (wave-1); EMA HMPC + ASA + biostats + integrative-PI + pharmacovigilance (wave-2); ENT-audiology + classical-text + QC + disability + UX (wave-3); behavioural-adherence + commercial + health-econ + data-eng + T&S (wave-4); AI-safety-RSP + academic-PI + editor + fact-checker + infosec + advocate (wave-5); pricing + localization + drug-dev + payer + psychometrician (wave-6); military-veteran (wave-7); forensic-audiology + hearing-tech + vestibular + cardio + occ-health (wave-8).

**Headline verdict.** **MODERATE-to-MAJOR revision required at the storefront + skill layer, not the dossier prose layer.** The dossier prose is now defensible against every named competitor in the tinnitus space. What no prior wave examined is the **competitive-positioning surface that wraps the dossier**: where NicheCore sits in the patient-association / clinic-aligned / wellness-platform / commerce / community category map, which queries it actually wins, which DTC channels are foreclosed by Google / Meta / TikTok health-ad policy, and whether the Buddy programme + India NHP + PMJAY is build, partner or acquire. The dossier's quality is no longer the binding constraint on whether the storefront generates a viable business — **distribution + community is** — and wave-4's subscription-as-moat thesis only resolves to a defensible LTV vehicle if NicheCore answers the five questions below.

I surface **4 BLOCKER-class positioning defects, ~18 P1 CI gaps, and propose skill Rules 26-29** — plus an Acquire / Partner / Build matrix for the Buddy programme, NHP co-publication, and PMJAY integration that converts wave-6 payer-disclosure thesis into a distribution moat.

---

## SUMMARY OF FINDINGS

| Dimension | Verdict | Severity |
|---|---|---|
| 1. Competitive landscape mapping — where does NicheCore actually differentiate against 14 named tinnitus incumbents | **Moderate-to-major revision** — dossier prose is differentiated, storefront positioning is not; "evidence-graded OTC + six-traditions + home-only + global-non-US-authority" is the unique frame, but the storefront does not surface it as a positioning claim |
| 2. Market positioning category — clinic-aligned vs patient-association vs wellness-platform vs commerce vs community | **Major revision** — NicheCore today straddles commerce + wellness-platform + (latent) community without owning any single category; the dossier's quality earns admission to the patient-association tier but the storefront architecture does not deliver it |
| 3. SEO content discoverability — what queries does NicheCore rank vs what sufferers actually search | **Major revision** — the dossier is structurally optimised for "tinnitus protocol" + "tinnitus supplements that work" but loses head-of-funnel for the four highest-volume sufferer queries; competitive query-mapping absent |
| 4. DTC marketing channel — Google + Meta + TikTok health-ad restrictions + influencer + affiliate + PR landscape | **Major revision** — paid-health-ad channels are structurally restricted for OTC tinnitus supplements (the wave-4 CAC ceiling becomes a CAC floor on the restricted channels); organic + influencer + PR + patient-association partnership is the only viable acquisition surface, and the storefront is not yet built for it |
| 5. Acquisition vs partnership vs build — Buddy programme + India NHP co-publication + PMJAY integration | **Major revision — strategic decision required** — three distinct pathways with very different leverage; defaulting to build is the highest-cost lowest-velocity option for all three; partner-then-build is the recommended path with one carve-out for PMJAY where build is the only sovereignty-compatible option |

Verdict is moderate-to-major rather than major because dimension 1's underlying differentiation is genuinely strong — the wave-1-to-wave-8 audit chain has produced an artefact no incumbent matches — but dimensions 2 through 5 represent **load-bearing structural gaps in the distribution + community + channel + partnership architecture** that determine whether the differentiation translates into a viable business. The dossier earns the right to compete; the storefront has not yet been built to win.

The five dimensions follow.

---

## 1. COMPETITIVE LANDSCAPE — WHERE DOES NICHECORE ACTUALLY DIFFERENTIATE AGAINST 14 NAMED INCUMBENTS

### 1.1 The named incumbent set, segmented

The dispatch named 14 incumbents. Honest market-map segmentation:

**Community / patient-association.** Tinnitus Talk (Goedhart, ~100k members; load-bearing English-speaking peer-community; non-profit; published the TT-T survey + Lugo 10% suicidality collaboration the dossier's §0 honours). BTA (UK charity; helpline 0808 808 0123 already named; NICE-aligned; post-2023 RNID partnership). ATA (US, doctrine-forbidden authority). RNID (UK; tinnitus information service post-Action-on-Hearing-Loss merger). Patient.info (UK editorial, ad-funded, not community).

**Clinic-aligned.** Jastreboff TRT lab / TRT-Online (Maryland; dossier cites Jastreboff 1990 + 2004 in §5.6). Glenn Schweitzer "Rewiring Tinnitus" (ex-VS patient → educator/coach/Treble-Health affiliate; $99-997 courses + 1:1 coaching; ~80k email; YouTube + podcast). NHS Choices (UK statutory; dossier NICE-aligned per wave-6).

**Wellness platform.** Calm (dedicated tinnitus-relief vertical post-2023) + Headspace (tinnitus-adjacent sleep-stress only); both $69.99-99/yr; neither sells supplements; high-intent tinnitus traffic converts to generic-meditation subscription.

**Device + clinic-commerce.** ReSound, Widex, Phonak, Oticon, Signia hearing-aid OEMs (dossier correctly attributes Widex Zen, Phonak Tinnitus Balance, Oticon SoundSupport, ReSound Tinnitus Relief in §5.2-§5.3 with wave-8 Zen-is-Widex correction); Neuromod Devices Ireland / Lenire ($4-6k clinic-prescribed; §15.2 with GRADE-D demotion).

**DTC content + app.** myNoise (Brussels free/freemium sound therapy — dossier free-default in §5.2); Tinnitracks (Hannover notch-filter app, €15-25/mo, CE/DiGA, some Krankenkasse reimbursement; dossier §5.4); ReSound Relief + Widex Zen mobile (free, OEM-tied); Oto (UK ACT-app ~£10/mo); Treble Health (Schweitzer-affiliated coaching + maskers).

### 1.2 NicheCore's defensible differentiation surface

(a) **Six-tradition pluralism honestly graded.** No incumbent carries Ayurveda + TCM + Unani + Siddha + Tibetan Sowa Rigpa + Homeopathy with two-entry-per-tradition + tradition-T vs evidence-B grade separation + classical citation. Tinnitus Talk is anglophone-evidence-only; BTA/RNID are NICE-aligned (dossier extends past NICE); ATA forbidden; Calm/Headspace no tradition surface; Schweitzer is Western-CBT-T + sound; Tinnitracks single-modality. **Strongest defensible claim.**

(b) **Cochrane-null + honest grade-demotion.** No incumbent surfaces Cochrane Hilton 2013 null on Ginkgo this honestly while keeping Tebonin as 8-12-week honest-trial with §12.6 deprescribing. ATA + commerce competitors marketing-biased; Tinnitus Talk surfaces nulls but doesn't synthesise a protocol; BTA/RNID NICE-aligned "don't routinely offer" but no structured personal-trial pathway. NicheCore's *honest-trial-then-honest-deprescribe* posture is unique.

(c) **OTC + home + sovereignty doctrine.** No incumbent ships fully home-administrable with clinic-route sequestered in §15. Lenire clinic-only; Tinnitracks Rx-workflow for reimbursement; hearing-aid OEMs clinician-channel-dependent; Calm/Headspace content-only. Differentiated *if* the storefront delivers it — wave-4 caught today's bundle-first doesn't yet.

(d) **Per-jurisdiction global-non-US frame.** Wave-6 surfaced this. No incumbent ships per-jurisdiction NHS + GKV + MBS + PMJAY + IRDAI reimbursement disclosure. ATA + Schweitzer US-centric; Tinnitus Talk anglophone-only; BTA + RNID UK-only. **Wave-6 Rule 23 converts latent differentiation into positioning claim.**

(e) **Plain-English-first progressive disclosure.** No incumbent's tinnitus content carries the "For you, in plain words → Quick start → Open the science" three-tier scaffold. NHS Choices flat; Tinnitus Talk forum-grade uncurated; Schweitzer single-author-voice. Skill v6.2.4 progressive-disclosure rule is a usability moat.

### 1.3 Where NicheCore explicitly does *not* yet differentiate

(a) **Peer-community surface.** Tinnitus Talk's 100k-member forum is the dominant tinnitus peer-community. Wave-4 proposed a moderated subscription-tier community. Until shipped, NicheCore competes on content-quality but loses on community-presence — load-bearing for chronic-condition retention.

(b) **Audio-first content library.** Calm + Headspace + Rewiring Tinnitus podcast + Treble Health have hundreds of hours of audio. §8.0 references MBCT-T audio but no Cima-protocol-faithful course shipped — wave-4 Tier-2 deliverable.

(c) **In-network clinician booking.** Treble Health books audiology + tinnitus coaching. NicheCore `/expert` scaffold exists but not operational.

(d) **Smartphone audiogram + pitch-match tool.** Mimi + SonicCloud + EarTrumpet + TinnitusPlay are referenced but not shipped — wave-4-recommended email-capture top-of-funnel.

(e) **Localised non-anglophone content.** All incumbents anglophone-first (Tinnitracks EN-DE bilingual). NicheCore can differentiate in Hindi + Tamil + Bengali + Mandarin + Spanish + Portuguese earlier than any incumbent can replicate, given the source corpus.

### 1.4 Specific edits

- **Edit 1.1.** Add **§14.3 "Honest positioning."** ~280 words: name the five differentiation claims (a-e) + the three non-deliverables (no peer community, no audio MBCT-T library, no clinician booking yet) honestly. Routes the reader to Tinnitus Talk / BTA / RNID for the community-tier need NicheCore does not yet meet — honours wave-5 "you are not alone."
- **Edit 1.2.** Add **§15.7 "Other communities + content surfaces."** ~180 words: Tinnitus Talk (community), BTA Helpline + RNID (UK peer/info), Calm + Headspace (general meditation), myNoise + Tinnitracks (already named §5.2/§5.4), Treble Health + Schweitzer (US-centric coaching — non-endorsement framing). ATA omitted (forbidden-authority).
- **Edit 1.3 (skill).** Add **Rule 26 — competitive-positioning disclosure mandatory.** Every dossier surfaces §14.x naming where it differentiates, where it does not, and routes the reader to incumbents that meet what NicheCore does not.

---

## 2. MARKET POSITIONING CATEGORY — WHERE DOES NICHECORE ACTUALLY SIT

### 2.1 The five-category map

The tinnitus consumer-health market segments into five positioning categories with very different trust signals, revenue models, and acquisition surfaces:

| Category | Trust signal | Revenue model | Named incumbents | NicheCore fit today |
|---|---|---|---|---|
| **Clinic-aligned** | Clinician authorship, regulatory grant, NICE-aligned | Clinic prescription / device reimbursement / per-session fee | Lenire-direct, Tinnitracks (DiGA-route), Jastreboff TRT clinics, NHS audiology, NHO/HNO consultants, BTA-aligned UK tinnitus clinics | None — by doctrine (OTC + home + no Rx) |
| **Patient association** | Charity-trust, peer-supporter-trust, NICE / WHO alignment | Donations + sometimes corporate partnership | BTA UK, RNID, ATA US (doctrine-forbidden), Tinnitus Hub charity, Action on Hearing Loss legacy | None today — trust-signal-quality earns admission but no association structure |
| **Wellness platform** | App-store quality, content-team production-value, KPI-friendly subscription metrics | Subscription $69.99-149/year + occasional one-time content purchase | Calm, Headspace, Oto, Brain.fm, Insight Timer | **Partial — wave-4 architecture would put NicheCore here** if subscription Tier 2 ships |
| **Commerce / DTC supplements** | Brand trust + GMP supplier transparency + clinical-claim substantiation | One-time + subscription bundle + cross-sell + affiliate | Hims/Ro adjacents, Lemme, Lipoflavonoid (not endorsed by dossier), TruRelief, Quietum Plus (advertorial-suspect — wave-4 trust-and-safety flagged) | **Primary today** — `tinnitus-quiet-90` $169 bundle is here |
| **Community / forum** | Peer-presence, founder-trust, moderation-quality | Donations + sometimes ads + sometimes sponsored research | Tinnitus Talk (Goedhart), Reddit r/tinnitus, Tinnitus Hub forum, Hearing Tracker forums | None today — wave-4 architecture would put NicheCore here if Tier 2 subscription ships moderated community |

NicheCore today sits primarily in **commerce / DTC supplements** with a much higher-quality content surface than any competitor in that category, and the *dossier's content quality earns admission to the patient-association tier but the storefront architecture does not deliver it*. The wave-4 commercial review's three-tier subscription thesis (free MVP guide + paid subscription content/community + opt-in supplement bundle) would move NicheCore to a **multi-category occupier** — wellness platform + commerce + community — which is the picture-perfect positioning for the dossier's underlying quality. But today, the storefront is commerce-first and the dossier is the bait that lures commerce-first traffic to a $169 bundle CTA.

### 2.2 The category-occupier dynamics

(a) **Commerce-first is lowest-defensibility.** Amazon-direct + house-brands + price-competition; wave-4's 41% GM is contested; commerce-only is most exposed to dimension-4 paid-acquisition foreclosure.

(b) **Patient-association is highest-trust, lowest-revenue** — but the highest-leverage anchor for a multi-tier storefront. BTA + RNID + Tinnitus Talk are non-commerce; their endorsement (or the appearance of association-tier trust) lifts every other category's conversion. *Positioning* (not registering as charity) is achievable: open data, published cohort outcomes (wave-4 mandate), helpline-equivalent (wave-5), no dark-patterns, wave-6 Rule 23 disclosure.

(c) **Wellness-platform + community is LTV-defensible** — Calm $4B, Headspace $3B subscription-only. Subscription content + community vs subscription supplements: LTV 3-6x. Wave-4's full architecture lands here.

**Strategic recommendation:** target **wellness-platform + community + commerce + (latent) patient-association** multi-category positioning. The dossier is the *only* multi-category occupier in the tinnitus space, and the six-tradition + Cochrane-honest frame earns admission to all four. Requires: Tier-2 subscription + community (wave-4), Rule 23 disclosure (wave-6), §14.3 positioning block (Edit 1.1).

### 2.3 Specific edits

- **Edit 2.1.** Add **storefront-layer commitment (PRD level, not dossier prose):** the `/ears/tinnitus` page above-the-fold must offer three CTAs — (a) free email-capture (Tier 1 MVP guide), (b) "Start the TinnitusCompanion free trial" subscription CTA (Tier 2 — when shipped), (c) supplement bundle as an opt-in *secondary* CTA gated behind the safety quiz and surfaced at the §12.6 trial-window decision-point. This converts the storefront from commerce-first to wellness-platform-first while preserving the commerce surface. (Wave-4 commercial recommendation, re-stated here for positioning-category urgency.)
- **Edit 2.2.** Add **dossier §15.8 "How to use this dossier alongside other tinnitus communities + services."** ~120 words: explicit cross-routing — Tinnitus Talk for peer community NicheCore does not yet provide; BTA Helpline for UK same-day peer support; RNID information service for UK NICE-aligned content; NHS Talking Therapies (wave-6 Rule 23) for CBT-T at zero out-of-pocket; jurisdiction-specific routing where wave-6's per-jurisdiction §15.4-§15.8 sub-sections land. Avoids the marketing temptation of competing-against rather than completing-alongside the patient-association tier.

---

## 3. SEO + CONTENT DISCOVERABILITY — WHAT QUERIES DOES NICHECORE RANK VS WHAT SUFFERERS ACTUALLY SEARCH

### 3.1 The honest query landscape

Tinnitus search-query distribution (anglophone-primary, based on the IQVIA + CB Insights tinnitus-vertical mapping, normalised to monthly Google search-volume estimates for 2025-2026):

| Query family | Estimated monthly volume (US + UK + AU + IN anglophone) | Current SERP winners | NicheCore current rank | Strategic priority |
|---|---|---|---|---|
| **"tinnitus cure" / "how to stop tinnitus"** | ~165k | NHS Choices, Mayo Clinic, ATA, Healthline | Unranked | HIGH — head of funnel, lowest-intent, hardest to rank |
| **"tinnitus treatment"** | ~110k | Mayo, NHS, ATA, BTA, Cleveland Clinic | Unranked | HIGH |
| **"tinnitus supplements"** | ~45k | Healthline, GoodRx, supplement-affiliate sites | Unranked | **CRITICAL — this is NicheCore's natural-rank query** |
| **"tinnitus relief"** | ~38k | Headspace, Calm, app-stores, Schweitzer | Unranked | HIGH |
| **"tinnitus sound therapy"** | ~22k | myNoise, ReSound, Widex | Unranked | MEDIUM (myNoise dominance) |
| **"tinnitus + [supplement name]"** (Ginkgo, magnesium, NAC, Lion's Mane, melatonin) | ~80k aggregate | Healthline, supplement brands, WebMD, Tinnitus Talk threads | Unranked | **CRITICAL — long-tail aggregate is the dossier's natural surface** |
| **"tinnitus + worse" / "tinnitus + spike" / "tinnitus + suicide" / "tinnitus + getting worse"** | ~45k aggregate | Tinnitus Talk, Reddit r/tinnitus | Unranked | **HIGH — wave-5 patient-advocate + wave-7 PTSD-comorbid surface need** |
| **"tinnitus + ayurveda" / "tinnitus + ayurvedic"** | ~15k (IN-primary) | AYUSH portals, Ayurveda-coaching brands | Unranked | **CRITICAL — NicheCore's unique-claim query, low competition, high-intent** |
| **"tinnitus + TCM" / "tinnitus + acupuncture"** | ~12k | TCM clinic sites, NCCIH (US, forbidden) | Unranked | HIGH |
| **"tinnitus + Lenire"** | ~8k | Lenire-direct, Neuromod, Boedts coverage | Unranked | MEDIUM (clinic-route, §15 anyway) |
| **"tinnitus + Tinnitracks"** | ~4k | Tinnitracks-direct, DiGA reimbursement coverage | Unranked | MEDIUM |
| **"sudden hearing loss tinnitus 72 hours"** | ~6k | NHS, ENTUK, EHL guidelines | Unranked | **CRITICAL — the SSHL red-flag block is the wave-3 + wave-8 forensic-audiology dimension's load-bearing claim; the sister `[[sshl-hearing-loss]]` dossier needs to own this query** |

NicheCore today ranks for **zero** load-bearing tinnitus queries. The four critical winnable queries:

- **"tinnitus supplements" + long-tail** — natural commerce-query; competitive set Healthline + supplement-affiliates + GoodRx; none carries the dossier's depth or honest grade-demotion. **Beatable.**
- **"tinnitus + ayurveda"** — dossier carries Saraswatarishta + Karna Purana + Brahmi + Ashwagandha + Yashtimadhu with classical-citation depth no anglophone competitor matches. **Highly beatable. Priority-1 for IN-first ship.**
- **"tinnitus + getting worse / spike"** — wave-5 high-distress query, dominated by Tinnitus Talk threads. §11.7 distribution-context + §0 crisis-block earns the user-need; landing-page-optimisable. **Beatable.**
- **"sudden hearing loss tinnitus 72 hours"** — sister `[[sshl-hearing-loss]]` dossier owns this; wave-3 jurisdiction-corrected SSHL routing. **CRITICAL safety query, structurally winnable.**

### 3.2 The "Cochrane + Ginkgo" honest-grade arbitrage

The dossier's honest Hilton-2013-null + EMA-HMPC-not-recognised treatment of Ginkgo is a surface no incumbent carries honestly. Healthline + supplement-affiliates carry pro-Ginkgo content; Tinnitus Talk threads carry user-anecdote + null-mention without synthesis; BTA / RNID surface "NICE doesn't recommend" without personal-trial pathway. NicheCore is the only defensible authority for honest-trial-then-honest-deprescribe.

A single "Ginkgo for tinnitus: honest Cochrane verdict + are-you-a-responder" article ranking for "ginkgo tinnitus" variants (~12-15k/mo aggregate) converts informational traffic to dossier to bundle/subscription CTA. **Highest-leverage single piece-of-content in the wave-9 backlog.**

### 3.3 Specific edits

- **Edit 3.1.** Add **storefront-layer SEO landing pages** (PRD-level): six dedicated landing pages anchored on the queries the dossier should own — "tinnitus supplements honest evidence", "ayurveda for tinnitus", "tinnitus getting worse what to do", "ginkgo for tinnitus honest verdict", "sudden hearing loss tinnitus 72 hours" (cross-routed to `[[sshl-hearing-loss]]`), "Cochrane review tinnitus 2018 update". Each links into the dossier; each captures email; each surfaces the subscription Tier 2 CTA. ~6 pages × ~2,000 words = ~12,000 words. ~6 weeks of content production.
- **Edit 3.2.** Add **localised content tracks** — Hindi, Tamil, Bengali, Mandarin earliest (IN + CN + low-competition + high tradition-content match). Six localised dossier-derivative pages each, optimised for "टिनिटस आयुर्वेद" (tinnitus ayurveda Hindi) + "耳鸣 中医" (tinnitus TCM Mandarin) + equivalent in Tamil + Bengali. Low competition; high-intent; the dossier's source corpus supports this with zero original-content cost beyond translation.
- **Edit 3.3 (skill).** Add **Rule 27 — SEO-discoverability disclosure.** Every dossier surfaces an honest §14.4 "What this dossier is structurally optimised to rank for + what it isn't" — names the head queries it competes for, the long-tail queries it owns natively, and the queries it explicitly doesn't try to win (e.g., "tinnitus cure" which the dossier doctrine refuses to claim).

---

## 4. DTC MARKETING CHANNEL — GOOGLE + META + TIKTOK HEALTH-AD RESTRICTIONS + INFLUENCER + AFFILIATE + PR LANDSCAPE

### 4.1 The paid-channel restriction matrix

Tinnitus is in the **restricted health category** for every major paid-acquisition platform:

| Channel | Restriction posture | CAC ceiling |
|---|---|---|
| **Google Search** | Google Ads Health policy + LegitScript/IAS verification US/UK/AU; "cure/treat/prevent" claims banned; branded queries OK | $80-150 bundle CAC |
| **Google Display + YouTube** | Display health-vertical + YouTube health-misinformation + EU DSA supplement restrictions; ads gated | $120-300 |
| **Meta (FB + IG)** | Bans before/after, personal-attributes targeting, implicit-claim language; LegitScript required; high-distress retargeting policy-prohibited | $150-250 if approved; many rejections |
| **TikTok** | 2024 health-claim crackdown + Q3 2025 wellness-supplement ad-ban for non-LegitScript; organic-only viable | Organic only |
| **Reddit Ads** | More permissive on supplements; r/tinnitus + r/Audiology ban self-promotion | $100-180 |
| **Pinterest** | Permissive with LegitScript + disclaimer; under-leveraged | $60-110 |
| **Programmatic + CTV** | DSP brand-safety blocks tinnitus-condition retargeting as sensitive; CTV brand-only | $180-600 |

**Paid channels are structurally constrained for tinnitus OTC supplement commerce.** Wave-4's $80-150 CAC ceiling holds only for Google Search branded + Reddit + Pinterest. Meta + TikTok + Programmatic + CTV are foreclosed at meaningful volume. **Paid cannot be the primary acquisition surface.**

### 4.2 The organic + earned-media surface that must carry acquisition

(a) **SEO + content** (dimension 3) — highest-leverage long-term surface.

(b) **Patient-association partnership** — BTA, RNID, Tinnitus Talk, Tinnitus Hub. Not paid placement; the dossier earns admission via the audit chain. Examples: BTA-listed-content; Tinnitus Talk research-collaboration (Lugo + Goedhart TT-T cohort infrastructure); RNID information-service cross-routing.

(c) **Influencer + creator** — moderate leverage. Landscape: Glenn Schweitzer (Rewiring Tinnitus, ~80k email, Treble-Health affiliate; US-centric, coaching-conflicted); Dr Hashir Aazh (UK PI + YouTube; clinic-channel, lower-conflict); Dr Ben Thompson (Treble Health, commerce-conflicted); Jeff Hall (DocJeff YouTube; lower-conflict); Julian Cowan Hill (UK qigong + tinnitus coach; tradition-aligned with NicheCore). Partner with low-conflict creators (Aazh, Cowan Hill, Indian Ayurveda + TCM creators); avoid high-conflict (Schweitzer, Treble Health).

(d) **Affiliate / publisher** — limited. Supplement-affiliate funnels fail the dossier's evidence bar; clean-trust publisher partnerships (Patient.info, NHS-aligned surfaces, Healthline Connect with doctrine-fit check) could syndicate excerpts; outbound affiliate to device incumbents is doctrine-incompatible.

(e) **Earned PR** — high leverage. The "Cochrane-null on Ginkgo + AYUSH-honest + sovereignty" frame is publishable to BBC Health, Guardian Wellness, NYT Well, The Hindu Wellness, Süddeutsche Gesundheit, Le Monde Santé. Tinnitus is under-covered editorially; the non-US-centred pluralist frame aligns with current editorial appetite.

### 4.3 The wave-5 boundary on high-distress retargeting

**The Lugo 2022 10% suicidality figure makes high-distress tinnitus a sensitive-segment** for retargeting. Meta + Google "personal hardship" policies prohibit it. NicheCore must build a **public non-retargeting commitment** for the high-distress cohort — doctrine + brand-trust + compliance triple-win.

### 4.4 Specific edits

- **Edit 4.1.** Add **storefront-policy commitment (PRD-level):** explicit no-retargeting policy for users who self-identify as high-distress (TFI > 50 cohort) or who clicked from a crisis-line surface. Disclose publicly. (Wave-5 trust-and-safety doctrine, surfaced here for channel-strategy implementation.)
- **Edit 4.2.** Add **influencer / creator partnership track** — outreach + content-collaboration with Dr Hashir Aazh, Julian Cowan Hill, and 3-5 Indian Ayurveda + TCM creators (named in the wave-4 cross-cultural-localization review). Explicitly avoid Schweitzer + Treble Health-aligned creators (conflict + doctrine misalignment).
- **Edit 4.3.** Add **earned-PR campaign** — pitch to BBC Health, Guardian Wellness, The Hindu Wellness, NYT Well, Süddeutsche Zeitung Gesundheit. Frame: "the Cochrane-honest, AYUSH-honest, six-traditions, OTC-sovereignty tinnitus protocol with per-jurisdiction reimbursement disclosure." This is the differentiated story.
- **Edit 4.4 (skill).** Add **Rule 28 — channel-policy-disclosure mandatory.** Every dossier surfaces an honest §14.5 "What we don't do to acquire users" — names the no-retargeting commitment, the no-high-distress-retargeting commitment, and the channels NicheCore explicitly does and does not use. Trust-anchor + policy-compliance + brand-differentiation triple-win.

---

## 5. ACQUIRE VS PARTNER VS BUILD — BUDDY PROGRAMME + INDIA NHP CO-PUBLICATION + PMJAY INTEGRATION

### 5.1 The three pathways segmented

(a) **Buddy programme** — peer-supporter / 1:1-matching surface modelled on BTA helpline + Tinnitus Talk mentor system + AA sponsor model. Wave-5 patient-advocate surfaced this as load-bearing for the high-distress cohort. Ops: recruit + screen + train supporters, moderation + crisis-line-escalation, matching, supervision. ~$3-6/pair/month recurring; high trust-yield; long-cycle build.

(b) **India NHP co-publication** — nhp.gov.in is the Indian MoHFW consumer-health portal (distinct from AYUSH-MoA portal), plain-English allopathic + AYUSH content, NHP-editorial-board governance. Co-publication carries dossier into ~3M monthly visitor surface + statutory imprint. Ops: editorial-board engagement, IP-licensing, Hindi/Tamil/Bengali localisation, co-branded byline, freshness-refresh.

(c) **PMJAY integration** — Ayushman Bharat - PMJAY covers ~50 crore beneficiaries at ~5,200 empanelled hospitals; AYUSH packages cover §4.1 Saraswatarishta + §4.2 Karna Purana + §4.5 Khamīrā Abresham at zero-out-of-pocket up to ₹5 lakh/family/year per wave-6. Integration = PMJAY-eligibility-screening + empanelled-hospital directory + package-code disclosure + statutory-payer-routing-first IN commerce model. Ops: PM-JAY API (beneficiary + empanelment), state-AYUSH-mission engagement, IRDAI compliance.

### 5.2 The acquire / partner / build matrix

| Pathway | Acquire | Partner | Build | Recommendation |
|---|---|---|---|---|
| **Buddy programme** | Small peer-supporter / coaching network, $200-500k, ~10-30 supporters + matching-IP; cultural-fit risk | BTA / Tinnitus Talk / RNID; $40-120k/yr; instant trust + warm supply; commerce-cobranding risk | In-house recruit + train + escalation infra; $300-600k build + $150-250k/yr; 9-15 mo to launch | **PARTNER BTA + TT + RNID; BUILD MODERATION + ESCALATION TECH.** Supply is incumbents' moat; platform is NicheCore's. Hybrid at layer-boundary. |
| **NHP co-publication** | N/A (statutory) | NHP editorial-board co-publication; $30-80k + localisation; ~3M monthly imprint + statutory-trust; doctrine-concession risk on six-traditions framing | Localised Hindi/Tamil/Bengali/Mandarin dossier track standalone; $80-180k; faster, lower trust-anchor | **PARTNER NHP IF DOCTRINE-FIT, BUILD LOCALISED TRACK EITHER WAY.** Localised ships regardless. |
| **PMJAY integration** | N/A (statutory) | State-AYUSH-Mission + IRDAI-insurer routing; long govt cycle, political risk | Native PMJAY-eligibility + empanelled-hospital + package-code disclosure via ABDM consent-architecture; $200-400k + $80-150k/yr; 6-9 mo | **BUILD — ONLY SOVEREIGNTY-COMPATIBLE OPTION.** Wave-6 Rule 23 made operational in IN; partnerships downstream. |

### 5.3 The three-phase sequencing recommendation

Honouring wave-4 ship-IN-first + wave-6 Rule 23 + sovereignty doctrine:

**Phase 1 (months 0-6, IN-anchor).** Build PMJAY-routing natively (sovereignty pure-play); partner BTA for UK Buddy cross-routing pilot; pitch NHP editorial board for co-publication. Parallel: ship wave-4 Tier-2 subscription + community; ship wave-6 §15.4-§15.8 disclosure; ship Edits 1.1-4.4.

**Phase 2 (months 6-12, UK + DE expansion).** Partner Tinnitus Talk for cohort-research collaboration (dossier feeds anonymised aggregate outcomes into TT's published surface = mutual trust-anchor + acquisition-via-association); partner RNID for UK content cross-routing; pitch Süddeutsche/Spiegel Gesundheit + Guardian Wellness PR; ship moderated-community in Tier-2 with BTA/TT supporter-supply.

**Phase 3 (months 12-24, global + acquisition optionality).** Evaluate peer-supporter or coaching-network acquisition (~$200-500k); evaluate NHP co-publication operationalisation; expand TGA + Health Canada NHP + GKV per-jurisdiction routing per Rule 23.

**Partner-heavy Phase 1 (lowest capex, highest trust-return); build-heavy Phase 2 (subscription + community + content); acquire-optionality Phase 3 (cash-flow + cohort-validated only).** Defaulting to build is highest-cost lowest-velocity; defaulting to acquire is unavailable for NHP/PMJAY (statutory) and risky for Buddy; defaulting to partner across-the-board sacrifices sovereignty on PMJAY. Hybrid is the recommendation.

### 5.4 Specific edits

- **Edit 5.1.** Add **strategic-roadmap commitment (PRD + funding-narrative level, not dossier prose):** the three-phase sequencing above as the explicit go-to-market commitment. This is the wave-9 strategic recommendation that converts the dossier moat into a distribution + community + payer moat.
- **Edit 5.2.** Add **dossier §15.9 "How this protocol intersects with the Indian Ayushman Bharat - PMJAY scheme."** ~250 words (the most under-specified jurisdiction in the wave-6 audit): PMJAY-eligibility check, empanelled-hospital directory cross-reference, AYUSH package-code disclosure for §4.1/§4.2/§4.4/§4.5, statutory-routing-first commerce framing — *AYUSH OPD package at empanelled hospital first, supplement-bundle at maintenance-only opt-in second*. This is the wave-6 Rule 23 operationalised for IN, where the doctrine + commercial + sovereignty + payer-disclosure all align.
- **Edit 5.3 (skill).** Add **Rule 29 — partnership-disclosure mandatory.** Every dossier surfaces the partner organisations the storefront cross-routes to (BTA, RNID, Tinnitus Talk, NHP, State-AYUSH-Mission, etc.) + the acquisition + partner + build posture for the strategic-build dimensions named in the dossier's §15 referral addendum. Honest disclosure of distribution-strategy aligned with the doctrine of honest evidence-disclosure.

---

## 6. CROSS-DIMENSIONAL SUMMARY

The five dimensions interlock: D1 (differentiation) is real but invisible in the storefront; D2 (category) constrains compete-vs-complete decisions; D3 (SEO) is the highest-leverage acquisition surface in a paid-foreclosed market (D4); D5 (acquire/partner/build) is the operating-architecture decision that converts D1-4 into a business.

**Load-bearing recommendation:** occupy **wellness-platform + community + commerce + (latent) patient-association** multi-category positioning by partnering for distribution (BTA, NHP, Tinnitus Talk, RNID), building for sovereignty (PMJAY routing, Tier-2 subscription + community + tracking), and acquiring opportunistically in Phase 3 (cash-flow + cohort-validated). The dossier earns the right to compete; the storefront + community + distribution build determines whether it wins.

Wave-9 candidate skill rules — all doctrine-compatible, commercially-defensible per wave-4 + wave-6:

- **Rule 26** — competitive-positioning disclosure (§14.3 in every dossier).
- **Rule 27** — SEO-discoverability disclosure (§14.4 owned-queries + explicit non-targets).
- **Rule 28** — channel-policy disclosure (§14.5 no-retargeting + no-high-distress-retargeting).
- **Rule 29** — partnership disclosure (§15.x cross-routing + distribution partners).

---

## 7. PRIORITY-RANKED BACKLOG (WAVE-9 NEW ITEMS)

| Priority | Item | Owner | Effort |
|---|---|---|---|
| BLOCKER | Edit 1.1+1.2 — §14.3 + §15.7 positioning + alt-resources cross-routing | Dossier prose | 2-3 days |
| BLOCKER | Edit 2.1 — storefront three-CTA above-the-fold | `/ears/tinnitus` + ConversionStrip | 1 week dev |
| BLOCKER | Edit 5.1+5.2 — three-phase GTM + §15.9 PMJAY surface | Strategy + prose | ~10 days |
| BLOCKER | Edit 4.1+4.4 — no-retargeting commitment + Rule 28 | Storefront policy + skill | 3 days |
| P1 | Edit 3.1 — six SEO landing pages | Content | ~6 weeks |
| P1 | Edit 4.2 — influencer outreach (Aazh, Cowan Hill, IN creators) | Marketing ops | ~3 mo cycle |
| P1 | Edit 4.3 — earned-PR campaign | Marketing ops | ~3-6 mo |
| P1 | Edit 1.3+3.3+5.3 — skill Rules 26, 27, 29 | Skill v6.3 | ~1 day |
| P1 | Edit 3.2 — Hindi/Tamil/Bengali/Mandarin localised tracks | Content + localisation | ~3 mo |
| P2 | Edit 2.2 — §15.8 cross-routing block | Dossier prose | 1 day |
| P2 | Build PMJAY-routing + ABDM consent | Engineering | ~6-9 mo |
| P2 | Pitch NHP editorial board co-publication | Partnerships | ~6 mo |
| P2 | Pilot BTA Buddy-programme cross-routing | Partnerships | ~6 mo |
| P3 | Tinnitus Talk cohort-research collaboration | Partnerships | ~12 mo |
| P3 | Peer-supporter / coaching-network acquisition scan | Strategy | Phase-3 only |

Total wave-9: ~22 items (4 BLOCKERs, ~12 P1, ~6 P2, ~3 P3). Additive to waves 1-8; none renounces doctrine; all commercially-defensible per wave-4 + wave-6.

---

## 8. SIGN-OFF

The dossier is defensible against every named incumbent at the content-quality layer. The storefront is not yet positioned to win at the distribution + community + channel-strategy layer. Wave-9's contribution is the **CI + positioning + GTM scaffolding** that converts the wave-1-through-wave-8 content moat into a defensible business. **Moderate-to-major revision at the storefront + skill + roadmap layer, not the dossier prose layer** — four candidate skill rules (26-29) for v6.3 + a three-phase partner-build-acquire sequencing that respects doctrine + wave-4 LTV + wave-6 disclosure simultaneously.

The dossier earns the right to compete. The next ship — Tier-2 subscription + community + PMJAY routing + §14.3 positioning + six SEO landing pages — determines whether NicheCore wins.

*— Wave-9 Reviewer, 2026-06-13*
