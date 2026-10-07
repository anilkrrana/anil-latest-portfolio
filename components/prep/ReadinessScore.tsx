import React from 'react';
import { usePrep } from '../../context/PrepContext';
import { Award, CheckCircle2, AlertCircle, Zap, Code, Shield } from 'lucide-react';

export const ReadinessScore: React.FC = () => {
  const { readiness } = usePrep();

  const components = [
    {
      title: 'DSA Topic Mastery',
      weight: '30%',
      score: readiness.dsa,
      icon: Code,
      color: 'text-blue-400',
      barColor: 'bg-blue-500',
      tip: 'Increase problem count and set topic status to Comfortable / Interview Ready across all 20 topics.'
    },
    {
      title: 'Java & CS Fundamentals',
      weight: '20%',
      score: readiness.javaCS,
      icon: Shield,
      color: 'text-amber-400',
      barColor: 'bg-amber-500',
      tip: 'Revise Core Java Collections, Java 8 Streams, Multithreading, and SQL/DBMS.'
    },
    {
      title: 'Speed & Time Pressure',
      weight: '15%',
      score: readiness.speed,
      icon: Zap,
      color: 'text-purple-400',
      barColor: 'bg-purple-500',
      tip: 'Aim to complete Medium problems under 25 minutes in timed coding mode.'
    },
    {
      title: 'Accuracy & Independence',
      weight: '15%',
      score: readiness.accuracy,
      icon: CheckCircle2,
      color: 'text-emerald-400',
      barColor: 'bg-emerald-500',
      tip: 'Minimize hint reliance. Solve problems independently without checking solutions.'
    },
    {
      title: 'Pattern Recognition',
      weight: '10%',
      score: readiness.pattern,
      icon: Award,
      color: 'text-cyan-400',
      barColor: 'bg-cyan-500',
      tip: 'Practice diverse patterns: Two Pointers, Sliding Window, Binary Search, BFS/DFS, DP.'
    },
    {
      title: 'Mock Assessment Performance',
      weight: '10%',
      score: readiness.mock,
      icon: AlertCircle,
      color: 'text-rose-400',
      barColor: 'bg-rose-500',
      tip: 'Complete 90-minute Infosys SP Mock tests to build stamina and score consistency.'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-xl border border-blue-500/30 bg-gradient-to-r from-[#12141e] via-[#121318] to-[#0f151d] p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
              TRANSPARENT EVALUATION FORMULA
            </span>
            <h2 className="text-2xl font-bold text-white font-outfit mt-1">
              INFOSYS SP READINESS SCORE: <span className="text-blue-400 font-mono">{readiness.overall}%</span>
            </h2>
            <p className="mt-1 text-xs text-zinc-400 font-inter">
              Weighted mathematical model. No meaningless random percentages. Calculated dynamically from real activity.
            </p>
          </div>

          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
            <span className="text-3xl font-extrabold font-mono">{readiness.overall}%</span>
          </div>
        </div>
      </div>

      {/* Grid of Component Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {components.map((comp, idx) => {
          const IconComp = comp.icon;
          return (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-[#1e2029] bg-[#121318] p-5 space-y-3"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400 font-semibold">{comp.title}</span>
                  <span className="rounded bg-[#09090b] px-2 py-0.5 text-[10px] font-mono text-zinc-500 border border-[#1e2029]">
                    Weight: {comp.weight}
                  </span>
                </div>

                <div className="mt-3 flex items-baseline justify-between">
                  <span className={`text-2xl font-extrabold font-mono text-white`}>
                    {comp.score}%
                  </span>
                  <div className={`p-1.5 rounded-lg bg-[#09090b] ${comp.color}`}>
                    <IconComp className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-2 h-2 w-full rounded-full bg-[#09090b] overflow-hidden border border-[#1e2029]">
                  <div
                    className={`h-2 rounded-full ${comp.barColor} transition-all duration-500`}
                    style={{ width: `${comp.score}%` }}
                  ></div>
                </div>
              </div>

              <div className="border-t border-[#1e2029] pt-2 text-[11px] text-zinc-400 font-inter">
                💡 <span className="text-zinc-300 font-semibold">Tip: </span>{comp.tip}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
