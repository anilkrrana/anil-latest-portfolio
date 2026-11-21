import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { DSA_TUF_STEPS } from '../../data/growthOSCurriculum';
import { ComplexityRadar } from './ComplexityRadar';
import { Code, CheckCircle2, RotateCcw, Search, ExternalLink, Filter, Star, ChevronDown, ChevronUp } from 'lucide-react';

export const DSATUFTracker: React.FC = () => {
  const { state, setTopicProgress, triggerRevision, isAdmin } = usePrep();
  const [search, setSearch] = useState('');
  const [showRadar, setShowRadar] = useState(false);
  const [expandedStep, setExpandedStep] = useState<string | null>('Step 1');

  const filteredSteps = DSA_TUF_STEPS.filter(
    s => s.title.toLowerCase().includes(search.toLowerCase()) || s.subtopics.toLowerCase().includes(search.toLowerCase())
  );

  const getTopicProgress = (stepId: string) => {
    return state.topicProgress?.[stepId] || { status: 'Not Started', confidence: 0 };
  };

  const handleStatusChange = (stepId: string, currentStatus: string, currentConf: number) => {
    const nextStatus = currentStatus === 'Completed' ? 'Not Started' : (currentStatus === 'In Progress' ? 'Completed' : 'In Progress');
    const nextConf = nextStatus === 'Completed' ? 85 : (nextStatus === 'In Progress' ? 50 : 0);
    setTopicProgress(stepId, nextStatus as any, nextConf);
  };

  return (
    <div className="space-y-6">
      {/* Search & Complexity Radar Trigger Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0d0e12] p-4 rounded-xl border border-[#1e2029]">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Striver TUF steps (e.g. Arrays, Binary Search, DP)..."
            className="w-full rounded-lg border border-[#1e2029] bg-[#121318] pl-9 pr-4 py-2 text-xs font-mono text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <button
          onClick={() => setShowRadar(!showRadar)}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-xs font-mono font-medium transition-all ${
            showRadar
              ? 'bg-blue-600/30 text-blue-300 border-blue-500/50'
              : 'bg-[#121318] text-zinc-400 border-[#1e2029] hover:text-white hover:border-zinc-700'
          }`}
        >
          <Code className="h-4 w-4 text-blue-400" />
          <span>{showRadar ? 'Hide Complexity Radar' : 'View Complexity Radar (Big-O)'}</span>
        </button>
      </div>

      {/* Conditionally Revealed Complexity Radar */}
      {showRadar && <ComplexityRadar />}

      {/* Steps List */}
      <div className="space-y-3">
        {filteredSteps.map((step) => {
          const stepKey = `tuf-${step.step.toLowerCase().replace(/\s+/g, '-')}`;
          const progress = getTopicProgress(stepKey);
          const isExpanded = expandedStep === step.step;

          return (
            <div
              key={step.step}
              className={`rounded-xl border transition-all ${
                progress.status === 'Completed'
                  ? 'border-emerald-900/60 bg-[#0d0e12]'
                  : 'border-[#1e2029] bg-[#0d0e12] hover:border-zinc-700'
              }`}
            >
              <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div 
                  className="flex-1 cursor-pointer"
                  onClick={() => setExpandedStep(isExpanded ? null : step.step)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-blue-950/80 text-blue-400 text-[10px] font-mono border border-blue-800/40 font-bold">
                      {step.step}
                    </span>
                    <h4 className="text-sm font-bold font-outfit text-white">
                      {step.title}
                    </h4>
                    <span className="text-xs font-mono text-zinc-500">
                      ({step.approxProblems} Problems)
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 font-inter line-clamp-1">
                    {step.subtopics}
                  </p>
                </div>

                {/* Status Toggle & Revision Action */}
                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                  <button
                    onClick={() => handleStatusChange(stepKey, progress.status, progress.confidence)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-medium transition-all ${
                      progress.status === 'Completed'
                        ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700 shadow-sm'
                        : (progress.status === 'In Progress'
                          ? 'bg-blue-950/60 text-blue-300 border-blue-700'
                          : 'bg-[#121318] text-zinc-400 border-[#1e2029] hover:text-white')
                    }`}
                  >
                    <CheckCircle2 className={`h-3.5 w-3.5 ${progress.status === 'Completed' ? 'text-emerald-400' : 'text-zinc-500'}`} />
                    <span>{progress.status}</span>
                  </button>

                  <button
                    onClick={() => triggerRevision(stepKey, step.title, 'DSA')}
                    className="p-1.5 rounded-lg border border-[#1e2029] bg-[#121318] text-zinc-400 hover:text-amber-400 hover:border-amber-700/50 transition-all"
                    title="Add to Spaced Repetition Queue"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                  </button>

                  <button
                    onClick={() => setExpandedStep(isExpanded ? null : step.step)}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white"
                  >
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Expanded details */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-2 border-t border-[#1e2029] bg-[#121318]/50 rounded-b-xl space-y-3">
                  <div className="text-xs font-inter text-zinc-300">
                    <span className="font-semibold text-zinc-200">Curriculum Coverage: </span>
                    {step.subtopics}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400 pt-2 border-t border-[#1e2029]">
                    <div className="flex items-center gap-2">
                      <span>Confidence:</span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress.confidence}
                        onChange={(e) => setTopicProgress(stepKey, progress.status, Number(e.target.value))}
                        className="h-1.5 w-28 rounded-lg bg-zinc-700 accent-blue-500"
                      />
                      <span className="text-white font-bold">{progress.confidence}%</span>
                    </div>

                    <a
                      href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:underline"
                    >
                      <span>TakeUForward Official Sheet</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
