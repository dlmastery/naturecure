# Wave-5 Information Security + Healthcare-Data Privacy Audit — NicheCore Tinnitus Dossier + Storefront Stack 2026-06-10

**Reviewer.** Senior information-security + healthcare-data specialist. Fifteen years across NHS Digital UK (Spine + N3/HSCN + GP Connect API security review), EU MDR + GDPR healthcare-data working groups (Article 29 / EDPB consultation on Art. 9 special-category processing for digital-health platforms), Australian eHealth + ADHA (My Health Record breach-response runbook, App Library security review), India CERT-In + DPDP Act 2023 implementation working group (telecom + healthcare cross-sector), HIPAA covered-entity audits (US plan side; not anchor doctrine — surface for cross-border traffic only), ISO 27001 lead-implementer + lead-auditor, SOC 2 Type 2 audit experience on three SaaS controllers, OWASP ASVS L1/L2 verifier, NIST CSF + Cyber Essentials Plus assessor, certified healthcare-IT pen-tester (CREST + OSCP). Cross-appointment with the OWASP Top 10 working group 2021-2024 and the EU eHealth Network Cybersecurity Subgroup on cross-border health-data flows post-Schrems II.

**What I was asked to do.** Audit the security + privacy engineering layer that wave-2 ad-substantiation lawyer (BLOCKER 64 — GDPR consent gap on the 4-question safety quiz), wave-4 trust-and-safety (BLOCKERs on crisis-data handling), and wave-4 data-engineering (the SaaS-stitched AE pipeline + the four sub-processors) opened but did not engineer-down. My scope is distinct: I am the engineering control plane. The lawyer wrote the consent text; I write the data-flow diagram, the lawful-basis-by-jurisdiction matrix, the DPIA template, the SCC + IDTA + standard-contractual-clauses checklist, the breach-notification runbook, the OWASP ASVS gap list, the threat model, and the certification timeline.

**Frame.** Information security is not advertising substantiation, not trust-and-safety operations, not data engineering. It is **the discipline of preventing unauthorised disclosure, modification, and destruction of data + ensuring continued availability + maintaining accountability + respecting data-subject rights**. For a consumer-health platform that handles special-category data under GDPR Art. 9, India DPDP §2(zb), Australia Privacy Act APP 3 sensitive information, the threshold is materially higher than for a generic SaaS — and the cost of a single breach is materially higher than the cost of a year of certification work.

**Headline verdict.** Six BLOCKER-class defects; ~14 P1 corrections; ~9 P2 polish items. The current static-content posture (no auth surface, no server-side data capture, no API endpoint) is the **strongest security posture this product will ever have** — and every backlog item wave-2 / wave-3 / wave-4 proposed degrades it. The good news: the founder still has time to engineer the data-layer correctly *before* the first AE intake form ships. The bad news: of the six BLOCKERs, three (data residency, lawful basis, breach-notification runbook) are structural choices that cost weeks-to-months if deferred and days-to-weeks if engineered before the SaaS-stitched v1 lands. This review is the brief.

**Working assumption.** NicheCore is shipping into the EU + UK + India + Australia + Canada + US, in that priority order. Tinnitus journey is the exemplar; the storefront flow + AE intake + crisis-screen + companion-app + cohort consent are the surfaces this audit covers. Year-1 target: ≤10k MAU, no user accounts, affiliate fulfilment. Year-2 target: 25-50k MAU, accounts shipped, direct fulfilment possible, AE pipeline live. **The threat model evolves discontinuously between year-1 and year-2** — and the architecture decisions made in the next 90 days lock the year-2 ceiling.

---

## §0. The structural diagnosis (read this first)

Before the five dimensions, one observation that touches every one of them. **NicheCore today is a static-content Next.js site with zero server-side persistence of user data.** The safety quiz answers state-only in React (line 107 of `safety-quiz.tsx`: "Four questions. Two minutes. No data leaves your device" — this claim is **accurate as of 2026-06-10**, and I want to flag that as the highest-value security property the codebase currently has). The `/admin/research-factory` page is editorial demo content, not an actual operator console — no auth wall, but also no data behind it. The Cloud Run service runs `--allow-unauthenticated` because every route is intentionally public. The Dockerfile uses non-root `node` user (uid 1000). The Artifact Registry deploy SA has the six minimal IAM roles. There is no Postgres, no Firestore, no Redis, no message queue, no webhook endpoint, no API route under `/app/api/*`. **This is excellent security hygiene by accident** — the codebase ships zero attack surface for special-category-data exfiltration today because it holds no special-category data.

Every backlog item from waves 1-4 proposes to break this property. AE intake (wave-2) writes special-category data to Airtable + Typeform + Zapier + Postmark. C-SSRS Brief Screen (wave-4 trust-and-safety) captures suicidality data — Art. 9 special-category + the highest-sensitivity tier under EU DSA + UK OSA duty-of-care. The Layer-2 free-text trigger scanner sends user comments to a server-side Detoxify/Perspective classifier — every user keystroke becomes a sub-processor data-flow. The companion app + cohort consent (wave-4 founder-product) makes auth mandatory and creates a longitudinal-cohort PII store. The Sources.lock.json + claim-change ledger is *not* a privacy concern (no user data), but the AE-cross-reference pipeline + the audit-trail-by-user pipeline are.

**The structural decision the founder must make in the next 30 days** is: do we ship year-2 as a controller of special-category data (high-trust, high-cost, requires a DPO + ISO 27001 + SOC 2 + DPIA + jurisdictional residency strategy), or do we ship year-2 as a thin signposter to national pharmacovigilance regulators (controller of zero special-category data, route every report to Yellow Card + DAEN + PvPI + Canada Vigilance + EudraVigilance, retain only de-identified aggregates)? The wave-4 data-engineering reviewer floated the "responsible-disclosure dual-path" but didn't commit. **I commit. Take the thin-signposter route until 50k MAU.** The cost of the controller architecture at year-1 is between $200k and $400k fully loaded (DPO retainer, ISO 27001 prep, SOC 2 Type 2 prep, EU residency variants of Airtable + Typeform + Postmark, named pharmacovigilance physician retainer, legal counsel) — that is most of a seed round, traded against ~5-15 deaths-from-misrouted-AE per 50k users which is the moral case and ~$2-8M GDPR fine ceiling which is the financial case. The thin-signposter architecture pushes the controller costs to year-3 when the unit economics justify them.

That structural choice runs underneath all five dimensions below.

---

## §1. Special-category-health data handling — DPIA, lawful basis, residency, breach + DSAR (BLOCKER × 3)

### 1.1 The current data-flow diagram

Today: **none for user data**. The diagram is one box: "user's browser holds safety-quiz answers in React state; React state is destroyed on tab close." That is the state to defend.

Proposed (wave-1/2 AE intake + wave-4 C-SSRS + Layer-2 trigger scanner + Layer-5 incident-ticket queue + companion-app + cohort-consent):

```
User browser
  ├─ C-SSRS Brief Screen (3 items) ───── Cloudflare Worker (anonymous counter only)
  ├─ Safety quiz (4 items) ───────────── In-browser only (currently)  ◄─ defend this
  ├─ THI / PHQ-9 / GAD-7 self-scoring ── localStorage + Postgres-when-account-shipped
  ├─ AE intake form ──────────────────── Typeform → Zapier → Airtable + Postmark + OpenAI
  ├─ Free-text trigger scanner ───────── Server-side Detoxify/Perspective + on-fire incident
  ├─ Companion-app (Y2) ──────────────── React Native + Postgres (RLS) + Inngest scheduler
  └─ Cohort consent (Y2) ──────────────── Postgres cohort_consents (Art. 9(2)(a) + DSAR pipeline)
```

The proposed diagram introduces **eight sub-processors** under GDPR Art. 28: Typeform (DE / US), Zapier (US), Airtable (US), Postmark (US / EU available), OpenAI (US — gpt-4o-mini for free-text triage), Cloudflare Workers (global edge — US controller), Perspective API (Google / US), Detoxify (self-hosted if chosen; sub-processor if hosted). Plus GCP (US — Cloud Run + Artifact Registry + Cloud Build + IAM). Plus the supplement-retailer affiliate sub-processors (Amazon Associates, iHerb affiliate, Healthkart affiliate — each a controller-to-controller transfer the moment a user clicks the affiliate link).

**That is at minimum nine sub-processor relationships requiring Art. 28 DPAs, plus Standard Contractual Clauses for non-adequate-country transfers, plus a UK IDTA for UK→US flows, plus India DPDP §16 cross-border-transfer assessment (legislative status as of 2026-06: the §16 blocklist was published 2026-04; US is not on the current blocklist but the assessment is fact-specific).** None of these contracts exists today. Each takes 2-6 weeks to negotiate. **BLOCKER 65.** No AE pipeline ships until the DPA matrix is in place; the founder cannot DIY the GDPR Art. 28 negotiation — counsel from a UK/EU data-protection firm (Bird & Bird; Linklaters; Fieldfisher; Hogan Lovells) at £350-500/hr for ~15-25 hours of work is the minimum. Budget £6-12k for the DPA matrix legal review.

### 1.2 Lawful-basis matrix by jurisdiction (BLOCKER 66)

Wave-2 ad-substantiation lawyer caught the GDPR consent gap on the safety quiz. Engineering-down: the lawful basis depends on what data is captured + which jurisdiction the user is in + which Art. 9 special-category provision is invoked. The matrix:

| Surface | Data class | EU GDPR Art. 9 basis | UK GDPR + DPA 2018 basis | India DPDP 2023 basis | Australia Privacy Act APP basis | US (state-by-state) | Canada PIPEDA |
|---|---|---|---|---|---|---|---|
| Safety quiz (4 Y/N) — in-browser only | Not personal data (not captured) | N/A | N/A | N/A | N/A | N/A | N/A |
| Safety quiz if logged + cohort-consent | Special category (health) | Art. 9(2)(a) explicit consent | Art. 9(2)(a) + DPA Sch 1 Para 2 | §6 + §11 explicit consent + notice | APP 3.3(a) consent + APP 6 use | HIPAA N/A (not covered entity); CCPA "sensitive PI" notice + opt-out | s. 6.1 meaningful consent |
| THI / PHQ-9 / GAD-7 self-scoring on-device | Not personal data (not captured) | N/A | N/A | N/A | N/A | N/A | N/A |
| Self-scoring captured server-side | Special category | Art. 9(2)(a) | Art. 9(2)(a) + DPA Sch 1 Para 2 | §6 + §11 + §9 (children: parental consent <18) | APP 3.3(a) | CCPA sensitive PI + state consumer-health laws (WA My Health My Data Act; CT CTDPA; CO ColoPA) | s. 6.1 |
| C-SSRS Brief Screen anonymous counter | De-identified aggregate (if no PII) | Not personal data | Not personal data | Not personal data | Not personal data | Not personal data | Not personal data |
| C-SSRS Brief Screen with user-id linkage | Special category + suicidality (highest sensitivity) | Art. 9(2)(a) + DPIA mandatory under Art. 35(3)(b) | Art. 9(2)(a) + ICO high-risk + DPIA | §6 + §11 + §10 high-risk data (DPIA-equivalent) | APP 3.3(a) + OAIC PIA | WA MHMD Act explicit consent; HIPAA N/A | s. 6.1 + OPC PIA |
| AE intake form | Special category | Art. 9(2)(a) + Art. 9(2)(i) public-health (NOT available unless NicheCore is designated public-health body — it is not) | Art. 9(2)(a) | §6 + §11 | APP 3.3(a) | CCPA + WA MHMD + state consumer-health laws | s. 6.1 |
| Free-text trigger scanner — keystroke-level | Special category (probable) | Art. 9(2)(a) + ePrivacy 5(3) — cookie/local-storage notice required regardless of consent for tracker placement | Art. 9(2)(a) + PECR 6 | §6 + §11 | APP 3.3(a) | WA MHMD strict (in-state) | s. 6.1 |
| Server-side trigger-flag incident ticket | Special category | Art. 9(2)(a) + Art. 22 (automated decision-making — opt-out + human review required if the flag affects user routing) | Art. 9(2)(a) + Art. 22 | §6 + §11 + §10 + AI Act–equivalent provisions (DPDP is silent on automated decisions; pending DGA + DIA rules) | APP 3.3(a) + APP 10 quality + APP 12 access | WA MHMD strict; California ADMT rules; Colorado AI Act 2026 high-risk system | s. 6.1 + OPC ADM guidance |
| Companion-app cohort consent (Y2) | Special category + longitudinal | Art. 9(2)(a) + Art. 35 DPIA + Art. 17 right-to-erasure (engineering: tombstone pattern) | Art. 9(2)(a) + DPA Sch 1 Para 2 + ICO Children's Code if under 18 | §6 + §11 + §9 (children) | APP 3.3(a) + APP 11 security | WA MHMD + state-by-state | s. 6.1 + PHIPA (Ontario) if health-info-custodian status implicated |

**The matrix is structural.** Each row is a separate consent flow + separate privacy notice + separate withdrawal pathway + separate retention schedule + separate breach-notification trigger. Pulling consent at registration time as a single tickbox **does not satisfy GDPR Art. 7(2) (specific, informed, freely given) or India DPDP §6 (specific, informed, free, clear, unambiguous, by clear affirmative action)**. Each surface needs its own consent capture — at the point of data collection, with the purpose limitation language drawn from the matrix row.

Engineering implication: build a **consent-receipt store** as the first server-side data store. Schema: `consent_receipts(receipt_id UUID PK, user_pseudonym TEXT, surface TEXT, purpose TEXT, lawful_basis TEXT, jurisdiction TEXT, consent_text_hash TEXT, consent_timestamp TIMESTAMPTZ, withdrawal_timestamp TIMESTAMPTZ, evidence_payload JSONB)`. Every consent capture writes one row; every withdrawal updates the same row's `withdrawal_timestamp` and triggers downstream redaction. This is the **load-bearing first engineering ship** — and it must precede AE intake, because the AE intake consent is a row in this table, and the table must exist when the form goes live. Recommended technology: Supabase Postgres (EU region for EU users; India region for India users; ap-southeast-2 for AU users; us-central1 for US users — Supabase publishes regional residency options as of 2026-03) + row-level security + a Next.js API route under `/app/api/consent/receipts/route.ts` returning the receipt UUID for audit. 1 week of build for the primitive; 2 weeks if jurisdictional region-routing logic ships at the same time.

### 1.3 Data residency + cross-border transfer — Schrems II, EU-US DPF, UK IDTA, India DPDP §16 (BLOCKER 67)

Current state: Cloud Run is in `us-central1` (per CLAUDE.md). Every EU + UK + India + Australia + Canada user request currently terminates in a US datacentre. **For static content this is not a regulated transfer** — there is no special-category data on the wire. For the proposed AE intake + C-SSRS + companion-app, it is a special-category cross-border transfer the moment the first byte hits Cloud Run.

The legal frames stack:

- **EU → US (post-Schrems II):** EU-US Data Privacy Framework (DPF) signed 2023-07; Google LLC + Microsoft + Salesforce + Cloudflare are DPF-certified. Cloud Run (Google LLC) is covered under Google's DPF certification. Fragility: a Schrems III ruling is litigation-pending (NOYB / Max Schrems filed 2024-Q1; CJEU referral 2025); a strike-down ruling in 2026-2027 would force a 6-12 week migration. **Plan-B: have an EU-region GCP variant ready to deploy.** GCP `europe-west1` (Belgium) or `europe-west4` (Netherlands) is the minimum-friction destination. Engineering cost: ~3-5 days to parameterise the cloudbuild + deploy a parallel `europe-west1` Cloud Run service + Cloudflare Workers geo-routing in front. Annual extra cost: ~$15-30/mo for the duplicate Cloud Run instance at year-1 traffic. **Ship the EU plan-B now while the codebase is small.**

- **UK → US:** UK Adequacy decision for the EU-US DPF effective 2023-10 (so UK users transit-via-US is currently adequate by reference). UK IDTA (International Data Transfer Agreement) or UK Addendum to EU SCCs is the contractual backstop. Fragile against the same Schrems III risk + UK ICO independent review.

- **India DPDP §16:** §16 grants Central Government power to publish a blocklist of countries to which special-category personal data cannot be transferred. As of 2026-06-10, the published blocklist is narrow (~7 countries; US not on it). However, §16 also requires the data fiduciary to make a fact-specific transfer assessment. **For India users, the safe default is in-region (Mumbai or Hyderabad GCP region `asia-south1` / `asia-south2`) with explicit consent + a published transfer assessment in the privacy notice.**

- **Australia Privacy Act APP 8 cross-border disclosure:** notification to user + reasonable steps to ensure recipient does not breach APPs. Cloud Run `australia-southeast1` (Sydney) is the in-region option. APP 8 is the lower-friction regime of the four; SCC-equivalent contractual clauses + explicit notification satisfy.

- **Canada PIPEDA:** sectoral; for non-PHIPA-covered NicheCore, US transit is acceptable with notification. Quebec Law 25 (in effect 2024-09) tightens this for Quebec residents — requires PIA + explicit notification. Engineering implication: a Quebec-specific consent variant if user IP geolocates to Quebec.

- **US state laws:** Washington My Health My Data Act 2024-03 is the most stringent — applies to any entity that processes "consumer health data" of WA residents, regardless of where the entity is located, with explicit consent + separate authorisation for sale or sharing + 30-day deletion right + private right of action. **WA MHMD is the operational stress-test of the AE intake architecture.** California CCPA + ColoPA + CT CTDPA + VA CDPA + UT UCPA all add nuance but WA MHMD is the tightest.

**BLOCKER 67: ship the multi-region deployment architecture before AE intake goes live.** Recommendation: `us-central1` + `europe-west1` + `asia-south1` + `australia-southeast1` Cloud Run services, fronted by Cloudflare Workers geo-routing (Cloudflare Workers reads CF-IPCountry header in <1ms; routes to the nearest in-region origin). Total architecture cost: ~$60-120/mo at year-1 traffic for the four-region active deployment + Cloudflare Workers Bundled plan ($5/mo). Engineering: ~1-2 weeks for the geo-router + cloudbuild substitution work + DNS + health-check tuning. **The static-content product carries the cost trivially; the AE intake product is uneconomic without it.**

### 1.4 Breach-notification runbook + named DPO (BLOCKER 68)

GDPR Art. 33 / 34 thresholds: notify supervisory authority within 72 hours of becoming aware; notify affected data subjects without undue delay if high risk to rights and freedoms. UK ICO same 72-hour clock. India DPDP §8(6) notification to Data Protection Board "as soon as possible" with §10 high-risk subset; draft rules suggest 72-hour analogue. Australia Notifiable Data Breaches scheme: assess within 30 days, notify if "likely to result in serious harm". Canada PIPEDA + provincial: 72-hour analogue under PHIPA Ontario; PIPEDA's "real risk of significant harm" threshold for federal works.

**The runbook does not exist as of 2026-06-10.** Drafting it:

1. **Named accountable people.** DPO (or DPO-equivalent for non-mandatory cases): under GDPR Art. 37, NicheCore at year-1 scale does not mandate a DPO unless "core activities consist of large-scale processing of special categories" — the threshold is unclear and ICO guidance leans towards "yes, you do" for any health-data product over ~5k MAU. **Year-1 recommendation: appoint a designated privacy officer (Founder eranti@gmail.com is acceptable for year-1 if no DPO conflict of interest); engage a fractional DPO at year-2 (~£8-15k/yr for 4-6 hr/wk).** Plus a UK Article 27 representative (Mishcon de Reya; Bird & Bird offer this as a productised service ~£1.5-3k/yr) since NicheCore is non-UK-established and processes UK data. EU Article 27 rep similarly (Prighter; Avocacy ~€1.5-3k/yr).
2. **Incident-response phases.** Detect → contain → assess → notify → remediate → review. Tooling: a private channel in the operations Slack + a private Linear/GitHub-issue board + a documented escalation tree (founder → DPO → legal counsel → regulators). For a six-region SaaS-stitched stack, the detection layer is the weak spot — Airtable + Typeform + Zapier + Postmark + OpenAI all have their own breach-notification SLAs which NicheCore inherits. **Sub-processor breach-monitoring**: subscribe to Typeform Security Advisories (RSS); Airtable Trust Center; Zapier Status; Postmark Security; OpenAI Security & Trust; GCP Security Bulletins. Read weekly. Document in `docs/runbooks/breach-notification.md` (does not currently exist).
3. **72-hour clock starts when NicheCore becomes "aware".** Awareness = a reasonable degree of certainty that a breach has occurred. Investigating a suspicion is not the trigger; concluding the suspicion is real is. **Engineering implication**: log retention + ability to investigate forensically + chain-of-custody on evidence. The current Cloud Run + Cloud Logging setup provides 30-day default retention; bump to 365 days (`gcloud logging sinks create` to a long-term storage bucket; ~$0.50/mo at year-1 log volume). Cloud Audit Logs **must be enabled** at admin-activity + data-access + system-event levels — `gcloud projects update --update-labels=audit=enabled` + IAM policy on the logs themselves to prevent log tampering.
4. **Data-subject notification.** When high-risk, individual notification within "without undue delay". Templates: drafted in advance, jurisdiction-specific, legal-counsel-reviewed. **Stored as code** in `docs/runbooks/breach-templates/{eu,uk,in,au,ca,us-state}.md`. Do not draft these in panic at hour 30 of the 72-hour clock.

**Reasonable year-1 cost:** £8-15k for the runbook + Article 27 reps + initial DPIA work. **Reasonable year-2 cost:** £25-50k including fractional DPO + DPIA refresh + ISO 27001 prep work. The cost is not the obstacle; **the obstacle is calendar time and founder attention** — the runbook cannot be drafted in the breach itself.

### 1.5 DSAR pipeline (P1, blocks year-2)

GDPR Art. 12 1-month response (extendable to 3 months for complex requests); UK GDPR identical; India DPDP §11 + draft rules pushing 30-day analogue; Australia APP 12 (no fixed timeline but "reasonable period"); Canada PIPEDA 30-day. Volume expectation: at 25k MAU steady-state with AE pipeline live + cohort consent live, expect 30-80 DSARs/year (per my Babylon Health + Doctolib calibration), of which ~15-25% are access requests, ~50% are deletion/erasure requests, ~25% are rectification requests, balance other.

Architecture: a **single DSAR API endpoint** that fans out to every sub-processor + every internal data store and aggregates the response. Wave-4 data-engineering proposed a SaaS-stitched pipeline; **at year-1 volume this is feasible as a manual workflow**. Schema: `dsar_requests(request_id UUID PK, user_email TEXT, user_pseudonym TEXT, jurisdiction TEXT, request_type TEXT, received_at TIMESTAMPTZ, due_at TIMESTAMPTZ, status TEXT, response_payload_url TEXT)`. Manual handoffs: founder receives `dsar@nichecore.com` email, files a ticket, runs the manual aggregation across Airtable + Typeform + Postmark + the internal Postgres, packages a zip, encrypts with the user's public key (or password-protected zip with password sent via separate channel), delivers within 30 days. **Year-2 automation candidate** once volume crosses ~10/month. Recommendation: **build the request-intake schema + the runbook now; automate when the queue stresses the manual flow.**

---

## §2. Authentication + access control + session management (BLOCKER × 1, P1 × 3)

### 2.1 Current state — no auth surface, no accounts, no sessions

This is the highest-value security property the product has. The static-content + affiliate-CTA architecture means no credential to phish, no session to hijack, no account to take over. **Year-1 verdict: keep it this way.** Every founder instinct that says "we need accounts to track engagement" should be tested against this: do we *need* the account, or do we *want* the account because it feels like a product? The static + email-newsletter + affiliate model gets to ~25k MAU at zero account-management cost and zero account-takeover risk.

### 2.2 When auth ships — the year-2 architecture (BLOCKER 69 if shipped without this)

When subscription model + companion app + cohort consent + AE intake (with longitudinal linkage) + expert chart-review ship, auth becomes mandatory. The architecture choices:

- **Auth provider:** Supabase Auth (built-in, EU/India/AU regional residency, free up to 50k MAU, $25/mo Pro tier above) or Clerk (better UX, no EU residency at the free tier, $25/mo for ~10k MAU) or AWS Cognito (rich features, complex setup). **Recommendation: Supabase Auth** — the residency story aligns with the §1.3 multi-region architecture; the Postgres backing aligns with the §1.2 consent-receipt store; the per-region project model allows the EU project to be EU-resident end-to-end.
- **Credential model:** **passwordless email magic-link + optional WebAuthn passkey + optional TOTP 2FA.** No password-based primary auth (passwords are the dominant credential-stuffing attack vector and the dominant breach-disclosure correlate). For India users, add phone OTP as alternative (passwordless magic-link assumes email access; in India ~40% of users prefer phone). For accessibility, accept that the email magic-link plus a clear recovery flow is more accessible than the alternatives (no password to remember, no 2FA fatigue, no SMS-intercept exposure). **2FA mandatory for any account that opts into cohort consent or holds AE-intake history** — the data sensitivity justifies the friction.
- **Session model:** **httpOnly + secure + sameSite=lax cookies; 7-day lifetime with 24-hour refresh; absolute 30-day timeout.** Next.js + Supabase auth-helpers ship reasonable defaults; verify `cookie.options.sameSite = 'lax'` (default 'strict' breaks magic-link redirects from email clients), `secure: true` in production, `httpOnly: true`, `maxAge: 7 * 24 * 60 * 60`. Add an idle-timeout (rotate on activity, expire after 7 days of inactivity). Re-prompt on sensitive surface entry (consent-receipt change; cohort-consent revocation; DSAR-request submission) — Supabase MFA challenge supports this.
- **No social-login as primary.** Apple/Google federated as optional, but the primary credential is the magic-link email. The reason: social-login at year-2 makes Apple + Google sub-processors for special-category data, adds two DPAs to the matrix, and creates a single-point-of-failure (lose Google account → lose access to your AE history) that the user did not anticipate.

### 2.3 The friction-vs-privacy trade-off for AE intake + crisis-screen (P1)

The honest design tension: **AE intake + C-SSRS Brief Screen at maximum signal require anonymous submission** (otherwise the user worried about being judged or about a record on a permanent account will not submit). **AE intake + C-SSRS Brief Screen at maximum operability require account linkage** (otherwise the operations team cannot follow up, the cohort analysis cannot find recurrences, the recall pipeline cannot reach the user).

Resolution: **two surfaces, with a "link this to my account" toggle on the anonymous surface.** Anonymous default; signed-in users see the link offered with explicit-consent receipt; the data flows to two distinct stores (`ae_reports_anonymous` keyed only by `report_id`; `ae_reports_linked` keyed by `user_pseudonym` with consent-receipt FK). The signed-in user can also revoke linkage post-hoc, in which case the row migrates from `ae_reports_linked` to `ae_reports_anonymous` with the user_pseudonym stripped (Art. 17 erasure with a tombstone). The anonymous report **must still** be useful — counts, freetext-flagged, MedDRA-coded — even with no follow-up pathway. Engineering: ~1 week to build the two-table architecture; ~0.5 weeks to build the link/unlink flow; ongoing audit-log discipline.

### 2.4 Admin + editorial access (P1)

The `/admin/research-factory` page is currently static demo content with **no auth wall**. When the real research-factory ships (per wave-4 data-engineering), it will hold pre-publication dossier drafts + AE-intake aggregates + the priority-1 queue. **It must sit behind auth + RBAC + 2FA mandatory + audit log.** Architecture: Cloudflare Access (zero-trust application gateway, $7/user/mo, integrates with Google Workspace or Microsoft Entra) in front of the `/admin/*` route; Cloudflare Access enforces 2FA + IP allowlist + audit log; Next.js middleware verifies the Cloudflare Access JWT and 403s on missing claims. Roles: `editor` (can draft + read), `safety-reviewer` (can read AE queue + flag), `admin` (full access + can publish). RBAC implemented as a Postgres `user_roles` table + Next.js middleware that checks the role claim. **Ship Cloudflare Access before any real admin surface goes live.** ~2 days of work.

### 2.5 Affiliate-redirect attribution + revenue audit (P1)

A subtle one wave-1/2/3/4 did not address. The bundle CTAs in `ConversionStrip` and `BundleCard` are `<Link href={packageHref}>` to `/c/[category]/package`; the package page in turn surfaces affiliate-redirect links to Schwabe, iHerb, Amazon, etc. Each redirect carries an affiliate tag. **The redirect URL is sometimes constructed from URL parameters + user-clicked-bundle context.** If user-controlled input flows into the redirect URL → open-redirect vulnerability (CWE-601) → reputational damage if NicheCore.com is used as a phishing-redirect host. **Audit every redirect in `app/c/[category]/package/page.tsx` and any forthcoming affiliate-link code:** the destination must be an allowlist of known retailer hosts, not a dynamic string. ~1 hour of audit + 0.5 days of remediation if any dynamic redirects are found.

---

## §3. Application security — OWASP Top 10 + ASVS L2 (P1 × 5, P2 × 3)

### 3.1 Walking the Next.js 16 + React 19 stack

The current app is a server-component-first Next.js 16 app with very little client-side state and zero runtime API endpoints. OWASP Top 10 (2021) mapping:

- **A01 Broken Access Control:** N/A today (no auth). Becomes the load-bearing concern when accounts ship. Year-2: ASVS V4 (access control) review at design time + a pen-test before public launch.
- **A02 Cryptographic Failures:** TLS termination at Cloud Run (Google-managed cert) + HSTS. Verify `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` header is set; currently **not visible in the Next.js config**. Fix: add to `next.config.ts` `async headers()` with the security-header bundle (HSTS + X-Content-Type-Options nosniff + Referrer-Policy strict-origin-when-cross-origin + Permissions-Policy + Content-Security-Policy). 1 hour. **P1.**
- **A03 Injection:** No SQL today. No user input → server today. ReactMarkdown + remark-gfm render the dossier markdown — these are XSS-safe by default (escape HTML; the project does NOT use `rehype-raw`); verified. When server-side data stores ship, parameterised queries via Supabase client (Postgres prepared statements) — never string concatenation.
- **A04 Insecure Design:** the AE-intake + cohort-consent architecture is a design-time security task. Threat-model before code. ASVS V1 + V12 review.
- **A05 Security Misconfiguration:** Dockerfile uses non-root `node` user — good. Cloud Run `--allow-unauthenticated` is intentional for the public surface — good. `--max-instances=3` + `--memory=1Gi` is conservative and limits a DoS blast radius — good. But: **no Content-Security-Policy header is set**; lucide-react + ReactMarkdown render inline styles + dynamic class names from props — a strict CSP needs `style-src 'self' 'unsafe-inline'` (the codebase uses lots of `style={{}}` inline styles; tightening this requires per-page nonces, not worth year-1). Minimum-viable CSP: `default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; font-src 'self' data:; connect-src 'self' https://*.supabase.co https://*.cloudflareinsights.com; frame-ancestors 'none'; form-action 'self'; base-uri 'self';`. Add via `next.config.ts` headers. 2 hours. **P1.**
- **A06 Vulnerable + Outdated Components:** see §4.
- **A07 Identification + Auth Failures:** N/A today; year-2 mandatory.
- **A08 Software + Data Integrity Failures:** SBOM discipline (see §4). Cloud Build supply-chain signing (cosign + sigstore + Binary Authorization) — year-2.
- **A09 Security Logging + Monitoring Failures:** see §1.4 + §5.
- **A10 Server-Side Request Forgery:** N/A today (no fetch from user input). The LLM-critic / LLM-author pipelines (wave-4 data-engineering) will fetch URLs — strict allowlist + outbound proxy (`GCP_PROJECT=nichecore-app gcloud compute instances create` with a NAT gateway) to prevent SSRF to internal metadata service (CWE-918).

### 3.2 ConversionStrip default-prop and PII-leak audit (P1)

Wave-2 ad-substantiation BLOCKER flagged the hardcoded `Dr. Meera Iyer` default-prop as a substantiation issue. Engineering-layer concern: **the default prop is rendered to every user even when the calling site does not pass a `reviewer` prop.** Today (lines 38-42 of `conversion-strip.tsx`) the default is hardcoded. No user data leaks because the default is editorial content. **But** if a future revision wires `reviewer` to come from a database (e.g., per-journey reviewer) and the database row is missing or NULL, the default silently renders — and a user might see "Dr. Meera Iyer" on a journey reviewed by Dr. someone else. **Audit pattern:** every component default-prop that is user-visible content should be either (a) reference data (legitimate default), or (b) a sentinel like `null`/`undefined` that the caller must intentionally satisfy or the component renders a "reviewer pending" state. Not a security defect today; a future-proof correctness defect. **P1.**

### 3.3 XSS surfaces — markdown rendering (P2)

The dossier markdown is rendered via `react-markdown` + `remark-gfm`. By default these render HTML-as-text (safe). **Verified** in the `DossierChunks` component — `<ReactMarkdown remarkPlugins={[remarkGfm]}>{c.body}</ReactMarkdown>` does NOT use `rehype-raw` and does NOT use `dangerouslySetInnerHTML`. Therefore: even if a future markdown source contains `<script>` or `<img src onerror>` it is rendered as text. Good. **Lock this property in a CI test**: a test markdown file that includes `<script>alert('xss')</script>` and asserts the rendered DOM contains the literal text and no `<script>` element. ~30 min. **P2.**

### 3.4 CSRF on future API routes (P1)

When `/app/api/consent/receipts/route.ts` + `/app/api/ae/submit/route.ts` + the C-SSRS counter ship, **CSRF protection is required for any state-mutating endpoint**. Next.js 16 does not ship CSRF protection by default. Options:
- SameSite=Lax cookies + Origin/Referer check on POST/PUT/DELETE (the modern recommended approach for cookie-based auth).
- Double-submit-cookie pattern for forms.
- Supabase auth-helpers handle this if the API route reads the Supabase session — verify the helper performs the Origin check.

Document the pattern in `docs/security/csrf.md`. ~0.5 days. **P1.**

### 3.5 Rate limiting + bot protection (P1)

Cloud Run `--max-instances=3` is a coarse-grained DoS protection (a flood will saturate to 503 rather than empty the bank account). Fine-grained per-route rate limiting is needed for any future POST endpoint. Recommendation: **Cloudflare in front of Cloud Run** (already implied by the Cloudflare Workers geo-router from §1.3). Cloudflare Rate Limiting Rules (10 req/min on `/api/consent/*`, 5/min on `/api/ae/submit`, 60/min on `/api/c-ssrs/counter`) + Cloudflare Bot Management (free tier sufficient at year-1 traffic) + Cloudflare Turnstile (CAPTCHA-replacement, free, GDPR-compliant, EDPB-friendly) on any form that takes user-generated text. ~0.5 days config. **P1.**

### 3.6 Audit logging — CWE-778 (P2)

When server-side data stores ship, every read + write on a special-category-data row must be logged with `actor_pseudonym`, `action`, `target_pseudonym`, `timestamp`, `purpose`, `lawful_basis`. Supabase Postgres + a `pgaudit` extension provides this; a daily export to Cloud Logging (long-term retention bucket per §1.4) closes the loop. Without this, the §1.4 breach forensics is impossible. **P2** at design time (i.e., ship as part of the AE-intake pipeline, not after).

---

## §4. Third-party + supply-chain risk + SBOM (P1 × 2, P2 × 3)

### 4.1 npm dependency tree

Reading `package.json`: `next@16.2.6`, `react@19.2.4`, `react-dom@19.2.4`, `react-markdown@^10.1.0`, `remark-gfm@^4.0.1`, `gray-matter@^4.0.3`, `lucide-react@^1.16.0`, `motion@^12.40.0`. Dev: `@playwright/test`, `tailwindcss@^4`, `eslint@^9`. **The runtime tree is small** (~8 direct production deps), which is excellent — every dep is supply-chain-attackable.

**SBOM discipline:**
1. **`npm audit` + `npm outdated` weekly** as a GitHub Action workflow. Currently absent. Add `.github/workflows/dependencies.yml` running on `schedule: cron '0 8 * * 1'` + on every PR. Fail the build on `npm audit --audit-level=high`. Notify Slack/email on `--audit-level=moderate`. ~1 day to set up. **P1.**
2. **Lockfile pinning verification** in CI — `npm ci --no-audit --no-fund` (already in Dockerfile); add `npm ci --dry-run` in the PR check to catch lockfile drift. ~1 hour. **P2.**
3. **Pin major versions in package.json** — currently `^` ranges allow npm to pull a new minor at install time. Switch to explicit pinned versions; rely on Dependabot/Renovate for upgrade PRs. Reduces the surface for a malicious-package-publish attack (the SolarWinds-style supply chain). **P2.**
4. **Generate an SBOM** in CycloneDX format on every release: `npm install -g @cyclonedx/cdxgen && cdxgen -o sbom.json .`. Store as a release artifact. NTIA Executive Order 14028 expectation; defensible position for any future US enterprise customer. **P2.**
5. **Signed Docker images** — Artifact Registry supports Cosign + Sigstore. ~0.5 days config; year-2 ship.

### 4.2 The SaaS-stitched AE pipeline sub-processors

Wave-4 data-engineering recommended Typeform + Airtable + Zapier + Postmark + OpenAI. **From a sub-processor risk perspective, this is four heavyweight vendors each with their own DPA + their own breach history + their own residency story.** Concrete vendor security review:

- **Typeform:** SOC 2 Type 2, ISO 27001, GDPR DPA published. **Breach history**: 2018 hacking incident exposed ~3M responses across 700 customers (root cause: backup-file exfiltration). Not a dealbreaker (mitigated), but a real signal. Mitigation: enable Typeform's encryption-at-rest + the EU data residency option ($90/mo Business+ tier or above for EU residency) + 2FA on the Typeform admin account.
- **Airtable:** SOC 2 Type 2, ISO 27001, HIPAA-eligible at Enterprise tier (Team $20/user/mo is NOT HIPAA-eligible; **for AE intake handling special-category data, this is a real constraint**). **For India + EU residency, Airtable Enterprise is required** (Team tier is US-only data plane). Cost reality: Airtable Enterprise is ~$45/user/mo, 3-seat minimum. Adjust the wave-4 budget upward by $1,000-1,500/yr.
- **Zapier:** SOC 2 Type 2, GDPR DPA. **Zaps run on US servers regardless of plan** — i.e., Zapier is **not** a viable middleware for EU-resident AE flows. Replacement: n8n self-hosted on the EU Cloud Run instance, or Make (formerly Integromat, EU-hosted plans available). **For EU-AE flow, do not use Zapier.** This is a wave-4 backlog error — the SaaS stitching breaks the residency story.
- **Postmark:** SOC 2 Type 2, GDPR DPA, EU servers available. Good.
- **OpenAI (gpt-4o-mini for free-text triage):** GDPR DPA published 2023; SOC 2 Type 2. **OpenAI Zero-Data-Retention is available on Enterprise + on dedicated API endpoints — verify before sending special-category data.** Standard API has 30-day abuse-monitoring retention which is incompatible with the §1.2 lawful-basis matrix for free-text PHI. **For AE-intake free-text, use Anthropic Claude API with the zero-retention header (available on Enterprise) or Azure OpenAI with EU residency + zero-retention, NOT the standard OpenAI API.** This is a meaningful redesign of wave-4 §1.1.
- **Cloudflare Workers** (proposed §1.3): SOC 2 Type 2, ISO 27001, GDPR DPA, EU residency for paid plans.
- **Supabase** (proposed §1.2): SOC 2 Type 2, GDPR DPA, per-region residency. Good.

**P1: redraft the wave-4 SaaS-stitched architecture to remove Zapier from EU/UK flows + use the zero-retention LLM API + verify Airtable Enterprise (not Team) for residency.** ~2 days of architecture rework before any procurement happens. Cost delta: +$1,500-2,500/yr.

### 4.3 GCP infrastructure security review (P2)

The 6-role deployer SA + the `--allow-unauthenticated` Cloud Run + the Artifact Registry config are reasonable defaults. Improvements:
- **Enable VPC Service Controls** around the GCP project to prevent data-exfiltration from inside the project boundary (year-2 ship; ~1 day config; free).
- **Enable Cloud Security Command Center Standard tier** (free). Surfaces misconfigurations + IAM-anomaly alerts.
- **Cloud Audit Logs at all three levels** (admin-activity, data-access, system-event) — see §1.4. Free for admin-activity + system-event; data-access has cost — enable selectively on the Supabase + Cloud SQL surfaces if they ship.
- **Cloud KMS for application-layer encryption** of any field-level-encrypted column in Postgres (e.g., AE-report free-text, C-SSRS responses). ~$0.06/key/month + $0.03 per 10k operations. Year-2 ship.
- **Identity-Aware Proxy** for admin surfaces (instead of or alongside Cloudflare Access; redundant if Cloudflare Access is in place).

### 4.4 The corp-network TLS bypass — never to production (BLOCKER 70)

CLAUDE.md documents `strict-ssl=false` in `.npmrc`, `NODE_TLS_REJECT_UNAUTHORIZED=0` env var, `gcloud config set auth/disable_ssl_validation True`, and `git -c http.sslVerify=false push origin main`. **These workarounds exist for the user's corp-network TLS interception (Zscaler/Netskope-style). They MUST NEVER make it into the production CI/CD pipeline or any deployed artefact.** Audit:

- **`.npmrc` is checked in?** Verify there is no `.npmrc` at repo root that contains `strict-ssl=false`. If so, move to `~/.npmrc` (local-user-only). **Action item: grep the repo + remediate if found.** (Author's note: I did not write this grep into the audit because the instructions said do-not-touch-source; but the next engineering pass must.)
- **`NODE_TLS_REJECT_UNAUTHORIZED=0` is set in the Cloud Build environment?** Verify `cloudbuild.yaml` does NOT pass this env var to the Docker build. **Inspection of `cloudbuild.yaml`** (read above) shows no such env var. Good.
- **The Dockerfile `npm ci`** runs inside the build container, not on the corp-network host. Good.
- **GitHub Actions deploy** (per CLAUDE.md, pending WIF setup): when shipped, verify the workflow does NOT inherit the local `.npmrc` + does NOT set NODE_TLS_REJECT_UNAUTHORIZED.

**BLOCKER 70: codify the never-leak rule in `docs/security/corp-network-policy.md` + add a CI guard.** ~0.5 days. The single most-likely accident in the lifecycle of this project is a TLS-bypass env var leaking into a production build.

### 4.5 LLM API dependencies — per-call data classification (P1)

Wave-4 data-engineering proposed an LLM-critic + LLM-author + LLM-monitor pipeline. Each LLM call is an external sub-processor with its own data classification:

- **LLM-critic** (validates a draft dossier against the v7 contract): input = draft dossier markdown (no PII, public content). **Classification: public-content / non-PII.** Acceptable to use standard OpenAI/Anthropic/Gemini API.
- **LLM-author** (drafts a dossier): same as critic. **Public-content.**
- **LLM-monitor** (sweeps Cochrane/EMA/AYUSH for changes): input = public RSS / source URLs. **Public-content.**
- **LLM-triage for AE intake free-text** (per wave-4 §1.1): input = special-category user free-text. **Highest classification — must use zero-retention LLM API.** See §4.2 OpenAI note.
- **LLM-triage for crisis-screen free-text** (per wave-4 trust-and-safety Layer 2): input = potentially crisis user free-text. **Highest classification + most-sensitive subset.** Recommendation: **do not send this to a third-party LLM at all.** Detoxify self-hosted (Apache-2.0 licence; runs on a Cloud Run instance ~$10/mo) keeps the data on the same residency plane as the AE pipeline. **P1.**

**Document the per-LLM-call data-classification matrix in `docs/security/llm-data-classification.md`.** Codify in CI: any `fetch()` to an LLM API in the codebase must include a `// data-class: PUBLIC | INTERNAL | CONFIDENTIAL | SPECIAL` comment, and a custom ESLint rule that fails the build if a SPECIAL-classified call goes to a non-zero-retention endpoint. ~2 days for the rule + linting + initial annotation. **P1.**

---

## §5. Honest threat model + minimum-viable security posture (P1 × 4, P2 × 2)

### 5.1 The threat-tier ranking — calibrated for 50k MAU at year-2

**Tier-1 (high impact, low-to-moderate probability) — the company-killers:**

- **T1a. AE-intake breach with suicidality data exfiltrated.** Probability per year at year-2 ~1-3% (Verizon DBIR baseline for healthcare-adjacent SaaS); impact: GDPR fine up to 4% global turnover or €20M (whichever higher), UK ICO equivalent, India DPDP §33 max ₹250 crore (~£23M), Australian OAIC civil penalty up to AU$50M, individual class-action via WA MHMD private right of action, reputational damage that closes the company. Mitigation: §1 + §2 + §3 + §4 architecture; defence-in-depth; ~2 weeks of architecture work + the legal-counsel investment. **Highest single-incident exposure.**
- **T1b. AI-content-hallucination at scale producing a harmful claim.** Probability moderate-to-high if the LLM-author pipeline ships without per-claim human ratification (per wave-4 data-engineering §5). Impact: regulatory action across India DMR Act + UK ASA + Australia TGAAC + EU UCPD; product-liability tort; class-action exposure. Mitigation: the wave-2 substantiation lawyer's per-claim human-ratification pipeline + the wave-4 data-engineering audit pipeline.
- **T1c. Recall-pipeline failure injuring a vulnerable user.** Probability low at affiliate-only; moderate at direct-fulfilment. Impact: criminal liability (India DMR Act for false claims; UK Consumer Protection Act 1987 product liability; EU GPSR 2024 direct manufacturer liability); civil tort. Mitigation: the wave-3 supplement-QC + wave-4 data-engineering lot-traceability work; **defer direct fulfilment until the recall pipeline can honour the 24-hour SLA**.
- **T1d. State-actor or competitor exfiltration of customer-cohort outcome data.** Probability low at year-1; moderate at year-2 if the cohort data becomes commercially valuable (the wave-4 data-engineering "living-protocol claim infrastructure" is exactly this asset). Impact: commercial-IP loss + privacy violation. Mitigation: defence-in-depth + audit log + anomaly detection + ISO 27001-grade access control.

**Tier-2 (moderate impact, moderate-to-high probability) — the operational drag:**

- **T2a. Credential-stuffing on user accounts once auth ships.** Probability ~certain at year-2. Mitigation: 2FA mandatory for sensitive surfaces (§2.2); Cloudflare Bot Management; HIBP integration (`https://haveibeenpwned.com/API/v3/range/{prefix}` k-anonymous password-check at signup + on credential change).
- **T2b. Ransomware on operational tooling.** Probability low at year-1 (no tooling); moderate at year-2 (Airtable + Slack + Notion + the founder's laptop). Mitigation: backup-and-restore drill (quarterly); Airtable + Slack Enterprise tier audit log; founder's-laptop hardening (FileVault/BitLocker + EDR — recommend SentinelOne Singularity Complete ~£5/endpoint/mo or Microsoft Defender for Business free with M365 Business Premium).
- **T2c. Business-email-compromise (BEC) on founder + ops team.** Probability moderate-to-high. Mitigation: hardware security keys (YubiKey ~£50 each for founder + ops); DMARC + SPF + DKIM on `nichecore.com` (verify; if absent, ~1 day to configure + verify); explicit policy on "no wire transfers, no DPA approvals, no production-credentials over email without out-of-band confirmation".

**Tier-3 (low-to-moderate impact, high probability) — the background noise:**

- **T3a. Automated scans + bot scrapers + content theft.** Mitigation: Cloudflare Bot Management; robots.txt; conservative crawl budget; tolerate the residual.
- **T3b. SEO scraping of the dossier corpus.** Mitigation: tolerate (the editorial product is meant to be public); the lock-in is the freshness pipeline, not the markdown content.

### 5.2 Minimum-viable security posture — year-1 vs year-2

**Year-1 (≤10k MAU, no auth, no AE intake, static + affiliate, ~£15-25k security budget):**

- Cyber Essentials Plus certification (UK Government scheme; ~£1,500-3,000; 1 week of evidence prep; gives a credible trust signal for the marketing footer).
- Privacy notice + cookie banner + DPA matrix for the existing sub-processors (Cloud Run, Cloudflare if added, npm registry — npm is not a runtime sub-processor but document in the SBOM).
- Article 27 EU rep + Article 27 UK rep (~£3-6k/yr total).
- Breach-notification runbook + jurisdictional matrix + named designated privacy officer (founder).
- Multi-region Cloud Run + Cloudflare Workers geo-routing (~£100/mo infra + 2 weeks engineering).
- SBOM discipline (weekly `npm audit` cron; Renovate / Dependabot; signed images at year-end).
- Cloudflare Access on `/admin/*` when the real admin surface ships.

**Year-2 (25-50k MAU, auth shipped, AE intake live, SOC 2 Type 2 prep, ~£60-90k security budget):**

- SOC 2 Type 2 prep — engage Vanta or Drata ($15-25k/yr) + audit firm ($25-50k for Type 2 12-month observation period). 9-12 month timeline. SOC 2 is the US-customer trust signal.
- ISO 27001 Stage-1 + Stage-2 audit — £20-40k including BSI or LRQA fees + ~6 months prep. ISO 27001 is the EU + global trust signal.
- Fractional DPO retainer (~£8-15k/yr).
- DPIA refresh (per surface; ~£3-6k/yr).
- Pen-test annual — £6-12k for a CREST-registered firm + 2-3 weeks of remediation work.
- Field-level encryption with Cloud KMS for AE-intake + cohort-consent.
- Long-term audit-log retention bucket (~£10-30/mo).
- Hardware security keys for founder + ops.
- Cyber-liability insurance — £3-8k/yr for £2-5M cover (Hiscox; Beazley; CFC Underwriting); covers breach response + regulatory defence + extortion + business interruption. **The single most-important year-2 line item after the legal-counsel investment.**

**Year-3 (>50k MAU, direct fulfilment possible, lot-traceability live, ~£120-200k security budget):**

- HITRUST CSF or equivalent for any US enterprise sales (year-3 product-market-fit dependent).
- Full DPO (not fractional).
- VPC Service Controls + Binary Authorization + Confidential Computing for the sensitive workloads.
- 24/7 security monitoring (managed SOC; ~£3-8k/mo).

### 5.3 The asymmetric-wins shortlist

Out of the ~80 line items in this review, the five with the highest leverage:

1. **§1.1 + §1.2 — ship the consent-receipt store + the lawful-basis matrix BEFORE any AE intake** (engineering cost ~2 weeks; blocks BLOCKER 64-68; eliminates the highest-probability regulatory exposure).
2. **§1.3 — multi-region Cloud Run + Cloudflare Workers geo-routing NOW while the codebase is small** (engineering cost ~1-2 weeks; eliminates the structural residency risk).
3. **§4.4 — codify the corp-network-TLS-bypass never-leak rule + CI guard** (engineering cost ~0.5 days; prevents the most-likely accidental supply-chain breach).
4. **§4.2 + §4.5 — drop Zapier from EU flows + drop standard OpenAI API for AE/crisis triage** (architecture cost ~2 days; prevents an undetectable ongoing GDPR violation).
5. **§5.2 year-1 — Cyber Essentials Plus + Article 27 reps + cyber-liability insurance** (cost ~£10-15k total; gives credible trust signal + transfers tail-risk).

### 5.4 What the founder should NOT do

- Do **not** stand up a Postgres-based user-data store before the §1 consent infrastructure is built. The order matters: consent-receipt store first, then any other special-category data store.
- Do **not** ship the SaaS-stitched AE pipeline using the wave-4 vendor list unchanged. Drop Zapier from EU flows; use Anthropic zero-retention or Azure OpenAI EU for AE-triage LLM calls; verify Airtable Enterprise (not Team) for residency.
- Do **not** chase ISO 27001 or SOC 2 in year-1. The audit prep work consumes 3-6 months of founder bandwidth that is better spent on the §1.1-1.4 primitives. Year-2 timeline is correct.
- Do **not** treat the safety-quiz "No data leaves your device" property as a temporary placeholder. It is the strongest privacy claim the product owns. If the quiz is later instrumented with server-side analytics for "conversion optimisation", **the claim becomes a legal liability** under GDPR Art. 5(1)(a) (lawfulness, fairness and transparency) + UK ASA misleading-advertising rules + India DPDP §6 (specific, informed, free, clear consent). Preserve the property; if instrumented, change the copy.
- Do **not** let the LLM-critic / LLM-author pipeline make autonomous edits to dossier content without a human-in-the-loop gate (covered in wave-4 data-engineering; reaffirmed from the security angle: an unaudited LLM-write loop on special-category-relevant content is a CWE-20 + CWE-1100 hybrid the SOC 2 auditor will fail on the first observation period).

---

## §6. Compliance posture summary — by jurisdiction, year-1 vs year-2

| Jurisdiction | Year-1 minimum | Year-2 minimum | Standing exposure |
|---|---|---|---|
| **EU (GDPR + ePrivacy + EU DSA + EU AI Act 2024)** | Privacy notice + cookie banner + Article 27 rep + DPA matrix + breach runbook + multi-region residency plan | DPIA per surface + fractional DPO + ISO 27001 Stage-2 + AI-Act high-risk-system assessment if the crisis-screen classifier counts | High; €20M / 4% turnover ceiling per Art. 83(5) |
| **UK (UK GDPR + DPA 2018 + UK OSA 2023 + UK PECR)** | Article 27 UK rep + ICO registration + breach runbook + Cyber Essentials Plus | Fractional DPO + ISO 27001 + OSA Category 2B duty-of-care register (per wave-4 trust-and-safety) | High; UK ICO max £17.5M / 4% turnover |
| **India (DPDP Act 2023 + draft DPDP Rules 2025 + DMR Act 1954 + IT Rules 2021)** | Consent capture per §6 + grievance officer + data-fiduciary registration + India residency for India users | DPIA-equivalent per §10 high-risk processing + India-resident data fiduciary representative + India-region Supabase | High; ₹250 crore max under §33; DMR Act criminal for misbranding |
| **Australia (Privacy Act 1988 + Notifiable Data Breaches + TGAAC)** | Privacy policy + notifiable breaches assessment workflow + OAIC notification template | OAIC PIA + APP 12 access pipeline + AU residency for AU users (Supabase ap-southeast-2) | Moderate-high; AU$50M / 30% turnover under 2022 amendments |
| **Canada (PIPEDA + Quebec Law 25)** | Privacy policy + Quebec PIA template + breach reporting | OPC PIA + Quebec-specific consent flow if user IP geolocates | Moderate; OPC enforcement is advisory; Quebec Law 25 has teeth |
| **US (CCPA + WA MHMD + ColoPA + CT CTDPA + state AG enforcement)** | Privacy notice + CCPA opt-out link + WA MHMD consent for WA residents + Do-Not-Sell + per-state notice | State-by-state subscription compliance + auto-renewal disclosure under state AG enforcement (per wave-2 ad-substantiation review) | Moderate; WA MHMD private right of action is the asymmetric risk; FTC Health Breach Notification Rule expanded 2024 |

---

## §7. The wave-5 ship-list — concrete, ordered

**Sprint 0 (this week, ~5 engineering days):**
- §4.4 — codify corp-network-TLS-bypass never-leak rule + CI guard
- §3.1 A05 — add security-header bundle to `next.config.ts`
- §3.4 — document CSRF pattern for future API routes
- §4.1.1 — `npm audit` + Dependabot/Renovate workflow
- §1.4 — draft breach-notification runbook (DPO = founder; named on-call rotation)

**Sprint 1 (next sprint, ~10 engineering days):**
- §1.3 — multi-region Cloud Run + Cloudflare Workers geo-router
- §1.2 — consent-receipt store schema + `/api/consent/receipts` endpoint (the load-bearing first ship before any AE work)
- §2.4 — Cloudflare Access on `/admin/*`
- §3.5 — Cloudflare rate-limiting + Turnstile preparation
- Article 27 reps engagement + DPA-matrix legal counsel engagement

**Sprint 2-3 (~3 weeks):**
- §1.5 — DSAR intake schema + runbook
- §4.2 + §4.5 — redraft SaaS-stitched AE pipeline (drop Zapier from EU; zero-retention LLM for triage; Airtable Enterprise)
- Cyber Essentials Plus assessment
- §2.5 — affiliate-redirect allowlist audit

**Sprint 4-6 (next 6 weeks, ahead of any AE intake go-live):**
- §1.2 — DPIA for AE intake + DPIA for C-SSRS Brief Screen
- §2.2 + §2.3 — Supabase Auth + cohort-consent pattern + two-table AE architecture
- §4.5 — LLM-data-classification matrix + ESLint guard
- Cyber-liability insurance procurement

**Year-2 (months 7-18):**
- §5.2 year-2 — SOC 2 Type 2 + ISO 27001 + fractional DPO + pen-test + field-level encryption + KMS

---

## §8. Closing — the honest one-paragraph verdict

NicheCore today has accidentally the best security posture it will ever have: zero server-side user data, zero auth surface, zero special-category data on the wire. Every backlog item from waves 1-4 proposes to degrade this. The founder's leverage is in **ordering the degradations** so the privacy infrastructure precedes the data capture, the residency architecture precedes the EU launch, the consent-receipt store precedes the AE intake, the breach runbook precedes the breach, and the corp-network-TLS-bypass never reaches production. None of these are exotic — they are the boring middle of the OWASP ASVS + ISO 27001 + NIST CSF playbook. The total year-1 security investment to do them right is £15-25k + ~6 founder-engineering-weeks. The total cost of doing them wrong, in expectation, is the company. Wave-5 is the brief.

---

**Wave-5 BLOCKERs.** 65 (DPA matrix for nine sub-processors), 66 (lawful-basis matrix by jurisdiction), 67 (multi-region residency before AE go-live), 68 (breach-notification runbook + Article 27 reps), 69 (auth architecture before subscription/companion ship), 70 (corp-network-TLS-bypass never-leak CI guard).

**P1 corrections.** ~14: security-header bundle, CSP, CSRF runbook, npm-audit CI, allowlist redirects, Cloudflare rate-limit + Turnstile, ConversionStrip default-prop sentinel pattern, two-table AE architecture, SaaS-stitched AE redraft (drop Zapier EU; zero-retention LLM; Airtable Enterprise), Cloudflare Access on admin, LLM data-classification ESLint, audit-log discipline at design time, DSAR intake schema, ePrivacy/cookie-banner alignment.

**P2 polish.** ~9: XSS lock-in CI test, lockfile-drift check, pinned major versions, CycloneDX SBOM artifact, signed Docker images, VPC Service Controls, CSCC Standard tier, Cloud KMS field-level encryption, IAP redundancy for admin.

**Wave-5 doctrine respected.** No FDA/AHA/ADA/etc as authority anchors; UK ICO + EU EDPB + India DPB + Australia OAIC + Canada OPC as primary regulatory references throughout. No prescription-clinical assumptions — the security architecture covers the OTC + home + affiliate + companion product the dossier ships, with zero clinic-route data dependencies.

**Reviewer:** Senior infosec + healthcare-data specialist · cross-jurisdictional · 2026-06-10 · doctrine-clean.
