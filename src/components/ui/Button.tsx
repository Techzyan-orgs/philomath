import * as React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-brand-amber-500 to-brand-amber-600 hover:from-brand-amber-600 hover:to-brand-amber-700 text-white font-semibold shadow-md hover:shadow-glow-amber",
    secondary:
      "bg-brand-navy-900 hover:bg-brand-navy-950 text-white font-semibold shadow-md dark:bg-brand-blue dark:hover:bg-brand-blue-light",
    outline:
      "border-2 border-brand-navy-900/20 dark:border-white/20 hover:border-brand-navy-900 dark:hover:border-white text-brand-navy-900 dark:text-white bg-transparent",
    ghost:
      "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60",
  };

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  };

  const combinedClasses = twMerge(
    clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)
  );

  if (href) {
    if (isExternal || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={combinedClasses}
        {...(props as any)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
