import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HolographicTiltCard from "./HolographicTiltCard";
import {
  CheckBadgeIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketSquareIcon,
  CpuChipIcon,
  ArrowPathIcon,
  AcademicCapIcon,
  DocumentCheckIcon,
  EyeIcon,
  XMarkIcon,
  CheckCircleIcon,
  TableCellsIcon,
  PlayCircleIcon
} from "@heroicons/react/24/outline";

export interface ExamTopic {
  id: number;
  name: string;
  result: number;
  description: string;
}

export default function CertificationShowcase() {
  const [viewTab, setViewTab] = useState<"scorecard" | "simulator">("scorecard");
  const [showModal, setShowModal] = useState(false);
  const [simulatedPacket, setSimulatedPacket] = useState<number | null>(null);

  // Official Salesforce / Webassessor Exam Scorecard (12 Exact Topics)
  const examTopics: ExamTopic[] = [
    {
      id: 1,
      name: "Creating Application Networks",
      result: 100,
      description: "API-led connectivity, layered architecture (System, Process, Experience APIs), and web services governance.",
    },
    {
      id: 2,
      name: "Handling Errors",
      result: 100,
      description: "Global error handlers, On-Error Continue vs On-Error Propagate, default error scopes, and HTTP status mappings.",
    },
    {
      id: 3,
      name: "Debugging and Troubleshooting Mule Apps",
      result: 100,
      description: "Anypoint Studio debugger, breakpoint stepping, payload inspection, and runtime logs root cause analysis.",
    },
    {
      id: 4,
      name: "Deploying and Managing APIs and Integrations",
      result: 100,
      description: "CloudHub 2.0 deployments, Anypoint Runtime Manager, secure application properties, and SLA tier policies.",
    },
    {
      id: 5,
      name: "Designing APIs",
      result: 100,
      description: "RAML 1.0 specifications, resource definitions, query parameters, custom traits, resource types, and data types.",
    },
    {
      id: 6,
      name: "Accessing and Modifying Mule Events",
      result: 100,
      description: "Mule event message structure (payload, attributes, variables), Target parameters, and variable propagation.",
    },
    {
      id: 7,
      name: "Structuring Mule Applications",
      result: 100,
      description: "Flow modularization, private flows, sub-flows, configuration properties, and externalized domain configurations.",
    },
    {
      id: 8,
      name: "Building API Implementation Interface",
      result: 100,
      description: "APIkit Router scaffolding, REST contract-first generation, endpoint implementation, and HTTP listener configuration.",
    },
    {
      id: 9,
      name: "Using Connectors",
      result: 100,
      description: "Database connector operations, HTTP Request / Listener, File endpoints, Anypoint MQ, and reconnect strategies.",
    },
    {
      id: 10,
      name: "Processing Records",
      result: 83,
      description: "Batch Job scopes, Batch Steps, record variables, filters, and streaming sequential iterations via For-Each.",
    },
    {
      id: 11,
      name: "Transforming Data",
      result: 100,
      description: "DataWeave 2.0 transformations (JSON, XML, Java, CSV), lambdas, map, filter, reduce, and recursive structures.",
    },
    {
      id: 12,
      name: "Routing Events",
      result: 100,
      description: "Choice routers, Scatter-Gather parallel dispatch, Round Robin, and content-based dynamic routing engines.",
    },
  ];

  // Aggregate Calculation: (11 * 100 + 83) / 12 = 98.58% (~98.6%)
  const totalScore = Math.round(
    examTopics.reduce((acc, curr) => acc + curr.result, 0) / examTopics.length * 10
  ) / 10;
  const perfectScoreCount = examTopics.filter((t) => t.result === 100).length;

  const handleSimulateFlow = (step: number) => {
    setSimulatedPacket(step);
    setTimeout(() => {
      if (step < 3) {
        setSimulatedPacket(step + 1);
      } else {
        setTimeout(() => setSimulatedPacket(null), 1200);
      }
    }, 700);
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-command-grid bg-radial-gradient">
      {/* 3D Ambient Cybernetic Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] pointer-events-none -z-10">
        <div className="absolute inset-0 rounded-full border border-cyan-500/10 animate-[spin_50s_linear_infinite]" />
        <div className="absolute inset-20 rounded-full border border-blue-500/15 animate-[spin_35s_linear_infinite_reverse]" />
        <div className="absolute inset-40 rounded-full border border-sky-400/10 animate-[spin_25s_linear_infinite]" />
        <div className="absolute inset-56 rounded-full bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-indigo-600/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-cyan-950/60 bg-cyan-50 border border-cyan-500/40 text-cyan-500 dark:text-cyan-400 text-xs font-mono font-semibold tracking-wider mb-4 shadow-lg shadow-cyan-500/15"
          >
            <SparklesIcon className="w-4 h-4 text-cyan-400 animate-spin-slow" />
            <span>OFFICIAL INDUSTRY CREDENTIAL · WEBASSESSOR VERIFIED</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold dark:text-white text-slate-900 font-outfit tracking-tight max-w-4xl"
          >
            Salesforce Certified{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 drop-shadow-sm">
              MuleSoft Developer I
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base dark:text-neutral-200 text-slate-700 mt-4 max-w-3xl font-normal leading-relaxed"
          >
            Formally cleared with an aggregate score of <strong className="text-cyan-500 dark:text-cyan-400 font-bold">{totalScore}%</strong>{" "}
            and <strong className="text-emerald-500 font-bold">{perfectScoreCount} out of 12 perfect 100% domain scores</strong>. 
            Validates senior enterprise mastery in API-led architecture, DataWeave 2.0, flow error resiliency, and Anypoint Platform governance.
          </motion.p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-4" />
        </div>

        {/* 3D Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: 3D Holographic Credential Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md sticky top-24">
              <HolographicTiltCard
                intensity={14}
                glowColor="rgba(0, 229, 255, 0.5)"
                className="rounded-3xl shadow-2xl shadow-cyan-500/20"
              >
                <div className="relative rounded-3xl p-7 sm:p-8 dark:bg-gradient-to-b dark:from-[#0d1a2d] dark:via-[#091322] dark:to-[#040812] bg-gradient-to-b from-white via-sky-50/50 to-blue-50/60 border-2 dark:border-cyan-500/40 border-cyan-400/50 backdrop-blur-xl overflow-hidden transition-all duration-300">
                  {/* Glowing Holographic Scanning Line */}
                  <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30 bg-[linear-gradient(rgba(0,229,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />

                  {/* Top Bar with Brand Badges */}
                  <div
                    style={{ transform: "translateZ(30px)" }}
                    className="flex items-center justify-between gap-4 pb-5 border-b dark:border-cyan-900/40 border-cyan-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#00A1E0]/15 dark:bg-[#00A1E0]/25 border border-[#00A1E0]/40 flex items-center justify-center p-1.5 shadow-md shadow-[#00A1E0]/20">
                        <Image
                          src="/skillsLogos/salesforce.svg"
                          alt="Salesforce"
                          width={32}
                          height={22}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-mono font-bold tracking-widest text-[#00A1E0] uppercase">
                          Salesforce
                        </span>
                        <span className="text-xs font-semibold dark:text-white text-slate-900 font-outfit">
                          Trailhead Academy
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-[11px] font-mono font-bold tracking-wide">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>VERIFIED &amp; ACTIVE</span>
                    </div>
                  </div>

                  {/* Centered 3D Popout Certification Badge */}
                  <div
                    style={{ transform: "translateZ(55px)" }}
                    className="flex flex-col items-center text-center my-6 relative"
                  >
                    {/* Glowing Aura Behind Badge */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-sky-400/25 to-blue-600/20 rounded-full blur-2xl -z-10 animate-pulse-slow" />

                    <div className="relative w-40 h-40 drop-shadow-[0_15px_30px_rgba(0,229,255,0.4)] transition-transform duration-500 hover:scale-105">
                      <Image
                        src="/skillsLogos/salesforce-mulesoft-certified.svg"
                        alt="Salesforce Certified MuleSoft Developer I Badge"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>

                    <h3 className="mt-3 text-2xl font-black dark:text-white text-slate-900 font-outfit tracking-tight">
                      MuleSoft Developer I
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 font-bold tracking-wider mt-1">
                      ENTERPRISE INTEGRATION SPECIALIST
                    </p>
                  </div>

                  {/* Credential Scorecard Overview Banner */}
                  <div
                    style={{ transform: "translateZ(35px)" }}
                    className="p-3.5 rounded-2xl dark:bg-cyan-950/40 bg-cyan-50 border dark:border-cyan-500/30 border-cyan-200 mb-4 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-[10px] font-mono text-cyan-500 dark:text-cyan-400 font-bold uppercase tracking-wider">
                        EXAM AGGREGATE
                      </div>
                      <div className="text-2xl font-black font-mono dark:text-white text-slate-900">
                        {totalScore}%
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-wider">
                        PERFECT 100% DOMAINS
                      </div>
                      <div className="text-base font-bold font-mono text-emerald-400 flex items-center justify-end gap-1">
                        <CheckCircleIcon className="w-5 h-5 text-emerald-400" />
                        <span>11 of 12</span>
                      </div>
                    </div>
                  </div>

                  {/* Candidate Details Layer */}
                  <div
                    style={{ transform: "translateZ(30px)" }}
                    className="space-y-3 p-4 rounded-2xl dark:bg-black/60 bg-white/90 border dark:border-neutral-800 border-slate-200/90 shadow-inner"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="dark:text-neutral-400 text-slate-500">Candidate:</span>
                      <span className="font-bold dark:text-neutral-100 text-slate-900">Anil Kumar Rana</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="dark:text-neutral-400 text-slate-500">Designation:</span>
                      <span className="font-medium text-cyan-400">Senior Software Engineer</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="dark:text-neutral-400 text-slate-500">Current Role:</span>
                      <span className="font-semibold dark:text-neutral-200 text-slate-800">Capgemini (2+ Years)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="dark:text-neutral-400 text-slate-500">Runtime &amp; Lang:</span>
                      <span className="font-semibold dark:text-neutral-200 text-slate-800">Mule 4.x · DataWeave 2.0</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono pt-2 border-t dark:border-neutral-800 border-slate-200">
                      <span className="dark:text-neutral-400 text-slate-500">Webassessor Result:</span>
                      <span className="font-bold text-emerald-500 flex items-center gap-1">
                        <CheckBadgeIcon className="w-4 h-4" />
                        <span>PASSED / CERTIFIED</span>
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div
                    style={{ transform: "translateZ(40px)" }}
                    className="flex items-center gap-3 pt-5"
                  >
                    <button
                      onClick={() => setShowModal(true)}
                      className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs font-mono flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all group"
                    >
                      <EyeIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Inspect Credential &amp; Marks</span>
                    </button>

                    <a
                      href="https://www.linkedin.com/in/anil-kumar-rana/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl dark:bg-neutral-900 bg-white hover:bg-slate-50 dark:hover:bg-neutral-800 dark:text-neutral-200 text-slate-700 border dark:border-neutral-800 border-slate-200 text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-colors"
                      title="View on LinkedIn Profile"
                    >
                      <span>LinkedIn</span>
                      <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 text-cyan-400" />
                    </a>
                  </div>
                </div>
              </HolographicTiltCard>
            </div>
          </div>

          {/* Right Column: Scorecard Radar & Interactive API Simulation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="cmdCard p-6 sm:p-8 dark:border-cyan-900/30 border-cyan-200 shadow-2xl relative overflow-hidden">
              {/* Header and Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b dark:border-neutral-800 border-slate-200">
                <div>
                  <span className="cmdBadge text-[10px] mb-2 border-cyan-500/30 text-cyan-400">
                    OFFICIAL WEBASSESSOR EXAM SCORECARD
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 font-outfit">
                    Verified Competency Breakdown
                  </h3>
                </div>

                {/* View Switcher Pills */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl dark:bg-neutral-900 bg-slate-100 border dark:border-neutral-800 border-slate-200 self-start sm:self-auto">
                  <button
                    onClick={() => setViewTab("scorecard")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                      viewTab === "scorecard"
                        ? "bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20"
                        : "dark:text-neutral-400 text-slate-600 hover:text-cyan-400"
                    }`}
                  >
                    <TableCellsIcon className="w-3.5 h-3.5" />
                    <span>All 12 Marks</span>
                  </button>
                  <button
                    onClick={() => setViewTab("simulator")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                      viewTab === "simulator"
                        ? "bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20"
                        : "dark:text-neutral-400 text-slate-600 hover:text-cyan-400"
                    }`}
                  >
                    <PlayCircleIcon className="w-3.5 h-3.5" />
                    <span>Live Simulator</span>
                  </button>
                </div>
              </div>

              {/* TAB 1: ALL 12 OFFICIAL EXAM TOPICS */}
              {viewTab === "scorecard" && (
                <div className="space-y-3 pt-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {examTopics.map((topic, idx) => {
                      const isPerfect = topic.result === 100;
                      return (
                        <motion.div
                          key={topic.id}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.04 }}
                          className={`p-3.5 rounded-2xl border transition-all duration-300 ${
                            isPerfect
                              ? "dark:bg-neutral-900/80 bg-white dark:border-neutral-800 border-slate-200 hover:border-cyan-400/60 shadow-sm"
                              : "dark:bg-amber-950/20 bg-amber-50/50 dark:border-amber-500/40 border-amber-300 hover:border-amber-400 shadow-sm"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-xs font-bold dark:text-neutral-100 text-slate-900 font-outfit leading-tight">
                              {topic.name}
                            </span>
                            <span
                              className={`text-xs font-mono font-extrabold px-2 py-0.5 rounded-md flex-shrink-0 ${
                                isPerfect
                                  ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                                  : "bg-amber-500/15 text-amber-500 dark:text-amber-400 border border-amber-500/30"
                              }`}
                            >
                              {topic.result}%
                            </span>
                          </div>

                          {/* Visual Progress Bar */}
                          <div className="w-full bg-slate-200 dark:bg-neutral-800 rounded-full h-1.5 overflow-hidden mb-2">
                            <div
                              className={`h-full rounded-full transition-all duration-700 ${
                                isPerfect
                                  ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                                  : "bg-gradient-to-r from-amber-400 to-amber-500"
                              }`}
                              style={{ width: `${topic.result}%` }}
                            />
                          </div>

                          <p className="text-[11px] dark:text-neutral-400 text-slate-600 font-light leading-snug line-clamp-2">
                            {topic.description}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Summary Bar */}
                  <div className="p-4 rounded-2xl dark:bg-black/50 bg-slate-50 border dark:border-neutral-800 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheckIcon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-xs font-mono dark:text-neutral-200 text-slate-800 font-medium">
                        Official Salesforce Webassessor Proctor Record Verified
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      Overall Aggregate: {totalScore}%
                    </span>
                  </div>
                </div>
              )}

              {/* TAB 2: INTERACTIVE 3-TIER API SIMULATOR */}
              {viewTab === "simulator" && (
                <div className="space-y-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold dark:text-white text-slate-900 font-outfit">
                        API-Led Connectivity Architecture Flow
                      </h4>
                      <p className="text-xs dark:text-neutral-400 text-slate-600 mt-0.5">
                        Test end-to-end payload routing through MuleSoft&apos;s 3-tier enterprise integration model.
                      </p>
                    </div>

                    <button
                      onClick={() => handleSimulateFlow(1)}
                      disabled={simulatedPacket !== null}
                      className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-mono font-bold transition-all disabled:opacity-50 flex items-center gap-1.5 shadow-lg shadow-cyan-500/20"
                    >
                      <span>{simulatedPacket !== null ? "Streaming..." : "Dispatch Packet ⚡"}</span>
                    </button>
                  </div>

                  {/* 3 Tiers: Experience -> Process -> System */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    {/* Tier 1: Experience API */}
                    <div
                      className={`p-5 rounded-2xl border transition-all duration-300 ${
                        simulatedPacket === 1
                          ? "dark:bg-cyan-950/80 bg-cyan-100 border-cyan-400 shadow-xl shadow-cyan-500/30 scale-105"
                          : "dark:bg-neutral-900/60 bg-white dark:border-neutral-800 border-slate-200"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-2 text-xs font-mono font-bold">
                        E1
                      </div>
                      <div className="text-cyan-400 font-bold text-sm mb-1 font-outfit">1. Experience Tier</div>
                      <div className="text-[11px] dark:text-neutral-400 text-slate-500 leading-snug">
                        Channel orchestration: Mobile, Web, and Kiosk endpoints.
                      </div>
                      {simulatedPacket === 1 && (
                        <div className="mt-3 text-[10px] bg-cyan-500 text-black px-2 py-1 rounded-md font-bold font-mono animate-pulse">
                          Payload Ingested &amp; Validated
                        </div>
                      )}
                    </div>

                    {/* Tier 2: Process API */}
                    <div
                      className={`p-5 rounded-2xl border transition-all duration-300 ${
                        simulatedPacket === 2
                          ? "dark:bg-sky-950/80 bg-sky-100 border-sky-400 shadow-xl shadow-sky-500/30 scale-105"
                          : "dark:bg-neutral-900/60 bg-white dark:border-neutral-800 border-slate-200"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 mx-auto mb-2 text-xs font-mono font-bold">
                        P2
                      </div>
                      <div className="text-sky-400 font-bold text-sm mb-1 font-outfit">2. Process Tier</div>
                      <div className="text-[11px] dark:text-neutral-400 text-slate-500 leading-snug">
                        Business logic, DataWeave 2.0 mapping &amp; Scatter-Gather.
                      </div>
                      {simulatedPacket === 2 && (
                        <div className="mt-3 text-[10px] bg-sky-400 text-black px-2 py-1 rounded-md font-bold font-mono animate-pulse">
                          DataWeave 2.0 Transformation Executed
                        </div>
                      )}
                    </div>

                    {/* Tier 3: System API */}
                    <div
                      className={`p-5 rounded-2xl border transition-all duration-300 ${
                        simulatedPacket === 3
                          ? "dark:bg-blue-950/80 bg-blue-100 border-blue-400 shadow-xl shadow-blue-500/30 scale-105"
                          : "dark:bg-neutral-900/60 bg-white dark:border-neutral-800 border-slate-200"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto mb-2 text-xs font-mono font-bold">
                        S3
                      </div>
                      <div className="text-blue-400 font-bold text-sm mb-1 font-outfit">3. System Tier</div>
                      <div className="text-[11px] dark:text-neutral-400 text-slate-500 leading-snug">
                        Downstream integration: Salesforce, ERP, and DB connectors.
                      </div>
                      {simulatedPacket === 3 && (
                        <div className="mt-3 text-[10px] bg-blue-500 text-white px-2 py-1 rounded-md font-bold font-mono animate-pulse">
                          200 OK Committed to System of Record
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Futuristic 3D Credential & Official Scorecard Inspection Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl dark:bg-[#0c1626] bg-white border-2 dark:border-cyan-500/50 border-cyan-400 shadow-2xl shadow-cyan-500/25"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full dark:bg-neutral-800 bg-slate-100 dark:hover:bg-neutral-700 hover:bg-slate-200 transition-colors"
                aria-label="Close modal"
              >
                <XMarkIcon className="w-5 h-5 dark:text-white text-slate-900" />
              </button>

              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center p-2 flex-shrink-0">
                  <Image
                    src="/skillsLogos/salesforce.svg"
                    alt="Salesforce Logo"
                    width={36}
                    height={26}
                  />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 font-outfit">
                    Salesforce Certified MuleSoft Developer I
                  </h4>
                  <p className="text-xs font-mono text-cyan-400 font-semibold">
                    OFFICIAL WEBASSESSOR EXAMINATION RECORD
                  </p>
                </div>
              </div>

              {/* Candidate Metadata Box */}
              <div className="space-y-2.5 dark:bg-black/60 bg-slate-50 p-4 rounded-2xl border dark:border-neutral-800 border-slate-200 text-xs font-mono mb-6">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Candidate Name:</span>
                  <span className="font-bold dark:text-white text-slate-900">Anil Kumar Rana</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Credential:</span>
                  <span className="text-cyan-400 font-bold">MuleSoft Certified Developer - Level 1 (Mule 4)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Issuing Organization:</span>
                  <span className="dark:text-white text-slate-900">Salesforce &amp; MuleSoft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Credential Status:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckBadgeIcon className="w-4 h-4" /> ACTIVE &amp; VALIDATED
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Overall Aggregate Score:</span>
                  <span className="text-cyan-400 font-bold">{totalScore}% (11/12 Perfect Scores)</span>
                </div>
              </div>

              {/* Exact Scorecard Table (Matches Webassessor Screenshot) */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold dark:text-cyan-400 text-blue-600 uppercase tracking-wider">
                    Official Topic Score Breakdown
                  </span>
                  <span className="text-[11px] font-mono dark:text-neutral-400 text-slate-500">
                    Source: Webassessor Official Scorecard
                  </span>
                </div>

                <div className="rounded-2xl border dark:border-neutral-800 border-slate-200 overflow-hidden shadow-sm">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="dark:bg-neutral-900 bg-slate-100 border-b dark:border-neutral-800 border-slate-200 text-slate-700 dark:text-neutral-300">
                      <tr>
                        <th className="py-2.5 px-4 font-bold">Topic</th>
                        <th className="py-2.5 px-4 font-bold text-right">Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y dark:divide-neutral-800 divide-slate-200 dark:bg-black/40 bg-white">
                      {examTopics.map((topic) => (
                        <tr key={topic.id} className="hover:dark:bg-neutral-900/60 hover:bg-slate-50 transition-colors">
                          <td className="py-2.5 px-4 dark:text-neutral-200 text-slate-800 font-medium">
                            {topic.name}
                          </td>
                          <td className="py-2.5 px-4 text-right">
                            <span
                              className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                                topic.result === 100
                                  ? "text-cyan-400 dark:bg-cyan-950/60 bg-cyan-50"
                                  : "text-amber-500 dark:bg-amber-950/60 bg-amber-50"
                              }`}
                            >
                              {topic.result}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.linkedin.com/in/anil-kumar-rana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono font-medium text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
                >
                  <span>Connect with Anil on LinkedIn</span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setShowModal(false)}
                  className="py-3 px-5 rounded-xl dark:bg-neutral-800 bg-slate-200 dark:text-white text-slate-800 font-mono text-xs font-semibold hover:opacity-80 transition-opacity"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
