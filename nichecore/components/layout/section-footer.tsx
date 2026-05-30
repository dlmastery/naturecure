/**
 * Hairline rule + 12px mono row. Spec §2.1.
 */
export function SectionFooter({ cue, chapter }: { cue: string; chapter: string }) {
  return (
    <div className="px-5 sm:px-8 lg:px-14">
      <div className="mx-auto mt-14 max-w-[1080px]">
        <div
          className="flex items-center justify-between border-t pt-3 font-mono"
          style={{
            borderColor: "var(--color-line-strong)",
            fontSize: "12px",
            color: "var(--color-ink-faint)",
            letterSpacing: "0.04em",
          }}
        >
          <span>{cue}</span>
          <span style={{ color: "var(--color-gold-deep)", letterSpacing: "0.08em" }}>
            {chapter}
          </span>
        </div>
      </div>
    </div>
  );
}
