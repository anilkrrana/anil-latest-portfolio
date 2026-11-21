import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { StudyCategory, Difficulty } from '../../types/prep';
import { X, CheckCircle2, Clock, BookOpen, Link as LinkIcon, Plus } from 'lucide-react';

interface SessionLoggerModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDurationMinutes?: number;
  defaultCategory?: StudyCategory;
  defaultTopic?: string;
}

export const SessionLoggerModal: React.FC<SessionLoggerModalProps> = ({
  isOpen,
  onClose,
  defaultDurationMinutes = 45,
  defaultCategory = 'DSA',
  defaultTopic = ''
}) => {
  const { logStudySession, isAdmin } = usePrep();

  const todayStr = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(todayStr);
  const [durationMinutes, setDurationMinutes] = useState(defaultDurationMinutes);
  const [category, setCategory] = useState<StudyCategory>(defaultCategory);
  const [topic, setTopic] = useState(defaultTopic);
  const [taskType, setTaskType] = useState<'Theory' | 'Coding Practice' | 'System Design' | 'Revision' | 'Mock' | 'Project Build'>('Coding Practice');
  const [problemsSolved, setProblemsSolved] = useState<number>(1);
  const [difficulty, setDifficulty] = useState<Difficulty>('Medium');
  const [completionStatus, setCompletionStatus] = useState<'Completed' | 'In Progress' | 'Struggled'>('Completed');
  const [notes, setNotes] = useState('');
  const [resourceUrl, setResourceUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    logStudySession({
      date,
      durationMinutes: Number(durationMinutes) || 30,
      category,
      topic: topic.trim(),
      taskType,
      problemsSolved: Number(problemsSolved) || 0,
      difficulty,
      completionStatus,
      notes: notes.trim(),
      resourceUrl: resourceUrl.trim() || undefined
    });

    onClose();
  };

  const addTime = (mins: number) => {
    setDurationMinutes(prev => Math.max(5, prev + mins));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-2xl border border-[#1e2029] bg-[#0d0e12] p-6 shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#1e2029] pb-4 mb-5">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-emerald-400" />
            <h3 className="text-lg font-bold font-outfit text-white">Log Study Session</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-zinc-400 hover:bg-[#1a1c24] hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Session Date</label>
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                className="w-full rounded-lg border border-[#1e2029] bg-[#121318] px-3 py-2 text-xs font-mono text-white focus:border-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Duration (Minutes)</label>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="5"
                  max="720"
                  value={durationMinutes}
                  onChange={e => setDurationMinutes(Number(e.target.value))}
                  className="w-full rounded-lg border border-[#1e2029] bg-[#121318] px-3 py-2 text-xs font-mono text-white focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div className="flex items-center gap-1 mt-1">
                <button
                  type="button"
                  onClick={() => addTime(15)}
                  className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#181a22] text-zinc-400 hover:text-white"
                >
                  +15m
                </button>
                <button
                  type="button"
                  onClick={() => addTime(30)}
                  className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#181a22] text-zinc-400 hover:text-white"
                >
                  +30m
                </button>
                <button
                  type="button"
                  onClick={() => addTime(60)}
                  className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#181a22] text-zinc-400 hover:text-white"
                >
                  +60m
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Category</label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value as StudyCategory)}
                className="w-full rounded-lg border border-[#1e2029] bg-[#121318] px-3 py-2 text-xs font-mono text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="DSA">DSA (Striver TUF)</option>
                <option value="System Design">System Design (HLD)</option>
                <option value="LLD">Low-Level Design (LLD)</option>
                <option value="Core Java">Core Java & JVM</option>
                <option value="Backend">Backend & Kafka</option>
                <option value="Database">Database & SQL</option>
                <option value="Core CS">Core CS (OS, Networks)</option>
                <option value="Cloud">Cloud (AWS/Azure)</option>
                <option value="Behavioral">Behavioral (STAR)</option>
                <option value="Project">Project Build</option>
                <option value="Mock">Mock Assessment</option>
                <option value="Revision">Revision</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Task Type</label>
              <select
                value={taskType}
                onChange={e => setTaskType(e.target.value as any)}
                className="w-full rounded-lg border border-[#1e2029] bg-[#121318] px-3 py-2 text-xs font-mono text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="Coding Practice">Coding Practice</option>
                <option value="Theory">Theory & Deep Dive</option>
                <option value="System Design">Architecture Design</option>
                <option value="Revision">Spaced Revision</option>
                <option value="Mock">Mock Simulation</option>
                <option value="Project Build">Project Build</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">Topic or Problem Name</label>
            <input
              type="text"
              value={topic}
              onChange={e => setTopic(e.target.value)}
              placeholder="e.g. Subarray Sum Equals K or G1 Garbage Collector"
              className="w-full rounded-lg border border-[#1e2029] bg-[#121318] px-3 py-2 text-xs font-inter text-white placeholder-zinc-600 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Problems Solved</label>
              <input
                type="number"
                min="0"
                max="50"
                value={problemsSolved}
                onChange={e => setProblemsSolved(Number(e.target.value))}
                className="w-full rounded-lg border border-[#1e2029] bg-[#121318] px-3 py-2 text-xs font-mono text-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Difficulty</label>
              <select
                value={difficulty}
                onChange={e => setDifficulty(e.target.value as Difficulty)}
                className="w-full rounded-lg border border-[#1e2029] bg-[#121318] px-3 py-2 text-xs font-mono text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Status</label>
              <select
                value={completionStatus}
                onChange={e => setCompletionStatus(e.target.value as any)}
                className="w-full rounded-lg border border-[#1e2029] bg-[#121318] px-3 py-2 text-xs font-mono text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
                <option value="Struggled">Struggled</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">Key Insight / Notes</label>
            <textarea
              rows={2}
              value={notes}
              onChange={e => setNotes(e.target.value)}
              placeholder="What did you learn? Where did you get stuck?"
              className="w-full rounded-lg border border-[#1e2029] bg-[#121318] px-3 py-2 text-xs font-inter text-white placeholder-zinc-600 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">Resource URL (Optional)</label>
            <input
              type="url"
              value={resourceUrl}
              onChange={e => setResourceUrl(e.target.value)}
              placeholder="https://leetcode.com/problems/... or article"
              className="w-full rounded-lg border border-[#1e2029] bg-[#121318] px-3 py-2 text-xs font-inter text-white placeholder-zinc-600 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#1e2029]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono rounded-lg border border-[#1e2029] bg-[#121318] text-zinc-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-all shadow-sm"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>Record Learning Session</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
