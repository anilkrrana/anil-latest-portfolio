import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PlayIcon, 
  ArrowPathIcon, 
  CheckCircleIcon, 
  LockClosedIcon, 
  BoltIcon, 
  ShieldCheckIcon,
  CommandLineIcon
} from "@heroicons/react/24/outline";

export default function OrderFlowShowcase() {
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const simulationSteps = [
    {
      id: 1,
      title: "1. Client Request",
      node: "Client",
      method: "POST /api/v1/orders",
      detail: "Payload: { productId: 402, quantity: 2, price: 149.99 }",
      status: "JWT Auth Token Sent",
      color: "text-blue-500 border-blue-500/40 bg-blue-900/30",
    },
    {
      id: 2,
      title: "2. Controller & JWT Auth",
      node: "Spring Security",
      method: "AuthFilter",
      detail: "JWT Signature Verified & Refresh Token Rotation Validated ✓",
      status: "Authorized User: #u8821",
      color: "text-indigo-500 border-indigo-500/40 bg-indigo-900/30",
    },
    {
      id: 3,
      title: "3. Service Core Engine",
      node: "OrderService",
      method: "Price Validation",
      detail: "Server-side price verification against DB price ($149.99) ✓",
      status: "Price Match Confirmed",
      color: "text-purple-500 border-purple-500/40 bg-purple-900/30",
    },
    {
      id: 4,
      title: "4. Pessimistic DB Lock",
      node: "JPA Repository",
      method: "Pessimistic Lock",
      detail: "SELECT * FROM product_inventory WHERE id=402 FOR UPDATE",
      status: "Stock Locked (No Race Condition)",
      color: "text-amber-500 border-amber-500/40 bg-amber-900/30",
    },
    {
      id: 5,
      title: "5. PostgreSQL Transaction",
      node: "PostgreSQL",
      method: "DB Transaction",
      detail: "INSERT INTO orders (id, status) VALUES ('ord_992', 'PENDING')",
      status: "ACID Transaction Committed",
      color: "text-emerald-500 border-emerald-500/40 bg-emerald-900/30",
    },
    {
      id: 6,
      title: "6. Redis Cache Invalidate",
      node: "Redis Cache",
      method: "Cache-Aside",
      detail: "Evicted stale cache key 'product:402:stock'",
      status: "Cache Invalidation Done",
      color: "text-cyan-500 border-cyan-500/40 bg-cyan-900/30",
    },
    {
      id: 7,
      title: "7. Razorpay Webhook",
      node: "Payment Gateway",
      method: "HMAC-SHA256",
      detail: "Verified payment webhook signature with secret key ✓",
      status: "Payment Confirmed",
      color: "text-emerald-500 border-emerald-500/40 bg-emerald-900/30",
    },
    {
      id: 8,
      title: "8. Order Completed",
      node: "Response",
      method: "HTTP 201 Created",
      detail: "Order #ord_992 successfully persisted and confirmed ✓",
      status: "Execution Finished (28ms)",
      color: "text-blue-500 border-blue-500/40 bg-blue-900/40",
    },
  ];

  const runSimulation = () => {
    if (simulationRunning) return;
    setSimulationRunning(true);
    setActiveStep(null);
    setLogs(["[SYSTEM] Initializing OrderFlow request simulation..."]);

    simulationSteps.forEach((step, idx) => {
      setTimeout(() => {
        setActiveStep(step.id);
        setLogs((prev) => [
          ...prev,
          `[STEP ${step.id}] ${step.node} :: ${step.method} -> ${step.status}`,
        ]);

        if (idx === simulationSteps.length - 1) {
          setTimeout(() => {
            setSimulationRunning(false);
            setLogs((prev) => [
              ...prev,
              "✔ [SUCCESS] OrderFlow simulation completed cleanly in 28ms execution time.",
            ]);
          }, 600);
        }
      }, (idx + 1) * 700);
    });
  };

  return (
    <section id="orderflow" className="py-24 relative bg-command-grid bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="cmdBadge border-blue-500/40 text-blue-500 mb-3">
            ★ FLAGSHIP BACKEND ENGINEERING SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold dark:text-white text-slate-900 font-outfit tracking-tight">
            OrderFlow — E-Commerce Backend Engine
          </h2>
          <p className="text-sm sm:text-base dark:text-neutral-300 text-slate-600 max-w-3xl mt-3 leading-relaxed">
            A production-oriented Spring Boot backend built with <strong className="dark:text-white text-slate-900 font-semibold">Java 21</strong>, <strong className="dark:text-white text-slate-900 font-semibold">PostgreSQL</strong>, <strong className="dark:text-white text-slate-900 font-semibold">Redis</strong>, <strong className="dark:text-white text-slate-900 font-semibold">Spring Security JWT</strong>, <strong className="dark:text-white text-slate-900 font-semibold">Docker</strong>, and <strong className="dark:text-white text-slate-900 font-semibold">Razorpay Webhooks</strong>. Designed for inventory concurrency control, transactional integrity, and idempotency.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* INTERACTIVE SIMULATOR CONTAINER */}
        <div className="cmdCard p-6 sm:p-8 border-neutral-800 shadow-2xl mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b dark:border-neutral-800 border-slate-200">
            <div>
              <h3 className="text-xl font-bold dark:text-white text-slate-900 font-outfit flex items-center gap-2">
                <span>Interactive System Request Simulator</span>
                <span className="cmdBadge text-[10px]">SIGNATURE INTERACTION</span>
              </h3>
              <p className="text-xs dark:text-neutral-400 text-slate-500 font-mono mt-1">
                Click below to trace a live POST /orders request traveling through OrderFlow architecture.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={runSimulation}
                disabled={simulationRunning}
                className={`px-5 py-2.5 rounded-xl font-medium text-xs font-mono transition-all flex items-center gap-2 shadow-lg ${
                  simulationRunning
                    ? "bg-neutral-800 text-neutral-500 cursor-not-allowed border border-neutral-700"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-500/20"
                }`}
              >
                {simulationRunning ? (
                  <>
                    <ArrowPathIcon className="w-4 h-4 animate-spin" />
                    <span>Executing Request...</span>
                  </>
                ) : (
                  <>
                    <PlayIcon className="w-4 h-4 text-white" />
                    <span>▶ Run Order Simulation</span>
                  </>
                )}
              </button>

              <a
                href="https://github.com/anilkrrana/orderflow"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl dark:bg-neutral-900 bg-slate-100 hover:bg-slate-200 dark:hover:bg-neutral-800 border dark:border-neutral-700 border-slate-200 dark:text-neutral-200 text-slate-700 text-xs font-mono font-medium transition-all"
              >
                GitHub Repo ↗
              </a>
            </div>
          </div>

          {/* Architecture Node Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            {simulationSteps.map((step) => {
              const isActive = activeStep === step.id;
              const isPast = activeStep !== null && activeStep > step.id;

              return (
                <motion.div
                  key={step.id}
                  animate={{
                    scale: isActive ? 1.03 : 1,
                    borderColor: isActive ? "rgba(59, 130, 246, 0.8)" : "rgba(203, 213, 225, 0.6)",
                  }}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "dark:bg-blue-900/40 bg-blue-50 border-blue-500 shadow-lg shadow-blue-500/20"
                      : isPast
                      ? "dark:bg-neutral-900/80 bg-slate-50 border-emerald-500/40"
                      : "dark:bg-neutral-900/50 bg-white dark:border-neutral-800 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono dark:text-neutral-400 text-slate-600 font-semibold">
                      {step.node}
                    </span>
                    {isPast ? (
                      <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                    ) : isActive ? (
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono dark:text-neutral-600 text-slate-400">IDLE</span>
                    )}
                  </div>

                  <div className="text-xs font-bold dark:text-white text-slate-900 font-outfit mb-1">
                    {step.title}
                  </div>

                  <div className="text-[11px] font-mono dark:text-neutral-400 text-slate-600 mb-2 truncate">
                    {step.method}
                  </div>

                  <div className="text-[10px] dark:text-neutral-400 text-slate-500 font-light leading-snug">
                    {step.detail}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Console Log Output */}
          <div className="dark:bg-black bg-slate-900 rounded-xl border dark:border-neutral-800 border-slate-800 p-4 font-mono text-xs text-neutral-200 max-h-36 overflow-y-auto shadow-inner">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-2 text-[10px] text-neutral-400">
              <div className="flex items-center gap-2">
                <CommandLineIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>ORDERFLOW LIVE TELEMETRY CONSOLE</span>
              </div>
              <span>SPRING BOOT 3.2 · JAVA 21</span>
            </div>

            {logs.length === 0 ? (
              <span className="text-neutral-500 italic">
                Ready to execute. Click &quot;▶ Run Order Simulation&quot; above to trace request execution.
              </span>
            ) : (
              <div className="space-y-1">
                {logs.map((log, idx) => (
                  <div
                    key={idx}
                    className={
                      log.includes("SUCCESS")
                        ? "text-emerald-400 font-semibold"
                        : log.includes("SYSTEM")
                        ? "text-blue-400"
                        : "text-neutral-300"
                    }
                  >
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ENGINEERING CONCEPTS BREAKDOWN CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="cmdCard p-6 border-neutral-800 space-y-3 hover:border-blue-500/50 transition-all">
            <div className="w-10 h-10 rounded-lg dark:bg-blue-900/60 bg-blue-100 border dark:border-blue-800/60 border-blue-200 flex items-center justify-center text-blue-500">
              <LockClosedIcon className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold dark:text-white text-slate-900 font-outfit">
              Pessimistic Concurrency Locking
            </h4>
            <p className="text-xs dark:text-neutral-300 text-slate-600 leading-relaxed font-light">
              Uses SQL <code className="text-blue-500 font-mono">PESSIMISTIC_WRITE</code> locks during order creation to prevent inventory overselling when multiple concurrent users purchase the last item simultaneously.
            </p>
          </div>

          <div className="cmdCard p-6 border-neutral-800 space-y-3 hover:border-indigo-500/50 transition-all">
            <div className="w-10 h-10 rounded-lg dark:bg-indigo-900/60 bg-indigo-100 border dark:border-indigo-800/60 border-indigo-200 flex items-center justify-center text-indigo-500">
              <BoltIcon className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold dark:text-white text-slate-900 font-outfit">
              Redis Cache-Aside Pattern
            </h4>
            <p className="text-xs dark:text-neutral-300 text-slate-600 leading-relaxed font-light">
              Accelerates product lookup latency by caching catalog data in Redis. Automatic cache invalidation triggers upon stock updates to ensure strict data consistency.
            </p>
          </div>

          <div className="cmdCard p-6 border-neutral-800 space-y-3 hover:border-emerald-500/50 transition-all">
            <div className="w-10 h-10 rounded-lg dark:bg-emerald-900/60 bg-emerald-100 border dark:border-emerald-800/60 border-emerald-200 flex items-center justify-center text-emerald-500">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold dark:text-white text-slate-900 font-outfit">
              Razorpay Webhook HMAC Verification
            </h4>
            <p className="text-xs dark:text-neutral-300 text-slate-600 leading-relaxed font-light">
              Verifies payment webhook authenticity via <code className="text-emerald-500 font-mono">HMAC-SHA256</code> signature calculations, ensuring payment status callbacks cannot be spoofed or duplicated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
