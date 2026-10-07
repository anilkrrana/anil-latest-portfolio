import React from 'react';
import { usePrep } from '../../context/PrepContext';
import { Coffee, Server, Database, Cpu, Calendar } from 'lucide-react';

export const JavaCSTracker: React.FC = () => {
  const { state, updateJavaTopic, updateCSTopic } = usePrep();

  const coreJava = state.javaTopics.filter(j => j.category === 'Core Java');
  const backend = state.javaTopics.filter(j => j.category === 'Backend');

  // Overall CS Fundamentals Completion %
  const csProgressAvg = state.csTopics.length > 0
    ? Math.round(state.csTopics.reduce((acc, c) => acc + c.progress, 0) / state.csTopics.length)
    : 0;

  const getTopicIcon = (cat: string) => {
    switch (cat) {
      case 'Core Java': return <Coffee className="h-4 w-4 text-amber-400" />;
      case 'Backend': return <Server className="h-4 w-4 text-blue-400" />;
      default: return <Database className="h-4 w-4 text-emerald-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-[#1e2029] bg-[#121318] p-5">
        <div>
          <h2 className="text-xl font-bold text-white font-outfit flex items-center gap-2">
            <span>JAVA & CS FUNDAMENTALS TRACKER</span>
            <span className="rounded bg-amber-500/10 px-2.5 py-0.5 text-xs font-mono text-amber-400 border border-amber-500/20">
              Technical Interview Core
            </span>
          </h2>
          <p className="mt-1 text-xs text-zinc-400 font-inter">
            Track Core Java 17, Spring Boot backend stack, and CS Fundamentals (SQL, DBMS, OS, Networks).
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="rounded-lg bg-[#09090b] px-3 py-1.5 border border-[#1e2029]">
            <span className="text-zinc-400">CS Completion: </span>
            <span className="font-bold text-emerald-400">{csProgressAvg}%</span>
          </div>
        </div>
      </div>

      {/* Grid of Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Core Java Section */}
        <div className="rounded-xl border border-[#1e2029] bg-[#121318] p-5">
          <div className="flex items-center justify-between border-b border-[#1e2029] pb-3">
            <h3 className="text-base font-bold text-white font-outfit flex items-center gap-2">
              <Coffee className="h-4 w-4 text-amber-400" />
              <span>Core Java Stack</span>
            </h3>
            <span className="text-xs font-mono text-amber-400">
              Avg: {Math.round(coreJava.reduce((a, b) => a + b.progress, 0) / (coreJava.length || 1))}%
            </span>
          </div>

          <div className="mt-4 divide-y divide-[#1e2029]">
            {coreJava.map((topic) => (
              <div key={topic.id} className="py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-semibold text-white font-mono">{topic.name}</div>
                  <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-mono mt-0.5">
                    <span>Conf: {topic.confidence}%</span>
                    <span>•</span>
                    <input
                      type="date"
                      value={topic.lastRevised || ''}
                      onChange={(e) => updateJavaTopic(topic.id, { lastRevised: e.target.value })}
                      className="bg-[#09090b] text-zinc-300 border border-[#1e2029] rounded px-1.5 py-0.5 text-[10px] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-28 bg-[#09090b] rounded-full h-2 overflow-hidden border border-[#1e2029]">
                    <div
                      className="bg-amber-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${topic.progress}%` }}
                    ></div>
                  </div>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={topic.progress}
                    onChange={(e) => updateJavaTopic(topic.id, { progress: Math.min(100, Math.max(0, parseInt(e.target.value) || 0)) })}
                    className="w-14 rounded bg-[#09090b] border border-[#1e2029] px-2 py-1 text-right font-mono text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                  <span className="text-xs font-mono text-zinc-400">%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend & Microservices Section */}
        <div className="rounded-xl border border-[#1e2029] bg-[#121318] p-5">
          <div className="flex items-center justify-between border-b border-[#1e2029] pb-3">
            <h3 className="text-base font-bold text-white font-outfit flex items-center gap-2">
              <Server className="h-4 w-4 text-blue-400" />
              <span>Spring & Backend Microservices</span>
            </h3>
            <span className="text-xs font-mono text-blue-400">
              Avg: {Math.round(backend.reduce((a, b) => a + b.progress, 0) / (backend.length || 1))}%
            </span>
          </div>

          <div className="mt-4 divide-y divide-[#1e2029]">
            {backend.map((topic) => (
              <div key={topic.id} className="py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-semibold text-white font-mono">{topic.name}</div>
                  <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-mono mt-0.5">
                    <span>Conf: {topic.confidence}%</span>
                    <span>•</span>
                    <input
                      type="date"
                      value={topic.lastRevised || ''}
                      onChange={(e) => updateJavaTopic(topic.id, { lastRevised: e.target.value })}
                      className="bg-[#09090b] text-zinc-300 border border-[#1e2029] rounded px-1.5 py-0.5 text-[10px] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-28 bg-[#09090b] rounded-full h-2 overflow-hidden border border-[#1e2029]">
                    <div
                      className="bg-blue-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${topic.progress}%` }}
                    ></div>
                  </div>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={topic.progress}
                    onChange={(e) => updateJavaTopic(topic.id, { progress: Math.min(100, Math.max(0, parseInt(e.target.value) || 0)) })}
                    className="w-14 rounded bg-[#09090b] border border-[#1e2029] px-2 py-1 text-right font-mono text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                  <span className="text-xs font-mono text-zinc-400">%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CS Fundamentals Grid Section */}
      <div className="rounded-xl border border-[#1e2029] bg-[#121318] p-5">
        <div className="flex items-center justify-between border-b border-[#1e2029] pb-3">
          <h3 className="text-base font-bold text-white font-outfit flex items-center gap-2">
            <Cpu className="h-4 w-4 text-emerald-400" />
            <span>Computer Science Fundamentals</span>
          </h3>
          <span className="text-xs font-mono text-emerald-400">SQL • DBMS • OS • Networks</span>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {state.csTopics.map((cs) => (
            <div key={cs.id} className="rounded-lg bg-[#09090b] p-4 border border-[#1e2029] flex flex-col justify-between">
              <div>
                <div className="text-sm font-bold text-white font-mono">{cs.name}</div>
                <div className="mt-2 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">Progress:</span>
                  <span className="font-bold text-emerald-400">{cs.progress}%</span>
                </div>

                <div className="mt-1 h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-emerald-500 transition-all duration-300"
                    style={{ width: `${cs.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1e2029] flex items-center justify-between gap-2">
                <label className="text-[10px] font-mono text-zinc-500">Update %</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={cs.progress}
                  onChange={(e) => updateCSTopic(cs.id, { progress: Math.min(100, Math.max(0, parseInt(e.target.value) || 0)) })}
                  className="w-16 rounded bg-[#121318] border border-[#1e2029] px-2 py-0.5 text-right font-mono text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
