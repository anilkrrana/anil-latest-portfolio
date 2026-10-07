import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { InterviewQuestion } from '../../types/prep';
import { MessageSquare, CheckCircle2, Plus, Search, HelpCircle } from 'lucide-react';

export const InterviewMode: React.FC = () => {
  const { state, updateInterviewQ, addInterviewQ } = usePrep();
  
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [showAddModal, setShowAddModal] = useState(false);

  const [newCategory, setNewCategory] = useState<InterviewQuestion['category']>('Java');
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const categories: InterviewQuestion['category'][] = [
    'Java', 'DSA', 'Spring Boot', 'SQL', 'DBMS', 'OS', 'Networking', 'Projects', 'Resume', 'HR'
  ];

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;
    addInterviewQ(newCategory, newQuestion.trim(), newAnswer.trim() || undefined);
    setNewQuestion('');
    setNewAnswer('');
    setShowAddModal(false);
  };

  const filteredQuestions = state.interviewQuestions.filter((q) => {
    const matchesCat = selectedCategory === 'ALL' || q.category === selectedCategory;
    const matchesStat = selectedStatus === 'ALL' || q.status === selectedStatus;
    return matchesCat && matchesStat;
  });

  const getStatusBadge = (status: InterviewQuestion['status']) => {
    switch (status) {
      case 'Confident': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Practiced': return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Needs Revision': return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default: return 'bg-zinc-800 text-zinc-400 border-zinc-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-[#1e2029] bg-[#121318] p-5">
        <div>
          <h2 className="text-xl font-bold text-white font-outfit flex items-center gap-2">
            <span>TECHNICAL INTERVIEW QUESTION BANK</span>
            <span className="rounded bg-emerald-500/10 px-2.5 py-0.5 text-xs font-mono text-emerald-400 border border-emerald-500/20">
              10 Domain Categories
            </span>
          </h2>
          <p className="mt-1 text-xs text-zinc-400 font-inter">
            Practice conceptual questions for Infosys SP technical interview rounds.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/20"
        >
          <Plus className="h-4 w-4" />
          <span>ADD QUESTION</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 rounded-xl border border-[#1e2029] bg-[#121318] p-3">
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="rounded-lg bg-[#09090b] border border-[#1e2029] px-3 py-1.5 text-xs text-zinc-300 focus:outline-none"
        >
          <option value="ALL">All Categories ({state.interviewQuestions.length})</option>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          value={selectedStatus}
          onChange={e => setSelectedStatus(e.target.value)}
          className="rounded-lg bg-[#09090b] border border-[#1e2029] px-3 py-1.5 text-xs text-zinc-300 focus:outline-none"
        >
          <option value="ALL">All Statuses</option>
          <option value="Not Practiced">Not Practiced</option>
          <option value="Practiced">Practiced</option>
          <option value="Confident">Confident</option>
          <option value="Needs Revision">Needs Revision</option>
        </select>
      </div>

      {/* Question Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredQuestions.map((q) => (
          <div
            key={q.id}
            className="flex flex-col justify-between rounded-xl border border-[#1e2029] bg-[#121318] p-4 space-y-3 hover:border-zinc-700 transition-all"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded bg-[#09090b] px-2 py-0.5 text-[11px] font-mono text-emerald-400 border border-[#1e2029]">
                  {q.category}
                </span>

                <select
                  value={q.status}
                  onChange={(e) => updateInterviewQ(q.id, { status: e.target.value as any })}
                  className={`rounded border px-2 py-0.5 text-xs font-mono font-medium focus:outline-none cursor-pointer ${getStatusBadge(q.status)}`}
                >
                  <option value="Not Practiced" className="bg-[#121318] text-white">Not Practiced</option>
                  <option value="Practiced" className="bg-[#121318] text-white">Practiced</option>
                  <option value="Confident" className="bg-[#121318] text-white">Confident</option>
                  <option value="Needs Revision" className="bg-[#121318] text-white">Needs Revision</option>
                </select>
              </div>

              <h3 className="mt-3 text-sm font-bold text-white font-outfit leading-snug">
                {q.question}
              </h3>

              {q.answerSnippet && (
                <div className="mt-3 rounded-lg bg-[#09090b] p-3 border border-[#1e2029] text-xs font-mono text-zinc-300">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Key Concept Answer</div>
                  {q.answerSnippet}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-xl border border-[#1e2029] bg-[#121318] p-6 space-y-4">
            <h3 className="text-lg font-bold text-white font-outfit">Add Interview Question</h3>
            <form onSubmit={handleCreate} className="space-y-3">
              <div>
                <label className="block text-xs font-mono text-zinc-400">Category</label>
                <select
                  value={newCategory}
                  onChange={e => setNewCategory(e.target.value as any)}
                  className="mt-1 w-full rounded bg-[#09090b] border border-[#1e2029] p-2 text-xs text-white"
                >
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400">Question *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter interview question..."
                  value={newQuestion}
                  onChange={e => setNewQuestion(e.target.value)}
                  className="mt-1 w-full rounded bg-[#09090b] border border-[#1e2029] p-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400">Answer Key Concept / Key Points</label>
                <textarea
                  rows={3}
                  placeholder="Bullet points or key technical terms..."
                  value={newAnswer}
                  onChange={e => setNewAnswer(e.target.value)}
                  className="mt-1 w-full rounded bg-[#09090b] border border-[#1e2029] p-2 text-xs text-white"
                ></textarea>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowAddModal(false)} className="px-3 py-1.5 text-xs text-zinc-400">Cancel</button>
                <button type="submit" className="rounded bg-emerald-600 px-4 py-1.5 text-xs font-bold text-white">Save Question</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
