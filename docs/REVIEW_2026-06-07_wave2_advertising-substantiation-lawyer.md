# Wave 2 Review — Advertising-Substantiation Lawyer (Non-US: UK ASA / EU MDR / TGA / AYUSH / DMR Act 1954)

**Reviewer:** Consumer-protection / advertising-substantiation counsel; 12 years' practice across UK ASA + EU Article 13 + Australian TGA + India Drugs and Magic Remedies Act 1954.
**Date:** 2026-06-07
**Scope under review:**
- `nichecore/research/tinnitus-support.md` (2026-06-06 revision, schemaVersion v7.0.0-rigor-pass)
- `nichecore/components/layout/conversion-strip.tsx`
- `nichecore/app/page.tsx`
- `nichecore/lib/data.ts` (specifically the `tinnitus-quiet-90` bundle at line 48)
- `.claude/skills/ailment-360-research/SKILL.md` (v7.0.0)

**Doctrine respected.** The founder's standing rejection of US-FTC / FDA / AHA / ADA / AAFP authority is honoured throughout this review. Findings are anchored exclusively in UK ASA CAP Code, the EU Regulation (EC) 1924/2006 nutrition-and-health-claims regulation (NHCR), the EU Medical Devices Regulation (EU) 2017/745 (MDR), Regulation (EU) 1169/2011 (FIC), the Australian Therapeutic Goods Advertising Code (TGAAC) 2021 + Therapeutic Goods Act 1989, India's Drugs and Magic Remedies (Objectionable Advertisements) Act 1954 + the Ministry of AYUSH Drugs & Cosmetics Rules 1945 (Sch. T), the EU Unfair Commercial Practices Directive 2005/29/EC (UCPD), the UK Consumer Contracts Regulations 2013 (CCR), the EU Consumer Rights Directive 2011/83/EU (CRD), and the UK/EU GDPR + Australian Privacy Act 1988.

**One framing note for the founder.** The bar is not "US-FTC compliance." But the four non-US regulatory frameworks the founder has explicitly endorsed are, in aggregate, **stricter** than the US-FTC bar on health-product advertising. UK ASA's CAP Code rule 12.1 is the toughest health-advertising rule in the English-speaking world. India's DMR Act 1954 Schedule literally lists "diseases and disorders of the ear" (Item 27 in some readings) as a category in which advertising of treatment is criminally prohibited. The TGA Therapeutic Goods Advertising Code applies civil and criminal penalties up to AUD 1.65m per offence. EU MDR Class IIa device claims trigger registration obligations the consumer-device manufacturers cited in §5 have NOT obtained. The doctrine the founder embraced is in fact the toughest doctrine — and the product as it stands today is non-compliant with material elements of every one of those four frameworks.

The good news: most findings here are remediable by softening claim wording, adding required disclosures, or restructuring the device-pairing prose. None of the findings demand abandoning the protocol. The product can be made defensible.

---

## EXECUTIVE SUMMARY

Across the five attack dimensions, I find **31 distinct substantiation or disclosure failures** in the product as it ships on 2026-06-06. Of these, **9 are blocker-grade** under at least one of UK ASA / EU MDR / TGA / DMR Act 1954 — meaning they would on their own trigger regulator action, sanction, or, in the case of India's DMR Act, criminal liability for the directors and advertisers.

The most legally exposed surfaces, ranked:

1. **The home page hero card "Quieter ears, no false promises"** at `app/page.tsx:319-330` is a per-se prohibited advertisement under India's Drugs and Magic Remedies (Objectionable Advertisements) Act 1954 § 3(d). It claims a treatment effect for a disease of the ear listed in the Schedule. This is a strict-liability criminal offence in India, punishable on first conviction by imprisonment up to 6 months and on second conviction by imprisonment up to 1 year. The founder must geofence India out of this hero card OR rewrite to a non-treatment-claim formulation OR accept that selling into India puts the company outside the law.

2. **The §5 device cluster** (Vielight Neuro Gamma, Vielight intranasal, Bemer mat, Nurosym, Parasym, Pulsetto, Truvaga, Xen, Apollo Neuro, HeartMath Inner Balance, Sensate, Saunders cervical traction) is being paired with an explicit therapeutic indication ("tinnitus distress reduction", "calms the vagus nerve", "supports cochlear blood flow"). Under EU MDR 2017/745 Article 7 and the TGA Therapeutic Goods Advertising Code clauses 9 + 10, this either (a) requires that each named device hold a CE mark or AUST L/R listing for the *specific* indication, or (b) makes NicheCore a *joint advertiser* of an off-label therapeutic claim. Several of these devices have NO CE-mark therapeutic indication for tinnitus. Joint liability under EU MDR Art. 16 and TGA Therapeutic Goods Act 1989 § 42DLB attaches.

3. **The ConversionStrip "30-day return on unopened items / Pause or cancel anytime · no contract" risk-reversal panel** at `conversion-strip.tsx:204-213` is incompatible with UK CCR 2013 reg. 29 and EU CRD Art. 9. The cooling-off period for distance-sale supplements in the UK and EU is **14 days from delivery, regardless of whether opened**, except for sealed health-product exceptions. The strip's "30-day on unopened" framing offers a worse remedy than statute requires for opened items in a category that is NOT clearly within the sealed-hygiene exception, and the "Pause or cancel anytime" line does not disclose the 14-day cooling-off right at all. The UK ASA + EU UCPD treat omission of statutory consumer rights as a misleading omission.

4. **The "Dr. Meera Iyer · BAMS · 12 yrs clinical Ayurveda · Bengaluru" reviewer credit** at `conversion-strip.tsx:39-42` is hardcoded as a default. AI-Lab review I63 already flagged this. From an advertising-substantiation lens this is a **fabricated endorsement** if no such person has actually reviewed the journey. UK ASA CAP Code rule 3.45 (testimonials) and Australian TGAAC clause 16 (testimonials) both require testimonial subjects to exist, to have consented, and to be honestly described. A default-fallback reviewer name is not a defensible compliance posture.

5. **The home-page manifesto chip "Real sources, graded"** at `app/page.tsx:67` is materially undermined by the IMPROVEMENT_BACKLOG document's explicit acknowledgement that six factual errors (Cima country, Megwalu country, Hurtuk country, TENT-A2 year, Hilton/Sereda confusion, Attias/Cederroth confusion) shipped to consumers prior to the 2026-06-06 fix. Under UK ASA CAP rule 3.7 + rule 12.1, a claim that is materially untrue at the moment a consumer reads it cannot be excused by a later silent correction. The "honest downgrades when evidence shifts" chip at line 104 implicitly promises a downgrade log that the same backlog document admits does not exist (item I49). This is a misleading-by-implication claim under UCPD Art. 6(1).

6. **The bundle product line item "Tebonin Ginkgo EGb 761 · role: Cochlear circulation + neuroplasticity · grade: B"** in `lib/data.ts:48` directly contradicts the dossier's own honest §3.2 Cochrane disclosure (Grade C for tinnitus; EMA monograph covers mild dementia + circulatory, NOT tinnitus). Under UK ASA CAP rule 12.1 + EU NHCR Article 10, the *commerce* claim must be substantiable to the *same* standard as the editorial claim. Grade B on the bundle card while the same product is Grade C in the dossier is an internally-inconsistent claim — the regulator will read the higher claim, not the lower.

7. **The bundle product "Magnesium Glycinate Calm · role: NMDA / glutamate excitotoxicity protection · grade: B"** in `lib/data.ts:48` makes a structure-function / medicinal-mechanism claim that has no Article 13 authorised health claim under EU NHCR. The EFSA Article 13.1 authorised claims for magnesium are limited to "contributes to normal nervous system function", "contributes to normal muscle function", "contributes to electrolyte balance", "contributes to a reduction of tiredness and fatigue", and similar nutrition-claim wording. "NMDA / glutamate excitotoxicity protection" is a **medicinal claim**, not a permitted nutrition claim. Under NHCR Art. 10 this product cannot be sold in the EU with that role-description.

8. **The "evidence-OS" / "Not a chatbot. Not a blog. The evidence OS for natural health"** positioning at `app/page.tsx:58-65` may, on a robust reading by an EU notified body, constitute a **medical-device-software claim under EU MDR Rule 11** (software intended for diagnosis or therapy). The product describes itself as having a "backend factory" that "researches, grades and reviews every protocol" — diagnostic-adjacent language. If a regulator construes the platform as software-as-a-medical-device, Class IIa CE-mark obligations attach. This is a probability-not-certainty risk, but it is a **non-trivial** risk that the founder should price.

9. **The home-page manifesto chip "Honest uncertainty"** at line 67 cannot coexist on the same page as the home-page hero stat **"Jun '26 last refresh"** at line 48 when the dossier was last *actually* refreshed on 2026-06-06 with six factual errors fixed and ~50 remaining citations still requiring PMID/DOI verification (per the dossier's own YAML at lines 30-33). The "honest uncertainty" chip is only honest if the refresh stat is honest, and the refresh stat is over-claimed.

These nine blockers are remediable in 1-3 days of focused work. The remaining 22 findings are also remediable but lower-priority. **My recommendation: hold the storefront live until at least findings 1, 4, 6, and 7 are resolved.** Findings 2, 3, 5, 8, 9 can be remediated in parallel during a soft-launch.

---

## DIMENSION 1 — SUBSTANTIATION OF HEALTH CLAIMS

This is the largest section and the most legally consequential. I walk every health claim of substance in the dossier and the ConversionStrip, anchoring to UK ASA CAP Code, EU NHCR Regulation 1924/2006, EFSA Article 13.1 authorised-claims register, the TGA Permitted Indications List (PI List) under the Therapeutic Goods (Permissible Indications) Determination, and India's Drugs and Magic Remedies (Objectionable Advertisements) Act 1954 Schedule.

### 1.1 The home-page hero card for tinnitus is a per-se DMR Act 1954 prohibited advertisement

**Verbatim claim:** "Quieter ears, no false promises." + lede: "Tebonin Ginkgo (EMA-monograph) + magnesium NMDA-protection + zinc-balance + Bhramari breath + sound-therapy notch tones. Pulsatile tinnitus pulled out as a red-flag exception."

**File / line:** `nichecore/app/page.tsx:319-330` (the `/ears/tinnitus` entry in the `FEATURED_JOURNEYS` const).

**Regulatory framework + clause:** India's Drugs and Magic Remedies (Objectionable Advertisements) Act 1954 § 3 prohibits "any advertisement referring to any drug in terms which suggest or are calculated to lead to the use of that drug for ... (d) the diagnosis, cure, mitigation, treatment or prevention of any disease, disorder or condition specified in the Schedule." The Schedule, as last amended (Drugs and Magic Remedies (Objectionable Advertisements) Rules 1955 + 2018 amendment notification), lists 54 disease/disorder categories. **"Diseases and disorders of the ear" and "deafness" are Schedule items** (the 2018 amendment expanded the Schedule from 54 to approximately 78 items; ear/hearing disorders are explicitly named). Tinnitus is a disorder of the ear per WHO ICD-11 code MD83. The DMR Act applies civil penalty and criminal liability — § 7 (first conviction: up to 6 months' imprisonment + fine; subsequent conviction: up to 1 year + fine). Directors are personally liable under § 9.

The phrase "Quieter ears" + "Tebonin Ginkgo ... + magnesium NMDA-protection" is a treatment claim for an ear disorder. The "no false promises" half does NOT cure the breach — under DMR Act doctrine, *any* treatment claim for a Schedule disorder is prohibited regardless of disclaimer.

The UK ASA equivalent — CAP Code rule 12.1 ("Marketers must hold documentary evidence to prove all claims, whether direct or implied, that are capable of objective substantiation") + rule 12.2 ("Marketers must not discourage essential treatment for conditions for which medical supervision should be sought") — is more permissive in that NicheCore could in principle substantiate "may help" wording, but the rule 12.1 bar is still failed here because the cited evidence (Tebonin + Mg) does NOT support a treatment-effect claim (Cochrane Hilton 2013 / Sereda 2022 explicit null; Cederroth 2011 null primary endpoint).

**Realistic remediation:**
- **For India:** geofence the `/ears/tinnitus` hero card and the entire tinnitus journey URL out of Indian IP ranges, OR rewrite to non-treatment formulation: "Living-well-with-tinnitus information — research-graded notes, not a treatment." India's DMR Act is one of the few in the world that treats *information-style* health claims as criminal when they reference a Schedule disorder, so the rewrite must be conservative.
- **For UK:** soften "Quieter ears" → "Quieter ears, in the realistic sense the evidence supports". Add the wording the dossier already uses internally: "annoyance lifts first; loudness is a months-long story; ~30% placebo response in chronic tinnitus."
- **For EU + Australia:** the claim is salvageable with the same softening if the underlying bundle products comply with NHCR Art. 10 + TGAAC clause 9 — which today they do not (see findings 1.6, 1.7, 1.8 below).

### 1.2 The dossier red-flag panel about SSHL is good safety practice but the "14-day treatment window dramatically improves recovery" claim is overstated

**Verbatim claim:** "Oral prednisone (60 mg/day × 10-14 days) or intratympanic dexamethasone started inside 14 days dramatically improves the chance of recovery; delayed treatment is associated with much worse hearing recovery."

**File / line:** `tinnitus-support.md:44`.

**Regulatory framework:** UK ASA CAP rule 12.1 (substantiation) + EU NHCR Art. 3(b) (claims must not encourage excessive consumption of any food/treatment) + the general UK ASA principle that the *quantum* of an effect claim must be supported.

The SSHL emergency framing is correct safety practice and I would not soften the urgency. But "dramatically improves" is an unhedged effect-size claim. The actual evidence (the cited Plontke 2020 *Lancet* + the AAO-HNSF 2019 guideline — yes, US-affiliated, footnoted appropriately by the dossier as "clinical-pathway context only") supports that **early treatment improves the *probability* of recovery, with effect-size estimates varying widely across studies (some null, e.g., the Spanish Plaza 2011 sham-controlled steroid trial)**. The honest framing is "early treatment is associated with better recovery in observational cohorts; the sham-controlled evidence is mixed."

**Remediation:** replace "dramatically improves" with "is associated with better recovery in most observational cohorts (sham-controlled RCT evidence is mixed)." Doesn't undermine the urgency; complies with UK ASA quantum-of-effect substantiation discipline.

### 1.3 "Magnesium glycinate — may dampen NMDA excitotoxicity" claim is not a permitted EU nutrition claim

**Verbatim claims (multiple):**
- "Magnesium (glycinate + L-threonate) | Plausible cofactor floor for the over-fired hearing nerve" + "NMDA-modulation; excitotoxicity brake" (`tinnitus-support.md:125`)
- "Combo 1 — Hair-cell + circulation (08:00) ... NAC 600 + Magnesium glycinate 200" (`tinnitus-support.md:537`)
- Bundle line item: "Magnesium Glycinate Calm | role: NMDA / glutamate excitotoxicity protection | grade: B" (`lib/data.ts:48`)

**Regulatory framework + clause:** Regulation (EC) 1924/2006 (NHCR) Article 10(1) — "Health claims shall be prohibited unless they comply with the general requirements in Chapter II and the specific requirements in this Chapter and are authorised in accordance with this Regulation and included in the lists of authorised claims provided for in Articles 13 and 14." EFSA's Article 13.1 register of authorised health claims for magnesium permits:
- "contributes to a reduction of tiredness and fatigue"
- "contributes to electrolyte balance"
- "contributes to normal energy-yielding metabolism"
- "contributes to normal functioning of the nervous system"
- "contributes to normal muscle function"
- "contributes to normal protein synthesis"
- "contributes to normal psychological function"
- "contributes to the maintenance of normal bones and teeth"
- "has a role in the process of cell division"

**"NMDA / glutamate excitotoxicity protection" is not on the list and would not survive EFSA scientific-substantiation review** because: (a) the mechanism is a *medicinal* mechanism, not a nutritional one; (b) the human-trial outcome anchor (Cederroth 2011) is *null on the primary endpoint*, as the dossier itself now correctly states. NHCR Article 13(3) requires that authorised health claims be "based on generally accepted scientific evidence." A null trial cannot anchor an authorised claim.

The UK ASA position (CAP Code Section 15: Food, food supplements and associated health or nutritional claims, rule 15.1.1) is that only authorised EU NHCR Annex claims and any UK-retained equivalents can be made on UK supplements. The "NMDA / glutamate excitotoxicity protection" wording fails this test.

The TGA Permitted Indications List (Therapeutic Goods (Permissible Indications) Determination No. 1 of 2018) permits magnesium indications such as "Maintain/support general health", "Helps support muscle function/contraction", "Relief of muscle cramps", "Reduces occurrence of muscle cramps" — but NOT mechanistic excitotoxicity claims. The bundle as written would not be defensible at TGA listing.

**Realistic remediation:**
- **Bundle role field** (`lib/data.ts:48`): change `role: "NMDA / glutamate excitotoxicity protection"` → `role: "Nervous system function (Article 13 authorised)"` or `role: "Contributes to normal nervous system function"`. This is the highest-Mg-anchor consistent EU-authorised wording.
- **Dossier prose:** keep the mechanistic explanation behind the `#### Open the science` collapsible (where it is legitimate education, not consumer advertising) but ensure the lead-in plain-words bullet uses Article-13-compliant wording. The dossier already partially does this; tighten it.
- **Grade:** demote bundle Grade B → C to match the dossier §3.3 honest grading.

### 1.4 "Tebonin Ginkgo — Cochlear circulation + neuroplasticity" bundle role is misaligned with EMA HMPC monograph indication and Cochrane evidence

**Verbatim claim (bundle):** `{ name: "Tebonin Ginkgo EGb 761", supplier: "Schwabe (EMA-monograph)", role: "Cochlear circulation + neuroplasticity", format: "Tablet", price: 49, qualityScore: 94, qualitySignals: ["EMA HMPC monograph", "Standardised EGb 761"], evidenceGrade: "B" }`

**File / line:** `lib/data.ts:48`.

**Regulatory framework + clause:** The EMA HMPC monograph (Community Herbal Monograph on *Ginkgo biloba* L., folium; EMA/HMPC/321097/2012) authorises Ginkgo for:
- **Well-established use** (WEU, evidence-based): "Improvement of (age-associated) cognitive impairment and of quality of life in mild dementia."
- **Traditional use** (TU): "Relief of heaviness of legs and feeling of cold hands and feet associated with minor circulatory disturbances after serious conditions have been excluded by a medical doctor" + "improvement of cognitive disorders and quality of life with mild dementia symptoms".

**Tinnitus is NOT a listed EMA-authorised indication.** The dossier §3.2 (lines 116-118) now correctly acknowledges this. The bundle role description "Cochlear circulation + neuroplasticity" therefore (a) over-claims relative to the monograph, and (b) directly contradicts the dossier's own corrected disclosure.

The qualitySignal tag `"EMA HMPC monograph"` is **misleading-by-implication** under UK ASA CAP rule 3.1 + 3.3 (claims must not mislead by omission, ambiguity, exaggeration, or material implication). The natural consumer reading is "EMA endorses Tebonin for tinnitus" — which is exactly the inverse of what the EMA monograph says.

Under the TGA Therapeutic Goods Advertising Code clause 9 (TGAAC 2021) "an advertisement must not contain any claim, statement or implication that ... [is] inconsistent with the indications accepted by the TGA." Tebonin is sold in Australia by Schwabe under AUST L listing — the listed indications are circulatory/cognitive, not tinnitus.

Under India's DMR Act § 3(d), advertising Tebonin for tinnitus is independently prohibited regardless of EMA monograph status.

**Realistic remediation:**
- **Bundle role field:** "Cochlear circulation + neuroplasticity" → "Traditional herbal medicinal product (EMA HMPC monograph: mild dementia + minor circulatory disturbances; not authorised for tinnitus). Included in stack on Grade C subset-responder rationale per §3.2."
- **Bundle grade:** demote B → C to match the corrected dossier §3.3 grade. The dossier explicitly states "C (tinnitus — Cochrane null + EMA indication-mismatched)" yet the bundle keeps grade B. This is the internal inconsistency I flagged in the executive summary as Blocker 6.
- **Bundle qualitySignal `"EMA HMPC monograph"`:** retain only if the badge text reads `"EMA HMPC monograph — for mild dementia + circulatory, not tinnitus"`. A bare "EMA HMPC monograph" badge next to a tinnitus product is misleading.

### 1.5 "Bhramari humming breath — raises nasal nitric oxide 15× and acoustically covers the brain's volume-up" — multiple substantiation issues

**Verbatim claim:** "Bhramari (humming bee) | THE tinnitus breath: humming raises nasal nitric oxide 15× and gently 'covers' the ringing while calming the vagus."

**File / line:** `tinnitus-support.md:490` and similar at lines 92, 296, 466, 484-487, 514, 545, 590, 595, 622, 969.

**Regulatory framework + clause:** UK ASA CAP rule 12.1 (substantiation) + EU NHCR Art. 10 (botanicals-on-hold but the "tinnitus" claim is medicinal anyway, not nutritional).

The Lundberg humming-NO study (Weitzberg & Lundberg 2002, *AJRCCM*) measured nasal nitric oxide in healthy adults, n=10. The 15-fold figure derives from that small healthy-adult study, NOT from any tinnitus population. The dossier's §13.7 demoted entry correctly states: "no sham-controlled tinnitus RCT; Telles 2011 is vagal-tone-in-healthy-adults, wrong population; Lundberg humming-NO is n=10 healthy adults, wrong outcome" (line 969).

This is internal inconsistency: §13.7 demotes Bhramari to Grade H and acknowledges the wrong-population caveat, while §7.3 (line 486) and §11.5 case composite (line 922 — "Bhramari 10 min AM + 5 min PM") and §8.5 master timetable (lines 570, 590-595) treat Bhramari as a confidently-recommended frontline practice. The bundle includes "Bhramari pranayama cards" in `lib/data.ts:48`.

Under UK ASA CAP rule 12.1, a product description (the bundle card includes Bhramari cards as a product feature) that depends on a Grade H claim cannot make a stronger-than-Grade-H implied promise. The "THE tinnitus breath" framing and the master timetable prescription do exactly that.

For Indian regulatory exposure: AYUSH Ministry has *not* issued a CCRAS or CCRH research-publication-grade endorsement of Bhramari for tinnitus. The S-VYASA Pandey 2014 open-label n<40 paper that the dossier cites (line 969) is below the threshold the CCRAS Standard Treatment Guidelines would normally accept.

**Realistic remediation:**
- Reframe Bhramari throughout §5, §7, §8 as Grade H ("emerging signal, low harm, pilot-level evidence") consistent with the demoted §13.7 entry. Keep the practice — drop the confidence.
- Replace "THE tinnitus breath" → "A low-harm, pilot-level adjunct breath practice".
- Drop the "raises nasal nitric oxide 15×" figure from the bundle / consumer-facing prose. It's a true datum about a wrong population. Keep it in the `#### Open the science` collapsible as biophysical education only.
- Strip the bundle's "Bhramari pranayama cards" item description of any treatment-effect implication. Re-position as "breath practice cards (pilot-evidence adjunct, low-harm, optional)".

### 1.6 "B12 Methylcobalamin — Auditory-nerve neurotrophic" bundle role makes a medicinal claim

**Verbatim claim (bundle):** `{ name: "B12 Methylcobalamin", supplier: "Verified reseller", role: "Auditory-nerve neurotrophic", format: "Sublingual", price: 22, qualityScore: 90, qualitySignals: ["Methylated form"], evidenceGrade: "C" }`

**File / line:** `lib/data.ts:48`.

**Regulatory framework + clause:** EFSA Article 13.1 authorised claims for vitamin B12 cover:
- "contributes to normal energy-yielding metabolism"
- "contributes to normal functioning of the nervous system"
- "contributes to normal homocysteine metabolism"
- "contributes to normal psychological function"
- "contributes to normal red blood cell formation"
- "contributes to normal function of the immune system"
- "contributes to the reduction of tiredness and fatigue"
- "has a role in the process of cell division"

"Auditory-nerve neurotrophic" is **not** an authorised nutrition claim — it is a medicinal mechanism. Under NHCR Art. 10(1) it cannot be made on an EU-marketed supplement.

The dossier §3.3 (line 130) appropriately frames B12 as "ONLY IF DEFICIENT" — but the bundle card removes the deficiency-conditional and asserts the mechanism. This is a NHCR violation at the commerce surface.

**Realistic remediation:** Change `role: "Auditory-nerve neurotrophic"` → `role: "Contributes to normal functioning of the nervous system (deficiency-corrected use only)"`. Add a bundle-card disclaimer surface: "B12 supplementation is only beneficial when serum B12 / MMA confirm deficiency. Vegans, age 65+, metformin/PPI users at higher deficiency risk."

### 1.7 "Zinc Balance Complex — Cofactor (test ferritin/zinc first)" — the bundle includes a test-first conditional but no enforcement mechanism

**Verbatim claim (bundle):** `{ name: "Zinc Balance Complex", supplier: "Verified reseller", role: "Cofactor (test ferritin/zinc first)", format: "Capsule", price: 24, qualityScore: 87, qualitySignals: ["Chelated", "Copper-balanced"], evidenceGrade: "C" }`

**File / line:** `lib/data.ts:48`.

The bundle role appropriately includes "test ferritin/zinc first". Under UK ASA CAP rule 12.6 (advertising of medicines and treatments), a *conditional* advertised use is permissible only if the consumer is empowered to honour the condition before buying. The current ConversionStrip purchase flow does NOT gate the zinc product on a confirmed-deficiency test result. The 4-question safety quiz (per the ConversionStrip's "90-second safety check" + the 4-question disclaimer at line 154) is checked for medication interactions / pregnancy / red-flags, NOT for confirmed-low zinc.

The dossier §11.5 (line 841) explicitly says "Wire this into the safety quiz before checkout. The 4-question quiz on the conversion strip is not enough. The real intake needs ~12 yes/no gates corresponding to the rows above; exclusions render explicitly before the Subscribe & Save CTA." The dossier knows the gate is missing.

Under TGAAC clause 22 (testimonials / endorsements) + clause 9 (consistency with indications), a "test first" conditional that is not enforced is a misleading commercial practice under UCPD Art. 6(1).

**Realistic remediation:** Either (a) gate the zinc SKU on user-uploaded recent lab result confirming deficiency, OR (b) sell zinc *without* the deficiency-conditional and instead disclose "Most adults are zinc-replete; supplementing if you are not deficient provides no demonstrable tinnitus benefit (Coelho 2013)." Option (a) is the higher-integrity path.

### 1.8 The §3.3 Methyl-B12 row's "Shemesh 1993 Israel n=113" anchor is over-claimed in the bundle context

**Verbatim claim:** "Methyl-B12 (under the tongue) — ONLY IF DEFICIENT | Helps only if your B12 is actually low ... Auditory-nerve myelin ... Grade C (deficiency-corrected only)"

**File / line:** `tinnitus-support.md:130`.

The dossier prose correctly conditions B12 on deficiency. The Shemesh 1993 study is the *deficient subgroup* anchor. This is correctly Grade C.

**No remediation needed at dossier level.** The bundle inherits the substantiation problem flagged in 1.6.

### 1.9 The §5.10 Vielight + red-light "auditory cortex + inner-ear blood flow" claim is a medical-device-class claim

**Verbatim claim:** "Red-light therapy to the head + behind the ear | Vielight Neuro Gamma + a hand-held red-light to the mastoid bone behind each ear, 5-10 min a side, 5 days a week. No direct tinnitus RCT — honestly graded C."

**File / line:** `tinnitus-support.md:312-316`, plus the master timetable at line 575 ("Red-light therapy | Auditory cortex + inner-ear blood flow").

**Regulatory framework + clause:** EU MDR (EU) 2017/745. See full discussion in Dimension 3 below. Short version: Vielight Neuro Gamma is sold by Vielight Inc. (Canadian manufacturer) as a "research device" in many jurisdictions; the consumer-photobiomodulation field is currently in a regulatory grey zone in the EU. Pairing the device with the specific therapeutic indication "auditory cortex + inner-ear blood flow + tinnitus" is what tips it from "general wellness device" (which may be exempt under MDR Article 1(2)) to "medical device" (which requires CE marking).

The dossier honestly grades the device C and states "No direct tinnitus RCT" — this is the correct substantiation discipline at the editorial level. But the §8.5 master timetable lists "Red-light therapy | Auditory cortex + inner-ear blood flow" without the C-grade caveat, and the bundle card descriptor in `data.ts:48` does not disclose the device-class regulatory status.

**Realistic remediation:** see Dimension 3 below. The minimum acceptable remediation at the substantiation level is to (a) strip the "Auditory cortex + inner-ear blood flow" phrasing from the master timetable and replace with "Optional adjunct device — Grade C, no direct tinnitus RCT", and (b) add a regulatory-status disclosure in §5.10 ("Vielight devices are sold as research / wellness devices in most jurisdictions; consumer use for tinnitus is off-label").

### 1.10 The §15 Lenire framing — properly hedged in the 2026-06-06 revision but still vulnerable to UK ASA

**Verbatim claim (current revision):** "~70-80% _completer_ responder rate at 12-week primary endpoint; ITT responder rate ~60-65% (denominator-dependent). Long-term sustainability based on smaller extension cohort. No published sham-controlled comparator."

**File / line:** `tinnitus-support.md:1005-1011`.

This is excellent substantiation discipline. The revision-2 framing is defensible under UK ASA CAP rule 12.1. The two residual issues:

(a) The §13.7 evidence-tier comparison at line 955 still says "Grade B (active-arm) / C (vs sham — no sham-controlled RCT yet)." UK ASA tends to read the *higher* grade as the consumer-facing claim. Recommend collapsing to a single "Grade C until sham-controlled RCT publishes" framing at the consumer surface; reserve the B/C bracket discussion for the `#### Open the science` collapsible.

(b) The §15.2 "FDA De Novo grant (March 2023)" is footnoted as "regulatory-path context, not evidence anchor." This is doctrine-compliant. Under UK ASA CAP rule 3.50, regulatory-status references must not mislead the consumer into reading them as efficacy endorsements. The current footnoting is sufficient.

**No further remediation needed for Lenire framing.**

### 1.11 Several §3.3 dosing claims use "may dampen" / "supports" / "improves" language that crosses NHCR boundaries when applied to specific named conditions

A scan of §3.3 (`tinnitus-support.md:122-137`) finds:
- "Cochlear microcirculation; platelet-activating-factor antagonism" (Ginkgo row, line 124) — medicinal mechanism
- "NMDA-modulation; excitotoxicity brake" (Mg row, line 125) — medicinal mechanism
- "Cochlear zinc replacement" (Zn row, line 126) — medicinal mechanism + ear-specific (DMR Act 1954 trigger)
- "Glutathione precursor" (NAC row, line 127) — borderline
- "Cerebral + cochlear vasodilation" (Vinpocetine row, line 128) — medicinal mechanism + ear-specific
- "Endothelial nitric-oxide; microcirculation" (Pycnogenol row, line 129) — medicinal mechanism
- "Mitochondrial ATP" (CoQ10 row, line 131) — borderline
- "Endothelial nitric-oxide donor" (L-arginine row, line 132) — medicinal mechanism
- "Breaks tinnitus-insomnia loop" (Melatonin row, line 133) — direct tinnitus claim
- "NGF/BDNF support" (Lion's Mane row, line 134) — medicinal mechanism
- "Estrogen-receptor-beta-like" (Black Cohosh row, line 135) — medicinal mechanism + falls under EMA HMPC traditional-use indication for menopause (defensible if accurately scoped)
- "Glutathione recycling" (R-ALA row, line 136) — borderline

Under UK ASA CAP Code Section 15 + EU NHCR Article 10, every one of these mechanism descriptions in a *commerce-adjacent* context (the §3.3 table appears in the dossier and is referenced by the bundle) needs either (a) authorised-claim wording, (b) a "for educational purposes — not a marketing claim" framing, or (c) suppression at the commerce surface.

**Realistic remediation:** keep the mechanism descriptions in the dossier as **educational content** (defensible as journalism / scientific writing under UK ASA CAP Code's coverage of *advertising* — the dossier prose itself is not strictly an advertisement unless it carries a buy CTA in the same viewport). The ConversionStrip + bundle cards ARE advertisements. The remediation is:
- **Dossier §3.3 table:** add a section-opening disclaimer: "The mechanism column below is educational / mechanistic context per EU Article 14 + UK ASA CAP rule 15.7. Permitted health claims per EFSA Article 13.1 register apply at the point of sale; see bundle cards for purchase-context claim wording."
- **Bundle cards:** strip mechanism descriptions; substitute authorised nutrition-claim wording per finding 1.3, 1.4, 1.6.

### 1.12 "Tonic water / cinchona cocktails" — "Quinine ototoxicity" claim

**Verbatim claim:** "Tonic water / cinchona cocktails | Tonic water contains quinine, which is directly ear-toxic — even bar-quantity can spike loudness. *(EMA quinine warning 2010)*"

**File / line:** `tinnitus-support.md:396`.

This is a *negative* claim (telling consumers what NOT to consume) so the substantiation bar is lower under UK ASA. The EMA's 2010 quinine warning was specifically about pharmaceutical-grade quinine for nocturnal leg cramps, not about beverage-quantity tonic water (which contains far lower quinine concentrations — typically ~83 mg/L vs pharmaceutical 200-300 mg per dose). The "even bar-quantity can spike loudness" claim is **overstated** — the evidence does not support beverage-quantity ototoxicity in non-sensitive individuals.

**Realistic remediation:** soften to "tonic water contains quinine, which at sensitive-individual or daily-heavy-consumption levels can exacerbate tinnitus per case-report literature; the EMA's 2010 warning addressed pharmaceutical-grade dosing, not beverage quantities."

### 1.13 The "Mediterranean / MIND-millet food pattern | Grade A" claim in §13.7

**Verbatim claim:** "Mediterranean / MIND-millet food pattern | A (vascular base) | PREDIMED 2013 vascular protection underpins cochlear blood-flow."

**File / line:** `tinnitus-support.md:965`.

PREDIMED 2013 (Estruch et al., *NEJM* 2013) was a Mediterranean-diet trial with cardiovascular events as the primary outcome. It made no tinnitus measurement. The "vascular protection underpins cochlear blood-flow" inferential step is the kind of mechanism-bridge that UK ASA CAP rule 12.1 treats as un-substantiated when the inference target is a specific health condition.

Grade A for the food pattern on a *cochlear / tinnitus* outcome over-claims. PREDIMED's actual outcome was cardiovascular events. The honest grade for "Mediterranean diet for tinnitus" is C or T (mechanism-bridge, no direct trial evidence).

**Realistic remediation:** demote §13.7 row to "Grade C (extrapolated from vascular trials; no direct tinnitus RCT)".

### 1.14 Cumulative summary of Dimension 1 substantiation findings

| # | Surface | Verbatim claim | Framework | Severity | Remediation |
|---|---|---|---|---|---|
| 1.1 | Home page hero | "Quieter ears, no false promises" | DMR Act 1954 § 3(d); UK ASA CAP 12.1 | BLOCKER (India) | Geofence or rewrite |
| 1.2 | Dossier SSHL panel | "dramatically improves recovery" | UK ASA quantum-of-effect | Medium | Soften wording |
| 1.3 | Bundle + dossier | Mg "NMDA / excitotoxicity protection" | EU NHCR Art. 10 / EFSA Art. 13.1 | BLOCKER (EU) | Authorised-claim wording |
| 1.4 | Bundle | Tebonin "Cochlear circulation + neuroplasticity" Grade B | EMA HMPC monograph indication mismatch + UK ASA CAP 3.3 | BLOCKER (UK/EU) | Re-grade C; rewrite role |
| 1.5 | Dossier Bhramari | "THE tinnitus breath" + 15× NO claim | UK ASA CAP 12.1 | High | Demote to Grade H consistently |
| 1.6 | Bundle | B12 "Auditory-nerve neurotrophic" | EU NHCR Art. 10 | High | Authorised-claim wording |
| 1.7 | Bundle | Zn "test first" unenforced | UCPD Art. 6 + UK ASA CAP 12.6 | High | Gate purchase or drop conditional |
| 1.8 | Dossier | B12 deficiency-only framing | — | Compliant | None |
| 1.9 | Dossier + timetable | Red-light "auditory cortex + cochlear blood flow" | EU MDR + UK ASA CAP 12.1 | High | See Dim 3 |
| 1.10 | Dossier Lenire | Active-arm vs sham framing | UK ASA CAP 12.1 | Low (revised) | Collapse to C at consumer surface |
| 1.11 | Dossier §3.3 mechanisms | All mechanism columns | EU NHCR Art. 10 (commerce-adjacent) | Medium | Section disclaimer + bundle wording fix |
| 1.12 | Dossier dietary avoid | Tonic water bar-quantity ototoxic | UK ASA CAP 12.1 (overstated) | Low | Soften |
| 1.13 | §13.7 Mediterranean diet Grade A | PREDIMED → tinnitus inference | UK ASA CAP 12.1 | Medium | Demote to C |

---

## DIMENSION 2 — DISCLOSURES MISSING UNDER NON-US OTC + SUPPLEMENT LAW

A consumer in the UK, EU, Australia, or India purchasing the `tinnitus-quiet-90` bundle today does NOT receive disclosures that are legally required in their jurisdiction.

### 2.1 EU FIC Regulation 1169/2011 — nutrition declaration + allergen disclosure

The bundle as presented in the ConversionStrip + the consumer-facing journey page provides:
- Product names (Tebonin Ginkgo, Magnesium Glycinate Calm, Zinc Balance Complex, B12 Methylcobalamin)
- Supplier names
- Role descriptions (already flagged in Dimension 1)
- Evidence grade
- Price

It does NOT provide:
- The mandatory nutrition declaration per Regulation (EU) 1169/2011 (FIC) Article 9 for food supplements (energy / fat / saturates / carbohydrates / sugars / protein / salt)
- The named nutrient percentage of NRV (Nutrient Reference Value) per FIC Annex XIII
- The mandatory allergen list per FIC Article 21 + Annex II (gluten, soy, milk, etc. if present in any product)
- The list of ingredients in descending order per FIC Article 18
- The mandatory "food supplement" statement per Directive 2002/46/EC Article 6(3)(a)
- The "varied and balanced diet and a healthy lifestyle" statement per Directive 2002/46/EC Article 6(3)(c) — this is the load-bearing statement that anchors every health-claim disclosure in the EU

**The "varied and balanced diet" statement is mandatory next to ANY health claim** under NHCR Art. 10(2)(b). Its absence is a per-se NHCR breach.

**Realistic remediation:** add a structured FIC/NHCR disclosure surface to the bundle card and/or the linked product page. Either:
- (a) Render the disclosure inline in the ConversionStrip's "Mini product list" (`conversion-strip.tsx:116-137`)
- (b) Link out from each product to a per-product page that meets FIC requirements
- (c) Defer EU/UK shipping until disclosure infrastructure exists; geofence EU/UK from purchase but keep editorial access

### 2.2 UK ASA + EU NHCR Article 10(2) mandatory accompanying statements

Per NHCR Art. 10(2), every health claim sold in the EU must be accompanied by:
- (a) a statement indicating the importance of a varied and balanced diet and a healthy lifestyle
- (b) the quantity of the food and pattern of consumption required to obtain the claimed beneficial effect
- (c) where appropriate, a statement addressed to persons who should avoid using the food
- (d) an appropriate warning for products that are likely to present a health risk if consumed in excess

The ConversionStrip and bundle surface provides NONE of these for the four bundle products. Each is mandatory before commerce.

**Realistic remediation:** add a sub-section to the ConversionStrip below the "Risk reversal mini-list" titled "EU + UK statutory consumer information" containing the four NHCR Art. 10(2) statements per product. Approximate viewport cost: 80-120 px additional.

### 2.3 TGA Therapeutic Goods Advertising Code (TGAAC 2021) — Australian requirements

The Australian TGA requires for any advertised therapeutic good (including listed complementary medicines / Class IIa devices):
- The AUST L (listed medicines) or AUST R (registered medicines) listing number per TGAAC clause 11
- The mandatory "always read the label and follow the directions for use" statement per TGAAC clause 12 + Therapeutic Goods Regulations 1990 reg. 5G
- The mandatory "if symptoms persist, see your healthcare professional" statement per TGAAC clause 12 for any product making a therapeutic claim
- For Schedule 3 products (e.g., melatonin since the 2024 reclassification): the TGAAC clause 26 pharmacist-supervision disclosure
- The TGAAC clause 16 testimonial disclosures (real, identified, consented persons)

The bundle includes melatonin in `tinnitus-support.md:133` (Combo 3 — Magnesium L-threonate 1 g + Ashwagandha KSM-66 300 + Melatonin 0.3-1 mg). The 2024 TGA reclassification moved melatonin to Schedule 3 (Pharmacist Only Medicine) for adult use (with paediatric warning) — meaning it can only be sold through a pharmacy with a pharmacist's intervention. **Selling the bundle into Australia with the melatonin component present is a regulatory breach unless the company is a registered pharmacy or the melatonin is removed from the AU SKU.**

**Realistic remediation:**
- AU SKU variant: remove melatonin entirely; or partner with an AU pharmacy network for melatonin distribution; or geofence AU.
- For non-melatonin AU bundles: add AUST L number (which Schwabe Tebonin, Pure Encapsulations Mg, Thorne, Nordic Naturals etc. variably hold — verify per SKU) + the two mandatory statements.

### 2.4 India's DMR Act 1954 + Drugs and Cosmetics Rules 1945 Schedule T (AYUSH)

For the Indian market, two parallel frameworks apply:

(a) **DMR Act 1954** — as discussed in 1.1, makes treatment claims for Schedule disorders (ear/hearing) a criminal offence. This affects not just the home-page hero but every dossier statement that implies a tinnitus treatment effect.

(b) **Schedule T of the Drugs and Cosmetics Rules 1945** governs the Good Manufacturing Practice for AYUSH (Ayurveda + Siddha + Unani) products in India. Any AYUSH-branded product sold into the Indian market (Saraswatarishta, Sarivadi Vati, Brahmi Chooranam, Khamira Marwareed, etc.) must be manufactured in a Schedule-T-compliant facility AND licensed under the Drugs and Cosmetics Act 1940 § 33EEC (AYUSH licence). The dossier cites suppliers Baidyanath, Kottakkal, IMPCOPS, Hamdard, Dabur, Patanjali — all of which hold their respective licences in India. NicheCore, by selling these products *outside* India into the UK/EU/AU, becomes the **importer** under Article 8 of the EU MDR/MDR-adjacent supplement framework and inherits compliance burden.

Specifically, the Saraswatarishta product (recommended at `tinnitus-support.md:160` as 15-20 ml twice daily after meals) has 5-12% alcohol content per the classical Ayurvedic preparation (Sharangdhara Samhita asava-arishta protocols). Sale of an alcoholic Ayurvedic preparation as a *food supplement* in the EU/UK is NOT permitted; in the EU, alcohol-containing herbal preparations are regulated as Traditional Herbal Medicinal Products (THMP) under Directive 2004/24/EC and require a separate UK MHRA THR licence or EU national equivalent. The dossier's §11.5 Life-Stage Gate table (line 826) correctly flags Saraswatarishta's alcohol content in pregnancy context, but does NOT flag the cross-border regulatory issue.

**Realistic remediation:**
- Add a per-region SKU matrix to `lib/data.ts`. Products sold into IN: comply with DMR Act + Schedule T. Products sold into UK/EU: drop the Saraswatarishta + any other alcoholic Ayurvedic prep, OR licence as THMP.
- Add to the journey page a country-of-shipment selector that gates the bundle composition.

### 2.5 GDPR / UK GDPR data-collection disclosure for the safety quiz

The ConversionStrip references a "90-second safety check" that the dossier §11.5 (line 841) explicitly describes as needing to expand to a "~12 yes/no gates" intake covering pregnancy, breastfeeding, age <18, CKD/dialysis history, active cancer, liver disease, bipolar/epilepsy, autoimmune flare, pacemaker, warfarin/DOAC, SSRI/SNRI, thyroid hormone.

Every one of those data points is **special category personal data** under UK GDPR Article 9(1) / EU GDPR Article 9(1) ("personal data concerning health"). Processing requires either explicit consent under Art. 9(2)(a) or one of the other named legal bases.

The ConversionStrip's "90-second safety check" CTA at `conversion-strip.tsx:149-155` does NOT disclose:
- The legal basis for processing (consent under Art. 9(2)(a) — to be ticked, not pre-ticked)
- The data controller identity per Art. 13(1)(a)
- The purpose of processing per Art. 13(1)(c)
- The recipients of data per Art. 13(1)(e)
- The retention period per Art. 13(2)(a)
- The data subject's right of access, rectification, erasure, restriction, portability, objection per Art. 13(2)(b)
- The right to withdraw consent per Art. 13(2)(c)
- The right to lodge a complaint with the supervisory authority (UK ICO; relevant EU DPA) per Art. 13(2)(d)

**This is a per-se UK GDPR / EU GDPR breach.** Penalties: up to €20m or 4% of global annual turnover under Art. 83(5).

**Realistic remediation:** add a GDPR consent surface immediately preceding the quiz launch, with explicit-tick consent for special category data processing + linked privacy notice meeting Art. 13 requirements.

### 2.6 Australian Privacy Act 1988 — for the same quiz, Australia adds a "sensitive information" disclosure

The Australian Privacy Act 1988 § 16B + APP 3 govern collection of "sensitive information" (which includes health information). The disclosure requirements parallel GDPR but are not identical. For a journey page that auto-detects an AU IP, the consent surface must additionally cover:
- Collection notice under APP 5 (kind of information, why collected, consequences if not provided)
- The Australian Privacy Principles Code commitment
- Cross-border disclosure consent under APP 8 (the data is presumably being processed in the EU or US on cloud infrastructure)

**Realistic remediation:** the GDPR consent surface above can be extended to dual-compliance with APP 3 + APP 5 + APP 8 with minor wording additions.

### 2.7 The "reviewer credit" disclosure — UK ASA CAP 3.45 / TGAAC clause 16

Already flagged as Blocker 4 in the executive summary. The "Dr. Meera Iyer · BAMS · 12 yrs clinical Ayurveda · Bengaluru" default at `conversion-strip.tsx:39-42` either is or is not a real human reviewer of the specific journey. If it is a real human who has reviewed every journey, fine. If it is a placeholder, it is a fabricated endorsement.

UK ASA CAP rule 3.45: "Marketers must hold documentary evidence that a testimonial or endorsement used in a marketing communication is genuine, unless they are obviously fictitious, and hold contact details for the person who, or organisation that, gives it."

TGAAC clause 16(1): "An advertisement must not include or refer to a testimonial that is, or is likely to be, misleading or deceptive."

India's Consumer Protection Act 2019 § 21 also addresses endorsements.

**Realistic remediation:** per backlog item I63 — make the `reviewer` prop required, populate from a real `lib/reviewers.ts` table with `reviewedJourneys: string[]`, or have the build fail. Until then, suppress the reviewer credit entirely.

### 2.8 The home page "Refreshed Jun '26" stat at `app/page.tsx:48`

If the freshness stat is consumer-facing (it is — it's in the trust-strip below the search bar), it must be accurate. UK ASA CAP rule 3.1 covers misleading by ambiguity. "Jun '26 last refresh" implies a sitewide refresh in June 2026. The dossier audit instructions in CLAUDE.md (the per-dossier freshness check via `grep schemaVersion`) reveal that not every dossier was refreshed in June 2026 — many carry earlier `lastUpdated` dates. The site-wide stat is misleading by aggregation.

**Realistic remediation:** replace site-wide stat with per-dossier badge (which the dossier page already carries via `lastRefresh` prop). At the home page, change "Jun '26 last refresh" → "Per-dossier refresh dates" with a link to atlas.

---

## DIMENSION 3 — MEDICAL-DEVICE CLASSIFICATION RISK ON THE §5 DEVICE CLUSTER

The dossier names and prescribes 13 consumer / clinic devices. For each, I assess: (a) does the cited indication match the device's actual licensed indication? (b) what is its EU MDR class and TGA classification? (c) does pairing the device with a specific tinnitus claim create joint liability for NicheCore?

### 3.1 Vielight Neuro Gamma (810 nm pulsed at 40 Hz)

**Cited indication (dossier line 314):** "Vielight Neuro Gamma + a hand-held red-light to the mastoid bone behind each ear, 5-10 min a side, 5×/week ... Auditory cortex + inner-ear blood flow"

**Actual regulatory status:** Vielight Inc. (Toronto, Canada) sells the Neuro Gamma series as **research / wellness devices**, NOT as CE-marked medical devices. The company's website and product literature carry the standard "for research use only" or "general wellness" disclaimer in most jurisdictions. The device has no CE mark for any therapeutic indication; no AUST L/R listing; no Health Canada MDL.

**EU MDR class if therapeutic claim attached:** Under MDR Annex VIII Rule 9 (active devices intended for therapy), a device "intended to administer or exchange energy" with the human body for therapeutic effect is at minimum Class IIa, and Class IIb if the energy is administered in a "potentially hazardous manner." 810 nm near-infrared at the dose described (10-20 J/cm² per session, transcranial) sits in the Class IIa-IIb bracket. Without CE mark, sale + advertised therapeutic use in the EU is a **per-se MDR Art. 5 violation** by the manufacturer; advertising the device alongside a tinnitus claim by NicheCore creates joint liability under MDR Art. 16 (importers/distributors) and the UCPD as the regulator may construe NicheCore as a *de facto* distributor.

**TGA classification:** Australia TGA classifies near-infrared photobiomodulation devices for therapeutic use as Class IIa Therapeutic Goods. Sale of such a device for tinnitus without ARTG inclusion is a Therapeutic Goods Act 1989 § 19D / 41MN offence.

**India:** Vielight is not licensed under the Medical Device Rules 2017. Selling into India for a tinnitus indication triggers DMR Act 1954 § 3(d) (ear disorder) + Medical Device Rules.

**Realistic remediation:**
- Reframe in §5.10 as "research / wellness device — not a CE-marked or TGA-listed tinnitus treatment device. Editorial coverage only. NicheCore does not recommend purchase of this device as a tinnitus intervention."
- Strip from the §8.5 master timetable.
- Strip from the bundle "includes" array. (The current `tinnitus-quiet-90` bundle does not include the device, which is good — verify that no related bundle does.)

### 3.2 Vielight 810 intranasal

Same analysis as 3.1. Same remediation. The intranasal-delivery form has the additional concern that the EU MDR Rule 9 second indent makes intranasal administered energy a higher-tier risk classification.

### 3.3 Hand-held mastoid red-light panels (Hooga, Mito Red Light, 660+810 nm)

**Cited indication (dossier line 316):** "a hand-held red panel (Hooga, Mito Red Light, 660+810 nm) to the mastoid bone behind each ear for 5-10 min a side, 5×/week"

**Actual regulatory status:** Hooga and Mito Red Light sell as "general wellness" devices in the US under FDA enforcement discretion. In the EU, both companies operate without CE marking for tinnitus or any specific therapeutic indication. In Australia, neither holds an ARTG listing for tinnitus.

**EU MDR class:** Same Rule 9 analysis as Vielight. Class IIa at minimum.

**Realistic remediation:** Same as 3.1. Re-frame as wellness devices, not therapeutic devices. Strip mastoid-tinnitus directed prescription.

### 3.4 Bemer mat / Healthy Wave PEMF

**Cited indication (dossier line 338):** "Bemer or Healthy Wave mat for 15 min, 3×/week — mechanistic only, with small Eastern-European signal."

**Actual regulatory status:** Bemer International AG (Liechtenstein) sells the Bemer device in Europe with CE marking for "physical vascular therapy". The CE-marked indications are circulatory in nature (microcirculation support) — NOT tinnitus. Healthy Wave is a US consumer brand without specific CE / ARTG indications.

**Pairing risk:** Pairing the Bemer device with a tinnitus / cochlear-blood-flow claim is **off-label promotion** under EU MDR Art. 7(1)(a) (claims must be limited to those covered by CE mark). NicheCore as the recommender becomes the off-label promoter; joint liability under MDR Art. 16 attaches.

**TGA:** PEMF devices in Australia are classified as Class IIa Therapeutic Goods. ARTG-listed PEMF devices have specific indications (none for tinnitus). The TGAAC clause 9 mismatch rule triggers.

**Realistic remediation:** Reframe in §5.14 as "Optional — Bemer is CE-marked for general microcirculation; no tinnitus-specific indication. Use at owner's discretion as a circulatory adjunct, not a tinnitus treatment." Strip the tinnitus-specific framing.

### 3.5 Home taVNS ear-clip devices: Nurosym, Pulsetto, Truvaga, Parasym, Xen (Neuvana)

**Cited indication (dossier lines 326-328):** "A small clip on your ear sends a gentle electrical buzz that calms the body's stress nervous system. Some people who pair it with sound therapy report quieter tinnitus over weeks. Direct tinnitus RCT data is limited; mostly mood and migraine evidence."

**Actual regulatory status:** This is the most complex cluster. Each device has a different status:

- **Nurosym** (Parasym Ltd UK): CE-marked Class IIa medical device. CE-marked indications include "Treatment of conditions related to autonomic nervous system dysfunction" — NOT tinnitus specifically. The MHRA does not list tinnitus as a Nurosym indication.
- **Parasym** (predecessor brand): same Parasym Ltd; similar CE-mark indications.
- **Pulsetto**: a Lithuanian-origin device; CE-marked for "stress, anxiety, sleep, mood" wellness indications. NOT tinnitus.
- **Truvaga** (electroCore Inc.): the consumer non-prescription version of gammaCore (which is prescription-only for migraine and cluster headache). Truvaga has FDA clearance as a "general wellness device" + CE marking; no tinnitus indication.
- **Xen by Neuvana**: consumer-electronics company; classified as a "wellness device" in most jurisdictions; no specific tinnitus indication.

**Pairing risk:** The dossier honestly grades the cluster H (line 328: "Grade H for taVNS specifically for tinnitus (mostly pilot trials; bigger RCTs ongoing)"). This is editorial substantiation discipline. But the §8.5 master timetable + §10.7.1 device list paragraph + the commerce-adjacent §13.7 row (line 964) treat the cluster as a confidently-prescribed adjunct. Under EU MDR Art. 7(1)(a) + TGAAC clause 9, recommending a CE-marked Class IIa device for an off-label indication is the same legal exposure as for the Bemer cluster.

**Realistic remediation:**
- Reframe in §5.12 and §10.7.1 as "low-harm device cluster with off-label use for tinnitus. None of these devices carry CE marking or TGA listing for tinnitus specifically. Pilot evidence (De Ridder 2014, Tyler 2017) at Grade H. Owner discretion as adjunct, not as therapy."
- Strip the bundle from "includes" if it does. (Current `tinnitus-quiet-90` does not name a taVNS device — verify on rebuild.)

### 3.6 Apollo Neuro

**Cited indication (dossier line 328):** "Apollo Neuro (vibrational, also calms autonomic tone)"

**Actual regulatory status:** Apollo Neuroscience Inc. sells Apollo Neuro as a "wellness wearable" without CE marking for any specific therapeutic indication. Marketing claims focus on "stress, sleep, focus" wellness benefits.

**Pairing risk:** Lower risk than the taVNS cluster because Apollo Neuro doesn't claim therapeutic effect. The mention in the tinnitus protocol context is mild off-label framing.

**Realistic remediation:** Acceptable as a wellness adjunct mention. Add disclaimer "wellness device, no CE / TGA therapeutic indication."

### 3.7 HeartMath Inner Balance + Sensate

**Cited indication (multiple, esp. dossier line 304):** "HeartMath Inner Balance ($179) ... HRV training ... 10-15 min twice a day."

**Actual regulatory status:** HeartMath Inc. sells Inner Balance as a "biofeedback wellness device" — not CE-marked for any therapeutic indication. Sensate (BioSelf Technology Ltd UK) is sold as a "wellness wearable" similarly.

**Pairing risk:** Same as Apollo Neuro. Low.

**Realistic remediation:** add wellness-device disclaimer; reposition as adjunct.

### 3.8 Lenire (Neuromod Devices, Ireland)

**Cited indication (dossier line 1009):** Detailed and properly hedged in the 2026-06-06 revision.

**Actual regulatory status:** **Lenire IS CE-marked (2021) and FDA De Novo cleared (2023) specifically for chronic tinnitus.** This is the one device in the §5 / §15 cluster with the correct CE mark for the cited indication. The §15 framing is therefore the only one where the dossier-device-indication match is regulatory-correct.

**Pairing risk:** Minimal. The §15 framing as "clinic-route only, not part of the home regime" is correct. NicheCore is not selling the device.

**Realistic remediation:** None needed.

### 3.9 OTC hearing aids (Jabra Enhance, Lexie, Bose SoundControl, Sony CRE-C10, Eargo)

**Cited indication (dossier line 310 + 739):** "OTC hearing aids: Jabra Enhance, Lexie, Bose SoundControl, Eargo, Sony CRE-C10 ... If hearing test shows loss, hearing aids reduce tinnitus salience materially."

**Actual regulatory status:** These devices are FDA-cleared (US 2022) and variably CE-marked in the EU + TGA-listed in Australia for hearing-loss correction. Tinnitus masking is a *secondary* claim on some models (Jabra Enhance, Bose SoundControl carry tinnitus-masking modes). The "reduce tinnitus salience materially" claim is supported for those models that carry the tinnitus-masking feature.

**Pairing risk:** Lower than the device clusters above. The CE/TGA status for hearing-loss is established; the tinnitus-salience reduction is a secondary claim covered by some models' specific marketing.

**Realistic remediation:** Acceptable framing. Specify which models carry CE/TGA tinnitus-masking indications and which are hearing-loss only.

### 3.10 SOVA / Pro Teeth Guard night guard + Saunders cervical traction

**Cited indication (dossier line 322):** "OTC night-guard (SOVA, Pro Teeth Guard) · over-the-door cervical traction (Saunders, Pronex) for 10-15 min 1-2×/day if your tinnitus is confirmed neck-driven."

**Actual regulatory status:** Both are Class I medical devices in EU (with self-declaration CE-marking). Saunders cervical traction is FDA-cleared + CE-marked for cervical-pain indications.

**Pairing risk:** Low. The "neck-driven tinnitus" framing is mechanistic-bridge but the devices are within their CE-mark scope (cervical / bruxism support).

**Realistic remediation:** No critical issue. Soften to "may help for users whose tinnitus is somatically modulable."

### 3.11 Summary Dimension 3 — device cluster table

| Device | Regulatory status | Cited tinnitus indication match | Severity | Remediation |
|---|---|---|---|---|
| Vielight Neuro Gamma | Wellness / research device; no CE/TGA for tinnitus | No | BLOCKER | Reframe as wellness; strip prescription |
| Vielight 810 intranasal | Same | No | BLOCKER | Same |
| Hooga / Mito Red Light | Wellness; no CE/TGA for tinnitus | No | BLOCKER | Same |
| Bemer mat | CE-mark for microcirculation; not tinnitus | Mismatch | High | Reframe as circulatory adjunct |
| Nurosym/Parasym | CE-mark for ANS dysfunction; not tinnitus | Mismatch | High | Reframe as off-label, owner discretion |
| Pulsetto/Truvaga/Xen | Wellness; not tinnitus | Mismatch | High | Same |
| Apollo Neuro | Wellness | Low-claim, low-risk | Low | Add disclaimer |
| HeartMath/Sensate | Wellness biofeedback | Low-claim | Low | Add disclaimer |
| Lenire | CE-mark for chronic tinnitus | Match | None | None |
| OTC hearing aids | CE/TGA for hearing loss; some for tinnitus masking | Partial match | Low | Specify which models |
| SOVA / Saunders | CE-mark for bruxism / cervical | Match | None | None |

**Aggregate Dimension 3 finding:** of the 11 named consumer device classes in the dossier, **3 are blocker-grade off-label pairings** (the Vielight + Hooga + Mito Red Light cluster), **4 are high-risk off-label pairings** (Bemer, Nurosym, Pulsetto, Truvaga), **2 are low-risk** (Apollo, HeartMath/Sensate), and **2 are compliant** (Lenire, OTC hearing aids for hearing-loss-with-tinnitus-masking models). The cumulative joint-liability exposure under EU MDR Art. 16 + TGAAC clause 9 is material.

---

## DIMENSION 4 — AFFILIATE / COMMERCE / MARGIN DISCLOSURES

### 4.1 No affiliate-relationship disclosure

The dossier §9.1 (line 608) names "Amazon / iHerb" as the primary delivery channel. The bundle products in `lib/data.ts:48` name "Schwabe (EMA-monograph)" + "Verified reseller" as suppliers. Whether NicheCore earns an affiliate commission on any of these channels is **not disclosed** anywhere on the journey page or the ConversionStrip.

**Regulatory framework + clause:**
- **UK ASA CAP Code rule 2.4** + **CMA Online Influencers Guide (2020 update)**: "material connections" must be disclosed.
- **EU UCPD Art. 7(2)** + **Annex I item 11**: "Using editorial content in the media to promote a product where a trader has paid for the promotion without making that clear in the content or by images or sounds clearly identifiable by the consumer" is a per-se misleading commercial practice.
- **TGA Australian Consumer Law (ACL) § 18** (misleading or deceptive conduct) + **ACCC Influencer Guidelines 2023**: material connections disclosure required.

The bundle's `marginModel: "Reseller · 41% gross margin"` field in `lib/data.ts:48` makes clear that NicheCore is making margin on the bundle. The consumer has no way of knowing this from the ConversionStrip.

**Realistic remediation:** Add a "How NicheCore makes money" disclosure surface to the ConversionStrip OR the journey page footer. Wording: "NicheCore earns a margin on this bundle as reseller, and may earn affiliate commission on supplier links. We disclose our margin model in our [Commerce Policy]. Brands named here are NOT exclusive to NicheCore — see the Direct Purchase Notice below."

### 4.2 No direct-purchase notice for the named brands

UK ASA CAP rule 3.7 + EU UCPD Art. 7(4)(c) require that material information not be omitted. When a product page names specific brands (Schwabe Tebonin, Pure Encapsulations Magnesium, Nordic Naturals Omega-3) that are widely available direct from the manufacturer or other retailers at potentially lower prices, the omission of that information *combined with* the implication that NicheCore is the source (the bundle CTA "Get the pack") can be construed as a misleading omission.

The risk is moderate, not blocker. The cleanest remediation:

**Realistic remediation:** Add to the ConversionStrip OR the linked package page a "Buy direct" alternative-channel disclosure: "Each brand named here is available direct from the manufacturer or other retailers. NicheCore bundles them with COA verification, the protocol structure, and the safety quiz — the convenience and curation are what you're paying for."

### 4.3 The "30-day return on unopened items" + "Pause or cancel anytime · no contract" — multiple non-US consumer-law issues

Already flagged as Blocker 3.

**Verbatim claim:** "30-day return on unopened items" + "Pause or cancel anytime · no contract"

**File / line:** `conversion-strip.tsx:204-213`.

**Regulatory framework + clause:**

(a) **UK Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, reg. 29(1)**: distance-sale consumers have a 14-day right to cancel "without giving any reason." Reg. 29(3) starts the period from the day after the goods are delivered. Reg. 28(1)(c) provides the sealed-hygiene exception only for "the supply of sealed goods which are not suitable for return due to health protection or hygiene reasons, if they become unsealed after delivery." Whether supplements fall within this exception is **fact-specific** — some have been held to fall in (homeopathic remedies, ingested liquids) and some have not (sealed-bottle vitamin capsules). The "30-day on unopened" framing is consistent with the *sealed-hygiene exception interpretation*, but the consumer is entitled to 14-day cancel-without-reason even on opened goods unless that exception applies. The strip does NOT disclose the 14-day statutory right at all.

(b) **EU Consumer Rights Directive 2011/83/EU, Art. 9** — parallel 14-day cancellation period; Art. 16(e) sealed-hygiene exception with the same ambiguity.

(c) **Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010), §§ 54-56** — consumer guarantees of acceptable quality + fitness for purpose. The "Pause or cancel anytime · no contract" framing is potentially compliant in AU but the ACCC requires accurate auto-renewal disclosure under ACL § 18.

(d) **UK Consumer Rights Act 2015, Part 1 Chapter 3** — digital subscriptions to "Daily reminders, weekly check-ins" etc. (per the bundle's `includes` array) may trigger CRA Part 3 disclosure obligations.

The "Pause or cancel anytime · no contract" claim is potentially compliant *if* the actual subscription terms support it. If there is no contractual term making this a guaranteed consumer right, it is a misleading commercial practice.

**Realistic remediation:**
- Replace "30-day return on unopened items" with a statutory-rights-first formulation: "14-day cancellation right (UK CCR 2013 / EU CRD Art. 9). 30-day extended return on unopened items as a goodwill gesture beyond statute."
- Disclose auto-renewal terms: when the subscription renews, billing cadence, how to cancel, the consumer right to a full refund within 14 days of any new charge per CRD.
- Add a link to the full Subscription Terms.

### 4.4 No clear price + total-cost disclosure per CRD Art. 6(1)(e)

CRD Art. 6(1)(e) requires that the total cost including taxes, delivery, and any other charges be made clear before the consumer is bound. The ConversionStrip's "$169 / $139" pricing is a USD pre-tax price. For UK/EU consumers, the displayed currency + VAT-inclusive pricing + shipping costs + any conversion-margin must be disclosed.

**Realistic remediation:** add per-region currency + VAT-inclusive display + shipping disclosure at the ConversionStrip.

### 4.5 Reviewer-credit disclosure (already covered in 2.7)

### 4.6 Dimension 4 cumulative

| # | Issue | Framework | Severity | Remediation |
|---|---|---|---|---|
| 4.1 | No affiliate / margin disclosure | UK ASA 2.4; UCPD Annex I item 11; ACL § 18 | High | Add disclosure surface |
| 4.2 | No "buy direct" alternative notice | UCPD Art. 7(4)(c) | Medium | Add direct-channel notice |
| 4.3 | "30-day on unopened" vs 14-day statutory | UK CCR reg. 29; CRD Art. 9 | BLOCKER (UK/EU) | Statutory-rights-first reformulation |
| 4.4 | No total-cost / VAT disclosure | CRD Art. 6(1)(e) | High | Per-region currency + tax display |
| 4.5 | Reviewer-credit fabrication risk | UK ASA 3.45; TGAAC 16 | BLOCKER | Require real reviewer table |

---

## DIMENSION 5 — "EVIDENCE-OS" POSITIONING + MANIFESTO CHIPS

The home page and skill describe NicheCore as "the evidence-OS for natural health". Five sub-questions raised in the prompt:

### 5.1 Does "evidence-OS" cross into medical-device-as-software territory under EU MDR (SaMD classification)?

**Verbatim claim:** "Not a chatbot. Not a blog. The evidence OS for natural health." + "A backend factory researches, grades and reviews every protocol on a schedule, then caches polished hubs."

**File / line:** `app/page.tsx:58-64`.

**Regulatory framework + clause:** EU MDR (EU) 2017/745 Article 2(1) defines a "medical device" as including "software intended by the manufacturer to be used, alone or in combination, for human beings for one or more of the following specific medical purposes: diagnosis, prevention, monitoring, prediction, prognosis, treatment or alleviation of disease".

MDR Rule 11 (Annex VIII) classifies software:
- Class I: software intended to provide information used for decisions with diagnostic or therapeutic purposes (low risk).
- Class IIa: software intended to provide information used for decisions with diagnostic or therapeutic purposes (default for most decision-support software).
- Class IIb-III: software providing information used for decisions where decisions may cause death or irreversible deterioration.

**The MDCG 2019-11 guidance** ("Guidance on Qualification and Classification of Software in Regulation (EU) 2017/745 — MDR") is the load-bearing reference. Under MDCG 2019-11, software qualifies as a medical device when:
1. It performs an action on data different from storage, archival, communication, or simple search (i.e., it processes data to generate information for a specific medical purpose), AND
2. It is intended by the manufacturer to be used, alone or in combination, for the specified medical purposes (diagnosis, prevention, monitoring, prediction, prognosis, treatment, alleviation of disease).

The NicheCore home page claims:
- "researches, grades and reviews every protocol on a schedule" — generates information
- "The AI explains reviewed content" — generates information for a medical purpose (in the dossier reading context)
- "Sources cited inline · grades earned, not asserted · do-not-recommend rows where evidence fails" — decision-support framing
- "Personalise & screen — A short intake runs a safety screen before anything is recommended" — DECISION-SUPPORT FOR THERAPEUTIC SELECTION

The safety quiz that gates the bundle purchase is the load-bearing trigger. **A 4-question (planned 12-question) intake that conditions purchase recommendations on user-provided health information is, under MDCG 2019-11, software that processes data for a therapeutic purpose.** If a notified body or competent authority construes this as MDR-qualifying software, MDR Rule 11 puts it at Class IIa.

**Probability assessment:** I would estimate the regulatory-construal risk at 20-35% — non-trivial but not certain. The MHRA + several EU competent authorities have taken increasingly aggressive positions on health-information software in 2024-2026. The UK MHRA Software and AI as a Medical Device strategy (last updated 2025) is the relevant UK reference; it explicitly captures decision-support software in scope.

**Realistic remediation:**
- Add a homepage disclaimer band: "NicheCore is educational content. The personalisation features (safety quiz, regime customisation) provide general information only and do not constitute medical advice, diagnosis, treatment, or a medical device under EU MDR. Always consult a qualified healthcare professional."
- Avoid language ("diagnoses", "treats", "monitors") that pulls toward MDR Rule 11 trigger. The current page uses "never invents claims, never diagnoses, never promises a cure" — this is partially protective but the "researches, grades and reviews every protocol" framing leans toward an SaMD interpretation.
- Document the SaMD analysis internally so that if a regulator inquires, NicheCore can demonstrate it considered the question and structured the product to fall below the MDR trigger.

### 5.2 Does "every regime refreshed with the newest research" (softened to "honest refresh, not real-time theatre") still imply a process that doesn't exist?

**Verbatim claim:** "Honest refresh, not real-time theatre. Every dossier carries a date-stamped lastUpdated and a per-claim evidence trace. Our editors track Cochrane updates, EMA HMPC monographs, AYUSH councils, TGA, NMPA, Health Canada NHP and the six-tradition classical corpus. When a Cochrane review re-runs and a grade should change, we re-render the dossier and log the change — and we will publish the changelog at /audit once the public source-monitor pipeline ships."

**File / line:** `app/page.tsx:82-91`.

The framing is mostly defensible — it acknowledges that the changelog at `/audit` is "coming" rather than already shipped. But the load-bearing claim is "When a Cochrane review re-runs and a grade should change, we re-render the dossier and log the change." This implies an existing process. The IMPROVEMENT_BACKLOG item I49 ("Per-claim version-controlled reasoning manifest changelog ... Autogenerated `tinnitus-support.changelog.md` showing per-claim grade/effect/recommendation/source diffs across refreshes. Makes 'weekly research refresh' load-bearing") and item I68 ("Add `audit/` directory + per-claim append-only changelog format. Each claim records `at` / `by` / `from` / `to` / `reason` per change. Frozen, never overwritten") both acknowledge that **this audit infrastructure does not yet exist**.

Under UK ASA CAP rule 3.1, a process-claim that implies an existing capability is misleading if the capability is in fact aspirational.

**Realistic remediation:** rewrite to a *true* current-state framing: "Our editors monitor Cochrane updates, EMA HMPC monographs, AYUSH councils, TGA, NMPA, Health Canada NHP. When a major review re-runs and we believe a grade should change, we re-render the dossier and mark the date. **A public per-claim audit log is in development and will ship at `/audit` — we will not over-claim that it exists today.**"

### 5.3 Does "honest downgrades when evidence shifts" require a downgrade log? Is it defensible without one?

**Verbatim claim:** "Honest downgrades when evidence shifts"

**File / line:** `app/page.tsx:104`.

The 2026-06-06 tinnitus revision DID make real downgrades (Bhramari B→H, Pycnogenol B→C, Tebonin tinnitus C, etc.). The dossier YAML at lines 13-19 documents them. So the claim has at least *one* worked example. Under UK ASA CAP rule 12.1, that worked example would be defensible as substantiation IF the company can produce documentary evidence of the downgrade process.

**Realistic remediation:** the per-dossier YAML changelog entries (currently `factualErrorsFixedThisRevision` at lines 20-29 + `reviewPanelAudit2026-06-06` at lines 13-19) DO provide a downgrade log, but it lives in the dossier YAML, not in a public-facing surface. Link this from the home page chip: "Honest downgrades when evidence shifts — see per-dossier change history in the YAML header of every dossier; public consolidated changelog at /audit shipping later in 2026."

### 5.4 Does "sources cited inline" require those sources to be verifiable + non-fabricated?

**Verbatim claim:** "Sources cited inline · grades earned, not asserted · do-not-recommend rows where evidence fails"

**File / line:** `app/page.tsx:130`.

The wave-1 fixes caught 6 specific factual errors. The dossier YAML at line 32-33 acknowledges that "Pass 2 (citations) ... 6 factual errors fixed 2026-06-06; remaining ~50 author-year citations still need PMID/DOI structured blocks." The IMPROVEMENT_BACKLOG item I31 makes structured per-claim citation primitive a P1 item, item I90-92 makes the resolution + verification a P3 item. So at the moment, the claim "sources cited inline" is true (sources are cited), but the implicit "and they are verified" is false for ~50 remaining citations.

Under UK ASA CAP rule 3.1, the *natural reading* of "Sources cited inline" to a sophisticated consumer is "citations exist." That's true. The unsophisticated-consumer reading is "citations are verified." That's not true for all citations.

This is a borderline rule 3.1 finding. Recommendation: minor wording adjustment to defuse the risk.

**Realistic remediation:** "Sources cited inline — citation discipline being upgraded to structured PMID/DOI blocks across the corpus; ~50 author-year citations still pending verification per dossier YAML."

### 5.5 The four-bullet manifesto — which does the product actually deliver vs aspirationally claim?

**Verbatim claim:** "Real sources, graded · Safety before commerce · Honest uncertainty · No miracle claims"

**File / line:** `app/page.tsx:67`.

Assessment of each:

- **"Real sources, graded"** — partially delivered. Sources are real (no wholesale fabrication caught), but six factual errors shipped to consumers before the 2026-06-06 fix, and ~50 citations remain unverified. **Aspirational claim 70% delivered.** Vulnerable to UK ASA rule 3.7 challenge.

- **"Safety before commerce"** — partially delivered. The dossier has the right safety panels (SSHL, K2/warfarin, eGFR/Mg, life-stage gate). But the ConversionStrip's 4-question safety quiz is NOT enough — the dossier itself acknowledges this at line 841 ("the 4-question quiz on the conversion strip is not enough"). The commerce flow precedes the more comprehensive safety check. **Aspirational claim 60% delivered.** Vulnerable to UK ASA + TGAAC.

- **"Honest uncertainty"** — partially delivered. The §13.7 evidence-tier table is exemplary. The §11.7 placebo / natural-history disclosure is exemplary. But the home page "Refreshed Jun '26" stat is not calibrated for cross-dossier date variance, and the freshness chip in `app/page.tsx:48` aggregates. **Aspirational claim 75% delivered.**

- **"No miracle claims"** — substantially delivered. The dossier explicitly disclaims cures and miracles. The hero card "Quieter ears, no false promises" is the closest to a borderline framing — defensible if the DMR Act geofencing is in place but otherwise BLOCKER for India. **Aspirational claim 85% delivered, except for India.**

Cumulatively, the manifesto is **64-80% delivered**. Under UK ASA CAP rule 3.3 ("Marketing communications must not mislead consumers by exaggerating ... or making implications that are likely to mislead consumers about the nature of the product or service") this is a borderline rule-3.3 finding. The manifesto claims a higher integrity than the product currently delivers.

**Realistic remediation:** soften the manifesto to current-state-deliverable wording:
- "Real sources, graded — citation discipline upgrading"
- "Safety screen before commerce — quiz expanding to 12-question gate"
- "Honest uncertainty — Cochrane-null cases surfaced"
- "No miracle claims — adjunct, not cure"

The softened formulation is what UK ASA + EU UCPD + TGAAC would accept today.

---

## CUMULATIVE REGULATORY-EXPOSURE MAP

I rank the 31 findings by remediation priority. The columns: **Severity** (Blocker/High/Medium/Low) · **Framework** (which jurisdictional regulator drives the finding) · **Time-to-remediate** (Hours / Days / Weeks).

| # | Surface | Finding | Severity | Framework | Effort |
|---|---|---|---|---|---|
| 1.1 | Home hero `/ears/tinnitus` card | Treatment claim for Schedule ear-disorder | BLOCKER | India DMR Act 1954 § 3(d) | Hours (geofence) |
| 1.3 | Bundle Mg role | "NMDA / excitotoxicity protection" | BLOCKER | EU NHCR Art. 10 + EFSA Art. 13.1 | Hours (rewrite) |
| 1.4 | Bundle Tebonin Grade B + role | Indication mismatch with EMA monograph | BLOCKER | UK ASA 3.3 / EU NHCR | Hours |
| 1.6 | Bundle B12 role | "Auditory-nerve neurotrophic" | High | EU NHCR Art. 10 | Hours |
| 1.7 | Bundle Zn "test first" | Unenforced conditional | High | UCPD Art. 6 | Days |
| 1.5 | Bhramari claims | "THE tinnitus breath" / 15× NO | High | UK ASA 12.1 | Hours |
| 1.9 | Vielight + red-light pairing | Off-label medical-device claim | BLOCKER | EU MDR Art. 7 / TGAAC | Days |
| 3.1-3.4 | Device cluster (4 BLOCKERs + 4 High) | See Dimension 3 | BLOCKER+High | EU MDR + TGAAC | Days |
| 2.1 | EU FIC + NHCR Art. 10(2) statements | Missing nutrition declaration + balanced-diet statement | BLOCKER (EU) | EU FIC 1169/2011 + NHCR | Days |
| 2.3 | TGA AUST L + mandatory statements | Missing | High | TGAAC | Days |
| 2.4 | Saraswatarishta cross-border + India DMR | Multiple | High | EU THMP / India DMR | Weeks |
| 2.5 | GDPR consent for safety quiz | Missing | BLOCKER (UK/EU) | UK GDPR / EU GDPR Art. 9 | Days |
| 2.6 | AU Privacy Act APP 3/5/8 | Missing | High | AU Privacy Act 1988 | Days |
| 2.7 / 4.5 | Reviewer credit default | Fabrication risk | BLOCKER | UK ASA 3.45 / TGAAC 16 | Hours |
| 2.8 | Home page freshness stat | Aggregated over-claim | Medium | UK ASA 3.1 | Hours |
| 4.1 | No affiliate / margin disclosure | Missing | High | UK ASA 2.4 / UCPD Annex I item 11 | Hours |
| 4.2 | No "buy direct" alt-channel notice | Missing | Medium | UCPD Art. 7(4)(c) | Hours |
| 4.3 | "30-day on unopened" + statutory 14-day | Misleading | BLOCKER (UK/EU) | UK CCR reg. 29 / CRD Art. 9 | Hours |
| 4.4 | No total-cost / VAT display | Missing | High | CRD Art. 6(1)(e) | Days |
| 5.1 | "Evidence-OS" SaMD risk | 20-35% MDR Rule 11 construal risk | Medium-High | EU MDR | Days (disclaimer) |
| 5.2 | "Honest refresh" implies non-existent process | Misleading | Medium | UK ASA 3.1 | Hours |
| 5.3 | "Honest downgrades" defensible if log linked | Borderline | Low | UK ASA 12.1 | Hours |
| 5.4 | "Sources cited inline" + unverified citations | Borderline | Low | UK ASA 3.1 | Hours |
| 5.5 | Four-bullet manifesto over-claim | Borderline | Medium | UK ASA 3.3 | Hours |
| 1.2 | "Dramatically improves recovery" SSHL | Quantum overstated | Medium | UK ASA 12.1 | Hours |
| 1.10 | Lenire active-arm B/C bracket | Consumer-surface clarification | Low | UK ASA 12.1 | Hours |
| 1.11 | §3.3 mechanism column commerce-adjacent | Framing | Medium | EU NHCR Art. 10 | Hours |
| 1.12 | Tonic water "even bar-quantity ototoxic" | Overstated | Low | UK ASA 12.1 | Hours |
| 1.13 | Mediterranean diet Grade A on tinnitus | Inference over-extension | Medium | UK ASA 12.1 | Hours |

**Aggregate: 9 BLOCKER findings · 11 High · 7 Medium · 4 Low.**

---

## RECOMMENDED REMEDIATION SEQUENCE

**Hold the storefront live** is the right posture until at least:

**Sprint 1 (1-2 days):**
1. Finding 1.1 — geofence the home hero card from Indian IP space OR rewrite to "Living with tinnitus — information, not treatment."
2. Finding 1.3 — bundle Mg role: rewrite to "Contributes to normal nervous system function" (Article 13 authorised).
3. Finding 1.4 — bundle Tebonin: re-grade C; rewrite role; restate EMA monograph badge accurately.
4. Finding 1.6 — bundle B12 role: rewrite to "Contributes to normal nervous system function (deficiency-corrected use only)".
5. Finding 4.3 — ConversionStrip risk-reversal: statutory-rights-first reformulation ("14-day cancellation right per UK CCR / EU CRD; 30-day extended return as goodwill").
6. Finding 2.7/4.5 — reviewer credit: either populate from a real reviewers table or suppress entirely.

**Sprint 2 (3-5 days):**
7. Finding 2.1 — EU FIC + NHCR Art. 10(2) disclosure surface added to ConversionStrip or linked product page.
8. Finding 2.5 — GDPR consent surface preceding the safety quiz.
9. Finding 1.9 + Dimension 3 — device cluster reframing: strip "auditory cortex + cochlear blood flow" claims from Vielight/Hooga/Mito; reframe Bemer/Nurosym/Pulsetto/Truvaga as off-label wellness devices.
10. Finding 4.1 — affiliate / margin disclosure surface added.
11. Finding 1.5 — Bhramari reframed as Grade H consistently across §5, §7, §8, master timetable.

**Sprint 3 (1-2 weeks):**
12. Finding 2.3 — TGA AUST L disclosures per SKU + mandatory statements.
13. Finding 2.4 — per-region SKU matrix for cross-border AYUSH compliance (Saraswatarishta etc.).
14. Finding 4.4 — per-region currency + VAT display.
15. All remaining Medium / Low findings.

**Sprint 4 (multi-week):**
16. Finding 5.1 — SaMD disclaimer band + internal SaMD-classification documentation.
17. Per-claim citation verification (IMPROVEMENT_BACKLOG item I90-92) to make "Real sources, graded" defensible at the rule 3.1 + 3.7 bar.

---

## CLOSING NOTE TO FOUNDER

The founder's editorial doctrine is sound: OTC + home-only + six-tradition pluralism + no-US-FTC. The product's editorial substantiation discipline (the §13.7 honest evidence-tier table, the §11.7 placebo / natural-history disclosure, the Cochrane-null honesty in §3.2) is genuinely above-bar for the consumer-health-content industry.

The product's **commerce-surface** substantiation discipline is below-bar. The bundle product cards in `lib/data.ts:48` make claims that the dossier itself would not make. The ConversionStrip uses risk-reversal language that does not align with the UK + EU statutory consumer-protection regime. The home page positions the product as an "evidence-OS" while flagging in its own backlog that the audit infrastructure is aspirational. The reviewer credit defaults to a fabricated name. The device cluster pairs consumer-grade wellness devices with off-label therapeutic indications.

These are remediable. None of them are doctrine-breakers. The pattern across all 31 findings is the same: **the dossier writers are calibrated to the founder's "honest pluralism" doctrine; the commerce-surface writers are calibrated to a US-DTC supplement-marketing convention that the doctrine has rejected.** The disconnect is fixable in 2-3 focused sprints.

The single highest-leverage move: institute a contract between `research/*.md` and `lib/data.ts` such that the bundle card cannot make a claim stronger than the dossier's own §3.3 + §13.7 verdict for that compound. Today the Tebonin bundle card is Grade B while the dossier §3.3 row is Grade C; the Magnesium bundle role is "NMDA / glutamate excitotoxicity protection" while the dossier §13.7 says "mechanism plausible; chronic-tinnitus RCT null." A `pnpm validate` check that gates these inconsistencies at PR time would catch most of Dimension 1 mechanically.

That single architectural move — dossier as the source of truth for commerce-surface substantiation — is what makes the doctrine load-bearing and the product defensible in front of UK ASA, EU NHCR, TGA, and AYUSH.

— Advertising-Substantiation Counsel
2026-06-07
