import React, { useState } from "react";
import HolographicTiltCard from "./HolographicTiltCard";
import { EnvelopeIcon, DocumentDuplicateIcon, CheckIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "er.anilkrana@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-24 relative bg-command-grid border-t dark:border-neutral-800/80 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HolographicTiltCard
          intensity={6}
          glowColor="rgba(59, 130, 246, 0.45)"
          className="max-w-4xl mx-auto rounded-3xl"
        >
          <div className="cmdCard p-8 sm:p-12 border-neutral-800 text-center relative overflow-hidden rounded-3xl shadow-2xl">
            {/* Subtle background glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div style={{ transform: "translateZ(20px)" }}>
              <span className="cmdBadge mb-3">GET IN TOUCH</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 font-outfit tracking-tight">
                Have a backend engineering problem worth solving?
              </h2>
              <p className="text-sm sm:text-base dark:text-neutral-200 text-slate-700 font-normal max-w-xl mx-auto mt-3 leading-relaxed">
                Whether you are looking for a <strong className="dark:text-white text-slate-900 font-medium">Senior Software Engineer / Java Backend Developer</strong> for your engineering team or want to discuss system design, let&apos;s connect.
              </p>
            </div>

            {/* Email Interaction Card */}
            <div 
              style={{ transform: "translateZ(30px)" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 max-w-md mx-auto"
            >
              <a
                href={`mailto:${email}?subject=Senior%20Software%20Engineering%20Opportunity%20-%20Anil%20Kumar%20Rana`}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-xs font-mono transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
              >
                <EnvelopeIcon className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <button
                onClick={copyEmail}
                className="w-full sm:w-auto px-5 py-3 rounded-xl dark:bg-neutral-900 bg-slate-100 hover:bg-slate-200 dark:hover:bg-neutral-800 border dark:border-neutral-700 border-slate-200 dark:text-neutral-200 text-slate-700 font-mono text-xs transition-all flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <CheckIcon className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <DocumentDuplicateIcon className="w-4 h-4 text-blue-500" />
                    <span>Copy: er.anilkrana@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Professional Links Bar */}
            <div 
              style={{ transform: "translateZ(20px)" }}
              className="flex flex-wrap items-center justify-center gap-6 pt-10 mt-10 border-t dark:border-neutral-800/80 border-slate-200 text-xs font-mono dark:text-neutral-300 text-slate-700"
            >
              <a
                href="https://github.com/anilkrrana"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition-colors flex items-center gap-1 font-medium"
              >
                <span>GitHub</span>
                <ArrowUpRightIcon className="w-3 h-3" />
              </a>
              <a
                href="https://www.linkedin.com/in/anil-kumar-rana/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition-colors flex items-center gap-1 font-medium"
              >
                <span>LinkedIn</span>
                <ArrowUpRightIcon className="w-3 h-3" />
              </a>
              <a
                href="https://www.youtube.com/@webtechnil"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-500 transition-colors flex items-center gap-1 font-medium"
              >
                <span>YouTube (WebTechNil)</span>
                <ArrowUpRightIcon className="w-3 h-3" />
              </a>
              <a
                href="https://twitter.com/anilkrana_"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition-colors flex items-center gap-1 font-medium"
              >
                <span>X (Twitter)</span>
                <ArrowUpRightIcon className="w-3 h-3" />
              </a>
              <a
                href="https://drive.google.com/file/d/1z94SpgAE9w-950xogS74NxzpgCRpod7N/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition-colors flex items-center gap-1 text-blue-500 font-bold"
              >
                <span>Download Resume</span>
                <ArrowUpRightIcon className="w-3 h-3" />
              </a>
            </div>
          </div>
        </HolographicTiltCard>

        {/* Footer Copyright */}
        <div className="mt-12 text-center text-xs font-mono dark:text-neutral-500 text-slate-500 flex items-center justify-center max-w-4xl mx-auto">
          <span>&copy; 2026 Anil Kumar Rana &middot; Salesforce Certified MuleSoft Developer &middot; Senior Software Engineer</span>
        </div>
      </div>
    </footer>
  );
}
