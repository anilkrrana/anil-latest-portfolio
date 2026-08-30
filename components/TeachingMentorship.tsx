import React from "react";
import { motion } from "framer-motion";
import { 
  UserGroupIcon, 
  VideoCameraIcon,
  CheckCircleIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline";

export default function TeachingMentorship() {
  const topics = [
    "Java Core & OOP Fundamentals",
    "Spring Boot & RESTful Microservices",
    "Relational Databases & JPA / Hibernate",
    "Git, GitHub & Code Collaboration",
    "System Design & Clean Code Practices",
    "IT Career Guidance & Transition Support"
  ];

  return (
    <section id="teaching" className="py-24 relative bg-command-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="cmdBadge mb-3">KNOWLEDGE SHARING & MENTORSHIP</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 font-outfit tracking-tight">
            Teaching & Mentorship
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Mentorship Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-8 cmdCard p-6 sm:p-8 border-neutral-800 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b dark:border-neutral-800 border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/40 border border-blue-800/40 flex items-center justify-center text-blue-500">
                    <UserGroupIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold dark:text-white text-slate-900 font-outfit">
                      Online Java & Backend Engineering Mentor
                    </h3>
                    <p className="text-xs font-mono text-blue-500 font-semibold mt-0.5">
                      10+ Students Mentored
                    </p>
                  </div>
                </div>

                <div className="px-3.5 py-1.5 rounded-full dark:bg-black bg-slate-100 border dark:border-neutral-800 border-slate-200 text-xs font-mono dark:text-neutral-300 text-slate-700 self-start sm:self-auto">
                  LIVE ONLINE SESSIONS
                </div>
              </div>

              <p className="text-sm sm:text-base dark:text-neutral-300 text-slate-600 font-light leading-relaxed">
                Currently mentoring <strong className="dark:text-white text-slate-900 font-medium">10+ students</strong> through online sessions focused on Java, Spring Boot, backend development, and practical software engineering. I also help learners build strong technical foundations and navigate their transition into software engineering careers.
              </p>

              {/* Topics Grid */}
              <div className="pt-2">
                <h4 className="text-xs font-mono font-bold dark:text-neutral-200 text-slate-800 mb-3">
                  MENTORSHIP FOCUS AREAS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs dark:text-neutral-300 text-slate-700 font-medium">
                      <CheckCircleIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t dark:border-neutral-800 border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-medium flex items-center gap-2 transition-all shadow-md shadow-blue-600/20"
              >
                <EnvelopeIcon className="w-4 h-4" />
                <span>Inquire for Mentorship</span>
              </a>

              <span className="text-xs font-mono dark:text-neutral-400 text-slate-500">
                Individual & Group Sessions
              </span>
            </div>
          </motion.div>

          {/* YouTube Channel & Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4 cmdCard p-6 border-neutral-800 flex flex-col justify-between bg-gradient-to-b dark:from-neutral-900 dark:to-neutral-950 from-slate-50 to-white"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-900/40 border border-red-800/40 flex items-center justify-center text-red-500">
                <VideoCameraIcon className="w-6 h-6" />
              </div>

              <div>
                <span className="cmdBadge text-[10px] text-red-500 border-red-500/30 bg-red-950/40 mb-2">
                  YOUTUBE CHANNEL
                </span>
                <h3 className="text-xl font-bold dark:text-white text-slate-900 font-outfit">
                  WebTechNil
                </h3>
                <p className="text-xs font-mono text-red-500 font-medium mt-0.5">
                  @webtechnil
                </p>
              </div>

              <p className="text-xs dark:text-neutral-300 text-slate-600 font-light leading-relaxed">
                Building WebTechNil — developer content on Java 21, Spring Boot, backend development architecture, and practical career guidance coming soon.
              </p>
            </div>

            <div className="pt-6 border-t dark:border-neutral-800 border-slate-200">
              <a
                href="https://www.youtube.com/@webtechnil"
                target="_blank"
                rel="noreferrer"
                className="w-full px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all shadow-md shadow-red-600/20"
              >
                <VideoCameraIcon className="w-4 h-4" />
                <span>Visit WebTechNil ↗</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
