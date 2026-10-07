import React, { useState, useEffect } from 'react';
import { usePrep } from '../../context/PrepContext';
import { Clock, Play, Pause, RotateCcw, CheckCircle, AlertTriangle, ShieldCheck } from 'lucide-react';
import { TimedSession } from '../../types/prep';

export const TimedCodingMode: React.FC = () => {
  const { saveTimedSession, state } = usePrep();

  const [activeTestType, setActiveTestType] = useState<'30 MIN' | '45 MIN' | '60 MIN' | 'FULL MOCK' | null>(null);
  const [durationMinutes, setDurationMinutes] = useState(45);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(45 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [testFinished, setTestFinished] = useState(false);

  // Form result fields
  const [problemsSolved, setProblemsSolved] = useState(2);
  const [totalProblems, setTotalProblems] = useState(2);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [failedTestCases, setFailedTestCases] = useState(0);
  const [weakPatterns, setWeakPatterns] = useState('');

  // Countdown Interval
  useEffect(() => {
    let timer: any = null;
    if (isRunning && timeLeftSeconds > 0) {
      timer = setInterval(() => {
        setTimeLeftSeconds(prev => prev - 1);
      }, 1000);
    } else if (timeLeftSeconds === 0 && isRunning) {
      setIsRunning(false);
      setTestFinished(true);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeftSeconds]);

  const startTest = (type: '30 MIN' | '45 MIN' | '60 MIN' | 'FULL MOCK', mins: number) => {
    setActiveTestType(type);
    setDurationMinutes(mins);
    setTimeLeftSeconds(mins * 60);
    setIsRunning(true);
    setTestFinished(false);
  };

  const handleFinishSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeTestType) return;

    const timeUsedMins = Math.round((durationMinutes * 60 - timeLeftSeconds) / 60);
    const score = Math.round((problemsSolved / totalProblems) * 100);

    saveTimedSession({
      date: new Date().toISOString().split('T')[0],
      type: activeTestType,
      durationMinutes,
      timeUsedMinutes: Math.max(1, timeUsedMins),
      score,
      maxScore: 100,
      problemsSolved,
      totalProblems,
      accuracy: Math.round(((problemsSolved - failedTestCases * 0.2) / totalProblems) * 100),
      hintsUsed,
      failedTestCases,
      weakPatterns: weakPatterns.split(',').map(s => s.trim()).filter(Boolean)
    });

    setIsRunning(false);
    setActiveTestType(null);
    setTestFinished(false);
  };

  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-[#1e2029] bg-[#121318] p-5">
        <div>
          <h2 className="text-xl font-bold text-white font-outfit flex items-center gap-2">
            <span>TIMED CODING MODE</span>
            <span className="rounded bg-purple-500/10 px-2.5 py-0.5 text-xs font-mono text-purple-400 border border-purple-500/20">
              Pressure Simulation
            </span>
          </h2>
          <p className="mt-1 text-xs text-zinc-400 font-inter">
            Simulate real coding assessment constraints with strict countdown timers and performance scorecards.
          </p>
        </div>
      </div>

      {/* Active Timer Runner or Selection Screen */}
      {activeTestType ? (
        <div className="rounded-xl border border-purple-500/30 bg-[#121318] p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1e2029] pb-4">
            <div>
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">ACTIVE TIMED SET</span>
              <h3 className="text-2xl font-bold text-white font-outfit">{activeTestType} TIMED CODING SESSION</h3>
            </div>

            {/* Countdown Display */}
            <div className="flex items-center gap-3 bg-[#09090b] px-5 py-2.5 rounded-xl border border-purple-500/40">
              <Clock className="h-6 w-6 text-purple-400 animate-pulse" />
              <span className="text-4xl font-extrabold font-mono text-white tracking-wider">
                {formatTime(timeLeftSeconds)}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold text-white transition-all ${
                isRunning ? 'bg-amber-600 hover:bg-amber-500' : 'bg-emerald-600 hover:bg-emerald-500'
              }`}
            >
              {isRunning ? <><Pause className="h-4 w-4" /> Pause Timer</> : <><Play className="h-4 w-4" /> Resume Timer</>}
            </button>

            <button
              onClick={() => setTestFinished(true)}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-all"
            >
              <CheckCircle className="h-4 w-4" /> Complete & Submit
            </button>
          </div>

          {/* Post Test Submission Modal / Form */}
          {testFinished && (
            <div className="rounded-xl bg-[#09090b] p-5 border border-[#1e2029] space-y-4">
              <h4 className="text-base font-bold text-white font-outfit">Submit Session Evaluation</h4>
              <form onSubmit={handleFinishSubmit} className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400">Problems Solved</label>
                    <input
                      type="number"
                      min="0"
                      value={problemsSolved}
                      onChange={e => setProblemsSolved(parseInt(e.target.value) || 0)}
                      className="mt-1 w-full rounded bg-[#121318] border border-[#1e2029] p-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400">Total Problems</label>
                    <input
                      type="number"
                      min="1"
                      value={totalProblems}
                      onChange={e => setTotalProblems(parseInt(e.target.value) || 1)}
                      className="mt-1 w-full rounded bg-[#121318] border border-[#1e2029] p-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400">Hints Used</label>
                    <input
                      type="number"
                      min="0"
                      value={hintsUsed}
                      onChange={e => setHintsUsed(parseInt(e.target.value) || 0)}
                      className="mt-1 w-full rounded bg-[#121318] border border-[#1e2029] p-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400">Failed Test Cases</label>
                    <input
                      type="number"
                      min="0"
                      value={failedTestCases}
                      onChange={e => setFailedTestCases(parseInt(e.target.value) || 0)}
                      className="mt-1 w-full rounded bg-[#121318] border border-[#1e2029] p-2 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400">Weak Patterns Flagged (comma separated)</label>
                  <input
                    type="text"
                    placeholder="e.g. Sliding Window, Graph DFS"
                    value={weakPatterns}
                    onChange={e => setWeakPatterns(e.target.value)}
                    className="mt-1 w-full rounded bg-[#121318] border border-[#1e2029] p-2 text-xs text-white"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="submit"
                    className="rounded bg-emerald-600 px-5 py-2 text-xs font-bold text-white hover:bg-emerald-500"
                  >
                    Save Session Scorecard
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      ) : (
        /* Test Launcher Cards */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { type: '30 MIN', mins: 30, title: '30 MIN SPRINT', desc: '1 Medium problem focus. Quick pattern execution.' },
            { type: '45 MIN', mins: 45, title: '45 MIN SET', desc: '2 Medium problems. Ideal daily assessment practice.' },
            { type: '60 MIN', mins: 60, title: '60 MIN DEEP', desc: '1 Medium + 1 Hard problem under pressure.' },
            { type: 'FULL MOCK', mins: 90, title: 'FULL MOCK (90M)', desc: '3 Problems. Exact Infosys SP exam conditions.' }
          ].map((test) => (
            <div
              key={test.type}
              className="flex flex-col justify-between rounded-xl border border-[#1e2029] bg-[#121318] p-5 hover:border-purple-500/50 transition-all space-y-4"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-purple-400">{test.mins} MINS</span>
                  <Clock className="h-4 w-4 text-zinc-500" />
                </div>
                <h3 className="mt-2 text-lg font-bold text-white font-outfit">{test.title}</h3>
                <p className="mt-1 text-xs text-zinc-400 font-inter">{test.desc}</p>
              </div>

              <button
                onClick={() => startTest(test.type as any, test.mins)}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-purple-600/20 text-purple-300 border border-purple-500/30 py-2 text-xs font-bold hover:bg-purple-600 hover:text-white transition-all"
              >
                <Play className="h-3.5 w-3.5" />
                <span>START SESSION</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* History of Timed Sessions */}
      <div className="rounded-xl border border-[#1e2029] bg-[#121318] p-5">
        <h3 className="text-base font-bold text-white font-outfit mb-3">Timed Sessions History</h3>
        {state.timedSessions.length === 0 ? (
          <div className="p-4 text-center text-xs font-mono text-zinc-500">
            No timed sessions completed yet. Select a duration above to launch your first session!
          </div>
        ) : (
          <div className="divide-y divide-[#1e2029]">
            {state.timedSessions.map((s) => (
              <div key={s.id} className="py-3 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="font-bold text-white">{s.type}</span>
                  <span className="text-zinc-500 ml-2">• {s.date}</span>
                  <div className="text-zinc-400 text-[11px]">
                    Solved {s.problemsSolved}/{s.totalProblems} in {s.timeUsedMinutes}m | {s.hintsUsed} hints
                  </div>
                </div>
                <span className="text-sm font-bold text-emerald-400">{s.score}% Score</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
