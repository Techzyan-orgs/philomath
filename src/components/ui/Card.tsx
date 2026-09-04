import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  glowOnHover?: boolean;
  className?: string;
}

export function Card({
  children,
  hoverEffect = true,
  glowOnHover = false,
  className = "",
  ...props
}: CardProps) {
  const baseStyles =
    "relative rounded-2xl bg-white dark:bg-[#0A102D] border border-slate-200/90 dark:border-slate-800/80 p-6 md:p-8 transition-all duration-300 shadow-sm";

  const hoverStyles = hoverEffect
    ? "hover:-translate-y-1.5 hover:shadow-lg hover:border-brand-navy-300 dark:hover:border-brand-navy-600/60"
    : "";

  const glowStyles = glowOnHover
    ? "hover:shadow-glow-amber dark:hover:shadow-glow-blue"
    : "";

  return (
    <div
      className={twMerge(
        clsx(baseStyles, hoverStyles, glowStyles, className)
      )}
      {...props}
    >
      {children}
    </div>
  );
}
