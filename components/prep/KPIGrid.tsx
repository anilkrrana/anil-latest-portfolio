import React from 'react';
import { usePrep } from '../../context/PrepContext';
import { Calendar, CheckCircle, UserCheck, Flame, Award, ShieldAlert } from 'lucide-react';

export const KPIGrid: React.FC = () => {
  const { state, daysRemaining, readiness } = usePrep();

  const problemsSolved = state.problems.length;
  const independentSolves = state.problems.filter(p => p.solvedIndependently).length;
  const streak = state.studyDays.length;
  const mockTestsCount = state.mockTests.length;

  const kpis = [
    {
      title: 'Days Remaining',
      value: daysRemaining > 0 ? daysRemaining : 0,
      unit: daysRemaining === 1 ? 'Day' : 'Days',
      icon: Calendar,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      subtitle: 'Target: 1 Nov 2026'
    },
    {
      title: 'Problems Solved',
      value: problemsSolved,
      unit: 'Problems',
      icon: CheckCircle,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      subtitle: `${state.problems.filter(p => p.difficulty === 'Medium').length} Medium, ${state.problems.filter(p => p.difficulty === 'Hard').length} Hard`
    },
    {
      title: 'Independent Solves',
      value: independentSolves,
      unit: `(${problemsSolved > 0 ? Math.round((independentSolves / problemsSolved) * 100) : 0}%)`,
      icon: UserCheck,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      subtitle: 'Zero hints required'
    },
    {
      title: 'Study Streak',
      value: streak,
      unit: streak === 1 ? 'Day' : 'Days',
      icon: Flame,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      subtitle: 'Active daily consistency'
    },
    {
      title: 'Mock Tests',
      value: mockTestsCount,
      unit: 'Completed',
      icon: ShieldAlert,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      subtitle: mockTestsCount > 0 ? `Avg score: ${Math.round(state.mockTests.reduce((a, m) => a + m.score, 0) / mockTestsCount)}/300` : 'No tests taken yet'
    },
    {
      title: 'Readiness Score',
      value: `${readiness.overall}%`,
      unit: 'Calculated',
      icon: Award,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/20',
      subtitle: `DSA: ${readiness.dsa}% | Java: ${readiness.javaCS}%`
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
      {kpis.map((kpi, idx) => {
        const IconComponent = kpi.icon;
        return (
          <div
            key={idx}
            className={`flex flex-col justify-between rounded-xl border bg-[#121318] p-4 transition-all duration-200 hover:border-zinc-700 ${kpi.border}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-medium text-zinc-400 uppercase tracking-wider">
                {kpi.title}
              </span>
              <div className={`rounded-lg p-1.5 ${kpi.bg} ${kpi.color}`}>
                <IconComponent className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-3">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {kpi.value}
                </span>
                <span className="text-xs font-medium text-zinc-400 font-inter">
                  {kpi.unit}
                </span>
              </div>
              <p className="mt-1 text-[10px] text-zinc-400 font-mono truncate">
                {kpi.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
