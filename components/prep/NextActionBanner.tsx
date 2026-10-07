import React from 'react';
import { usePrep } from '../../context/PrepContext';
import { Compass, ArrowRight } from 'lucide-react';

interface NextActionProps {
  onNavigateTab?: (tab: string) => void;
}

export const NextActionBanner: React.FC<NextActionProps> = ({ onNavigateTab }) => {
  const { nextAction } = usePrep();

  return (
    <div className="relative overflow-hidden rounded-xl border border-blue-500/30 bg-gradient-to-r from-blue-950/40 via-[#121318] to-emerald-950/30 p-4 shadow-md">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30">
            <Compass className="h-5 w-5 animate-spin-slow" />
          </div>
          <div>
            <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-400">
              NEXT RECOMMENDED ACTION
            </div>
            <div className="mt-0.5 text-sm sm:text-base font-semibold text-white font-outfit">
              {nextAction}
            </div>
          </div>
        </div>

        {onNavigateTab && (
          <button
            onClick={() => {
              if (nextAction.includes('Revise')) onNavigateTab('revision');
              else if (nextAction.includes('task')) onNavigateTab('overview');
              else if (nextAction.includes('Mock')) onNavigateTab('mock-tests');
              else if (nextAction.includes('Practice') || nextAction.includes('Problem')) onNavigateTab('problems');
              else onNavigateTab('timed-coding');
            }}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
          >
            <span>TAKE ACTION</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
