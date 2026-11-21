import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { RESUME_AUDITS } from '../../data/growthOSCurriculum';
import { ApplicationStage, JobApplication } from '../../types/prep';
import { Briefcase, FileText, CalendarCheck, Plus, Trash2, CheckCircle2, AlertCircle } from 'lucide-react';

export const ApplicationsAndCareerTab: React.FC = () => {
  const { state, addApplication, updateApplication, deleteApplication, addWeeklyReview, isAdmin } = usePrep();
  const [activeSubTab, setActiveSubTab] = useState<'pipeline' | 'resume' | 'weekly-review'>('pipeline');

  // Application Pipeline Form State
  const [isAddAppModalOpen, setIsAddAppModalOpen] = useState(false);
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('Senior Software Engineer');
  const [level, setLevel] = useState('SDE-2');
  const [stage, setStage] = useState<ApplicationStage>('Applied');
  const [dateApplied, setDateApplied] = useState(new Date().toISOString().split('T')[0]);
  const [referralContact, setReferralContact] = useState('');
  const [notes, setNotes] = useState('');

  // Weekly Review Form State
  const [weekStartDate, setWeekStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [weeklyProblems, setWeeklyProblems] = useState(5);
  const [weeklyHours, setWeeklyHours] = useState(12);
  const [majorLearning, setMajorLearning] = useState('');
  const [weakestArea, setWeakestArea] = useState('');
  const [energyRating, setEnergyRating] = useState(8);
  const [nextWeekPriorities, setNextWeekPriorities] = useState('');

  const applications = state.applications || [];
  const weeklyReviews = state.weeklyReviews || [];

  const handleAddApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company.trim()) return;

    addApplication({
      company: company.trim(),
      role: role.trim(),
      level: level.trim(),
      stage,
      dateApplied,
      referralContact: referralContact.trim() || undefined,
      notes: notes.trim() || undefined
    });

    setCompany('');
    setNotes('');
    setIsAddAppModalOpen(false);
  };

  const handleAddWeeklyReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!majorLearning.trim()) return;

    addWeeklyReview({
      weekStartDate,
      problemsSolved: Number(weeklyProblems) || 0,
      studyHours: Number(weeklyHours) || 0,
      pillarHours: {},
      majorLearning: majorLearning.trim(),
      weakestArea: weakestArea.trim(),
      energyRating: Number(energyRating) || 8,
      nextWeekPriorities: nextWeekPriorities.trim()
    });

    setMajorLearning('');
    setWeakestArea('');
    setNextWeekPriorities('');
  };

  const stages: ApplicationStage[] = [
    'Interested',
    'Referral Requested',
    'Applied',
    'Recruiter Screen',
    'Technical Assessment',
    'Virtual Loop / Onsite',
    'Offer'
  ];

  return (
    <div className="space-y-6">
      {/* Sub-nav switchers */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#1e2029] pb-3">
        <button
          onClick={() => setActiveSubTab('pipeline')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
            activeSubTab === 'pipeline'
              ? 'bg-blue-600/30 text-blue-300 border border-blue-500/50 shadow-sm'
              : 'text-zinc-400 hover:text-white bg-[#121318] border border-[#1e2029]'
          }`}
        >
          <Briefcase className="h-4 w-4 text-blue-400" />
          <span>Application Pipeline Funnel ({applications.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('resume')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
            activeSubTab === 'resume'
              ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/50 shadow-sm'
              : 'text-zinc-400 hover:text-white bg-[#121318] border border-[#1e2029]'
          }`}
        >
          <FileText className="h-4 w-4 text-emerald-400" />
          <span>Resume Impact & ATS Formula (Google XYZ)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('weekly-review')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
            activeSubTab === 'weekly-review'
              ? 'bg-amber-600/30 text-amber-300 border border-amber-500/50 shadow-sm'
              : 'text-zinc-400 hover:text-white bg-[#121318] border border-[#1e2029]'
          }`}
        >
          <CalendarCheck className="h-4 w-4 text-amber-400" />
          <span>5-Minute Friday Weekly Review ({weeklyReviews.length})</span>
        </button>
      </div>

      {/* Sub-Tab 1: Application Pipeline */}
      {activeSubTab === 'pipeline' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-[#0d0e12] p-4 rounded-xl border border-[#1e2029]">
            <div>
              <h3 className="text-base font-bold font-outfit text-white">
                Multi-Company Application Pipeline
              </h3>
              <p className="text-xs text-zinc-400 font-inter">
                Track every referral, assessment, phone screen, and onsite virtual loop.
              </p>
            </div>

            <button
              onClick={() => setIsAddAppModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add Company</span>
            </button>
          </div>

          {applications.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-zinc-500 border border-[#1e2029] rounded-xl bg-[#0d0e12]">
              No active applications yet. Click &quot;Add Company&quot; to begin tracking your recruitment pipeline.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {applications.map((app) => (
                <div
                  key={app.id}
                  className="rounded-xl border border-[#1e2029] bg-[#0d0e12] p-4 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white font-outfit">{app.company}</h4>
                      <p className="text-xs text-zinc-400 font-inter">{app.role} · {app.level}</p>
                    </div>

                    <button
                      onClick={() => deleteApplication(app.id)}
                      className="p-1 text-zinc-500 hover:text-rose-400 transition-colors"
                      title="Delete Application"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">Current Stage:</label>
                    <select
                      value={app.stage}
                      onChange={(e) => updateApplication(app.id, { stage: e.target.value as ApplicationStage })}
                      className="w-full text-xs font-mono rounded bg-[#121318] border border-[#1e2029] px-2 py-1 text-blue-300 focus:outline-none"
                    >
                      {stages.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-2 border-t border-[#1e2029] text-[11px] font-mono text-zinc-500 flex justify-between">
                    <span>Applied: {app.dateApplied}</span>
                    {app.referralContact && <span className="text-emerald-400">Referral: {app.referralContact}</span>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add Application Modal */}
          {isAddAppModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <div className="w-full max-w-md rounded-2xl border border-[#1e2029] bg-[#0d0e12] p-6 space-y-4">
                <h4 className="text-base font-bold text-white font-outfit">Add Application</h4>
                <form onSubmit={handleAddApp} className="space-y-3">
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">Company Name</label>
                    <input
                      type="text"
                      value={company}
                      onChange={e => setCompany(e.target.value)}
                      placeholder="e.g. Microsoft or Amazon"
                      className="w-full text-xs font-mono rounded-lg border border-[#1e2029] bg-[#121318] p-2 text-white"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs font-mono text-zinc-400 block mb-1">Role</label>
                      <input
                        type="text"
                        value={role}
                        onChange={e => setRole(e.target.value)}
                        className="w-full text-xs font-mono rounded-lg border border-[#1e2029] bg-[#121318] p-2 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-zinc-400 block mb-1">Level</label>
                      <input
                        type="text"
                        value={level}
                        onChange={e => setLevel(e.target.value)}
                        className="w-full text-xs font-mono rounded-lg border border-[#1e2029] bg-[#121318] p-2 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">Stage</label>
                    <select
                      value={stage}
                      onChange={e => setStage(e.target.value as ApplicationStage)}
                      className="w-full text-xs font-mono rounded-lg border border-[#1e2029] bg-[#121318] p-2 text-white"
                    >
                      {stages.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">Referral / Recruiter Contact</label>
                    <input
                      type="text"
                      value={referralContact}
                      onChange={e => setReferralContact(e.target.value)}
                      placeholder="e.g. Jane Doe (LinkedIn referral)"
                      className="w-full text-xs font-mono rounded-lg border border-[#1e2029] bg-[#121318] p-2 text-white"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-3">
                    <button
                      type="button"
                      onClick={() => setIsAddAppModalOpen(false)}
                      className="px-3 py-1.5 text-xs font-mono text-zinc-400"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-3 py-1.5 text-xs font-mono rounded-lg bg-blue-600 text-white font-semibold"
                    >
                      Save Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Sub-Tab 2: Resume Impact Tracker */}
      {activeSubTab === 'resume' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30 text-xs font-inter text-emerald-200">
            <span className="font-semibold text-white">Google XYZ Resume Formula: </span>
            &quot;Accomplished [X] as measured by [Y], by doing [Z]&quot;. SDE-2 recruiters look for ownership of architecture, latency reduction percentages, and transactions processed.
          </div>

          <div className="space-y-3">
            {RESUME_AUDITS.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-[#1e2029] bg-[#0d0e12] p-4 space-y-3"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase text-rose-400">Before (Passive Task-based):</span>
                  <p className="text-xs text-zinc-400 font-inter line-through mt-0.5">{item.asIs}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-inter pt-1">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-500">What You Actually Owned:</span>
                    <p className="text-zinc-300 mt-0.5">{item.owned}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-500">Quantified Impact Metrics:</span>
                    <p className="text-emerald-400 font-semibold mt-0.5">{item.quantifiedImpact}</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#121318] border border-[#1e2029]">
                  <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold">Upgraded SDE-2 Resume Bullet:</span>
                  <p className="text-xs text-white font-inter mt-1 leading-relaxed">{item.improvedBullet}</p>
                </div>

                {item.atsKeywords && (
                  <div className="text-[10px] font-mono text-zinc-500">
                    <span>ATS Keywords Hit: </span>
                    <span className="text-blue-300">{item.atsKeywords}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-Tab 3: 5-Minute Friday Weekly Review */}
      {activeSubTab === 'weekly-review' && (
        <div className="space-y-6">
          <div className="rounded-xl border border-[#1e2029] bg-[#0d0e12] p-5 shadow-sm space-y-4">
            <h3 className="text-base font-bold font-outfit text-white">
              Log 5-Minute Friday Review
            </h3>
            <p className="text-xs text-zinc-400 font-inter">
              Catches drift before it costs you a month. Honest self-reflection on what worked and what to adjust.
            </p>

            <form onSubmit={handleAddWeeklyReview} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">Week Of</label>
                  <input
                    type="date"
                    value={weekStartDate}
                    onChange={e => setWeekStartDate(e.target.value)}
                    className="w-full text-xs font-mono rounded-lg border border-[#1e2029] bg-[#121318] p-2 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">Problems Solved</label>
                  <input
                    type="number"
                    value={weeklyProblems}
                    onChange={e => setWeeklyProblems(Number(e.target.value))}
                    className="w-full text-xs font-mono rounded-lg border border-[#1e2029] bg-[#121318] p-2 text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">Total Study Hours</label>
                  <input
                    type="number"
                    value={weeklyHours}
                    onChange={e => setWeeklyHours(Number(e.target.value))}
                    className="w-full text-xs font-mono rounded-lg border border-[#1e2029] bg-[#121318] p-2 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-zinc-400 block mb-1">Major Technical Learning This Week</label>
                <textarea
                  rows={2}
                  value={majorLearning}
                  onChange={e => setMajorLearning(e.target.value)}
                  placeholder="e.g. Mastered Monotonic Stack for Next Greater Element & Redis Cache-Aside pattern"
                  className="w-full text-xs font-inter rounded-lg border border-[#1e2029] bg-[#121318] p-2 text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">Weakest Area / Where I Struggled</label>
                  <input
                    type="text"
                    value={weakestArea}
                    onChange={e => setWeakestArea(e.target.value)}
                    placeholder="e.g. Graph cycle detection in directed graphs"
                    className="w-full text-xs font-inter rounded-lg border border-[#1e2029] bg-[#121318] p-2 text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">Next Week Focus / Priority</label>
                  <input
                    type="text"
                    value={nextWeekPriorities}
                    onChange={e => setNextWeekPriorities(e.target.value)}
                    placeholder="e.g. Complete 5 Sliding Window problems + 1 Full Mock"
                    className="w-full text-xs font-inter rounded-lg border border-[#1e2029] bg-[#121318] p-2 text-white"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-mono rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-500"
                >
                  Save Weekly Check-In
                </button>
              </div>
            </form>
          </div>

          {/* Past reviews */}
          {weeklyReviews.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                Past Weekly Reflections ({weeklyReviews.length})
              </h4>
              {weeklyReviews.map((wr) => (
                <div key={wr.id} className="p-4 rounded-xl border border-[#1e2029] bg-[#0d0e12] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-white">Week of {wr.weekStartDate}</span>
                    <span className="text-xs font-mono text-emerald-400">{wr.problemsSolved} Solved · {wr.studyHours}h Studied</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-inter">{wr.majorLearning}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
