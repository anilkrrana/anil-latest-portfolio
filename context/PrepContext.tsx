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
  PrepMode
} from '../types/prep';
import { 
  INITIAL_PREP_STATE, 
  INITIAL_DSA_TOPICS, 
  INITIAL_JAVA_TOPICS, 
  INITIAL_CS_TOPICS,
  PATTERN_LIBRARY
} from '../data/defaultPrepData';
import userSavedState from '../data/userPrepState.json';

const DEFAULT_BASE_STATE: PrepState = (userSavedState && (userSavedState as any).targetDate)
  ? (userSavedState as unknown as PrepState)
  : INITIAL_PREP_STATE;

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
    const targetPin = process.env.NEXT_PUBLIC_PREP_ADMIN_PIN || '7739';
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
          pin: process.env.NEXT_PUBLIC_PREP_ADMIN_PIN || '7739',
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
        if (parsed && parsed.targetDate && parsed.dsaTopics) {
          setState(parsed);
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
          if (parsedBackup && parsedBackup.targetDate) {
            setState(parsedBackup);
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
        if (serverData && serverData.targetDate && serverData.dsaTopics) {
          const currentLocal = localStorage.getItem(STORAGE_KEY);
          if (!currentLocal) {
            setState(serverData);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(serverData));
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
    setState(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === id ? { ...p, ...updates } : p)
    }));
  };

  const addJournalEntry = (entryData: Omit<JournalEntry, 'id'>) => {
    if (!isAdmin) return;
    const id = 'j_' + Date.now();
    setState(prev => ({
      ...prev,
      journalEntries: [{ ...entryData, id }, ...prev.journalEntries]
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
      if (parsed.targetDate && parsed.dsaTopics) {
        setState(parsed);
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
        seedDemoData
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
