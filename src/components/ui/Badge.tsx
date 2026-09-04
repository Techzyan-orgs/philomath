import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "brand" | "amber" | "outline" | "success" | "neutral";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "brand",
  size = "md",
  className = "",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full transition-colors";

  const variantStyles = {
    brand:
      "bg-brand-navy-100 text-brand-navy-900 border border-brand-navy-200 dark:bg-brand-navy-900/60 dark:text-brand-navy-200 dark:border-brand-navy-700/50",
    amber:
      "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/60",
    outline:
      "bg-transparent text-slate-700 border border-slate-300 dark:text-slate-300 dark:border-slate-700",
    success:
      "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/60",
    neutral:
      "bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 font-medium",
    md: "text-xs px-3 py-1 font-semibold tracking-wide uppercase",
  };

  return (
    <span
      className={twMerge(
        clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)
      )}
    >
      {children}
    </span>
  );
}
