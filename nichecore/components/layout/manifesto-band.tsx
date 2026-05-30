/**
 * Full-width forest bar: mono ochre keyword + serif italic body.
 * Spec §2.1.
 */
export function ManifestoBand({ keyword, body }: { keyword: string; body: React.ReactNode }) {
  return (
    <section
      data-component="ManifestoBand"
      className="mt-14 px-5 sm:px-8 lg:px-14"
    >
      <div
        className="mx-auto flex max-w-[1080px] flex-col gap-3 px-9 py-6 sm:flex-row sm:items-center sm:gap-8"
        style={{
          background: "var(--color-forest)",
          color: "var(--color-paper)",
          borderRadius: "var(--radius-md)",
        }}
      >
        <span
          className="font-mono uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "0.16em",
            color: "var(--color-gold)",
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          {keyword}
        </span>
        <p
          className="font-display italic leading-snug"
          style={{
            fontSize: "20px",
            color: "var(--color-paper)",
          }}
        >
          {body}
        </p>
      </div>
    </section>
  );
}
