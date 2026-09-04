import * as React from "react";
import Image from "next/image";
import { siteData } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Award, Trophy, Star, Phone, MessageSquare } from "lucide-react";

export function Results() {
  return (
    <section
      id="results"
      className="py-20 lg:py-28 bg-slate-50/60 dark:bg-[#070C24] relative overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Hall of Fame"
          title="Our Star"
          highlightedWord="Achievers"
          description="Consistent top-tier board exam performances crafted through concept mastery, printed materials, and continuous practice."
        />

        {/* Achievers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {siteData.achievers.map((achiever) => {
            const isPerfectScore = achiever.subjectScore === achiever.maxScore;

            return (
              <Card
                key={achiever.id}
                className="flex flex-col p-5 bg-white dark:bg-[#0C1233] border border-slate-200/90 dark:border-slate-800 hover:border-brand-amber-500/50 dark:hover:border-brand-amber-400/50 transition-all duration-300 group"
              >
                {/* Photo Frame */}
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-4 border border-slate-200/80 dark:border-slate-700/60">
                  <Image
                    src={achiever.image}
                    alt={`Portrait of ${achiever.name}, ${achiever.exam} achiever`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Badge overlay */}
                  <div className="absolute top-2.5 right-2.5">
                    {isPerfectScore ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 shadow-md">
                        <Trophy className="w-3.5 h-3.5" />
                        <span>100/100</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-brand-navy-900 text-white dark:bg-brand-blue shadow-md">
                        <Star className="w-3 h-3 text-brand-amber-400" />
                        <span>{achiever.subjectScore}/{achiever.maxScore}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Achiever Bio */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <Badge variant="brand" size="sm">
                        {achiever.exam}
                      </Badge>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {achiever.board} Board
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-amber-500 transition-colors">
                      {achiever.name}
                    </h3>
                  </div>

                  {/* Scores Box */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 dark:text-slate-400">
                        {achiever.subjectName}:
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white font-mono">
                        {achiever.subjectScore} / {achiever.maxScore}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 dark:text-slate-400">
                        Overall Percentage:
                      </span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                        {achiever.overallPercentage}%
                      </span>
                    </div>

                    {/* Progress visual bar */}
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-brand-amber-500 to-emerald-500 rounded-full"
                        style={{
                          width: `${(achiever.subjectScore / achiever.maxScore) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Trust & Results Callout Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-brand-navy-900 via-[#0B0367] to-brand-navy-950 text-white p-8 sm:p-10 shadow-xl border border-brand-navy-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber-500/20 text-brand-amber-300 text-xs font-semibold">
                <Award className="w-4 h-4 text-brand-amber-400" />
                <span>Join {siteData.contact.address.city}’s Top Computer Learning Cohort</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Aspiring for a 100/100 in Computer?
              </h3>
              <p className="text-slate-300 text-sm max-w-2xl">
                Batch sizes are strictly capped to ensure personalized guidance, code reviews, and guaranteed individual attention.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <Button
                variant="primary"
                size="md"
                href={siteData.contact.whatsapp.link}
                isExternal
                className="w-full sm:w-auto flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">WhatsApp Admissions</span>
              </Button>
              <Button
                variant="outline"
                size="md"
                href={siteData.contact.phoneRaw}
                className="w-full sm:w-auto text-white border-white/30 hover:border-white flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">Call {siteData.contact.phone}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
