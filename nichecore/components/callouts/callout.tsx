import { Triangle, Info, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

export type CalloutTone = "warn" | "note" | "ok" | "default";

/**
 * Inline callout — left-bordered + soft bg. Uses the .callout utility classes
 * from globals.css. Spec §2.3.
 */
export function Callout({
  tone = "default",
  title,
  children,
}: {
  tone?: CalloutTone;
  title?: string;
  children: ReactNode;
}) {
  const toneClass =
    tone === "warn" ? "callout callout--warn" :
    tone === "note" ? "callout callout--note" :
    tone === "ok"   ? "callout callout--ok"   :
                      "callout";
  const Icon = tone === "warn" ? Triangle : tone === "note" ? Info : tone === "ok" ? CheckCircle2 : Info;
  const iconColor =
    tone === "warn" ? "var(--color-warn)" :
    tone === "note" ? "var(--color-forest)" :
    tone === "ok"   ? "var(--color-ok)"   :
                      "var(--color-terracotta)";
  return (
    <div className={toneClass} role={tone === "warn" ? "note" : undefined}>
      <div className="flex items-start gap-3">
        <Icon
          size={16}
          aria-hidden="true"
          style={{ color: iconColor, marginTop: "3px", flexShrink: 0 }}
        />
        <div style={{ fontSize: "14.5px", lineHeight: 1.55, color: "var(--color-ink)" }}>
          {title && (
            <strong style={{ fontWeight: 600, marginRight: "0.4em" }}>{title}</strong>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
