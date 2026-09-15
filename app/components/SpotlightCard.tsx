"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

/** Tracks the cursor so the card can light up under it — the one bit of
 *  polish that keeps a text-only card from reading as flat. */
export default function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <article ref={ref} onPointerMove={handlePointerMove} className={`spotlight ${className}`}>
      {children}
    </article>
  );
}
