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
  energyLevel?: number; // 1-10
}

export type StudyCategory = 
  | 'DSA' 
  | 'System Design' 
  | 'LLD' 
  | 'Core Java' 
  | 'Backend' 
  | 'Database' 
  | 'Core CS' 
  | 'Cloud' 
  | 'Behavioral' 
  | 'Project' 
  | 'Mock' 
  | 'Revision'
  | 'Other';

export interface StudySession {
  id: string;
  date: string; // YYYY-MM-DD local calendar date
  durationMinutes: number;
  category: StudyCategory;
  topic: string;
  taskType: 'Theory' | 'Coding Practice' | 'System Design' | 'Revision' | 'Mock' | 'Project Build';
  problemsSolved?: number;
  difficulty?: Difficulty;
  completionStatus: 'Completed' | 'In Progress' | 'Struggled';
  notes: string;
  resourceUrl?: string;
  createdAt: string;
}

export interface HeatmapDay {
  date: string; // YYYY-MM-DD
  totalMinutes: number;
  problemsSolved: number;
  categories: string[];
  topics: string[];
  sessionsCount: number;
  level: 0 | 1 | 2 | 3; // 0=none, 1=light (<30m), 2=moderate (30-90m), 3=high (>90m or >=2 problems)
  hasQualifyingWork: boolean;
}

export interface WeeklyReviewEntry {
  id: string;
  weekStartDate: string; // YYYY-MM-DD
  problemsSolved: number;
  studyHours: number;
  pillarHours: Record<string, number>;
  majorLearning: string;
  weakestArea: string;
  missedGoals?: string;
  energyRating: number; // 1-10
  nextWeekPriorities: string;
  createdAt: string;
}

export type ApplicationStage = 
  | 'Interested' 
  | 'Preparing' 
  | 'Referral Requested' 
  | 'Applied' 
  | 'Recruiter Screen' 
  | 'Technical Assessment' 
  | 'Virtual Loop / Onsite' 
  | 'Offer' 
  | 'Rejected' 
  | 'On Hold';

export interface JobApplication {
  id: string;
  company: string;
  role: string;
  level: string; // SDE-1, SDE-2, Senior SWE
  stage: ApplicationStage;
  dateApplied: string;
  jobUrl?: string;
  referralContact?: string;
  recruiterContact?: string;
  compensationNotes?: string;
  notes?: string;
  createdAt: string;
}

export interface SpacedRevisionItem {
  id: string;
  topicId: string;
  topicName: string;
  pillar: string;
  firstLearnedDate: string;
  lastRevisedDate?: string;
  nextRevisionDate: string;
  intervalIndex: number; // 0=1d, 1=3d, 2=7d, 3=14d, 4=30d
  status: 'Due' | 'Overdue' | 'Upcoming' | 'Mastered';
  notes?: string;
}

export interface ActiveTimerState {
  isRunning: boolean;
  elapsedSeconds: number;
  topic?: string;
  category?: StudyCategory;
  startedAt?: number;
}

export interface TopicProgressRecord {
  status: 'Not Started' | 'In Progress' | 'Completed' | 'Needs Revision';
  confidence: number; // 0-100
  lastStudiedDate?: string;
  nextRevisionDate?: string;
  notes?: string;
}

export interface PrepState {
  schemaVersion?: number;
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
  
  // Growth OS Upgrades
  studySessions?: StudySession[];
  weeklyReviews?: WeeklyReviewEntry[];
  applications?: JobApplication[];
  topicProgress?: Record<string, TopicProgressRecord>;
  spacedRevisions?: SpacedRevisionItem[];
  activeTimer?: ActiveTimerState;
  targetCompanyProfile?: 'general' | 'microsoft' | 'amazon' | 'google';
}
