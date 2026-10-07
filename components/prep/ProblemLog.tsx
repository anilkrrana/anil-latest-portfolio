import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { Problem, Difficulty } from '../../types/prep';
import { Plus, Search, Filter, Trash2, CheckCircle2, AlertCircle, Clock, ExternalLink } from 'lucide-react';
import { PATTERN_LIBRARY } from '../../data/defaultPrepData';

export const ProblemLog: React.FC = () => {
  const { state, addProblem, deleteProblem, updateProblem } = usePrep();

  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTopic, setFilterTopic] = useState('ALL');
  const [filterDifficulty, setFilterDifficulty] = useState('ALL');
  const [filterPattern, setFilterPattern] = useState('ALL');
  const [filterIndependent, setFilterIndependent] = useState('ALL');
  const [filterRevision, setFilterRevision] = useState('ALL');

  // Form State
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('HashMap');
  const [pattern, setPattern] = useState('HashMap / Frequency Counting');
  const [difficulty, setDifficulty] = useState<Difficulty>('Medium');
  const [timeTaken, setTimeTaken] = useState(25);
  const [solvedIndependently, setSolvedIndependently] = useState(true);
  const [hintsRequired, setHintsRequired] = useState(0);
  const [mistakeNotes, setMistakeNotes] = useState('');
  const [revisionRequired, setRevisionRequired] = useState(false);
  const [url, setUrl] = useState('');

  const todayStr = new Date().toISOString().split('T')[0];

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    addProblem({
      name: name.trim(),
      date: todayStr,
      topic,
      pattern,
      difficulty,
      timeTakenMinutes: Number(timeTaken) || 20,
      solvedIndependently,
      hintsRequired: Number(hintsRequired) || 0,
      mistakeNotes: mistakeNotes.trim() || undefined,
      revisionRequired,
      nextRevisionDate: revisionRequired ? todayStr : undefined,
      url: url.trim() || undefined
    });

    // Reset Form
    setName('');
    setMistakeNotes('');
    setUrl('');
    setShowAddModal(false);
  };

  // Filter Problems
  const filteredProblems = state.problems.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.topic.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = filterTopic === 'ALL' || p.topic === filterTopic;
    const matchesDifficulty = filterDifficulty === 'ALL' || p.difficulty === filterDifficulty;
    const matchesPattern = filterPattern === 'ALL' || p.pattern === filterPattern;
    const matchesIndependent = filterIndependent === 'ALL' 
      ? true 
      : filterIndependent === 'INDEPENDENT' ? p.solvedIndependently : !p.solvedIndependently;
    const matchesRevision = filterRevision === 'ALL' 
      ? true 
      : filterRevision === 'NEEDS_REVISION' ? p.revisionRequired : !p.revisionRequired;

    return matchesSearch && matchesTopic && matchesDifficulty && matchesPattern && matchesIndependent && matchesRevision;
  });

  const uniqueTopics = Array.from(new Set(state.dsaTopics.map(t => t.name)));

  return (
    <div className="space-y-4">
      {/* Header & Controls */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-[#1e2029] bg-[#121318] p-5">
        <div>
          <h2 className="text-xl font-bold text-white font-outfit flex items-center gap-2">
            <span>PROBLEM LOG</span>
            <span className="rounded bg-blue-500/10 px-2.5 py-0.5 text-xs font-mono text-blue-400 border border-blue-500/20">
              {state.problems.length} Logged
            </span>
          </h2>
          <p className="mt-1 text-xs text-zinc-400 font-inter">
            Record time taken, hint usage, patterns, mistakes, and revision schedule.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
        >
          <Plus className="h-4 w-4" />
          <span>LOG NEW PROBLEM</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 rounded-xl border border-[#1e2029] bg-[#121318] p-3">
        <div className="flex flex-1 items-center gap-2 rounded-lg bg-[#09090b] px-3 py-1.5 border border-[#1e2029] min-w-[200px]">
          <Search className="h-3.5 w-3.5 text-zinc-400" />
          <input
            type="text"
            placeholder="Search problems..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-xs text-white placeholder-zinc-500 focus:outline-none"
          />
        </div>

        <select
          value={filterTopic}
          onChange={(e) => setFilterTopic(e.target.value)}
          className="rounded-lg bg-[#09090b] border border-[#1e2029] px-3 py-1.5 text-xs text-zinc-300 focus:outline-none"
        >
          <option value="ALL">All Topics</option>
          {uniqueTopics.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <select
          value={filterDifficulty}
          onChange={(e) => setFilterDifficulty(e.target.value)}
          className="rounded-lg bg-[#09090b] border border-[#1e2029] px-3 py-1.5 text-xs text-zinc-300 focus:outline-none"
        >
          <option value="ALL">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <select
          value={filterIndependent}
          onChange={(e) => setFilterIndependent(e.target.value)}
          className="rounded-lg bg-[#09090b] border border-[#1e2029] px-3 py-1.5 text-xs text-zinc-300 focus:outline-none"
        >
          <option value="ALL">All Solve Types</option>
          <option value="INDEPENDENT">Independent Only</option>
          <option value="HINTED">Hint-Assisted Only</option>
        </select>

        <select
          value={filterRevision}
          onChange={(e) => setFilterRevision(e.target.value)}
          className="rounded-lg bg-[#09090b] border border-[#1e2029] px-3 py-1.5 text-xs text-zinc-300 focus:outline-none"
        >
          <option value="ALL">All Revision Status</option>
          <option value="NEEDS_REVISION">Needs Revision</option>
          <option value="CLEAN">Clean / Mastered</option>
        </select>
      </div>

      {/* Problem Table */}
      <div className="overflow-x-auto rounded-xl border border-[#1e2029] bg-[#121318]">
        {filteredProblems.length === 0 ? (
          <div className="p-8 text-center text-xs font-mono text-zinc-500">
            No problems match your current filters. Click &quot;LOG NEW PROBLEM&quot; to add your first solve!
          </div>
        ) : (
          <table className="w-full text-left text-xs font-inter">
            <thead className="bg-[#09090b] text-[11px] font-mono text-zinc-400 uppercase tracking-wider border-b border-[#1e2029]">
              <tr>
                <th className="px-4 py-3 font-semibold">Problem Name</th>
                <th className="px-4 py-3 font-semibold">Topic / Pattern</th>
                <th className="px-4 py-3 font-semibold">Diff</th>
                <th className="px-4 py-3 font-semibold text-right">Time</th>
                <th className="px-4 py-3 font-semibold text-center">Solve Type</th>
                <th className="px-4 py-3 font-semibold text-center">Hints</th>
                <th className="px-4 py-3 font-semibold">Mistake / Notes</th>
                <th className="px-4 py-3 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e2029]">
              {filteredProblems.map((p) => (
                <tr key={p.id} className="hover:bg-[#161821] transition-colors">
                  <td className="px-4 py-3 font-semibold text-white font-mono">
                    <div className="flex items-center gap-1.5">
                      <span>{p.name}</span>
                      {p.url && (
                        <a href={p.url} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-400">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono mt-0.5">{p.date}</div>
                  </td>

                  <td className="px-4 py-3 text-zinc-300 font-mono">
                    <div className="font-semibold text-blue-300">{p.topic}</div>
                    <div className="text-[10px] text-zinc-400 truncate max-w-[140px]">{p.pattern}</div>
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`rounded px-2 py-0.5 text-[10px] font-mono font-bold ${
                        p.difficulty === 'Easy'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : p.difficulty === 'Medium'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                      }`}
                    >
                      {p.difficulty}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-right font-mono text-zinc-200">
                    {p.timeTakenMinutes}m
                  </td>

                  <td className="px-4 py-3 text-center">
                    {p.solvedIndependently ? (
                      <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                        <CheckCircle2 className="h-3 w-3" /> Independent
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded bg-amber-500/10 px-2 py-0.5 text-[10px] font-mono text-amber-400 border border-amber-500/20">
                        Assisted
                      </span>
                    )}
                  </td>

                  <td className="px-4 py-3 text-center font-mono font-semibold">
                    <span className={p.hintsRequired > 0 ? 'text-amber-400' : 'text-zinc-400'}>
                      {p.hintsRequired}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-xs text-zinc-400 max-w-[200px] truncate">
                    {p.mistakeNotes || <span className="text-zinc-600">None</span>}
                  </td>

                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => updateProblem(p.id, { revisionRequired: !p.revisionRequired, nextRevisionDate: !p.revisionRequired ? todayStr : undefined })}
                        className={`rounded px-2 py-1 text-[10px] font-mono font-semibold transition-all ${
                          p.revisionRequired
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                            : 'bg-zinc-800 text-zinc-400 hover:text-white'
                        }`}
                        title="Toggle revision status"
                      >
                        {p.revisionRequired ? 'Needs Rev' : 'Clean'}
                      </button>

                      <button
                        onClick={() => deleteProblem(p.id)}
                        className="text-zinc-500 hover:text-rose-400 p-1"
                        title="Delete entry"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Add Problem Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-xl border border-[#1e2029] bg-[#121318] p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#1e2029] pb-3">
              <h3 className="text-lg font-bold text-white font-outfit">Log New Problem Solve</h3>
              <button onClick={() => setShowAddModal(false)} className="text-zinc-400 hover:text-white font-mono">✕</button>
            </div>

            <form onSubmit={handleCreate} className="space-y-3">
              <div>
                <label className="block text-xs font-mono text-zinc-400">Problem Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Subarray Sum Equals K"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-lg bg-[#09090b] border border-[#1e2029] px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-zinc-400">Topic</label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="mt-1 w-full rounded-lg bg-[#09090b] border border-[#1e2029] px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    {state.dsaTopics.map((t) => (
                      <option key={t.id} value={t.name}>{t.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400">Pattern</label>
                  <select
                    value={pattern}
                    onChange={(e) => setPattern(e.target.value)}
                    className="mt-1 w-full rounded-lg bg-[#09090b] border border-[#1e2029] px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    {PATTERN_LIBRARY.map((p) => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-mono text-zinc-400">Difficulty</label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                    className="mt-1 w-full rounded-lg bg-[#09090b] border border-[#1e2029] px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400">Time (mins)</label>
                  <input
                    type="number"
                    min="1"
                    value={timeTaken}
                    onChange={(e) => setTimeTaken(parseInt(e.target.value) || 0)}
                    className="mt-1 w-full rounded-lg bg-[#09090b] border border-[#1e2029] px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400">Hints Needed</label>
                  <input
                    type="number"
                    min="0"
                    value={hintsRequired}
                    onChange={(e) => setHintsRequired(parseInt(e.target.value) || 0)}
                    className="mt-1 w-full rounded-lg bg-[#09090b] border border-[#1e2029] px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-6 pt-1">
                <label className="flex items-center gap-2 text-xs font-mono text-zinc-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={solvedIndependently}
                    onChange={(e) => setSolvedIndependently(e.target.checked)}
                    className="accent-emerald-500"
                  />
                  <span>Solved Independently</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-mono text-zinc-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={revisionRequired}
                    onChange={(e) => setRevisionRequired(e.target.checked)}
                    className="accent-rose-500"
                  />
                  <span>Requires Revision</span>
                </label>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400">Mistake Notes / Key Takeaway</label>
                <textarea
                  rows={2}
                  placeholder="What mistake did you make or what insight unlocked the problem?"
                  value={mistakeNotes}
                  onChange={(e) => setMistakeNotes(e.target.value)}
                  className="mt-1 w-full rounded-lg bg-[#09090b] border border-[#1e2029] px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-2 border-t border-[#1e2029] pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="rounded-lg bg-zinc-800 px-4 py-2 text-xs font-semibold text-zinc-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500"
                >
                  Save Problem
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
