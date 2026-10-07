import React from 'react';
import { usePrep } from '../../context/PrepContext';
import { DSAStatus, DSATopic } from '../../types/prep';
import { Code, CheckCircle, HelpCircle, UserCheck, Flame } from 'lucide-react';

export const DSATracker: React.FC = () => {
  const { state, updateDSATopic } = usePrep();

  const statuses: DSAStatus[] = [
    'Not Started',
    'Learning',
    'Practicing',
    'Comfortable',
    'Interview Ready',
    'Needs Revision'
  ];

  const getStatusBadge = (status: DSAStatus) => {
    switch (status) {
      case 'Interview Ready':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Comfortable':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Practicing':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'Learning':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'Needs Revision':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default:
        return 'bg-zinc-800/50 text-zinc-400 border-zinc-700/50';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-[#1e2029] bg-[#121318] p-5">
        <div>
          <h2 className="text-xl font-bold text-white font-outfit flex items-center gap-2">
            <span>DSA TOPIC TRACKER</span>
            <span className="rounded bg-blue-500/10 px-2.5 py-0.5 text-xs font-mono text-blue-400 border border-blue-500/20">
              20 Core Topics
            </span>
          </h2>
          <p className="mt-1 text-xs text-zinc-400 font-inter">
            Track status, problems count, hint dependency, and confidence across all DSA topics.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="rounded-lg bg-[#09090b] px-3 py-1.5 border border-[#1e2029]">
            <span className="text-zinc-400">Total Solved: </span>
            <span className="font-bold text-white">
              {state.dsaTopics.reduce((acc, t) => acc + t.problemsCount, 0)}
            </span>
          </div>
          <div className="rounded-lg bg-[#09090b] px-3 py-1.5 border border-[#1e2029]">
            <span className="text-zinc-400">Independent: </span>
            <span className="font-bold text-emerald-400">
              {state.dsaTopics.reduce((acc, t) => acc + t.independentCount, 0)}
            </span>
          </div>
        </div>
      </div>

      {/* Topics Data Table */}
      <div className="overflow-x-auto rounded-xl border border-[#1e2029] bg-[#121318]">
        <table className="w-full text-left text-xs font-inter">
          <thead className="bg-[#09090b] text-[11px] font-mono text-zinc-400 uppercase tracking-wider border-b border-[#1e2029]">
            <tr>
              <th className="px-4 py-3 font-semibold">Topic</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold text-right">Problems</th>
              <th className="px-4 py-3 font-semibold text-right">Independent</th>
              <th className="px-4 py-3 font-semibold text-right">Hints Used</th>
              <th className="px-4 py-3 font-semibold text-center">Confidence</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1e2029]">
            {state.dsaTopics.map((t) => (
              <tr key={t.id} className="hover:bg-[#161821] transition-colors">
                {/* Topic Name */}
                <td className="px-4 py-3 font-semibold text-white font-mono flex items-center gap-2">
                  <Code className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                  <span>{t.name}</span>
                </td>

                {/* Status Dropdown */}
                <td className="px-4 py-3">
                  <select
                    value={t.status}
                    onChange={(e) => updateDSATopic(t.id, { status: e.target.value as DSAStatus })}
                    className={`rounded border px-2.5 py-1 text-xs font-mono font-medium focus:outline-none cursor-pointer ${getStatusBadge(t.status)}`}
                  >
                    {statuses.map(s => (
                      <option key={s} value={s} className="bg-[#121318] text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </td>

                {/* Problems Solved */}
                <td className="px-4 py-3 text-right font-mono font-medium text-white">
                  <input
                    type="number"
                    min="0"
                    value={t.problemsCount}
                    onChange={(e) => updateDSATopic(t.id, { problemsCount: parseInt(e.target.value) || 0 })}
                    className="w-14 rounded bg-[#09090b] border border-[#1e2029] px-2 py-0.5 text-right font-mono text-white focus:outline-none focus:border-blue-500"
                  />
                </td>

                {/* Independent Count */}
                <td className="px-4 py-3 text-right font-mono text-emerald-400">
                  <input
                    type="number"
                    min="0"
                    value={t.independentCount}
                    onChange={(e) => updateDSATopic(t.id, { independentCount: parseInt(e.target.value) || 0 })}
                    className="w-14 rounded bg-[#09090b] border border-[#1e2029] px-2 py-0.5 text-right font-mono text-emerald-400 focus:outline-none focus:border-emerald-500"
                  />
                </td>

                {/* Hints Count */}
                <td className="px-4 py-3 text-right font-mono text-amber-400">
                  <input
                    type="number"
                    min="0"
                    value={t.hintsCount}
                    onChange={(e) => updateDSATopic(t.id, { hintsCount: parseInt(e.target.value) || 0 })}
                    className="w-14 rounded bg-[#09090b] border border-[#1e2029] px-2 py-0.5 text-right font-mono text-amber-400 focus:outline-none focus:border-amber-500"
                  />
                </td>

                {/* Confidence Slider */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3 justify-center">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      value={t.confidence}
                      onChange={(e) => updateDSATopic(t.id, { confidence: parseInt(e.target.value) })}
                      className="w-24 accent-blue-500 cursor-pointer"
                    />
                    <span className="w-9 text-right font-mono text-xs font-semibold text-white">
                      {t.confidence}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
