import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { FolderGit2, Plus, Code, HelpCircle, Layers, Cpu } from 'lucide-react';

export const ProjectPrep: React.FC = () => {
  const { state, updateProjectPrep } = usePrep();
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const project = state.projects[activeProjectIdx];

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim() || !project) return;

    const updatedQuestions = [
      ...project.crossQuestions,
      { question: newQuestion.trim(), myAnswer: newAnswer.trim() }
    ];

    updateProjectPrep(project.id, { crossQuestions: updatedQuestions });
    setNewQuestion('');
    setNewAnswer('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-[#1e2029] bg-[#121318] p-5">
        <div>
          <h2 className="text-xl font-bold text-white font-outfit flex items-center gap-2">
            <span>PROJECT & RESUME CROSS-QUESTIONING</span>
            <span className="rounded bg-blue-500/10 px-2.5 py-0.5 text-xs font-mono text-blue-400 border border-blue-500/20">
              STAR Method Breakdown
            </span>
          </h2>
          <p className="mt-1 text-xs text-zinc-400 font-inter">
            Prepare architecture explanations, challenges, performance optimization, and cross-questioning answers.
          </p>
        </div>
      </div>

      {state.projects.length === 0 ? (
        <div className="rounded-xl border border-[#1e2029] bg-[#121318] p-8 text-center text-xs font-mono text-zinc-500">
          No projects configured yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Project Details Card */}
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-xl border border-[#1e2029] bg-[#121318] p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-[#1e2029] pb-3">
                <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
                  <FolderGit2 className="h-5 w-5 text-blue-400" />
                  <span>{project.projectName}</span>
                </h3>
              </div>

              {/* Grid of Attributes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="rounded-lg bg-[#09090b] p-3 border border-[#1e2029]">
                  <div className="font-mono text-blue-400 font-semibold mb-1">Problem Solved</div>
                  <div className="text-zinc-300 font-inter">{project.problemSolved}</div>
                </div>

                <div className="rounded-lg bg-[#09090b] p-3 border border-[#1e2029]">
                  <div className="font-mono text-emerald-400 font-semibold mb-1">Architecture</div>
                  <div className="text-zinc-300 font-inter">{project.architecture}</div>
                </div>

                <div className="rounded-lg bg-[#09090b] p-3 border border-[#1e2029]">
                  <div className="font-mono text-amber-400 font-semibold mb-1">My Contribution</div>
                  <div className="text-zinc-300 font-inter">{project.myContribution}</div>
                </div>

                <div className="rounded-lg bg-[#09090b] p-3 border border-[#1e2029]">
                  <div className="font-mono text-rose-400 font-semibold mb-1">Key Challenges & Bottlenecks</div>
                  <div className="text-zinc-300 font-inter">{project.challenges}</div>
                </div>

                <div className="rounded-lg bg-[#09090b] p-3 border border-[#1e2029]">
                  <div className="font-mono text-purple-400 font-semibold mb-1">Performance Metrics</div>
                  <div className="text-zinc-300 font-inter">{project.performance}</div>
                </div>

                <div className="rounded-lg bg-[#09090b] p-3 border border-[#1e2029]">
                  <div className="font-mono text-cyan-400 font-semibold mb-1">Testing & Deployment</div>
                  <div className="text-zinc-300 font-inter">{project.testing} • {project.deployment}</div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">Technologies Used</div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t, idx) => (
                    <span key={idx} className="rounded bg-[#09090b] px-2.5 py-1 text-xs font-mono text-blue-300 border border-[#1e2029]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Cross-Questioning Bank */}
          <div className="rounded-xl border border-[#1e2029] bg-[#121318] p-5 space-y-4">
            <h3 className="text-base font-bold text-white font-outfit flex items-center gap-2 border-b border-[#1e2029] pb-3">
              <HelpCircle className="h-4 w-4 text-emerald-400" />
              <span>Cross-Questioning Bank</span>
            </h3>

            {/* Questions List */}
            <div className="space-y-3">
              {project.crossQuestions.map((q, idx) => (
                <div key={idx} className="rounded-lg bg-[#09090b] p-3 border border-[#1e2029] space-y-1.5 text-xs font-mono">
                  <div className="text-amber-300 font-bold">Q: {q.question}</div>
                  <div className="text-zinc-300 font-inter text-[11px]">A: {q.myAnswer}</div>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleAddQuestion} className="pt-2 border-t border-[#1e2029] space-y-2">
              <input
                type="text"
                required
                placeholder="Add potential interview question..."
                value={newQuestion}
                onChange={e => setNewQuestion(e.target.value)}
                className="w-full rounded bg-[#09090b] border border-[#1e2029] p-2 text-xs text-white"
              />
              <textarea
                rows={2}
                placeholder="Your prepared answer..."
                value={newAnswer}
                onChange={e => setNewAnswer(e.target.value)}
                className="w-full rounded bg-[#09090b] border border-[#1e2029] p-2 text-xs text-white"
              ></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold text-xs py-2 rounded hover:bg-blue-500">
                Save Cross-Question
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
