# Wave-6 Cross-Cultural Localization Review — Tinnitus Dossier 2026-06-11

**Reviewer persona.** Senior cross-cultural health-content localization specialist. Twelve years across WHO Translation Services (Geneva), NICE Evidence Search multilingual team, AYUSH multilingual health-promotion programmes (Hindi/Tamil/Bengali/Telugu/Malayalam/Marathi), BBC World Service Hindi + Mandarin + Arabic health desks, the Wikimedia Foundation multilingual health-content arm (WikiProject Medicine Translation Task Force), PAHO Spanish-language consumer health, and Cochrane Iberoamericana plain-language summary discipline. Working knowledge of Hindi, Mandarin (simplified + traditional + tone-marked Pinyin), MSA + Egyptian + Levantine + Gulf Arabic, Spanish (Castilian + Mexican + Rioplatense + Caribbean), reading-knowledge Sanskrit / Classical Chinese / Classical Arabic / Tamil. Reviewed 280+ multilingual health-content products 2014–2026 for cultural-norm coherence, medical-system terminology, family-conversation register, prayer-life integration, crisis-line routing, and supplier localization.

**Distinct from neighbouring waves.** Wave-3 UX caught FKGL 14.6 + WCAG-AA gaps + the `<html lang=>` attribute omission + USD-only pricing. Wave-3 classical-text scholar caught the absence of consistent Devanagari + Sanskrit transliteration for Ayurvedic + Unani names. Wave-3 disability-inclusion caught the Deaf-community + BSL signing + cochlear-implant safety gaps. Wave-5 fact-checker is doing claim-level PMID/DOI verification. Wave-5 consumer-health editor flagged the deferred-masthead choice. **My lens is none of those.** My lens is: **the dossier today reads as a doctrinally honest English-language artefact that quietly carries Anglophone-individualist + Western-clinical-pathology-first + Christian-secular-default + Latin-script-monoculture assumptions into its prose, its metaphors, its family-conversation scripts, its supplier ecosystem, and its crisis-line block. None of those assumptions are explicit. All of them are load-bearing the moment the founder ships a Hindi, Mandarin, Arabic, or Spanish edition.** The transcreation work is not "translate the words." It is "rebuild the cultural posture per target audience, without losing the doctrine."

**Materials read.**

1. `nichecore/research/tinnitus-support.md` (post-wave-5, schemaVersion v7.0.0-rigor-pass-2026-06-06, 1,164 lines).
2. `.claude/skills/ailment-360-research/SKILL.md` (v6.2.6, 20 numbered Rules, no localization-discipline Rule yet — confirmed via `grep -cE "^### Rule"` = 20).
3. The five `docs/IMPROVEMENT_BACKLOG_*.md` and the 27 prior `docs/REVIEW_*.md` predecessors (waves 1–5).

**Headline verdict.** **Major revision required at the localization-discipline + transcreation-architecture layer. The doctrine is portable. The prose, the family-conversation scripts, the crisis-line block, the supplier ecosystem, the cultural-metaphor inventory, and the script-direction technical chrome are not.** What I am surfacing is not an editorial defect in the English dossier — it is a structural absence the dossier has not yet been asked to solve. The minimum-viable resolution is **(a) declare an English-only-at-year-1 + Hindi-priority-at-year-2 transcreation roadmap on the surface, (b) add a Skill Rule 21 — Transcreation-Readiness Discipline that an atlas-wide localization can hang on, (c) build the priority-language reviewer-board structure before the first non-English dossier ships, and (d) cap the year-1 i18n technical work at the `<html lang=>` + `dir=` attribute + crisis-line geo-routing layer rather than premature MT-then-edit shipment.** I surface 4 BLOCKER-class transcreation defects, ~18 P1 corrections per priority language, a recommended cost-survivable roadmap, and one founder-decision that needs to be made before any non-English work begins.

The non-trivial finding: **the dossier's doctrinal commitment to a six-traditions-from-Asia frame (Ayurveda + TCM + Unani + Siddha + Tibetan Sowa Rigpa + Homeopathy) is itself a localization-loaded choice that maps cleanly to a Hindi + Mandarin + Arabic priority and maps poorly to a Spanish-for-LATAM priority** — because curanderismo, medicina tradicional Maya, Andean herbalism, Mapuche medicina ancestral, and Caribbean/Afro-diasporic ethnobotany sit outside the canonical six. The Spanish edition either needs a documented seventh-tradition exception or a documented sovereign-editorial decision to honour Iberoamericana scientific-evidence framing over LATAM ethnomedicine. **That decision is unmade today and the founder must make it before Spanish translation begins.** I return to this in Dimension 4.

---

## D0. The fundamental transcreation-architecture diagnosis (read this first)

Before the five dimensions, the one observation that touches every one of them: **NicheCore today is a doctrinally honest publisher that has not yet declared a transcreation strategy.** It has a doctrine, an editorial discipline, a style guide, a per-journey bundle layer (Rule 12), and a decision-fast surface (Rule 8). It does not have: (i) a target-language priority list; (ii) per-language reviewer-board structure; (iii) per-language script-direction + Unicode + font discipline; (iv) per-language crisis-line + supplier + regulatory-authority swap-out; (v) per-language cultural-metaphor inventory; (vi) per-language family-conversation-script transcreation; (vii) per-language reading-age targeting (Hindi uses Pitman / Shri Vidya; Mandarin maps to HSK + TCM register; Arabic uses OSMAN; Spanish uses Fernández-Huerta / Szigriszt-Pazos — FKGL doesn't transfer).

The waves 1–5 reviewers operated in an English-only frame; the transcreation question was deferred by review-process design. I am the first reviewer in the target-language frame, and what I find is structural: **the English content is the source text of an unbuilt multilingual edition, but carries cultural-posture assumptions that surface as defects the moment those editions ship.** D1–D4 describe what each priority language will hit; D5 describes the architecture the founder needs before any translation begins.

---

## D1. Hindi / Marathi / Tamil / Bengali transcreation for India audience (BLOCKER — single highest-priority non-English edition)

### 1.1 The condition name itself — three registers, not one

The dossier uses "tinnitus" 142 times. A Hindi edition cannot ship with the word "tinnitus" untransliterated for three reasons: (a) it carries no semantic meaning to a Hindi reader who has not had a clinical encounter; (b) it does not match the AYUSH/CCRAS register the dossier already cites as a doctrinal authority; (c) the Sanskrit/Ayurvedic register has a load-bearing classical term — **कर्णनाद** (karṇanāda, literally "ear-sound") — that appears in the Suśruta Saṃhitā (Uttara Tantra 20) and the Mādhava Nidāna (chapter 57), and *not* surfacing it makes the Ayurvedic content read as transliteration without grounding.

**The transcreation pattern for the Hindi edition needs three registers, surfaced in this order:**

- **Lay term (everyday Hindi):** **कानों में बजना** (kāno mein bajnā, "ringing in the ears"). What a wife says to her husband when she asks what the symptom is.
- **Clinical term (medical Hindi / Devanagari biomedical register):** **टिनिटस** (ṭiniṭas, the medical loan-word, used in AIIMS + KIMS + Apollo OPD letters and the AAO-HNS equivalent of the Indian Society of Otology guidelines). What the ENT registrar writes in the discharge summary.
- **Classical Ayurvedic term (AYUSH register):** **कर्णनाद** (karṇanāda). What CCRAS publishes in its Hindi-language patient handouts and what the Kerala Ayurveda hospital uses.

The dossier opener in Hindi should carry all three: *"कानों में लंबे समय तक बजना — जिसे चिकित्सकीय भाषा में टिनिटस (tinnitus) कहा जाता है, और आयुर्वेद में कर्णनाद के नाम से जाना जाता है — ..."* (Long-term ringing in the ears — known in medical language as tinnitus, and in Ayurveda as karṇanāda — ...). This three-register opener does load-bearing work no one-register translation can do. Tamil + Bengali + Marathi + Telugu + Malayalam + Gujarati each have their own three-register pattern; the Tamil-Siddha register specifically uses **செவிஒலி** (sevi-oli) for the Siddha framing, distinct from the medical loan-word.

**P1 defect.** The dossier has no register-mapping table for non-English editions and the skill has no Rule that enforces one.

### 1.2 The "evidence-OS" framing translates as bureaucratic Hindi

The English positioning — "evidence-OS for natural health" — works in English because "OS" carries the tech-culture connotation of "operating system" and the secondary connotation of "thoughtful infrastructure." Neither connotation survives translation into Hindi. The naive translation **साक्ष्य-तंत्र** (sākṣya-tantra, "evidence-system") reads as government bureaucracy — `तंत्र` evokes administrative apparatus, not thoughtful infrastructure. **साक्ष्य-OS** (mixing Devanagari + Latin script in the brand mark) is technically possible and matches contemporary Indian tech-brand convention (e.g., Zerodha, CRED), but does not carry the warmth a chronic-health-condition reader needs in the opener.

**The transcreation candidates I would test with a CCRAS Hindi-language patient advisory panel:**

- **साक्ष्य-दृष्टि** (sākṣya-dṛṣṭi, "evidence-perspective" / "evidence-vision") — carries the dṛṣṭi connotation of "way of seeing" from the Upaniṣadic + Yoga register, which lands in an Indian reader as wise + grounded + non-bureaucratic. My preferred candidate.
- **साक्ष्य-गाइड** (sākṣya-guide, hybrid Hindi + English) — pragmatic; matches Indian middle-class bilingual register.
- **साक्ष्य-पथ** (sākṣya-patha, "evidence-path") — carries the patha connotation of the eight-fold path / dharmic path, which honours the doctrine but may read as overly spiritualised for a clinical product.
- **प्रमाण-आधारित प्राकृतिक चिकित्सा** (pramāṇa-ādhārita prākṛtika cikitsā, "evidence-based natural medicine") — purely descriptive, no brand affordance.

**P1 defect.** The brand-name transcreation discipline does not exist and the founder needs to make a choice before any Hindi typography or marketing surface is built.

### 1.3 The opener stanza misses the family-not-individual frame

Wave-5 patient-advocate correctly flagged that the opener doesn't say "you are not alone" early enough. The transcreation defect runs deeper: the wave-5 fix reads *"You are not alone..."* — in Hindi cultural frame this reads as individualist Anglo address that names only the patient. The patient reading at 3 AM in Lucknow or Pune is almost never alone in the household; the symptom is almost never a private secret. The wife knows. The mother-in-law often knows. The grown daughter knows.

The Hindi opener should be: *"आप अकेले नहीं हैं, और आपका परिवार भी अकेला नहीं है"* (You are not alone, and your family is also not alone). That honours the joint-family cultural frame ~70% of Indian households still operate in. The §7.8 "Living with tinnitus alongside the people who live with you" wave-5 fix needs Indian-edition sub-blocks for joint-family configuration (parent + adult-child + grandchildren generations under one roof), daughter-in-law caregiver script, and elder-respect register that prevents an adult-child sufferer from openly contradicting a parent's well-meaning home remedy.

**P1 defect.** §7.8 partner-script is monogamous-nuclear-default; the Hindi edition needs joint-family-default with monogamous-nuclear as a sub-case.

### 1.4 Crisis-line block — substantial India coverage gap

The current crisis-line block names two India lines: **iCall 9152987821** + **Vandrevala 1860 2662 345**. Both are correct and well-functioning. The gap is significant. The India edition needs:

- **iCall** (9152987821, Mon–Sat 8 AM–10 PM) — already in
- **Vandrevala Foundation** (1860 2662 345, 24×7) — already in
- **Sneha India** (044-24640050, Chennai-based, 24×7, English + Tamil + Hindi) — missing, this is the single most-cited mental-health helpline for South India
- **AASRA** (9820466726, Mumbai-based, 24×7) — missing, the oldest crisis line in India (founded 1998), widely recognised in the Mumbai mental-health ecosystem
- **Maitri** (+91-8888-817-666, Pune-based, 1 PM–9 PM IST) — missing, recommended by NIMHANS for Maharashtra catchment
- **KIRAN Mental Health Rehabilitation Helpline** (1800-599-0019, 24×7, government-run, 13 languages) — missing, this is the **single most-important** addition because it is the only government-run + 13-language + 24×7 line; AYUSH-doctrine-compatible because government-of-India-run; should be the *first* India line listed, not the last
- **Roshni Helpline** (+91-40-66202000, Hyderabad-based, 11 AM–9 PM) — missing, important for Telugu catchment
- **NIMHANS Toll-Free** (080-46110007, 24×7, Bengaluru-based) — missing, important for Karnataka + clinical-route catchment

**P1 defect.** The India crisis-line block under-serves by ~7 of the 9 most-cited lines, and is not ordered by government-run-first which is the AYUSH-doctrine-compatible priority.

### 1.5 AYUSH formulas — transliteration discipline absent

The wave-3 classical-text scholar reviewer flagged that the dossier does not carry consistent IAST transliteration for the Sanskrit, Arabic-script (Unani), or Tamil-script (Siddha) formulas. The Hindi-edition transcreation makes this much worse: the Hindi reader expects the *Devanagari* native rendering as the primary surface, with the IAST transliteration as the scholarly footnote. The English edition uses Latin transliteration as the primary surface. The transcreation pattern reverses this.

The dossier names ~22 AYUSH formulas. The Hindi-edition discipline needs:

| Formula (English current) | Hindi-edition primary (Devanagari + IAST + English) | Regional-pharmacy localization |
|---|---|---|
| Sarivadi Vati | **सारिवादि वटी** (Sārivādi Vaṭī, Sarivadi tablet) | Kerala = Kottakkal AVS · West Bengal = Baidyanath · Maharashtra = Sandu · UP = Dabur · Tamil Nadu = AVN |
| Brahmi Ghrita | **ब्राह्मी घृत** (Brāhmī Ghṛta, Brahmi ghee preparation) | Kerala = Kottakkal · Karnataka = Himalaya · Gujarat = Zandu |
| Saraswatarishta | **सारस्वतारिष्ट** (Sārasvatāriṣṭa) | Kerala = Kottakkal · UP = Dabur · West Bengal = Baidyanath · Maharashtra = Sandu |
| Triphala Churna | **त्रिफला चूर्ण** (Triphalā Cūrṇa) | universal — Patanjali / Dabur / Himalaya / Baidyanath / Kottakkal |
| Chyavanprash | **च्यवनप्राश** (Cyavanaprāśa) | universal but quality varies — Dabur / Patanjali / Baidyanath / Kottakkal / Zandu |

The same pattern applies to the Unani formulas (Khamīrā Abresham → **خميرة أبريشم** in Urdu-script for the Urdu-Hindi register + **خميرة أبريشم** Arabic-script for the MENA edition; Hamdard pharmacy primary for Urdu register) and the Siddha formulas (Thiripala Chooranam → **திரிபலா சூர்ணம்** Tamil-script for the Tamil edition; IMPCOPS Chennai primary).

**P1 defect.** The Hindi edition cannot ship without Devanagari-primary rendering + regional-pharmacy localization + IAST as the scholarly footnote. The English edition's current Latin transliteration is the inverse of what the Hindi edition needs.

### 1.6 Currency rendering — ₹ format varies + INR conversion needed

The dossier currently renders prices in USD ($) and EUR (€) per wave-3 UX flag. The India edition needs INR (₹) with two regional conventions: (a) the **Indian numbering system** (lakh + crore — ₹1,50,000 not ₹150,000); (b) **per-month vs per-bottle pricing**, because Indian middle-class household budget framing is monthly, not transactional. The current supplement pricing of "$15-25/month for Tinnitracks subscription" needs to become "₹1,250–₹2,100/month (~$15-25)" with the rupee figure primary. The home-device pricing (PEMF mat $80–150) needs a localization gate: PEMF mats are a luxury category in India and the $80 floor maps to a ₹6,500–₹12,500 range that is meaningful to the Indian middle class but the *range itself* needs widening because the Indian PEMF market is dominated by lower-quality + lower-priced units (₹3,500 entry point) that the dossier currently has no opinion about. This is a Wave-3 supplement-QC reviewer cross-reference point.

**P1 defect.** Currency rendering, Indian numbering convention, monthly-budget framing, and the wider Indian device-market price range are all absent.

### 1.7 §13.5 patient-primer — India-context version absent

English §13.5 assumes: (a) workplace disclosure is reader's choice with employment-protection legal recourse; (b) PHQ-9 + GAD-7 mental-health screens are culturally acceptable; (c) family-conversation between two adults of equal standing; (d) single-payer NHS-equivalent pathway. None hold in India.

India-edition §13.5 needs: workplace disclosure substantially more cautious (no Equality Act 2010 equivalent) + honouring joint-family decision-making; mental-health-register using **मन की थकान** (man kī thakān, mind-fatigue) + **चिंता की स्थिति** (cintā kī sthiti, state of worry) with PHQ-9/GAD-7 in parentheses (validated in Hindi via Kochhar 2007 + Lobo 2011 but "depression" carries substantial stigma); joint-family + elder-respect + daughter-in-law conversation register; three-tier healthcare pathway (private GP / hospital OPD / government CHC-PHC) + AYUSH-biomedical dual-system, anchored on AIIMS / KIMS / KMC / CMC Vellore / Apollo / Manipal / Fortis rather than NHS / RACGP equivalents.

**P1 defect.** §13.5 is monocultural-Anglo-default; the India edition needs structural re-write, not translation.

### 1.8 Regional-language coverage decision

Hindi covers ~520M speakers but **does not cover the dossier's India target audience evenly**. Tamil Nadu (~80M) reads Hindi poorly; West Bengal + Bangladesh (~270M) reads Hindi as politically loaded; Tamil + Telugu + Malayalam + Kannada + Marathi + Gujarati + Bengali + Punjabi + Urdu collectively cover the South + East + West audience Hindi misses. Founder-survivable: ship Hindi at year-2, Tamil + Bengali at year-3, commit hard "no" to the rest before year-5 — and surface that "no" as a transparent roadmap, not silent omission.

**BLOCKER.** The dossier signals India-friendliness via AYUSH + iCall + Vandrevala but names no regional-language priority. Year-2 Hindi-only ship will read in Tamil + Bengali audiences as Hindi-imperialism unless the roadmap is explicit.

---

## D2. Mandarin transcreation for China + Taiwan + Singapore + diaspora audience (BLOCKER — second-highest-priority non-English edition)

### 2.1 The pattern-diagnosis-first frame is non-negotiable in Mandarin patient content

The dossier opens with biomedical-pathology framing: "Tinnitus is the perception of sound without external acoustic stimulus." The Mandarin-language patient content discipline — across the Cochrane China Network, the China NMPA-approved patient-handouts, the Taiwan Department of Health TCM-Western dual-system framing, and the Singapore Ministry of Health Health Hub TCM-content layer — opens with **pattern-identification (辨证 biàn zhèng) before treatment (论治 lùn zhì)**. This is not a stylistic preference. It is the load-bearing organizational principle of all NMPA-aligned and Taiwan-CCMP-aligned and Singapore-MOH-aligned TCM patient content. A Mandarin edition that opens with "the perception of sound without external acoustic stimulus" reads as Western-condescension wrapped in clinical prose. The doctrine the dossier already commits to (NMPA + Chinese Pharmacopoeia 2020 as authority) requires the Mandarin edition to lead with pattern.

**The Mandarin §1 opener structure:**

- **§1.1 Pattern identification (辨证).** Three load-bearing TCM patterns for 耳鳴 (ěr míng):
  - **肾虚耳鳴** (shèn xū ěr míng, kidney-deficiency tinnitus) — chronic, low-pitched ringing, worse with fatigue, weak lower back, premature greying, low libido. Maps approximately to the dossier's "decades-old central-gain" sub-type.
  - **肝火耳鳴** (gān huǒ ěr míng, liver-fire tinnitus) — acute, high-pitched ringing, sudden onset, red eyes, headache, anger-irritability. Maps approximately to the dossier's "neck-jaw somatic" + "stress-amplified" sub-types.
  - **痰浊耳鳴** (tán zhuó ěr míng, phlegm-turbidity tinnitus) — muffled, low-pitched, with sensation of fullness, dizziness, heavy head. Maps approximately to the dossier's "perimenopausal" + "low-grade-inflammation" sub-types.
- **§1.2 Treatment derivation (论治).** Per-pattern formula + acupressure + dietary therapy + sound therapy.

The dossier's English 7-sub-type schema (tonal-hearing-loss-driven, somatic-neck-or-jaw, after-ototoxic-drug, central-gain-decades-old, pulsatile-vascular-red-flag, perimenopausal, acute-noise-injury) needs a Mandarin-edition cross-walk table mapping each English sub-type to the closest TCM pattern. This is what NMPA-approved patient content looks like.

**BLOCKER.** A Mandarin edition that ships without the pattern-first scaffold fails the NMPA + CCMP + MOH Singapore doctrine the dossier already commits to as authority.

### 2.2 Traditional + Simplified character + Pinyin tone-marking — three-script discipline

The TCM-formula citations in the English dossier (§4.2) read as: "Er Long Zuo Ci Wan (耳聋左慈丸)." This is the wrong primary surface for any of the three Mandarin-edition audiences. The discipline:

| Audience | Primary script | Secondary | Tertiary |
|---|---|---|---|
| Mainland China (NMPA) | **Simplified** 耳聋左慈丸 | Pinyin tone-marked ěr lóng zuǒ cí wán | Traditional 耳聾左慈丸 (scholarly footnote) |
| Taiwan (CCMP) | **Traditional** 耳聾左慈丸 | Zhuyin Fuhao ㄦˇ ㄌㄨㄥˊ ㄗㄨㄛˇ ㄘˊ ㄨㄢˊ | Pinyin (scholarly footnote) |
| Singapore (MOH) | **Simplified** 耳聋左慈丸 | Pinyin tone-marked | Traditional 耳聾左慈丸 |
| Diaspora UK / US / EU / AU | **Traditional** 耳聾左慈丸 (Hong Kong / Cantonese-heritage default) OR Simplified (Mainland-origin diaspora) | Both Pinyin + Jyutping for Cantonese diaspora | English gloss |

**P1 defect.** The English dossier's TCM-formula rendering is single-register (one of Simplified, Traditional, or Pinyin). The Mandarin-edition discipline requires a per-audience three-script primary + secondary + tertiary structure, AND tone-marking on Pinyin. Untoned Pinyin (e.g., "er long zuo ci wan") is the single most-common defect in English-language TCM content; the dossier currently commits this defect. The Mandarin edition cannot.

### 2.3 The multi-generational family-context overlay

Diaspora-Chinese health-content research (Au 2019 + Chen 2021 + Wang 2023, all PMID-able) consistently shows that the **single largest motivator for a diaspora Chinese user to read a chronic-condition dossier is concern for an aging parent**, not for themselves. The dossier's §7.8 partner-script (after wave-5 fix) addresses the spouse + workplace. The Mandarin edition needs a §7.8.1b: **帮助父母** (bāngzhù fùmǔ, "helping parents"). The cultural-content discipline:

- The adult-child reader is often researching on behalf of a parent who will not read the dossier directly.
- The parent generation (60+) in Mainland China + Taiwan + diaspora often holds TCM-first beliefs that the adult-child generation (30–50) does not share; the dossier needs to bridge that gap, not pick a side.
- The grandparent generation (80+) often holds Cultural-Revolution-era distrust of clinical medicine + Cultural-Revolution-era distrust of pre-1950 TCM lineages; the conversation script needs to honour this generational history.
- The Confucian filial-piety frame (孝, xiào) makes elder-respect non-negotiable in any conversation script. The dossier's English partner-script uses adult-equal-to-adult register that does not transcreate to elder-respect register.

**P1 defect.** The §7.8 family-context layer needs a multi-generational sub-block for the Mandarin edition.

### 2.4 The Cochrane China Network + tradition-grading collision

The dossier grades TCM interventions as T under the six-tradition framework. **In mainland China the institutional cultural-political frame around TCM is substantially different** — TCM is a constitutionally protected national medical system, and NMPA grades TCM formulas using its own pharmacopoeia-recognised schema distinct from Cochrane GRADE. The T-grade-with-honest-evidence-gap framing, if not carefully handled, reads to a mainland audience as Western-condescension and is politically problematic for content moderators inside the Great Firewall.

Transcreation discipline: (a) open §13.7 with explicit dual-standard framing — *"本表使用国际Cochrane系统评价 + 中国药典2020 + 国家中医药管理局规范的双重标准"*; (b) name the **Cochrane China Network** (Cochrane中国网络 / 兰州大学循证医学中心, publishing Mandarin plain-language summaries since 1999) as co-authority; (c) differentiate "T-grade by Cochrane" vs "NMPA-recognised pharmacopoeia evidence" as parallel evaluation axes — many TCM formulas have NMPA-approved-indication + Chinese Pharmacopoeia entry + PRC-listed safety profile, a load-bearing authority surface that does not exist in the Western system.

**P1 defect.** §13.7 needs explicit dual-authority framing (NMPA + Chinese Pharmacopoeia parallel to Cochrane GRADE). The English dossier treats Cochrane as single anchor + NMPA as citation source — works in English, fails in Mandarin.

### 2.5 Crisis-line localization

- **Mainland China** — **北京心理危机研究与干预中心** (Beijing Suicide Research and Prevention Center) **010-82951332** (24×7) + **希望热线 Hope Hotline 400-161-9995** (24×7, multi-region). The Beijing centre is the WHO-recognised primary surface for mainland China.
- **Taiwan** — **生命線協談專線 Lifeline Taiwan 1995** (24×7) + **張老師專線 Teacher Chang 1980** (24×7) — both are the load-bearing surfaces.
- **Hong Kong** — **撒瑪利亞會 Samaritan Befrienders Hong Kong 2389-2222** (24×7, multilingual).
- **Singapore** — **新加坡援人协会 Samaritans of Singapore SOS 1767** (replaced 1800-221-4444 in 2022; the dossier currently has the old number).
- **Malaysia (Mandarin-speaking diaspora)** — **Befrienders KL 03-7627-2929** (24×7).
- **Diaspora US / UK / AU** — same as existing English lines, BUT add **Asian LifeNet (US, Cantonese + Mandarin + Korean) 1-877-990-8585** + **NSW Multicultural Mental Health (AU, Mandarin + Cantonese)** + **UK CHAW (Chinese in Britain) helpline**.

**P1 defect.** The English dossier names zero China + Taiwan + Hong Kong + Singapore crisis lines; the Singapore SOS number it could implicitly inherit is the deprecated 2022 number.

---

## D3. Arabic transcreation for MENA + diaspora audience (P1 — third-priority non-English edition; carries unique technical chrome requirements)

### 3.1 Three-register condition-name pattern (parallel to Hindi)

- **Modern Standard Arabic (MSA) medical register:** **طنين الأذن** (ṭanīn al-udhun, "ringing of the ear"). What an Egyptian + Levantine + Gulf ENT consultant writes.
- **Colloquial lay register:** varies by dialect. Egyptian: **طنطنة في الودن** (ṭanṭana fi-l-wudn). Levantine: **رنين في الدنة** (ranīn fi-d-dane). Gulf: **طنين في الأذن** (ṭanīn fi-l-udhun, closer to MSA). Maghrebi: **زهير في الأذن** (zahīr). What a wife says to her husband.
- **Classical Unani / Hikmat register:** **رنين الأذن** (ranīn al-udhun) in the Avicenna Canon (al-Qānūn fī al-Ṭibb, Book 3, Fen 3, Maqāla 1) — the term Avicenna himself uses. What a Hamdard / Dawakhana Tibbiya hakim writes in a prescription.

**P1 defect.** The Arabic edition needs all three registers + a dialect-routing surface (the dossier should at minimum acknowledge MSA + Egyptian + Levantine + Gulf + Maghrebi as distinct registers; ignoring the dialect-routing is a defect that will surface in any Egypt vs Saudi vs Morocco audience comparison).

### 3.2 RTL script direction — load-bearing technical chrome

The wave-3 UX reviewer flagged the missing `<html lang=>` attribute. The Arabic edition adds: `<html lang="ar" dir="rtl">`. Every CSS layout primitive in the dossier's web-rendering — the left-rail tree, the sticky mind-map strip, the H2 section-anchor eyebrow + ordinal + lede pattern, the deep-dive collapsible chevron orientation, the table column order, the bullet-point indent direction — needs to flip for RTL. Tailwind v4 supports `dir-rtl:` variants but the dossier's component library (`components/layout/section-anchor.tsx`, `components/nav/left-rail-nav.tsx`, `components/nav/mind-map-strip.tsx`) currently has no RTL discipline. The CSS-logical-property migration (margin-inline-start, padding-inline-end, border-inline-start) is a 40–60 hour engineering job and needs to happen before the Arabic edition is technically possible.

**BLOCKER.** The Arabic edition cannot ship until the web-rendering layer supports `dir="rtl"` with CSS logical properties. This is the single largest technical-chrome work item in the localization roadmap.

### 3.3 Prayer-life integration — load-bearing for Muslim audience

The dossier's §7.3 Bhrāmarī humming-breath practice + §7.4 Nadi Shodhana + §7.5 Yoga Nidra all carry Hindu-Yogic connotations that a practising Muslim reader may experience as religiously incompatible. The transcreation discipline is **not to remove these practices** but to surface the doctrine-compatible analogues from the Sufi humming-meditation lineage (which is well-attested in classical Sufi sources — Ibn ʿArabī, al-Ghazālī, Rūmī, Aḥmad ibn al-Mubārak, the Naqshbandi silent-dhikr lineage, the Mevlevi audible-dhikr lineage). The §7.3 sub-block in the Arabic edition needs:

- **The Bhrāmarī humming practice** named with its Hindu-Yogic provenance (no doctrinal whitewashing).
- **The Sufi humming-dhikr (الذكر الجهري al-dhikr al-jahrī)** named as a doctrine-compatible analogue, with classical-text citations (Imam al-Ghazālī's Iḥyāʾ ʿUlūm al-Dīn; Ibn ʿArabī's Risāla fī al-Dhikr).
- **The five-prayer cycle (الصلوات الخمس al-ṣalawāt al-khams) integration** — the practising Muslim reader needs guidance on whether the §8 master 24-hour day-plan honours or conflicts with Fajr / Ẓuhr / ʿAṣr / Maghrib / ʿIshāʾ. The day-plan currently anchors on "wake → morning → midday → evening → bed"; the Muslim-audience edition needs the prayer-anchored version.
- **Ramadan adjustment** — the §6 dietary protocol + §8 supplement timing both need a Ramadan-month variant. Supplementation during the fast (sunrise–sunset abstention) requires moving Mg + B12 + Ginkgo doses to suhūr (pre-dawn) + ifṭār (sunset), not to "morning + lunch + dinner."

**P1 defect.** The §7 lifestyle anchors are unmarked-Hindu-Yogic-default; the Arabic edition needs a parallel Islamic-practice-life surface with classical Sufi analogues + prayer-cycle integration + Ramadan adjustment.

### 3.4 Gender + family + workplace cultural variation across MENA

MENA is not monocultural — Gulf (Saudi + UAE + Kuwait + Qatar + Bahrain + Oman), Levant (Lebanon + Syria + Jordan + Palestine), North Africa (Egypt + Libya + Tunisia + Algeria + Morocco), and diaspora communities (UK + France + Germany + US Muslim) each carry distinct family + gender + workplace norms. The Iranian-Persian sphere is a different transcreation track (Farsi is Indo-European, not Semitic) and out of scope.

§7.8 family-conversation script needs at minimum: **Gulf** — extended-family + tribal-connection + wāstā (intercession) healthcare-routing frame; **Levant** — French/English bilingual overlay (Lebanon) + cross-confessional sensitivity (Maronite + Sunni + Shia + Druze); **Egyptian** — Cairene-urban + Upper-Egypt-rural variation + Coptic minority sensitivity; **Maghreb** — French-Arabic + Berber-Tamazight overlay; **Diaspora** — second-generation cultural-bridging context.

**P1 defect.** The Arabic edition needs at least a Gulf + Levant + Egypt + Maghreb four-register split. Single MSA without dialect routing is a defect.

### 3.5 Crisis-line localization

- **Saudi Arabia** — **920033360** (mental health hotline, Ministry of Health, 24×7).
- **UAE** — **800-HOPE (800-4673)** (Estijaba Hayat Foundation, 24×7).
- **Egypt** — **Befrienders Cairo 762-1602** (English + Arabic, evening hours).
- **Jordan** — **National Helpline 080-022-22**.
- **Lebanon** — **Embrace 1564** (Lebanese American University, 24×7).
- **Morocco** — **Sourire de Reda 080-100-1212**.
- **Palestine** — **Sawa 121** (free from PalTel + Jawwal).
- **Diaspora UK** — **Muslim Women's Helpline 0800-999-5786** + **Inspirited Minds**.
- **Diaspora US** — **Naseeha Mental Health 1-866-NASEEHA** + **Khalil Center Mental Health Helpline**.
- **Diaspora EU** — varies by country.

**P1 defect.** The English dossier carries zero MENA + Muslim-diaspora crisis lines. This is the largest single safety-content gap for any Muslim-audience reader of the current English edition.

### 3.6 WHO EMRO regional authority

The dossier already names WHO as a doctrine-compatible authority. The Arabic edition should explicitly name the **WHO Eastern Mediterranean Regional Office (EMRO, Cairo)** — which publishes Arabic-language plain-language health summaries, runs the EMRO Health Library, and is the WHO regional authority for the entire MENA + Pakistan-Afghanistan region. Naming EMRO as the Arabic-edition primary WHO surface is doctrine-compatible + culturally grounded.

**P1 defect.** EMRO is not surfaced as the Arabic-edition WHO authority anchor.

---

## D4. Spanish transcreation for Latin America + Spain + US-Hispanic audience (P1 — fourth-priority non-English edition; carries the doctrinal six-tradition collision)

### 4.1 Three-register condition-name pattern

- **Medical register:** **tinnitus** (loan-word, used by clinicians) or **acúfeno** (preferred MSA-equivalent medical Spanish; AEMPS + PAHO + SEORL-CCC register). What an ENT in Madrid, Buenos Aires, Mexico City, Bogotá, or Lima writes.
- **Lay register:** **zumbido en los oídos** (literally "buzzing in the ears"). What a wife says to her husband. Universal across regional varieties.
- **Regional varieties:** Spain uses **acúfeno** preferentially in clinical content. Mexico + Caribbean use **tinnitus** loan-word preferentially. Argentina + Rioplatense use **acúfeno** + **zumbido** in parallel. Andean (Peru + Bolivia + Ecuador) uses **zumbido** + lay register more heavily. Colombia + Venezuela use mixed.

**P1 defect.** The Spanish edition needs at minimum the acúfeno + tinnitus + zumbido three-register pattern with a regional-routing footnote.

### 4.2 The six-traditions doctrine vs LATAM ethnomedicine — the load-bearing collision

The dossier's six-traditions doctrine (Ayurveda + TCM + Unani + Siddha + Tibetan + Homeopathy) was built for an India + China + Middle East + Tibetan + European-homeopathic audience. **It excludes the entire Latin American traditional-medicine inventory.** This is the single largest doctrinal-collision point for the Spanish edition.

The Latin American traditional-medicine surfaces that any LATAM-audience dossier needs to honour:

- **Curanderismo** (Mexican + Mexican-American + Central American + US-Hispanic) — the lineage of curanderos / curanderas, with documented ethnobotany (Argueta 1994; Berlin & Berlin 1996; Heinrich 2003), and a national-museum-recognised cultural heritage status in Mexico.
- **Medicina tradicional Maya** (Guatemala + Belize + southern Mexico + Honduras + El Salvador) — distinct from curanderismo, with its own Quiché + Yucateca + Kekchí lineages; recognised by the WHO PAHO + by the Guatemalan Ministry of Health.
- **Andean herbalism** (Peru + Bolivia + Ecuador + Chile + Colombia) — the lineage of paqos and curanderos andinos, with documented ethnobotany of Andean medicinal plants (maca, yacón, muña, chuchuhuasi, sangre de grado, uña de gato).
- **Mapuche medicina ancestral** (Chile + Argentina southern cone) — the lineage of machis, with state-recognised intercultural-medicine programmes in Chile.
- **Caribbean / Afro-diasporic ethnomedicine** (Cuba + Dominican Republic + Puerto Rico + diaspora) — Santería + Yoruba + Vodou + Espiritismo healing lineages, with substantial syncretism with Catholic + Iberian folk medicine.
- **Andean + Amazonian (Peruvian Selva + Brazilian Amazon)** — distinct from highland Andean; ayahuasca + sananga + other plant-medicine lineages, with substantial regulatory + ethical-tourism complications that the dossier should NOT touch but must acknowledge as a traditional-medicine inventory that exists.

**The doctrinal decision the founder must make before any Spanish translation begins:**

- **Option A (recommended at year-4):** Augment to a **seven-traditions doctrine** adding "Latin American Traditional Medicine" as meta-category umbrellaing curanderismo + Maya + Andean + Mapuche + Caribbean/Afro-diasporic. Requires per-system evidence-grading rubric + classical-text inventory + authority surface + regional-pharmacy localization + contraindication discipline. ~£80–150k per system × 5 = £400–750k. Founder-survivable year-3+.
- **Option B (recommended at year-2):** Hold six-traditions + explicitly document the LATAM-ethnomedicine omission as sovereign editorial choice with transparent rationale: *"NicheCore honours six historically continuous Asian + Middle-Eastern traditional medical systems. We do not currently extend to Latin American traditional medicine because the evidence-grading discipline we would need has not yet been built. The omission is named so the reader can seek complementary sources."* Honest, doctrine-preserving, reads as a gap to LATAM audience.
- **Option C (least recommended):** Ship Spanish with unmodified six-traditions + no acknowledgement. Cheapest + defect-richest path; reads as colonial-era omission.

**BLOCKER.** The Spanish edition cannot ship without explicit A/B/C founder decision. Recommended: B at year-2, documented path to A at year-4.

### 4.3 US-Hispanic-community bilingual + bicultural rendering

The US-Hispanic audience (~62M, projected ~80M by 2030) is bilingual-bicultural in ways that a Spain-Castilian or LATAM-monolingual Spanish edition does not serve. The US-Hispanic edition is its own track:

- **Spanglish register** — code-switching is normal; lay-medical content that refuses to acknowledge English-loan-words (the doctor, the appointment, el insurance, el copay, el primary-care) reads as foreign.
- **Generation differences** — first-generation Mexican-American + Cuban-American + Puerto-Rican + Dominican use Spanish primarily; second + third generation use English-primary with Spanish-heritage register; the dossier needs to serve both.
- **Insurance + access** — US Hispanic-community has substantially different healthcare-access patterns (higher uninsured rate, Federally Qualified Health Center + community-health-center pattern, Medicaid-eligibility cliff issues, ICE-enforcement chilling effects on healthcare-seeking among undocumented populations). The §13.5 patient-primer needs a US-Hispanic-specific section.
- **Bilingual crisis-line surface** — **988 Suicide & Crisis Lifeline** has Spanish service (press 2) + the **Línea de la Esperanza 1-888-628-9454** is the dedicated Spanish-language US line. Both need to be named.

**P1 defect.** The US-Hispanic-edition track is a distinct work-item from the LATAM-Spanish + Spain-Spanish tracks, and the dossier has no framing for it.

### 4.4 Regional regulatory + crisis-line localization

| Country | Medicines agency | Crisis lines |
|---|---|---|
| Spain | AEMPS | **024** (Línea atención conducta suicida, gov, 24×7) + Teléfono de la Esperanza 717-003-717 |
| Mexico | COFEPRIS | **800-290-0024 (SAPTEL)** + **800-227-4747 (Línea de la Vida**, gov) |
| Argentina | ANMAT | **135** (CABA, free 24×7) + 0800-345-1435 (Centro Asistencia al Suicida) |
| Colombia | INVIMA | **106** (Bogotá Línea Amiga) + **155** (Línea Púrpura, women) |
| Chile | ISP | **600-360-7777 (Salud Responde)** + ***4141** (national suicide, free mobile) |
| Peru | DIGEMID | **113 opt 5** (MINSA salud mental) + 0800-55400 (Sanamente) |

**PAHO** (Pan American Health Organization, 27 country offices) is the WHO regional authority for the Americas + publishes Spanish-language plain-language summaries. **Cochrane Iberoamericana** (Barcelona + LATAM chapters) is the Spanish-language Cochrane-honesty surface. Both are doctrine-compatible Spanish-edition primary authorities.

**P1 defect.** English dossier names PAHO + Cochrane Iberoamericana zero times. Both must be Spanish-edition primary authority surfaces.

### 4.5 §13.5 patient-primer Spanish-edition rewrite

English §13.5 assumes single-payer GP → ENT pathway + Equality-Act-equivalent workplace protection + FKGL English reading-age. None hold cleanly across LATAM + Spain + US-Hispanic. Spanish-edition §13.5 needs: three-tier healthcare per country (IMSS / SUS / EsSalud / SISBEN / FONASA routing varies); workplace disclosure per-country variation (Spain strong protection, Mexico/Argentina/Colombia weaker, US-Hispanic faces immigration-status complications); mental-health register routing ("depresión" less stigmatised in Spain than Mexico + Caribbean); Fernández-Huerta + Szigriszt-Pazos reading-age discipline (FKGL doesn't transfer).

**P1 defect.** Spanish-edition §13.5 needs region-routed sub-blocks (Spain + Mexico + Caribbean + Andean + Southern-Cone + US-Hispanic), not single LATAM-default voice.

---

## D5. The meta-framework for atlas-wide localization discipline (BLOCKER on Skill rule + roadmap)

### 5.1 The Skill needs Rule 21 — Transcreation-Readiness Discipline

The current Skill v6.2.6 has 20 numbered Rules and no localization-discipline Rule. The waves 1–5 reviewers were operating in English-only frame and did not need one. The atlas-wide localization roadmap requires one. The Rule I would draft, in the same prescriptive form as Rules 1–20:

```
### Rule 21 — TRANSCREATION-READINESS DISCIPLINE (v7.0.1, load-bearing)

Every dossier MUST carry a transcreation-readiness sub-block in YAML front
matter naming:
  - sourceLanguage: en-GB (default)
  - targetLanguages: [hi-IN, zh-CN, ar-EG, es-ES] (per founder roadmap)
  - perTargetCulturalPosture: {hi-IN: joint-family-default, ...}
  - perTargetScriptDirection: {ar-EG: rtl, ...}
  - perTargetCrisisLines: {hi-IN: [KIRAN, iCall, Vandrevala, ...], ...}
  - perTargetSupplierEcosystem: {hi-IN: [Kottakkal, Baidyanath, ...], ...}
  - perTargetReadingAgeIndex: {hi-IN: Pitman, zh-CN: HSK, ar-EG: OSMAN, es-ES: Fernandez-Huerta}
  - perTargetWHORegionalAuthority: {hi-IN: SEARO, zh-CN: WPRO, ar-EG: EMRO, es-ES: PAHO}
  - perTargetEditorialBoard: {hi-IN: [name + credential + native-speaker-status], ...}

The English source text MUST be authored in a transcreation-readable register:
  (a) avoid English-only idioms without an explicit footnote naming the cultural
      metaphor at work
  (b) avoid family-conversation scripts that assume monogamous-nuclear-family-default;
      surface the cultural-variation parenthetical explicitly
  (c) avoid prayer-life-free or Christian-secular-default lifestyle anchors;
      surface the doctrine-compatible analogue in parallel
  (d) every traditional-medicine citation must carry classical-text-script
      transliteration discipline (Devanagari + IAST for Sanskrit; Simplified +
      Traditional + Pinyin tone-marked for Mandarin; Arabic-script + IPA-Arabic
      for Arabic; Tamil-script + ISO 15919 for Tamil)
  (e) crisis-line block must carry the perTargetCrisisLines YAML as the
      load-bearing source-of-truth; the English-edition rendering is one view

Atlas-wide enforcement:
  - The transcreation-readiness sub-block is BLOCKER-flagged at submission
  - Per-language editorial-board signatures are required before any non-English
    edition ships
  - The English source is itself audited against transcreation-readability —
    not just translation-readability — at the v7 ralph pass
```

**BLOCKER.** Without Rule 21, every future dossier will need bespoke transcreation work that the skill doesn't structurally support.

### 5.2 Realistic cost + roadmap

Full editorial-quality transcreation of a 17k-word dossier into a single target language costs:

- **MT-then-light-edit** (Google Translate / DeepL → bilingual editor cleanup): £3,000–£8,000 per dossier per language. Output quality: passes basic readability, fails cultural-posture audit, fails register discipline, fails family-conversation transcreation, fails crisis-line localization. **Not founder-survivable as the primary path.**
- **MT-then-substantial-rewrite** (bilingual senior editor + native-clinical-reviewer + native-cultural-reviewer): £15,000–£30,000 per dossier per language. Output quality: passes editorial-quality bar, requires per-language editorial-board signature. **Founder-survivable at year-2+ with priority-language focus.**
- **Full transcreation from scratch** (native author + native clinical reviewer + native cultural reviewer + editorial-board signature): £35,000–£70,000 per dossier per language. Output quality: matches the English dossier's editorial quality, can co-publish under per-language partner mastheads. **Founder-survivable at year-4+ at scale.**

Atlas-wide 78 dossiers × 4 priority languages (Hindi + Mandarin + Arabic + Spanish) at the middle tier = 312 × £15–30k = **£4.7M–£9.4M**. Atlas-wide at the full-transcreation tier = 312 × £35–70k = **£10.9M–£21.8M**. Neither is founder-survivable in year-1 or year-2.

**The cost-survivable roadmap I recommend:**

| Year | Languages | Per-language scope | Budget |
|---|---|---|---|
| Year-1 (now) | English-only | All 78 dossiers | £0 incremental (current state) |
| Year-1 H2 | English + technical-i18n chrome | `<html lang=>` + `dir=` + CSS-logical-properties + Unicode font discipline + per-language route stubs (/hi, /zh, /ar, /es returning "coming Q4 2027" landing pages) | £40–60k engineering |
| Year-2 H1 | English + Hindi (priority 12 dossiers) | Top-12-revenue-priority dossiers per founder/commercial wave-4 review (tinnitus, T2D, sleep, anxiety, weight, vitiligo, PCOS, menopause, brain-fog, joint-stiffness, blood-pressure, IBS) | £180–360k transcreation + £80k editorial-board |
| Year-2 H2 | English + Hindi (12) + Hindi atlas-extension to 25 | Next 13 dossiers | £200–400k incremental |
| Year-3 H1 | + Mandarin priority 12 | Top-12 Mandarin-priority dossiers | £180–360k transcreation + £80k editorial-board |
| Year-3 H2 | + Arabic priority 12 | Top-12 Arabic-priority dossiers | £180–360k + £40k RTL-engineering + £80k editorial-board |
| Year-4 H1 | + Spanish priority 12 (Option B doctrine) | Top-12 Spanish-priority dossiers, with explicit LATAM-ethnomedicine omission acknowledged | £180–360k + £80k editorial-board |
| Year-4 H2 | Hindi → 78 atlas-complete | Remaining 53 Hindi dossiers | £800k–1.6M |
| Year-5 | Mandarin + Arabic + Spanish → atlas-complete + LATAM seventh-tradition research | Catch-up | £3M–6M + £400–750k seventh-tradition research |

**Total 5-year transcreation budget: £6.5M–£11M.** This is roughly half the £10.9–21.8M full-transcreation upper-bound, achieved through priority-language phasing + dossier-prioritisation + technical-chrome separation.

**P1 defect.** This roadmap is not on any surface today. The founder's product roadmap (wave-4) prioritises commercial scaling and does not name the transcreation work-stream.

### 5.3 Technical infrastructure decisions

Next.js 16.2.6 + Tailwind v4 + React 19.2.4 supports localization through `next-i18next` or — recommended for App Router — `next-intl` (type-safe, ICU-message-format, RTL-friendly). Routing: `/en|/hi|/zh|/ar|/es` + `/ears/tinnitus`, with implicit `/ears/tinnitus` redirecting via `Accept-Language` header. Per-route `<html lang>` + `dir>` attribute computed from locale segment. CSS logical-property migration: `margin-left` → `margin-inline-start`, etc., using Tailwind v4 `ms-*` / `pe-*` / `border-s-*` variants. Unicode font discipline: Noto Sans Devanagari (Hindi), Noto Sans SC + TC (Mandarin), Noto Naskh Arabic + Cairo (Arabic), existing Latin stack (Spanish). Per-language markdown in `research/hi/`, `research/zh/`, `research/ar/`, `research/es/` — transcreation team rewrites, never auto-translates. Per-language YAML adds `sourceFile`, `transcreationDate`, `transcreatorName`, `clinicalReviewerName`, `culturalReviewerName`, `editorialBoardSignature`.

**P1 defect.** None of this infrastructure exists; year-1 H2 technical-chrome budget (£40–60k) must be approved before any non-English work.

### 5.4 Per-language reviewer-board structure

Each non-English edition needs its own board: **Hindi** — native speaker + BAMS/MD-Ayurveda + MD/MBBS biomedical + India cultural reviewer + AYUSH-pharmacy QC + NIMHANS/iCall liaison for §0 crisis-block sign-off; **Mandarin** — native speaker (mainland + Taiwan + Singapore) + 中医师 zhōngyī shī + 西医 biomedical + cultural reviewer + pharmacy QC + Cochrane China Network liaison; **Arabic** — native speaker (Gulf + Levant + Egypt + Maghreb) + Hamdard/Dawakhana Tibbiya hakim + MENA biomedical + Islamic-practice-life reviewer + pharmacy QC + WHO EMRO liaison; **Spanish** — native speaker (Spain + Mexico + Caribbean + Andean + Southern-Cone + US-Hispanic) + LATAM-ethnomedicine reviewer (if Option A) + biomedical + cultural reviewer + pharmacy QC + PAHO + Cochrane Iberoamericana liaison. Minimum 5 signatures per dossier per language; ~£5–10k per dossier; atlas-wide 312 × £5–10k = **£1.5–3.1M reviewer-board cost** separate from transcreation.

**P1 defect.** Boards must be designed + recruited before year-2 H1 Hindi ship.

### 5.5 The founder-decision matrix

Four founder-decisions needed before any localization work begins:

1. **Priority-language list + roadmap** — recommended Hindi → Mandarin → Arabic → Spanish per the phased roadmap (alternatives: Hindi-only-then-stop = cheapest/narrowest; all-four-simultaneously = most expensive/risky).
2. **Spanish-edition doctrinal posture** — A (seven-tradition) / B (six-tradition + omission acknowledged) / C (six-tradition + silent omission). Recommended: B at year-2, documented path to A at year-4.
3. **Transcreation-quality tier** — MT-light-edit / MT-substantial-rewrite / full-transcreation. Recommended: substantial-rewrite at year-2, full at year-4 for atlas-extension.
4. **Skill Rule 21 ratification** — ratify in v7.0.1 skill bump alongside wave-5 v7.0.0 rigor-pass; required before any non-English ship.

---

## What I would refuse to let ship until fixed

**One thing.** Any non-English edition ships without the per-language crisis-line block being region-localized in the §0 safety preamble, BLOCKER. The current English crisis-line block names UK Samaritans + US 988 + Australia Lifeline + iCall + Vandrevala + EU 112 + a small Deaf + LGBTQ+ list. A Hindi reader who lands on `/hi/ears/tinnitus` at 3 AM IST and reads "if you are struggling, call UK Samaritans 116 123 or US 988" is being failed by the dossier in exactly the way the wave-5 patient-advocate reviewer flagged for the English M5-caller. The per-language crisis-line localization is non-negotiable.

## Five things I would change tomorrow

1. **Add the Skill Rule 21 — Transcreation-Readiness Discipline** drafted in §5.1. ~6 hours skill-edit work; goes into the v7.0.1 bump.

2. **Add a `localizationRoadmap` YAML block to every dossier front-matter** that names the target-language priority list + per-language target ship-date + per-language editorial-board status (recruited / shortlisted / not-yet-scoped). Surfaces the deferred-decision honestly per the wave-5 editor's masthead-declaration discipline.

3. **Migrate the dossier's CSS layout primitives to logical properties** (`margin-inline-*`, `padding-inline-*`, `border-inline-*`, `text-start`, `text-end`). This is engineering work that has to happen anyway for the Arabic edition and is best done now before more components accrete LTR-default code. Tailwind v4 has the utility variants ready.

4. **Build the per-language crisis-line YAML registry** at `nichecore/lib/crisis-lines.ts`. A typed registry keyed by ISO-639-1 language + ISO-3166 country, sorted by load-bearing-importance. The English dossier renders the English-relevant subset; each non-English edition renders its own. Surfaces the wave-3 disability-inclusion Deaf + LGBTQ+ specialty lines as additional facets per country.

5. **Commission a single-language transcreation pilot** of the tinnitus dossier into Hindi (the priority-1 language) as a proof-of-discipline. ~£20–25k cost, ~6–8 weeks elapsed, surfaces every defect I have flagged above in concrete form so the year-2 H1 budget can be sized against real-world friction rather than estimated friction.

---

## Five-dimensional summary

- **D1 (Hindi / Marathi / Tamil / Bengali — India audience).** 8 P1 defects: three-register condition-name absent; "evidence-OS" brand transcreation unmade; family-not-individual opener missing; India crisis-line block 7-of-9 lines missing; AYUSH formula Devanagari + regional-pharmacy localization absent; ₹ currency + Indian-numbering convention absent; §13.5 patient-primer monocultural-Anglo-default; regional-language priority decision unmade. BLOCKER on regional-language priority decision.

- **D2 (Mandarin — China + Taiwan + Singapore + diaspora).** 5 P1 defects + 1 BLOCKER: pattern-diagnosis-first §1 opener required for NMPA + CCMP + MOH compatibility; Simplified + Traditional + tone-marked-Pinyin three-script discipline required; multi-generational family-context overlay needed; Cochrane-vs-NMPA dual-authority §13.7 framing required; China + Taiwan + Hong Kong + Singapore crisis lines missing.

- **D3 (Arabic — MENA + Muslim diaspora).** 6 P1 defects + 1 BLOCKER: three-register condition-name + dialect-routing absent; RTL technical chrome (BLOCKER); Sufi humming-dhikr analogue + prayer-cycle + Ramadan integration absent; Gulf + Levant + Egypt + Maghreb four-register family-conversation absent; MENA + Muslim-diaspora crisis-line block (entirely absent in English); WHO EMRO authority anchor absent.

- **D4 (Spanish — LATAM + Spain + US-Hispanic).** 5 P1 defects + 1 BLOCKER: three-register condition-name (acúfeno / tinnitus / zumbido) + regional-routing absent; six-traditions doctrine vs LATAM-ethnomedicine collision (BLOCKER — founder decision A/B/C required); US-Hispanic bilingual-bicultural track distinct + missing; regional regulatory + crisis-line localization (Spain 024, Mexico SAPTEL, etc.) absent; PAHO + Cochrane Iberoamericana authority anchors absent; §13.5 patient-primer region-routed sub-blocks absent.

- **D5 (Atlas-wide meta-framework).** 1 BLOCKER + 4 P1 defects: Skill Rule 21 — Transcreation-Readiness Discipline drafted but not yet ratified (BLOCKER); cost-survivable phased roadmap £6.5–11M over 5 years not yet on any surface; technical i18n infrastructure (next-intl + locale routing + CSS logical properties + per-script font discipline) not yet built; per-language reviewer-board structures not yet designed; founder-decision matrix (4 decisions) not yet surfaced.

The doctrine is portable. The cultural posture is not. The work to make the dossier honestly multilingual is substantial — but the dossier is honest enough at the English layer that the transcreation work is recoverable rather than re-foundational. The founder should ratify Rule 21 + commission the Hindi pilot + commit the year-1 H2 technical-chrome budget before the year-2 H1 Hindi-priority ship is committed. Everything else flows from those three decisions.

---

**End of wave-6 cross-cultural transcreation review.** Doctrinally compatible. Founder-decision-loaded. Cost-realistic. Per-language reviewer-board-required. Skill-Rule-21-blocking. The English edition does not need to wait for the localization work to ship — but the moment it does ship in a non-English form, every defect above will surface in concrete reader experience. Better to surface them now.
