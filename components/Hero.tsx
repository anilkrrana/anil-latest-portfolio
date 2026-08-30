import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";
import { 
  CodeBracketIcon, 
  CommandLineIcon, 
  ArrowRightIcon, 
  EnvelopeIcon
} from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <div className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-command-grid bg-radial-gradient">
      <BackgroundCircles />

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center space-y-8 z-10">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full dark:bg-neutral-900/90 bg-white border dark:border-neutral-800 border-slate-200 shadow-sm backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono dark:text-neutral-300 text-slate-700 font-medium tracking-wide">
            SENIOR SOFTWARE ENGINEER @ CAPGEMINI
          </span>
        </motion.div>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500/40 p-0.5 dark:bg-neutral-900 bg-white shadow-xl shadow-blue-500/10">
            <Image
              src="/profile pic.jpeg"
              alt="Anil Kumar Rana"
              fill
              sizes="80px"
              priority
              className="object-cover rounded-full"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold dark:text-white text-slate-900 font-outfit tracking-tight">
              Anil Kumar Rana
            </h1>
            <p className="text-xs font-mono text-blue-500 font-semibold mt-1">
              Senior Software Engineer · MuleSoft & Java
            </p>
          </div>
        </motion.div>

        {/* Primary Impact Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold dark:text-white text-slate-900 tracking-tight leading-[1.15] font-outfit max-w-3xl"
        >
          Building scalable{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500">
            backend systems, APIs
          </span>{" "}
          & production applications.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg dark:text-neutral-300 text-slate-600 font-normal leading-relaxed max-w-2xl"
        >
          2+ years of professional software engineering experience, with a focus on{" "}
          <strong className="dark:text-white text-slate-900 font-semibold">Java</strong>,{" "}
          <strong className="dark:text-white text-slate-900 font-semibold">Spring Boot</strong>,{" "}
          <strong className="dark:text-white text-slate-900 font-semibold">backend engineering</strong>,{" "}
          <strong className="dark:text-white text-slate-900 font-semibold">REST APIs</strong>, and{" "}
          <strong className="dark:text-white text-slate-900 font-semibold">enterprise API integration</strong>.
        </motion.p>

        {/* Technology Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 font-mono text-xs dark:text-neutral-400 text-slate-600 max-w-xl"
        >
          <span className="px-3 py-1 rounded-md dark:bg-neutral-900/80 bg-white border dark:border-neutral-800 border-slate-200 shadow-sm">
            Java 21
          </span>
          <span className="px-3 py-1 rounded-md dark:bg-neutral-900/80 bg-white border dark:border-neutral-800 border-slate-200 shadow-sm">
            Spring Boot
          </span>
          <span className="px-3 py-1 rounded-md dark:bg-neutral-900/80 bg-white border dark:border-neutral-800 border-slate-200 shadow-sm">
            REST APIs
          </span>
          <span className="px-3 py-1 rounded-md dark:bg-neutral-900/80 bg-white border dark:border-neutral-800 border-slate-200 shadow-sm">
            PostgreSQL
          </span>
          <span className="px-3 py-1 rounded-md dark:bg-neutral-900/80 bg-white border dark:border-neutral-800 border-slate-200 shadow-sm">
            Redis
          </span>
          <span className="px-3 py-1 rounded-md dark:bg-neutral-900/80 bg-white border dark:border-neutral-800 border-slate-200 shadow-sm">
            MuleSoft 4.9
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
          <a
            href="#orderflow"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 group w-full sm:w-auto"
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
            className="hover:text-blue-500 transition-colors flex items-center gap-1.5"
          >
            <span>GitHub</span>
            <span className="text-neutral-400">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/anil-kumar-rana/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition-colors flex items-center gap-1.5"
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
            className="hover:text-blue-500 transition-colors flex items-center gap-1.5"
          >
            <span>Email</span>
            <span className="text-neutral-400">↗</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
