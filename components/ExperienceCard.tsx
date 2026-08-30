import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";

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
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`cmdCard p-6 sm:p-8 border-neutral-800 relative overflow-hidden transition-all duration-300 ${
        isCurrent
          ? "border-l-4 border-l-blue-500 dark:bg-neutral-900/80 bg-white shadow-md"
          : "opacity-90 hover:opacity-100"
      }`}
    >
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b dark:border-neutral-800/80 border-slate-200">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden dark:bg-black bg-slate-100 border dark:border-neutral-800 border-slate-200 p-1 flex-shrink-0 flex items-center justify-center">
            <Image
              src={clogo}
              alt={company}
              width={40}
              height={40}
              className="object-contain rounded-lg"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 font-outfit">
                {title}
              </h3>
              {isCurrent && (
                <span className="cmdBadge text-[10px] py-0.5">CURRENT ROLE</span>
              )}
            </div>
            <p className="text-sm font-semibold text-blue-500 flex items-center gap-1.5 mt-0.5">
              <BuildingOffice2Icon className="w-4 h-4" />
              <span>{company}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono dark:text-neutral-400 text-slate-600 dark:bg-black bg-slate-100 px-3 py-1.5 rounded-lg border dark:border-neutral-800 border-slate-200 self-start sm:self-auto">
          <CalendarIcon className="w-4 h-4 text-blue-500" />
          <span>{period}</span>
        </div>
      </div>

      {/* Responsibility Points */}
      <div className="py-6 space-y-3">
        {points.map((point, idx) => (
          <div key={idx} className="flex items-start gap-3 text-sm dark:text-neutral-300 text-slate-700 font-light leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
            <span>{point}</span>
          </div>
        ))}
      </div>

      {/* Skills Badges */}
      <div className="pt-4 border-t dark:border-neutral-800/60 border-slate-200 flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 rounded-md dark:bg-black bg-slate-100 dark:text-neutral-300 text-slate-700 text-xs font-mono border dark:border-neutral-800 border-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
