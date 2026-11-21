import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { Calendar, Flame, Target, Code, MessageSquare, Lock, Unlock, Eye, Save, CheckCircle2, Plus } from 'lucide-react';
import { AdminLockModal } from './AdminLockModal';
import { StudyTimerWidget } from './StudyTimerWidget';

interface GrowthOSHeaderProps {
  onOpenSessionLogger: (durationMinutes?: number) => void;
}

export const GrowthOSHeader: React.FC<GrowthOSHeaderProps> = ({ onOpenSessionLogger }) => {
  const { 
    state, 
    daysRemaining, 
    toggleMode, 
    isAdmin, 
    logoutAdmin, 
    syncStatus, 
    syncToCodebase, 
    lastSavedAt,
    streakStats,
    setTargetCompanyProfile 
  } = usePrep();
  
  const [isLockModalOpen, setIsLockModalOpen] = useState(false);
  const [syncFeedback, setSyncFeedback] = useState<string | null>(null);

  const handleManualSave = async () => {
    const res = await syncToCodebase();
    setSyncFeedback(res.message);
    setTimeout(() => setSyncFeedback(null), 4000);
  };

  const getPhaseName = () => {
    if (daysRemaining > 20) return 'PHASE 1: Diagnostic & Core Foundations';
    if (daysRemaining > 17) return 'PHASE 2: Arrays, Strings & Hashing';
    if (daysRemaining > 14) return 'PHASE 3: Two Pointers & Sliding Window';
    if (daysRemaining > 11) return 'PHASE 4: Sorting & Binary Search';
    if (daysRemaining > 8) return 'PHASE 5: Linked List, Stack & Queue';
    if (daysRemaining > 5) return 'PHASE 6: Trees, Heaps & System Design';
    if (daysRemaining > 2) return 'PHASE 7: Mixed Timed Sets & LLD';
    if (daysRemaining >= 0) return 'PHASE 8: Mock Loops & Leadership Principles';
    return 'INTERVIEW READINESS PHASE';
  };

  return (
    <>
      <header className="border-b border-[#1e2029] bg-[#0d0e12] px-4 py-4 sm:px-6 lg:px-8 shadow-md">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 lg:flex-row lg:items-center">
          {/* Title & Brand Badge */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-950/80 px-2.5 py-0.5 text-xs font-mono font-medium text-blue-400 border border-blue-800/50 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                PRODUCT SWE READINESS ENGINE
              </span>
              <span className="text-xs font-mono text-zinc-500">v3.0</span>

              {/* Target Company Selector */}
              <div className="flex items-center gap-1 ml-2">
                <span className="text-[11px] font-mono text-zinc-500">Target:</span>
                <select
                  value={state.targetCompanyProfile || 'general'}
                  onChange={(e) => setTargetCompanyProfile(e.target.value as any)}
                  className="rounded bg-[#121318] border border-[#1e2029] px-2 py-0.5 text-[11px] font-mono text-zinc-300 focus:border-blue-500 focus:outline-none"
                >
                  <option value="general">Tier-1 Product Co. (General)</option>
                  <option value="microsoft">Microsoft (SDE-2 Loop)</option>
                  <option value="amazon">Amazon (Bar Raiser + LPs)</option>
                  <option value="google">Google (Algorithms + CS)</option>
                </select>
              </div>
            </div>

            <h1 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl font-outfit">
              ANIL&apos;S ENGINEERING GROWTH OS
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 font-inter mt-0.5">
              Tier-1 Product Company Roadmap & Mission Control · DSA, System Design, Java Backend & Interview Execution
            </p>
          </div>

          {/* Action CTAs, Timer, Streaks & Mode Controls */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {/* Quick Timer Widget */}
            <StudyTimerWidget onLogSession={(duration) => onOpenSessionLogger(duration)} />

            {/* Log Study Session CTA */}
            <button
              onClick={() => onOpenSessionLogger(45)}
              className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-mono font-semibold text-white hover:bg-emerald-500 transition-all shadow-sm shadow-emerald-900/30"
              title="Record a genuine learning session into the contribution heatmap"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Log Session</span>
            </button>

            {/* Viewer / Owner Status */}
            {!isAdmin ? (
              <>
                <div className="flex items-center gap-1.5 rounded-lg border border-purple-500/30 bg-purple-500/10 px-2.5 py-1.5 text-xs font-mono">
                  <Eye className="h-3.5 w-3.5 text-purple-400" />
                  <span className="text-purple-300 font-semibold">VIEWER SHOWCASE</span>
                </div>
                <button
                  onClick={() => setIsLockModalOpen(true)}
                  className="flex items-center gap-1.5 rounded-lg border border-[#1e2029] bg-[#121318] px-2.5 py-1.5 text-xs font-mono font-medium text-zinc-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all shadow-sm"
                  title="Enter Owner PIN to unlock edit controls and disk saving"
                >
                  <Lock className="h-3.5 w-3.5 text-blue-400" />
                  <span>Owner Unlock</span>
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1.5 text-xs font-mono">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-300 font-semibold">OWNER MODE</span>
                </div>

                <button
                  onClick={handleManualSave}
                  disabled={syncStatus === 'saving'}
                  className="flex items-center gap-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 px-2.5 py-1.5 text-xs font-mono font-medium text-blue-300 hover:bg-blue-500/20 transition-all shadow-sm"
                  title="Save current progress directly to data/userPrepState.json on disk"
                >
                  <Save className="h-3.5 w-3.5 text-blue-400" />
                  <span>{syncStatus === 'saving' ? 'Syncing...' : 'Save to Repo'}</span>
                </button>

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

            {/* Streak Indicator */}
            <div className="flex items-center gap-1.5 rounded-lg border border-[#1e2029] bg-[#121318] px-2.5 py-1.5 text-xs font-mono">
              <Flame className="h-3.5 w-3.5 text-amber-400" />
              <span className="text-zinc-400">Streak:</span>
              <span className="font-semibold text-amber-300">{streakStats.currentStreak}d</span>
            </div>

            {/* Mode Switcher */}
            <button
              onClick={() => toggleMode()}
              className="flex items-center gap-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 px-2.5 py-1.5 text-xs font-semibold text-blue-300 hover:bg-blue-500/20 transition-all"
              title="Toggle between Assessment and Interview Mode"
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

        {/* Sync Toast */}
        {syncFeedback && (
          <div className="mx-auto mt-2 max-w-7xl">
            <div className="flex items-center gap-2 rounded-lg border border-blue-500/40 bg-blue-950/60 px-3 py-1.5 text-xs font-mono text-blue-200">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>{syncFeedback}</span>
              {lastSavedAt && <span className="text-zinc-400 ml-auto text-[10px]">Saved at {lastSavedAt}</span>}
            </div>
          </div>
        )}
      </header>

      {/* Admin Unlock Modal */}
      <AdminLockModal isOpen={isLockModalOpen} onClose={() => setIsLockModalOpen(false)} />
    </>
  );
};
