"use client";

import { useId, useState } from "react";
import { ChevronDown, Microscope } from "lucide-react";

/**
 * Progressive-disclosure collapsible (skill v6.2). Wraps the
 * citation-dense / mechanism-heavy addendum of a sub-section.
 *
 * The non-technical opener stays above this, always visible. Click
 * the summary chip to reveal the deeper layer — meant for the
 * "professor-curious" reader who wants to chase the rabbit hole of
 * mechanism, primary citations, and references.
 */
export function DeepDive({
  label = "Open the science",
  closedLabel,
  children,
}: {
  label?: string;
  closedLabel?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const bodyId = useId();
  const summaryText = open ? (closedLabel ?? `Hide the science`) : label;

  return (
    <section
      data-component="DeepDive"
      className="mt-5 rounded-2xl border"
      style={{
        borderColor: "var(--color-line-strong)",
        background: open ? "var(--color-paper-deep)" : "transparent",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={bodyId}
        className="group flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-[var(--color-paper-deep)]"
      >
        <span
          aria-hidden="true"
          className="grid h-7 w-7 shrink-0 place-items-center rounded-full"
          style={{
            background: open ? "var(--color-forest)" : "var(--color-paper-deep)",
            color: open ? "var(--color-paper)" : "var(--color-forest)",
            border: `1px solid ${open ? "var(--color-forest)" : "var(--color-line-strong)"}`,
            transition: "background 180ms, color 180ms",
          }}
        >
          <Microscope size={14} />
        </span>
        <span className="flex flex-col">
          <span
            className="font-mono text-[0.62rem] uppercase tracking-[0.18em]"
            style={{ color: "var(--color-ink-faint)" }}
          >
            For the curious / your clinician
          </span>
          <span
            className="text-[0.92rem] font-medium"
            style={{ color: "var(--color-forest)" }}
          >
            {summaryText}
          </span>
        </span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className="ml-auto shrink-0 transition-transform"
          style={{
            color: "var(--color-forest)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      {open && (
        <div
          id={bodyId}
          className="dossier-prose px-4 pb-5 pt-1 sm:px-6"
          style={{ borderTop: "1px solid var(--color-line)" }}
        >
          {children}
        </div>
      )}
    </section>
  );
}
