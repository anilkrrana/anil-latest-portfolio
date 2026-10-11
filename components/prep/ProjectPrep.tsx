import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { INITIAL_PROJECTS } from '../../data/defaultPrepData';
import { FolderGit2, Plus, Code, HelpCircle, Layers, Cpu } from 'lucide-react';

export const ProjectPrep: React.FC = () => {
  const { state, updateProjectPrep, isAdmin } = usePrep();
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  // Fallback gracefully to default data if state or projects is undefined/empty
  const projectsList = (Array.isArray(state?.projects) && state.projects.length > 0)
    ? state.projects
    : INITIAL_PROJECTS;

  const validIdx = (activeProjectIdx >= 0 && activeProjectIdx < projectsList.length) ? activeProjectIdx : 0;
  const project = projectsList[validIdx] || INITIAL_PROJECTS[0] || ({} as any);

  // Schema-resilient field extraction (supports both current & legacy keys)
  const projectName = project.projectName || (project as any).title || (project as any).name || 'Enterprise E-Commerce Microservices Engine';
  const problemSolved = project.problemSolved || (project as any).starSituation || (project as any).situation || 'High-throughput inventory allocation & payment processing during flash sales.';
  const architecture = project.architecture || (project as any).starAction || (project as any).action || 'Spring Boot microservices with Spring Cloud Gateway, Kafka event bus, PostgreSQL, Redis cache.';
  const myContribution = project.myContribution || (project as any).starTask || (project as any).task || 'Designed order processing pipeline, implemented idempotent payment gateway integration, optimized SQL query latency.';
  const challenges = project.challenges || 'Preventing double-booking of inventory under 5,000 requests/second concurrent load.';
  const performance = project.performance || (project as any).starResult || (project as any).result || 'Reduced average P99 API response time from 450ms to 42ms using Redis caching & async Kafka processing.';
  const testing = project.testing || '85%+ JUnit 5 test coverage, Mockito for unit testing, Testcontainers for integration tests.';
  const deployment = project.deployment || 'Deployed on AWS EKS using Helm charts and GitHub Actions CI/CD pipeline.';
  const technologies: string[] = Array.isArray(project.technologies)
    ? project.technologies
    : (Array.isArray((project as any).techStack) ? (project as any).techStack : ['Java 17', 'Spring Boot 3', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes']);
  const crossQuestions = Array.isArray(project.crossQuestions)
    ? project.crossQuestions
    : [];

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim() || !project) return;

    const currentQuestions = Array.isArray(project.crossQuestions) ? project.crossQuestions : [];
    const updatedQuestions = [
      ...currentQuestions,
      { question: newQuestion.trim(), myAnswer: newAnswer.trim() }
    ];

    if (project.id) {
      updateProjectPrep(project.id, { crossQuestions: updatedQuestions });
    }
    setNewQuestion('');
    setNewAnswer('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-[#1e2029] bg-[#121318] p-5">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg sm:text-xl font-bold text-white font-outfit">
              PROJECT & RESUME CROSS-QUESTIONING
            </h2>
            <span className="rounded bg-blue-500/10 px-2.5 py-0.5 text-xs font-mono text-blue-400 border border-blue-500/20">
              STAR Method Breakdown
            </span>
            {!isAdmin && (
              <span className="rounded bg-zinc-800/80 px-2 py-0.5 text-[10px] font-mono text-zinc-400 border border-zinc-700/50">
                Showcase Mode
              </span>
            )}
          </div>
          <p className="mt-1 text-xs text-zinc-400 font-inter">
            Prepare architecture explanations, challenges, performance optimization, and cross-questioning answers.
          </p>
        </div>
      </div>

      {/* Project selector switcher if multiple projects */}
      {projectsList.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {projectsList.map((p, idx) => (
            <button
              key={p.id || idx}
              onClick={() => setActiveProjectIdx(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 ${
                validIdx === idx
                  ? 'bg-blue-600/20 text-blue-300 border border-blue-500/40'
                  : 'bg-[#121318] text-zinc-400 hover:text-white border border-[#1e2029]'
              }`}
            >
              {p.projectName || (p as any).title || `Project #${idx + 1}`}
            </button>
          ))}
        </div>
      )}

      {projectsList.length === 0 ? (
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
                  <span>{projectName}</span>
                </h3>
              </div>

              {/* Grid of Attributes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="rounded-lg bg-[#09090b] p-3 border border-[#1e2029]">
                  <div className="font-mono text-blue-400 font-semibold mb-1">Problem Solved</div>
                  <div className="text-zinc-300 font-inter">{problemSolved}</div>
                </div>

                <div className="rounded-lg bg-[#09090b] p-3 border border-[#1e2029]">
                  <div className="font-mono text-emerald-400 font-semibold mb-1">Architecture</div>
                  <div className="text-zinc-300 font-inter">{architecture}</div>
                </div>

                <div className="rounded-lg bg-[#09090b] p-3 border border-[#1e2029]">
                  <div className="font-mono text-amber-400 font-semibold mb-1">My Contribution</div>
                  <div className="text-zinc-300 font-inter">{myContribution}</div>
                </div>

                <div className="rounded-lg bg-[#09090b] p-3 border border-[#1e2029]">
                  <div className="font-mono text-rose-400 font-semibold mb-1">Key Challenges & Bottlenecks</div>
                  <div className="text-zinc-300 font-inter">{challenges}</div>
                </div>

                <div className="rounded-lg bg-[#09090b] p-3 border border-[#1e2029]">
                  <div className="font-mono text-purple-400 font-semibold mb-1">Performance Metrics</div>
                  <div className="text-zinc-300 font-inter">{performance}</div>
                </div>

                <div className="rounded-lg bg-[#09090b] p-3 border border-[#1e2029]">
                  <div className="font-mono text-cyan-400 font-semibold mb-1">Testing & Deployment</div>
                  <div className="text-zinc-300 font-inter">{testing} • {deployment}</div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">Technologies Used</div>
                <div className="flex flex-wrap gap-1.5">
                  {technologies.length > 0 ? (
                    technologies.map((t, idx) => (
                      <span key={idx} className="rounded bg-[#09090b] px-2.5 py-1 text-xs font-mono text-blue-300 border border-[#1e2029]">
                        {t}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs font-mono text-zinc-500">No technologies listed</span>
                  )}
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
              {crossQuestions.length > 0 ? (
                crossQuestions.map((q, idx) => (
                  <div key={idx} className="rounded-lg bg-[#09090b] p-3 border border-[#1e2029] space-y-1.5 text-xs font-mono">
                    <div className="text-amber-300 font-bold">Q: {q?.question || 'Interview Question'}</div>
                    <div className="text-zinc-300 font-inter text-[11px]">A: {q?.myAnswer || 'Answer notes'}</div>
                  </div>
                ))
              ) : (
                <div className="rounded-lg bg-[#09090b] p-4 border border-[#1e2029] text-center text-xs font-mono text-zinc-500">
                  No cross-questions recorded yet.
                </div>
              )}
            </div>

            {/* Form */}
            {isAdmin ? (
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
            ) : (
              <div className="pt-2 border-t border-[#1e2029] text-center text-xs font-mono text-zinc-500">
                Cross-Question Archive
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
