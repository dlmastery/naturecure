"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, CircleCheck } from "lucide-react";
import { StepIndicator } from "./step-indicator";

export type SafetyAnswers = {
  meds: boolean;
  pregnant: boolean;
  organ: boolean;
  allergies: boolean;
};

export type SafetyStep = {
  id: keyof SafetyAnswers;
  title: string;
  subtitle: string;
};

export const DEFAULT_SAFETY_STEPS: SafetyStep[] = [
  {
    id: "meds",
    title: "Are you currently taking any prescription medications?",
    subtitle:
      "We flag interactions for JAK inhibitors, methotrexate, levothyroxine, warfarin, SSRIs, statins, glucose-lowering meds, and more. A yes routes you to a human expert before any package is offered.",
  },
  {
    id: "pregnant",
    title: "Are you pregnant, planning pregnancy, or breastfeeding?",
    subtitle:
      "Most botanicals here lack safety data in pregnancy or lactation. A yes routes you to an expert chart review — no products are sold directly.",
  },
  {
    id: "organ",
    title: "Do you have liver or kidney disease, or impaired organ function?",
    subtitle:
      "Several herbs and concentrated nutrients are metabolised by the liver or excreted by the kidneys. A yes triggers an expert review for dose-adjustment.",
  },
  {
    id: "allergies",
    title: "Do you have known allergies or sensitivities to herbs, soy, dairy, or shellfish?",
    subtitle:
      "Many supplement carriers contain common allergens. A yes flags an allergen-clear formulation review with the expert.",
  },
];

/**
 * SafetyQuiz — 4-step yes/no quiz with progress bar.
 * Calls `onComplete(answers)` once all four questions are answered.
 * The host page decides whether `flagged = meds || pregnant || organ || allergies`
 * routes to the expert or to the pack screen.
 */
export function SafetyQuiz({
  steps = DEFAULT_SAFETY_STEPS,
  onComplete,
  onBack,
}: {
  steps?: SafetyStep[];
  onComplete: (answers: SafetyAnswers) => void;
  onBack?: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Partial<SafetyAnswers>>({});

  const step = steps[idx];
  const current = idx + 1;
  const total = steps.length;
  const value = answers[step.id];

  const answer = (v: boolean) => {
    const next = { ...answers, [step.id]: v };
    setAnswers(next);
  };

  const goNext = () => {
    if (idx < total - 1) {
      setIdx(idx + 1);
    } else if (
      typeof answers.meds === "boolean" &&
      typeof answers.pregnant === "boolean" &&
      typeof answers.organ === "boolean" &&
      typeof answers.allergies === "boolean"
    ) {
      onComplete(answers as SafetyAnswers);
    }
  };

  const goBack = () => {
    if (idx === 0) {
      onBack?.();
      return;
    }
    setIdx(idx - 1);
  };

  const answeredCurrent = typeof value === "boolean";
  const isLast = idx === total - 1;

  return (
    <div className="card-soft p-6 sm:p-7" data-component="SafetyQuiz">
      <div className="flex items-start justify-between gap-4">
        <StepIndicator current={current} total={total} label="Safety screen" />
        <span
          className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[0.66rem] uppercase tracking-wider"
          style={{ color: "var(--color-ink-faint)" }}
        >
          Four questions. Two minutes. No data leaves your device.
        </span>
      </div>

      <h3 className="font-display mt-6 text-2xl leading-snug sm:text-[1.75rem]">
        {step.title}
      </h3>
      <p
        className="mt-3 text-[0.92rem] leading-relaxed"
        style={{ color: "var(--color-ink-soft)" }}
      >
        {step.subtitle}
      </p>

      <fieldset className="mt-6">
        <legend className="sr-only">{step.title}</legend>
        <div className="flex gap-3">
          <YesNoButton on={value === true} onClick={() => answer(true)}>
            Yes
          </YesNoButton>
          <YesNoButton on={value === false} onClick={() => answer(false)}>
            No
          </YesNoButton>
        </div>
      </fieldset>

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={goBack}
          className="btn-ghost !py-2"
          aria-label={idx === 0 ? "Back to category" : "Back to previous question"}
        >
          <ArrowLeft size={15} /> Back
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={!answeredCurrent}
          aria-disabled={!answeredCurrent}
          className="btn-primary !py-2 disabled:opacity-40"
        >
          {isLast ? (
            <>
              See my reviewed regime <CircleCheck size={16} />
            </>
          ) : (
            <>
              Continue <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function YesNoButton({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className="flex-1 rounded-[var(--radius-md)] border px-4 py-3 text-[0.92rem] font-medium transition-colors"
      style={{
        background: on ? "var(--color-forest)" : "var(--color-card)",
        color: on ? "var(--color-paper)" : "var(--color-ink)",
        borderColor: on ? "var(--color-forest)" : "var(--color-line-strong)",
      }}
    >
      {children}
    </button>
  );
}
