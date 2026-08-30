import React from "react";
import { motion } from "framer-motion";
import { 
  CheckBadgeIcon, 
  CpuChipIcon, 
  ShieldCheckIcon, 
  ArrowPathIcon
} from "@heroicons/react/24/outline";

export default function EngineeringMindset() {
  const principles = [
    {
      title: "Correctness & Consistency",
      icon: CheckBadgeIcon,
      color: "text-blue-500 border-blue-500/40 dark:bg-blue-900/40 bg-blue-50",
      points: [
        "ACID Transaction Management (@Transactional)",
        "Pessimistic & Optimistic DB Locking for Concurrency",
        "Flyway Database Migrations & Versioning",
        "Server-Side Price & Payload Validation"
      ]
    },
    {
      title: "Performance & Scalability",
      icon: CpuChipIcon,
      color: "text-indigo-500 border-indigo-500/40 dark:bg-indigo-900/40 bg-indigo-50",
      points: [
        "Redis Cache-Aside & Ejection Strategies",
        "Database Indexing & Query Plan Optimization",
        "HikariCP Connection Pool Tuning",
        "Asynchronous Event Dispatching"
      ]
    },
    {
      title: "Security & Authorization",
      icon: ShieldCheckIcon,
      color: "text-emerald-500 border-emerald-500/40 dark:bg-emerald-900/40 bg-emerald-50",
      points: [
        "Stateless JWT Auth with Refresh Rotation",
        "HMAC-SHA256 Webhook Signature Verification",
        "Role-Based Access Control (RBAC)",
        "OWASP API Security Best Practices"
      ]
    },
    {
      title: "Reliability & Resilience",
      icon: ArrowPathIcon,
      color: "text-cyan-500 border-cyan-500/40 dark:bg-cyan-900/40 bg-cyan-50",
      points: [
        "Idempotency Key Headers for Duplicate Requests",
        "Global Controller Exception Handlers",
        "Circuit Breakers & Exponential Backoff Retries",
        "Automated Testcontainers Integration Tests"
      ]
    }
  ];

  return (
    <section id="engineering" className="py-24 relative bg-command-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="cmdBadge mb-3">SYSTEM DESIGN PHILOSOPHY</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 font-outfit tracking-tight">
            How I Build Production Systems
          </h2>
          <p className="text-sm dark:text-neutral-400 text-slate-600 mt-2 max-w-xl">
            Software engineering is more than just writing code — it is about reliability, concurrency safety, security, and maintainability.
          </p>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* 4 Core Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="cmdCard p-6 sm:p-8 dark:border-neutral-800 border-slate-200 hover:border-blue-400 transition-all group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${p.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold dark:text-white text-slate-900 font-outfit group-hover:text-blue-500 transition-colors">
                      {p.title}
                    </h3>
                    <span className="text-[11px] font-mono dark:text-neutral-500 text-slate-500">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2 border-t dark:border-neutral-800/80 border-slate-200">
                  {p.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5 text-xs dark:text-neutral-300 text-slate-700 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
