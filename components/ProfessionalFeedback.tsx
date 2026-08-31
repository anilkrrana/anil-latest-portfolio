import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ChatBubbleBottomCenterTextIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckBadgeIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  relationship: string;
  feedback: string;
  date?: string;
  linkedin?: string;
  avatar?: string;
}

export default function ProfessionalFeedback() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch testimonials from JSON data file
    fetch("/data/testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.testimonials)) {
          setTestimonials(data.testimonials);
        }
      })
      .catch(() => setTestimonials([]));
  }, []);

  const handleNext = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section id="feedback" className="py-24 relative bg-command-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="cmdBadge mb-3">SOCIAL PROOF &amp; RECOMMENDATIONS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 font-outfit tracking-tight">
            Professional Feedback
          </h2>
          <p className="text-sm dark:text-neutral-400 text-slate-600 mt-2 max-w-xl">
            Don&apos;t just take my word for it — verified recommendations from engineering leads, teammates, and professional collaborators.
          </p>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* Content Container */}
        {testimonials.length === 0 || !activeTestimonial ? (
          /* High-Grade Empty State (No fabricated testimonials) */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cmdCard max-w-3xl mx-auto p-10 text-center border-dashed dark:border-neutral-800 border-slate-300 relative overflow-hidden bg-gradient-to-b dark:from-neutral-900/40 dark:to-neutral-950/60 from-slate-50 to-white"
          >
            <div className="w-16 h-16 rounded-2xl dark:bg-neutral-800/80 bg-blue-50 dark:text-blue-400 text-blue-600 flex items-center justify-center mx-auto mb-4 border dark:border-neutral-700 border-blue-100 shadow-md">
              <ChatBubbleBottomCenterTextIcon className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-bold dark:text-white text-slate-900 font-outfit mb-2">
              Verified Recommendations Pending
            </h3>

            <p className="text-sm dark:text-neutral-400 text-slate-600 max-w-md mx-auto leading-relaxed font-light mb-6">
              Professional recommendations will appear here as I add verified feedback from teammates, managers, and collaborators I&apos;ve worked with.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono dark:bg-neutral-900 bg-slate-100 dark:text-neutral-400 text-slate-500 border dark:border-neutral-800 border-slate-200">
              <CheckBadgeIcon className="w-4 h-4 text-blue-500" />
              <span>Authentic Social Proof Standard</span>
            </div>
          </motion.div>
        ) : (
          /* Testimonials Carousel */
          <div className="max-w-4xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="cmdCard p-8 md:p-10 border-blue-500/20 relative"
              >
                <div className="text-5xl font-serif text-blue-500/30 absolute top-6 left-6 font-bold">
                  &ldquo;
                </div>

                <div className="relative z-10 space-y-6">
                  <p className="text-base md:text-lg dark:text-neutral-200 text-slate-800 leading-relaxed font-light italic">
                    &quot;{activeTestimonial.feedback}&quot;
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t dark:border-neutral-800/80 border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md overflow-hidden relative">
                        {activeTestimonial.avatar ? (
                          <Image
                            src={activeTestimonial.avatar}
                            alt={activeTestimonial.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          activeTestimonial.name.charAt(0)
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-bold dark:text-white text-slate-900 font-outfit flex items-center gap-1.5">
                          <span>{activeTestimonial.name}</span>
                          <CheckBadgeIcon className="w-4 h-4 text-blue-500" title="Verified Collaborator" />
                        </div>
                        <div className="text-xs dark:text-neutral-400 text-slate-600">
                          {activeTestimonial.role} @ <strong className="dark:text-neutral-200 text-slate-800">{activeTestimonial.company}</strong>
                        </div>
                        <div className="text-[11px] font-mono text-blue-500 mt-0.5">
                          Relationship: {activeTestimonial.relationship}
                        </div>
                      </div>
                    </div>

                    {activeTestimonial.linkedin && (
                      <a
                        href={activeTestimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <span>View Profile</span>
                        <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Controls */}
            {testimonials.length > 1 && (
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-1.5">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentIndex
                          ? "w-8 bg-blue-500"
                          : "w-2 dark:bg-neutral-800 bg-slate-300 hover:bg-neutral-500"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-xl dark:bg-neutral-900 bg-white border dark:border-neutral-800 border-slate-200 dark:text-neutral-300 text-slate-700 hover:text-blue-500 transition-colors shadow-sm"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeftIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-xl dark:bg-neutral-900 bg-white border dark:border-neutral-800 border-slate-200 dark:text-neutral-300 text-slate-700 hover:text-blue-500 transition-colors shadow-sm"
                    aria-label="Next testimonial"
                  >
                    <ChevronRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
