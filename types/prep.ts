export type PrepMode = 'assessment' | 'interview';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type DSAStatus = 
  | 'Not Started' 
  | 'Learning' 
  | 'Practicing' 
  | 'Comfortable' 
  | 'Interview Ready' 
  | 'Needs Revision';

export interface Problem {
  id: string;
  name: string;
  date: string; // ISO format or YYYY-MM-DD
  topic: string;
  pattern: string;
  difficulty: Difficulty;
  timeTakenMinutes: number;
  solvedIndependently: boolean;
  hintsRequired: number; // 0, 1, 2, 3+
  mistakeNotes?: string;
  revisionRequired: boolean;
  nextRevisionDate?: string;
  lastRevisedDate?: string;
  url?: string;
}

export interface DSATopic {
  id: string;
  name: string;
  status: DSAStatus;
  problemsCount: number;
  independentCount: number;
  hintsCount: number;
  confidence: number; // 0 to 100
}

export interface JavaTopic {
  id: string;
  category: 'Core Java' | 'Backend';
  name: string;
  progress: number; // 0 to 100
  confidence: number; // 0 to 100
  lastRevised?: string;
  nextRevision?: string;
}

export interface CSFundTopic {
  id: string;
  name: 'SQL' | 'DBMS' | 'Operating Systems' | 'Computer Networks';
  progress: number; // 0 to 100
  confidence: number; // 0 to 100
  lastRevised?: string;
}

export interface DailyTask {
  id: string;
  category: 'DSA' | 'Java' | 'Timed Practice' | 'Interview' | 'Other';
  text: string;
  completed: boolean;
}

export interface RoadmapPhase {
  phase: number;
  title: string;
  subtitle: string;
  topics: string[];
  daysRange: string; // e.g. "Days 1-3"
  status: 'completed' | 'current' | 'upcoming';
  weakTopics?: string[];
}

export interface PatternItem {
  id: string;
  name: string;
  signal: string;
  mentalModel: string;
  typicalDataStructure: string;
  typicalComplexity: string;
  javaTemplate: string;
  exampleProblems: string[];
}

export interface TimedSession {
  id: string;
  date: string;
  type: '30 MIN' | '45 MIN' | '60 MIN' | 'FULL MOCK';
  durationMinutes: number;
  timeUsedMinutes: number;
  score: number;
  maxScore: number;
  problemsSolved: number;
  totalProblems: number;
  accuracy: number; // percentage
  hintsUsed: number;
  failedTestCases: number;
  weakPatterns: string[];
}

export interface MockTest {
  id: string;
  title: string; // e.g., "INFOSYS SP MOCK #1"
  date: string;
  score: number;
  maxScore: number;
  q1Status: 'Solved' | 'Partial' | 'Failed';
  q2Status: 'Solved' | 'Partial' | 'Failed';
  q3Status: 'Solved' | 'Partial' | 'Failed';
  timeTakenMinutes: number;
  totalTimeMinutes: number;
  notes: string;
}

export interface InterviewQuestion {
  id: string;
  category: 'Java' | 'DSA' | 'Spring Boot' | 'SQL' | 'DBMS' | 'OS' | 'Networking' | 'Projects' | 'Resume' | 'HR';
  question: string;
  answerSnippet?: string;
  status: 'Not Practiced' | 'Practiced' | 'Confident' | 'Needs Revision';
}

export interface ProjectPrep {
  id: string;
  projectName: string;
  problemSolved: string;
  architecture: string;
  technologies: string[];
  myContribution: string;
  challenges: string;
  performance: string;
  testing: string;
  deployment: string;
  crossQuestions: {
    question: string;
    myAnswer: string;
  }[];
}

export interface JournalEntry {
  id: string;
  date: string; // YYYY-MM-DD
  whatILearned: string;
  problemsSolved: string;
  struggledWith: string;
  mistakes: string;
  tomorrowPriority: string;
}

export interface PrepState {
  targetDate: string; // e.g. "2026-11-01"
  mode: PrepMode;
  dailyTasks: DailyTask[];
  dsaTopics: DSATopic[];
  javaTopics: JavaTopic[];
  csTopics: CSFundTopic[];
  problems: Problem[];
  timedSessions: TimedSession[];
  mockTests: MockTest[];
  interviewQuestions: InterviewQuestion[];
  projects: ProjectPrep[];
  journalEntries: JournalEntry[];
  studyDays: string[]; // array of YYYY-MM-DD dates with activity
  totalStudyHours: number;
}
