import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { HeatmapDay } from '../../types/prep';
import { Flame, Trophy, Calendar, Clock, CheckCircle2, X } from 'lucide-react';

export const ActivityHeatmap: React.FC = () => {
  const { heatmapDays, streakStats } = usePrep();
  const [selectedDay, setSelectedDay] = useState<HeatmapDay | null>(null);

  // Group days into columns of 7 days (Sunday to Saturday or Monday to Sunday)
  const columns: HeatmapDay[][] = [];
  let currentCol: HeatmapDay[] = [];

  heatmapDays.forEach((day, index) => {
    currentCol.push(day);
    if (currentCol.length === 7 || index === heatmapDays.length - 1) {
      columns.push(currentCol);
      currentCol = [];
    }
  });

  // Calculate month labels at appropriate column offsets
  const monthLabels: { index: number; label: string }[] = [];
  let lastMonth = '';
  columns.forEach((col, colIdx) => {
    if (col.length > 0) {
      const d = new Date(col[0].date);
      const monthName = d.toLocaleString('default', { month: 'short' });
      if (monthName !== lastMonth) {
        monthLabels.push({ index: colIdx, label: monthName });
        lastMonth = monthName;
      }
    }
  });

  const getLevelColor = (level: 0 | 1 | 2 | 3) => {
    switch (level) {
      case 3:
        return 'bg-emerald-400 border-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.4)]';
      case 2:
        return 'bg-emerald-600 border-emerald-500';
      case 1:
        return 'bg-emerald-900/60 border-emerald-800/80';
      case 0:
      default:
        return 'bg-[#14151b] border-[#1e2029] hover:border-zinc-700';
    }
  };

  return (
    <div className="rounded-xl border border-[#1e2029] bg-[#0d0e12] p-5 shadow-sm">
      {/* Top Header Metrics */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#1e2029] pb-4 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-zinc-300">
              Learning Activity & Consistency Engine
            </h3>
          </div>
          <p className="text-xs text-zinc-500 mt-0.5 font-inter">
            Genuine preparation records over the last 365 calendar days
          </p>
        </div>

        {/* Quick Streak Cards */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121318] border border-[#1e2029]">
            <Flame className="h-4 w-4 text-amber-400" />
            <div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase">Current Streak</div>
              <div className="text-sm font-mono font-bold text-amber-300">
                {streakStats.currentStreak} {streakStats.currentStreak === 1 ? 'Day' : 'Days'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121318] border border-[#1e2029]">
            <Trophy className="h-4 w-4 text-emerald-400" />
            <div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase">Longest Streak</div>
              <div className="text-sm font-mono font-bold text-emerald-300">
                {streakStats.longestStreak} Days
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121318] border border-[#1e2029]">
            <Calendar className="h-4 w-4 text-blue-400" />
            <div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase">Active Days</div>
              <div className="text-sm font-mono font-bold text-blue-300">
                {streakStats.totalActiveDays} Days
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121318] border border-[#1e2029]">
            <Clock className="h-4 w-4 text-purple-400" />
            <div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase">Study Time</div>
              <div className="text-sm font-mono font-bold text-purple-300">
                {Math.floor(streakStats.totalStudyMinutes / 60)}h {streakStats.totalStudyMinutes % 60}m
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Heatmap Grid Container with responsive scrolling */}
      <div className="relative overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-800">
        <div className="min-w-[760px]">
          {/* Month Labels */}
          <div className="flex text-[10px] font-mono text-zinc-500 mb-1 pl-6">
            {monthLabels.map((m, idx) => (
              <span
                key={idx}
                style={{ marginLeft: idx === 0 ? `${m.index * 13}px` : `${(m.index - (monthLabels[idx - 1]?.index || 0)) * 13 - 18}px` }}
              >
                {m.label}
              </span>
            ))}
          </div>

          <div className="flex items-start gap-1">
            {/* Day of Week Labels */}
            <div className="flex flex-col gap-[3px] text-[9px] font-mono text-zinc-600 pr-1 select-none">
              <span className="h-2.5">Sun</span>
              <span className="h-2.5">Mon</span>
              <span className="h-2.5">Tue</span>
              <span className="h-2.5">Wed</span>
              <span className="h-2.5">Thu</span>
              <span className="h-2.5">Fri</span>
              <span className="h-2.5">Sat</span>
            </div>

            {/* Weeks Columns */}
            <div className="flex gap-[3px]">
              {columns.map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-[3px]">
                  {col.map((day) => {
                    const isSelected = selectedDay?.date === day.date;
                    return (
                      <button
                        key={day.date}
                        onClick={() => setSelectedDay(day)}
                        className={`h-2.5 w-2.5 rounded-[2px] border transition-all ${getLevelColor(day.level)} ${
                          isSelected ? 'ring-2 ring-blue-400 scale-125 z-10' : ''
                        }`}
                        title={`${day.date}: ${day.totalMinutes}m study, ${day.problemsSolved} problems`}
                        aria-label={`Activity for ${day.date}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Legend & Selected Day Inspection Details */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#1e2029]">
        {/* Selected Day Details Panel */}
        {selectedDay ? (
          <div className="flex items-center gap-3 bg-[#121318] px-3 py-1.5 rounded-lg border border-[#1e2029] text-xs font-mono">
            <span className="font-semibold text-white">{selectedDay.date}:</span>
            {selectedDay.hasQualifyingWork ? (
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {selectedDay.totalMinutes} min studied · {selectedDay.problemsSolved} problems solved
                {selectedDay.categories.length > 0 && ` (${selectedDay.categories.join(', ')})`}
              </span>
            ) : (
              <span className="text-zinc-500">No activity logged for this date.</span>
            )}
            <button
              onClick={() => setSelectedDay(null)}
              className="ml-2 text-zinc-500 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ) : (
          <div className="text-xs font-mono text-zinc-500">
            Click on any day square to inspect session details and topics studied.
          </div>
        )}

        {/* Activity Level Legend */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 self-end">
          <span>Less</span>
          <span className="h-2.5 w-2.5 rounded-[2px] bg-[#14151b] border border-[#1e2029]" />
          <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-900/60 border border-emerald-800/80" />
          <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-600 border border-emerald-500" />
          <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-400 border border-emerald-300" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
};
