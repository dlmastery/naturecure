"use client";

import { useEffect } from "react";

/**
 * Keyboard navigation across an ordered list of section ids.
 *
 * Spec §3.3 bindings:
 *   ← / K / PgUp       → previous
 *   → / J / PgDn       → next
 *   1-9                → jump to that section index (1-based)
 *   Home               → first
 *   End                → last
 *
 * Ignored when the focused element is an <input>, <textarea> or contenteditable.
 */
export function useKeyboardNav(
  ids: string[],
  current: string,
  setCurrent: (id: string) => void
): void {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (ids.length === 0) return;

    const handler = (e: KeyboardEvent) => {
      // Ignore typing fields.
      const t = e.target as HTMLElement | null;
      if (t) {
        const tag = t.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
        if (t.isContentEditable) return;
      }
      // Ignore when modifier keys are held (Ctrl/Meta/Alt).
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const idx = ids.indexOf(current);
      const safeIdx = idx === -1 ? 0 : idx;

      const goto = (nextIdx: number) => {
        const clamped = Math.max(0, Math.min(ids.length - 1, nextIdx));
        const id = ids[clamped];
        if (id) {
          e.preventDefault();
          setCurrent(id);
        }
      };

      // Digit jump 1-9
      if (e.key >= "1" && e.key <= "9") {
        const n = parseInt(e.key, 10) - 1;
        if (n >= 0 && n < ids.length) goto(n);
        return;
      }
      switch (e.key) {
        case "ArrowLeft":
        case "PageUp":
        case "k":
        case "K":
          goto(safeIdx - 1);
          return;
        case "ArrowRight":
        case "PageDown":
        case "j":
        case "J":
          goto(safeIdx + 1);
          return;
        case "Home":
          goto(0);
          return;
        case "End":
          goto(ids.length - 1);
          return;
        default:
          return;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [ids, current, setCurrent]);
}
