import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { RotateCcw, Clock, ShieldAlert, CheckCircle2, AlertTriangle, Calendar } from 'lucide-react';
import { MockAssessmentMode } from './MockAssessmentMode';
import { TimedCodingMode } from './TimedCodingMode';

export const RevisionAndMocksTab: React.FC = () => {
  const { state, completeRevision } = usePrep();
  const [activeSubTab, setActiveSubTab] = useState<'spaced-repetition' | 'timed-coding' | 'mock-exams'>('spaced-repetition');

  const todayStr = new Date().toISOString().split('T')[0];
  const revisions = state.spacedRevisions || [];

  const dueRevisions = revisions.filter(r => r.status !== 'Mastered' && r.nextRevisionDate <= todayStr);
  const upcomingRevisions = revisions.filter(r => r.status !== 'Mastered' && r.nextRevisionDate > todayStr);
  const masteredRevisions = revisions.filter(r => r.status === 'Mastered');

  return (
    <div className="space-y-6">
      {/* Sub-tab Switchers */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#1e2029] pb-3">
        <button
          onClick={() => setActiveSubTab('spaced-repetition')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
            activeSubTab === 'spaced-repetition'
              ? 'bg-amber-600/30 text-amber-300 border border-amber-500/50 shadow-sm'
              : 'text-zinc-400 hover:text-white bg-[#121318] border border-[#1e2029]'
          }`}
        >
          <RotateCcw className="h-4 w-4 text-amber-400" />
          <span>Spaced Repetition Queue ({dueRevisions.length} Due)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('timed-coding')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
            activeSubTab === 'timed-coding'
              ? 'bg-blue-600/30 text-blue-300 border border-blue-500/50 shadow-sm'
              : 'text-zinc-400 hover:text-white bg-[#121318] border border-[#1e2029]'
          }`}
        >
          <Clock className="h-4 w-4 text-blue-400" />
          <span>Timed Practice Sets (30m, 45m, 60m)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('mock-exams')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
            activeSubTab === 'mock-exams'
              ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/50 shadow-sm'
              : 'text-zinc-400 hover:text-white bg-[#121318] border border-[#1e2029]'
          }`}
        >
          <ShieldAlert className="h-4 w-4 text-emerald-400" />
          <span>Full 90-Minute Mock Assessment Simulator</span>
        </button>
      </div>

      {/* Sub-tab 1: Spaced Repetition Queue */}
      {activeSubTab === 'spaced-repetition' && (
        <div className="space-y-6">
          {/* Due Revisions */}
          <div className="rounded-xl border border-[#1e2029] bg-[#0d0e12] p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#1e2029] pb-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-400" />
                <h3 className="text-base font-bold font-outfit text-white">
                  Topics Due for Revision Today
                </h3>
              </div>
              <span className="px-2.5 py-1 text-xs font-mono rounded bg-amber-950/60 text-amber-300 border border-amber-800/40">
                {dueRevisions.length} Items Due
              </span>
            </div>

            {dueRevisions.length === 0 ? (
              <div className="p-6 text-center text-xs font-mono text-zinc-500">
                No topics currently due for revision. You are on track!
              </div>
            ) : (
              <div className="space-y-3">
                {dueRevisions.map((rev) => (
                  <div
                    key={rev.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-lg border border-amber-800/40 bg-amber-950/10"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                          {rev.pillar}
                        </span>
                        <h4 className="text-sm font-bold text-white font-mono">
                          {rev.topicName}
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1 font-inter">
                        Due: {rev.nextRevisionDate} · Repetition Stage: {rev.intervalIndex + 1}/5
                      </p>
                    </div>

                    <button
                      onClick={() => completeRevision(rev.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-mono font-semibold hover:bg-emerald-500 transition-all shrink-0"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Complete Review</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Upcoming Schedule */}
          {upcomingRevisions.length > 0 && (
            <div className="rounded-xl border border-[#1e2029] bg-[#0d0e12] p-5 shadow-sm space-y-3">
              <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                Upcoming Spaced Revisions ({upcomingRevisions.length})
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {upcomingRevisions.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-3 rounded-lg border border-[#1e2029] bg-[#121318] flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500">{rev.pillar}</span>
                      <h5 className="text-xs font-bold text-zinc-200 font-mono">{rev.topicName}</h5>
                    </div>
                    <span className="text-xs font-mono text-blue-400 font-semibold">
                      {rev.nextRevisionDate}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Sub-tab 2: Timed Coding */}
      {activeSubTab === 'timed-coding' && <TimedCodingMode />}

      {/* Sub-tab 3: Full Mock Exam Simulator */}
      {activeSubTab === 'mock-exams' && <MockAssessmentMode />}
    </div>
  );
};
