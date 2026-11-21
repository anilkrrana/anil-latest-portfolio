import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HolographicTiltCard from "./HolographicTiltCard";
import testimonialsData from "@/data/testimonials.json";
import {
  ChatBubbleBottomCenterTextIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckBadgeIcon,
  SparklesIcon,
  BuildingOffice2Icon,
  ShieldCheckIcon,
  StarIcon,
  Squares2X2Icon,
  RectangleStackIcon
} from "@heroicons/react/24/outline";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  relationship: string;
  source: string;
  badge: string;
  date?: string;
  initials?: string;
  color?: string;
  feedback: string;
  keyHighlights: string[];
}

export default function ProfessionalFeedback() {
  const testimonials: Testimonial[] = testimonialsData.testimonials || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"spotlight" | "grid">("spotlight");

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[currentIndex] || testimonials[0];

  return (
    <section id="feedback" className="py-24 relative overflow-hidden bg-command-grid bg-radial-gradient">
      {/* 3D Ambient Lighting Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none -z-10">
        <div className="absolute inset-0 rounded-full border border-blue-500/10 animate-[spin_60s_linear_infinite]" />
        <div className="absolute inset-20 rounded-full border border-indigo-500/15 animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute inset-40 rounded-full bg-gradient-to-tr from-cyan-500/5 via-blue-600/10 to-indigo-600/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-blue-950/60 bg-blue-50 border border-blue-500/30 text-blue-500 dark:text-blue-400 text-xs font-mono font-semibold tracking-wider mb-4 shadow-lg shadow-blue-500/10"
          >
            <ShieldCheckIcon className="w-4 h-4 text-cyan-400" />
            <span>VERIFIED CAPGEMINI EVALUATIONS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold dark:text-white text-slate-900 font-outfit tracking-tight"
          >
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 drop-shadow-sm">
              Endorsements &amp; Feedback
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base dark:text-neutral-300 text-slate-600 mt-4 max-w-2xl font-light"
          >
            Official performance reviews submitted by engineering leads, senior architects, and project collaborators 
            at <strong className="dark:text-white text-slate-900 font-semibold">Capgemini</strong> across enterprise cloud transformations.
          </motion.p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4" />

          {/* View Mode Switcher Pills */}
          <div className="flex items-center gap-2 mt-8 p-1 rounded-xl dark:bg-neutral-900/80 bg-slate-100 border dark:border-neutral-800 border-slate-200">
            <button
              onClick={() => setViewMode("spotlight")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                viewMode === "spotlight"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "dark:text-neutral-400 text-slate-600 hover:text-blue-500"
              }`}
            >
              <RectangleStackIcon className="w-3.5 h-3.5" />
              <span>3D Spotlight Deck</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "dark:text-neutral-400 text-slate-600 hover:text-blue-500"
              }`}
            >
              <Squares2X2Icon className="w-3.5 h-3.5" />
              <span>Show All 3 (Grid)</span>
            </button>
          </div>
        </div>

        {/* 1. SPOTLIGHT MODE (3D Interactive Tilt Card with Selector Pills) */}
        {viewMode === "spotlight" && (
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Quick Teammate Selector Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {testimonials.map((t, idx) => {
                const isSelected = idx === currentIndex;
                return (
                  <button
                    key={t.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-medium transition-all duration-300 flex items-center gap-2.5 border ${
                      isSelected
                        ? "dark:bg-blue-950/80 bg-blue-50 border-blue-500/60 dark:text-white text-blue-900 shadow-lg shadow-blue-500/20 scale-105"
                        : "dark:bg-neutral-900/80 bg-white dark:border-neutral-800 border-slate-200 dark:text-neutral-400 text-slate-600 hover:border-blue-400"
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold text-white bg-gradient-to-tr ${
                        t.color || "from-blue-600 to-cyan-500"
                      }`}
                    >
                      {t.initials || t.name.charAt(0)}
                    </span>
                    <div className="text-left">
                      <div className="font-bold font-outfit text-xs truncate max-w-[160px] sm:max-w-none">
                        {t.name}
                      </div>
                      <div className="text-[10px] opacity-75 truncate max-w-[150px]">
                        {t.badge}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* 3D Holographic Card Viewport */}
            <HolographicTiltCard
              intensity={10}
              glowColor="rgba(59, 130, 246, 0.45)"
              className="rounded-3xl shadow-2xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-3xl p-6 sm:p-10 dark:bg-gradient-to-b dark:from-[#0d1525] dark:via-[#090f1c] dark:to-[#050811] bg-gradient-to-b from-white via-slate-50 to-blue-50/50 border-2 dark:border-blue-500/40 border-blue-300 shadow-2xl backdrop-blur-xl relative overflow-hidden"
                >
                  {/* Decorative Watermark Quote */}
                  <div className="absolute top-6 right-8 text-8xl font-serif dark:text-blue-500/10 text-blue-500/10 pointer-events-none select-none font-bold">
                    &ldquo;
                  </div>

                  {/* Top Bar: Reviewer Identity & Verification Badge */}
                  <div
                    style={{ transform: "translateZ(30px)" }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b dark:border-neutral-800/80 border-slate-200"
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${
                          active.color || "from-blue-600 to-indigo-600"
                        } flex items-center justify-center text-white font-bold font-mono text-base shadow-lg shadow-blue-500/25 flex-shrink-0`}
                      >
                        {active.initials || active.name.charAt(0)}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 font-outfit">
                            {active.name}
                          </h3>
                          <CheckBadgeIcon
                            className="w-5 h-5 text-blue-500 flex-shrink-0"
                            title="Verified Capgemini Colleague"
                          />
                        </div>
                        <p className="text-xs font-medium dark:text-cyan-400 text-blue-600 font-mono mt-0.5">
                          {active.role}
                        </p>
                        <p className="text-[11px] dark:text-neutral-400 text-slate-500 font-mono flex items-center gap-1.5 mt-0.5">
                          <BuildingOffice2Icon className="w-3.5 h-3.5" />
                          <span>Capgemini</span>
                          <span>·</span>
                          <span>{active.relationship}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold dark:bg-emerald-500/15 bg-emerald-50 text-emerald-500 border border-emerald-500/30">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Verified Performance Review</span>
                      </span>
                      <span className="text-[10px] font-mono dark:text-neutral-400 text-slate-500">
                        {active.source}
                      </span>
                    </div>
                  </div>

                  {/* Core Testimonial Body (High Contrast, Ultra-Readable) */}
                  <div
                    style={{ transform: "translateZ(20px)" }}
                    className="py-6 space-y-4"
                  >
                    {active.feedback.split("\n\n").map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-sm sm:text-base dark:text-neutral-200 text-slate-800 leading-relaxed font-normal"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Key Architecture & Project Highlights Tags */}
                  <div
                    style={{ transform: "translateZ(35px)" }}
                    className="pt-6 border-t dark:border-neutral-800/80 border-slate-200 space-y-3"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono font-bold dark:text-cyan-400 text-blue-600">
                      <SparklesIcon className="w-4 h-4" />
                      <span>KEY INITIATIVES &amp; IMPACT MENTIONED</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {active.keyHighlights.map((hl, hlIdx) => (
                        <span
                          key={hlIdx}
                          className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium dark:bg-neutral-900/90 bg-white border dark:border-neutral-800 border-slate-200/80 dark:text-neutral-200 text-slate-700 shadow-sm flex items-center gap-1.5 hover:border-blue-400 transition-colors"
                        >
                          <StarIcon className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                          <span>{hl}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </HolographicTiltCard>

            {/* Previous / Next Controls */}
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-8 bg-blue-500"
                        : "w-2.5 dark:bg-neutral-800 bg-slate-300 hover:bg-neutral-600"
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-xl dark:bg-neutral-900 bg-white border dark:border-neutral-800 border-slate-200 dark:text-neutral-300 text-slate-700 hover:border-blue-500 hover:text-blue-500 transition-all shadow-sm flex items-center gap-1.5 text-xs font-mono"
                  aria-label="Previous review"
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-xl dark:bg-neutral-900 bg-white border dark:border-neutral-800 border-slate-200 dark:text-neutral-300 text-slate-700 hover:border-blue-500 hover:text-blue-500 transition-all shadow-sm flex items-center gap-1.5 text-xs font-mono"
                  aria-label="Next review"
                >
                  <span>Next</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. GRID MODE (All 3 Colleague Reviews Visible Simultaneously in 3D Cards) */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <HolographicTiltCard
                key={t.id}
                intensity={8}
                glowColor="rgba(59, 130, 246, 0.4)"
                className="h-full rounded-3xl"
              >
                <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl dark:bg-[#0c1322] bg-white border-2 dark:border-neutral-800/80 border-slate-200 hover:border-blue-400/60 transition-all shadow-xl">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3 pb-4 border-b dark:border-neutral-800 border-slate-200">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${
                          t.color || "from-blue-600 to-cyan-500"
                        } flex items-center justify-center text-white font-bold font-mono text-sm shadow-md flex-shrink-0`}
                      >
                        {t.initials || t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-base font-bold dark:text-white text-slate-900 font-outfit">
                            {t.name}
                          </h4>
                          <CheckBadgeIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        </div>
                        <p className="text-xs font-medium dark:text-cyan-400 text-blue-600 font-mono">
                          {t.role}
                        </p>
                        <p className="text-[10px] dark:text-neutral-400 text-slate-500 font-mono">
                          {t.company} · {t.relationship}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <span>{t.badge}</span>
                    </div>

                    {/* Feedback Text (Readable) */}
                    <p className="text-xs sm:text-sm dark:text-neutral-300 text-slate-700 leading-relaxed font-normal">
                      &ldquo;{t.feedback.substring(0, 320)}...&rdquo;
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="pt-4 border-t dark:border-neutral-800/80 border-slate-200 mt-4 space-y-2">
                    <span className="text-[10px] font-mono font-bold dark:text-neutral-400 text-slate-500 uppercase">
                      Top Highlights:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {t.keyHighlights.slice(0, 3).map((hl, hlIdx) => (
                        <span
                          key={hlIdx}
                          className="px-2 py-1 rounded-lg text-[10px] font-mono dark:bg-neutral-900 bg-slate-100 dark:text-neutral-300 text-slate-700 border dark:border-neutral-800 border-slate-200"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </HolographicTiltCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}