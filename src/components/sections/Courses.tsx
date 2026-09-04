"use client";

import * as React from "react";
import { siteData } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Check, Code, BookOpen, Layers, ArrowRight } from "lucide-react";

export function Courses() {
  const [selectedBoard, setSelectedBoard] = React.useState<string>("ALL");

  const boards = ["ALL", "ICSE", "ISC", "CBSE"];

  const filteredCourses =
    selectedBoard === "ALL"
      ? siteData.courses
      : siteData.courses.filter((course) => course.board === selectedBoard);

  return (
    <section id="courses" className="py-20 lg:py-28 bg-white dark:bg-[#060919] relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Specialized Curriculum"
          title="Curated Programs for Academic"
          highlightedWord="Mastery"
          description="Targeted courses specifically structured around official ICSE, ISC, and CBSE examination guidelines."
        />

        {/* Board Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            {boards.map((board) => (
              <button
                key={board}
                type="button"
                onClick={() => setSelectedBoard(board)}
                className={`px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber-500 ${
                  selectedBoard === board
                    ? "bg-brand-navy-900 text-white shadow-md dark:bg-brand-amber-500 dark:text-slate-950"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {board === "ALL" ? "All Programs" : board}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className="flex flex-col justify-between border-2 border-slate-200/90 dark:border-slate-800 hover:border-brand-navy-900/40 dark:hover:border-brand-amber-500/40"
            >
              <div className="space-y-6">
                {/* Course Header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="brand" size="md">
                      {course.board}
                    </Badge>
                    <Badge variant="neutral" size="sm">
                      {course.targetClasses}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white pt-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {course.summary}
                  </p>
                </div>

                {/* Primary Technology / Language */}
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800 text-xs font-semibold text-brand-navy-900 dark:text-brand-amber-300">
                  <Code className="w-4 h-4 text-brand-amber-500 shrink-0" />
                  <span>Language: {course.primaryLanguage}</span>
                </div>

                {/* Key Syllabus Topics */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Syllabus Highlights</span>
                  </h4>
                  <ul className="space-y-2">
                    {course.keyTopics.map((topic, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Course Inclusions */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Included In Batch</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {course.features.map((feat, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-amber-500" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <Button
                  variant="primary"
                  size="md"
                  href={`#contact?course=${course.id}`}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <span>{course.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
