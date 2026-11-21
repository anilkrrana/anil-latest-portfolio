import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  PrepState, 
  Problem, 
  DSATopic, 
  JavaTopic, 
  CSFundTopic, 
  DailyTask, 
  MockTest, 
  TimedSession, 
  InterviewQuestion, 
  ProjectPrep, 
  JournalEntry,
  PrepMode,
  StudySession,
  HeatmapDay,
  WeeklyReviewEntry,
  JobApplication,
  SpacedRevisionItem,
  TopicProgressRecord,
  ActiveTimerState
} from '../types/prep';
import { 
  INITIAL_PREP_STATE, 
  INITIAL_DSA_TOPICS, 
  INITIAL_JAVA_TOPICS, 
  INITIAL_CS_TOPICS,
  PATTERN_LIBRARY
} from '../data/defaultPrepData';
import userSavedState from '../data/userPrepState.json';

export const normalizeProject = (p: any, idx: number = 0): ProjectPrep => ({
  id: p?.id || `p${idx + 1}`,
  projectName: p?.projectName || p?.title || p?.name || 'Enterprise E-Commerce Microservices Engine',
  problemSolved: p?.problemSolved || p?.starSituation || p?.situation || 'High-throughput inventory allocation & payment processing during flash sales.',
  architecture: p?.architecture || p?.starAction || p?.action || 'Spring Boot microservices with Spring Cloud Gateway, Kafka event bus, PostgreSQL, Redis cache.',
  technologies: Array.isArray(p?.technologies)
    ? p.technologies
    : (Array.isArray(p?.techStack) ? p.techStack : ['Java 17', 'Spring Boot 3', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes']),
  myContribution: p?.myContribution || p?.starTask || p?.task || 'Designed order processing pipeline, implemented idempotent payment gateway integration, optimized SQL query latency.',
  challenges: p?.challenges || 'Preventing double-booking of inventory under 5,000 requests/second concurrent load.',
  performance: p?.performance || p?.starResult || p?.result || 'Reduced average P99 API response time from 450ms to 42ms using Redis caching & async Kafka processing.',
  testing: p?.testing || '85%+ JUnit 5 test coverage, Mockito for unit testing, Testcontainers for integration tests.',
  deployment: p?.deployment || 'Deployed on AWS EKS using Helm charts and GitHub Actions CI/CD pipeline.',
  crossQuestions: Array.isArray(p?.crossQuestions)
    ? p.crossQuestions.map((q: any) => ({
        question: q?.question || '',
        myAnswer: q?.myAnswer || q?.answer || ''
      }))
    : [
        {
          question: 'How did you handle distributed transactions across Microservices without 2-phase commit?',
          myAnswer: 'Used the Saga Pattern with orchestration. Each microservice publishes events to Kafka, and if a downstream service fails, compensating transactions are published to roll back state.'
        },
        {
          question: 'How did you prevent Redis cache stampede/thundering herd during flash sales?',
          myAnswer: 'Used Redis distributed lock (Redisson) for cache miss calculation combined with jittered TTL expiration times.'
        }
      ]
});

export const normalizePrepState = (raw: any): PrepState => {
  if (!raw || typeof raw !== 'object') {
    return INITIAL_PREP_STATE;
  }

  const base = INITIAL_PREP_STATE;

  const projects = (Array.isArray(raw.projects) && raw.projects.length > 0)
    ? raw.projects.map((p: any, idx: number) => normalizeProject(p, idx))
    : base.projects.map((p: any, idx: number) => normalizeProject(p, idx));

  return {
    targetDate: typeof raw.targetDate === 'string' ? raw.targetDate : base.targetDate,
    mode: raw.mode === 'interview' ? 'interview' : 'assessment',
    dailyTasks: Array.isArray(raw.dailyTasks) ? raw.dailyTasks : base.dailyTasks,
    dsaTopics: (Array.isArray(raw.dsaTopics) && raw.dsaTopics.length > 0) ? raw.dsaTopics : base.dsaTopics,
    javaTopics: (Array.isArray(raw.javaTopics) && raw.javaTopics.length > 0) ? raw.javaTopics : base.javaTopics,
    csTopics: (Array.isArray(raw.csTopics) && raw.csTopics.length > 0) ? raw.csTopics : base.csTopics,
    problems: Array.isArray(raw.problems) ? raw.problems : base.problems,
    timedSessions: Array.isArray(raw.timedSessions) ? raw.timedSessions : base.timedSessions,
    mockTests: Array.isArray(raw.mockTests) ? raw.mockTests : base.mockTests,
    interviewQuestions: (Array.isArray(raw.interviewQuestions) && raw.interviewQuestions.length > 0) ? raw.interviewQuestions : base.interviewQuestions,
    projects,
    journalEntries: Array.isArray(raw.journalEntries) ? raw.journalEntries : base.journalEntries,
    studyDays: Array.isArray(raw.studyDays) ? raw.studyDays : base.studyDays,
    totalStudyHours: typeof raw.totalStudyHours === 'number' ? raw.totalStudyHours : (base.totalStudyHours || 0),
    schemaVersion: 3,
    studySessions: Array.isArray(raw.studySessions) ? raw.studySessions : (base.studySessions || []),
    weeklyReviews: Array.isArray(raw.weeklyReviews) ? raw.weeklyReviews : (base.weeklyReviews || []),
    applications: Array.isArray(raw.applications) ? raw.applications : (base.applications || []),
    topicProgress: (typeof raw.topicProgress === 'object' && raw.topicProgress !== null) ? raw.topicProgress : (base.topicProgress || {}),
    spacedRevisions: Array.isArray(raw.spacedRevisions) ? raw.spacedRevisions : (base.spacedRevisions || []),
    targetCompanyProfile: raw.targetCompanyProfile || 'general',
  };
};

const DEFAULT_BASE_STATE: PrepState = normalizePrepState(userSavedState);

interface ReadinessBreakdown {
  overall: number;
  dsa: number;
  javaCS: number;
  speed: number;
  accuracy: number;
  pattern: number;
  mock: number;
}

interface PrepContextType {
  state: PrepState;
  daysRemaining: number;
  isAssessmentPassed: boolean;
  readiness: ReadinessBreakdown;
  nextAction: string;
  isAdmin: boolean;
  loginAdmin: (pin: string) => boolean;
  logoutAdmin: () => void;
  syncStatus: 'synced' | 'saving' | 'offline';
  lastSavedAt: string | null;
  syncToCodebase: (overrideState?: PrepState) => Promise<{ success: boolean; message: string }>;
  
  // Growth OS additions
  heatmapDays: HeatmapDay[];
  streakStats: {
    currentStreak: number;
    longestStreak: number;
    totalActiveDays: number;
    totalStudyMinutes: number;
    totalProblemsSolved: number;
  };
  pillarReadiness: Record<string, { name: string; weight: number; score: number; contribution: number }>;
  logStudySession: (session: Omit<StudySession, 'id' | 'createdAt'>) => void;
  updateStudySession: (id: string, updates: Partial<StudySession>) => void;
  deleteStudySession: (id: string) => void;
  setTopicProgress: (topicId: string, status: TopicProgressRecord['status'], confidence: number, notes?: string) => void;
  addWeeklyReview: (entry: Omit<WeeklyReviewEntry, 'id' | 'createdAt'>) => void;
  addApplication: (app: Omit<JobApplication, 'id' | 'createdAt'>) => void;
  updateApplication: (id: string, updates: Partial<JobApplication>) => void;
  deleteApplication: (id: string) => void;
  triggerRevision: (topicId: string, topicName: string, pillar: string) => void;
  completeRevision: (revisionId: string, newConfidence?: number) => void;
  setTargetCompanyProfile: (profile: 'general' | 'microsoft' | 'amazon' | 'google') => void;

  // Actions
  toggleMode: (mode?: PrepMode) => void;
  addProblem: (problem: Omit<Problem, 'id'>) => void;
  updateProblem: (id: string, updates: Partial<Problem>) => void;
  deleteProblem: (id: string) => void;
  updateDSATopic: (id: string, updates: Partial<DSATopic>) => void;
  updateJavaTopic: (id: string, updates: Partial<JavaTopic>) => void;
  updateCSTopic: (id: string, updates: Partial<CSFundTopic>) => void;
  toggleDailyTask: (id: string) => void;
  addDailyTask: (category: DailyTask['category'], text: string) => void;
  deleteDailyTask: (id: string) => void;
  saveTimedSession: (session: Omit<TimedSession, 'id'>) => void;
  saveMockTest: (mock: Omit<MockTest, 'id'>) => void;
  updateInterviewQ: (id: string, updates: Partial<InterviewQuestion>) => void;
  addInterviewQ: (category: InterviewQuestion['category'], question: string, answerSnippet?: string) => void;
  updateProjectPrep: (id: string, updates: Partial<ProjectPrep>) => void;
  addJournalEntry: (entry: Omit<JournalEntry, 'id'>) => void;
  
  // Data management
  exportData: () => void;
  importData: (jsonData: string) => boolean;
  resetData: () => void;
  seedDemoData: () => void;
}

const PrepContext = createContext<PrepContextType | undefined>(undefined);

const STORAGE_KEY = 'infosys_sp_crack_system_v1';
const ADMIN_STORAGE_KEY = 'prep_admin_persistent_v1';

export const PrepProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<PrepState>(DEFAULT_BASE_STATE);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'synced' | 'saving' | 'offline'>('synced');
  const [lastSavedAt, setLastSavedAt] = useState<string | null>(null);

  const hasHydratedRef = React.useRef(false);
  const autoSaveTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  // Check admin session from persistent localStorage, fallback to legacy sessionStorage
  useEffect(() => {
    try {
      const persistentAdmin = localStorage.getItem(ADMIN_STORAGE_KEY);
      const sessionAdmin = sessionStorage.getItem('prep_admin_session');
      if (persistentAdmin === 'true' || sessionAdmin === 'true') {
        setIsAdmin(true);
        localStorage.setItem(ADMIN_STORAGE_KEY, 'true');
      }
    } catch (e) {
      console.error('Session storage read error:', e);
    }
  }, []);

  const loginAdmin = (pin: string): boolean => {
    const targetPin = process.env.NEXT_PUBLIC_PREP_ADMIN_PIN || '773970';
    if (pin.trim() === targetPin) {
      setIsAdmin(true);
      try {
        localStorage.setItem(ADMIN_STORAGE_KEY, 'true');
        sessionStorage.setItem('prep_admin_session', 'true');
      } catch (e) {
        console.error(e);
      }
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    try {
      localStorage.removeItem(ADMIN_STORAGE_KEY);
      sessionStorage.removeItem('prep_admin_session');
    } catch (e) {
      console.error(e);
    }
  };

  // Sync to codebase disk via Next.js API
  const syncToCodebase = async (overrideState?: PrepState): Promise<{ success: boolean; message: string }> => {
    try {
      setSyncStatus('saving');
      const stateToSave = overrideState || state;
      const res = await fetch('/api/prep-state', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          state: stateToSave,
          pin: process.env.NEXT_PUBLIC_PREP_ADMIN_PIN || '773970',
        }),
      });
      const data = await res.json();
      const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setLastSavedAt(nowStr);
      setSyncStatus('synced');
      return { 
        success: data.success ?? true, 
        message: data.message || 'Saved to codebase data/userPrepState.json!' 
      };
    } catch (err: any) {
      console.warn('API sync failed, preserved in localStorage:', err);
      setSyncStatus('offline');
      return {
        success: true,
        message: 'Saved in local browser storage (API offline).',
      };
    }
  };

  // Load from LocalStorage first, then verify with server
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          const normalized = normalizePrepState(parsed);
          setState(normalized);
          // Heal the localStorage cache immediately with normalized fields
          localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
        }
      } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_BASE_STATE));
      }
    } catch (e) {
      console.error('Failed to load prep data from localStorage:', e);
      try {
        const backup = localStorage.getItem(STORAGE_KEY + '_backup');
        if (backup) {
          const parsedBackup = JSON.parse(backup);
          if (parsedBackup && typeof parsedBackup === 'object') {
            const normalizedBackup = normalizePrepState(parsedBackup);
            setState(normalizedBackup);
          }
        }
      } catch (err) {}
    } finally {
      hasHydratedRef.current = true;
      setIsLoaded(true);
    }

    // Background verify: check if server has persisted state
    fetch('/api/prep-state')
      .then(res => res.json())
      .then(serverData => {
        if (serverData && typeof serverData === 'object' && serverData.targetDate) {
          const normalizedServer = normalizePrepState(serverData);
          const currentLocal = localStorage.getItem(STORAGE_KEY);
          if (!currentLocal) {
            setState(normalizedServer);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizedServer));
          }
        }
      })
      .catch(() => {});
  }, []);

  // Save to LocalStorage & Debounce Sync to Disk in Owner Mode
  useEffect(() => {
    if (!hasHydratedRef.current || !isLoaded) return;

    try {
      const serialized = JSON.stringify(state);
      const prev = localStorage.getItem(STORAGE_KEY);
      if (prev && prev !== serialized) {
        localStorage.setItem(STORAGE_KEY + '_backup', prev);
      }
      localStorage.setItem(STORAGE_KEY, serialized);
      const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setLastSavedAt(nowStr);
    } catch (e) {
      console.error('Failed to save prep data:', e);
    }

    if (isAdmin) {
      if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
      autoSaveTimerRef.current = setTimeout(() => {
        syncToCodebase(state);
      }, 1500);
    }

    return () => {
      if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    };
  }, [state, isLoaded, isAdmin]);

  // Record today's study activity
  const recordTodayActivity = (hours: number = 0.5) => {
    const todayStr = new Date().toISOString().split('T')[0];
    setState(prev => {
      const updatedDays = prev.studyDays.includes(todayStr) 
        ? prev.studyDays 
        : [...prev.studyDays, todayStr];
      return {
        ...prev,
        studyDays: updatedDays,
        totalStudyHours: prev.totalStudyHours + hours
      };
    });
  };

  // Calculate Days Remaining
  const getDaysRemaining = (): number => {
    const target = new Date(state.targetDate);
    const today = new Date();
    // Reset time components for accurate calendar day count
    target.setHours(0,0,0,0);
    today.setHours(0,0,0,0);
    const diffTime = target.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const daysRemaining = getDaysRemaining();
  const isAssessmentPassed = daysRemaining <= 0;

  // Mode auto-switch if passed
  useEffect(() => {
    if (isAssessmentPassed && state.mode !== 'interview') {
      setState(prev => ({ ...prev, mode: 'interview' }));
    }
  }, [isAssessmentPassed, state.mode]);

  // Transparent Readiness Score Engine
  const calculateReadiness = (): ReadinessBreakdown => {
    const { dsaTopics, javaTopics, csTopics, problems, timedSessions, mockTests } = state;

    // 1. DSA Score (30%) - based on status & topic confidence
    let dsaTotal = 0;
    if (dsaTopics.length > 0) {
      const topicScores = dsaTopics.map(t => {
        let statusMult = 0;
        if (t.status === 'Learning') statusMult = 0.25;
        if (t.status === 'Practicing') statusMult = 0.5;
        if (t.status === 'Comfortable') statusMult = 0.75;
        if (t.status === 'Interview Ready') statusMult = 1.0;
        if (t.status === 'Needs Revision') statusMult = 0.6;
        return (statusMult * 50) + (t.confidence * 0.5);
      });
      dsaTotal = topicScores.reduce((a, b) => a + b, 0) / dsaTopics.length;
    }

    // 2. Java & CS Score (20%)
    const allTech = [...javaTopics, ...csTopics];
    const javaCSTotal = allTech.length > 0
      ? allTech.reduce((acc, item) => acc + item.progress, 0) / allTech.length
      : 0;

    // 3. Speed Score (15%) - based on average solve time on problems & timed sessions
    let speed = 0;
    if (problems.length > 0) {
      const avgTime = problems.reduce((acc, p) => acc + p.timeTakenMinutes, 0) / problems.length;
      if (avgTime <= 20) speed = 100;
      else if (avgTime <= 35) speed = 80;
      else if (avgTime <= 50) speed = 60;
      else speed = 40;
    } else {
      speed = 0;
    }

    // 4. Accuracy & Independence Score (15%)
    let accuracy = 0;
    if (problems.length > 0) {
      const independentCount = problems.filter(p => p.solvedIndependently).length;
      const noHintCount = problems.filter(p => p.hintsRequired === 0).length;
      accuracy = ((independentCount / problems.length) * 60) + ((noHintCount / problems.length) * 40);
    } else {
      accuracy = 0;
    }

    // 5. Pattern Recognition (10%)
    const distinctPatternsUsed = new Set(problems.map(p => p.pattern)).size;
    const pattern = Math.min(100, (distinctPatternsUsed / PATTERN_LIBRARY.length) * 100);

    // 6. Mock Performance (10%)
    let mock = 0;
    if (mockTests.length > 0) {
      mock = mockTests.reduce((acc, m) => acc + ((m.score / m.maxScore) * 100), 0) / mockTests.length;
    } else {
      mock = 0;
    }

    const overall = Math.round(
      (dsaTotal * 0.30) +
      (javaCSTotal * 0.20) +
      (speed * 0.15) +
      (accuracy * 0.15) +
      (pattern * 0.10) +
      (mock * 0.10)
    );

    return {
      overall: Math.min(100, Math.max(0, overall)),
      dsa: Math.round(dsaTotal),
      javaCS: Math.round(javaCSTotal),
      speed: Math.round(speed),
      accuracy: Math.round(accuracy),
      pattern: Math.round(pattern),
      mock: Math.round(mock)
    };
  };

  const readiness = calculateReadiness();

  // === Growth OS Activity Heatmap & Streak Logic ===
  const heatmapDays = React.useMemo<HeatmapDay[]>(() => {
    const days: HeatmapDay[] = [];
    const now = new Date();
    // 365 days ending today
    for (let i = 364; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];

      const sessions = (state.studySessions || []).filter(s => s.date === dateStr);
      const totalMinutes = sessions.reduce((acc, s) => acc + (s.durationMinutes || 0), 0);
      const problemsSolved = sessions.reduce((acc, s) => acc + (s.problemsSolved || 0), 0);
      const categories = Array.from(new Set(sessions.map(s => s.category).filter(Boolean)));
      const topics = sessions.map(s => s.topic).filter(Boolean);

      const hasLegacyDay = (state.studyDays || []).includes(dateStr);
      const hasQualifyingWork = totalMinutes > 0 || problemsSolved > 0 || hasLegacyDay;

      let level: 0 | 1 | 2 | 3 = 0;
      if (totalMinutes >= 90 || problemsSolved >= 2) {
        level = 3;
      } else if (totalMinutes >= 30 || problemsSolved >= 1) {
        level = 2;
      } else if (totalMinutes > 0 || hasLegacyDay) {
        level = 1;
      }

      days.push({
        date: dateStr,
        totalMinutes: totalMinutes || (hasLegacyDay ? 45 : 0),
        problemsSolved,
        categories,
        topics,
        sessionsCount: sessions.length || (hasLegacyDay ? 1 : 0),
        level,
        hasQualifyingWork
      });
    }
    return days;
  }, [state.studySessions, state.studyDays]);

  const streakStats = React.useMemo(() => {
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;
    let totalActiveDays = 0;
    const totalProblems = (state.problems || []).length;

    for (const day of heatmapDays) {
      if (day.hasQualifyingWork) {
        totalActiveDays++;
        tempStreak++;
        if (tempStreak > longestStreak) longestStreak = tempStreak;
      } else {
        tempStreak = 0;
      }
    }

    const todayIndex = heatmapDays.length - 1;
    const todayActive = heatmapDays[todayIndex]?.hasQualifyingWork;
    const yesterdayActive = heatmapDays[todayIndex - 1]?.hasQualifyingWork;

    if (todayActive) {
      let idx = todayIndex;
      while (idx >= 0 && heatmapDays[idx]?.hasQualifyingWork) {
        currentStreak++;
        idx--;
      }
    } else if (yesterdayActive) {
      let idx = todayIndex - 1;
      while (idx >= 0 && heatmapDays[idx]?.hasQualifyingWork) {
        currentStreak++;
        idx--;
      }
    }

    const totalStudyMinutes = heatmapDays.reduce((acc, d) => acc + d.totalMinutes, 0);

    return {
      currentStreak,
      longestStreak: Math.max(longestStreak, currentStreak),
      totalActiveDays,
      totalStudyMinutes,
      totalProblemsSolved: totalProblems
    };
  }, [heatmapDays, state.problems]);

  // === Growth OS Data-Driven 11-Pillar Readiness ===
  const pillarReadiness = React.useMemo(() => {
    const tp = state.topicProgress || {};

    const dsaSolved = (state.problems || []).length;
    const dsaScore = Math.min(100, Math.round((dsaSolved / 35) * 100));

    const hldCompleted = Object.entries(tp).filter(([k, v]) => k.startsWith('sd-') && v.status === 'Completed').length;
    const hldScore = Math.min(100, Math.round((hldCompleted / 10) * 100));

    const lldCompleted = Object.entries(tp).filter(([k, v]) => (k.startsWith('pat-') || k.startsWith('mc-')) && v.status === 'Completed').length;
    const lldScore = Math.min(100, Math.round((lldCompleted / 8) * 100));

    const javaCompleted = Object.entries(tp).filter(([k, v]) => k.startsWith('java-') && v.status === 'Completed').length;
    const javaScore = Math.min(100, Math.round((javaCompleted / 10) * 100));

    const backendCompleted = Object.entries(tp).filter(([k, v]) => k.startsWith('backend-') && v.status === 'Completed').length;
    const backendScore = Math.min(100, Math.round((backendCompleted / 8) * 100));

    const dbCompleted = Object.entries(tp).filter(([k, v]) => k.startsWith('db-') && v.status === 'Completed').length;
    const dbScore = Math.min(100, Math.round((dbCompleted / 6) * 100));

    const csCompleted = Object.entries(tp).filter(([k, v]) => k.startsWith('cs-') && v.status === 'Completed').length;
    const csScore = Math.min(100, Math.round((csCompleted / 6) * 100));

    const cloudCompleted = Object.entries(tp).filter(([k, v]) => k.startsWith('cloud-') && v.status === 'Completed').length;
    const cloudScore = Math.min(100, Math.round((cloudCompleted / 5) * 100));

    const behCompleted = Object.entries(tp).filter(([k, v]) => k.startsWith('lp-') && v.status === 'Completed').length;
    const behScore = Math.min(100, Math.round((behCompleted / 6) * 100));

    const projectScore = (state.projects || []).length > 0 ? 80 : 0;

    const mockCount = (state.mockTests || []).length + (state.timedSessions || []).length;
    const mockScore = Math.min(100, Math.round((mockCount / 5) * 100));

    return {
      dsa: { name: 'Data Structures & Algorithms', weight: 22, score: dsaScore, contribution: +(dsaScore * 0.22).toFixed(1) },
      hld: { name: 'High-Level System Design', weight: 18, score: hldScore, contribution: +(hldScore * 0.18).toFixed(1) },
      lld: { name: 'Low-Level Design & Machine Coding', weight: 10, score: lldScore, contribution: +(lldScore * 0.10).toFixed(1) },
      java: { name: 'Core Java & JVM Internals', weight: 8, score: javaScore, contribution: +(javaScore * 0.08).toFixed(1) },
      backend: { name: 'Backend Engineering & Kafka', weight: 8, score: backendScore, contribution: +(backendScore * 0.08).toFixed(1) },
      database: { name: 'Database Engineering & SQL', weight: 6, score: dbScore, contribution: +(dbScore * 0.06).toFixed(1) },
      corecs: { name: 'CS Fundamentals (OS, Networks)', weight: 6, score: csScore, contribution: +(csScore * 0.06).toFixed(1) },
      cloud: { name: 'Cloud Fundamentals (AWS, Azure)', weight: 5, score: cloudScore, contribution: +(cloudScore * 0.05).toFixed(1) },
      behavioral: { name: 'Behavioral Interviews (STAR)', weight: 7, score: behScore, contribution: +(behScore * 0.07).toFixed(1) },
      projects: { name: 'Project Deep Dive & Defense', weight: 5, score: projectScore, contribution: +(projectScore * 0.05).toFixed(1) },
      mocks: { name: 'Mock Interview Analytics', weight: 5, score: mockScore, contribution: +(mockScore * 0.05).toFixed(1) },
    };
  }, [state.topicProgress, state.problems, state.projects, state.mockTests, state.timedSessions]);

  // === Growth OS Method Implementations ===
  const logStudySession = (session: Omit<StudySession, 'id' | 'createdAt'>) => {
    const newSession: StudySession = {
      ...session,
      id: `sess_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      createdAt: new Date().toISOString()
    };

    setState(prev => {
      const studySessions = [newSession, ...(prev.studySessions || [])];
      const studyDaysSet = new Set(prev.studyDays || []);
      studyDaysSet.add(session.date);
      const studyDays = Array.from(studyDaysSet);
      const totalStudyHours = +(prev.totalStudyHours + (session.durationMinutes / 60)).toFixed(1);

      return {
        ...prev,
        studySessions,
        studyDays,
        totalStudyHours
      };
    });
  };

  const updateStudySession = (id: string, updates: Partial<StudySession>) => {
    setState(prev => ({
      ...prev,
      studySessions: (prev.studySessions || []).map(s => s.id === id ? { ...s, ...updates } : s)
    }));
  };

  const deleteStudySession = (id: string) => {
    setState(prev => {
      const sessionToDelete = (prev.studySessions || []).find(s => s.id === id);
      const filtered = (prev.studySessions || []).filter(s => s.id !== id);
      const deductedHours = sessionToDelete ? +(sessionToDelete.durationMinutes / 60).toFixed(1) : 0;
      const totalStudyHours = Math.max(0, +(prev.totalStudyHours - deductedHours).toFixed(1));

      return {
        ...prev,
        studySessions: filtered,
        totalStudyHours
      };
    });
  };

  const setTopicProgress = (topicId: string, status: TopicProgressRecord['status'], confidence: number, notes?: string) => {
    const today = new Date().toISOString().split('T')[0];
    setState(prev => ({
      ...prev,
      topicProgress: {
        ...(prev.topicProgress || {}),
        [topicId]: {
          status,
          confidence: Math.min(100, Math.max(0, confidence)),
          lastStudiedDate: today,
          notes: notes || prev.topicProgress?.[topicId]?.notes
        }
      }
    }));
  };

  const addWeeklyReview = (entry: Omit<WeeklyReviewEntry, 'id' | 'createdAt'>) => {
    const newReview: WeeklyReviewEntry = {
      ...entry,
      id: `wr_${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    setState(prev => ({
      ...prev,
      weeklyReviews: [newReview, ...(prev.weeklyReviews || [])]
    }));
  };

  const addApplication = (app: Omit<JobApplication, 'id' | 'createdAt'>) => {
    const newApp: JobApplication = {
      ...app,
      id: `app_${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    setState(prev => ({
      ...prev,
      applications: [newApp, ...(prev.applications || [])]
    }));
  };

  const updateApplication = (id: string, updates: Partial<JobApplication>) => {
    setState(prev => ({
      ...prev,
      applications: (prev.applications || []).map(a => a.id === id ? { ...a, ...updates } : a)
    }));
  };

  const deleteApplication = (id: string) => {
    setState(prev => ({
      ...prev,
      applications: (prev.applications || []).filter(a => a.id !== id)
    }));
  };

  const triggerRevision = (topicId: string, topicName: string, pillar: string) => {
    const today = new Date();
    const nextDate = new Date(today);
    nextDate.setDate(nextDate.getDate() + 1);
    const nextDateStr = nextDate.toISOString().split('T')[0];

    const newItem: SpacedRevisionItem = {
      id: `rev_${topicId}`,
      topicId,
      topicName,
      pillar,
      firstLearnedDate: today.toISOString().split('T')[0],
      nextRevisionDate: nextDateStr,
      intervalIndex: 0,
      status: 'Upcoming'
    };

    setState(prev => {
      const existing = (prev.spacedRevisions || []).filter(r => r.topicId !== topicId);
      return {
        ...prev,
        spacedRevisions: [newItem, ...existing]
      };
    });
  };

  const completeRevision = (revisionId: string, newConfidence?: number) => {
    const INTERVAL_DAYS = [1, 3, 7, 14, 30];
    setState(prev => {
      const revisions = (prev.spacedRevisions || []).map(item => {
        if (item.id !== revisionId) return item;
        const nextIdx = item.intervalIndex + 1;
        if (nextIdx >= INTERVAL_DAYS.length) {
          return {
            ...item,
            lastRevisedDate: new Date().toISOString().split('T')[0],
            status: 'Mastered' as const,
            intervalIndex: nextIdx
          };
        }
        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + INTERVAL_DAYS[nextIdx]);
        return {
          ...item,
          lastRevisedDate: new Date().toISOString().split('T')[0],
          nextRevisionDate: nextDate.toISOString().split('T')[0],
          intervalIndex: nextIdx,
          status: 'Upcoming' as const
        };
      });

      return {
        ...prev,
        spacedRevisions: revisions
      };
    });
  };

  const setTargetCompanyProfile = (profile: 'general' | 'microsoft' | 'amazon' | 'google') => {
    setState(prev => ({ ...prev, targetCompanyProfile: profile }));
  };


  // Dynamically determine "What should I do next?"
  const getNextAction = (): string => {
    // Check overdue problems
    const todayStr = new Date().toISOString().split('T')[0];
    const overdue = state.problems.find(p => p.revisionRequired && p.nextRevisionDate && p.nextRevisionDate <= todayStr);
    if (overdue) {
      return `Revise overdue problem: "${overdue.name}" (${overdue.topic} / ${overdue.pattern})`;
    }

    // Check incomplete daily tasks
    const pendingTask = state.dailyTasks.find(t => !t.completed);
    if (pendingTask) {
      return `Complete daily task: ${pendingTask.text}`;
    }

    // Check low confidence DSA topics
    const weakDSATopic = state.dsaTopics.find(t => t.status === 'Not Started' || t.status === 'Needs Revision');
    if (weakDSATopic) {
      return `Practice ${weakDSATopic.name} — Solve 2 problems and update pattern confidence`;
    }

    if (state.mockTests.length === 0) {
      return `Take your first Infosys SP Mock Assessment to establish your baseline score`;
    }

    return `Complete today's 45-minute timed practice set`;
  };

  const nextAction = getNextAction();

  // Action implementations
  const toggleMode = (mode?: PrepMode) => {
    setState(prev => ({
      ...prev,
      mode: mode || (prev.mode === 'assessment' ? 'interview' : 'assessment')
    }));
  };

  const addProblem = (problemData: Omit<Problem, 'id'>) => {
    if (!isAdmin) {
      console.warn('Action denied: Owner Mode required to add problems.');
      return;
    }
    const id = 'prob_' + Date.now();
    const newProblem: Problem = { ...problemData, id };
    
    setState(prev => {
      // Update corresponding DSA topic counts
      const updatedDSATopics = prev.dsaTopics.map(t => {
        if (t.name.toLowerCase() === newProblem.topic.toLowerCase() || t.id === newProblem.topic.toLowerCase()) {
          return {
            ...t,
            problemsCount: t.problemsCount + 1,
            independentCount: t.independentCount + (newProblem.solvedIndependently ? 1 : 0),
            hintsCount: t.hintsCount + newProblem.hintsRequired,
            status: t.status === 'Not Started' ? ('Practicing' as const) : t.status
          };
        }
        return t;
      });

      return {
        ...prev,
        problems: [newProblem, ...prev.problems],
        dsaTopics: updatedDSATopics
      };
    });

    recordTodayActivity(0.5);
  };

  const updateProblem = (id: string, updates: Partial<Problem>) => {
    if (!isAdmin) return;
    setState(prev => ({
      ...prev,
      problems: prev.problems.map(p => p.id === id ? { ...p, ...updates } : p)
    }));
  };

  const deleteProblem = (id: string) => {
    if (!isAdmin) return;
    setState(prev => ({
      ...prev,
      problems: prev.problems.filter(p => p.id !== id)
    }));
  };

  const updateDSATopic = (id: string, updates: Partial<DSATopic>) => {
    if (!isAdmin) return;
    setState(prev => ({
      ...prev,
      dsaTopics: prev.dsaTopics.map(t => t.id === id ? { ...t, ...updates } : t)
    }));
  };

  const updateJavaTopic = (id: string, updates: Partial<JavaTopic>) => {
    if (!isAdmin) return;
    setState(prev => ({
      ...prev,
      javaTopics: prev.javaTopics.map(t => t.id === id ? { ...t, ...updates } : t)
    }));
  };

  const updateCSTopic = (id: string, updates: Partial<CSFundTopic>) => {
    if (!isAdmin) return;
    setState(prev => ({
      ...prev,
      csTopics: prev.csTopics.map(t => t.id === id ? { ...t, ...updates } : t)
    }));
  };

  const toggleDailyTask = (id: string) => {
    if (!isAdmin) return;
    setState(prev => ({
      ...prev,
      dailyTasks: prev.dailyTasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    }));
    recordTodayActivity(0.25);
  };

  const addDailyTask = (category: DailyTask['category'], text: string) => {
    if (!isAdmin) return;
    const id = 'task_' + Date.now();
    setState(prev => ({
      ...prev,
      dailyTasks: [...prev.dailyTasks, { id, category, text, completed: false }]
    }));
  };

  const deleteDailyTask = (id: string) => {
    if (!isAdmin) return;
    setState(prev => ({
      ...prev,
      dailyTasks: prev.dailyTasks.filter(t => t.id !== id)
    }));
  };

  const saveTimedSession = (sessionData: Omit<TimedSession, 'id'>) => {
    if (!isAdmin) return;
    const id = 'session_' + Date.now();
    setState(prev => ({
      ...prev,
      timedSessions: [{ ...sessionData, id }, ...prev.timedSessions]
    }));
    recordTodayActivity(sessionData.timeUsedMinutes / 60);
  };

  const saveMockTest = (mockData: Omit<MockTest, 'id'>) => {
    if (!isAdmin) return;
    const id = 'mock_' + Date.now();
    setState(prev => ({
      ...prev,
      mockTests: [{ ...mockData, id }, ...prev.mockTests]
    }));
    recordTodayActivity(mockData.timeTakenMinutes / 60);
  };

  const updateInterviewQ = (id: string, updates: Partial<InterviewQuestion>) => {
    if (!isAdmin) return;
    setState(prev => ({
      ...prev,
      interviewQuestions: prev.interviewQuestions.map(q => q.id === id ? { ...q, ...updates } : q)
    }));
  };

  const addInterviewQ = (category: InterviewQuestion['category'], question: string, answerSnippet?: string) => {
    if (!isAdmin) return;
    const id = 'iq_' + Date.now();
    setState(prev => ({
      ...prev,
      interviewQuestions: [...prev.interviewQuestions, { id, category, question, answerSnippet, status: 'Not Practiced' }]
    }));
  };

  const updateProjectPrep = (id: string, updates: Partial<ProjectPrep>) => {
    if (!isAdmin) return;
    setState(prev => {
      const currentProjects = Array.isArray(prev.projects) && prev.projects.length > 0
        ? prev.projects
        : DEFAULT_BASE_STATE.projects;
      return {
        ...prev,
        projects: currentProjects.map(p => p.id === id ? { ...p, ...updates } : p)
      };
    });
  };

  const addJournalEntry = (entryData: Omit<JournalEntry, 'id'>) => {
    if (!isAdmin) return;
    const id = 'j_' + Date.now();
    setState(prev => ({
      ...prev,
      journalEntries: [{ ...entryData, id }, ...(Array.isArray(prev.journalEntries) ? prev.journalEntries : [])]
    }));
    recordTodayActivity(0.3);
  };

  const exportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `infosys_sp_prep_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importData = (jsonData: string): boolean => {
    if (!isAdmin) return false;
    try {
      const parsed = JSON.parse(jsonData);
      if (parsed && typeof parsed === 'object') {
        const normalized = normalizePrepState(parsed);
        setState(normalized);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
        return true;
      }
      return false;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  const resetData = () => {
    if (!isAdmin) return;
    setState(INITIAL_PREP_STATE);
  };

  const seedDemoData = () => {
    if (!isAdmin) return;
    const today = new Date().toISOString().split('T')[0];
    setState({
      ...INITIAL_PREP_STATE,
      problems: [
        {
          id: 'p1',
          name: 'Two Sum',
          date: today,
          topic: 'HashMap',
          pattern: 'HashMap / Frequency Counting',
          difficulty: 'Easy',
          timeTakenMinutes: 12,
          solvedIndependently: true,
          hintsRequired: 0,
          mistakeNotes: 'None. Clean HashMap lookup.',
          revisionRequired: false
        },
        {
          id: 'p2',
          name: 'Group Anagrams',
          date: today,
          topic: 'Strings',
          pattern: 'HashMap / Frequency Counting',
          difficulty: 'Medium',
          timeTakenMinutes: 24,
          solvedIndependently: true,
          hintsRequired: 1,
          mistakeNotes: 'Remember to sort char array or build freq string key.',
          revisionRequired: true,
          nextRevisionDate: today
        },
        {
          id: 'p3',
          name: 'Longest Substring Without Repeating Characters',
          date: today,
          topic: 'Sliding Window',
          pattern: 'Sliding Window',
          difficulty: 'Medium',
          timeTakenMinutes: 38,
          solvedIndependently: false,
          hintsRequired: 2,
          mistakeNotes: 'Missed updating left pointer to max(left, lastSeenIdx + 1).',
          revisionRequired: true,
          nextRevisionDate: today
        }
      ],
      dsaTopics: INITIAL_DSA_TOPICS.map(t => {
        if (t.name === 'HashMap') return { ...t, status: 'Comfortable', problemsCount: 2, independentCount: 2, confidence: 85 };
        if (t.name === 'Strings') return { ...t, status: 'Practicing', problemsCount: 1, independentCount: 1, confidence: 70 };
        if (t.name === 'Sliding Window') return { ...t, status: 'Learning', problemsCount: 1, independentCount: 0, confidence: 45 };
        return t;
      }),
      javaTopics: INITIAL_JAVA_TOPICS.map(j => {
        if (j.name === 'OOP' || j.name === 'Collections') return { ...j, progress: 80, confidence: 85 };
        return j;
      }),
      mockTests: [
        {
          id: 'm1',
          title: 'INFOSYS SP MOCK #1',
          date: today,
          score: 220,
          maxScore: 300,
          q1Status: 'Solved',
          q2Status: 'Solved',
          q3Status: 'Partial',
          timeTakenMinutes: 75,
          totalTimeMinutes: 90,
          notes: 'Q3 TLE on large graph cases. Need DFS memoization optimization.'
        }
      ],
      studyDays: [today],
      totalStudyHours: 2.5
    });
  };

  return (
    <PrepContext.Provider
      value={{
        state,
        daysRemaining,
        isAssessmentPassed,
        readiness,
        nextAction,
        isAdmin,
        loginAdmin,
        logoutAdmin,
        syncStatus,
        lastSavedAt,
        syncToCodebase,
        toggleMode,
        addProblem,
        updateProblem,
        deleteProblem,
        updateDSATopic,
        updateJavaTopic,
        updateCSTopic,
        toggleDailyTask,
        addDailyTask,
        deleteDailyTask,
        saveTimedSession,
        saveMockTest,
        updateInterviewQ,
        addInterviewQ,
        updateProjectPrep,
        addJournalEntry,
        exportData,
        importData,
        resetData,
        seedDemoData,
        heatmapDays,
        streakStats,
        pillarReadiness,
        logStudySession,
        updateStudySession,
        deleteStudySession,
        setTopicProgress,
        addWeeklyReview,
        addApplication,
        updateApplication,
        deleteApplication,
        triggerRevision,
        completeRevision,
        setTargetCompanyProfile
      }}
    >
      {children}
    </PrepContext.Provider>
  );
};

export const usePrep = () => {
  const context = useContext(PrepContext);
  if (!context) {
    throw new Error('usePrep must be used within a PrepProvider');
  }
  return context;
};
