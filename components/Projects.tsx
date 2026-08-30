import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  ArrowUpRightIcon, 
  CodeBracketIcon, 
  XMarkIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

type Props = {
  data: Array<any>;
};

export default function Projects({ data }: Props) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const filteredProjects = activeFilter === "all"
    ? data
    : data.filter((p: any) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-command-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="cmdBadge mb-3">SOFTWARE SHOWCASE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 font-outfit tracking-tight">
            Engineering Projects
          </h2>
          <p className="text-sm dark:text-neutral-400 text-slate-600 mt-2 max-w-xl">
            A preserved collection of software projects representing my backend engineering focus and development journey.
          </p>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Projects" },
            { id: "backend", label: "Backend & Systems" },
            { id: "fullstack", label: "Full Stack" },
            { id: "frontend", label: "Frontend" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeFilter === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 border border-blue-400/40"
                  : "dark:bg-neutral-900/80 bg-white dark:text-neutral-400 text-slate-700 border dark:border-neutral-800 border-slate-200 hover:text-blue-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project: any) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className={`cmdCard p-5 border-neutral-800 flex flex-col justify-between cursor-pointer group hover:border-blue-500/50 transition-all ${
                  project.isFlagship ? "border-blue-500/50 dark:bg-blue-900/20 bg-blue-50/50" : ""
                }`}
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-500 dark:bg-blue-900/40 bg-blue-50 px-2.5 py-0.5 rounded border dark:border-blue-800/40 border-blue-200">
                      {project.category || "Engineering"}
                    </span>
                    {project.isFlagship && (
                      <span className="cmdBadge text-[10px] py-0.5">★ FLAGSHIP</span>
                    )}
                  </div>

                  {/* Project Image Preview */}
                  <div className="relative w-full h-44 rounded-lg overflow-hidden mb-4 dark:bg-black bg-slate-100 border dark:border-neutral-800/80 border-slate-200">
                    <Image
                      src={project.imgurl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold dark:text-white text-slate-900 font-outfit group-hover:text-blue-500 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRightIcon className="w-4 h-4 text-neutral-400 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  {project.subtitle && (
                    <p className="text-xs text-blue-500 font-mono mt-0.5 font-medium">
                      {project.subtitle}
                    </p>
                  )}

                  <p className="text-xs dark:text-neutral-300 text-slate-600 font-light mt-2 line-clamp-3 leading-relaxed">
                    {project.content}
                  </p>
                </div>

                {/* Tech Tags & Footer */}
                <div className="pt-4 mt-4 border-t dark:border-neutral-800/80 border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {project.tags?.slice(0, 3).map((tag: string, i: number) => (
                      <span key={i} className="text-[10px] font-mono dark:text-neutral-400 text-slate-600 dark:bg-black bg-slate-100 px-2 py-0.5 rounded border dark:border-neutral-800 border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-mono text-blue-500 font-medium group-hover:underline">
                    Details →
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* INTERACTIVE PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 dark:bg-black/80 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="cmdCard max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto border-neutral-700 relative shadow-2xl dark:bg-neutral-900 bg-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg dark:bg-neutral-800 bg-slate-100 border dark:border-neutral-700 border-slate-200 dark:text-neutral-400 text-slate-600 hover:text-blue-500"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>

              <span className="cmdBadge text-[10px] mb-2">PROJECT DETAILS</span>
              <h3 className="text-2xl font-bold dark:text-white text-slate-900 font-outfit">
                {selectedProject.title}
              </h3>
              {selectedProject.subtitle && (
                <p className="text-xs font-mono text-blue-500 mt-1 font-medium">
                  {selectedProject.subtitle}
                </p>
              )}

              <div className="relative w-full h-56 rounded-xl overflow-hidden my-5 border dark:border-neutral-800 border-slate-200">
                <Image
                  src={selectedProject.imgurl}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 text-xs sm:text-sm dark:text-neutral-300 text-slate-700 font-light leading-relaxed">
                <p>{selectedProject.content}</p>

                {selectedProject.engineeringHighlights && (
                  <div className="pt-3 border-t dark:border-neutral-800 border-slate-200">
                    <h4 className="text-xs font-mono font-bold dark:text-white text-slate-900 mb-2">
                      ENGINEERING HIGHLIGHTS
                    </h4>
                    <div className="space-y-1.5">
                      {selectedProject.engineeringHighlights.map((hl: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-xs dark:text-neutral-200 text-slate-800">
                          <CheckCircleIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t dark:border-neutral-800 border-slate-200">
                  <h4 className="text-xs font-mono font-bold dark:text-white text-slate-900 mb-2">
                    TECHNOLOGY STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags?.map((t: string, i: number) => (
                      <span key={i} className="px-2.5 py-1 rounded dark:bg-black bg-slate-100 border dark:border-neutral-800 border-slate-200 text-xs font-mono dark:text-neutral-300 text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t dark:border-neutral-800 border-slate-200">
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-medium flex items-center gap-2 shadow-md shadow-blue-600/20"
                  >
                    <CodeBracketIcon className="w-4 h-4" />
                    <span>View on GitHub ↗</span>
                  </a>
                )}

                {selectedProject.deployedLink && (
                  <a
                    href={selectedProject.deployedLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl dark:bg-neutral-800 bg-slate-100 hover:bg-slate-200 dark:hover:bg-neutral-700 border dark:border-neutral-700 border-slate-200 dark:text-neutral-200 text-slate-700 text-xs font-mono font-medium flex items-center gap-2"
                  >
                    <span>Live Demo ↗</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}