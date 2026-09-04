"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={`relative inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber-500 ${className}`}
      >
        <span className="w-5 h-5" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:text-brand-navy-900 bg-slate-100 hover:bg-slate-200/80 dark:text-slate-300 dark:hover:text-brand-amber-400 dark:bg-slate-800/80 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-700/60 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber-500 ${className}`}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-brand-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-brand-navy-900 transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
}
