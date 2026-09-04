"use client";

import * as React from "react";
import { siteData } from "@/data/site";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Sparkles,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

export function CollegeProgram() {
  const program = siteData.collegeProgram;

  if (!program) return null;

  return (
    <section
      id="college-program"
      className="py-12 lg:py-16 bg-slate-50/70 dark:bg-[#070b20] text-slate-900 dark:text-slate-100 relative scroll-mt-20 sm:scroll-mt-24 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white dark:bg-[#0A102D] border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 md:p-10 shadow-xl dark:shadow-2xl overflow-hidden transition-colors duration-200">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-amber-500/10 dark:bg-brand-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-amber-500/10 text-brand-amber-700 dark:text-brand-amber-400 border border-brand-amber-500/30 dark:border-brand-amber-400/20 w-fit">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{program.badge} • Non-Curriculum Track</span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Target: {program.targetAudience}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Professional Skills &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-amber-500 to-amber-600 dark:from-brand-amber-400 dark:to-amber-300">
                Applied AI Program
              </span>
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {program.description}
            </p>

            {/* Core Philosophy Motto */}
            <div className="my-6 py-3.5 px-4 sm:px-5 rounded-xl bg-amber-50/80 dark:bg-slate-800/70 border-l-4 border-brand-amber-500 dark:border-brand-amber-400 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-brand-amber-600 dark:text-brand-amber-400 shrink-0 hidden sm:block" />
              <blockquote className="text-sm sm:text-base font-bold text-slate-900 dark:text-amber-200/95 italic">
                &ldquo;{program.tagline}&rdquo;
              </blockquote>
            </div>

            {/* The 6 Core Points (Clean 2-column checklist, no separate boxes, no elaboration) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 pt-1 pb-6 border-b border-slate-200 dark:border-slate-800">
              {program.points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-amber-500 dark:text-brand-amber-400 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Compact CTA Row */}
            <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Prepare for actual industry expectations with hands-on software development.
              </p>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  href={program.ctaPrimary.href}
                  isExternal
                  variant="primary"
                  size="sm"
                  className="w-full sm:w-auto font-bold px-4 py-2 text-xs sm:text-sm shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                  <span>{program.ctaPrimary.label}</span>
                  <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                </Button>

                <Button
                  href={program.ctaSecondary.href}
                  variant="secondary"
                  size="sm"
                  className="w-full sm:w-auto px-4 py-2 text-xs sm:text-sm"
                >
                  <span>{program.ctaSecondary.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
