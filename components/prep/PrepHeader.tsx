import React from 'react';
import { usePrep } from '../../context/PrepContext';
import { Calendar, Flame, Shield, Target, Code, MessageSquare } from 'lucide-react';

export const PrepHeader: React.FC = () => {
  const { state, daysRemaining, toggleMode } = usePrep();
  
  // Calculate current streak
  const streak = state.studyDays.length;

  // Determine prep phase based on days remaining (out of 22-25 days)
  const getPhaseName = () => {
    if (daysRemaining > 20) return 'PHASE 1: Diagnostic & Foundations';
    if (daysRemaining > 17) return 'PHASE 2: Arrays, Strings & Hashing';
    if (daysRemaining > 14) return 'PHASE 3: Two Pointers & Sliding Window';
    if (daysRemaining > 11) return 'PHASE 4: Sorting & Binary Search';
    if (daysRemaining > 8) return 'PHASE 5: Linked List, Stack & Queue';
    if (daysRemaining > 5) return 'PHASE 6: Trees, Heap & Graph Basics';
    if (daysRemaining > 2) return 'PHASE 7: Mixed Timed Sets';
    if (daysRemaining >= 0) return 'PHASE 8: Mock Exams & Final Polish';
    return 'INTERVIEW PREPARATION PHASE';
  };

  return (
    <header className="border-b border-[#1e2029] bg-[#0d0e12] px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center">
        {/* Title & Subtitle */}
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-md bg-blue-950/80 px-2 py-0.5 text-xs font-mono font-medium text-blue-400 border border-blue-800/50">
              INFOSYS SP SYSTEM
            </span>
            <span className="text-xs font-mono text-zinc-500">v2.4</span>
          </div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl font-outfit">
            INFOSYS SP L1/L2 — CRACK SYSTEM
          </h1>
          <p className="text-sm text-zinc-400 font-inter">
            {daysRemaining > 0 ? `${daysRemaining}-Day Coding Assessment & Technical Interview Mission` : 'Technical Interview Preparation Mode'}
          </p>
        </div>

        {/* Top Header Metrics & Mode Switcher */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-[#1e2029] bg-[#121318] px-3 py-1.5 text-xs font-mono">
            <Calendar className="h-3.5 w-3.5 text-blue-400" />
            <span className="text-zinc-400">Target:</span>
            <span className="font-semibold text-white">01 NOV 2026</span>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-[#1e2029] bg-[#121318] px-3 py-1.5 text-xs font-mono">
            <Target className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-zinc-400">Phase:</span>
            <span className="font-semibold text-emerald-300">{getPhaseName()}</span>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-[#1e2029] bg-[#121318] px-3 py-1.5 text-xs font-mono">
            <Flame className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-zinc-400">Streak:</span>
            <span className="font-semibold text-amber-300">{streak} Days</span>
          </div>

          {/* Mode Switcher */}
          <button
            onClick={() => toggleMode()}
            className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300 hover:bg-blue-500/20 transition-all"
          >
            {state.mode === 'assessment' ? (
              <>
                <Code className="h-3.5 w-3.5 text-blue-400" />
                <span>ASSESSMENT MODE</span>
              </>
            ) : (
              <>
                <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                <span>INTERVIEW MODE</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
