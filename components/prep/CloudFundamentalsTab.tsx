import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { CLOUD_CURRICULUM } from '../../data/growthOSCurriculum';
import { Cloud, CheckCircle2, RotateCcw, ShieldCheck } from 'lucide-react';

export const CloudFundamentalsTab: React.FC = () => {
  const { state, setTopicProgress, triggerRevision } = usePrep();
  const [providerFilter, setProviderFilter] = useState<'All' | 'AWS' | 'Azure'>('All');

  const filtered = CLOUD_CURRICULUM.filter(
    c => providerFilter === 'All' || c.provider === providerFilter
  );

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
      {/* Header and Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0d0e12] p-4 rounded-xl border border-[#1e2029]">
        <div>
          <div className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-cyan-400" />
            <h3 className="text-base font-bold font-outfit text-white">
              Cloud Engineering Fundamentals (AWS & Azure)
            </h3>
          </div>
          <p className="text-xs text-zinc-400 mt-0.5 font-inter">
            Amazon expects AWS baseline; Microsoft expects Azure baseline. Name the right service and state trade-offs.
          </p>
        </div>

        <div className="flex items-center gap-1 rounded-lg bg-[#121318] p-1 border border-[#1e2029]">
          {(['All', 'AWS', 'Azure'] as const).map(p => (
            <button
              key={p}
              onClick={() => setProviderFilter(p)}
              className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                providerFilter === p
                  ? 'bg-blue-600/30 text-blue-300 font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Cloud Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((item) => {
          const progress = getProgress(item.id);

          return (
            <div
              key={item.id}
              className={`rounded-xl border p-4 transition-all ${
                progress.status === 'Completed'
                  ? 'border-emerald-900/60 bg-[#0d0e12]'
                  : 'border-[#1e2029] bg-[#0d0e12] hover:border-zinc-700'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                    item.provider === 'AWS'
                      ? 'bg-amber-950/80 text-amber-400 border-amber-800/40'
                      : 'bg-blue-950/80 text-blue-400 border-blue-800/40'
                  }`}>
                    {item.provider}
                  </span>
                  <h4 className="text-sm font-bold font-outfit text-white mt-1.5">
                    {item.service}
                  </h4>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => handleStatusToggle(item.id, progress.status)}
                    className={`p-1.5 rounded-lg border text-xs font-mono transition-all ${
                      progress.status === 'Completed'
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-600'
                        : 'bg-[#121318] text-zinc-500 border-[#1e2029] hover:text-white'
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => triggerRevision(item.id, `${item.provider} - ${item.service}`, 'Cloud')}
                    className="p-1.5 rounded-lg border border-[#1e2029] bg-[#121318] text-zinc-400 hover:text-amber-400 transition-all"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-2 text-xs font-inter">
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500">What It Does:</span>
                  <p className="text-zinc-300 mt-0.5 leading-relaxed">{item.whatItDoes}</p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500">When To Use It:</span>
                  <p className="text-zinc-400 mt-0.5 leading-relaxed">{item.whenToUse}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
