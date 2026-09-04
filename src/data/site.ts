import { SiteData } from "@/types";

const PHONE_NUMBER = "+91 74393 03013";
const PHONE_DIGITS = PHONE_NUMBER.replace(/\D/g, "");
const EMAIL_ADDRESS = "philomath.learnings@gmail.com";
const ADDRESS_FULL = "Baguiati, Kolkata, West Bengal, India";

export const siteData: SiteData = {
  brand: {
    name: "Philomath",
    tagline: "Quality Computer Education for a Bright Future",
    description:
      "Premier computer science and programming coaching for ICSE, ISC, and CBSE students in Baguiati, Kolkata. Empowering learners with strong conceptual foundations in Java, Python, Data Structures, and Board Exam mastery.",
    metaDescription:
      "Philomath provides expert ICSE Computer Applications, ISC Computer Science, and CBSE Computer Science tuition in Baguiati, Kolkata. Concept-based learning, printed notes, and proven 100/100 board results.",
    url: "https://www.philomath.co.in",
    logo: {
      src: "/logo.png",
      alt: "Philomath Learning Center Logo",
      width: 240,
      height: 94,
    },
    emblem: {
      src: "/philo.png",
      alt: "Philomath Insignia",
    },
    establishedYear: 2020,
  },

  contact: {
    phone: PHONE_NUMBER,
    phoneRaw: `tel:+${PHONE_DIGITS}`,
    email: EMAIL_ADDRESS,
    address: {
      street: "Baguiati Main Road",
      locality: "Baguiati",
      city: "Kolkata",
      region: "West Bengal",
      country: "India",
      postalCode: "700028",
      fullFormatted: ADDRESS_FULL,
    },
    whatsapp: {
      number: PHONE_NUMBER,
      link: `https://wa.me/${PHONE_DIGITS}?text=Hello%20Philomath%2C%20I%20would%20like%20to%20inquire%20about%20your%20Computer%20Science%20classes.`,
      defaultMessage:
        "Hello Philomath, I would like to inquire about admission and course details for Computer Science.",
    },
    mapsUrl:
      "https://maps.google.com/?q=Baguiati,+Kolkata,+West+Bengal,+India",
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "Why Us", href: "#why-us" },
    { label: "School Courses", href: "#courses" },
    { label: "College Track", href: "#college-program" },
    { label: "Star Achievers", href: "#results" },
    { label: "Methodology", href: "#pedagogy" },
    { label: "Contact", href: "#contact", isPrimary: true },
  ],

  hero: {
    badgeText: "Admissions Open for 2025–2026 Academic Batches",
    title: "Quality Computer Education for a",
    highlightedTitle: "Bright Future",
    subtitle:
      "Expert guidance for ICSE Computer Applications, ISC Computer Science, and CBSE Computer Science students. Master programming through strong conceptual foundations and rigorous practice.",
    ctaPrimary: {
      label: "Explore Courses",
      href: "#courses",
    },
    ctaSecondary: {
      label: "Contact Faculty",
      href: "#contact",
    },
    stats: [
      {
        value: "100/100",
        label: "Top Board Score",
        subtext: "Perfect marks in ICSE Computer Applications",
      },
      {
        value: "100%",
        label: "Pass & Success Rate",
        subtext: "Across ICSE, ISC & CBSE examinations",
      },
      {
        value: "Classes 8–12",
        label: "Specialized Curriculum",
        subtext: "ICSE, ISC & CBSE focused tracks",
      },
      {
        value: "Baguiati",
        label: "Kolkata Center",
        subtext: "Prime accessible location in North Kolkata",
      },
    ],
  },

  features: [
    {
      id: "concept-learning",
      iconName: "concept",
      title: "Concept-Based Learning",
      description:
        "We focus on concepts that build strong logical foundations. Students learn how algorithms work under the hood rather than rote memorization.",
      highlight: "Deep Logic Building",
    },
    {
      id: "study-materials",
      iconName: "materials",
      title: "Printed Study Materials",
      description:
        "Comprehensive chapterwise study notes, question banks, and annotated code snippets are provided for effortless understanding and rapid revision.",
      highlight: "Chapterwise Notes",
    },
    {
      id: "consistent-practice",
      iconName: "practice",
      title: "Consistent Practice",
      description:
        "Regular weekly assignments and homework ensure students write code confidently and retain syntax effortlessly.",
      highlight: "Weekly Assignments",
    },
    {
      id: "individual-attention",
      iconName: "attention",
      title: "Personalized Doubt Resolution",
      description:
        "Small batch sizes permit one-on-one code reviews, individual attention, and customized mentoring for every student's learning pace.",
      highlight: "Small Batch Sizes",
    },
  ],

  courses: [
    {
      id: "icse-computer-applications",
      title: "ICSE Computer Applications",
      board: "ICSE",
      targetClasses: "For Classes VIII – X",
      badge: "Classes 8 to 10",
      summary:
        "Fundamentals of Programming, with a strong focus on logic building and Java basics.",
      primaryLanguage: "Java (BlueJ / OpenJDK)",
      keyTopics: [
        "Principles of Object-Oriented Programming (OOP)",
        "Conditional Logic, Nested Loops & Number Patterns",
        "User-Defined Methods, Overloading & Constructors",
        "Array Operations: Linear/Binary Search & Bubble Sort",
        "String Tokenization, Character Functions & Palindromes",
        "Exhaustive 10-Year ICSE Board Question Bank Solving",
      ],
      features: [
        "Printed chapterwise notes & homework sets",
        "Live dry-run tracing & debugging sessions",
        "Pre-board mock tests strictly on ICSE marking scheme",
      ],
      ctaText: "Enroll in ICSE Batch",
    },
    {
      id: "isc-computer-science",
      title: "ISC Computer Science",
      board: "ISC",
      targetClasses: "For Classes XI & XII",
      badge: "Classes 11 & 12",
      summary:
        "Concept-based learning, with equal importance to Digital Electronics, Java and Data Structures.",
      primaryLanguage: "Java (Core & Advanced)",
      keyTopics: [
        "Propositional Logic, Truth Tables & Boolean Algebra",
        "Digital Electronics: Adders, Decoders, Multiplexers",
        "Inheritance, Polymorphism & Interface Implementation",
        "Data Structures: Stacks, Queues & Linked Lists",
        "Recursive Problem Solving & Algorithmic Tracing",
        "ISC Practical Exam & Project Documentation Coaching",
      ],
      features: [
        "Rigorous coverage of Theory & Practical papers",
        "Detailed boolean minimization & Karnaugh Maps (K-Maps)",
        "Comprehensive ISC specimen analysis",
      ],
      ctaText: "Enroll in ISC Batch",
    },
    {
      id: "cbse-computer-science",
      title: "CBSE Computer Science",
      board: "CBSE",
      targetClasses: "For Classes XI & XII",
      badge: "Classes 11 & 12",
      summary:
        "Structured learning path, curated for the CBSE Examinations, with a strong focus on Python.",
      primaryLanguage: "Python & SQL",
      keyTopics: [
        "Core Python Syntax, Mutable vs Immutable Structures",
        "Functions, Scope of Variables & Custom Modules",
        "Data File Handling: Text Files, Binary Files & CSV Files",
        "Relational Databases: MySQL, SQL Joins & Constraints",
        "Computer Networks: Topologies, Protocols & Web Services",
        "CBSE Board Project & Viva Voce Preparation",
      ],
      features: [
        "Structured step-by-step problem sets",
        "Hands-on SQL schema design & queries",
        "Complete CBSE syllabus alignment & revision",
      ],
      ctaText: "Enroll in CBSE Batch",
    },
  ],

  collegeProgram: {
    id: "college-pro-skills",
    tagline: "Learn the skills the industry actually needs — not just what the syllabus teaches.",
    badge: "For College Students",
    eyebrow: "Career & Industry Readiness",
    title: "Professional Skills & Applied AI Program",
    subtitle: "Practical, job-market-oriented software engineering for college students.",
    description:
      "This is not college-curriculum-based coaching. A practical, job-market-oriented program focused on real-world professional engineering skills.",
    targetAudience: "B.Tech, BCA, B.Sc (CS/IT) & MCA students",
    points: [
      "Strong programming and coding fundamentals",
      "Problem-solving and software development concepts",
      "AI-assisted / AI-driven coding workflows",
      "Integrating AI into software and applications",
      "Modern developer tools and workflows",
      "Building practical, industry-relevant projects",
    ],
    ctaPrimary: {
      label: "Inquire on WhatsApp",
      href: `https://wa.me/${PHONE_DIGITS}?text=Hello%20Philomath%2C%20I%20am%20interested%20in%20the%20Professional%20Skills%20%26%20Applied%20AI%20Program%20for%20College%20Students.`,
    },
    ctaSecondary: {
      label: "Send an Inquiry",
      href: "#contact-college",
    },
  },

  achievers: [
    {
      id: "ishani-mandal",
      name: "Ishani Mandal",
      exam: "ICSE 2024",
      board: "ICSE",
      year: 2024,
      overallPercentage: 98.4,
      subjectScore: 100,
      maxScore: 100,
      subjectName: "Computer Applications",
      image: "/ishani.jpg",
      highlightBadge: "Perfect 100/100",
    },
    {
      id: "mainak-chaki",
      name: "Mainak Chaki",
      exam: "ICSE 2025",
      board: "ICSE",
      year: 2025,
      overallPercentage: 94.0,
      subjectScore: 99,
      maxScore: 100,
      subjectName: "Computer Applications",
      image: "/mainak.png",
      highlightBadge: "99/100 Score",
    },
    {
      id: "syamantak-sengupta",
      name: "Syamantak Sengupta",
      exam: "ICSE 2024",
      board: "ICSE",
      year: 2024,
      overallPercentage: 93.0,
      subjectScore: 99,
      maxScore: 100,
      subjectName: "Computer Applications",
      image: "/syamantak.jpg",
      highlightBadge: "99/100 Score",
    },
    {
      id: "kaustav-rai",
      name: "Kaustav Rai",
      exam: "ICSE 2024",
      board: "ICSE",
      year: 2024,
      overallPercentage: 89.8,
      subjectScore: 96,
      maxScore: 100,
      subjectName: "Computer Applications",
      image: "/kaustav.jpg",
      highlightBadge: "96/100 Score",
    },
    {
      id: "swapnoneel-saha",
      name: "Swapnoneel Saha",
      exam: "ICSE 2026",
      board: "ICSE",
      year: 2026,
      overallPercentage: 92.4,
      subjectScore: 95,
      maxScore: 100,
      subjectName: "Computer Applications",
      image: "/Swapnoneel.png",
      highlightBadge: "95/100 Score",
    },
    {
      id: "souvik-nandy",
      name: "Souvik Nandy",
      exam: "ICSE 2026",
      board: "ICSE",
      year: 2026,
      overallPercentage: 81.4,
      subjectScore: 95,
      maxScore: 100,
      subjectName: "Computer Applications",
      image: "/Souvik.png",
      highlightBadge: "95/100 Score",
    },
    {
      id: "eric-saha",
      name: "Eric Saha",
      exam: "CBSE Class 12 2026",
      board: "CBSE",
      year: 2026,
      overallPercentage: 88.4,
      subjectScore: 95,
      maxScore: 100,
      subjectName: "Computer Science",
      image: "/Eric.png",
      highlightBadge: "95/100 Score",
    },
  ],

  pedagogy: [
    {
      step: "01",
      title: "Strong Logical Foundations",
      description:
        "We dissect programming concepts step-by-step from ground zero. No syntax is memorized without understanding the memory and execution model.",
    },
    {
      step: "02",
      title: "Hands-on Coding & Tracing",
      description:
        "Every lesson includes live terminal demonstrations, pen-and-paper dry running, and interactive debugging to build real confidence.",
    },
    {
      step: "03",
      title: "Chapterwise Printed Materials",
      description:
        "Structured physical notes and curated homework worksheets keep each student organized and aligned with the latest board patterns.",
    },
    {
      step: "04",
      title: "Board Examination Drills",
      description:
        "Regular time-bound mock exams, previous 10-year question papers, and precise answer presentation tips maximize board exam performance.",
    },
  ],

  faqs: [
    {
      question: "Which boards and classes are taught at Philomath?",
      answer:
        "We specialize in ICSE Computer Applications (Classes VIII to X), ISC Computer Science (Classes XI and XII), and CBSE Computer Science (Classes XI and XII).",
    },
    {
      question: "Do you offer programs for college students?",
      answer:
        "Yes! Philomath offers the Professional Skills & Applied AI Program specifically designed for college students (B.Tech, BCA, B.Sc CS/IT, MCA). It is focused on practical, job-market-oriented software engineering—clean coding fundamentals, modern developer workflows, and integrating AI into real applications. Learn the skills the industry actually needs, beyond textbook syllabi.",
    },
    {
      question: "What programming languages are taught?",
      answer:
        "We teach Java for ICSE and ISC students (including BlueJ, standard JDK, and object-oriented methodologies) and Python along with MySQL for CBSE students. For college students, we focus on industry-grade Java and Python modern development workflows.",
    },
    {
      question: "Are printed study materials provided to students?",
      answer:
        "Yes! Every student receives comprehensive chapterwise printed notes, code references, homework worksheets, and board exam compilation booklets.",
    },
    {
      question: "Where is the coaching center located?",
      answer:
        "The coaching center is conveniently located in Baguiati, Kolkata, accessible easily from VIP Road, Kestopur, Teghoria, and surrounding North Kolkata areas.",
    },
    {
      question: "How can parents and students inquire or enroll for upcoming batches?",
      answer: `You can directly call us at ${PHONE_NUMBER}, message us on WhatsApp, or send an email to ${EMAIL_ADDRESS} to schedule an initial consultation or demo session.`,
    },
  ],

  seo: {
    defaultTitle:
      "Philomath — Quality Computer Education | ICSE, ISC, CBSE & College Professional Skills Kolkata",
    titleTemplate: "%s | Philomath Kolkata",
    description:
      "Philomath is Kolkata's premier computer education institute in Baguiati. Expert tuition for ICSE Computer Applications, ISC & CBSE Computer Science, plus practical job-ready Professional Skills & Applied AI training for college students.",
    keywords: [
      "Philomath",
      "Philomath Kolkata",
      "ICSE Computer Applications tuition Kolkata",
      "ISC Computer Science coaching Kolkata",
      "CBSE Computer Science tuition Baguiati",
      "Computer tuition in Baguiati",
      "Java programming classes for ICSE",
      "Python coaching for CBSE Class 11 12",
      "Best computer science tutor in Kolkata",
      "ICSE 100 marks computer applications",
      "college computer programming coaching Kolkata",
      "BTech BCA software engineering skills Kolkata",
      "AI assisted coding classes Kolkata",
      "applied AI development course for college students",
      "modern developer workflows Git Python Java",
    ],
    canonicalUrl: "https://www.philomath.co.in",
    locale: "en_IN",
  },
};
