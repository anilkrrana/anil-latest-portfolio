import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon, AcademicCapIcon, RocketLaunchIcon, FireIcon } from "@heroicons/react/24/outline";

export default function CurrentlyLearning() {
  const items = [
    {
      title: "Advanced Java 21 & Concurrency",
      icon: FireIcon,
      desc: "Deep diving into Virtual Threads (Project Loom), Structured Concurrency, Scoped Values, and JVM Memory Tuning for low-latency backend execution.",
    },
    {
      title: "Spring AI & RAG Engineering",
      icon: SparklesIcon,
      desc: "Building retrieval-augmented generation (RAG) pipelines in Java using Spring AI, vector database embeddings, and LLM orchestration.",
    },
    {
      title: "Distributed Systems Architecture",
      icon: RocketLaunchIcon,
      desc: "Mastering distributed locking algorithms, event-driven message queuing, rate limiters, and fault-tolerant microservice resiliency patterns.",
    },
    {
      title: "DSA & System Design Mastery",
      icon: AcademicCapIcon,
      desc: "Consistently solving complex algorithmic challenges (300+ solved) and studying production system blueprints from top engineering blogs.",
    },
  ];

  return (
    <section className="py-20 relative bg-command-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cmdCard p-8 sm:p-10 border-blue-900/40 bg-gradient-to-r dark:from-black dark:via-neutral-900/90 dark:to-blue-900/20 from-slate-50 via-white to-blue-50/40 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b dark:border-neutral-800 border-slate-200 mb-8">
            <div>
              <span className="cmdBadge text-[10px] mb-2">CONTINUOUS EVOLUTION</span>
              <h3 className="text-2xl font-bold dark:text-white text-slate-900 font-outfit flex items-center gap-2">
                <span>Currently Building & Learning</span>
                <span className="text-blue-500">⚡</span>
              </h3>
            </div>
            <span className="text-xs font-mono dark:text-neutral-400 text-slate-500">
              Q3/Q4 2026 FOCUS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="space-y-2 p-4 rounded-xl dark:bg-black/60 bg-white border dark:border-neutral-800/80 border-slate-200 hover:border-blue-400 transition-colors shadow-sm">
                  <div className="flex items-center gap-2.5 text-blue-500">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold dark:text-white text-slate-900 font-outfit">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs dark:text-neutral-400 text-slate-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
