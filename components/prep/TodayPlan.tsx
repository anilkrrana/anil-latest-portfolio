import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { CheckSquare, Square, Plus, Trash2, Code, Coffee, Clock, MessageSquare } from 'lucide-react';
import { DailyTask } from '../../types/prep';

export const TodayPlan: React.FC = () => {
  const { state, toggleDailyTask, addDailyTask, deleteDailyTask } = usePrep();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCategory, setNewCategory] = useState<DailyTask['category']>('DSA');
  const [newText, setNewText] = useState('');

  const categories: DailyTask['category'][] = ['DSA', 'Java', 'Timed Practice', 'Interview', 'Other'];

  const getCategoryIcon = (cat: DailyTask['category']) => {
    switch (cat) {
      case 'DSA': return <Code className="h-3.5 w-3.5 text-blue-400" />;
      case 'Java': return <Coffee className="h-3.5 w-3.5 text-amber-400" />;
      case 'Timed Practice': return <Clock className="h-3.5 w-3.5 text-purple-400" />;
      case 'Interview': return <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />;
      default: return <CheckSquare className="h-3.5 w-3.5 text-zinc-400" />;
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newText.trim()) return;
    addDailyTask(newCategory, newText.trim());
    setNewText('');
    setShowAddForm(false);
  };

  return (
    <div className="rounded-xl border border-[#1e2029] bg-[#121318] p-5">
      <div className="flex items-center justify-between border-b border-[#1e2029] pb-4">
        <div>
          <h3 className="text-base font-bold text-white font-outfit flex items-center gap-2">
            <span>TODAY&apos;S PREPARATION PLAN</span>
            <span className="rounded bg-blue-500/10 px-2 py-0.5 text-xs font-mono text-blue-400 border border-blue-500/20">
              {state.dailyTasks.filter(t => t.completed).length}/{state.dailyTasks.length} Done
            </span>
          </h3>
          <p className="mt-0.5 text-xs text-zinc-400 font-inter">
            Check off items as you complete them throughout the day.
          </p>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-1.5 rounded-lg border border-[#1e2029] bg-[#1a1c24] px-3 py-1.5 text-xs font-medium text-white hover:bg-zinc-800 transition-all"
        >
          <Plus className="h-3.5 w-3.5 text-blue-400" />
          <span>Add Task</span>
        </button>
      </div>

      {/* Add Task Form */}
      {showAddForm && (
        <form onSubmit={handleAdd} className="mt-4 flex flex-col sm:flex-row gap-2 rounded-lg bg-[#09090b] p-3 border border-[#1e2029]">
          <select
            value={newCategory}
            onChange={e => setNewCategory(e.target.value as DailyTask['category'])}
            className="rounded bg-[#121318] border border-[#1e2029] px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500"
          >
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Enter task description..."
            value={newText}
            onChange={e => setNewText(e.target.value)}
            className="flex-1 rounded bg-[#121318] border border-[#1e2029] px-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-blue-500 transition-all"
          >
            Save
          </button>
        </form>
      )}

      {/* Tasks Grouped by Category */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        {categories.map(cat => {
          const tasksInCat = state.dailyTasks.filter(t => t.category === cat);
          if (tasksInCat.length === 0) return null;

          return (
            <div key={cat} className="rounded-lg bg-[#09090b] p-3 border border-[#1e2029]">
              <div className="flex items-center gap-2 border-b border-[#1e2029] pb-2 text-xs font-mono font-semibold text-zinc-400">
                {getCategoryIcon(cat)}
                <span className="uppercase">{cat}</span>
                <span className="ml-auto text-[10px] text-zinc-500">
                  {tasksInCat.filter(t => t.completed).length}/{tasksInCat.length}
                </span>
              </div>

              <ul className="mt-2.5 space-y-2">
                {tasksInCat.map(task => (
                  <li
                    key={task.id}
                    className={`group flex items-center justify-between rounded p-2 text-xs transition-all ${
                      task.completed ? 'bg-emerald-950/20 text-zinc-400 line-through' : 'bg-[#121318] text-white hover:border-zinc-700'
                    } border border-transparent`}
                  >
                    <button
                      onClick={() => toggleDailyTask(task.id)}
                      className="flex items-center gap-2.5 text-left flex-1"
                    >
                      {task.completed ? (
                        <CheckCircle2Icon className="h-4 w-4 text-emerald-400 shrink-0" />
                      ) : (
                        <Square className="h-4 w-4 text-zinc-500 shrink-0 group-hover:text-blue-400" />
                      )}
                      <span className={task.completed ? 'text-zinc-500 line-through font-inter' : 'text-zinc-200 font-inter font-medium'}>
                        {task.text}
                      </span>
                    </button>

                    <button
                      onClick={() => deleteDailyTask(task.id)}
                      className="opacity-0 group-hover:opacity-100 text-zinc-500 hover:text-rose-400 p-1 transition-all"
                      title="Delete task"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Helper CheckIcon
const CheckCircle2Icon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 10 11-18 0 9 9 0 0118 0z" />
  </svg>
);
