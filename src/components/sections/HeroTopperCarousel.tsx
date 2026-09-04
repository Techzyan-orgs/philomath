"use client";

import * as React from "react";
import Image from "next/image";
import { siteData } from "@/data/site";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export function HeroTopperCarousel() {
  const achievers = siteData.achievers;
  const count = achievers.length;

  // Extended slides with clones at boundaries for seamless infinite looping:
  // [lastItem, item0, item1, ..., item6, firstItem]
  const slides = React.useMemo(() => {
    if (count === 0) return [];
    return [achievers[count - 1], ...achievers, achievers[0]];
  }, [achievers, count]);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const progressBarRef = React.useRef<HTMLDivElement>(null);

  // trackIndex 1 corresponds to achievers[0] (Ishani Mandal)
  const [trackIndex, setTrackIndex] = React.useState(1);
  const [enableTransition, setEnableTransition] = React.useState(true);

  const isPausedRef = React.useRef(false);
  const isTransitioningRef = React.useRef(false);
  const elapsedRef = React.useRef(0);
  const lastTimeRef = React.useRef<number | null>(null);

  // Compute real active student index (0 to count - 1)
  const realActiveIndex =
    trackIndex === 0
      ? count - 1
      : trackIndex === count + 1
      ? 0
      : trackIndex - 1;

  const DURATION = 4000; // 4s per slide

  const nextTopper = React.useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setEnableTransition(true);
    setTrackIndex((prev) => prev + 1);
    elapsedRef.current = 0;
    if (progressBarRef.current) {
      progressBarRef.current.style.transform = "scaleX(0)";
    }

    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 600);
  }, []);

  const prevTopper = React.useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setEnableTransition(true);
    setTrackIndex((prev) => prev - 1);
    elapsedRef.current = 0;
    if (progressBarRef.current) {
      progressBarRef.current.style.transform = "scaleX(0)";
    }

    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 600);
  }, []);

  const goToTopper = React.useCallback((index: number) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setEnableTransition(true);
    setTrackIndex(index + 1);
    elapsedRef.current = 0;
    if (progressBarRef.current) {
      progressBarRef.current.style.transform = "scaleX(0)";
    }

    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 600);
  }, []);

  // Seamless wrap-around after transition ends
  const handleTransitionEnd = () => {
    isTransitioningRef.current = false;
    if (trackIndex === count + 1) {
      // Slid into cloned first item -> snap to real first item (trackIndex = 1)
      setEnableTransition(false);
      setTrackIndex(1);
    } else if (trackIndex === 0) {
      // Slid into cloned last item -> snap to real last item (trackIndex = count)
      setEnableTransition(false);
      setTrackIndex(count);
    }
  };

  // Re-enable transition smoothly after instantaneous snap
  React.useEffect(() => {
    if (!enableTransition) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [enableTransition]);

  // Attach native DOM event listeners for robust hover/focus pause & resume
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onEnter = () => {
      isPausedRef.current = true;
      lastTimeRef.current = null;
    };

    const onLeave = () => {
      isPausedRef.current = false;
      lastTimeRef.current = null;
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("focusin", onEnter);
    el.addEventListener("focusout", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("focusin", onEnter);
      el.removeEventListener("focusout", onLeave);
    };
  }, []);

  // Frame-by-frame progress loop with seamless pause & resume from exact place
  // Directly updates GPU transform matrix on progressBarRef (0 React re-renders)
  React.useEffect(() => {
    let animId: number;

    const tick = (currentTime: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = currentTime;
      }

      let delta = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      // Handle tab switches or frame drops gracefully
      if (delta > 200) {
        delta = 0;
      }

      if (!isPausedRef.current && !isTransitioningRef.current) {
        elapsedRef.current += delta;
        const ratio = Math.min(1, elapsedRef.current / DURATION);

        if (progressBarRef.current) {
          progressBarRef.current.style.transform = `scaleX(${ratio})`;
        }

        if (elapsedRef.current >= DURATION) {
          elapsedRef.current = 0;
          if (progressBarRef.current) {
            progressBarRef.current.style.transform = "scaleX(0)";
          }
          nextTopper();
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      lastTimeRef.current = null;
    };
  }, [nextTopper]);

  // Touch handlers for mobile swipe
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    isPausedRef.current = true;
    lastTimeRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    isPausedRef.current = false;
    lastTimeRef.current = null;
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      nextTopper();
    } else if (distance < -minSwipeDistance) {
      prevTopper();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative bg-slate-50/90 dark:bg-slate-900/80 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 transition-all duration-300 hover:border-brand-amber-500/40 dark:hover:border-brand-amber-500/40 shadow-sm group/topper overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Student Topper Showcase"
    >
      {/* Top micro-bar: Header & Prev/Next Controls (Strictly NO numbering) */}
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-200/60 dark:border-slate-800/80 text-[11px]">
        <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-brand-amber-600 dark:text-brand-amber-400">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Star Performer Showcase</span>
        </div>

        {/* Prev/Next Navigation Controls */}
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            onClick={prevTopper}
            className="p-1 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-amber-500"
            aria-label="Previous topper"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={nextTopper}
            className="p-1 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-amber-500"
            aria-label="Next topper"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Endless Sliding Viewport */}
      <div className="overflow-hidden w-full rounded-xl">
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex ${
            enableTransition
              ? "transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              : ""
          } will-change-transform`}
          style={{ transform: `translateX(-${trackIndex * 100}%)` }}
        >
          {slides.map((achiever, index) => {
            const subjectShort = achiever.subjectName
              .toLowerCase()
              .includes("application")
              ? "Comp App"
              : "Comp Science";

            return (
              <div
                key={`${achiever.id}-${index}`}
                className="w-full shrink-0 flex items-center gap-4 py-0.5"
                aria-hidden={index !== trackIndex}
              >
                {/* Photo Container */}
                <div className="relative w-16 h-20 rounded-xl overflow-hidden shrink-0 border border-slate-300 dark:border-slate-700 shadow-sm bg-slate-200 dark:bg-slate-800">
                  <Image
                    src={achiever.image}
                    alt={achiever.name}
                    fill
                    sizes="64px"
                    priority={index === 1}
                    className="object-cover transition-transform duration-300 group-hover/topper:scale-105"
                  />
                </div>

                {/* Info Column */}
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-brand-amber-600 dark:text-brand-amber-400 uppercase tracking-wide truncate">
                      {achiever.exam}
                    </span>
                    {achiever.highlightBadge && (
                      <span className="text-[10px] font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 px-1.5 py-0.5 rounded-md shrink-0">
                        {achiever.highlightBadge}
                      </span>
                    )}
                  </div>

                  <h4 className="font-bold text-slate-900 dark:text-white text-base tracking-tight truncate">
                    {achiever.name}
                  </h4>

                  <div className="flex items-center gap-2 text-xs flex-wrap">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                      {achiever.subjectScore}/{achiever.maxScore} {subjectShort}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300 font-mono">
                      {achiever.overallPercentage}% Overall
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dot Track */}
      <div className="flex items-center justify-center gap-1.5 pt-3 mt-1">
        {achievers.map((achiever, idx) => {
          const isActive = idx === realActiveIndex;
          return (
            <button
              key={achiever.id}
              type="button"
              onClick={() => goToTopper(idx)}
              aria-label={`Go to topper ${idx + 1}: ${achiever.name}`}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-amber-500 ${
                isActive
                  ? "w-6 bg-brand-amber-500 shadow-sm"
                  : "w-1.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
              }`}
            />
          );
        })}
      </div>

      {/* Animated Progress Bar Indicator (GPU-Accelerated 60/120fps, exact pause & resume) */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-200/50 dark:bg-slate-800 overflow-hidden">
        <div
          ref={progressBarRef}
          className="h-full w-full bg-gradient-to-r from-brand-amber-500 to-amber-400 origin-left will-change-transform"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </div>
  );
}
