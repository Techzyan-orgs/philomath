"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Menu, X, Phone, MessageSquare } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Track scroll for sticky navbar styling
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-white/95 dark:bg-[#070C24]/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-2.5"
            : "bg-white/80 dark:bg-[#070C24]/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber-500 rounded-lg p-1"
            aria-label={siteData.brand.name}
          >
            <div className="relative w-36 sm:w-44 h-10 sm:h-12 flex items-center">
              <Image
                src={siteData.brand.logo.src}
                alt={siteData.brand.logo.alt}
                fill
                priority
                sizes="(max-width: 640px) 144px, 176px"
                className="object-contain object-left transition-transform duration-200 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-100/80 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/60 shadow-inner"
            aria-label="Main Navigation"
          >
            {siteData.nav
              .filter((item) => !item.isPrimary)
              .map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-navy-900 dark:hover:text-white rounded-full hover:bg-white dark:hover:bg-slate-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber-500"
                >
                  {item.label}
                </a>
              ))}
          </nav>

          {/* Right side CTA & Controls */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              className="hidden sm:inline-flex"
            >
              Contact Faculty
            </Button>
            <Button
              variant="secondary"
              size="sm"
              href={siteData.contact.phoneRaw}
              className="flex items-center gap-1.5"
              aria-label={`Call Philomath at ${siteData.contact.phone}`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">{siteData.contact.phone}</span>
              <span className="lg:hidden">Call</span>
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2.5">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="min-w-[44px] min-h-[44px] p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber-500 transition-colors flex items-center justify-center active:scale-95"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-brand-amber-500" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070C24] px-4 pt-4 pb-6 space-y-4 shadow-2xl max-h-[calc(100dvh-4.5rem)] overflow-y-auto"
          >
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {siteData.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-amber-500 active:bg-slate-100 dark:active:bg-slate-800 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  {item.isPrimary && (
                    <span className="text-xs bg-brand-amber-500/10 text-brand-amber-600 dark:text-brand-amber-400 px-2.5 py-0.5 rounded-full font-semibold">
                      Direct
                    </span>
                  )}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
              <Button
                variant="primary"
                size="md"
                href={siteData.contact.phoneRaw}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3"
              >
                <Phone className="w-4 h-4" />
                <span>Call {siteData.contact.phone}</span>
              </Button>
              <Button
                variant="outline"
                size="md"
                href={siteData.contact.whatsapp.link}
                isExternal
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 border-emerald-600/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Inquiry</span>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-950/40 dark:bg-black/60 backdrop-blur-xs z-40 md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
