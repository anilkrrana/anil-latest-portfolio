import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { PrepProvider, usePrep } from '../context/PrepContext';

// Navigation & Global Components
import { GrowthOSHeader } from '../components/prep/GrowthOSHeader';
import { SessionLoggerModal } from '../components/prep/SessionLoggerModal';
import { ErrorBoundary } from '../components/ErrorBoundary';

// Tab Components
import { ActivityHeatmap } from '../components/prep/ActivityHeatmap';
import { WeightedReadinessDashboard } from '../components/prep/WeightedReadinessDashboard';
import { NextActionBanner } from '../components/prep/NextActionBanner';
import { KPIGrid } from '../components/prep/KPIGrid';
import { TodayPlan } from '../components/prep/TodayPlan';

import { DSATUFTracker } from '../components/prep/DSATUFTracker';
import { ProblemLog } from '../components/prep/ProblemLog';
import { PatternLibrary } from '../components/prep/PatternLibrary';

import { SystemDesignAndLLDTab } from '../components/prep/SystemDesignAndLLDTab';
import { JavaBackendTab } from '../components/prep/JavaBackendTab';
import { DatabasesAndCoreCSTab } from '../components/prep/DatabasesAndCoreCSTab';
import { CloudFundamentalsTab } from '../components/prep/CloudFundamentalsTab';
import { BehavioralAndProjectTab } from '../components/prep/BehavioralAndProjectTab';
import { CompanyPreparationTab } from '../components/prep/CompanyPreparationTab';
import { RevisionAndMocksTab } from '../components/prep/RevisionAndMocksTab';
import { ApplicationsAndCareerTab } from '../components/prep/ApplicationsAndCareerTab';
import { Settings } from '../components/prep/Settings';

import { 
  LayoutDashboard, 
  Code, 
  Layers, 
  Coffee, 
  Database, 
  Cloud, 
  Award, 
  Building2, 
  RotateCcw, 
  Briefcase, 
  Settings as SettingsIcon,
  ArrowLeft,
  Plus
} from 'lucide-react';

type NavTab = 
  | 'overview' 
  | 'dsa' 
  | 'system-design' 
  | 'java-backend' 
  | 'database-cs' 
  | 'cloud' 
  | 'behavioral-project' 
  | 'company-roadmaps' 
  | 'revision-mocks' 
  | 'career-pipeline' 
  | 'settings';

const DashboardContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>('overview');
  const [isSessionLoggerOpen, setIsSessionLoggerOpen] = useState(false);
  const [loggerDuration, setLoggerDuration] = useState(45);

  const navItems: { id: NavTab; label: string; icon: any }[] = [
    { id: 'overview', label: 'Command Center', icon: LayoutDashboard },
    { id: 'dsa', label: 'DSA & Complexity', icon: Code },
    { id: 'system-design', label: 'System Design & LLD', icon: Layers },
    { id: 'java-backend', label: 'Java & Backend', icon: Coffee },
    { id: 'database-cs', label: 'Databases & Core CS', icon: Database },
    { id: 'cloud', label: 'Cloud Fundamentals', icon: Cloud },
    { id: 'behavioral-project', label: 'Behavioral & Projects', icon: Award },
    { id: 'company-roadmaps', label: 'Company Playbooks', icon: Building2 },
    { id: 'revision-mocks', label: 'Revision & Mocks', icon: RotateCcw },
    { id: 'career-pipeline', label: 'Applications & Career', icon: Briefcase },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  const handleOpenLogger = (duration: number = 45) => {
    setLoggerDuration(duration);
    setIsSessionLoggerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-inter selection:bg-blue-500 selection:text-white">
      {/* Top Header */}
      <GrowthOSHeader onOpenSessionLogger={handleOpenLogger} />

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-6">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between border-b border-[#1e2029] pb-2 gap-3">
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
        <ErrorBoundary fallbackTitle="Growth OS Module Error">
          {/* A. Command Center */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Activity Heatmap covering 365 days */}
              <ActivityHeatmap />

              {/* Data-driven 11-Pillar Readiness Gauge */}
              <WeightedReadinessDashboard />

              {/* Action Banner with Continue Learning */}
              <NextActionBanner onNavigateTab={(tab) => {
                if (tab === 'dsa') setActiveTab('dsa');
                else if (tab === 'mock-tests') setActiveTab('revision-mocks');
                else if (tab === 'java-cs') setActiveTab('java-backend');
                else setActiveTab('overview');
              }} />

              {/* KPI Grid */}
              <KPIGrid />

              {/* Today Plan */}
              <TodayPlan />
            </div>
          )}

          {/* B. DSA & Complexity */}
          {activeTab === 'dsa' && (
            <div className="space-y-6">
              <DSATUFTracker />
              <div className="border-t border-[#1e2029] pt-6 space-y-6">
                <ProblemLog />
                <PatternLibrary />
              </div>
            </div>
          )}

          {/* C. System Design & LLD */}
          {activeTab === 'system-design' && <SystemDesignAndLLDTab />}

          {/* D. Java & Backend Engineering */}
          {activeTab === 'java-backend' && <JavaBackendTab />}

          {/* E. Databases & Core CS */}
          {activeTab === 'database-cs' && <DatabasesAndCoreCSTab />}

          {/* F. Cloud Fundamentals */}
          {activeTab === 'cloud' && <CloudFundamentalsTab />}

          {/* G. Behavioral & Projects */}
          {activeTab === 'behavioral-project' && <BehavioralAndProjectTab />}

          {/* H. Company Roadmaps & Question Bank */}
          {activeTab === 'company-roadmaps' && <CompanyPreparationTab />}

          {/* I. Revision & Mock Interviews */}
          {activeTab === 'revision-mocks' && <RevisionAndMocksTab />}

          {/* J. Applications & Career Progress */}
          {activeTab === 'career-pipeline' && <ApplicationsAndCareerTab />}

          {/* Settings */}
          {activeTab === 'settings' && <Settings />}
        </ErrorBoundary>
      </main>

      {/* Global Session Logger Modal */}
      <SessionLoggerModal
        isOpen={isSessionLoggerOpen}
        onClose={() => setIsSessionLoggerOpen(false)}
        defaultDurationMinutes={loggerDuration}
      />
    </div>
  );
};

export default function InfosysPrepPage() {
  return (
    <>
      <Head>
        <title>SDE Crack System | Product Company Interview Preparation</title>
        <meta 
          name="description" 
          content="A structured software engineering interview preparation dashboard covering DSA, Java, system design, backend engineering, computer science fundamentals, and product-company interview readiness." 
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <PrepProvider>
        <DashboardContent />
      </PrepProvider>
    </>
  );
}
