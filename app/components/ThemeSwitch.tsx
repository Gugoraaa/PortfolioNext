"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

/** No mount guard: next-themes sets the class on <html> in a blocking script
 *  before first paint, so CSS alone picks the right icon with no flash and
 *  no hydration mismatch. */
export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle colour theme"
      className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[var(--card-border)] text-lg transition-colors hover:border-[var(--card-border-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
    >
      <FiMoon aria-hidden="true" className="dark:hidden" />
      <FiSun aria-hidden="true" className="hidden dark:block" />
    </button>
  );
}
