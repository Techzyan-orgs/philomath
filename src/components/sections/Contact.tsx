"use client";

import * as React from "react";
import { siteData } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles,
  School,
  GraduationCap,
  ChevronDown,
  Check,
} from "lucide-react";

// Curated suggestions for prominent Kolkata schools & colleges, boards and classes
// Schools strictly filtered to ICSE/ISC and CBSE institutions in Kolkata & surrounding areas
const SCHOOL_SUGGESTIONS = [
  "Abhinav Bharati High School (CBSE)",
  "Adamas International School, Belgharia (ICSE/ISC)",
  "Apeejay School, Park Street (CBSE)",
  "Apeejay School, Salt Lake (CBSE)",
  "Army Public School, Kolkata (CBSE)",
  "Ashok Hall Girls' Higher Secondary School (CBSE)",
  "Asian International School, Howrah (CBSE)",
  "Assembly of God Church School, Park Street (ICSE/ISC)",
  "Assembly of God Church School, Tollygunge (ICSE/ISC)",
  "Auxilium Convent School, Barasat (ICSE/ISC)",
  "Auxilium Convent School, Dum Dum (ICSE/ISC)",
  "BDM International, Narendrapur (CBSE)",
  "Bharatiya Vidya Bhavan, Salt Lake (CBSE)",
  "Birla High School, Moira Street (CBSE)",
  "Calcutta Boys' School, Beliaghata (ICSE/ISC)",
  "Calcutta Boys' School, Main Campus (ICSE/ISC)",
  "Calcutta Girls' High School (ICSE/ISC)",
  "Calcutta Public School, Baguiati (ICSE/ISC)",
  "Calcutta Public School, Kalikapur (ICSE/ISC)",
  "Delhi Public School - DPS Howrah (CBSE)",
  "Delhi Public School - DPS Megacity, New Town (CBSE)",
  "Delhi Public School - DPS Newtown (CBSE)",
  "Delhi Public School - DPS Ruby Park (CBSE)",
  "Don Bosco School, Bandel (ICSE/ISC)",
  "Don Bosco School, Liluah (ICSE/ISC)",
  "Don Bosco School, Park Circus (ICSE/ISC)",
  "Frank Anthony Public School (ICSE/ISC)",
  "Future Foundation School, Regent Park (ICSE/ISC)",
  "G.D. Goenka Public School, Dakshineswar (CBSE)",
  "Hariyana Vidya Mandir, Salt Lake (CBSE)",
  "Indus Valley World School, Bypass (CBSE)",
  "Julien Day School, Ganganagar (ICSE/ISC)",
  "Julien Day School, Kolkata (ICSE/ISC)",
  "Kendriya Vidyalaya, Ballygunge (CBSE)",
  "Kendriya Vidyalaya, Salt Lake (CBSE)",
  "La Martiniere for Boys (ICSE/ISC)",
  "La Martiniere for Girls (ICSE/ISC)",
  "Lakshmipat Singhania Academy (CBSE)",
  "Loreto Day School, Bowbazar (ICSE/ISC)",
  "Loreto Day School, Sealdah (ICSE/ISC)",
  "Loreto House, Middleton Row (ICSE/ISC)",
  "M.C. Kejriwal Vidyapeeth, Liluah (ICSE/ISC)",
  "Mahadevi Birla World Academy (CBSE)",
  "Modern High School for Girls (ICSE/ISC)",
  "Narayana School, New Town (CBSE)",
  "National English School, Rajarhat (ICSE/ISC)",
  "National English School, VIP Road (ICSE/ISC)",
  "Our Lady Queen of the Missions School, Park Circus (ICSE/ISC)",
  "Our Lady Queen of the Missions School, Salt Lake (ICSE/ISC)",
  "Pratt Memorial School (ICSE/ISC)",
  "Ruby Park Public School (CBSE)",
  "Salt Lake Point School (ICSE/ISC)",
  "Salt Lake School, CA Block (ICSE/ISC)",
  "South City International School (CBSE)",
  "South Point High School (CBSE)",
  "Sri Sri Academy, Alipore (CBSE)",
  "St. Augustine's Day School, Barrackpore (ICSE/ISC)",
  "St. Augustine's Day School, Kolkata (ICSE/ISC)",
  "St. Francis Xavier School, Salt Lake (ICSE/ISC)",
  "St. James' School, AJC Bose Road (ICSE/ISC)",
  "St. Joseph's College, Bowbazar (ICSE/ISC)",
  "St. Stephen's School, Dum Dum (ICSE/ISC)",
  "St. Thomas' Boys' School, Kidderpore (ICSE/ISC)",
  "St. Thomas' Girls' School, Kidderpore (ICSE/ISC)",
  "St. Xavier's Collegiate School (ICSE/ISC)",
  "Sushila Birla Girls' School (CBSE)",
  "Techno India Group Public School (CBSE)",
  "The BSS School, Ballygunge (ICSE/ISC)",
  "The Cambridge School, Bypass (CISCE)",
  "The Heritage School, Anandapur (ICSE/ISC)",
  "The Newtown School, New Town (CBSE)",
  "Welland Gouldsmith School (ICSE/ISC)",
];

const CLASS_SUGGESTIONS = [
  "Class 8 (Foundation)",
  "Class 9 (ICSE Computer Applications)",
  "Class 9 (CBSE)",
  "Class 10 (ICSE Computer Applications)",
  "Class 10 (CBSE)",
  "Class 11 (ISC Computer Science)",
  "Class 11 (CBSE Computer Science)",
  "Class 12 (ISC Computer Science)",
  "Class 12 (CBSE Computer Science)",
];

const COLLEGE_SUGGESTIONS = [
  "Acharya Prafulla Chandra College (APCC)",
  "Adamas University, Barasat",
  "Amity University, Kolkata (New Town)",
  "Asutosh College, Kolkata",
  "Bethune College, Kolkata",
  "Bhawanipur Education Society College (BESC)",
  "BP Poddar Institute of Management & Technology",
  "Brainware University, Barasat",
  "Calcutta Institute of Engineering and Management (CIEM)",
  "Future Institute of Engineering and Management (FIEM)",
  "Goenka College of Commerce & Business Administration",
  "Government College of Engineering and Ceramic Tech (GCECT)",
  "Government College of Engineering and Leather Tech (GCELT)",
  "Guru Nanak Institute of Technology (GNIT Sodepur)",
  "Heritage Institute of Technology (HIT Kolkata)",
  "IIEST Shibpur (Howrah)",
  "Institute of Engineering & Management (IEM Kolkata)",
  "Jadavpur University (JU Kolkata)",
  "JIS College of Engineering / JIS University",
  "Maulana Abul Kalam Azad University of Tech (MAKAUT)",
  "Maulana Azad College, Kolkata",
  "MCKV Institute of Engineering, Howrah",
  "Meghnad Saha Institute of Technology (MSIT)",
  "Narula Institute of Technology (NIT Agarpara)",
  "Netaji Subhash Engineering College (NSEC Garia)",
  "Presidency University, Kolkata",
  "RCC Institute of Information Technology (RCCIIT Beliaghata)",
  "Scottish Church College, Kolkata",
  "Sister Nivedita University (SNU New Town)",
  "St. Thomas' College of Engineering and Technology",
  "St. Xavier's College (Autonomous), Kolkata",
  "St. Xavier's University, New Town",
  "Surendranath College, Kolkata",
  "Techno International New Town (TINT)",
  "Techno Main Salt Lake",
  "Techno India University, Salt Lake / New Town",
  "University of Calcutta (CU)",
  "University of Engineering & Management (UEM Kolkata)",
  "Vidyasagar College, Kolkata",
];

const YEAR_SUGGESTIONS = [
  "1st Year (BCA)",
  "2nd Year (BCA)",
  "3rd Year (BCA)",
  "1st Year (B.Tech CSE / IT)",
  "2nd Year (B.Tech CSE / IT)",
  "3rd Year (B.Tech CSE / IT)",
  "4th Year (B.Tech CSE / IT)",
  "1st Year (B.Sc Computer Science)",
  "2nd Year (B.Sc Computer Science)",
  "3rd Year (B.Sc Computer Science)",
  "MCA / M.Sc Computer Science",
];

interface SuggestionInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  suggestions: string[];
  required?: boolean;
}

function SuggestionInput({
  id,
  label,
  value,
  onChange,
  placeholder,
  suggestions,
  required = true,
}: SuggestionInputProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Filter suggestions based on input value
  const filtered = React.useMemo(() => {
    if (!value.trim()) return suggestions;
    const query = value.toLowerCase().trim();
    return suggestions.filter((item) =>
      item.toLowerCase().includes(query)
    );
  }, [value, suggestions]);

  // Close dropdown on outside click
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="space-y-1.5 relative">
      <label
        htmlFor={id}
        className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          type="text"
          required={required}
          autoComplete="off"
          placeholder={placeholder}
          value={value}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            onChange(e.target.value);
            setIsOpen(true);
          }}
          className="w-full px-4 py-2.5 pr-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-amber-500 transition-all"
        />

        {/* Dropdown toggle / indicator arrow */}
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setIsOpen((prev) => !prev)}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-md transition-colors"
          aria-label="Toggle suggestions"
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-brand-amber-500" : ""
            }`}
          />
        </button>

        {/* Floating Suggestions Dropdown */}
        {isOpen && (
          <div className="absolute z-50 left-0 right-0 mt-1 max-h-56 overflow-y-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl py-1.5 animate-in fade-in-50 zoom-in-95 duration-150">
            <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span>Suggested Options ({filtered.length})</span>
              <span className="text-[9px] lowercase font-normal opacity-70">custom entry allowed</span>
            </div>
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <button
                  key={item}
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault(); // prevent input blur before select
                    onChange(item);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-3.5 py-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200 hover:bg-brand-amber-500/10 hover:text-brand-amber-600 dark:hover:text-brand-amber-400 transition-colors flex items-center justify-between"
                >
                  <span className="truncate pr-2">{item}</span>
                  {value === item && (
                    <Check className="w-3.5 h-3.5 text-brand-amber-500 shrink-0" />
                  )}
                </button>
              ))
            ) : (
              <div className="px-3.5 py-2.5 text-xs text-slate-500 dark:text-slate-400">
                No suggestion matching &quot;{value}&quot;. You can submit your custom entry!
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    studentCategory: "school" as "school" | "college",
    institutionName: "",
    classOrYear: "",
    message: "",
  });

  const [submitted, setSubmitted] = React.useState(false);

  // Auto-select College category when arriving from college section CTA (#contact-college)
  React.useEffect(() => {
    const handleHashCheck = () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash;
        if (hash === "#contact-college" || hash.includes("category=college")) {
          setFormData((prev) => ({ ...prev, studentCategory: "college" }));
        }
      }
    };
    handleHashCheck();
    window.addEventListener("hashchange", handleHashCheck);
    return () => window.removeEventListener("hashchange", handleHashCheck);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const categoryText = formData.studentCategory === "school" ? "School Student" : "College Student";
    const instLabel = formData.studentCategory === "school" ? "School" : "College";
    const classYearLabel = formData.studentCategory === "school" ? "Class" : "Year";

    const encodedText = encodeURIComponent(
      `Hello Philomath,\n\nName: ${formData.name}\nContact: ${formData.phone}\nCategory: ${categoryText}\n${instLabel}: ${
        formData.institutionName || "Not specified"
      }\n${classYearLabel}: ${formData.classOrYear || "Not specified"}\nMessage: ${
        formData.message || "I would like to inquire about upcoming batch admissions."
      }`
    );

    const cleanNumber = siteData.contact.whatsapp.number.replace(/\D/g, "");
    window.open(`https://wa.me/${cleanNumber}?text=${encodedText}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-slate-50/70 dark:bg-[#070b20] relative scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Target anchor for college program CTA */}
      <div id="contact-college" className="absolute -top-24 left-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Admissions & Inquiry"
          title="Connect with"
          highlightedWord="Philomath"
          description="Schedule a consultation, inquire about upcoming batches, or discuss your child’s academic goals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Details & Location */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="border border-slate-200/90 dark:border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Direct Contact Points
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={siteData.contact.phoneRaw}
                  className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-amber-500/10 dark:bg-brand-amber-500/20 text-brand-amber-600 dark:text-brand-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Call Faculty Direct
                    </span>
                    <p className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-amber-500 transition-colors">
                      {siteData.contact.phone}
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={siteData.contact.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      WhatsApp Quick Chat
                    </span>
                    <p className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Chat on WhatsApp
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Email Inquiries
                    </span>
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-amber-500 transition-colors break-all">
                      {siteData.contact.email}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Coaching Center Address
                    </span>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {siteData.contact.address.fullFormatted}
                    </p>
                    <a
                      href={siteData.contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-1 text-xs text-brand-amber-600 dark:text-brand-amber-400 font-semibold hover:underline"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Interactive Quick Inquiry Form */}
          <div className="lg:col-span-7">
            <Card className="border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8">
              <div className="space-y-2 mb-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-amber-600 dark:text-brand-amber-400 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Fast Response</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Send an Inquiry
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Fill out the form below. It connects directly to faculty for quick admission assistance.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
                    Inquiry Prepared!
                  </h4>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">
                    Your inquiry has been generated. If WhatsApp didn’t open automatically, you can also call us directly at{" "}
                    <a
                      href={siteData.contact.phoneRaw}
                      className="font-bold underline"
                    >
                      {siteData.contact.phone}
                    </a>
                    .
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        studentCategory: "school",
                        institutionName: "",
                        classOrYear: "",
                        message: "",
                      });
                    }}
                    className="mt-2"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="student-name"
                        className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                      >
                        Student / Parent Name *
                      </label>
                      <input
                        id="student-name"
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-amber-500 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone-number"
                        className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                      >
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="phone-number"
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-amber-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Mutually Exclusive Selector: School vs College */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Student Category *
                    </label>
                    <div
                      role="radiogroup"
                      aria-label="Student category selector"
                      className="grid grid-cols-2 gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
                    >
                      <button
                        type="button"
                        role="radio"
                        aria-checked={formData.studentCategory === "school"}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            studentCategory: "school",
                          })
                        }
                        className={`py-2 px-3 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
                          formData.studentCategory === "school"
                            ? "bg-white dark:bg-slate-900 text-brand-amber-600 dark:text-brand-amber-400 shadow-sm border border-slate-200/80 dark:border-slate-700"
                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        <School className="w-4 h-4" />
                        <span>School</span>
                      </button>

                      <button
                        type="button"
                        role="radio"
                        aria-checked={formData.studentCategory === "college"}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            studentCategory: "college",
                          })
                        }
                        className={`py-2 px-3 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
                          formData.studentCategory === "college"
                            ? "bg-white dark:bg-slate-900 text-brand-amber-600 dark:text-brand-amber-400 shadow-sm border border-slate-200/80 dark:border-slate-700"
                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        <GraduationCap className="w-4 h-4" />
                        <span>College</span>
                      </button>
                    </div>
                  </div>

                  {/* Dynamic Fields: School/College & Class/Year with Suggestions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* School or College Name with Suggestions */}
                    <SuggestionInput
                      id="institution-name"
                      label={formData.studentCategory === "school" ? "School *" : "College *"}
                      value={formData.institutionName}
                      onChange={(val) =>
                        setFormData({ ...formData, institutionName: val })
                      }
                      placeholder={
                        formData.studentCategory === "school"
                          ? "e.g. St. Xavier's, DPS, South Point..."
                          : "e.g. St. Xavier's College, IEM, Heritage..."
                      }
                      suggestions={
                        formData.studentCategory === "school"
                          ? SCHOOL_SUGGESTIONS
                          : COLLEGE_SUGGESTIONS
                      }
                    />

                    {/* Class or Year with Suggestions */}
                    <SuggestionInput
                      id="class-year"
                      label={formData.studentCategory === "school" ? "Class *" : "Year *"}
                      value={formData.classOrYear}
                      onChange={(val) =>
                        setFormData({ ...formData, classOrYear: val })
                      }
                      placeholder={
                        formData.studentCategory === "school"
                          ? "e.g. Class 10 (ICSE), Class 9, Class 11..."
                          : "e.g. 1st Year (BCA), 2nd Year (B.Tech)..."
                      }
                      suggestions={
                        formData.studentCategory === "school"
                          ? CLASS_SUGGESTIONS
                          : YEAR_SUGGESTIONS
                      }
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                    >
                      Questions / Notes (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Mention preferred timings, school name, or current academic level..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-amber-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Connect with Faculty on WhatsApp</span>
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
