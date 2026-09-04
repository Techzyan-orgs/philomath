import * as React from "react";
import Image from "next/image";
import { siteData } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroTopperCarousel } from "./HeroTopperCarousel";
import {
  Sparkles,
  ArrowRight,
  Phone,
  MessageSquare,
  Award,
  BookOpen,
  Code2,
  CheckCircle,
} from "lucide-react";

export function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col justify-center bg-gradient-to-b from-brand-navy-50/50 via-white to-slate-50 dark:from-[#05081c] dark:via-[#070b24] dark:to-[#060919]"
    >
      {/* Background Decorative Gradients & Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-blue/15 dark:bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-brand-amber-500/10 dark:bg-brand-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[550px] h-[550px] opacity-[0.035] dark:opacity-[0.05] pointer-events-none select-none">
        <Image
          src={siteData.brand.emblem.src}
          alt=""
          fill
          sizes="550px"
          className="object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Admissions Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-amber-500/10 border border-brand-amber-500/30 text-brand-amber-700 dark:text-brand-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-amber-500 animate-pulse" />
              <span>{siteData.hero.badgeText}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              {siteData.hero.title}{" "}
              <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-brand-amber-500 via-amber-500 to-brand-amber-600 dark:from-brand-amber-400 dark:via-amber-300 dark:to-brand-amber-500">
                {siteData.hero.highlightedTitle}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {siteData.hero.subtitle}
            </p>

            {/* Key trust bullets */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>ICSE & ISC Java Focus</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>CBSE Python & SQL Mastery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Small Batches in {siteData.contact.address.locality}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Button
                variant="primary"
                size="lg"
                href={siteData.hero.ctaPrimary.href}
                className="w-full sm:w-auto"
              >
                <span>{siteData.hero.ctaPrimary.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                href={siteData.contact.whatsapp.link}
                isExternal
                className="w-full sm:w-auto flex items-center gap-2 border-emerald-600/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp Inquiry</span>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                href={siteData.contact.phoneRaw}
                className="w-full sm:w-auto text-brand-navy-900 dark:text-slate-200"
              >
                <Phone className="w-4 h-4 text-brand-amber-500" />
                <span>{siteData.contact.phone}</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Hero Visual & Achievement Spotlight Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glowing gradient background ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-amber-500 to-brand-navy-900 rounded-3xl blur-lg opacity-30 dark:opacity-40 animate-pulse" />

              {/* Glass container */}
              <div className="relative rounded-3xl bg-white/95 dark:bg-[#0B1130]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-700/60 p-6 sm:p-8 shadow-2xl space-y-6">
                {/* Header of hero card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-navy-900 dark:bg-brand-blue flex items-center justify-center text-white shadow-md">
                      <Award className="w-5 h-5 text-brand-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                        Proven Board Excellence
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        ICSE • ISC • CBSE
                      </p>
                    </div>
                  </div>
                  <Badge variant="amber" size="sm">
                    Verified
                  </Badge>
                </div>

                {/* Featured Topper Highlight (Animated Carousel) */}
                <HeroTopperCarousel />

                {/* Curriculum Pillars Preview */}
                <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
                    <span className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-brand-navy-600 dark:text-brand-navy-400" />
                      <span>Java & BlueJ Programming</span>
                    </span>
                    <span className="font-mono text-brand-amber-600 dark:text-brand-amber-400 font-semibold">
                      Class 8–10
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
                    <span className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-brand-navy-600 dark:text-brand-navy-400" />
                      <span>Boolean Algebra & Advanced Data Structures</span>
                    </span>
                    <span className="font-mono text-brand-amber-600 dark:text-brand-amber-400 font-semibold">
                      Class 11–12
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-brand-navy-600 dark:text-brand-navy-400" />
                      <span>Python, Relational Databases & SQL</span>
                    </span>
                    <span className="font-mono text-brand-amber-600 dark:text-brand-amber-400 font-semibold">
                      CBSE XI–XII
                    </span>
                  </div>
                </div>

                {/* Quick CTA inside card */}
                <Button
                  variant="secondary"
                  size="md"
                  href="#courses"
                  className="w-full text-center"
                >
                  View Full Course Syllabi
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statistics Bar */}
        <div className="mt-16 lg:mt-20 pt-10 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {siteData.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1 p-4 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-xs"
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy-900 dark:text-white tracking-tight font-mono">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {stat.label}
                </span>
                {stat.subtext && (
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {stat.subtext}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
