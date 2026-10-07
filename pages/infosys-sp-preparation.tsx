import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { PrepProvider, usePrep } from '../context/PrepContext';

import { PrepHeader } from '../components/prep/PrepHeader';
import { HeroCountdown } from '../components/prep/HeroCountdown';
import { NextActionBanner } from '../components/prep/NextActionBanner';
import { KPIGrid } from '../components/prep/KPIGrid';
import { TodayPlan } from '../components/prep/TodayPlan';
import { Roadmap22Days } from '../components/prep/Roadmap22Days';
import { DSATracker } from '../components/prep/DSATracker';
import { JavaCSTracker } from '../components/prep/JavaCSTracker';
import { ProblemLog } from '../components/prep/ProblemLog';
import { RevisionEngine } from '../components/prep/RevisionEngine';
import { PatternLibrary } from '../components/prep/PatternLibrary';
import { TimedCodingMode } from '../components/prep/TimedCodingMode';
import { MockAssessmentMode } from '../components/prep/MockAssessmentMode';
import { PerformanceAnalytics } from '../components/prep/PerformanceAnalytics';
import { ReadinessScore } from '../components/prep/ReadinessScore';
import { InterviewMode } from '../components/prep/InterviewMode';
import { ProjectPrep } from '../components/prep/ProjectPrep';
import { DailyJournal } from '../components/prep/DailyJournal';
import { Settings } from '../components/prep/Settings';

import { 
  LayoutDashboard, 
  Map, 
  Code, 
  Coffee, 
  Database, 
  RotateCcw, 
  BookOpen, 
  Clock, 
  ShieldAlert, 
  BarChart3, 
  Award, 
  MessageSquare, 
  FolderGit2, 
  Calendar, 
  Settings as SettingsIcon,
  ArrowLeft
} from 'lucide-react';

type NavTab = 
  | 'overview' 
  | 'roadmap' 
  | 'dsa' 
  | 'java-cs' 
  | 'problems' 
  | 'revision' 
  | 'patterns' 
  | 'timed-coding' 
  | 'mock-tests' 
  | 'analytics' 
  | 'readiness' 
  | 'interview-q' 
  | 'project-prep' 
  | 'journal' 
  | 'settings';

const DashboardContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>('overview');

  const navItems: { id: NavTab; label: string; icon: any; count?: number }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'roadmap', label: '22-Day Roadmap', icon: Map },
    { id: 'dsa', label: 'DSA Tracker', icon: Code },
    { id: 'java-cs', label: 'Java & CS', icon: Coffee },
    { id: 'problems', label: 'Problem Log', icon: Database },
    { id: 'revision', label: 'Revision Engine', icon: RotateCcw },
    { id: 'patterns', label: 'Pattern Library', icon: BookOpen },
    { id: 'timed-coding', label: 'Timed Coding', icon: Clock },
    { id: 'mock-tests', label: 'Mock Exams', icon: ShieldAlert },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'readiness', label: 'Readiness Score', icon: Award },
    { id: 'interview-q', label: 'Interview Q&A', icon: MessageSquare },
    { id: 'project-prep', label: 'Project STAR', icon: FolderGit2 },
    { id: 'journal', label: 'Daily Journal', icon: Calendar },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-inter selection:bg-blue-500 selection:text-white">
      {/* Top Header */}
      <PrepHeader />

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-6">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between border-b border-[#1e2029] pb-2">
          {/* Back to Portfolio Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#1e2029] bg-[#121318] px-3 py-1.5 text-xs font-mono text-zinc-400 hover:text-white hover:border-zinc-700 transition-all shrink-0"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Portfolio</span>
          </Link>

          {/* Sub-nav Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none max-w-full">
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-mono font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-300 border border-blue-500/40 shadow-sm'
                      : 'text-zinc-400 hover:bg-[#121318] hover:text-zinc-200'
                  }`}
                >
                  <IconComp className={`h-3.5 w-3.5 ${isActive ? 'text-blue-400' : 'text-zinc-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Views */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <HeroCountdown />
            <NextActionBanner onNavigateTab={(tab) => setActiveTab(tab as NavTab)} />
            <KPIGrid />
            <TodayPlan />
          </div>
        )}

        {activeTab === 'roadmap' && <Roadmap22Days />}
        {activeTab === 'dsa' && <DSATracker />}
        {activeTab === 'java-cs' && <JavaCSTracker />}
        {activeTab === 'problems' && <ProblemLog />}
        {activeTab === 'revision' && <RevisionEngine />}
        {activeTab === 'patterns' && <PatternLibrary />}
        {activeTab === 'timed-coding' && <TimedCodingMode />}
        {activeTab === 'mock-tests' && <MockAssessmentMode />}
        {activeTab === 'analytics' && <PerformanceAnalytics />}
        {activeTab === 'readiness' && <ReadinessScore />}
        {activeTab === 'interview-q' && <InterviewMode />}
        {activeTab === 'project-prep' && <ProjectPrep />}
        {activeTab === 'journal' && <DailyJournal />}
        {activeTab === 'settings' && <Settings />}
      </main>
    </div>
  );
};

export default function InfosysPrepPage() {
  return (
    <>
      <Head>
        <title>INFOSYS SP L1/L2 — CRACK SYSTEM | Preparation Mission Control</title>
        <meta name="description" content="Mission Control for Infosys SP L1/L2 Specialist Programmer coding assessment and technical interview preparation." />
      </Head>
      <PrepProvider>
        <DashboardContent />
      </PrepProvider>
    </>
  );
}
