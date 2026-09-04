import * as React from "react";
import { Badge } from "./Badge";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlightedWord?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  highlightedWord,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignmentClasses =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignmentClasses} ${className}`}>
      {eyebrow && (
        <Badge variant="amber" size="md" className="mb-3">
          {eyebrow}
        </Badge>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
        {title}{" "}
        {highlightedWord && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-amber-500 to-brand-amber-600 dark:from-brand-amber-400 dark:to-brand-amber-500">
            {highlightedWord}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
