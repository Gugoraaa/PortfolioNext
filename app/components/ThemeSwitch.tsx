"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  
  if (!mounted) return null;

  const current = resolvedTheme === "dark";

  return current ? (
    <FiSun
      onClick={() => setTheme("light")}
      className="cursor-pointer text-xl"
    />
  ) : (
    <FiMoon
      onClick={() => setTheme("dark")}
      className="cursor-pointer text-xl"
    />
  );
}
