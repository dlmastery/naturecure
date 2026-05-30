import Link from "next/link";
import { ArrowRight, Sparkles, Sun, Wind, Leaf, TriangleAlert, CircleX } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { vitiligo } from "@/lib/vitiligo";
import { getBundle } from "@/lib/data";
import { ACCENTS } from "@/lib/evidence";
import { Eyebrow, GradeBadge, FreshnessChip, RuleCard, SafetyNote } from "@/components/ui";
import { BundleCard } from "@/components/bundle-card";
import { NextStep } from "@/components/next-step";
import { readDossier, splitDossierByH2 } from "@/lib/research";
import { Footer } from "@/app/page";
import { DossierShell, type SectionSpec } from "@/components/layout/dossier-shell";
import { SectionAnchor } from "@/components/layout/section-anchor";
import { SectionFooter } from "@/components/layout/section-footer";
import { ManifestoBand } from "@/components/layout/manifesto-band";
import { FoundationPillarRow } from "@/components/layout/foundation-pillar-row";
import { Callout } from "@/components/callouts/callout";

export const metadata = { title: "Vitiligo support — NicheCore", description: vitiligo.promise };

/**
 * Canonical 15-section manifest for the vitiligo journey. Order + ids
 * match the sticky left rail and the URL hash spec (§3.2).
 */
const VITILIGO_TABS: SectionSpec[] = [
  { id: "overview",      ordinal: "01", label: "Overview",                group: "START HERE" },
  { id: "science",       ordinal: "02", label: "The science",             group: "START HERE" },
  { id: "phyto",         ordinal: "03", label: "OTC phytochemicals",      group: "YOUR PROTOCOL" },
  { id: "traditions",    ordinal: "04", label: "Traditional systems",     group: "YOUR PROTOCOL" },
  { id: "biophysical",   ordinal: "05", label: "Biophysical",             group: "YOUR PROTOCOL" },
  { id: "diet",          ordinal: "06", label: "Diet & meal plan",        group: "YOUR PROTOCOL" },
  { id: "lifestyle",     ordinal: "07", label: "Lifestyle anchors",       group: "YOUR PROTOCOL" },
  { id: "combos",        ordinal: "08", label: "Daily combos",            group: "YOUR PROTOCOL" },
  { id: "daily",         ordinal: "09", label: "Master 24-hour plan",     group: "YOUR PROTOCOL" },
  { id: "interactions",  ordinal: "10", label: "Interaction matrix",      group: "SAFETY & TRACKING" },
  { id: "scoring",       ordinal: "11", label: "Scoring instrument",      group: "SAFETY & TRACKING" },
  { id: "timeline",      ordinal: "12", label: "12-month timeline",       group: "SAFETY & TRACKING" },
  { id: "suppliers",     ordinal: "13", label: "Supplier ecosystem",      group: "REFERENCE & CARE" },
  { id: "closing",       ordinal: "14", label: "Closing paradigm",        group: "REFERENCE & CARE" },
  { id: "references",    ordinal: "15", label: "References",              group: "REFERENCE & CARE" },
];

/**
 * Mapping from dossier H2 slug → the canonical tab id whose <SectionAnchor>
 * the parsed prose should be rendered inside. Multiple H2s can fold into
 * the same anchor.
 */
const CHUNK_TO_TAB: Record<string, string> = {
  "executive-summary": "overview",
  "mechanistic-triad-4-node-network": "science",
  "clinical-sub-types-differential-prognosis": "science",
  "otc-phytochemicals-pharmacological-validation": "phyto",
  "traditional-medicine-integration": "traditions",
  "biophysical-interventions-home-administered-only": "biophysical",
  "dietary-protocol": "diet",
  "lifestyle-mind-body-anchors-mapped-to-2-mechanism-nodes": "lifestyle",
  "daily-unified-combos-10-capsday": "combos",
  "master-24-hour-day-plan": "daily",
  "supplier-ecosystem-monthly-cost": "suppliers",
  "interaction-matrix": "interactions",
  "clinical-scoring-comorbidity-screening": "scoring",
  "implementation-timeline-12-months-self-tracked": "timeline",
  "illustrative-case-composite": "timeline",
  "patient-facing-primer": "closing",
  "independent-healing-paradigm": "closing",
  "references": "references",
};

export default function VitiligoJourney() {
  const bundle = getBundle("skin-resilience-90");
  const dossier = readDossier("vitiligo-support");
  const chunks = dossier ? splitDossierByH2(dossier.body) : [];

  // Bucket chunks by tab id.
  const chunksByTab: Record<string, { id: string; title: string; body: string }[]> = {};
  for (const c of chunks) {
    const tabId = CHUNK_TO_TAB[c.id];
    if (!tabId) continue;
    if (!chunksByTab[tabId]) chunksByTab[tabId] = [];
    chunksByTab[tabId].push(c);
  }

  const dossierFor = (tabId: string) => chunksByTab[tabId] ?? [];

  return (
    <DossierShell
      tabs={VITILIGO_TABS}
      brand={{ wordmark: "NicheCore", line: "evidence OS", mark: "VT" }}
      title={
        <span>
          Vitiligo
          <span className="italic" style={{ color: "var(--color-forest)", marginLeft: "0.5em" }}>
            · Skin &amp; pigmentation
          </span>
        </span>
      }
      primaryCta={{ label: "Build my regime", href: "/c/skin-pigmentation/package" }}
      rightBadges={[
        <span key="sources" className="chip">42 sources</span>,
        <span key="refreshed" className="chip">refreshed 14d ago</span>,
        <span key="no-cure" className="chip">no cure claims</span>,
      ]}
    >
      {/* ── 01 · Overview ─────────────────────────────────────── */}
      <SectionAnchor
        id="overview"
        eyebrow="A patient-built reference · 360° protocol"
        ordinal="01"
        title={
          <>
            The vitiligo journey,
            <br />
            <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>without the snake oil.</em>
          </>
        }
        lede="A natural, OTC, home-based protocol for vitiligo. Reset (weeks 1–4) → Build (5–12) → Compound (13–24). 360° coverage: NRF2 botanicals, gut healing, traditional systems, photobiomodulation, diet, lifestyle. No prescription, no clinic, no hospital."
      >
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-[0.75rem]">
            <Link href="/" className="hover:underline" style={{ color: "var(--color-ink-faint)" }}>Needs</Link>
            <span style={{ color: "var(--color-ink-faint)" }}>/</span>
            <Link href="/c/skin-pigmentation" className="hover:underline" style={{ color: "var(--color-ink-faint)" }}>Skin</Link>
            <span style={{ color: "var(--color-ink-faint)" }}>/</span>
            <span style={{ color: "var(--color-ink)" }}>Vitiligo</span>
          </div>

          <div className="mb-7 flex flex-wrap items-center gap-2">
            <FreshnessChip status="fresh" />
            <span className="chip">adjunctive only</span>
            {(["B", "C", "D", "T"] as const).map((g) => (
              <GradeBadge key={g} grade={g} withLabel />
            ))}
          </div>

          <div className="mb-9 flex flex-wrap items-center gap-3">
            <Link href="/c/skin-pigmentation/package" className="btn-primary">
              Build my 90-day regime <ArrowRight size={16} />
            </Link>
            <Link href="/guru" className="btn-ghost">
              <Sparkles size={15} /> Ask the Guru
            </Link>
            <Link href="#science" className="btn-ghost">Read the science</Link>
          </div>

          <FoundationPillarRow
            pillars={[
              { ordinal: "01", title: "Evidence first",   desc: "Every claim graded, dated, sourced." },
              { ordinal: "02", title: "Natural protocols", desc: "OTC + home-administered only." },
              { ordinal: "03", title: "Recurring care",    desc: "Refills + app companion." },
              { ordinal: "04", title: "Honest boundaries", desc: "No cure claims. The refusal is the conversion." },
            ]}
          />

          <div className="mt-10">
            <Eyebrow>What the research actually says</Eyebrow>
            <ul className="mt-3 space-y-2">
              {vitiligo.evidenceFeed.slice(0, 3).map((e, i) => (
                <li key={i} className="card-soft flex items-start gap-4 p-4">
                  <GradeBadge grade={e.grade} />
                  <div className="flex-1">
                    <span className="text-[0.95rem] leading-relaxed">{e.finding}</span>
                    <span className="ml-2 font-mono text-[0.68rem]" style={{ color: "var(--color-ink-faint)" }}>· {e.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Callout tone="note" title="Support the terrain.">
              We don&rsquo;t promise a cure. Adjunctive natural support, educational only — never a replacement for your clinician.
            </Callout>
          </div>

          <DossierChunks chunks={dossierFor("overview")} />
        </div>
      </SectionAnchor>
      <SectionFooter cue="The honest opening" chapter="SC.01 · OVERVIEW" />

      {/* ── 02 · The science ──────────────────────────────────── */}
      <SectionAnchor
        id="science"
        eyebrow="The science"
        ordinal="02"
        title={
          <>
            Four mechanisms, <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>one engine.</em>
          </>
        }
        lede="One protocol, two diseases, same molecular engine — oxidative stress, gut-skin axis, dysbiosis, HPA dysregulation."
      >
        <div className="mx-auto max-w-[1080px] space-y-3">
          {vitiligo.mechanisms.map((m, i) => {
            const a = Object.values(ACCENTS)[i % 5];
            return (
              <div key={m.loop} className="card-soft grid items-center gap-3 p-4 sm:grid-cols-[1.1fr_auto_1fr_auto_1.1fr]">
                <div className="rounded-xl px-3 py-2 text-sm font-medium" style={{ background: a.fill, color: a.ink }}>{m.loop}</div>
                <ArrowRight size={16} className="hidden justify-self-center sm:block" style={{ color: "var(--color-ink-faint)" }} />
                <div className="text-sm">{m.target}</div>
                <ArrowRight size={16} className="hidden justify-self-center sm:block" style={{ color: "var(--color-ink-faint)" }} />
                <div className="text-sm font-medium" style={{ color: "var(--color-forest)" }}>{m.action}</div>
              </div>
            );
          })}
          <DossierChunks chunks={dossierFor("science")} />
        </div>
      </SectionAnchor>
      <ManifestoBand
        keyword="THE TRIAD RULE"
        body={<>Fix the upstream and both downstream symptoms ease.</>}
      />
      <SectionFooter cue="Mechanism over symptoms" chapter="SC.02 · SCIENCE" />

      {/* ── 03 · OTC phytochemicals ───────────────────────────── */}
      <SectionAnchor
        id="phyto"
        eyebrow="OTC phytochemicals"
        ordinal="03"
        title={
          <>
            Pharmacologically validated <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>botanicals.</em>
          </>
        }
      >
        <div className="mx-auto max-w-[1080px]">
          <DossierChunks chunks={dossierFor("phyto")} />
        </div>
      </SectionAnchor>
      <SectionFooter cue="Stack with intent" chapter="SC.03 · PHYTO" />

      {/* ── 04 · Traditional systems ──────────────────────────── */}
      <SectionAnchor
        id="traditions"
        eyebrow="Traditional systems"
        ordinal="04"
        title={
          <>
            Six lineages, <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>one terrain.</em>
          </>
        }
      >
        <div className="mx-auto max-w-[1080px]">
          <DossierChunks chunks={dossierFor("traditions")} />
        </div>
      </SectionAnchor>
      <SectionFooter cue="Lineage, not folklore" chapter="SC.04 · TRADITIONS" />

      {/* ── 05 · Biophysical ──────────────────────────────────── */}
      <SectionAnchor
        id="biophysical"
        eyebrow="Biophysical interventions"
        ordinal="05"
        title={
          <>
            Light, heat, cold — <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>at home.</em>
          </>
        }
      >
        <div className="mx-auto max-w-[1080px]">
          <DossierChunks chunks={dossierFor("biophysical")} />
        </div>
      </SectionAnchor>
      <SectionFooter cue="Dose discipline" chapter="SC.05 · BIOPHYSICAL" />

      {/* ── 06 · Diet & meal plan ─────────────────────────────── */}
      <SectionAnchor
        id="diet"
        eyebrow="Diet & meal plan"
        ordinal="06"
        title={
          <>
            What you eat is <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>protocol.</em>
          </>
        }
      >
        <div className="mx-auto max-w-[1080px]">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="card-soft p-6">
              <Eyebrow>The non-negotiable diet</Eyebrow>
              <h3 className="font-display mt-2 text-2xl">{vitiligo.diet.name}</h3>
              <ul className="mt-4 space-y-2">{vitiligo.diet.nonNegotiable.map((d) => (
                <li key={d} className="flex gap-2.5 text-[0.88rem]">
                  <Leaf size={15} className="mt-0.5 shrink-0" style={{ color: "var(--color-forest-soft)" }} />{d}
                </li>
              ))}</ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {vitiligo.diet.avoid.map((a) => (
                  <span key={a} className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.76rem]" style={{ background: "var(--color-blush)", color: "var(--color-blush-ink)" }}>
                    <CircleX size={12} /> {a}
                  </span>
                ))}
              </div>
            </div>
            <div className="card-soft p-6">
              <Eyebrow>What the dossier says</Eyebrow>
              <DossierChunks chunks={dossierFor("diet")} />
            </div>
          </div>
        </div>
      </SectionAnchor>
      <ManifestoBand
        keyword="THE PLATE RULE"
        body={<>Half the work is which spice, which oil, which fast.</>}
      />
      <SectionFooter cue="Plate as protocol" chapter="SC.06 · DIET" />

      {/* ── 07 · Lifestyle anchors ────────────────────────────── */}
      <SectionAnchor
        id="lifestyle"
        eyebrow="Lifestyle anchors"
        ordinal="07"
        title={
          <>
            Yoga, breath, sleep — <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>the daily reset.</em>
          </>
        }
      >
        <div className="mx-auto max-w-[1080px] grid gap-4">
          {vitiligo.anchors.map((a) => (
            <div key={a.name} className="card-soft flex items-start gap-4 p-6">
              {a.name === "Pranayama" ? <Wind size={22} style={{ color: "var(--color-forest)" }} /> : <Sun size={22} style={{ color: "var(--color-gold-deep)" }} />}
              <div><h3 className="font-medium">{a.name}</h3><p className="mt-1 text-[0.86rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>{a.detail}</p></div>
            </div>
          ))}
          <DossierChunks chunks={dossierFor("lifestyle")} />
        </div>
      </SectionAnchor>
      <SectionFooter cue="The non-negotiables" chapter="SC.07 · LIFESTYLE" />

      {/* ── 08 · Daily combos ─────────────────────────────────── */}
      <SectionAnchor
        id="combos"
        eyebrow="The cellular resilience regime"
        ordinal="08"
        title={
          <>
            Three daily combos, <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>all post-meal.</em>
          </>
        }
        lede="Novel, untested combinations grounded in mechanism and traditional use — framed honestly as hypothetical adjunctive support, never proven cures."
      >
        <div className="mx-auto max-w-[1080px]">
          <div className="grid gap-5 lg:grid-cols-3">
            {vitiligo.combos.map((combo) => (
              <div key={combo.name} className="card-soft flex flex-col overflow-hidden">
                <div className="px-5 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.66rem] uppercase tracking-wider" style={{ color: "var(--color-gold-deep)" }}>{combo.timing}</span>
                    <GradeBadge grade={combo.grade} />
                  </div>
                  <h3 className="font-display mt-3 text-xl leading-tight">{combo.name}</h3>
                  <p className="mt-2 text-[0.82rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>{combo.rationale}</p>
                </div>
                <div className="mt-4 border-t" style={{ borderColor: "var(--color-line)" }}>
                  {combo.items.map((it) => (
                    <div key={it.name} className="flex items-center justify-between gap-2 border-b px-5 py-2.5 last:border-b-0" style={{ borderColor: "var(--color-line)" }}>
                      <div className="min-w-0">
                        <div className="text-[0.86rem] font-medium">{it.name}</div>
                        <div className="text-[0.72rem]" style={{ color: "var(--color-ink-faint)" }}>{it.note}</div>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <span className="font-mono text-[0.72rem]" style={{ color: "var(--color-ink-soft)" }}>{it.dose}</span>
                        <GradeBadge grade={it.grade} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <DossierChunks chunks={dossierFor("combos")} />
        </div>
      </SectionAnchor>
      <SectionFooter cue="Stack with timing" chapter="SC.08 · COMBOS" />

      {/* ── 09 · Master 24-hour plan ──────────────────────────── */}
      <SectionAnchor
        id="daily"
        eyebrow="Master 24-hour plan"
        ordinal="09"
        title={
          <>
            06:00 to 23:00, <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>scripted.</em>
          </>
        }
      >
        <div className="mx-auto max-w-[1080px]">
          <DossierChunks chunks={dossierFor("daily")} />
        </div>
      </SectionAnchor>
      <ManifestoBand
        keyword="THE DAY RULE"
        body={<>Every hour earns its place. The script protects the protocol.</>}
      />
      <SectionFooter cue="The day plan" chapter="SC.09 · DAILY" />

      {/* ── 10 · Interaction matrix ───────────────────────────── */}
      <SectionAnchor
        id="interactions"
        eyebrow="Safety before commerce"
        ordinal="10"
        title={
          <>
            Every interaction, <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>flagged.</em>
          </>
        }
      >
        <div className="mx-auto max-w-[1080px] grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-3">
            {vitiligo.interactions.map((it) => (
              <div key={it.combo} className="card-soft flex items-start gap-3 p-4">
                <TriangleAlert size={18} className="mt-0.5 shrink-0" style={{ color: "var(--color-amber-ink)" }} />
                <div>
                  <div className="text-[0.9rem] font-medium">{it.combo}</div>
                  <div className="mt-0.5 text-[0.82rem]" style={{ color: "var(--color-blush-ink)" }}>Risk: {it.risk}</div>
                  <div className="mt-1 text-[0.82rem]" style={{ color: "var(--color-ink-soft)" }}>→ {it.action}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <RuleCard title="Strictly avoid">
              <div className="flex flex-wrap gap-2">{vitiligo.avoidList.map((a) => <span key={a} className="rounded-full px-2.5 py-1 text-[0.76rem]" style={{ background: "#ffffff22" }}>{a}</span>)}</div>
            </RuleCard>
            <SafetyNote>
              <strong>Adjunctive only.</strong> Never replaces phototherapy or JAK inhibitors for active disease. Get baseline labs, track with photos, and run an 8–12 week trial under your dermatologist.
            </SafetyNote>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-[1080px]">
          <DossierChunks chunks={dossierFor("interactions")} />
        </div>
      </SectionAnchor>
      <SectionFooter cue="Flagged, not feared" chapter="SC.10 · INTERACTIONS" />

      {/* ── 11 · Scoring instrument ───────────────────────────── */}
      <SectionAnchor
        id="scoring"
        eyebrow="Clinical scoring + comorbidity"
        ordinal="11"
        title={
          <>
            Track it yourself, <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>by the book.</em>
          </>
        }
      >
        <div className="mx-auto max-w-[1080px]">
          <DossierChunks chunks={dossierFor("scoring")} />
        </div>
      </SectionAnchor>
      <SectionFooter cue="Numbers don't lie" chapter="SC.11 · SCORING" />

      {/* ── 12 · 12-month timeline ────────────────────────────── */}
      <SectionAnchor
        id="timeline"
        eyebrow="What to expect"
        ordinal="12"
        title={
          <>
            An honest <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>12-month arc.</em>
          </>
        }
      >
        <div className="mx-auto max-w-[1080px]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {vitiligo.timeline.map((t) => (
              <div key={t.week} className="card-soft p-5">
                <span className="font-mono text-[0.7rem] uppercase tracking-wider" style={{ color: "var(--color-gold-deep)" }}>{t.week}</span>
                <h3 className="mt-2 font-medium">{t.title}</h3>
                <p className="mt-1.5 text-[0.82rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>{t.description}</p>
                <p className="mt-3 chip">{t.metric}</p>
              </div>
            ))}
          </div>
          <DossierChunks chunks={dossierFor("timeline")} />
        </div>
      </SectionAnchor>
      <ManifestoBand
        keyword="THE TIME RULE"
        body={<>Compound interest, paid in months — never in weeks.</>}
      />
      <SectionFooter cue="The arc, not the spike" chapter="SC.12 · TIMELINE" />

      {/* ── 13 · Supplier ecosystem ───────────────────────────── */}
      <SectionAnchor
        id="suppliers"
        eyebrow="The 90-day Vitiligo Support Pack"
        ordinal="13"
        title={
          <>
            Quality-screened, <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>COA-backed.</em>
          </>
        }
      >
        <div className="mx-auto max-w-[1080px]">
          {bundle && <BundleCard bundle={bundle} ctaHref="/c/skin-pigmentation/package" />}
          <DossierChunks chunks={dossierFor("suppliers")} />
        </div>
      </SectionAnchor>
      <SectionFooter cue="Quality is the moat" chapter="SC.13 · SUPPLIERS" />

      {/* ── 14 · Closing paradigm ─────────────────────────────── */}
      <SectionAnchor
        id="closing"
        eyebrow="The independent healing paradigm"
        ordinal="14"
        title={
          <>
            No prescription. No clinic. <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>No hospital.</em>
          </>
        }
      >
        <div className="mx-auto max-w-[1080px]">
          <FoundationPillarRow
            pillars={[
              { ordinal: "01", title: "Evidence first",   desc: "Every claim graded, dated, sourced." },
              { ordinal: "02", title: "Natural protocols", desc: "OTC + home-administered only." },
              { ordinal: "03", title: "Recurring care",    desc: "Refills + app companion." },
              { ordinal: "04", title: "Honest boundaries", desc: "No cure claims. The refusal is the conversion." },
            ]}
          />
          <div className="mt-8">
            <DossierChunks chunks={dossierFor("closing")} />
          </div>
        </div>
      </SectionAnchor>
      <ManifestoBand
        keyword="SOVEREIGNTY"
        body={<>The user owns their body and their healing path.</>}
      />
      <SectionFooter cue="End of journey" chapter="SC.14 · CLOSING" />

      {/* ── 15 · References ───────────────────────────────────── */}
      <SectionAnchor
        id="references"
        eyebrow="References"
        ordinal="15"
        title={
          <>
            The numbered <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>bibliography.</em>
          </>
        }
      >
        <div className="mx-auto max-w-[1080px]">
          <DossierChunks chunks={dossierFor("references")} />
        </div>
      </SectionAnchor>
      <SectionFooter cue="Honour the sources" chapter="SC.15 · REFERENCES" />

      <NextStep
        step="04 · Personalise + safety screen"
        title="Start your 90-day vitiligo support pack"
        body="Answer four safety questions. If you're on photosensitising medications, JAK inhibitors, or pregnant, we route you to an expert first — no checkout."
        href="/c/skin-pigmentation/package"
        cta="Build my regime"
      />
      <div className="pt-8"><Footer /></div>
    </DossierShell>
  );
}

/**
 * Inline dossier-chunk renderer — markdown body for a parsed H2 chunk
 * shown inside its corresponding <SectionAnchor>.
 */
function DossierChunks({
  chunks,
}: {
  chunks: { id: string; title: string; body: string }[];
}) {
  if (!chunks || chunks.length === 0) return null;
  return (
    <div className="mt-8 space-y-10">
      {chunks.map((c) => (
        <article key={c.id} className="dossier-prose" id={`chunk-${c.id}`}>
          <h3 className="font-display" style={{ fontSize: "1.35rem", color: "var(--color-forest)", marginTop: 0 }}>{c.title}</h3>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{c.body}</ReactMarkdown>
        </article>
      ))}
    </div>
  );
}
