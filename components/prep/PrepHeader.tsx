import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { Calendar, Flame, Shield, Target, Code, MessageSquare, Lock, Unlock, Eye } from 'lucide-react';
import { AdminLockModal } from './AdminLockModal';

export const PrepHeader: React.FC = () => {
  const { state, daysRemaining, toggleMode, isAdmin, logoutAdmin } = usePrep();
  const [isLockModalOpen, setIsLockModalOpen] = useState(false);
  
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
    <>
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
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Viewer / Owner Status & Lock Trigger */}
            {!isAdmin ? (
              <>
                <div className="flex items-center gap-1.5 rounded-lg border border-purple-500/30 bg-purple-500/10 px-2.5 py-1.5 text-xs font-mono">
                  <Eye className="h-3.5 w-3.5 text-purple-400" />
                  <span className="text-purple-300 font-semibold">VIEWER SHOWCASE</span>
                  <span className="hidden sm:inline text-[10px] text-purple-400/80">(Read-Only)</span>
                </div>
                <button
                  onClick={() => setIsLockModalOpen(true)}
                  className="flex items-center gap-1.5 rounded-lg border border-[#1e2029] bg-[#121318] px-2.5 py-1.5 text-xs font-mono font-medium text-zinc-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all shadow-sm"
                  title="Enter Owner PIN (7739) to unlock edit controls"
                >
                  <Lock className="h-3.5 w-3.5 text-blue-400" />
                  <span>Owner Unlock</span>
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1.5 text-xs font-mono">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-emerald-300 font-semibold">OWNER MODE</span>
                  <span className="hidden sm:inline text-[10px] text-emerald-400/80">(Editing Active)</span>
                </div>
                <button
                  onClick={logoutAdmin}
                  className="flex items-center gap-1.5 rounded-lg border border-rose-500/30 bg-rose-500/10 px-2.5 py-1.5 text-xs font-mono font-medium text-rose-300 hover:bg-rose-500/20 transition-all shadow-sm"
                  title="Lock back to read-only visitor showcase"
                >
                  <Unlock className="h-3.5 w-3.5 text-rose-400" />
                  <span>Lock Session</span>
                </button>
              </>
            )}

            <div className="hidden sm:flex items-center gap-2 rounded-lg border border-[#1e2029] bg-[#121318] px-3 py-1.5 text-xs font-mono">
              <Calendar className="h-3.5 w-3.5 text-blue-400" />
              <span className="text-zinc-400">Target:</span>
              <span className="font-semibold text-white">01 NOV 2026</span>
            </div>

            <div className="hidden md:flex items-center gap-2 rounded-lg border border-[#1e2029] bg-[#121318] px-3 py-1.5 text-xs font-mono">
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
                  <span>ASSESSMENT</span>
                </>
              ) : (
                <>
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                  <span>INTERVIEW</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Admin PIN Unlock Modal */}
      <AdminLockModal isOpen={isLockModalOpen} onClose={() => setIsLockModalOpen(false)} />
    </>
  );
};
