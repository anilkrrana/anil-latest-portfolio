import React from 'react';
import { usePrep } from '../../context/PrepContext';
import { AlertCircle, Clock, CheckCircle2, RotateCcw, Zap } from 'lucide-react';

export const RevisionEngine: React.FC = () => {
  const { state, updateProblem } = usePrep();
  const todayStr = new Date().toISOString().split('T')[0];

  // Algorithmic Categorization
  const overdue = state.problems.filter(
    p => p.revisionRequired && p.nextRevisionDate && p.nextRevisionDate < todayStr
  );

  const dueToday = state.problems.filter(
    p => p.revisionRequired && (!p.nextRevisionDate || p.nextRevisionDate === todayStr)
  );

  const dueSoon = state.problems.filter(
    p => p.revisionRequired && p.nextRevisionDate && p.nextRevisionDate > todayStr
  );

  const recentlyFailed = state.problems.filter(
    p => !p.solvedIndependently || p.hintsRequired > 0 || (p.mistakeNotes && p.mistakeNotes.length > 0)
  );

  const handleMarkRevised = (id: string) => {
    updateProblem(id, {
      revisionRequired: false,
      lastRevisedDate: todayStr
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-[#1e2029] bg-[#121318] p-5">
        <div>
          <h2 className="text-xl font-bold text-white font-outfit flex items-center gap-2">
            <span>SPACED REVISION ENGINE</span>
            <span className="rounded bg-rose-500/10 px-2.5 py-0.5 text-xs font-mono text-rose-400 border border-rose-500/20">
              Priority Algorithm Active
            </span>
          </h2>
          <p className="mt-1 text-xs text-zinc-400 font-inter">
            Automated surface of problems due for revision based on failure rates, hint dependency, and time pressure.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="rounded-lg bg-[#09090b] px-3 py-1.5 border border-[#1e2029]">
            <span className="text-zinc-400">Total Due: </span>
            <span className="font-bold text-rose-400">{dueToday.length + overdue.length}</span>
          </div>
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Overdue & Due Today */}
        <div className="rounded-xl border border-rose-500/30 bg-[#121318] p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-[#1e2029] pb-3">
            <h3 className="text-base font-bold text-white font-outfit flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-rose-400" />
              <span>Overdue & Due Today</span>
            </h3>
            <span className="rounded bg-rose-500/10 px-2 py-0.5 text-xs font-mono text-rose-400 border border-rose-500/20">
              {overdue.length + dueToday.length} Problems
            </span>
          </div>

          {[...overdue, ...dueToday].length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-zinc-500">
              🎉 All revision queues clean! No problems overdue today.
            </div>
          ) : (
            <div className="space-y-3">
              {[...overdue, ...dueToday].map((p) => (
                <div key={p.id} className="rounded-lg bg-[#09090b] p-3.5 border border-[#1e2029] flex flex-col justify-between gap-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-bold text-white font-mono">{p.name}</div>
                      <div className="text-xs text-blue-400 font-mono mt-0.5">{p.topic} • {p.pattern}</div>
                    </div>
                    <span className="rounded px-2 py-0.5 text-[10px] font-mono font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      {p.nextRevisionDate && p.nextRevisionDate < todayStr ? 'OVERDUE' : 'DUE TODAY'}
                    </span>
                  </div>

                  {p.mistakeNotes && (
                    <div className="rounded bg-[#121318] p-2 text-[11px] text-amber-300 font-mono border border-[#1e2029]">
                      💡 Takeaway: {p.mistakeNotes}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2 border-t border-[#1e2029] text-xs font-mono">
                    <span className="text-zinc-500">Solved in {p.timeTakenMinutes}m ({p.hintsRequired} hints)</span>
                    <button
                      onClick={() => handleMarkRevised(p.id)}
                      className="inline-flex items-center gap-1 rounded bg-emerald-600 px-3 py-1 text-xs font-semibold text-white hover:bg-emerald-500 transition-all"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Mark Revised</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recently Failed & Hint Assisted */}
        <div className="rounded-xl border border-amber-500/30 bg-[#121318] p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-[#1e2029] pb-3">
            <h3 className="text-base font-bold text-white font-outfit flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-400" />
              <span>Recently Failed / Hint Assisted</span>
            </h3>
            <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs font-mono text-amber-400 border border-amber-500/20">
              {recentlyFailed.length} Problems
            </span>
          </div>

          {recentlyFailed.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-zinc-500">
              No hint-assisted or failed problems logged.
            </div>
          ) : (
            <div className="space-y-3">
              {recentlyFailed.slice(0, 5).map((p) => (
                <div key={p.id} className="rounded-lg bg-[#09090b] p-3.5 border border-[#1e2029] flex flex-col justify-between gap-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-bold text-white font-mono">{p.name}</div>
                      <div className="text-xs text-amber-400 font-mono mt-0.5">
                        {p.hintsRequired > 0 ? `${p.hintsRequired} Hints Required` : 'Assisted Solution'}
                      </div>
                    </div>
                    <span className="rounded px-2 py-0.5 text-[10px] font-mono bg-zinc-800 text-zinc-300">
                      {p.difficulty}
                    </span>
                  </div>

                  {p.mistakeNotes && (
                    <div className="text-xs text-zinc-400 font-inter">
                      {p.mistakeNotes}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2 border-t border-[#1e2029] text-xs font-mono">
                    <span className="text-zinc-500">Logged {p.date}</span>
                    <button
                      onClick={() => updateProblem(p.id, { revisionRequired: true, nextRevisionDate: todayStr })}
                      className="inline-flex items-center gap-1 rounded bg-amber-600/30 text-amber-300 border border-amber-500/40 px-3 py-1 text-xs font-semibold hover:bg-amber-600/50 transition-all"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>Queue Revision</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
