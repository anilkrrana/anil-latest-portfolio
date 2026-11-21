import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { BEHAVIORAL_LPS } from '../../data/growthOSCurriculum';
import { Award, FolderGit2, CheckCircle2, RotateCcw, HelpCircle, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const BehavioralAndProjectTab: React.FC = () => {
  const { state, setTopicProgress, triggerRevision, updateProjectPrep } = usePrep();
  const [activeTab, setActiveTab] = useState<'behavioral' | 'projects'>('behavioral');
  const [expandedLp, setExpandedLp] = useState<string | null>(null);

  const getProgress = (id: string) => {
    return state.topicProgress?.[id] || { status: 'Not Started', confidence: 0 };
  };

  const handleStatusToggle = (id: string, currentStatus: string) => {
    const nextStatus = currentStatus === 'Completed' ? 'Not Started' : (currentStatus === 'In Progress' ? 'Completed' : 'In Progress');
    const nextConf = nextStatus === 'Completed' ? 90 : (nextStatus === 'In Progress' ? 50 : 0);
    setTopicProgress(id, nextStatus as any, nextConf);
  };

  return (
    <div className="space-y-6">
      {/* Switcher */}
      <div className="flex items-center gap-2 border-b border-[#1e2029] pb-3">
        <button
          onClick={() => setActiveTab('behavioral')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
            activeTab === 'behavioral'
              ? 'bg-purple-600/30 text-purple-300 border border-purple-500/50 shadow-sm'
              : 'text-zinc-400 hover:text-white bg-[#121318] border border-[#1e2029]'
          }`}
        >
          <Award className="h-4 w-4 text-purple-400" />
          <span>Behavioral Story Bank (16 Amazon LPs, Microsoft, Google)</span>
        </button>

        <button
          onClick={() => setActiveTab('projects')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
            activeTab === 'projects'
              ? 'bg-blue-600/30 text-blue-300 border border-blue-500/50 shadow-sm'
              : 'text-zinc-400 hover:text-white bg-[#121318] border border-[#1e2029]'
          }`}
        >
          <FolderGit2 className="h-4 w-4 text-blue-400" />
          <span>Project Deep Dive & Architecture Defense</span>
        </button>
      </div>

      {/* Behavioral Story Bank */}
      {activeTab === 'behavioral' && (
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-900/30 text-xs font-inter text-purple-200">
            <span className="font-semibold text-white">SDE-2 Behavioral Bar: </span>
            Stories must demonstrate <strong className="text-purple-300">Ownership</strong> and <strong className="text-purple-300">Scope</strong> — not just solving a bug, but architecting a solution, mitigating failure modes, and delivering verified metrics.
          </div>

          <div className="space-y-3">
            {BEHAVIORAL_LPS.map((lp) => {
              const progress = getProgress(lp.id);
              const isExpanded = expandedLp === lp.id;

              return (
                <div
                  key={lp.id}
                  className={`rounded-xl border transition-all ${
                    progress.status === 'Completed'
                      ? 'border-emerald-900/60 bg-[#0d0e12]'
                      : 'border-[#1e2029] bg-[#0d0e12] hover:border-zinc-700'
                  }`}
                >
                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div 
                      className="flex-1 cursor-pointer"
                      onClick={() => setExpandedLp(isExpanded ? null : lp.id)}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 text-purple-400 border border-purple-800/40 font-bold">
                          LEADERSHIP PRINCIPLE
                        </span>
                        <h4 className="text-sm font-bold font-outfit text-white">
                          {lp.principle}
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-400 font-inter line-clamp-1">
                        {lp.testingFor}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleStatusToggle(lp.id, progress.status)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-medium transition-all ${
                          progress.status === 'Completed'
                            ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700'
                            : (progress.status === 'In Progress'
                              ? 'bg-purple-950/60 text-purple-300 border-purple-700'
                              : 'bg-[#121318] text-zinc-400 border-[#1e2029] hover:text-white')
                        }`}
                      >
                        <CheckCircle2 className={`h-3.5 w-3.5 ${progress.status === 'Completed' ? 'text-emerald-400' : 'text-zinc-500'}`} />
                        <span>{progress.status}</span>
                      </button>

                      <button
                        onClick={() => triggerRevision(lp.id, lp.principle, 'Behavioral')}
                        className="p-1.5 rounded-lg border border-[#1e2029] bg-[#121318] text-zinc-400 hover:text-amber-400 transition-all"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                      </button>

                      <button
                        onClick={() => setExpandedLp(isExpanded ? null : lp.id)}
                        className="p-1.5 rounded-lg text-zinc-400 hover:text-white"
                      >
                        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-4 pb-4 pt-2 border-t border-[#1e2029] bg-[#121318]/50 rounded-b-xl space-y-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-zinc-500">What Interviewers Are Evaluating:</span>
                        <p className="text-xs text-zinc-300 font-inter mt-0.5">{lp.testingFor}</p>
                      </div>

                      <div className="p-3 rounded-lg bg-blue-950/20 border border-blue-900/30">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-300 mb-1">
                          <HelpCircle className="h-3.5 w-3.5 text-blue-400" />
                          <span>Sample Behavioral Question:</span>
                        </div>
                        <p className="text-xs text-zinc-200 font-inter font-medium">{lp.sampleQuestion}</p>
                      </div>

                      <div className="p-3 rounded-lg bg-[#0d0e12] border border-[#1e2029] space-y-2">
                        <span className="text-xs font-mono font-semibold text-zinc-300">STAR Story Framework Structure:</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-inter text-zinc-400">
                          <div><strong className="text-white">Situation:</strong> Context & problem scale</div>
                          <div><strong className="text-white">Task:</strong> Your specific ownership & responsibility</div>
                          <div><strong className="text-white">Action:</strong> Technical decisions & trade-offs you drove</div>
                          <div><strong className="text-white">Result:</strong> Measurable outcome (latency, revenue, uptime)</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Projects Deep Dive */}
      {activeTab === 'projects' && (
        <div className="space-y-4">
          {state.projects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-xl border border-[#1e2029] bg-[#0d0e12] p-5 shadow-sm space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1e2029] pb-3">
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">
                    FEATURED PORTFOLIO ARCHITECTURE
                  </span>
                  <h3 className="text-lg font-bold font-outfit text-white mt-1">
                    {proj.projectName}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161720] text-zinc-300 border border-[#232635]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-inter">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-zinc-500">Problem Solved:</span>
                  <p className="text-zinc-300 leading-relaxed">{proj.problemSolved}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-zinc-500">Architecture & Tech Stack:</span>
                  <p className="text-zinc-300 leading-relaxed">{proj.architecture}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-zinc-500">My Ownership & Contribution:</span>
                  <p className="text-zinc-300 leading-relaxed">{proj.myContribution}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-zinc-500">Measured Performance Outcome:</span>
                  <p className="text-emerald-400 font-semibold leading-relaxed">{proj.performance}</p>
                </div>
              </div>

              {/* Cross-questions */}
              {proj.crossQuestions && proj.crossQuestions.length > 0 && (
                <div className="pt-3 border-t border-[#1e2029] space-y-2">
                  <span className="text-xs font-mono font-semibold text-zinc-300">
                    Senior Interviewer Cross-Questions & Answers:
                  </span>
                  {proj.crossQuestions.map((cq, i) => (
                    <div key={i} className="p-3 rounded-lg bg-[#121318] border border-[#1e2029] space-y-1">
                      <div className="text-xs font-mono text-amber-300 flex items-center gap-1.5">
                        <HelpCircle className="h-3.5 w-3.5 text-amber-400" />
                        <span>Q: {cq.question}</span>
                      </div>
                      <p className="text-xs text-zinc-300 font-inter pl-5 leading-relaxed">
                        A: {cq.myAnswer}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
