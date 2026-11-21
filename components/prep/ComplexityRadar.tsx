import React, { useState } from 'react';
import { COMPLEXITY_RULES } from '../../data/growthOSCurriculum';
import { Radar, HelpCircle, Check, AlertCircle } from 'lucide-react';

export const ComplexityRadar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'scan' | 'table' | 'quiz'>('scan');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, boolean>>({});

  const bigOTable = [
    { notation: 'O(1)', name: 'Constant Time', typicalOps: 'HashMap get/put, Array index access, Push/Pop stack', nMax: 'Any N' },
    { notation: 'O(log N)', name: 'Logarithmic', typicalOps: 'Binary Search, Balanced BST lookup, Euclidean GCD', nMax: '10^9 to 10^18' },
    { notation: 'O(N)', name: 'Linear', typicalOps: 'Single loop, Two Pointers, Sliding Window, Prefix Sum', nMax: '10^7 (10M)' },
    { notation: 'O(N log N)', name: 'Linearithmic', typicalOps: 'Merge Sort, Quick Sort, PriorityQueue / Heap ops (N pushes)', nMax: '10^5 to 10^6' },
    { notation: 'O(N^2)', name: 'Quadratic', typicalOps: 'Nested loops, Bubble Sort, 2D Grid DFS/BFS without memo', nMax: '500 to 2,000' },
    { notation: 'O(2^N)', name: 'Exponential', typicalOps: 'Subset generation without DP, Naive Fibonacci recursion', nMax: '20 to 25' },
    { notation: 'O(N!)', name: 'Factorial', typicalOps: 'Permutations generation, Traveling Salesperson brute force', nMax: '10 to 12' }
  ];

  const quizQuestions = [
    {
      id: 1,
      q: 'Input array length is N <= 10^5. You propose an O(N^2) solution with two nested loops. Will this pass in an online assessment?',
      answer: 'No. For N = 10^5, N^2 = 10^10 operations. Standard online judges allow ~10^7 - 10^8 ops/second in Java/C++. It will result in Time Limit Exceeded (TLE). You need O(N log N) or O(N).'
    },
    {
      id: 2,
      q: 'Does recursive stack depth count toward auxiliary space complexity?',
      answer: 'Yes! Interviewers specifically look for recursive call stack memory. A recursive DFS on a skewed binary tree of height H uses O(H) auxiliary space on the call stack.'
    },
    {
      id: 3,
      q: 'If N <= 10^9 and you need to find an element, what time complexity is expected?',
      answer: 'O(log N) or O(1). You cannot even allocate an array of size 10^9 in memory. The solution must use Binary Search, Bit Manipulation, or mathematical deduction.'
    }
  ];

  return (
    <div className="rounded-xl border border-[#1e2029] bg-[#0d0e12] p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1e2029] pb-3">
        <div>
          <div className="flex items-center gap-2">
            <Radar className="h-5 w-5 text-blue-400" />
            <h3 className="text-base font-bold font-outfit text-white">
              Time & Space Complexity Radar
            </h3>
          </div>
          <p className="text-xs text-zinc-400 mt-0.5 font-inter">
            20-second scan radar, input constraint limits, and auxiliary space checklists.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1 rounded-lg bg-[#121318] p-1 border border-[#1e2029]">
          <button
            onClick={() => setActiveTab('scan')}
            className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
              activeTab === 'scan' ? 'bg-blue-600/30 text-blue-300 font-semibold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            20-Sec Radar
          </button>
          <button
            onClick={() => setActiveTab('table')}
            className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
              activeTab === 'table' ? 'bg-blue-600/30 text-blue-300 font-semibold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Big-O Chart
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
              activeTab === 'quiz' ? 'bg-blue-600/30 text-blue-300 font-semibold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Practice Quiz
          </button>
        </div>
      </div>

      {/* 20-Sec Scan Radar */}
      {activeTab === 'scan' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {COMPLEXITY_RULES.map((rule) => (
            <div
              key={rule.id}
              className="rounded-lg border border-[#1e2029] bg-[#121318] p-3 hover:border-zinc-700 transition-all"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-xs font-mono font-bold">
                  {rule.id}
                </span>
                <span className="text-xs font-mono font-semibold text-zinc-200">
                  {rule.check}
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-inter leading-relaxed pl-7">
                {rule.why}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Big-O Table */}
      {activeTab === 'table' && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[#1e2029] text-zinc-400 bg-[#121318]">
                <th className="py-2.5 px-3">Big-O</th>
                <th className="py-2.5 px-3">Class Name</th>
                <th className="py-2.5 px-3">Typical Algorithms / Operations</th>
                <th className="py-2.5 px-3">Max Feasible N</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e2029] text-zinc-300">
              {bigOTable.map((row, i) => (
                <tr key={i} className="hover:bg-[#121318] transition-colors">
                  <td className="py-2.5 px-3 font-bold text-blue-400">{row.notation}</td>
                  <td className="py-2.5 px-3 text-zinc-300">{row.name}</td>
                  <td className="py-2.5 px-3 text-zinc-400">{row.typicalOps}</td>
                  <td className="py-2.5 px-3 font-semibold text-emerald-400">{row.nMax}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Quiz */}
      {activeTab === 'quiz' && (
        <div className="space-y-3">
          {quizQuestions.map((q) => {
            const isRevealed = !!quizAnswers[q.id];
            return (
              <div
                key={q.id}
                className="rounded-lg border border-[#1e2029] bg-[#121318] p-4 space-y-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2">
                    <HelpCircle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-zinc-200 font-inter">{q.q}</span>
                  </div>
                  <button
                    onClick={() => setQuizAnswers(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                    className="shrink-0 px-2 py-1 text-[11px] font-mono rounded bg-blue-600/20 text-blue-300 border border-blue-500/30 hover:bg-blue-600/30"
                  >
                    {isRevealed ? 'Hide Explanation' : 'Reveal Answer'}
                  </button>
                </div>

                {isRevealed && (
                  <div className="mt-2 pl-6 pt-2 border-t border-[#1e2029] text-xs font-inter text-emerald-300 bg-emerald-950/20 p-2.5 rounded-md">
                    {q.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
