import React, { useState, useEffect } from 'react';
import { usePrep } from '../../context/PrepContext';
import { ShieldAlert, Play, Clock, CheckCircle2, AlertTriangle, Trophy } from 'lucide-react';
import { MockTest } from '../../types/prep';

export const MockAssessmentMode: React.FC = () => {
  const { saveMockTest, state } = usePrep();

  const [inMock, setInMock] = useState(false);
  const [mockTitle, setMockTitle] = useState('INFOSYS SP MOCK #' + (state.mockTests.length + 1));
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(90 * 60);
  const [isRunning, setIsRunning] = useState(false);

  // Question statuses
  const [q1Status, setQ1Status] = useState<'Solved' | 'Partial' | 'Failed'>('Solved');
  const [q2Status, setQ2Status] = useState<'Solved' | 'Partial' | 'Failed'>('Solved');
  const [q3Status, setQ3Status] = useState<'Solved' | 'Partial' | 'Failed'>('Partial');
  const [notes, setNotes] = useState('');

  // Countdown timer
  useEffect(() => {
    let timer: any = null;
    if (isRunning && timeLeftSeconds > 0) {
      timer = setInterval(() => setTimeLeftSeconds(prev => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeftSeconds]);

  const handleStart = () => {
    setInMock(true);
    setTimeLeftSeconds(90 * 60);
    setIsRunning(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let score = 0;
    if (q1Status === 'Solved') score += 100; else if (q1Status === 'Partial') score += 50;
    if (q2Status === 'Solved') score += 100; else if (q2Status === 'Partial') score += 50;
    if (q3Status === 'Solved') score += 100; else if (q3Status === 'Partial') score += 50;

    const timeTakenMins = Math.round((90 * 60 - timeLeftSeconds) / 60);

    saveMockTest({
      title: mockTitle,
      date: new Date().toISOString().split('T')[0],
      score,
      maxScore: 300,
      q1Status,
      q2Status,
      q3Status,
      timeTakenMinutes: Math.max(1, timeTakenMins),
      totalTimeMinutes: 90,
      notes: notes.trim() || 'Completed under timed conditions.'
    });

    setInMock(false);
    setIsRunning(false);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-[#1e2029] bg-[#121318] p-5">
        <div>
          <h2 className="text-xl font-bold text-white font-outfit flex items-center gap-2">
            <span>INFOSYS SP MOCK ASSESSMENT SIMULATOR</span>
            <span className="rounded bg-rose-500/10 px-2.5 py-0.5 text-xs font-mono text-rose-400 border border-rose-500/20">
              Strict Exam Mode
            </span>
          </h2>
          <p className="mt-1 text-xs text-zinc-400 font-inter">
            Exact 3-question 90-minute Infosys SP coding test simulation. No hints allowed.
          </p>
        </div>
      </div>

      {/* Active Mock Simulation */}
      {inMock ? (
        <div className="rounded-xl border border-rose-500/40 bg-[#121318] p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1e2029] pb-4">
            <div>
              <span className="text-xs font-mono text-rose-400">STRICT EXAM IN PROGRESS</span>
              <h3 className="text-2xl font-bold text-white font-outfit">{mockTitle}</h3>
            </div>

            <div className="flex items-center gap-3 bg-[#09090b] px-5 py-2.5 rounded-xl border border-rose-500/40">
              <Clock className="h-6 w-6 text-rose-400 animate-pulse" />
              <span className="text-4xl font-extrabold font-mono text-white">
                {formatTime(timeLeftSeconds)}
              </span>
            </div>
          </div>

          {/* 3 Questions Outline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg bg-[#09090b] p-4 border border-[#1e2029]">
              <div className="text-xs font-mono text-emerald-400 font-bold">QUESTION 1 (100 PTS)</div>
              <div className="text-sm font-bold text-white mt-1">Easy / Medium DSA</div>
              <div className="text-xs text-zinc-400 mt-1 font-inter">Array, HashMap or String pattern lookup. Target time: 20 mins.</div>
            </div>

            <div className="rounded-lg bg-[#09090b] p-4 border border-[#1e2029]">
              <div className="text-xs font-mono text-amber-400 font-bold">QUESTION 2 (100 PTS)</div>
              <div className="text-sm font-bold text-white mt-1">Medium DSA</div>
              <div className="text-xs text-zinc-400 mt-1 font-inter">Two Pointers, Sliding Window or Binary Search. Target time: 30 mins.</div>
            </div>

            <div className="rounded-lg bg-[#09090b] p-4 border border-[#1e2029]">
              <div className="text-xs font-mono text-rose-400 font-bold">QUESTION 3 (100 PTS)</div>
              <div className="text-sm font-bold text-white mt-1">Medium / Hard DSA</div>
              <div className="text-xs text-zinc-400 mt-1 font-inter">Trees, Graph BFS/DFS or Dynamic Programming. Target time: 40 mins.</div>
            </div>
          </div>

          {/* Scorecard Form */}
          <form onSubmit={handleSubmit} className="rounded-xl bg-[#09090b] p-5 border border-[#1e2029] space-y-4">
            <h4 className="text-sm font-bold text-white font-mono">Exam Completion Scorecard</h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400">Q1 Result</label>
                <select value={q1Status} onChange={e => setQ1Status(e.target.value as any)} className="mt-1 w-full bg-[#121318] text-xs text-white border border-[#1e2029] p-2 rounded">
                  <option value="Solved">Solved (100 pts)</option>
                  <option value="Partial">Partial (50 pts)</option>
                  <option value="Failed">Failed (0 pts)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400">Q2 Result</label>
                <select value={q2Status} onChange={e => setQ2Status(e.target.value as any)} className="mt-1 w-full bg-[#121318] text-xs text-white border border-[#1e2029] p-2 rounded">
                  <option value="Solved">Solved (100 pts)</option>
                  <option value="Partial">Partial (50 pts)</option>
                  <option value="Failed">Failed (0 pts)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400">Q3 Result</label>
                <select value={q3Status} onChange={e => setQ3Status(e.target.value as any)} className="mt-1 w-full bg-[#121318] text-xs text-white border border-[#1e2029] p-2 rounded">
                  <option value="Solved">Solved (100 pts)</option>
                  <option value="Partial">Partial (50 pts)</option>
                  <option value="Failed">Failed (0 pts)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400">Exam Notes & Weak Points</label>
              <textarea
                rows={2}
                placeholder="Notes on performance, bottlenecks, TLE errors..."
                value={notes}
                onChange={e => setNotes(e.target.value)}
                className="mt-1 w-full bg-[#121318] text-xs text-white border border-[#1e2029] p-2 rounded"
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-rose-600 text-white font-bold text-xs py-2.5 rounded hover:bg-rose-500">
              Submit & Log Mock Result
            </button>
          </form>
        </div>
      ) : (
        /* Launcher Banner */
        <div className="rounded-xl border border-rose-500/20 bg-gradient-to-r from-rose-950/30 to-[#121318] p-6 text-center space-y-4">
          <Trophy className="h-12 w-12 text-rose-400 mx-auto" />
          <h3 className="text-2xl font-bold text-white font-outfit">Ready for Infosys SP Mock #1?</h3>
          <p className="text-xs text-zinc-300 max-w-md mx-auto font-inter">
            90 minutes. 3 Problems (Easy/Med, Med, Med/Hard). No hints. Test your exact speed and accuracy under exam conditions.
          </p>
          <button
            onClick={handleStart}
            className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-6 py-3 text-sm font-bold text-white hover:bg-rose-500 transition-all shadow-xl shadow-rose-600/20"
          >
            <Play className="h-4 w-4" />
            <span>START FULL INFOSYS SP MOCK EXAM</span>
          </button>
        </div>
      )}

      {/* Mock History */}
      <div className="rounded-xl border border-[#1e2029] bg-[#121318] p-5">
        <h3 className="text-base font-bold text-white font-outfit mb-3">Mock Test History</h3>
        {state.mockTests.length === 0 ? (
          <div className="p-4 text-center text-xs font-mono text-zinc-500">
            No mock tests recorded yet. Take your first simulation above!
          </div>
        ) : (
          <div className="divide-y divide-[#1e2029]">
            {state.mockTests.map((m) => (
              <div key={m.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                <div>
                  <div className="font-bold text-white">{m.title} <span className="text-zinc-500 font-normal">({m.date})</span></div>
                  <div className="text-zinc-400 text-[11px] mt-0.5">
                    Q1: {m.q1Status} | Q2: {m.q2Status} | Q3: {m.q3Status} • {m.timeTakenMinutes} mins taken
                  </div>
                  <div className="text-zinc-500 text-[11px] italic mt-0.5">{m.notes}</div>
                </div>

                <div className="text-right">
                  <div className="text-lg font-extrabold text-emerald-400">{m.score}/{m.maxScore}</div>
                  <div className="text-[10px] text-zinc-500">{Math.round((m.score / m.maxScore) * 100)}% Accuracy</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
