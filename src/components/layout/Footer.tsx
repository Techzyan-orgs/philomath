import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";
import { Phone, Mail, MapPin, ArrowUp, MessageSquare, CheckCircle2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="relative w-44 h-12">
              <Image
                src={siteData.brand.logo.src}
                alt={siteData.brand.logo.alt}
                fill
                sizes="176px"
                className="object-contain object-left brightness-125 contrast-125"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {siteData.brand.description}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-amber-400 bg-brand-amber-950/40 border border-brand-amber-800/50 rounded-lg px-3 py-1.5 w-fit">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Premier Computer Coaching in {siteData.contact.address.city}</span>
            </div>
          </div>

          {/* Col 2: Programs & Tracks */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase text-sm">
              Programs &amp; Tracks
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteData.courses.map((course) => (
                <li key={course.id}>
                  <a
                    href="#courses"
                    className="hover:text-brand-amber-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber-500 group-hover:scale-125 transition-transform" />
                    <span>{course.title}</span>
                  </a>
                </li>
              ))}
              {siteData.collegeProgram && (
                <li>
                  <a
                    href="#college-program"
                    className="hover:text-brand-amber-400 transition-colors flex items-center gap-2 group text-brand-amber-300 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber-400 group-hover:scale-125 transition-transform" />
                    <span>College Track: Applied AI</span>
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase text-sm">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteData.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-brand-amber-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Center Info */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase text-sm">
              Center Details
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-amber-400 mt-0.5 shrink-0" />
                <a
                  href={siteData.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-amber-400 transition-colors text-slate-400"
                >
                  {siteData.contact.address.fullFormatted}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-amber-400 shrink-0" />
                <a
                  href={siteData.contact.phoneRaw}
                  className="hover:text-brand-amber-400 transition-colors text-slate-300 font-medium"
                >
                  {siteData.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-amber-400 shrink-0" />
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="hover:text-brand-amber-400 transition-colors text-slate-400 break-all"
                >
                  {siteData.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={siteData.contact.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-emerald-950/60 text-emerald-300 border border-emerald-700/60 hover:bg-emerald-900/60 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Instant WhatsApp Connect</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {siteData.brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>
              {siteData.contact.address.locality}, {siteData.contact.address.city},{" "}
              {siteData.contact.address.region}
            </span>
            <a
              href="#home"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
