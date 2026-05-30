"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Scroll-spy with URL hash sync.
 *
 * Spec §3.4: IntersectionObserver with `rootMargin: "-30% 0px -60% 0px"`.
 * - Reads `window.location.hash` on mount; falls back to `ids[0]`.
 * - On `setActive`, replaces the URL hash via `history.replaceState` (no scroll jump).
 * - Listens to `hashchange` events for back/forward nav.
 */
export function useActiveSection(ids: string[]): [string, (id: string) => void] {
  const initial = ids[0] ?? "";
  const [active, setActiveState] = useState<string>(initial);

  // Mount: read hash once on the client.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const fromHash = window.location.hash.slice(1);
    if (fromHash && ids.includes(fromHash)) setActiveState(fromHash);
    else if (initial) setActiveState(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Hashchange listener (browser back/forward).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onHash = () => {
      const id = window.location.hash.slice(1);
      setActiveState(id || ids[0] || "");
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [ids]);

  // IntersectionObserver scroll-spy.
  const userSetRef = useRef<number>(0);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) return;
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        // If the user has just selected something, give the smooth-scroll a beat.
        if (Date.now() - userSetRef.current < 600) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const id = visible[0].target.id;
          setActiveState((prev) => {
            if (prev === id) return prev;
            try {
              history.replaceState(null, "", `#${id}`);
            } catch {
              /* SSR / sandboxed */
            }
            return id;
          });
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.1, 0.5, 1] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  // Public setter: scroll target into view AND replace hash (without history entry).
  const setActive = useCallback((id: string) => {
    if (typeof window === "undefined") return;
    userSetRef.current = Date.now();
    setActiveState(id);
    try {
      history.replaceState(null, "", `#${id}`);
    } catch {
      /* noop */
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return [active, setActive];
}
