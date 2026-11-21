import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Clock, Plus } from 'lucide-react';

interface StudyTimerWidgetProps {
  onLogSession: (durationMinutes: number) => void;
}

export const StudyTimerWidget: React.FC<StudyTimerWidgetProps> = ({ onLogSession }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Restore timer from localStorage if active
  useEffect(() => {
    try {
      const savedTimer = localStorage.getItem('anil_growth_os_timer');
      if (savedTimer) {
        const parsed = JSON.parse(savedTimer);
        if (parsed.isActive && parsed.lastUpdated) {
          const elapsed = Math.floor((Date.now() - parsed.lastUpdated) / 1000) + (parsed.seconds || 0);
          setSeconds(elapsed);
          setIsActive(true);
        } else if (parsed.seconds) {
          setSeconds(parsed.seconds);
        }
      }
    } catch (e) {}
  }, []);

  // Timer interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prev => {
          const next = prev + 1;
          try {
            localStorage.setItem('anil_growth_os_timer', JSON.stringify({
              seconds: next,
              isActive: true,
              lastUpdated: Date.now()
            }));
          } catch (e) {}
          return next;
        });
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
      try {
        localStorage.setItem('anil_growth_os_timer', JSON.stringify({
          seconds,
          isActive: false,
          lastUpdated: Date.now()
        }));
      } catch (e) {}
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
    try {
      localStorage.removeItem('anil_growth_os_timer');
    } catch (e) {}
  };

  const handleLogClick = () => {
    const mins = Math.max(5, Math.round(seconds / 60));
    onLogSession(mins);
    resetTimer();
  };

  const formatTime = () => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center gap-2 rounded-xl border border-[#1e2029] bg-[#121318] px-3 py-1.5 shadow-sm">
      <div className="flex items-center gap-1.5 text-zinc-400">
        <Clock className={`h-3.5 w-3.5 ${isActive ? 'text-emerald-400 animate-pulse' : 'text-zinc-500'}`} />
        <span className="font-mono text-xs font-semibold text-white tracking-wider">
          {formatTime()}
        </span>
      </div>

      <div className="flex items-center gap-1 pl-1 border-l border-[#1e2029]">
        <button
          onClick={toggleTimer}
          className={`p-1 rounded-md transition-all ${
            isActive
              ? 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30'
              : 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30'
          }`}
          title={isActive ? 'Pause Timer' : 'Start Focus Timer'}
        >
          {isActive ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
        </button>

        <button
          onClick={resetTimer}
          className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
          title="Reset Timer"
        >
          <RotateCcw className="h-3 w-3" />
        </button>

        {seconds >= 60 && (
          <button
            onClick={handleLogClick}
            className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-600/30 text-blue-300 border border-blue-500/40 text-[10px] font-mono hover:bg-blue-600/50 transition-all"
            title="Log this study session into the heatmap"
          >
            <Plus className="h-3 w-3" />
            <span>Log {Math.round(seconds / 60)}m</span>
          </button>
        )}
      </div>
    </div>
  );
};
