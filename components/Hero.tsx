import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";
import SpaceCanvas3D from "./SpaceCanvas3D";
import HolographicTiltCard from "./HolographicTiltCard";
import { 
  CodeBracketIcon, 
  CommandLineIcon, 
  ArrowRightIcon, 
  EnvelopeIcon,
  SparklesIcon,
  CheckBadgeIcon
} from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <div className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-command-grid bg-radial-gradient">
      {/* 3D Particle Starfield & Rotating Cyber Matrix Background */}
      <SpaceCanvas3D />
      <BackgroundCircles />

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center space-y-7 z-10">
        {/* Status & Certification Banner */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-1.5 rounded-full dark:bg-neutral-900/90 bg-white/90 border dark:border-cyan-500/40 border-cyan-400/50 shadow-lg shadow-cyan-500/15 backdrop-blur-md"
        >
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-500 tracking-wide flex items-center gap-1">
              <SparklesIcon className="w-3.5 h-3.5" />
              SALESFORCE CERTIFIED MULESOFT DEVELOPER I
            </span>
          </div>

          <span className="hidden sm:inline-block text-slate-300 dark:text-neutral-700">|</span>

          <span className="text-[11px] sm:text-xs font-mono dark:text-neutral-300 text-slate-700 font-medium tracking-wide">
            SENIOR SOFTWARE ENGINEER @ CAPGEMINI
          </span>
        </motion.div>

        {/* 3D Interactive Profile Header Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-md mx-auto"
        >
          <HolographicTiltCard
            intensity={12}
            glowColor="rgba(0, 229, 255, 0.4)"
            className="p-1"
          >
            <div className="p-4 sm:p-5 rounded-2xl dark:bg-neutral-900/80 bg-white/80 border dark:border-neutral-800 border-slate-200/80 backdrop-blur-xl flex flex-col sm:flex-row items-center gap-4 shadow-xl">
              {/* Avatar with Dual Neon Rings */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 opacity-75 blur-sm group-hover:opacity-100 transition-opacity animate-pulse-slow" />
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white dark:border-neutral-900 p-0.5 shadow-xl">
                  <Image
                    src="/anil-latest-profile.jpg"
                    alt="Anil Kumar Rana"
                    fill
                    quality={100}
                    sizes="200px"
                    priority
                    className="object-cover object-top rounded-full"
                  />
                </div>

                {/* Floating Verified Badge Icon */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-md border-2 border-white dark:border-neutral-900" title="Salesforce Certified">
                  <CheckBadgeIcon className="w-4 h-4" />
                </div>
              </div>

              <div className="text-center sm:text-left flex-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold dark:text-white text-slate-900 font-outfit tracking-tight">
                    Anil Kumar Rana
                  </h1>
                </div>
                <p className="text-xs font-mono text-cyan-500 dark:text-cyan-400 font-bold mt-0.5 flex items-center justify-center sm:justify-start gap-1">
                  <span>Salesforce Certified MuleSoft Developer</span>
                  <span>✦</span>
                </p>
                <p className="text-[11px] font-mono dark:text-neutral-400 text-slate-500 mt-0.5">
                  Senior SE @ Capgemini · Enterprise APIs &amp; Java 21
                </p>
              </div>
            </div>
          </HolographicTiltCard>
        </motion.div>

        {/* Primary Impact Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold dark:text-white text-slate-900 tracking-tight leading-[1.15] font-outfit max-w-3xl"
        >
          Building scalable{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 drop-shadow-sm">
            enterprise integrations, APIs
          </span>{" "}
          & high-throughput systems.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg dark:text-neutral-300 text-slate-600 font-normal leading-relaxed max-w-2xl"
        >
          Senior Software Engineer &amp; <strong className="text-cyan-500 dark:text-cyan-400 font-semibold">Salesforce Certified MuleSoft Developer I</strong> with 2+ years of enterprise experience architecting API-led connectivity, DataWeave 2.0 transformations, high-performance <strong className="dark:text-white text-slate-900 font-semibold">Java 21 &amp; Spring Boot</strong> microservices, and distributed backend systems.
        </motion.p>

        {/* Technology Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 font-mono text-xs dark:text-neutral-400 text-slate-600 max-w-2xl"
        >
          <span className="px-3 py-1 rounded-md dark:bg-cyan-950/60 bg-cyan-50 text-cyan-500 dark:text-cyan-400 border border-cyan-500/40 font-bold shadow-sm flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Salesforce Certified
          </span>
          <span className="px-3 py-1 rounded-md dark:bg-cyan-950/40 bg-sky-50 text-sky-600 dark:text-sky-300 border border-sky-500/30 font-semibold shadow-sm">
            MuleSoft 4.9
          </span>
          <span className="px-3 py-1 rounded-md dark:bg-neutral-900/80 bg-white border dark:border-neutral-800 border-slate-200 shadow-sm">
            DataWeave 2.0
          </span>
          <span className="px-3 py-1 rounded-md dark:bg-neutral-900/80 bg-white border dark:border-neutral-800 border-slate-200 shadow-sm font-semibold">
            Java 21
          </span>
          <span className="px-3 py-1 rounded-md dark:bg-neutral-900/80 bg-white border dark:border-neutral-800 border-slate-200 shadow-sm">
            Spring Boot 3.x
          </span>
          <span className="px-3 py-1 rounded-md dark:bg-neutral-900/80 bg-white border dark:border-neutral-800 border-slate-200 shadow-sm">
            REST APIs &amp; RAML
          </span>
          <span className="px-3 py-1 rounded-md dark:bg-neutral-900/80 bg-white border dark:border-neutral-800 border-slate-200 shadow-sm">
            PostgreSQL
          </span>
          <span className="px-3 py-1 rounded-md dark:bg-neutral-900/80 bg-white border dark:border-neutral-800 border-slate-200 shadow-sm">
            Redis Caching
          </span>
          <span className="px-3 py-1 rounded-md dark:bg-neutral-900/80 bg-white border dark:border-neutral-800 border-slate-200 shadow-sm">
            Docker
          </span>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3.5 pt-2 w-full"
        >
          {/* Highlighted Certification Button */}
          <a
            href="#certifications"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group w-full sm:w-auto"
          >
            <SparklesIcon className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
            <span>Salesforce Credential</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#orderflow"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 group w-full sm:w-auto"
          >
            <span>Simulate OrderFlow</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#projects"
            className="px-5 py-3 rounded-xl dark:bg-neutral-900 bg-white hover:bg-slate-50 dark:hover:bg-neutral-800 dark:text-neutral-200 text-slate-700 border dark:border-neutral-800 border-slate-200 shadow-sm font-medium text-sm transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <CodeBracketIcon className="w-4 h-4 text-blue-500" />
            <span>View Projects</span>
          </a>

          <a
            href="https://drive.google.com/file/d/1z94SpgAE9w-950xogS74NxzpgCRpod7N/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl dark:bg-neutral-900 bg-white hover:bg-slate-50 dark:hover:bg-neutral-800 dark:text-neutral-200 text-slate-700 border dark:border-neutral-800 border-slate-200 shadow-sm font-medium text-sm transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <CommandLineIcon className="w-4 h-4 text-emerald-500" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="px-5 py-3 rounded-xl dark:bg-neutral-900 bg-white hover:bg-slate-50 dark:hover:bg-neutral-800 dark:text-neutral-200 text-slate-700 border dark:border-neutral-800 border-slate-200 shadow-sm font-medium text-sm transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <EnvelopeIcon className="w-4 h-4 text-indigo-500" />
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Social Links Quick Access */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-6 pt-4 text-xs font-mono dark:text-neutral-400 text-slate-500"
        >
          <a
            href="https://github.com/anilkrrana"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <span>GitHub</span>
            <span className="text-neutral-400">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/anil-kumar-rana/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <span>LinkedIn</span>
            <span className="text-neutral-400">↗</span>
          </a>
          <a
            href="https://www.youtube.com/@webtechnil"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition-colors flex items-center gap-1.5"
          >
            <span>YouTube</span>
            <span className="text-neutral-400">↗</span>
          </a>
          <a
            href="mailto:er.anilkrana@gmail.com"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <span>Email</span>
            <span className="text-neutral-400">↗</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}