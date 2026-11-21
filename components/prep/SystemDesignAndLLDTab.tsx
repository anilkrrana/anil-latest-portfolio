import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { SYSTEM_DESIGN_CURRICULUM, LLD_PATTERNS, MACHINE_CODING_CHALLENGES } from '../../data/growthOSCurriculum';
import { Layers, Box, CheckCircle2, RotateCcw, ExternalLink, Code2, ChevronDown, ChevronUp } from 'lucide-react';

export const SystemDesignAndLLDTab: React.FC = () => {
  const { state, setTopicProgress, triggerRevision } = usePrep();
  const [subTab, setSubTab] = useState<'hld' | 'lld-patterns' | 'machine-coding'>('hld');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const getProgress = (id: string) => {
    return state.topicProgress?.[id] || { status: 'Not Started', confidence: 0 };
  };

  const handleStatusToggle = (id: string, currentStatus: string) => {
    const nextStatus = currentStatus === 'Completed' ? 'Not Started' : (currentStatus === 'In Progress' ? 'Completed' : 'In Progress');
    const nextConf = nextStatus === 'Completed' ? 85 : (nextStatus === 'In Progress' ? 50 : 0);
    setTopicProgress(id, nextStatus as any, nextConf);
  };

  return (
    <div className="space-y-6">
      {/* Sub-nav switchers */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#1e2029] pb-3">
        <button
          onClick={() => setSubTab('hld')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
            subTab === 'hld'
              ? 'bg-blue-600/30 text-blue-300 border border-blue-500/50 shadow-sm'
              : 'text-zinc-400 hover:text-white bg-[#121318] border border-[#1e2029]'
          }`}
        >
          <Layers className="h-4 w-4 text-blue-400" />
          <span>High-Level System Design (Tier 1 & 2)</span>
        </button>

        <button
          onClick={() => setSubTab('lld-patterns')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
            subTab === 'lld-patterns'
              ? 'bg-blue-600/30 text-blue-300 border border-blue-500/50 shadow-sm'
              : 'text-zinc-400 hover:text-white bg-[#121318] border border-[#1e2029]'
          }`}
        >
          <Box className="h-4 w-4 text-emerald-400" />
          <span>GOF Design Patterns (14 Must-Know)</span>
        </button>

        <button
          onClick={() => setSubTab('machine-coding')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
            subTab === 'machine-coding'
              ? 'bg-blue-600/30 text-blue-300 border border-blue-500/50 shadow-sm'
              : 'text-zinc-400 hover:text-white bg-[#121318] border border-[#1e2029]'
          }`}
        >
          <Code2 className="h-4 w-4 text-purple-400" />
          <span>Machine Coding Challenges (45-60 min)</span>
        </button>
      </div>

      {/* Sub-Tab 1: High-Level System Design */}
      {subTab === 'hld' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {SYSTEM_DESIGN_CURRICULUM.map((item) => {
              const progress = getProgress(item.id);
              const isExpanded = expandedItem === item.id;

              return (
                <div
                  key={item.id}
                  className={`rounded-xl border p-4 transition-all ${
                    progress.status === 'Completed'
                      ? 'border-emerald-900/60 bg-[#0d0e12]'
                      : 'border-[#1e2029] bg-[#0d0e12] hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/80 text-blue-400 border border-blue-800/40">
                        {item.tier}
                      </span>
                      <h4 className="text-sm font-bold font-outfit text-white mt-1.5">
                        {item.name}
                      </h4>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => handleStatusToggle(item.id, progress.status)}
                        className={`p-1.5 rounded-lg border text-xs font-mono transition-all ${
                          progress.status === 'Completed'
                            ? 'bg-emerald-950/80 text-emerald-300 border-emerald-600'
                            : 'bg-[#121318] text-zinc-500 border-[#1e2029] hover:text-white'
                        }`}
                        title="Toggle Status"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                      </button>

                      <button
                        onClick={() => triggerRevision(item.id, item.name, 'System Design')}
                        className="p-1.5 rounded-lg border border-[#1e2029] bg-[#121318] text-zinc-400 hover:text-amber-400 transition-all"
                        title="Add to Spaced Repetition"
                      >
                        <RotateCcw className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 font-inter mb-3">
                    {item.coreIdea}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.components.map((c, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161720] text-zinc-300 border border-[#232635]">
                        {c}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-[#1e2029] flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span>Source: {item.whereToLearn}</span>
                    <span className="text-emerald-400 font-semibold">{progress.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sub-Tab 2: GOF Design Patterns */}
      {subTab === 'lld-patterns' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {LLD_PATTERNS.map((pat) => {
            const progress = getProgress(pat.id);
            const isExpanded = expandedItem === pat.id;

            return (
              <div
                key={pat.id}
                className={`rounded-xl border p-4 transition-all ${
                  progress.status === 'Completed'
                    ? 'border-emerald-900/60 bg-[#0d0e12]'
                    : 'border-[#1e2029] bg-[#0d0e12] hover:border-zinc-700'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
                      {pat.category} Pattern
                    </span>
                    <h4 className="text-sm font-bold font-outfit text-white mt-1.5">
                      {pat.pattern}
                    </h4>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleStatusToggle(pat.id, progress.status)}
                      className={`p-1.5 rounded-lg border text-xs font-mono transition-all ${
                        progress.status === 'Completed'
                          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-600'
                          : 'bg-[#121318] text-zinc-500 border-[#1e2029] hover:text-white'
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() => triggerRevision(pat.id, pat.pattern, 'LLD')}
                      className="p-1.5 rounded-lg border border-[#1e2029] bg-[#121318] text-zinc-400 hover:text-amber-400 transition-all"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 font-inter mb-3">
                  {pat.whenToUse}
                </p>

                <div className="bg-[#121318] p-2.5 rounded-lg border border-[#1e2029] text-[11px] font-mono text-zinc-300 overflow-x-auto">
                  <code>{pat.keyExample}</code>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Sub-Tab 3: Machine Coding Challenges */}
      {subTab === 'machine-coding' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {MACHINE_CODING_CHALLENGES.map((mc) => {
            const progress = getProgress(mc.id);

            return (
              <div
                key={mc.id}
                className={`rounded-xl border p-4 transition-all ${
                  progress.status === 'Completed'
                    ? 'border-emerald-900/60 bg-[#0d0e12]'
                    : 'border-[#1e2029] bg-[#0d0e12] hover:border-zinc-700'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 text-purple-400 border border-purple-800/40">
                      Machine Coding
                    </span>
                    <h4 className="text-sm font-bold font-outfit text-white mt-1.5">
                      {mc.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleStatusToggle(mc.id, progress.status)}
                      className={`p-1.5 rounded-lg border text-xs font-mono transition-all ${
                        progress.status === 'Completed'
                          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-600'
                          : 'bg-[#121318] text-zinc-500 border-[#1e2029] hover:text-white'
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() => triggerRevision(mc.id, mc.title, 'Machine Coding')}
                      className="p-1.5 rounded-lg border border-[#1e2029] bg-[#121318] text-zinc-400 hover:text-amber-400 transition-all"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 font-inter mb-3">
                  {mc.description}
                </p>

                <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-[#1e2029]">
                  <span className="text-zinc-500">Design Patterns: </span>
                  <span className="text-blue-300">{mc.patternsRequired}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
