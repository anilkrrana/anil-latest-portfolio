import React from 'react';
import { usePrep } from '../../context/PrepContext';
import { RoadmapPhase } from '../../types/prep';
import { CheckCircle2, Clock, AlertTriangle, ChevronRight, Target } from 'lucide-react';

export const Roadmap22Days: React.FC = () => {
  const { daysRemaining, state } = usePrep();

  // Find weak topics from DSA list
  const weakTopics = state.dsaTopics
    .filter(t => t.status === 'Needs Revision' || (t.problemsCount > 0 && t.confidence < 60))
    .map(t => t.name);

  const phases: RoadmapPhase[] = [
    {
      phase: 1,
      title: 'PHASE 1: Diagnostic & Foundations',
      subtitle: 'Setup system, baseline mock test, Time/Space Complexity, Java Collections core.',
      topics: ['Time/Space Complexity', 'Java Collections (List, Set, Map)', 'Array Basics'],
      daysRange: 'Days 1–3',
      status: daysRemaining <= 19 ? 'completed' : daysRemaining >= 20 ? 'current' : 'upcoming'
    },
    {
      phase: 2,
      title: 'PHASE 2: Arrays, Strings & Hashing',
      subtitle: 'Frequency counting, hash maps, string manipulation, subsegment lookup.',
      topics: ['Arrays', 'Strings', 'HashMap', 'HashSet'],
      daysRange: 'Days 4–6',
      status: daysRemaining <= 16 ? 'completed' : (daysRemaining >= 17 && daysRemaining <= 19) ? 'current' : 'upcoming'
    },
    {
      phase: 3,
      title: 'PHASE 3: Two Pointers & Sliding Window',
      subtitle: 'Sorted array pair search, fixed & variable sliding windows, prefix sums.',
      topics: ['Two Pointers', 'Sliding Window', 'Prefix Sum'],
      daysRange: 'Days 7–9',
      status: daysRemaining <= 13 ? 'completed' : (daysRemaining >= 14 && daysRemaining <= 16) ? 'current' : 'upcoming'
    },
    {
      phase: 4,
      title: 'PHASE 4: Sorting & Binary Search',
      subtitle: 'Custom Java Comparators, binary search variants, monotonic search spaces.',
      topics: ['Sorting Algorithms', 'Binary Search', 'Search Space Reduction'],
      daysRange: 'Days 10–12',
      status: daysRemaining <= 10 ? 'completed' : (daysRemaining >= 11 && daysRemaining <= 13) ? 'current' : 'upcoming'
    },
    {
      phase: 5,
      title: 'PHASE 5: Linked List, Stack & Queue',
      subtitle: 'Fast/slow pointers, monotonic stacks, deque, evaluation algorithms.',
      topics: ['Linked List', 'Stack', 'Queue', 'Monotonic Stack'],
      daysRange: 'Days 13–15',
      status: daysRemaining <= 7 ? 'completed' : (daysRemaining >= 8 && daysRemaining <= 10) ? 'current' : 'upcoming'
    },
    {
      phase: 6,
      title: 'PHASE 6: Trees, Heap & Graph Basics',
      subtitle: 'Binary tree traversals, Min/Max Heaps, Top K problems, BFS & DFS.',
      topics: ['Trees', 'BFS', 'DFS', 'Heap', 'Graph Basics'],
      daysRange: 'Days 16–18',
      status: daysRemaining <= 4 ? 'completed' : (daysRemaining >= 5 && daysRemaining <= 7) ? 'current' : 'upcoming'
    },
    {
      phase: 7,
      title: 'PHASE 7: Mixed Problems & Timed Practice',
      subtitle: '45-min & 60-min timed sets, problem pattern recognition, dynamic programming basics.',
      topics: ['Recursion', 'Backtracking', 'Dynamic Programming', 'Mixed Sets'],
      daysRange: 'Days 19–20',
      status: daysRemaining <= 2 ? 'completed' : (daysRemaining >= 3 && daysRemaining <= 4) ? 'current' : 'upcoming'
    },
    {
      phase: 8,
      title: 'PHASE 8: Mock Assessments & Final Revision',
      subtitle: 'Full 90-minute Infosys SP simulations, weak topic patch up, interview Q&A.',
      topics: ['Infosys SP Mocks', 'Weak Topic Patching', 'Java 8 Streams & CS Fundamentals'],
      daysRange: 'Days 21–22+',
      status: daysRemaining <= 0 ? 'completed' : (daysRemaining >= 0 && daysRemaining <= 2) ? 'current' : 'upcoming'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-[#1e2029] bg-[#121318] p-5">
        <div>
          <h2 className="text-xl font-bold text-white font-outfit flex items-center gap-2">
            <span>22-DAY PREPARATION ROADMAP</span>
            <span className="rounded bg-blue-500/10 px-2.5 py-0.5 text-xs font-mono text-blue-400 border border-blue-500/20">
              8 Structured Phases
            </span>
          </h2>
          <p className="mt-1 text-xs text-zinc-400 font-inter">
            Track your phase progression from Diagnostic Foundations to Infosys SP Full Mocks.
          </p>
        </div>

        {weakTopics.length > 0 && (
          <div className="flex items-center gap-2 rounded-lg bg-amber-500/10 px-3 py-2 text-xs border border-amber-500/20 text-amber-300 font-mono">
            <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0" />
            <span>Weak Topics Flagged: {weakTopics.slice(0, 3).join(', ')}</span>
          </div>
        )}
      </div>

      {/* Roadmap Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {phases.map((p) => {
          const isCurrent = p.status === 'current';
          const isCompleted = p.status === 'completed';

          return (
            <div
              key={p.phase}
              className={`relative flex flex-col justify-between rounded-xl border p-4 transition-all ${
                isCurrent 
                  ? 'border-blue-500 bg-gradient-to-b from-[#161a29] to-[#121318] shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/30' 
                  : isCompleted 
                  ? 'border-emerald-500/30 bg-[#0d1310]' 
                  : 'border-[#1e2029] bg-[#121318] opacity-75'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-zinc-400">
                    {p.daysRange}
                  </span>
                  {isCompleted && (
                    <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 className="h-3 w-3" /> COMPLETED
                    </span>
                  )}
                  {isCurrent && (
                    <span className="inline-flex items-center gap-1 rounded bg-blue-500/20 px-2 py-0.5 text-[10px] font-mono text-blue-300 border border-blue-400/40 animate-pulse">
                      <Target className="h-3 w-3 text-blue-400" /> ACTIVE PHASE
                    </span>
                  )}
                  {!isCompleted && !isCurrent && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-zinc-500">
                      <Clock className="h-3 w-3" /> UPCOMING
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-sm font-bold text-white font-outfit">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs text-zinc-400 font-inter">
                  {p.subtitle}
                </p>

                {/* Topics Tag List */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.topics.map((t, idx) => {
                    const isWeak = weakTopics.includes(t);
                    return (
                      <span
                        key={idx}
                        className={`rounded px-2 py-0.5 text-[11px] font-mono ${
                          isWeak 
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                            : 'bg-[#09090b] text-zinc-300 border border-[#1e2029]'
                        }`}
                      >
                        {t} {isWeak ? '⚠️' : ''}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 border-t border-[#1e2029] pt-3 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>PHASE {p.phase} OF 8</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
