import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { DATABASE_CURRICULUM, CORE_CS_CURRICULUM } from '../../data/growthOSCurriculum';
import { Database, Cpu, CheckCircle2, RotateCcw, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const DatabasesAndCoreCSTab: React.FC = () => {
  const { state, setTopicProgress, triggerRevision } = usePrep();
  const [activeTab, setActiveTab] = useState<'database' | 'core-cs'>('database');
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const topics = activeTab === 'database' ? DATABASE_CURRICULUM : CORE_CS_CURRICULUM;

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
      {/* Tab Switcher */}
      <div className="flex items-center gap-2 border-b border-[#1e2029] pb-3">
        <button
          onClick={() => setActiveTab('database')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
            activeTab === 'database'
              ? 'bg-blue-600/30 text-blue-300 border border-blue-500/50 shadow-sm'
              : 'text-zinc-400 hover:text-white bg-[#121318] border border-[#1e2029]'
          }`}
        >
          <Database className="h-4 w-4 text-blue-400" />
          <span>Database Engineering & SQL (Indexing, ACID, Hands-On Queries)</span>
        </button>

        <button
          onClick={() => setActiveTab('core-cs')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
            activeTab === 'core-cs'
              ? 'bg-blue-600/30 text-blue-300 border border-blue-500/50 shadow-sm'
              : 'text-zinc-400 hover:text-white bg-[#121318] border border-[#1e2029]'
          }`}
        >
          <Cpu className="h-4 w-4 text-emerald-400" />
          <span>CS Fundamentals (Operating Systems, Networks, SOLID)</span>
        </button>
      </div>

      {/* Topics List */}
      <div className="space-y-3">
        {topics.map((t) => {
          const progress = getProgress(t.id);
          const isExpanded = expandedTopic === t.id;

          return (
            <div
              key={t.id}
              className={`rounded-xl border transition-all ${
                progress.status === 'Completed'
                  ? 'border-emerald-900/60 bg-[#0d0e12]'
                  : 'border-[#1e2029] bg-[#0d0e12] hover:border-zinc-700'
              }`}
            >
              <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div 
                  className="flex-1 cursor-pointer"
                  onClick={() => setExpandedTopic(isExpanded ? null : t.id)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      {t.section}
                    </span>
                    <h4 className="text-sm font-bold font-outfit text-white">
                      {t.topic}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-400 font-inter line-clamp-1">
                    {t.mustExplain}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleStatusToggle(t.id, progress.status)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-medium transition-all ${
                      progress.status === 'Completed'
                        ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700'
                        : (progress.status === 'In Progress'
                          ? 'bg-blue-950/60 text-blue-300 border-blue-700'
                          : 'bg-[#121318] text-zinc-400 border-[#1e2029] hover:text-white')
                    }`}
                  >
                    <CheckCircle2 className={`h-3.5 w-3.5 ${progress.status === 'Completed' ? 'text-emerald-400' : 'text-zinc-500'}`} />
                    <span>{progress.status}</span>
                  </button>

                  <button
                    onClick={() => triggerRevision(t.id, t.topic, activeTab === 'database' ? 'Database' : 'Core CS')}
                    className="p-1.5 rounded-lg border border-[#1e2029] bg-[#121318] text-zinc-400 hover:text-amber-400 transition-all"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                  </button>

                  <button
                    onClick={() => setExpandedTopic(isExpanded ? null : t.id)}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white"
                  >
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {isExpanded && (
                <div className="px-4 pb-4 pt-2 border-t border-[#1e2029] bg-[#121318]/50 rounded-b-xl space-y-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-500">Core Requirements & Concepts:</span>
                    <p className="text-xs text-zinc-300 font-inter mt-0.5 leading-relaxed">
                      {t.mustExplain}
                    </p>
                  </div>

                  {t.sampleQuestion && (
                    <div className="p-3 rounded-lg bg-blue-950/20 border border-blue-900/30">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-300 mb-1">
                        <HelpCircle className="h-3.5 w-3.5 text-blue-400" />
                        <span>Practice Probe / Senior Interview Question:</span>
                      </div>
                      <p className="text-xs text-zinc-300 font-inter">
                        {t.sampleQuestion}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
