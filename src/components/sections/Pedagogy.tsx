"use client";

import * as React from "react";
import { siteData } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { ChevronDown, HelpCircle, Layers } from "lucide-react";

export function Pedagogy() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      id="pedagogy"
      className="py-20 lg:py-28 bg-white dark:bg-[#060919] relative scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pedagogy / Methodology */}
        <SectionHeader
          eyebrow="Proven Methodology"
          title="How We Transform Beginners into"
          highlightedWord="Toppers"
          description="A comprehensive pedagogical framework built on four core pillars, refined through years of ICSE, ISC, and CBSE board examination coaching."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {siteData.pedagogy.map((step) => (
            <Card
              key={step.step}
              className="border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="font-mono text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-amber-500 to-amber-600 dark:from-brand-amber-400 dark:to-amber-500">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-xs font-semibold text-brand-navy-900 dark:text-brand-amber-400">
                <Layers className="w-3.5 h-3.5 text-brand-amber-500" />
                <span>Core Pillar {step.step}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-amber-600 dark:text-brand-amber-400 uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Clear answers to help parents and students make the best academic choice.
            </p>
          </div>

          <div className="space-y-3">
            {siteData.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0A102D] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber-500"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 ml-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-brand-amber-500" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
