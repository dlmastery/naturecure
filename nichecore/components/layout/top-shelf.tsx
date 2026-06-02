import { TimerReset, Layers3, ShieldAlert, Salad, ShoppingBag, ArrowDown } from "lucide-react";
import type { TopShelfPreview, TopShelfCard } from "@/lib/research";

// ── TopShelf ──────────────────────────────────────────────────────
//
// A 5-card row that sits above §01 Overview on every dossier page.
// Surfaces the five highest-utility sections (12-mo timeline · daily
// combos · strictly-avoid · diet · suppliers) so a non-researcher can
// take a decision in 30 seconds without scrolling.
//
// Design DNA: Mayo/NHS quick-facts cards + Examine.com top-effects
// grid + HelloFresh action-card warmth. Color tokens are reused from
// globals.css so the row sits in the same chromatic family as the
// rest of the dossier (forest = continuity, mint = do-this, blush =
// avoid, amber = food, gold = commerce).
//
// Server component — all data is passed as props; no client state.

type Tier = "timeline" | "combos" | "avoid" | "diet" | "suppliers";

interface CardConfig {
  key: keyof TopShelfPreview;
  ordinal: string;
  eyebrow: string;
  title: string;
  sectionHint: string;
  icon: typeof TimerReset;
  tier: Tier;
}

const CARDS: CardConfig[] = [
  { key: "timeline",      ordinal: "§12", eyebrow: "12-month timeline",  title: "What to expect, month by month", sectionHint: "Timeline",   icon: TimerReset,   tier: "timeline"  },
  { key: "combos",        ordinal: "§08", eyebrow: "Daily combos",       title: "Your three timed stacks",        sectionHint: "Regimen",    icon: Layers3,      tier: "combos"    },
  { key: "strictlyAvoid", ordinal: "§10", eyebrow: "Strictly avoid",     title: "What never to combine",          sectionHint: "Safety",     icon: ShieldAlert,  tier: "avoid"     },
  { key: "diet",          ordinal: "§06", eyebrow: "Diet & meal plan",   title: "What to eat this week",          sectionHint: "Food",       icon: Salad,        tier: "diet"      },
  { key: "suppliers",     ordinal: "§09", eyebrow: "Where to buy",       title: "Suppliers + monthly cost",       sectionHint: "Package",    icon: ShoppingBag,  tier: "suppliers" },
];

interface TierStyle {
  accent: string;   // border-top + ordinal + icon color
  tintBg: string;   // soft tinted band behind the icon
  inkSoft: string;  // muted text
}

function styleFor(tier: Tier): TierStyle {
  switch (tier) {
    case "timeline":
      return {
        accent: "var(--color-forest)",
        tintBg: "var(--color-forest-tint)",
        inkSoft: "var(--color-forest-soft)",
      };
    case "combos":
      return {
        accent: "var(--color-mint-ink)",
        tintBg: "var(--color-mint)",
        inkSoft: "var(--color-mint-ink)",
      };
    case "avoid":
      return {
        accent: "var(--color-warn)",
        tintBg: "var(--color-warn-soft)",
        inkSoft: "var(--color-warn)",
      };
    case "diet":
      return {
        accent: "var(--color-amber-ink)",
        tintBg: "var(--color-amber)",
        inkSoft: "var(--color-amber-ink)",
      };
    case "suppliers":
      return {
        accent: "var(--color-gold-deep)",
        tintBg: "#f4ead0",
        inkSoft: "var(--color-gold-deep)",
      };
  }
}

export function TopShelf({ data }: { data: TopShelfPreview | null }) {
  if (!data) return null;

  return (
    <section
      aria-label="The protocol at a glance"
      className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-14"
      style={{ paddingTop: "1.5rem", paddingBottom: "0.5rem" }}
    >
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <span
          className="font-mono"
          style={{
            fontSize: "0.6875rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-ink-faint)",
            fontWeight: 500,
          }}
        >
          The protocol at a glance
        </span>
        <span
          className="inline-flex items-center gap-1.5"
          style={{
            fontSize: "0.75rem",
            color: "var(--color-ink-soft)",
            fontStyle: "italic",
          }}
        >
          Jump to a section <ArrowDown size={13} aria-hidden="true" />
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {CARDS.map((cfg) => {
          const card = data[cfg.key];
          const s = styleFor(cfg.tier);
          const Icon = cfg.icon;
          return (
            <a
              key={cfg.key}
              href={`#${card.anchor}`}
              aria-label={`Jump to ${cfg.eyebrow.toLowerCase()}`}
              data-component="TopShelfCard"
              data-tier={cfg.tier}
              data-available={card.available}
              className="group relative flex flex-col rounded-2xl outline-none transition focus-visible:ring-2"
              style={{
                background: "var(--color-paper-deep)",
                border: "1px solid var(--color-line)",
                boxShadow: "0 1px 2px #20171208, 0 18px 40px -32px #20171230",
                borderTop: `4px solid ${s.accent}`,
                padding: "1.5rem",
                minHeight: "100%",
              }}
            >
              {/* Header row: icon-chip + ordinal */}
              <div className="mb-4 flex items-start justify-between">
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: s.tintBg, color: s.accent }}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: "0.625rem",
                    letterSpacing: "0.18em",
                    color: "var(--color-ink-faint)",
                    paddingTop: "0.2rem",
                  }}
                >
                  {cfg.ordinal}
                </span>
              </div>

              {/* Eyebrow + title */}
              <span
                className="font-mono"
                style={{
                  fontSize: "0.625rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: s.inkSoft,
                  fontWeight: 600,
                  marginBottom: "0.4rem",
                }}
              >
                {cfg.eyebrow}
              </span>
              <h3
                className="font-display"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.2,
                  letterSpacing: "-0.012em",
                  color: "var(--color-ink)",
                  marginBottom: "0.85rem",
                }}
              >
                {cfg.title}
              </h3>

              {/* Bullets */}
              <ul
                className="flex-1 space-y-1.5"
                style={{
                  fontSize: "0.8125rem",
                  lineHeight: 1.45,
                  color: card.available ? "var(--color-ink-soft)" : "var(--color-ink-faint)",
                  fontStyle: card.available ? "normal" : "italic",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {card.bullets.slice(0, 3).map((b, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.45rem",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "0 0 auto",
                        marginTop: "0.55rem",
                        width: "3px",
                        height: "3px",
                        borderRadius: "50%",
                        background: s.accent,
                        opacity: 0.7,
                      }}
                    />
                    <span
                      style={{
                        flex: 1,
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Footer link */}
              <div
                className="mt-5 flex items-center justify-between"
                style={{
                  paddingTop: "0.85rem",
                  borderTop: "1px solid var(--color-line)",
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--color-ink-faint)",
                  }}
                >
                  {cfg.sectionHint}
                </span>
                <span
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: s.accent,
                    transition: "transform 0.4s var(--ease-out-soft, ease-out)",
                  }}
                  className="group-hover:translate-x-0.5"
                >
                  See {cfg.ordinal} →
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
