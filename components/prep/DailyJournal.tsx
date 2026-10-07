import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { BookOpen, Plus, Calendar, Save, Trash2 } from 'lucide-react';

export const DailyJournal: React.FC = () => {
  const { state, addJournalEntry } = usePrep();
  const todayStr = new Date().toISOString().split('T')[0];

  const [whatILearned, setWhatILearned] = useState('');
  const [problemsSolvedText, setProblemsSolvedText] = useState('');
  const [struggledWith, setStruggledWith] = useState('');
  const [mistakes, setMistakes] = useState('');
  const [tomorrowPriority, setTomorrowPriority] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatILearned.trim()) return;

    addJournalEntry({
      date: todayStr,
      whatILearned: whatILearned.trim(),
      problemsSolved: problemsSolvedText.trim(),
      struggledWith: struggledWith.trim(),
      mistakes: mistakes.trim(),
      tomorrowPriority: tomorrowPriority.trim()
    });

    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-[#1e2029] bg-[#121318] p-5">
        <div>
          <h2 className="text-xl font-bold text-white font-outfit flex items-center gap-2">
            <span>DAILY PREPARATION JOURNAL</span>
            <span className="rounded bg-blue-500/10 px-2.5 py-0.5 text-xs font-mono text-blue-400 border border-blue-500/20">
              End of Day Reflection
            </span>
          </h2>
          <p className="mt-1 text-xs text-zinc-400 font-inter">
            Log daily takeaways, technical insights, struggles, mistakes, and tomorrow&apos;s top priorities.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Card */}
        <div className="lg:col-span-2 rounded-xl border border-[#1e2029] bg-[#121318] p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-[#1e2029] pb-3">
            <h3 className="text-base font-bold text-white font-outfit flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-400" />
              <span>Today&apos;s Log Entry ({todayStr})</span>
            </h3>
            {isSaved && <span className="text-xs font-mono text-emerald-400">✓ Saved!</span>}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
            <div>
              <label className="block text-zinc-400 mb-1">What I Learned Today *</label>
              <textarea
                rows={2}
                required
                placeholder="Key concepts, algorithms, or framework insights..."
                value={whatILearned}
                onChange={e => setWhatILearned(e.target.value)}
                className="w-full rounded-lg bg-[#09090b] border border-[#1e2029] p-2.5 text-white focus:outline-none focus:border-blue-500 font-inter"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-zinc-400 mb-1">Problems Solved</label>
                <input
                  type="text"
                  placeholder="e.g. Two Sum, Group Anagrams"
                  value={problemsSolvedText}
                  onChange={e => setProblemsSolvedText(e.target.value)}
                  className="w-full rounded-lg bg-[#09090b] border border-[#1e2029] p-2.5 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-zinc-400 mb-1">What I Struggled With</label>
                <input
                  type="text"
                  placeholder="e.g. Graph edge cases, TLE"
                  value={struggledWith}
                  onChange={e => setStruggledWith(e.target.value)}
                  className="w-full rounded-lg bg-[#09090b] border border-[#1e2029] p-2.5 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 mb-1">Mistakes &amp; Takeaways</label>
              <textarea
                rows={2}
                placeholder="Syntax traps, off-by-one errors, space complexity oversights..."
                value={mistakes}
                onChange={e => setMistakes(e.target.value)}
                className="w-full rounded-lg bg-[#09090b] border border-[#1e2029] p-2.5 text-white focus:outline-none focus:border-blue-500 font-inter"
              ></textarea>
            </div>

            <div>
              <label className="block text-zinc-400 mb-1">Tomorrow&apos;s Priority Focus</label>
              <input
                type="text"
                placeholder="e.g. Binary Search space reduction + 45-min timed set"
                value={tomorrowPriority}
                onChange={e => setTomorrowPriority(e.target.value)}
                className="w-full rounded-lg bg-[#09090b] border border-[#1e2029] p-2.5 text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-bold text-white hover:bg-blue-500 transition-all"
            >
              <Save className="h-4 w-4" />
              <span>Save Today&apos;s Journal Entry</span>
            </button>
          </form>
        </div>

        {/* History Column */}
        <div className="rounded-xl border border-[#1e2029] bg-[#121318] p-5 space-y-4">
          <h3 className="text-base font-bold text-white font-outfit border-b border-[#1e2029] pb-3">Journal Logs History</h3>

          {state.journalEntries.length === 0 ? (
            <div className="p-4 text-center text-xs font-mono text-zinc-500">
              No daily entries saved yet. Fill out the form to log your first entry!
            </div>
          ) : (
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
              {state.journalEntries.map((j) => (
                <div key={j.id} className="rounded-lg bg-[#09090b] p-3.5 border border-[#1e2029] space-y-2 text-xs">
                  <div className="flex items-center justify-between font-mono font-bold text-blue-400 border-b border-[#1e2029] pb-1">
                    <span>{j.date}</span>
                  </div>
                  <div className="text-zinc-300 font-inter">
                    <span className="font-mono text-zinc-500 font-semibold">Learned: </span>
                    {j.whatILearned}
                  </div>
                  {j.tomorrowPriority && (
                    <div className="text-emerald-400 font-mono text-[11px]">
                      🎯 Tomorrow: {j.tomorrowPriority}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
