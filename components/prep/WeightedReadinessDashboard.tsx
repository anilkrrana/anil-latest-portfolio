import React from 'react';
import { usePrep } from '../../context/PrepContext';
import { SDE_PILLARS } from '../../data/growthOSCurriculum';
import { Award, CheckCircle2, TrendingUp, AlertCircle, Info } from 'lucide-react';

export const WeightedReadinessDashboard: React.FC = () => {
  const { pillarReadiness } = usePrep();

  // Compute total readiness score
  const totalReadiness = Object.values(pillarReadiness).reduce(
    (acc, p) => acc + (p.contribution || 0),
    0
  );

  const roundedScore = Math.min(100, Math.max(0, Math.round(totalReadiness)));

  const getStatusBadge = (score: number) => {
    if (score >= 85) return { label: 'Target Readiness', color: 'text-emerald-400 bg-emerald-950/50 border-emerald-800' };
    if (score >= 65) return { label: 'Interview Ready', color: 'text-blue-400 bg-blue-950/50 border-blue-800' };
    if (score >= 40) return { label: 'Developing Competence', color: 'text-amber-400 bg-amber-950/50 border-amber-800' };
    if (score >= 15) return { label: 'Building Foundations', color: 'text-purple-400 bg-purple-950/50 border-purple-800' };
    return { label: 'Getting Started', color: 'text-zinc-400 bg-zinc-900 border-zinc-800' };
  };

  const status = getStatusBadge(roundedScore);

  return (
    <div className="rounded-xl border border-[#1e2029] bg-[#0d0e12] p-5 shadow-sm space-y-5">
      {/* Top Header & Composite Score */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1e2029] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-blue-400" />
            <h3 className="text-base font-bold font-outfit text-white">
              SDE-2 & Tier-1 Product Company Readiness
            </h3>
          </div>
          <p className="text-xs text-zinc-400 mt-1 font-inter">
            Weighted composite readiness across all 11 technical & behavioral engineering pillars.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-[#121318] p-3 rounded-xl border border-[#1e2029]">
          <div className="text-right">
            <div className="text-[10px] font-mono text-zinc-500 uppercase">Composite Score</div>
            <div className="text-2xl font-bold font-mono text-white">
              {roundedScore}%
            </div>
          </div>
          <div className={`px-2.5 py-1 text-xs font-mono font-medium rounded-lg border ${status.color}`}>
            {status.label}
          </div>
        </div>
      </div>

      {/* Formula Note */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-950/20 border border-blue-900/30 text-xs font-mono text-blue-300">
        <Info className="h-4 w-4 shrink-0 text-blue-400" />
        <span>
          Scoring Formula: Overall Readiness = Σ (Pillar Mastery × Pillar Weight) / 100. Untouched topics contribute 0%.
        </span>
      </div>

      {/* 11 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Object.entries(pillarReadiness).map(([key, pillar]) => {
          return (
            <div
              key={key}
              className="rounded-lg border border-[#1e2029] bg-[#121318] p-3 hover:border-zinc-700 transition-all"
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div className="text-xs font-mono font-semibold text-zinc-200">
                  {pillar.name}
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-400">
                  {pillar.weight}% wt
                </span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1">
                <span>Mastery: {pillar.score}%</span>
                <span className="text-emerald-400 font-semibold">+{pillar.contribution}% pts</span>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-[#181a22] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${pillar.score}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
