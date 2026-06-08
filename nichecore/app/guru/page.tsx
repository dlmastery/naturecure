"use client";

import { useState } from "react";
import {
  Sparkles, Send, ShieldCheck, Cpu, Database, FlaskConical, UserRound,
  CircleCheck, CircleDot, Filter, Ban,
} from "lucide-react";
import { Eyebrow, GradeBadge } from "@/components/ui";

const SUGGESTED = [
  "Explain my vitiligo antioxidant layer and how strong the evidence is.",
  "Is berberine safe with my diabetes medication?",
  "Why did you pick magnesium glycinate over citrate?",
  "I have new rapidly spreading patches — what should I do?",
];

type EventItem = { tool: string; detail: string; icon: typeof Database };

const RUN_EVENTS: EventItem[] = [
  { tool: "retrieve.reviewedContent", detail: "Loaded skin-pigmentation hub (reviewed 2026-05-03)", icon: Database },
  { tool: "evidence.grade.lookup", detail: "Pulled grades for sulforaphane (C), probiotic (B), magnesium (B)", icon: FlaskConical },
  { tool: "safety.screen", detail: "Checked intake flags — no contraindications fired", icon: ShieldCheck },
  { tool: "compose.answer", detail: "Bound answer to claim IDs + source links — no free-form claims", icon: Cpu },
];

const UNSAFE_TRIGGER = /spreading|chest pain|suicid|self[- ]?harm|kill myself|end (my|it) (all|now|life)|hopeless|hypoglyc|emergency|cure|sudden hearing loss|hearing loss in (one|left|right) ear|deaf in (one|left|right) ear|one[- ]?sided|asymmetric|unilateral|pulsatile|whooshing|heartbeat in (my )?ear|new headache|worst headache|thunderclap|visual obscur|papill?oedema|sshl|hashimoto|levothyrox|warfarin|coumadin|ototoxi|aminoglycos|cisplatin|gentamicin|tobramycin|amikacin|vanco|furosemid|bumetanid|cinchona|quinine|chemo|radiation|stroke|tia|seizure|fainted|loss of consciousness|pregnant|breastfeed|lactating|postpart|peri[- ]?delivery|pre[- ]?eclamp|hellp|epidural|spinal block|pdph|sheehan|pituitary|cvst|venous sinus thromb|bell.s palsy|facial droop|facial weakness|tongue numb|slurred speech|hemipares|vertigo and|nystagmus|menieres? (attack|crisis)|hyperten(sive|sion) (urgency|crisis)|bp (over |above |of )(180|200)|stiff neck|photophobia/i;

export default function Guru() {
  const [prompt, setPrompt] = useState("");
  const [phase, setPhase] = useState<"idle" | "running" | "done" | "escalate">("idle");
  const [shown, setShown] = useState(0);

  function run(text: string) {
    setPrompt(text);
    if (UNSAFE_TRIGGER.test(text)) { setPhase("escalate"); return; }
    setPhase("running"); setShown(0);
    RUN_EVENTS.forEach((_, i) => setTimeout(() => {
      setShown(i + 1);
      if (i === RUN_EVENTS.length - 1) setTimeout(() => setPhase("done"), 500);
    }, (i + 1) * 600));
  }

  return (
    <div className="grain relative pb-16">
      <section className="px-6 pt-12 sm:px-10 lg:px-14">
        <Eyebrow>AI Guru · agentic workspace</Eyebrow>
        <h1 className="font-display mt-4 text-balance text-5xl leading-[1.0] sm:text-6xl">
          Not a chatbot. A <span className="italic" style={{ color: "var(--color-forest)" }}>verified</span> task workspace.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          The Guru explains reviewed content, cites the grade and the source, and shows what it filtered out.
          It never diagnoses, prescribes, invents citations, or recommends outside the approved library.
        </p>
      </section>

      <section className="grid gap-6 px-6 pt-10 sm:px-10 lg:grid-cols-[1.6fr_1fr] lg:px-14">
        {/* Workspace */}
        <div className="space-y-5">
          <div className="card-soft p-5">
            <Eyebrow>Run a task</Eyebrow>
            <div className="mt-3 flex items-end gap-3">
              <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={2}
                placeholder="Ask about a protocol, an ingredient, an evidence grade, or your safety…"
                className="w-full resize-none rounded-2xl border bg-white px-4 py-3 text-sm outline-none" style={{ borderColor: "var(--color-line-strong)" }} />
              <button onClick={() => run(prompt || SUGGESTED[0])} className="btn-primary shrink-0"><Send size={15} /> Run</button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {SUGGESTED.map((s) => <button key={s} onClick={() => run(s)} className="chip hover:underline">{s}</button>)}
            </div>
          </div>

          {/* Result */}
          {phase === "escalate" && (
            <div className="card-soft p-6" style={{ background: "var(--color-blush)" }}>
              <div className="flex items-center gap-2" style={{ color: "var(--color-blush-ink)" }}><ShieldCheck size={18} /><span className="font-medium">Routed to a human — this is outside my scope.</span></div>
              <p className="mt-3 text-[0.9rem] leading-relaxed" style={{ color: "var(--color-blush-ink)" }}>
                That looks safety-sensitive. I won't give a self-directed protocol here. Rapidly spreading patches,
                medication interactions or red-flag symptoms route to a clinician or our expert network. Want me to
                prepare a summary for an expert review?
              </p>
              <a href="/expert" className="btn-primary mt-4 !py-2">Request expert review</a>
            </div>
          )}

          {(phase === "running" || phase === "done") && (
            <div className="card-soft p-6">
              <div className="flex items-center justify-between">
                <Eyebrow>{phase === "done" ? "Verified result" : "Working…"}</Eyebrow>
                {phase === "done" && <span className="chip" style={{ color: "var(--color-mint-ink)" }}><CircleCheck size={13} /> source-bound · no free claims</span>}
              </div>
              {phase === "done" && (
                <div className="mt-4 space-y-4">
                  <p className="text-[0.95rem] leading-relaxed">
                    Your antioxidant layer (broccoli-sprout sulforaphane + amla) targets the <strong>Nrf2 pathway</strong> where
                    pigment cells face oxidative stress. Here's the honest evidence picture:
                  </p>
                  <div className="space-y-2">
                    {[
                      { g: "C" as const, t: "Sulforaphane — some human data, early/mixed. “May support antioxidant defence; not a cure.”" },
                      { g: "B" as const, t: "Gut-skin probiotic — promising human evidence, not settled." },
                      { g: "T" as const, t: "Amla — documented traditional use; not the same as clinical proof." },
                    ].map((r) => (
                      <div key={r.g} className="flex items-start gap-3 rounded-xl p-3" style={{ background: "var(--color-paper-deep)" }}>
                        <GradeBadge grade={r.g} /><span className="text-[0.86rem] leading-snug">{r.t}</span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl p-4" style={{ background: "var(--color-amber)", color: "var(--color-amber-ink)" }}>
                    <div className="flex items-center gap-2 text-sm font-medium"><Filter size={15} /> What I filtered out</div>
                    <p className="mt-1.5 text-[0.84rem] leading-relaxed">High-dose claims, “repigmentation guaranteed” language, and any ingredient outside your reviewed protocol library.</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Event log */}
          {(phase === "running" || phase === "done") && (
            <div className="card-soft p-5">
              <Eyebrow>Event log · tool invocations</Eyebrow>
              <ol className="mt-4 space-y-2.5">
                {RUN_EVENTS.map((e, i) => {
                  const active = i < shown;
                  return (
                    <li key={e.tool} className="flex items-center gap-3 text-[0.82rem] transition-opacity" style={{ opacity: active ? 1 : 0.3 }}>
                      {active ? <CircleCheck size={15} style={{ color: "var(--color-forest-soft)" }} /> : <CircleDot size={15} style={{ color: "var(--color-ink-faint)" }} />}
                      <span className="font-mono text-[0.72rem]" style={{ color: "var(--color-forest)" }}>{e.tool}</span>
                      <span style={{ color: "var(--color-ink-soft)" }}>{e.detail}</span>
                    </li>
                  );
                })}
              </ol>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="card-soft p-5">
            <Eyebrow>Agent roster</Eyebrow>
            <div className="mt-3 space-y-2.5">
              {[
                { n: "Evidence explainer", d: "Interprets grades & sources", i: FlaskConical },
                { n: "Intake guide", d: "Runs the safety screen", i: ShieldCheck },
                { n: "Regime coach", d: "Daily adherence & swaps", i: Cpu },
                { n: "Refill advisor", d: "Continue / pause / adjust", i: Database },
              ].map((a) => (
                <div key={a.n} className="flex items-center gap-3"><a.i size={16} style={{ color: "var(--color-forest-soft)" }} /><div><div className="text-[0.85rem] font-medium">{a.n}</div><div className="text-[0.72rem]" style={{ color: "var(--color-ink-faint)" }}>{a.d}</div></div></div>
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius-card)] p-5" style={{ background: "var(--color-forest)", color: "var(--color-paper)" }}>
            <Eyebrow><span style={{ color: "#ffffff80" }}>Hard guardrails</span></Eyebrow>
            <ul className="mt-3 space-y-2 text-[0.82rem]" style={{ color: "#ffffffe0" }}>
              {["No diagnosis or prescription", "No invented citations", "No claims outside the library", "Escalates red flags to humans"].map((g) => (
                <li key={g} className="flex items-center gap-2"><Ban size={13} style={{ color: "var(--color-amber)" }} /> {g}</li>
              ))}
            </ul>
          </div>

          <div className="card-soft p-5">
            <Eyebrow>Human steering</Eyebrow>
            <p className="mt-2 text-[0.82rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
              Add a constraint and the Guru re-plans within the approved library — “prefer diet-first”, “capsules only”, “lowest pill burden”.
            </p>
            <a href="/expert" className="mt-3 inline-flex items-center gap-2 text-[0.85rem] font-medium" style={{ color: "var(--color-forest)" }}><UserRound size={15} /> Escalate to a human expert →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
