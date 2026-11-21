import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HolographicTiltCard from "./HolographicTiltCard";
import { CalendarIcon, BuildingOffice2Icon, CheckCircleIcon } from "@heroicons/react/24/outline";

type Props = {
  clogo: string;
  title: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
  skills: string[];
  isCurrent?: boolean;
};

export default function ExperienceCard({
  clogo,
  title,
  company,
  period,
  points,
  skills,
  isCurrent = false,
}: Props) {
  return (
    <HolographicTiltCard
      intensity={7}
      glowColor={isCurrent ? "rgba(0, 161, 224, 0.45)" : "rgba(99, 102, 241, 0.35)"}
      className="rounded-3xl"
    >
      <div
        className={`p-6 sm:p-9 rounded-3xl relative overflow-hidden transition-all duration-300 border-2 ${
          isCurrent
            ? "border-cyan-500/50 dark:bg-gradient-to-b dark:from-[#0c1626] dark:via-[#091120] dark:to-[#040812] bg-gradient-to-b from-white via-sky-50/40 to-blue-50/50 shadow-2xl shadow-cyan-500/10"
            : "dark:border-neutral-800/80 border-slate-200 dark:bg-neutral-900/80 bg-white shadow-xl"
        }`}
      >
        {/* Header Info */}
        <div
          style={{ transform: "translateZ(25px)" }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b dark:border-neutral-800/80 border-slate-200"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden dark:bg-black bg-slate-100 border dark:border-neutral-800 border-slate-200 p-2 flex-shrink-0 flex items-center justify-center shadow-md">
              <Image
                src={clogo}
                alt={company}
                width={48}
                height={48}
                className="object-contain rounded-xl"
              />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 font-outfit tracking-tight">
                  {title}
                </h3>
                {isCurrent && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>ACTIVE ROLE</span>
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold text-cyan-500 dark:text-cyan-400 flex items-center gap-1.5 mt-1 font-mono">
                <BuildingOffice2Icon className="w-4 h-4" />
                <span>{company}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono font-medium dark:text-neutral-200 text-slate-700 dark:bg-black/60 bg-slate-100 px-3.5 py-1.5 rounded-xl border dark:border-neutral-800 border-slate-200 self-start sm:self-auto shadow-sm">
            <CalendarIcon className="w-4 h-4 text-cyan-400" />
            <span>{period}</span>
          </div>
        </div>

        {/* Responsibility Points (Clear, High Contrast, Readable) */}
        <div
          style={{ transform: "translateZ(15px)" }}
          className="py-6 space-y-3.5"
        >
          {points.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm sm:text-base dark:text-neutral-200 text-slate-800 font-normal leading-relaxed">
              <CheckCircleIcon className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Skills Badges */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="pt-4 border-t dark:border-neutral-800/80 border-slate-200 flex flex-wrap gap-2"
        >
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-xl dark:bg-black/80 bg-slate-100 dark:text-neutral-200 text-slate-700 text-xs font-mono font-medium border dark:border-neutral-800 border-slate-200 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </HolographicTiltCard>
  );
}