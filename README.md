# NicheCore / nature_cure

**The evidence OS for natural health.** Not a chatbot. Not a blog.

A consumer wellness-commerce platform that turns high-value health needs into **evidence-backed natural protocols**, curated supplement & lifestyle packages, recurring mobile adherence, and optional AI + human holistic expert guidance.

This is a full reboot, built from three sources:
1. **Requirements & specifications** — the portable product snapshot (thesis, evidence doctrine, 13 categories, 50-journey atlas, commerce model, safety gates, agentic UX spec, design decks).
2. **Vision & end-user experience** — the founder transcript (anti-establishment, evidence-based natural health made accessible, warm-expert tone).
3. **Protocol substance** — real OTC/herbal/nutrient protocols for the flagship conditions (vitiligo, diabetes) with doses, mechanisms, evidence grades, and safety.

## Structure

```
naturecure/
├── nichecore/        → the Next.js web application (the product)
├── ledger/           → the mental-model ledger (build source-of-truth)
└── README.md
```

> Reference material (`_snapshot/`, the source `.zip` files) is intentionally git-ignored — it is bulky and not part of the build.

## The app

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**, deployable on Vercel.

```bash
cd nichecore
npm install
npm run dev
```

Design language: an **editorial serif voice** (cream paper, Didone-style headlines, gold numerals, hairline rules) for narrative surfaces, paired with a **material product UI** (bone canvas, soft rounded cards where colour encodes evidence/meaning, forest-green governance cards) for the app. Premium, clinical-but-warm, anti-influencer.

## Principles (load-bearing)

- Every claim carries a **visible evidence grade** (A/B/C/D/T/H/X) with sources, last-reviewed + next-refresh dates.
- **Product quality score is separate from efficacy** — two distinct signals.
- A real **safety screen** runs before any package recommendation.
- The AI Guru **explains reviewed content only** — it never diagnoses, prescribes, claims cures, or invents citations.
- Honest uncertainty everywhere. No miracle claims.

See `ledger/MENTAL_MODEL_LEDGER.md` for the complete build model.
