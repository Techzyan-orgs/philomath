import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Courses } from "@/components/sections/Courses";
import { CollegeProgram } from "@/components/sections/CollegeProgram";
import { Results } from "@/components/sections/Results";
import { Pedagogy } from "@/components/sections/Pedagogy";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-amber-500 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Sticky Responsive Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        <Hero />
        <WhyChooseUs />
        <Courses />
        <CollegeProgram />
        <Results />
        <Pedagogy />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
