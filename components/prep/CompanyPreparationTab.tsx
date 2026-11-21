import React, { useState } from 'react';
import { COMPANY_ROADMAPS, INTERVIEWER_QA_BANK } from '../../data/growthOSCurriculum';
import { Building2, MessageSquare, CheckCircle2, Search, HelpCircle, ShieldAlert } from 'lucide-react';

export const CompanyPreparationTab: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<'Microsoft' | 'Amazon' | 'Google'>('Microsoft');
  const [qaSearch, setQaSearch] = useState('');
  const [revealedQa, setRevealedQa] = useState<Record<string, boolean>>({});

  const companyRounds = COMPANY_ROADMAPS.filter(r => r.company === selectedCompany);

  const filteredQa = INTERVIEWER_QA_BANK.filter(
    q => q.question.toLowerCase().includes(qaSearch.toLowerCase()) || q.whatEvaluating.toLowerCase().includes(qaSearch.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Company Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {(['Microsoft', 'Amazon', 'Google'] as const).map((co) => (
          <button
            key={co}
            onClick={() => setSelectedCompany(co)}
            className={`p-4 rounded-xl border text-left transition-all ${
              selectedCompany === co
                ? 'border-blue-500 bg-blue-950/20 shadow-md ring-1 ring-blue-500'
                : 'border-[#1e2029] bg-[#0d0e12] hover:border-zinc-700'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-bold font-outfit text-white">{co}</span>
              <Building2 className={`h-4 w-4 ${selectedCompany === co ? 'text-blue-400' : 'text-zinc-500'}`} />
            </div>
            <p className="text-xs text-zinc-400 font-inter">
              {co === 'Microsoft' && 'Balanced, collaborative, practical system design'}
              {co === 'Amazon' && 'Heavy Leadership Principles + LP-integrated LLD/HLD'}
              {co === 'Google' && 'Rigorous algorithms, clean code proof, CS fundamentals'}
            </p>
          </button>
        ))}
      </div>

      {/* Rounds Breakdown for Selected Company */}
      <div className="rounded-xl border border-[#1e2029] bg-[#0d0e12] p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-[#1e2029] pb-3">
          <div>
            <h3 className="text-base font-bold font-outfit text-white">
              {selectedCompany} Interview Loop Blueprint
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5 font-inter">
              Round-by-round assessment expectations and targeted focus areas.
            </p>
          </div>
          <span className="px-2.5 py-1 text-xs font-mono rounded bg-blue-950/80 text-blue-300 border border-blue-800/40">
            {companyRounds.length} Interview Rounds
          </span>
        </div>

        <div className="space-y-3">
          {companyRounds.map((round, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg border border-[#1e2029] bg-[#121318] space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600/20 text-blue-400 text-xs font-mono font-bold">
                    {idx + 1}
                  </span>
                  <h4 className="text-sm font-bold font-mono text-zinc-200">
                    {round.round}
                  </h4>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-inter pt-1">
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500">What It Tests:</span>
                  <p className="text-zinc-300 mt-0.5">{round.whatItTests}</p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500">Your Preparation Focus:</span>
                  <p className="text-emerald-400 mt-0.5 font-medium">{round.prepFocus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Searchable Interviewer Q&A Bank */}
      <div className="rounded-xl border border-[#1e2029] bg-[#0d0e12] p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1e2029] pb-3">
          <div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-emerald-400" />
              <h3 className="text-base font-bold font-outfit text-white">
                Interviewer Q&A Bank
              </h3>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5 font-inter">
              Exact questions asked by product company interviewers across all rounds.
            </p>
          </div>

          <div className="relative max-w-xs w-full">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-zinc-500" />
            <input
              type="text"
              value={qaSearch}
              onChange={(e) => setQaSearch(e.target.value)}
              placeholder="Search questions..."
              className="w-full rounded-lg border border-[#1e2029] bg-[#121318] pl-8 pr-3 py-1.5 text-xs font-mono text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-3">
          {filteredQa.slice(0, 15).map((q) => {
            const isRevealed = !!revealedQa[q.id];
            return (
              <div
                key={q.id}
                className="p-3.5 rounded-lg border border-[#1e2029] bg-[#121318] space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      {q.section}
                    </span>
                    <h5 className="text-xs font-bold text-white mt-1 font-inter">
                      {q.question}
                    </h5>
                  </div>
                  <button
                    onClick={() => setRevealedQa(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                    className="shrink-0 px-2.5 py-1 text-[11px] font-mono rounded bg-blue-600/20 text-blue-300 border border-blue-500/30 hover:bg-blue-600/30"
                  >
                    {isRevealed ? 'Hide Answer' : 'Structure Answer'}
                  </button>
                </div>

                <div className="text-xs text-zinc-400 font-inter">
                  <span className="font-semibold text-zinc-300">Evaluating: </span>
                  {q.whatEvaluating}
                </div>

                {isRevealed && (
                  <div className="mt-2 pt-2 border-t border-[#1e2029] text-xs font-inter text-emerald-300 bg-emerald-950/20 p-2.5 rounded-md leading-relaxed">
                    <span className="font-semibold text-white">Recommended Answer Structure: </span>
                    {q.howToStructure}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
