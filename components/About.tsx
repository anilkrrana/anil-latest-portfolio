import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HolographicTiltCard from "./HolographicTiltCard";
import { 
  CommandLineIcon, 
  CheckCircleIcon,
  SparklesIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

export default function About() {
  const stats = [
    { label: "Years Software Exp.", value: "2+", desc: "Capgemini & Enterprise" },
    { label: "Industry Credential", value: "Certified", desc: "Salesforce MuleSoft Dev I", highlight: true },
    { label: "DSA Solved", value: "300+", desc: "LeetCode & CodeVita" },
    { label: "Backend Performance", value: "+40%", desc: "High-Throughput APIs" },
  ];

  return (
    <section id="about" className="py-24 relative bg-command-grid bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="cmdBadge mb-3">BACKGROUND &amp; NARRATIVE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 font-outfit tracking-tight">
            About Me — Senior Software Engineer
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Picture with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col items-center w-full"
          >
            <HolographicTiltCard
              intensity={12}
              glowColor="rgba(0, 161, 224, 0.45)"
              className="max-w-sm rounded-3xl"
            >
              <div className="relative w-full rounded-3xl overflow-hidden border-2 dark:border-cyan-500/40 border-cyan-400/50 p-2.5 dark:bg-gradient-to-b dark:from-[#0d1a2d] dark:to-[#040812] bg-white shadow-2xl group">
                <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/anil-latest-profile.jpg"
                    alt="Anil Kumar Rana"
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 600px"
                    priority
                    className="object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t dark:from-[#040812] from-slate-900/70 via-transparent to-transparent opacity-85" />
                  
                  <div 
                    style={{ transform: "translateZ(30px)" }}
                    className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl dark:bg-black/80 bg-white/95 border dark:border-cyan-500/30 border-slate-200 backdrop-blur-md shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-mono text-cyan-400 font-bold">
                        Anil Kumar Rana
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                        VERIFIED
                      </span>
                    </div>
                    <div className="text-[11px] dark:text-neutral-300 text-slate-700 font-mono mt-0.5">
                      Senior Software Engineer @ Capgemini
                    </div>
                  </div>
                </div>
              </div>
            </HolographicTiltCard>
          </motion.div>

          {/* Narrative Content in 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <HolographicTiltCard
              intensity={8}
              glowColor="rgba(59, 130, 246, 0.4)"
              className="rounded-3xl"
            >
              <div className="cmdCard p-6 sm:p-8 space-y-5 dark:border-neutral-800 border-slate-200 rounded-3xl shadow-2xl">
                <div 
                  style={{ transform: "translateZ(20px)" }}
                  className="flex items-center gap-2 text-xs font-mono text-blue-500 font-bold"
                >
                  <CommandLineIcon className="w-4 h-4" />
                  <span>whoami --verbose</span>
                </div>

                <h3 
                  style={{ transform: "translateZ(25px)" }}
                  className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 font-outfit"
                >
                  Senior Software Engineer delivering high-throughput backend services and enterprise API integrations.
                </h3>

                <div 
                  style={{ transform: "translateZ(15px)" }}
                  className="space-y-4"
                >
                  <p className="text-sm sm:text-base dark:text-neutral-200 text-slate-800 leading-relaxed font-normal">
                    I am a <strong className="dark:text-white text-slate-900 font-semibold">Senior Software Engineer at Capgemini</strong> (promoted Mar 2025) and a <strong className="text-cyan-500 dark:text-cyan-400 font-semibold">Salesforce Certified MuleSoft Developer I</strong> with over 2 years of professional software engineering experience. I lead enterprise API-led connectivity initiatives using <strong className="dark:text-white text-slate-900 font-semibold">MuleSoft 4.9</strong>, <strong className="dark:text-white text-slate-900 font-semibold">DataWeave 2.0</strong>, and architect high-throughput <strong className="dark:text-white text-slate-900 font-semibold">Spring Boot microservices</strong>.
                  </p>

                  <p className="text-sm sm:text-base dark:text-neutral-200 text-slate-800 leading-relaxed font-normal">
                    My engineering focus combines enterprise integration with modern Java backend engineering — including <strong className="dark:text-white text-slate-900 font-semibold">Spring Security JWT authentication, pessimistic database locking, Redis caching, and CI/CD automation</strong>. I also actively mentor junior engineers, conduct technical knowledge sharing sessions, and teach software engineering fundamentals.
                  </p>
                </div>

                {/* Core Competency Bullet Grid */}
                <div 
                  style={{ transform: "translateZ(25px)" }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t dark:border-neutral-800 border-slate-200"
                >
                  {[
                    "Salesforce Certified MuleSoft Developer I",
                    "Java 21 & Spring Boot Microservices",
                    "MuleSoft 4.9 & DataWeave 2.0 Pipelines",
                    "REST API Security & JWT Rotation",
                    "PostgreSQL Pessimistic DB Locking",
                    "Redis Cache-Aside Strategy",
                    "Jenkins & GitHub Actions CI/CD"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-medium dark:text-neutral-200 text-slate-800">
                      <CheckCircleIcon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </HolographicTiltCard>
          </motion.div>
        </div>

        {/* Viewport Animated Metrics Cards with 3D Tilt */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <HolographicTiltCard
                intensity={8}
                glowColor="rgba(59, 130, 246, 0.35)"
                className="h-full rounded-2xl"
              >
                <div className="cmdCard p-5 text-center hover:border-blue-500/50 transition-all group h-full flex flex-col justify-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 font-outfit group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold dark:text-neutral-200 text-slate-800 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-mono dark:text-neutral-400 text-slate-500 mt-0.5">
                    {stat.desc}
                  </div>
                </div>
              </HolographicTiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
