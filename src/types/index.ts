export interface BrandInfo {
  name: string;
  tagline: string;
  description: string;
  metaDescription: string;
  url: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  emblem: {
    src: string;
    alt: string;
  };
  establishedYear: number;
}

export interface ContactInfo {
  phone: string;
  phoneRaw: string; // tel: link format
  email: string;
  address: {
    street: string;
    locality: string;
    city: string;
    region: string;
    country: string;
    postalCode?: string;
    fullFormatted: string;
  };
  whatsapp: {
    number: string;
    link: string;
    defaultMessage: string;
  };
  mapsUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
  isPrimary?: boolean;
}

export interface HeroStat {
  label: string;
  value: string;
  subtext?: string;
}

export interface HeroContent {
  badgeText: string;
  title: string;
  highlightedTitle: string;
  subtitle: string;
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
  };
  stats: HeroStat[];
}

export interface Feature {
  id: string;
  iconName: "concept" | "materials" | "practice" | "attention" | "exam";
  title: string;
  description: string;
  highlight: string;
}

export interface Course {
  id: string;
  title: string;
  board: "ICSE" | "ISC" | "CBSE";
  targetClasses: string;
  badge: string;
  summary: string;
  primaryLanguage: string;
  keyTopics: string[];
  features: string[];
  ctaText: string;
}

export interface StudentAchiever {
  id: string;
  name: string;
  exam: string;
  board: "ICSE" | "ISC" | "CBSE";
  year: number;
  overallPercentage: number;
  subjectScore: number;
  maxScore: number;
  subjectName: string;
  image: string;
  highlightBadge?: string;
}

export interface PedagogyStep {
  step: string;
  title: string;
  description: string;
}

export interface CollegeProgramInfo {
  id: string;
  tagline: string;
  badge: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  targetAudience: string;
  points: string[];
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteData {
  brand: BrandInfo;
  contact: ContactInfo;
  nav: NavItem[];
  hero: HeroContent;
  features: Feature[];
  courses: Course[];
  collegeProgram: CollegeProgramInfo;
  achievers: StudentAchiever[];
  pedagogy: PedagogyStep[];
  faqs: FaqItem[];
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
    locale: string;
  };
}
