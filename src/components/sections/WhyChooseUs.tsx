import * as React from "react";
import { siteData } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Brain, BookText, Repeat, Users, Award } from "lucide-react";

export function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "concept":
        return <Brain className="w-6 h-6 text-brand-amber-500" />;
      case "materials":
        return <BookText className="w-6 h-6 text-brand-amber-500" />;
      case "practice":
        return <Repeat className="w-6 h-6 text-brand-amber-500" />;
      case "attention":
        return <Users className="w-6 h-6 text-brand-amber-500" />;
      default:
        return <Award className="w-6 h-6 text-brand-amber-500" />;
    }
  };

  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 bg-slate-50/80 dark:bg-[#070b20] relative scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Philomath"
          title="Engineered for Deep Understanding and"
          highlightedWord="Board Success"
          description="We prioritize intuitive fundamentals and systematic execution so students conquer computer science confidently."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {siteData.features.map((feature, idx) => (
            <Card
              key={feature.id}
              className="flex flex-col justify-between group hover:border-brand-amber-500/50 dark:hover:border-brand-amber-500/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy-50 dark:bg-slate-800/90 border border-brand-navy-100 dark:border-slate-700 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                    {getIcon(feature.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <Badge variant="amber" size="sm">
                    {feature.highlight}
                  </Badge>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-navy-900 dark:group-hover:text-brand-amber-400 transition-colors">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center text-xs font-semibold text-brand-navy-900 dark:text-brand-amber-400">
                <span>Core Pillar of Learning</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
