import React, { useState } from 'react';
import { PATTERN_LIBRARY } from '../../data/defaultPrepData';
import { Code2, Copy, Check, Sparkles, BookOpen } from 'lucide-react';

export const PatternLibrary: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-[#1e2029] bg-[#121318] p-5">
        <div>
          <h2 className="text-xl font-bold text-white font-outfit flex items-center gap-2">
            <span>DSA PATTERN REFERENCE LIBRARY</span>
            <span className="rounded bg-blue-500/10 px-2.5 py-0.5 text-xs font-mono text-blue-400 border border-blue-500/20">
              8 Master Templates
            </span>
          </h2>
          <p className="mt-1 text-xs text-zinc-400 font-inter">
            Signal recognition, mental models, Java code templates, and standard complexity benchmarks.
          </p>
        </div>
      </div>

      {/* Grid of Pattern Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PATTERN_LIBRARY.map((pattern) => (
          <div
            key={pattern.id}
            className="flex flex-col justify-between rounded-xl border border-[#1e2029] bg-[#121318] p-5 hover:border-zinc-700 transition-all space-y-4"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-blue-400 shrink-0" />
                    <span>{pattern.name}</span>
                  </h3>
                  <div className="mt-1 text-xs font-mono text-emerald-400">
                    ⚡ {pattern.signal}
                  </div>
                </div>
                <span className="rounded bg-[#09090b] px-2.5 py-1 text-[11px] font-mono text-zinc-400 border border-[#1e2029]">
                  {pattern.typicalComplexity}
                </span>
              </div>

              {/* Mental Model */}
              <div className="mt-3 rounded-lg bg-[#09090b] p-3 border border-[#1e2029] text-xs text-zinc-300 font-inter">
                <span className="font-mono text-blue-400 font-semibold">Mental Model: </span>
                {pattern.mentalModel}
              </div>

              {/* Typical Data Structure */}
              <div className="mt-2 text-xs font-mono text-zinc-400">
                <span className="text-zinc-500">Data Structure: </span>
                <span className="text-white">{pattern.typicalDataStructure}</span>
              </div>

              {/* Java Template Code Block */}
              <div className="mt-3 relative rounded-lg bg-[#08090d] border border-[#1e2029] overflow-hidden">
                <div className="flex items-center justify-between bg-[#0e1017] px-3 py-1.5 border-b border-[#1e2029] text-[11px] font-mono text-zinc-400">
                  <span>Java Template</span>
                  <button
                    onClick={() => handleCopy(pattern.id, pattern.javaTemplate)}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {copiedId === pattern.id ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-3 text-xs font-mono text-blue-300 overflow-x-auto whitespace-pre">
                  {pattern.javaTemplate}
                </pre>
              </div>
            </div>

            {/* Example Problems */}
            <div className="border-t border-[#1e2029] pt-3">
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                Classic Example Problems
              </div>
              <div className="flex flex-wrap gap-1.5">
                {pattern.exampleProblems.map((prob, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-[#09090b] px-2 py-1 text-[11px] font-mono text-zinc-300 border border-[#1e2029]"
                  >
                    {prob}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
