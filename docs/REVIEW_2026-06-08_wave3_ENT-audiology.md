# Wave-3 Review — Consultant ENT + Audiology Clinical-Workflow Lens

**Date:** 2026-06-08
**Reviewer role:** Consultant ENT surgeon + supervising audiologist. 20 years across NHS (UK), NHMRC/RVEEH (Australia), and AIIMS Delhi otology. Run the audiologist-led tinnitus assessment clinic. Refer in to ENT for SSHL steroids. Fit OTC and clinic hearing aids. Supervise audiology trainees on the standard tinnitus protocol. Routine MDT cases: chronic primary tinnitus, SSHL, age-related sensorineural hearing loss, ototoxicity surveillance, pulsatile workup, hyperacusis + misophonia clinic, Ménière clinic, vestibular schwannoma surveillance.
**Material reviewed:** `nichecore/research/tinnitus-support.md` post-wave-2 (2026-06-07 commit); `nichecore/research/sshl-hearing-loss.md` (2026-05-31); `.claude/skills/ailment-360-research/SKILL.md` v7.0.0 Rules 13–22; `docs/IMPROVEMENT_BACKLOG_2026-06-06.md`; `docs/IMPROVEMENT_BACKLOG_WAVE2_2026-06-07.md`; wave-2 reviewer set (EMA-HMPC, biostatistics, integrative-clinic-PI, advertising-substantiation, pharmacovigilance).
**Posture:** Adversarial, clinical-workflow specificity, hands-on. I am not auditing references; that is what waves 1 + 2 already did. I am auditing whether a real ENT clinic could *hand this dossier to a patient* without the patient turning up at my Tuesday clinic with the wrong workup, the wrong masker, the wrong comorbidity flagged, or the wrong red flag missed.
**Doctrine respected throughout:** OTC + home + six traditions + no US-regulator authority. Audiologist-first triage, hearing-aid masker landscape, and audiology assessment battery are clinical-workflow specificity inside doctrine, not violations of it.

---

## Headline Verdict

**Major revision required across all five dimensions, but for very different reasons than waves 1 + 2 found.** The dossier's evidence rigor is now substantially better than typical consumer health content; its plain-English-first scaffold is clean; its honest-Cochrane discipline is intact; its life-stage gate is real. What waves 1 + 2 missed is the *clinical-workflow surface* — the audiology clinic does not actually triage SSHL the way the dossier now says it does in most named jurisdictions; the OTC hearing-aid landscape is mis-stated for non-US readers; the audiology assessment battery is partial; the pulsatile workup is genuinely too vague to be actionable; and the comorbidity universe is dominated by red-flag rule-outs (vestibular schwannoma, Ménière, conductive tinnitus, perilymph fistula, musical ear syndrome, hyperacusis, misophonia) that the dossier either glosses over, mis-names, or misses entirely.

The damage if shipped as-is is not safety in the wave-1 sense (no one will die from the gaps below). The damage is **misdirection plus delayed diagnosis** — patients showing up to my Tuesday clinic, six months in, with a vestibular schwannoma that should have been MRI'd in week 1, a hyperacusis presentation being treated with earplug protection (the worst thing you can do), a Ménière patient whose low-salt diet was set up correctly but whose betahistine + diuretic conversation never happened, a conductive tinnitus patient on the full §8 antioxidant stack when the correct intervention is wax removal or tympanoplasty.

**Verdict per dimension:**

1. **SSHL pathway (audiologist-first triage as stated 2026-06-07)** — **Major revision required.** The audiologist-first framing is partly right and partly wrong jurisdiction-by-jurisdiction. UK NHS audiology cannot prescribe oral prednisone; it routes through GP or A&E, not ENT directly, in most regions. Australia is closer to the dossier's framing but TGA-licensed audiologists do not prescribe systemic steroids. India's pathway is hospital-OPD or private ENT, not standalone audiology. The 14-day window is also not the tight clinical urgency framing — the published evidence is much tighter than the dossier suggests, and the country routing is mis-stated.
2. **OTC hearing-aid landscape + smartphone audiogram validity** — **Major revision.** OTC hearing aids are a US-only regulatory category as of 2026; UK/EU/AU/IN access is not OTC. The smartphone-audiogram framing as a clinical baseline is materially over-stated. Clinic-grade tinnitus-specific maskers (Widex Zen, Phonak Tinnitus Balance, Oticon Tinnitus SoundSupport, ReSound Tinnitus Relief, Starkey Multiflex Tinnitus) are the actual masking-in-hearing-aid layer the dossier should be naming, not abstract "fractal tones built into some hearing aids."
3. **Audiology assessment battery the dossier omits** — **Major revision.** Residual inhibition, Loudness Discomfort Levels (LDLs), speech-in-noise (QuickSIN / LiSN-S), uncomfortable loudness levels (UCLs), acoustic reflex thresholds, otoacoustic emissions (OAEs), tympanometry, and pitch/loudness matching with masking measurement are all standard audiology test items. The dossier names TFI + THI + pitch/loudness match and treats that as the assessment battery — that is roughly 30% of the real battery, and the missing 70% is exactly what discriminates the sub-types the dossier names but cannot triage.
4. **Pulsatile tinnitus workup specificity** — **Major revision.** "Arrange vascular imaging on your own initiative" is genuinely too vague to be actionable and risks the patient ordering the wrong study, in the wrong order, through the wrong specialty. There is a clinically-correct workup order (MRI brain with MRA + MRV first; CT temporal bone for bone-dehiscence patterns; carotid duplex if the bruit is cervical; CTA only if MRI/MRA equivocal). The differential and the specialty routing (interventional neuroradiology vs neuro-otology vs vascular surgery) are not interchangeable and the dossier currently makes them sound interchangeable.
5. **Comorbidities that aren't subtypes but are major ENT-clinic comorbidities** — **Major revision.** Hyperacusis (clinic-relevant in ~30–40% of chronic tinnitus and treated very differently from tinnitus alone), misophonia (different mechanism, different treatment), musical ear syndrome (Charles-Bonnet-of-the-ear), Ménière's disease (the dossier mentions it briefly but does not surface the diagnostic pathway or salt + diuretic + betahistine clinical workflow), vestibular schwannoma (asymmetric SNHL + tinnitus + balance — the dossier flags MRI in SSHL but not in chronic asymmetric tinnitus), perilymph fistula and superior semicircular canal dehiscence (post-trauma or pressure-onset patterns), and conductive vs sensorineural tinnitus (different workup, different treatment) — all under-covered.

---

## Dimension 1 — SSHL Pathway: the Audiologist-First Triage As Stated 2026-06-07

### What the dossier currently says (post-wave-2 fix)

The opener now reads:

> "Same-day escalation path depends on your country: (a) UK / EU / AU / IN — book an audiologist same-day (most systems route SSHL through audiology first; pure-tone audiogram + tympanometry confirms SSHL vs conductive); the audiologist refers to ENT for the steroid prescription same- or next-day. (b) US — book ENT same-day directly if you can get an appointment; otherwise audiologist or urgent-care. (c) If neither is available within 24 h, present at A&E / ED — SSHL is a recognised emergency triage category."

This is a meaningful improvement on the wave-1 "see ENT same-day" framing. But it is still wrong in important and unsafe ways. Let me audit jurisdiction-by-jurisdiction.

### UK NHS pathway — what actually happens

In NHS England as of 2026:

- A patient with sudden unilateral hearing loss + new tinnitus cannot just "book an audiologist same-day." NHS audiology is referral-only from GP, and direct-access audiology pathways exist in some regions (England's Any Qualified Provider audiology) but are not universal and are not configured for the SSHL acute window. The realistic same-day path is GP same-day appointment OR 111 OR walk-in A&E.
- Even where direct-access audiology exists (e.g. some England Integrated Care Boards), the audiologist is licensed to perform PTA + tympanometry + speech audiometry — and to refer urgently — but **NHS audiologists do not prescribe systemic corticosteroids.** The audiologist confirms SSHL audiometrically and then has to route into ENT, often via 2-week-wait or via direct urgent referral to ENT registrar on-call. In SSHL specifically, the BSA (British Society of Audiology) and ENT UK joint pathway recommends GP → ENT same-week OR direct A&E if same-week not achievable, with the audiogram done in ENT clinic.
- The dossier's "audiologist refers to ENT for the steroid prescription same- or next-day" framing is what happens in the best NHS pathway — and is realistic in some regions but not most. In London teaching-hospital catchments (RNTNE/UCL, Guy's/St Thomas', Imperial) this works. In most district-general-hospital catchments the realistic ladder is GP → ENT registrar phone consult → ENT clinic next-day, OR A&E → ENT on-call.
- **The single biggest unsafe gap:** if a UK patient walks into A&E with SSHL, the A&E SHO does not reliably prescribe oral prednisone for SSHL on first presentation. A&E will often defer to ENT on-call, and ENT on-call may be a phone consult only. The dossier needs to tell the UK reader: **request the ENT on-call review specifically. If A&E says "go home and see your GP Monday," push back and ask to speak to the ENT registrar before you leave.** This is the load-bearing patient-script that NHS A&E experience requires.

### EU pathway — German, French, Italian, Spanish, Polish

Germany has a HNO-Arzt (ENT specialist) direct-access culture; same-day private ENT is realistic in most cities and the steroid window is well-recognised. France is GP-gatekept but FME (formation médicale continue) ORL access is faster than UK. Italy and Spain have similar GP-gatekept patterns. Poland has direct-access ENT in private clinics.

The dossier's "audiologist first" framing in Germany would be wrong — the German audiology profession is smaller and the path is HNO-Arzt-first. In France and Italy the path is more often ORL-direct private. The dossier should not group "EU" as a single pathway — it should name at minimum DE/FR/IT/ES/NL/PL and the realistic same-day specialty.

### Australia pathway

Audiology Australia-accredited audiologists are widely accessible in private clinics; the TGA does not license audiologists to prescribe systemic corticosteroids. The pathway is audiologist → GP (Medicare-rebated) → ENT or audiologist → ENT directly via referral. Same-day audiology in Sydney/Melbourne/Brisbane is realistic; same-day ENT is harder. Public Hospital A&E in Australia (e.g. RVEEH Melbourne, RPA Sydney, RNSH Sydney) is configured for SSHL escalation but the patient needs to say the word "sudden hearing loss" at triage.

The dossier's "AU audiologist same-day" framing is closer to right than UK but it still needs to tell the patient: the audiologist will not prescribe steroids; the audiologist confirms SSHL audiometrically and then refers urgently to ENT. The patient needs to expect a two-step path.

### India pathway

The dossier says "UK / EU / AU / IN — book an audiologist same-day" and credits the AIIMS Delhi integrative-otolaryngology clinic. This is mis-framed.

- AIIMS Delhi and PGI Chandigarh and JIPMER Pondicherry have integrated audiology-within-ENT clinics. The patient cannot "book an audiologist same-day" at AIIMS — they go to ENT OPD and audiology is performed within the ENT visit. The pathway is ENT OPD-first with audiology embedded.
- In tier-1 private hospitals (Apollo, Fortis, Manipal, Max) the same is true — ENT consult with audiology embedded.
- Standalone audiology clinics in India exist (Phonak/Resound retail outlets, Speech-and-Hearing colleges' affiliated clinics) but they are configured for hearing-aid fitting, not SSHL acute triage. They will refer the patient to ENT.
- The dossier framing implies the Indian reader can walk into a standalone audiology clinic and trigger the steroid pathway. The realistic Indian pathway is ENT OPD same-day at a tertiary hospital or private hospital, with audiology embedded.

### The 14-day window — actually how tight is it?

The dossier says "14-day treatment window" and that "oral prednisone (60 mg/day × 10–14 days) or intratympanic dexamethasone started inside 14 days dramatically improves the chance of recovery; delayed treatment is associated with much worse hearing recovery." The SSHL sister-dossier opens with "72-hour window."

The published evidence is closer to the SSHL dossier's 72-hour framing than to the tinnitus dossier's 14-day framing. Specifically:

- The strongest published recovery is in patients treated within 7 days (some series within 72 hours). Beyond 14 days the recovery yield is reduced but not zero.
- Mattox 1977 natural-history spontaneous recovery is ~30–65% in untreated cases; treatment within the first week appears to add a meaningful delta on top of that, with the delta narrowing as time-from-onset increases.
- Stachler 2012 American Academy of Otolaryngology guidance (not cited as US authority — cited as the scientific synthesis the SSHL dossier already uses) and Plontke 2020 Lancet review both prioritise *days, not weeks*, as the clinically-relevant urgency frame.

The tinnitus-dossier "14-day window" framing is genuinely too loose. It should say: **"start oral prednisone or intratympanic dexamethasone within 72 hours if at all possible; the window of useful treatment extends to 14 days but with steeply diminishing yield after day 7."** This aligns with the SSHL sister-dossier and stops mis-calibrating the patient's urgency.

### A&E / ED realism — the load-bearing gap

The dossier says: "If neither is available within 24 h, present at A&E / ED — SSHL is a recognised emergency triage category." This is technically true but operationally insufficient. The realistic patient script needs:

1. **At triage, use the exact words "sudden hearing loss" or "sudden sensorineural hearing loss" — not "ringing in my ear" or "I can't hear properly."** The triage nurse pattern-matches on these phrases.
2. **Ask explicitly for the ENT registrar on-call review before you are discharged.** A&E SHOs often do not feel confident prescribing oral prednisone for SSHL without ENT sign-off.
3. **If A&E declines to prescribe steroids and tells you to see your GP, request a written record of the consultation and the audiogram if performed, then call NHS 111 / GP urgent / private ENT the same day.**
4. **In the UK, if A&E discharges you without ENT review, NHS England's Choose & Book or Patient Choice route allows direct referral to a different ENT clinic — but only if you know to ask.** Most patients don't.
5. **In Australia, public A&E (ED) is configured for this; private A&E (e.g. Healthscope) is less so. Ask which type of facility you are in before triage.**

### What the dossier needs to change in Dimension 1

1. **Tighten the urgency frame.** Replace "14-day treatment window" with "72-hour optimal window; useful out to 7–14 days with reducing yield." This aligns with the SSHL sister-dossier.
2. **Stop grouping UK / EU / AU / IN.** Each has a materially different same-day pathway. The dossier needs at minimum 5–6 country rows: UK (GP → A&E → ENT on-call); DE (HNO-Arzt direct); FR (GP → ORL or A&E ORL); AU (audiologist → ENT OR public ED); IN (tertiary hospital ENT OPD same-day, audiology embedded); US (ENT direct or urgent-care).
3. **Surface the audiologist-cannot-prescribe-steroids reality in UK + AU.** The audiologist confirms SSHL; ENT prescribes. The patient needs to expect a two-step path with potential 24-hour delay built in.
4. **Add the A&E patient-script.** "Sudden hearing loss" at triage; ENT on-call review request before discharge; pushback on go-home-see-GP-Monday.
5. **Add the audiogram-on-the-day requirement.** SSHL is an audiometric diagnosis. A&E will not always do audiometry. The patient needs to know that audiometry is required to confirm SSHL vs conductive vs central — and to push for it.
6. **Cross-reference the SSHL sister-dossier more aggressively.** The current `[[sshl-hearing-loss]]` cross-link is a footnote. SSHL is a separable acute emergency with its own clinical pathway; the tinnitus dossier's role is to flag the red flag and route, not to be the SSHL playbook.

---

## Dimension 2 — OTC Hearing-Aid Landscape + Smartphone Audiogram Validity

### What the dossier currently says

§5.9 hearing-aid masking and §10.7.1 home-usable advanced devices both name Jabra Enhance, Lexie, Bose SoundControl, Eargo, and Sony CRE-C10 as OTC hearing aids that the patient can buy and use. §10.7.1 says: "If hearing test shows loss, hearing aids reduce tinnitus salience materially." The smartphone-audiogram apps (Mimi, EarTrumpet, SonicCloud) are framed as "Baseline hearing test on a phone; identifies notch loss + flag for OTC hearing-aid trial." Cost stated at $0–50.

The §5.9 line "Mimi-audiogram-fit. If you want clinical fitting, an audiologist can dial in masker tones precisely (clinic-route, optional)" frames clinic audiology as an optional upgrade, not as the default for accurate fitting.

### What's wrong

**(a) OTC hearing aids are not an OTC category outside the US in 2026.** The FDA OTC hearing-aid clearance is October 2022 (effective). The equivalent regulatory categories elsewhere:

- **UK:** Hearing aids remain Class IIa medical devices. There is no equivalent OTC retail category. Boots Hearingcare and Specsavers Hearing offer audiologist-fit hearing aids; direct-to-consumer Lexie/Eargo are not retailed under an OTC framework. Some UK readers may import via international Amazon but they bypass the regulatory framework.
- **EU:** Hearing aids are Class IIa under MDR 2017/745. No EU-wide OTC category. Germany has a strong audiologist-fitting tradition (Hörgeräteakustiker). Direct-to-consumer Lexie/Eargo are not retailed under an EU OTC framework.
- **Australia:** TGA classifies hearing aids as Class IIa medical devices (and historically Class III for some implantable). Hearing Services Program (HSP) routes through accredited audiologists. No OTC retail.
- **India:** No OTC hearing-aid category. Phonak, Resound, Widex retail through audiologist clinics. Cheap unregulated amplifiers exist but are not "OTC hearing aids" in any clinical sense.
- **Canada:** Provincial regulation; no federal OTC category.

So the dossier's framing — "OTC hearing aids Jabra Enhance, Lexie, Bose, Eargo, Sony" — is a **US-only OTC category** as of 2026. Naming these as the home-OTC layer for a global readership is a doctrine-aligned but factually incorrect framing. The wave-2 EMA-HMPC reviewer caught the same pattern on Vinpocetine and Melatonin; this is the same shape of error applied to medical devices.

**Fix:** The dossier needs a hearing-aid jurisdiction strip mirroring the §3.3 supplement jurisdiction strip:

> **Hearing-aid access by country.** OTC hearing aids (FDA OTC clearance 2022) are a US-only category as of 2026. Non-US readers route through clinic audiology (UK NHS or private; EU Hörgeräteakustiker / audiologiste / audioprotesista; AU Audiology Australia-accredited; IN audiology-clinic-within-hospital). Apple AirPods Pro 2 hearing-aid mode (iOS 18.1+, October 2024 launch) is a globally available consumer-tech layer that works without an OTC clearance — and is the realistic equivalent of OTC hearing aids for non-US readers as of 2026. Listed brands Jabra Enhance / Lexie / Bose SoundControl / Eargo / Sony CRE-C10 require US purchase + US shipping address.

**(b) Apple AirPods Pro 2 hearing-aid mode is the actual global consumer-tech layer.** As of iOS 18.1 (October 2024), Apple AirPods Pro 2 contain a clinical-grade hearing-test feature and a hearing-aid mode that amplifies sound based on the user's audiogram. This is FDA-cleared (December 2024) but functions on any iOS device globally with a paired AirPods Pro 2. For non-US readers without OTC hearing-aid access, this is the realistic entry point at ~$249/pair — cheaper than Jabra Enhance, globally available, and doesn't require a US shipping address. The dossier does not name it.

**(c) Smartphone-audiogram validity is materially over-stated.** Mimi, EarTrumpet, and SonicCloud are user-friendly hearing-screening apps. They are **not equivalent to a clinical pure-tone audiogram** in the following load-bearing ways:

- They do not test the standard clinical frequency battery (250, 500, 1000, 2000, 4000, 6000, 8000 Hz at minimum; extended high-frequency 9000–16000 Hz in research clinics). Most consumer apps test 250–8000 Hz only and may sample at large steps (1000-Hz octaves) that miss mid-frequency notch losses.
- They do not measure air-vs-bone conduction. The clinical distinction between sensorineural (cochlear/retrocochlear) and conductive (middle-ear) hearing loss requires bone-conduction audiometry. A smartphone cannot do this. A patient with conductive tinnitus from otosclerosis or chronic otitis media will appear on Mimi as "hearing loss detected" but the dossier's recommendation of OTC hearing aids is the wrong intervention — they need wax removal, tympanoplasty, stapedectomy, or chronic-ear medical management.
- They do not measure speech-in-noise. A patient can have a flat smartphone-audiogram and yet significant supra-threshold auditory processing deficit (the so-called "hidden hearing loss" or cochlear synaptopathy). Mimi will say "no loss"; QuickSIN or LiSN-S in a clinic will say "significant suprathreshold deficit."
- They do not control for ambient noise. Smartphone audiograms run in a quiet room have ~5–10 dB threshold shift compared to a sound-treated booth. The clinical implication: a patient with mild 25–30 dB high-frequency loss may test "normal" on a smartphone in a typical home.
- They miss the asymmetry threshold that triggers retrocochlear workup. The clinically-meaningful asymmetry is ≥15 dB at two adjacent frequencies (or ≥20 dB at any one frequency) between ears — a smartphone-audiogram does not flag this systematically.

The dossier's framing — "Baseline hearing test on a phone; identifies notch loss + flag for OTC hearing-aid trial" — over-promises what these apps can deliver. The honest framing is:

> **For you, in plain words.** A smartphone hearing test (Mimi, EarTrumpet, SonicCloud, or Apple's AirPods Pro 2 hearing test) is a useful screening tool — it will catch significant hearing loss and flag asymmetric loss. It is NOT equivalent to a clinical audiogram. If the screen shows any loss, if it shows asymmetric loss (one ear materially worse than the other), or if it does not match how you actually hear (you struggle in restaurants but the app says "normal"), book a clinic audiogram. The clinical audiogram includes bone-conduction (to tell sensorineural from conductive) and speech-in-noise testing (to catch the auditory-processing deficits the app cannot detect).

**Estimated miss-rate for mid-frequency notch loss in smartphone audiograms:** ~30–50% depending on app frequency resolution and home noise environment. This is the load-bearing number the dossier should name and currently doesn't.

**(d) Clinic-grade tinnitus-specific maskers — the named platforms.** The dossier mentions "fractal tones (ReSound Zen, Oticon SoundSupport) — built into some hearing aids." This is too vague to be useful. The actual clinic-grade tinnitus-specific masking systems in 2026 are:

| Manufacturer | Tinnitus masking technology | Platform | Clinical signal |
|---|---|---|---|
| Widex | Zen tones (fractal-music masker — randomised tones designed to be melodic but not predictable) | Moment hearing aids | Sweetow 2010 + Henry 2017 — meaningful reduction in TFI/THI when paired with cognitive intervention |
| Phonak | Tinnitus Balance noise generator (broadband, white/pink/red) | Audéo Lumity / Sphere | Trotter & Donaldson 2008 + Henry 2015 |
| Oticon | Tinnitus SoundSupport (ocean / nature / broadband sounds) | More / Real / Intent | Henry 2017 sound-therapy meta |
| ReSound | Tinnitus Relief app + Nature Sounds | Nexia / Vivia | Searchfield 2017 |
| Starkey | Multiflex Tinnitus Technology (modulated broadband) | Genesis AI / Evolv AI | Searchfield 2017 |
| Signia | Notch therapy + tinnitus sound generator | Pure / Insio | Strauss 2017 notch therapy |

These are **clinic-fit hearing aids with built-in tinnitus maskers** — the audiologist fits the hearing-aid amplification to the patient's audiogram AND programmes the tinnitus masker to match the patient's tinnitus pitch + loudness + maskability profile. This is qualitatively different from "use a sound machine" — it gives the patient masking that runs during all waking hours, matched to their specific tinnitus.

The dossier should add a §5.9b (or expand §5.9) on clinic-fit hearing-aid tinnitus maskers, naming these six platforms, and surfacing the clinical signal that combined amplification + masking + cognitive therapy is the highest-impact intervention for the tonal-hearing-loss-driven sub-type (which is ~40–60% of chronic tinnitus presentations in our clinic).

### What the dossier needs to change in Dimension 2

1. **Add the hearing-aid jurisdiction strip.** OTC hearing aids are US-only as of 2026; non-US readers need clinic audiology.
2. **Name Apple AirPods Pro 2 hearing-aid mode as the global consumer-tech layer.** This is the realistic ~$249 entry point for non-US readers.
3. **Honest the smartphone-audiogram framing.** Useful screen, not equivalent to clinic audiogram. Name the ~30–50% miss-rate for mid-frequency notch loss. Name the conductive-vs-sensorineural blind spot. Name the asymmetry-threshold blind spot.
4. **Add clinic-fit tinnitus-masker landscape.** Six platforms (Widex, Phonak, Oticon, ReSound, Starkey, Signia). Surface as §5.9b or expand §5.9. This is doctrine-aligned because it's a clinic-route option (not part of the home OTC core) — but it is the highest-impact intervention for the largest tinnitus sub-type and the dossier currently under-serves the patient by not naming it cleanly.
5. **Stop using "fractal tones built into some hearing aids" as the masker reference.** Name Widex Zen specifically; name Phonak Tinnitus Balance; etc.

---

## Dimension 3 — Audiology Assessment Battery the Dossier Omits

### What the dossier currently says about assessment

§1.1.2 (the front-matter `clinicalScoringInstrument` field) names: TFI + THI + 0–10 slider + sleep questionnaire (PSQI) + mood/anxiety (PHQ-9, GAD-7). §11.2 names: TFI primary + THI secondary + 0–10 daily slider + PSQI + ISI + GAD-7 + PHQ-9 + consumer audiogram + pitch/loudness match + home BP + daily HRV.

The dossier treats this as the assessment battery — and frames the audiologist's role primarily as fitting hearing aids (§5.9) or programming masker tones precisely (§5.9 clinical-route optional line).

### What a real audiologist tinnitus assessment includes — and what the dossier misses

The standard audiology tinnitus assessment battery (as taught at UCL Ear Institute, Manchester Audiology MSc, University of Auckland, Macquarie Audiology) is:

| Test | What it measures | What it tells you the dossier scoring doesn't |
|---|---|---|
| Pure-tone audiogram 250–8000 Hz air conduction | Hearing thresholds across speech-relevant frequencies | Sensorineural vs conductive vs mixed (requires bone-conduction) |
| Bone-conduction audiogram (mastoid bone vibrator) | Cochlear hearing thresholds bypassing middle ear | If air-bone gap >10 dB → conductive component (otosclerosis, otitis media with effusion, chronic suppurative OM, ossicular discontinuity) — completely changes treatment pathway |
| Extended high-frequency audiogram 9000–16000 Hz | Detects early cochlear damage above speech range | Often abnormal in normal-audiogram tinnitus; "hidden hearing loss" the smartphone apps miss |
| Tympanometry (Type A / B / C / Ad / As) | Middle-ear pressure + ossicular mobility | Type B → effusion; Type C → eustachian dysfunction; Type Ad → ossicular discontinuity; Type As → otosclerosis — flags conductive contribution to tinnitus |
| Acoustic reflex thresholds (ipsilateral + contralateral, 500/1000/2000/4000 Hz) | Stapedius muscle reflex arc | Absent reflexes → retrocochlear pathology (vestibular schwannoma) or cochlear loss >60 dB; reflex decay → retrocochlear; abnormally low LDLs → hyperacusis |
| Distortion-product otoacoustic emissions (DPOAEs) | Outer-hair-cell function 1000–8000 Hz | Detects cochlear damage at frequencies where audiogram is normal; useful for ototoxicity monitoring and acute noise-injury follow-up |
| Auditory brainstem response (ABR) | Wave I–V latencies up the auditory pathway | Inter-wave latency >0.2 ms asymmetry → retrocochlear pathology; replaces MRI as the screening test in some pathways though MRI has supplanted ABR in most |
| Speech-in-noise — QuickSIN, LiSN-S, HINT | Speech recognition with competing noise | "Hidden hearing loss"; cochlear synaptopathy; central auditory processing deficit — the functional hearing impairment that drives tinnitus distress more than audiogram thresholds do |
| Tinnitus pitch matching | Frequency of the patient's tinnitus | Matched to audiogram notch in ~80% of tonal tinnitus; matches inform notch-music therapy frequency |
| Tinnitus loudness matching | dB above pitch-matched threshold | Most patients match at 5–15 dB sensation level; LMs >20 dB suggest hyperacusis overlay |
| Minimum masking level (MML) | dB of masking noise needed to obscure tinnitus | If MML > pure-tone audiogram threshold at tinnitus pitch → masking-resistant; informs masker prescription |
| Residual inhibition (RI) testing | Whether masking causes temporary tinnitus suppression after masker stops | RI-positive → masking therapy likely to help; RI-negative → different pathway. ~50–60% of chronic tinnitus is RI-positive |
| Loudness Discomfort Levels (LDLs) / Uncomfortable Loudness Levels (UCLs) | Sound level at which the patient finds sound uncomfortable | LDL <85 dB HL across multiple frequencies → hyperacusis; clinically distinct from tinnitus and requires different treatment (sound desensitisation, NOT earplug protection) |
| Khalfa Hyperacusis Questionnaire | Self-report hyperacusis severity | The dossier names this in §11.3 row 13 but does not integrate it into the assessment battery interpretation |
| Hearing Handicap Inventory (HHIA adults / HHIE elderly) | Hearing-loss-related functional handicap, separable from tinnitus handicap | Different construct from THI; patient may have low THI but high HHIA if hearing loss is the bigger functional problem |
| Tinnitus Reaction Questionnaire (TRQ — Wilson) | Tinnitus-related psychological distress | Complementary to THI; used in CBT-T outcome trials |
| Tinnitus Catastrophizing Scale | Catastrophic thinking about tinnitus | Predicts CBT-T response |

The dossier's battery (TFI + THI + slider + PSQI + ISI + GAD-7 + PHQ-9 + consumer audiogram + pitch/loudness match) is roughly 30% of the standard audiology battery. Specifically:

- **No bone-conduction audiometry** → cannot distinguish conductive from sensorineural tinnitus. This is the load-bearing miss.
- **No tympanometry** → cannot detect middle-ear effusion, eustachian dysfunction, or otosclerosis presenting as tinnitus.
- **No acoustic reflex thresholds** → cannot screen for retrocochlear pathology (vestibular schwannoma) which presents as unilateral chronic tinnitus + asymmetric SNHL in ~5–10% of asymmetric presentations.
- **No DPOAEs** → cannot detect early cochlear damage; cannot monitor ototoxicity.
- **No speech-in-noise** → cannot detect the functional hearing deficit that drives most chronic tinnitus distress.
- **No residual inhibition** → cannot predict whether sound therapy will work for this patient.
- **No LDLs** → cannot detect hyperacusis comorbidity (see Dimension 5).
- **No HHIA** → conflates hearing handicap with tinnitus handicap.

### What the dossier needs to change in Dimension 3

1. **Add §11.4 Audiology assessment battery — what a real audiologist would test, what's self-administrable, what isn't.** Structure as a two-column table: self-administered (TFI, THI, 0–10 slider, smartphone audiogram, pitch matching via TinnitusPlay) vs audiologist-administered (bone-conduction, tympanometry, acoustic reflexes, DPOAEs, speech-in-noise, residual inhibition, LDLs, HHIA). Frame as "this is what to ask for if you book a clinic audiogram" — not as "the home protocol requires all of this."
2. **Surface residual inhibition testing as a key predictor of sound-therapy response.** Self-administrable in a limited form: patient masks their tinnitus with a matched broadband or notched sound at sensation-level 10–20 dB above tinnitus, for 60 seconds, removes the masker, and tracks how long until tinnitus returns to baseline. If RI is positive (≥30 seconds of suppression), sound therapy is likely to help; if RI is negative, the home stack should pivot toward cognitive (MBCT-T) earlier and de-emphasise the masking layer.
3. **Surface LDLs / UCLs as the gateway to detecting hyperacusis comorbidity.** Patient self-screen: "Does normal conversational speech (60–65 dB) cause physical discomfort, ear pain, or significant distress in your tinnitus ear? Does washing dishes, vacuuming, or restaurant ambient noise (70–80 dB) cause discomfort that you would describe as more than just 'loud'?" If yes, hyperacusis is likely; the treatment pathway shifts (see Dimension 5).
4. **Surface speech-in-noise as the most under-recognised functional marker.** Frame as: "If you struggle to follow conversation in restaurants or noisy meetings even though a hearing test shows normal thresholds, this is a real auditory-processing deficit and it drives a substantial portion of tinnitus distress." Direct the patient to QuickSIN-style apps (limited consumer options as of 2026; SoundCheck, Hearing Number from NCOA in US — but the dossier should not name US-only) or to clinic testing.
5. **Surface the HHIA-vs-THI distinction.** Some patients with severe hearing loss have low THI but high hearing-related handicap; the home stack does not address hearing loss directly (other than via hearing-aid referral). The dossier should not collapse these constructs.

---

## Dimension 4 — Pulsatile Tinnitus Workup Specificity

### What the dossier currently says

The opener says: "If your ringing throbs in time with your heartbeat (especially if it is new, in one ear, or loud), that is a sign of a blood-vessel cause and is the one exception to 'stay at home.' Arrange ear-and-neck vascular imaging on your own initiative — this home stack cannot fix a physical blood-vessel problem."

§2.6 sub-types row: "Pulsating (RED FLAG)" → "Vascular imaging on your own initiative."

§10.7.3 row: "Pulsatile-tinnitus vascular workup — Pulsatile tinnitus = non-substitutable vascular imaging (MRA, CTA, duplex)."

§11.5 row: "Pulsatile tinnitus — ABSOLUTE protocol-defer until vascular workup completes."

### Why this is too vague to be actionable

A patient who reads "arrange ear-and-neck vascular imaging on your own initiative" will:

1. Not know which imaging modality to ask for (MRI? CT? duplex? MRA? CTA? MRV?).
2. Not know which specialty to consult (GP? ENT? neuro-otology? neurology? interventional radiology? vascular surgery?).
3. Not know the imaging order (which test first; what if first is normal).
4. Not know what the differential is — and therefore not know whether their specific features (cervical bruit, audible only at rest, position-dependent, suppressible by jugular compression) suggest a specific etiology that changes the workup.
5. Order the wrong study, get a "no abnormality" report, and walk away thinking pulsatile tinnitus is benign — when it can be the first symptom of a sigmoid sinus diverticulum, dural AV fistula, intracranial hypertension, or paraganglioma.

### The clinically-correct workup order

This is a workflow-detail that respects the OTC + home + no-US-authority doctrine — it's a referral pathway, not a recommendation to treat pulsatile tinnitus at home. The dossier should surface this in a §10.7.3 or §11.5 expanded block:

**Step 1 — Bedside clinical features that change the differential:**

| Feature | What it suggests | Workup implication |
|---|---|---|
| Pulse-synchronous (beats with heart) | Arterial: atherosclerotic carotid, dural AV fistula, AVM, glomus/paraganglioma, carotid stenosis, fibromuscular dysplasia. Venous: sigmoid sinus stenosis, sigmoid sinus diverticulum, dehiscent jugular bulb, idiopathic intracranial hypertension (IIH) | MRI + MRA + MRV brain & neck first-line |
| Suppressed by gentle ipsilateral neck (jugular) compression | Venous etiology more likely than arterial | Prioritise MRV; consider IIH workup (LP opening pressure, fundoscopy for papilloedema) |
| Position-dependent (worse lying down or bending forward) | Venous etiology (IIH, sigmoid sinus stenosis); CSF leak (rare) | MRV + IIH workup; consider lumbar puncture |
| Audible only at rest, abolished by exertion | Often benign venous flow; can also be IIH | MRV first |
| Audible cervical bruit on auscultation | Carotid arterial source | Carotid duplex + MRA neck |
| Non-pulse-synchronous (rhythmic but not matching pulse — clicks, jaw movement, breathing) | Palatal myoclonus, eustachian tube dysfunction, TMJ, stapedial myoclonus, SCD (superior canal dehiscence) | Different workup entirely — high-resolution CT temporal bone; ENT direct |
| Pulse-synchronous + conductive hearing loss on audiogram | Glomus tympanicum / jugulare; SCD; large jugular bulb | High-resolution CT temporal bone is the priority study |

**Step 2 — First-line imaging.** For most pulse-synchronous pulsatile tinnitus, MRI brain + MRA brain & neck + MRV brain is the appropriate first-line study. This bundle catches: vestibular schwannoma (since SNHL + tinnitus can overlap with pulsatile presentations), dural AV fistula, intracranial AVM, sigmoid sinus stenosis, IIH evidence (empty sella, optic nerve tortuosity, slit-like ventricles), large venous abnormality.

**Step 3 — Second-line imaging.** If MRI/MRA/MRV is normal but pulsatile tinnitus persists:

- High-resolution CT temporal bone (thin-section) → catches sigmoid sinus diverticulum, sigmoid sinus dehiscence, SCD, glomus tumor, large jugular bulb, dehiscent jugular bulb. This is the second-line study most ENT clinics will order.
- CTA head + neck → if MRA was equivocal or if arterial etiology suspected and MRA was not diagnostic.
- Carotid duplex ultrasound → if cervical bruit on auscultation; cheaper, no contrast.

**Step 4 — Third-line / interventional.** Digital subtraction angiography (DSA) is the gold standard for dural AV fistula and small AVMs, but is invasive and is only performed if non-invasive imaging is suggestive or if intervention is being planned.

**Step 5 — IIH workup.** If MRV shows sigmoid sinus stenosis or empty sella, the patient needs neuro-ophthalmology fundoscopy (papilloedema), formal visual field testing, and lumbar puncture with opening pressure. IIH is a treatable cause and is dramatically under-recognised in pulsatile tinnitus.

### Specialty routing

- **First contact:** ENT or neuro-otology (not GP only — the GP will refer onward but adds a delay).
- **For dural AV fistula, AVM, sigmoid sinus stenosis stenting:** interventional neuroradiology.
- **For carotid stenosis or fibromuscular dysplasia:** vascular surgery (carotid endarterectomy / stenting).
- **For glomus / paraganglioma:** skull-base surgery + ENT + interventional neuroradiology.
- **For IIH:** neuro-ophthalmology + neurology + sometimes neurosurgery.
- **For SCD:** otologic surgery (middle-fossa or transmastoid SCD repair).

### Pulse-synchronous vs non-pulse-synchronous — the dossier conflates them

The dossier currently treats "pulsating" as a single red-flag category. Pulse-synchronous (beats with heart) is the vascular-imaging pathway above. Non-pulse-synchronous rhythmic tinnitus (clicks with jaw movement, breath-synchronous tones, machine-like noises) has a completely different differential:

- **Palatal myoclonus** — clicks heard from inside the head, often visible on flexible nasendoscopy as the soft palate twitches at 1–3 Hz. ENT referral; sometimes treated with botulinum toxin to the tensor veli palatini.
- **Stapedial / tensor tympani myoclonus** — clicks heard in one ear, often triggered by sudden loud sound. ENT referral; sometimes treated with tensor tympani section.
- **Patulous eustachian tube** — autophony (hearing own voice / breathing), tinnitus changes with head position. ENT referral; managed with weight gain, nasal saline, occasionally tube repair.
- **Eustachian tube dysfunction with effusion** — sensation of pressure + tinnitus + conductive component on audiogram. ENT referral; managed with eustachian tube balloon dilation or grommets.

The dossier needs to add a non-pulse-synchronous row to the §2.6 sub-types table — and route it to ENT for nasendoscopy + tympanometry, NOT to vascular imaging.

### What the dossier needs to change in Dimension 4

1. **Replace "arrange ear-and-neck vascular imaging on your own initiative" with a structured workup ladder.** First-line MRI + MRA + MRV. Second-line HRCT temporal bone if first-line normal. Third-line DSA + IIH workup if second-line normal.
2. **Add bedside features that change the differential.** Pulse-synchronous vs non-pulse-synchronous; jugular-compression suppression; position-dependence; cervical bruit. Patients can self-assess most of these.
3. **Add the specialty-routing strip.** ENT / neuro-otology first; interventional neuroradiology for AVM / fistula / sinus stenting; vascular surgery for carotid; neuro-ophthalmology for IIH. The patient needs to know which specialty owns which differential.
4. **Distinguish pulse-synchronous from non-pulse-synchronous in the sub-types table.** Different differential, different workup, different treatment pathway.
5. **Cross-reference the SSHL sister-dossier on vestibular schwannoma.** Asymmetric chronic tinnitus + SNHL can be vestibular schwannoma even without sudden onset; MRI threshold is asymmetric SNHL ≥15 dB at two adjacent frequencies. The dossier currently flags MRI only for SSHL and for pulsatile — but the chronic-asymmetric pattern also warrants MRI and the dossier does not surface this.

---

## Dimension 5 — Comorbidities That Aren't Subtypes But Are Major ENT-Clinic Comorbidities

### What the dossier currently covers

The §11.5 life-stage gate covers pregnancy, lactation, paediatric, elderly, cancer, CKD, cirrhosis, bipolar, epilepsy, G6PD, pacemaker, warfarin, SSRI, levothyroxine. The §11.3 comorbidity table covers hearing loss, thyroid, B12, iron, homocysteine, vitamin D, zinc/copper, magnesium, BP, cholesterol, sleep apnea, TMJ, depression/anxiety/sound-sensitivity, heavy metals, mould, perimenopause, hs-CRP. §11.6 names absolute "do not start" conditions including bipolar, pregnancy, active cancer, CKD 4-5, unstable INR, pulsatile tinnitus, SSHL 72h, severe hearing loss without audiology, diagnosed Ménière, and children/adolescents.

The §2.6 sub-types table names seven tinnitus sub-types: tonal-hearing-loss-driven, somatic-neck-jaw, after-ototoxic-drug, decades-old brain-amplification, pulsating (red flag), perimenopausal, acute-noise-injury.

### What's missing — the seven major ENT-clinic comorbidities

**(a) Hyperacusis.** Co-prevalence with chronic tinnitus is ~30–40% in ENT-clinic populations (lower in primary care). Hyperacusis is the perception of normal sound as uncomfortably loud — clinically distinct from tinnitus, often co-occurring, and treated very differently:

- Hyperacusis treatment is **sound desensitisation** (gradual increase in environmental sound exposure) and tinnitus retraining therapy (Jastreboff's TRT specifically designed for both conditions) and CBT for sound-related catastrophising.
- Hyperacusis treatment is **NOT earplugs / hearing protection in normal environments** — using earplugs to avoid normal sound makes the central auditory gain go up, which makes both the hyperacusis and the tinnitus worse. This is the single most-common patient self-management error.
- The dossier names "earplug over-use in normal-noise environments" in §10.6 (bottom of strictly-avoid list, near the end) but does not explain why — the why is that the patient with hyperacusis instinctively reaches for earplugs, and instinctive earplug overuse perpetuates the condition.
- Khalfa Hyperacusis Questionnaire (named in §11.3 row 13 but not integrated) is the standard self-screen. ≥28/42 → likely clinically significant hyperacusis.
- The Loudness Discomfort Level test (Dimension 3 above) is the audiologist-administered test that confirms it.
- The dossier names hyperacusis as part of "anxiety with sound sensitivity" in the comorbidity screen and conflates it with anxiety. This is a clinical error — hyperacusis and sound-related anxiety are overlapping but distinct constructs.

The dossier needs a dedicated §11.5b or §11.7c block on tinnitus + hyperacusis: how to self-screen (Khalfa), why earplugs are the wrong instinct, what sound-desensitisation looks like at home (pink noise at gradually increasing volume from below-tinnitus to ambient-environment level, 30–60 minutes/day, 12–24 weeks; this is TRT-style), and when to escalate (LDL <70 dB HL → clinic referral).

**(b) Misophonia.** Different mechanism, different treatment. Misophonia is a strong negative emotional reaction to specific sounds (typically chewing, breathing, throat-clearing, pen-clicking) — it is not loudness-related (distinguishes from hyperacusis) and not pitch-matched (distinguishes from tinnitus). Co-prevalence with chronic tinnitus is real but less well-quantified than hyperacusis (estimates ~15–25%).

- Treatment is CBT for misophonia (specific protocols — Schröder 2017, Jager 2020), not TRT.
- Treatment is NOT sound enrichment in the tinnitus-masking sense — masking the misophonic trigger sounds can paradoxically intensify the response.
- The dossier should distinguish misophonia from hyperacusis and from tinnitus distress, and route misophonia presentations to CBT + specific misophonia protocols, not to the §5–8 home stack designed for tinnitus.

**(c) Musical hallucinations / Musical Ear Syndrome (MES).** Charles Bonnet syndrome of the auditory system — patients with significant hearing loss (especially elderly with bilateral SNHL) sometimes experience complex auditory hallucinations of music or voices. ~5–10% of severe hearing loss in elderly. Distinct from tinnitus (tinnitus is non-complex sound; MES is complex music/voices). Distinct from psychiatric hallucinations (insight is preserved; patient knows it isn't real).

- Treatment is hearing-aid fitting (restoring auditory input often reduces or eliminates MES — the brain is generating phantom complex sound for the same reason it generates phantom tinnitus).
- Often misdiagnosed as early dementia or psychiatric illness when it is actually a sensory-deprivation phenomenon.
- The dossier doesn't mention MES anywhere. An elderly patient with hearing loss who reads the dossier and identifies "I hear music in my head sometimes, especially in quiet rooms" will not find themselves in the dossier.

**(d) Ménière's disease.** The dossier mentions Ménière in §11.6 ("Diagnosed Ménière's disease — modifies §6.3 salt restriction; clinic-route referral") and in §3.3 row Chininum Sulph homeopathy notes ("classically used for Ménière overlap"). This is genuinely insufficient.

Ménière is the triad of: (1) episodic vertigo (lasting 20 minutes to several hours), (2) low-frequency fluctuating sensorineural hearing loss, and (3) tinnitus with ear-fullness. ~5% of chronic tinnitus presentations in ENT clinic are unrecognised Ménière. The pathophysiology is endolymphatic hydrops (fluid overload of the cochlear membranous labyrinth).

Diagnostic pathway:
- Pure-tone audiogram at the time of (or shortly after) a vertigo attack: low-frequency SNHL pattern (rising audiogram), often fluctuating between attacks.
- Vestibular testing: caloric reduction on the affected side, VEMP changes, video head impulse test (vHIT) findings.
- MRI to exclude vestibular schwannoma + delayed gadolinium MRI of the inner ear (3T) which can directly visualise endolymphatic hydrops in research centres.
- Diagnosis is clinical (Bárány Society 2015 criteria: definite vs probable Ménière).

Home + lifestyle layer for Ménière:
- **Low-salt diet** — target <1500 mg sodium/day (the dossier's §6.4 sub-2000 mg target is in the right neighbourhood but Ménière should be tighter). This is the cornerstone of conservative Ménière management.
- **Caffeine + alcohol restriction** — both worsen fluid handling. Aligned with the dossier's §6.3.
- **Hydration regularity** — steady fluid intake, not bolus loading.
- **Stress management** — Ménière attacks are stress-triggered in ~60–80% of patients. The dossier's MBCT-T + Bhramari + HRV stack is appropriate here.
- **Vestibular rehabilitation** — between-attack vestibular exercises help compensation.

Clinical layer for Ménière (not OTC, not home — but the dossier should name what the patient should expect):
- **Diuretic (acetazolamide, hydrochlorothiazide-triamterene, or amiloride-hydrochlorothiazide)** — Rx, not home, but the patient should expect this if Ménière is confirmed.
- **Betahistine** — Rx in EU/AU/Canada/India; not FDA-approved in US. ~16–48 mg/day. The dossier mentions betahistine in §10.1 as an off-label tinnitus drug "EU / Asia / Canada — not US-approved" — but doesn't surface that for Ménière specifically, it is first-line in non-US countries.
- **Intratympanic dexamethasone** — for refractory cases. Same procedure as SSHL salvage but indication is different.
- **Intratympanic gentamicin** — chemical labyrinthectomy for refractory unilateral Ménière. Last-resort.
- **Endolymphatic sac surgery, vestibular nerve section, labyrinthectomy** — surgical options for severe refractory cases.

The dossier needs a Ménière diagnostic-pathway section (in §11.6 or as a new §11.6b) that:
- Surfaces the Bárány Society criteria so the patient can self-screen.
- Names the audiogram pattern (low-frequency rising fluctuating SNHL).
- Names betahistine as the EU/AU/IN first-line (the dossier currently does not — and a Ménière patient who reads this dossier without that information may not even know to ask their ENT about betahistine in those jurisdictions).
- Names the tighter <1500 mg sodium target.
- Cross-references vestibular rehabilitation.
- Surfaces the home dossier's contribution as adjunct, NOT substitute for ENT diagnosis.

**(e) Vestibular schwannoma / acoustic neuroma.** The dossier flags MRI in the SSHL sister-dossier (Saunders 1995 — ~10% of SSHL is vestibular schwannoma). It does **not** flag MRI for the chronic-tinnitus-with-asymmetric-SNHL presentation.

Vestibular schwannoma in chronic-tinnitus presentations:
- Slowly progressive unilateral SNHL + unilateral tinnitus is the most common presentation (more common than SSHL presentation).
- The clinical trigger for MRI is **asymmetric SNHL ≥15 dB at two adjacent frequencies or ≥20 dB at any frequency** between ears, especially in the high-frequencies (3–8 kHz). Word recognition disproportionate to PTA. Unilateral tinnitus alone with symmetric hearing — much lower yield but some pathways MRI even this.
- Imaging is MRI internal auditory canal (IAC) with gadolinium contrast. Sensitivity ~95% for tumours ≥2 mm.
- Sub-2 mm tumours can be missed; some centres use thin-section MRI or contrast-enhanced FIESTA/CISS sequences.

The dossier needs to surface — in §11.6 or in a new comorbidity row — that **chronic unilateral tinnitus + audiometric asymmetry warrants MRI**. The patient with chronic asymmetric tinnitus who reads the dossier and follows the home protocol for 6 months without ever getting MRI is at risk of a delayed vestibular schwannoma diagnosis — a tumour that grew larger and required more aggressive surgical resection because the dossier did not flag the rule-out.

**(f) Conductive vs sensorineural tinnitus — the protocol assumes sensorineural.** The §2 four-driver model (inner-ear damage, brain volume-up, blood flow, neck-jaw-vagus) describes sensorineural tinnitus mechanisms. The §3–10 home protocol is designed for sensorineural tinnitus. But ~5–10% of tinnitus presentations are **conductive in origin**:

- **Otosclerosis** — autosomal-dominant otic-capsule remodelling, fixation of the stapes footplate. Onset typically 20s–40s, often progressive bilateral conductive hearing loss + low-frequency tinnitus + Schwartze sign (red blush at promontory through tympanic membrane). Treatment is stapedectomy / stapedotomy (surgical) or hearing aid. The §8 antioxidant stack does nothing.
- **Chronic otitis media with effusion** — middle-ear fluid + conductive loss + low-frequency tinnitus + sensation of fullness. Treatment is grommets / ventilation tubes, or watchful waiting if it resolves. The §8 antioxidant stack does nothing.
- **Ossicular chain disruption** — post-trauma; conductive loss + tinnitus. Treatment is ossiculoplasty.
- **Tympanic membrane perforation** — conductive loss + tinnitus + sometimes otorrhoea. Treatment is tympanoplasty or myringoplasty.
- **Cholesteatoma** — destructive keratin sac in the middle ear, conductive loss + foul-smelling otorrhoea + tinnitus. Treatment is mastoidectomy. Untreated → erosion of ossicles, semicircular canal (dizziness), facial nerve (palsy), or skull base.

The dossier's §11.6 includes "Severe hearing loss without audiology workup — defer the OTC hearing-aid recommendation pending audiogram" — but does not surface the conductive-vs-sensorineural distinction as an exclusion criterion for the home protocol.

Audiometric clues to conductive component (which the patient can suspect from a smartphone audiogram if the app supports bone-conduction comparison — most don't):
- Air-conduction threshold > bone-conduction threshold at the same frequency (air-bone gap >10 dB).
- Low-frequency dominant hearing loss (smartphone apps often don't sample 250 Hz; if they do, low-frequency-dominant loss is a flag for conductive).
- Otoscopic abnormality (retracted tympanic membrane, fluid behind eardrum, perforation, discharge).

Behavioural clues to conductive tinnitus:
- Tinnitus changes with chewing, swallowing, or Valsalva manoeuvre.
- Sensation of ear-fullness, autophony, or pressure.
- History of recurrent ear infections, ear surgery, head trauma.
- Family history of otosclerosis (autosomal-dominant).

The dossier should add a "tinnitus with possible conductive component" sub-type to §2.6 and a corresponding exclusion / referral row to §11.6. The home antioxidant protocol is not contraindicated in conductive tinnitus — it just won't work for that component — and the patient needs to get an audiogram with bone-conduction before assuming the §2 four-driver model applies.

**(g) Perilymph fistula + superior semicircular canal dehiscence.** Both are rare-but-treatable mechanical causes of tinnitus + vertigo.

- **Perilymph fistula (PLF)** — leak of perilymph from the inner ear into the middle ear via the round window or oval window membrane. Triggered by head trauma, barotrauma (diving, flying), or heavy lifting. Sudden tinnitus + vertigo + fluctuating SNHL + sensitivity to pressure changes. Treatment is bed rest + avoidance of Valsalva + sometimes surgical patching.
- **Superior semicircular canal dehiscence (SCD / SSCD)** — congenital thinning or absence of bone over the superior semicircular canal. Patients have autophony (hearing own voice, footsteps, eye movements), Tullio phenomenon (loud sound triggers vertigo), pulsatile tinnitus, conductive hyperacusis (paradoxical low-frequency conductive loss but with normal middle ear). Treatment is middle-fossa or transmastoid SCD repair.

Both are diagnosed by high-resolution CT temporal bone (SCD) or by clinical history + audiology + vestibular testing (PLF). The dossier should flag post-trauma or post-barotrauma onset of tinnitus as a "see ENT, don't start the home protocol" pattern.

### What the dossier needs to change in Dimension 5

1. **Add a hyperacusis self-screen + treatment-divergence block.** Khalfa ≥28/42 OR LDL <70 dB HL OR "normal conversational speech is uncomfortably loud" → treatment pivots to sound desensitisation + TRT + CBT-for-hyperacusis. Earplug overuse explicitly forbidden as the central error. Cross-reference §10.6 strictly-avoid list which already includes "earplug over-use" but does not explain why.
2. **Add a misophonia self-screen + treatment-divergence block.** Different mechanism, different treatment, different from hyperacusis and from tinnitus distress.
3. **Add a musical ear syndrome (MES) recognition block.** Complex auditory hallucinations in the context of hearing loss; treatment is hearing-aid fitting; not psychiatric.
4. **Expand the Ménière diagnostic-pathway block.** Bárány Society criteria; low-frequency fluctuating SNHL audiometric signature; betahistine as EU/AU/IN first-line; tighter <1500 mg sodium target; vestibular rehab; cross-references to vertigo sister-dossier.
5. **Add MRI-trigger for chronic asymmetric tinnitus + SNHL.** Asymmetric SNHL ≥15 dB at two adjacent frequencies OR ≥20 dB at any frequency → MRI IAC with gadolinium contrast to exclude vestibular schwannoma. Currently flagged for SSHL only; chronic-asymmetric pattern needs the same flag.
6. **Add a "conductive component possible" sub-type to §2.6 and an exclusion/referral row to §11.6.** Otosclerosis, otitis media with effusion, ossicular discontinuity, tympanic membrane perforation, cholesteatoma — the home protocol does not address these and the patient needs audiogram with bone-conduction before assuming the four-driver model applies.
7. **Add post-trauma + post-barotrauma onset as red-flag pattern for PLF/SCD.** "See ENT before starting the home protocol if your tinnitus started after head trauma, diving, flying with cold, or heavy lifting."

---

## Cross-Cutting Observations + Skill v7 / v8 Implications

Six cross-cutting observations that aren't dimension-specific but matter for the skill versioning the user has been advancing through 2026-06-06 and 2026-06-07:

### Observation 1 — The dossier scaffold is correct; the clinical depth is partial

The §1-§16 scaffold is sound. The plain-English-first discipline is sound. The Cochrane honesty discipline is sound. The Critic-style structured-claim primitive deferred to skill v7 (per `factualErrorsFixedThisRevision` block) is in progress.

What the scaffold currently under-specifies is the clinical-workflow depth — assessment battery, comorbidity rule-outs, specialty routing, jurisdictional access. These are all *clinical-workflow* details that respect the OTC + home + six-tradition + no-US-authority doctrine. They are not US-authority intrusions and they are not pharmaceutical-clinic recommendations. They are referral pathways and assessment specificity that a real ENT clinic provides to a real patient.

**Skill implication:** Skill v7 or v8 needs a Rule 23 (or similar) requiring that condition-specific dossiers contain a "clinical-workflow integration layer" — assessment battery (self vs clinic), specialty routing, jurisdictional access strip, comorbidity rule-out triggers — for any condition where the home OTC protocol intersects with a clinical workup. Tinnitus, SSHL, Ménière, vertigo, peripheral neuropathy, migraine, AFib all need this layer. Cosmetic conditions like dandruff or skin-aging arguably do not.

### Observation 2 — The "audiologist-first" framing in the SSHL opener was a partial fix to a real wave-1 finding; the fix needs refinement

The wave-1 reviewer caught "see ENT same-day" as US-centric. The wave-2 fix introduced the audiologist-first framing. The wave-3 audit (this review) finds that the audiologist-first framing is also partly wrong in different jurisdictions. The correct framing is country-stratified with audiologist-first in some jurisdictions, GP-first in others, ENT-first in others, with all routing converging on the steroid prescription pathway.

**Skill implication:** Same-day-emergency escalation routing needs a country-stratified table format (not a prose paragraph) so the patient finds their jurisdiction quickly. This applies beyond SSHL — any condition with a same-day urgency component (anaphylaxis, retinal artery occlusion, sudden vision loss, transient ischaemic attack, etc) will have similar country-stratified routing requirements.

### Observation 3 — Smartphone audiogram is over-promised in this dossier and the OTC-hearing-aid jurisdiction gap is a meaningful doctrine compliance issue

The dossier presents smartphone audiograms as essentially equivalent to clinic audiograms for the patient's home use. They are not. The miss-rate for mid-frequency notch loss is ~30–50% depending on app and environment, and the inability to distinguish conductive from sensorineural loss is the load-bearing clinical limitation.

The OTC hearing-aid category as named (Jabra Enhance, Lexie, Bose, Eargo, Sony CRE-C10) is US-only as of 2026. Naming these as the home-OTC layer for a global readership is a regulatory framing error — the wave-2 EMA-HMPC reviewer caught the same pattern on Vinpocetine and Melatonin (jurisdiction-status strips); this is the same shape of error applied to medical devices.

**Skill implication:** Skill v7 Rule 13 (jurisdictional status strips for OTC supplements) should extend to OTC medical devices. Hearing aids, blood-glucose monitors, blood-pressure cuffs, taVNS devices, red-light panels — all have jurisdiction-stratified regulatory access. The skill should require a device-jurisdiction strip for any device named in the home OTC layer.

### Observation 4 — The audiology assessment battery is the under-specified layer for tinnitus specifically

The dossier's self-administered scoring battery (TFI + THI + slider + PSQI + ISI + GAD-7 + PHQ-9) is appropriate for at-home tracking. What is missing is the audiologist-administered diagnostic battery and the rule for when to escalate to it. A patient who does only the home scoring battery for 6 months and never gets bone-conduction, tympanometry, acoustic reflexes, or speech-in-noise testing has a meaningful diagnostic gap — they may be missing a vestibular schwannoma, an otosclerosis, a Ménière, a hyperacusis, or a conductive component.

**Skill implication:** The §11.3 / §11.4 split (self-administered vs clinic-administered) should be explicit in every dossier where a clinic test is materially superior to a self-test for ruling out a treatable comorbidity. Currently the dossier conflates them.

### Observation 5 — The MRI-trigger threshold is the single most important clinical-workflow detail missing from this dossier

A 6-month delayed vestibular schwannoma diagnosis is a real clinical harm. The trigger threshold (asymmetric SNHL ≥15 dB at two adjacent frequencies) is a small, specific, clinically-load-bearing piece of information that the dossier currently does not surface. A patient with chronic asymmetric tinnitus who follows the home protocol without MRI is at non-trivial risk for a delayed tumour diagnosis.

**Skill implication:** Skill v7 should require an "MRI-trigger" or "imaging-trigger" section in any dossier where a treatable structural pathology is on the differential. Tinnitus → MRI for asymmetric SNHL or pulsatile or focal neurology. SSHL → MRI IAC mandatory. Migraine → MRI for atypical features. Vertigo → MRI for central signs. Headache → MRI for thunderclap, papilloedema, or focal signs. This is the structural-pathology rule-out layer that respects doctrine because it is referral, not treatment.

### Observation 6 — The Ménière + hyperacusis + misophonia + MES comorbidity universe is under-specified across the BrainEye domain

These four conditions are not tinnitus sub-types; they are co-conditions that change the workup and treatment. The dossier currently mentions them lightly or not at all. A real ENT clinic sees them weekly and the treatment pathways are non-interchangeable.

**Skill implication:** Skill v7 or v8 should require a comorbidity-vs-subtype distinction in any dossier with a complex comorbidity universe. Tinnitus, fibromyalgia, IBS, migraine, anxiety, chronic pain all have this pattern. Subtypes share a treatment pathway; comorbidities have separate treatment pathways and need separate routing.

---

## Storefront Posture for Wave-3

The wave-1 reviewer set the storefront-hold conditional on SSHL warning + K2 gate + eGFR Mg table + 12-q quiz. The wave-2 reviewer added: minimum-viable protocol + gradient AE table + audiologist-first SSHL escalation + real-world distributional table + Lenire demotion + bundle reconciliation.

The wave-3 (this review) audit suggests the storefront posture should be:

- **Ship the §8.0 minimum-viable protocol bundle (sound enrichment app + MBCT-T audio + magnesium glycinate + 4-minute somatic release) at scale.** This is robust to the wave-3 findings — it does not depend on audiologist routing, smartphone-audiogram validity, or comorbidity rule-outs being correctly specified in the dossier.
- **Defer the full §8 + §8.5 protocol bundle until wave-3 fixes ship.** A patient with hyperacusis who buys the full home stack and overuses earplugs is harmed by the dossier. A patient with chronic asymmetric tinnitus who buys the full home stack and never MRIs has a real delayed-diagnosis risk. The dossier's current state under-serves both.
- **Add a pre-bundle clinical-trigger quiz step.** Beyond the 12-q life-stage gate, add a pre-bundle screen: "(a) Is your tinnitus only in one ear? (b) Is one ear materially worse for hearing? (c) Does your tinnitus pulse with your heartbeat? (d) Does normal conversational speech feel uncomfortably loud to you? (e) Did your tinnitus start after head trauma, diving, or flying with a cold? (f) Do you have episodes of room-spinning vertigo with your tinnitus?" Any "yes" → route to "see a clinical audiologist or ENT before starting this protocol" — NOT to the bundle CTA.

This protects both the patient and the storefront's substantiation posture. The bundle remains defensible for the population it is built for — chronic, symmetric, non-pulsatile, non-hyperacusis-overlay, non-Ménière, non-conductive tinnitus — which is still ~50–60% of all chronic tinnitus presentations. The other ~40–50% need a different pathway and the dossier should route them there honestly.

---

## Concrete Edit List — What to Add to the Dossier in Wave-3

Numbered, ordered by clinical-harm priority:

1. **Add §11.4 Audiology assessment battery** — what an audiologist tests, what's self-administrable, when to escalate. Bone-conduction, tympanometry, acoustic reflexes, DPOAEs, speech-in-noise, residual inhibition, LDLs, HHIA.
2. **Add §11.5b MRI-trigger threshold** — asymmetric SNHL ≥15 dB at two adjacent frequencies OR ≥20 dB at any frequency → MRI IAC with gadolinium contrast. Pulsatile tinnitus → MRI + MRA + MRV first-line, HRCT temporal bone second-line.
3. **Add §11.5c Hyperacusis self-screen + treatment-divergence** — Khalfa ≥28/42 OR LDL <70 dB HL → sound desensitisation + TRT + CBT-for-hyperacusis. Explicit forbidding of earplug overuse with the why.
4. **Add §11.5d Misophonia distinction** — different mechanism, different treatment, route to CBT-for-misophonia.
5. **Add §11.5e Musical ear syndrome recognition** — complex auditory hallucinations + hearing loss → hearing-aid fitting, not psychiatric.
6. **Expand §11.5 Ménière block** — Bárány Society criteria, low-frequency fluctuating SNHL audiometric signature, betahistine as EU/AU/IN first-line, tighter <1500 mg sodium target, vestibular rehab cross-ref.
7. **Add conductive-component sub-type to §2.6** + exclusion/referral row to §11.6. Otosclerosis, otitis media with effusion, perforation, cholesteatoma → audiogram with bone-conduction before assuming four-driver model.
8. **Add post-trauma / post-barotrauma red-flag row** — PLF + SCD considerations.
9. **Replace pulsatile "arrange vascular imaging on your own initiative" with structured workup ladder** — bedside features, first-line MRI+MRA+MRV, second-line HRCT temporal bone, third-line DSA, specialty routing strip.
10. **Distinguish pulse-synchronous from non-pulse-synchronous pulsatile tinnitus** — different differential, different workup, different routing.
11. **Country-stratify the SSHL same-day pathway** — UK (GP→A&E→ENT on-call), DE (HNO-Arzt direct), FR (GP→ORL or A&E ORL), AU (audiologist→ENT or public ED), IN (tertiary hospital ENT OPD same-day), US (ENT direct or urgent-care). Replace the current 3-row prose with a 6+ row table.
12. **Add A&E patient-script** for SSHL — "sudden hearing loss" at triage, ENT on-call review before discharge, pushback on go-home-see-GP-Monday.
13. **Tighten the SSHL window framing** — replace "14-day window" with "72-hour optimal, useful out to 7–14 days with reducing yield." Aligns with SSHL sister-dossier.
14. **Add hearing-aid jurisdiction strip** — OTC US-only as of 2026; UK/EU/AU/IN/CA route through clinic audiology.
15. **Add Apple AirPods Pro 2 hearing-aid mode** as the global consumer-tech layer.
16. **Honest the smartphone-audiogram framing** — useful screen, ~30–50% miss-rate for mid-frequency notch loss, cannot distinguish conductive from sensorineural, cannot detect asymmetry threshold for retrocochlear workup.
17. **Expand §5.9 hearing-aid masking** — name six clinic-fit tinnitus-specific masker platforms (Widex Zen, Phonak Tinnitus Balance, Oticon Tinnitus SoundSupport, ReSound Tinnitus Relief, Starkey Multiflex, Signia Notch).
18. **Surface residual inhibition self-test** as a sound-therapy responder predictor.
19. **Add LDL self-screen** for hyperacusis detection.
20. **Add pre-bundle clinical-trigger quiz step** to the storefront — six questions routing high-risk patients to clinic referral before the bundle CTA.

---

## Closing — What This Audit Adds Beyond Waves 1 + 2

Waves 1 + 2 caught factual errors (Cima Maastricht not Bristol; Megwalu St Louis not Singapore; TENT-A2 year; EMA Ginkgo monograph indication; Lenire ITT vs completer), grade demotions (CBT/MBCT A→B; KSM-66 A→C; Lenire B→D; Bhramari B→H), and safety gates (SSHL window; K2 + warfarin; eGFR + Mg; pediatric melatonin). All correct, all load-bearing, all required.

What waves 1 + 2 did not catch — because their reviewer roles were biostatistics, EMA regulatory, advertising substantiation, pharmacovigilance, integrative-clinic PI — is the **clinical-workflow layer that a real ENT clinic sees every Tuesday morning.** A patient with hyperacusis is harmed by the home protocol. A patient with asymmetric SNHL who follows the home protocol for 6 months without MRI risks a delayed vestibular schwannoma diagnosis. A patient with conductive tinnitus from otosclerosis gets nothing from the §8 antioxidant stack but gets a stapedectomy from the right clinic. A patient with Ménière needs betahistine + a 1500 mg sodium target, not the looser 2000 mg target in §6.4. A patient with pulsatile tinnitus needs MRI + MRA + MRV in a specific order through a specific specialty, not "vascular imaging on your own initiative." A patient with a smartphone audiogram showing "no loss" may have significant mid-frequency notch loss and unrecognised conductive contribution.

These are referral and rule-out pathways. They respect the OTC + home + six-tradition + no-US-authority doctrine because they route the patient *into* the clinic when the clinic is what they actually need — and they keep the home protocol focused on the population it is built for. Adding them strengthens the dossier's honesty layer, not its commercialisation layer.

The dossier is closer than typical consumer health content. Waves 1 + 2 + 3 together get it close to a state where I would give it to a tinnitus patient in my Tuesday clinic as supplementary reading after their initial assessment. That is the bar this dossier is aiming for. Wave-3 fixes are what gets it there.

---

**End of wave-3 ENT + audiology review.**
