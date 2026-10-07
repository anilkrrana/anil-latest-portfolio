import React from 'react';
import { usePrep } from '../../context/PrepContext';
import { Clock, CheckCircle2, Award, Zap } from 'lucide-react';

export const HeroCountdown: React.FC = () => {
  const { state, daysRemaining, readiness } = usePrep();
  const todayStr = new Date().toISOString().split('T')[0];
  
  const todayProblemsCount = state.problems.filter(p => p.date === todayStr).length;
  const todayTasksCompleted = state.dailyTasks.filter(t => t.completed).length;
  const todayTasksTotal = state.dailyTasks.length;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {/* Large Countdown Card */}
      <div className="relative overflow-hidden rounded-xl border border-blue-500/20 bg-gradient-to-br from-[#12141d] to-[#0d0e14] p-6 shadow-xl lg:col-span-1">
        <div className="absolute right-0 top-0 -mr-6 -mt-6 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl"></div>
        <div className="flex items-center justify-between text-xs font-mono font-medium text-blue-400">
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-blue-400 animate-pulse" />
            CODING ASSESSMENT COUNTDOWN
          </span>
          <span>1 NOV 2026</span>
        </div>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-5xl font-extrabold tracking-tight text-white font-mono">
            {daysRemaining > 0 ? daysRemaining : 0}
          </span>
          <span className="text-xl font-bold text-blue-400 font-outfit">
            {daysRemaining === 1 ? 'DAY LEFT' : 'DAYS LEFT'}
          </span>
        </div>

        {daysRemaining <= 0 ? (
          <div className="mt-3 rounded-md bg-emerald-500/10 p-2 text-xs font-medium text-emerald-400 border border-emerald-500/20">
            🎯 ASSESSMENT DATE REACHED — INTERVIEW PREPARATION ACTIVE
          </div>
        ) : (
          <p className="mt-2 text-xs text-zinc-400 font-inter">
            Infosys SP L1/L2 Specialist Programmer Exam. Target benchmark: 2/3 problems solved under 90 minutes.
          </p>
        )}

        <div className="mt-4 flex items-center gap-3 border-t border-[#1e2029] pt-3 text-xs font-mono">
          <div className="flex items-center gap-1 text-zinc-400">
            <Zap className="h-3.5 w-3.5 text-amber-400" />
            <span>Target Score:</span>
            <span className="text-white font-semibold">240/300</span>
          </div>
        </div>
      </div>

      {/* Current Mission Card */}
      <div className="rounded-xl border border-[#1e2029] bg-[#121318] p-6 lg:col-span-2 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
              CURRENT MISSION
            </span>
            <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-xs font-mono text-emerald-400 border border-emerald-500/20">
              Readiness: {readiness.overall}%
            </span>
          </div>
          <h2 className="mt-2 text-lg sm:text-xl font-bold text-white font-outfit">
            Master HashMap + Sliding Window and complete today&apos;s timed coding set.
          </h2>
          <p className="mt-1 text-xs text-zinc-400 font-inter">
            Focus on frequency counting arrays, subarray lookup optimization, and solving 2 medium difficulty problems under 45 minutes.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[#1e2029] pt-4">
          <div className="rounded-lg bg-[#09090b] p-3 border border-[#1e2029]">
            <div className="text-[11px] font-mono text-zinc-500">TODAY&apos;S TASKS</div>
            <div className="mt-1 text-lg font-bold text-white font-mono">
              {todayTasksCompleted} / {todayTasksTotal}
            </div>
            <div className="mt-1 h-1.5 w-full rounded-full bg-zinc-800">
              <div 
                className="h-1.5 rounded-full bg-emerald-500 transition-all duration-500" 
                style={{ width: `${todayTasksTotal ? (todayTasksCompleted / todayTasksTotal) * 100 : 0}%` }}
              ></div>
            </div>
          </div>

          <div className="rounded-lg bg-[#09090b] p-3 border border-[#1e2029]">
            <div className="text-[11px] font-mono text-zinc-500">STUDY HOURS TODAY</div>
            <div className="mt-1 text-lg font-bold text-white font-mono">
              {state.totalStudyHours.toFixed(1)} hrs
            </div>
            <div className="mt-1 text-[10px] text-zinc-400">Recorded sessions</div>
          </div>

          <div className="rounded-lg bg-[#09090b] p-3 border border-[#1e2029]">
            <div className="text-[11px] font-mono text-zinc-500">PROBLEMS TODAY</div>
            <div className="mt-1 text-lg font-bold text-white font-mono">
              {todayProblemsCount}
            </div>
            <div className="mt-1 text-[10px] text-emerald-400 font-mono">+1 Target Goal</div>
          </div>
        </div>
      </div>
    </div>
  );
};
