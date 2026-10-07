import React from 'react';
import { usePrep } from '../../context/PrepContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { BarChart3, TrendingUp, Zap, PieChart as PieIcon } from 'lucide-react';

export const PerformanceAnalytics: React.FC = () => {
  const { state, readiness } = usePrep();

  // 1. Topic Strength Data
  const topicStrengthData = state.dsaTopics.map(t => ({
    name: t.name,
    confidence: t.confidence,
    solved: t.problemsCount
  }));

  // 2. Solve Type Breakdown Data (Independent vs Hint-Assisted)
  const independentCount = state.problems.filter(p => p.solvedIndependently).length;
  const assistedCount = state.problems.length - independentCount;
  const solveTypeData = [
    { name: 'Independent', value: independentCount, color: '#10b981' },
    { name: 'Hint-Assisted', value: assistedCount, color: '#f59e0b' }
  ];

  // 3. Difficulty Breakdown Data
  const easyCount = state.problems.filter(p => p.difficulty === 'Easy').length;
  const mediumCount = state.problems.filter(p => p.difficulty === 'Medium').length;
  const hardCount = state.problems.filter(p => p.difficulty === 'Hard').length;
  const diffData = [
    { name: 'Easy', count: easyCount, fill: '#10b981' },
    { name: 'Medium', count: mediumCount, fill: '#f59e0b' },
    { name: 'Hard', count: hardCount, fill: '#f43f5e' }
  ];

  // 4. Readiness Score Radar Breakdown
  const readinessComponents = [
    { subject: 'DSA', score: readiness.dsa },
    { subject: 'Java & CS', score: readiness.javaCS },
    { subject: 'Speed', score: readiness.speed },
    { subject: 'Accuracy', score: readiness.accuracy },
    { subject: 'Pattern', score: readiness.pattern },
    { subject: 'Mock', score: readiness.mock }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-[#1e2029] bg-[#121318] p-5">
        <div>
          <h2 className="text-xl font-bold text-white font-outfit flex items-center gap-2">
            <span>PERFORMANCE ANALYTICS</span>
            <span className="rounded bg-blue-500/10 px-2.5 py-0.5 text-xs font-mono text-blue-400 border border-blue-500/20">
              Live Data Synthesis
            </span>
          </h2>
          <p className="mt-1 text-xs text-zinc-400 font-inter">
            Visual data analysis on solve speed, hint dependency, topic confidence, and readiness trends.
          </p>
        </div>
      </div>

      {/* Grid of Chart Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: Topic Confidence Bar Chart */}
        <div className="rounded-xl border border-[#1e2029] bg-[#121318] p-5 space-y-3">
          <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-blue-400" />
            <span>DSA Topic Confidence (%)</span>
          </h3>
          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topicStrengthData.slice(0, 10)}>
                <XAxis dataKey="name" stroke="#6b7280" fontSize={10} tickLine={false} />
                <YAxis stroke="#6b7280" fontSize={10} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#09090b', borderColor: '#1e2029', borderRadius: '8px', fontSize: '12px' }}
                />
                <Bar dataKey="confidence" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Readiness Breakdown */}
        <div className="rounded-xl border border-[#1e2029] bg-[#121318] p-5 space-y-3">
          <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-emerald-400" />
            <span>Readiness Component Score (%)</span>
          </h3>
          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={readinessComponents} layout="vertical">
                <XAxis type="number" stroke="#6b7280" fontSize={10} domain={[0, 100]} />
                <YAxis type="category" dataKey="subject" stroke="#6b7280" fontSize={10} width={70} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#09090b', borderColor: '#1e2029', borderRadius: '8px', fontSize: '12px' }}
                />
                <Bar dataKey="score" fill="#10b981" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 3: Solve Type Ratio (Independent vs Hinted) */}
        <div className="rounded-xl border border-[#1e2029] bg-[#121318] p-5 space-y-3">
          <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
            <PieIcon className="h-4 w-4 text-cyan-400" />
            <span>Independent vs Hint-Assisted Solves</span>
          </h3>
          <div className="h-56 w-full flex items-center justify-center">
            {state.problems.length === 0 ? (
              <div className="text-xs font-mono text-zinc-500">No problems logged yet to plot ratio.</div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={solveTypeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
                    {solveTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#09090b', borderColor: '#1e2029', borderRadius: '8px', fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Chart 4: Problems by Difficulty */}
        <div className="rounded-xl border border-[#1e2029] bg-[#121318] p-5 space-y-3">
          <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
            <Zap className="h-4 w-4 text-amber-400" />
            <span>Problem Solved Difficulty Breakdown</span>
          </h3>
          <div className="h-56 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={diffData}>
                <XAxis dataKey="name" stroke="#6b7280" fontSize={10} />
                <YAxis stroke="#6b7280" fontSize={10} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#09090b', borderColor: '#1e2029', borderRadius: '8px', fontSize: '12px' }}
                />
                <Bar dataKey="count">
                  {diffData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
