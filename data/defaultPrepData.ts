import { PrepState, PatternItem, DSATopic, JavaTopic, CSFundTopic, DailyTask, InterviewQuestion, ProjectPrep } from '../types/prep';

export const INITIAL_DSA_TOPICS: DSATopic[] = [
  { id: 'arrays', name: 'Arrays', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'strings', name: 'Strings', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'hashmap', name: 'HashMap', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'hashset', name: 'HashSet', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'two-pointers', name: 'Two Pointers', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'sliding-window', name: 'Sliding Window', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'prefix-sum', name: 'Prefix Sum', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'sorting', name: 'Sorting', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'binary-search', name: 'Binary Search', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'linked-list', name: 'Linked List', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'stack', name: 'Stack', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'queue', name: 'Queue', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'recursion', name: 'Recursion', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'backtracking', name: 'Backtracking', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'trees', name: 'Trees', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'bfs', name: 'BFS', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'dfs', name: 'DFS', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'heap', name: 'Heap', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'graphs', name: 'Graphs', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
  { id: 'dp', name: 'Dynamic Programming', status: 'Not Started', problemsCount: 0, independentCount: 0, hintsCount: 0, confidence: 0 },
];

export const INITIAL_JAVA_TOPICS: JavaTopic[] = [
  // Core Java
  { id: 'oop', category: 'Core Java', name: 'OOP', progress: 0, confidence: 0 },
  { id: 'string', category: 'Core Java', name: 'String', progress: 0, confidence: 0 },
  { id: 'stringbuilder', category: 'Core Java', name: 'StringBuilder', progress: 0, confidence: 0 },
  { id: 'exceptions', category: 'Core Java', name: 'Exception Handling', progress: 0, confidence: 0 },
  { id: 'collections', category: 'Core Java', name: 'Collections', progress: 0, confidence: 0 },
  { id: 'generics', category: 'Core Java', name: 'Generics', progress: 0, confidence: 0 },
  { id: 'java8', category: 'Core Java', name: 'Java 8', progress: 0, confidence: 0 },
  { id: 'streams', category: 'Core Java', name: 'Streams', progress: 0, confidence: 0 },
  { id: 'lambda', category: 'Core Java', name: 'Lambda', progress: 0, confidence: 0 },
  { id: 'multithreading', category: 'Core Java', name: 'Multithreading', progress: 0, confidence: 0 },
  
  // Backend
  { id: 'spring', category: 'Backend', name: 'Spring', progress: 0, confidence: 0 },
  { id: 'springboot', category: 'Backend', name: 'Spring Boot', progress: 0, confidence: 0 },
  { id: 'rest', category: 'Backend', name: 'REST', progress: 0, confidence: 0 },
  { id: 'jpa', category: 'Backend', name: 'JPA', progress: 0, confidence: 0 },
  { id: 'hibernate', category: 'Backend', name: 'Hibernate', progress: 0, confidence: 0 },
  { id: 'microservices', category: 'Backend', name: 'Microservices', progress: 0, confidence: 0 },
  { id: 'security', category: 'Backend', name: 'Security', progress: 0, confidence: 0 },
  { id: 'jwt', category: 'Backend', name: 'JWT', progress: 0, confidence: 0 },
  { id: 'testing', category: 'Backend', name: 'Testing', progress: 0, confidence: 0 },
];

export const INITIAL_CS_TOPICS: CSFundTopic[] = [
  { id: 'sql', name: 'SQL', progress: 0, confidence: 0 },
  { id: 'dbms', name: 'DBMS', progress: 0, confidence: 0 },
  { id: 'os', name: 'Operating Systems', progress: 0, confidence: 0 },
  { id: 'networks', name: 'Computer Networks', progress: 0, confidence: 0 },
];

export const INITIAL_DAILY_TASKS: DailyTask[] = [
  { id: 't1', category: 'DSA', text: 'HashMap revision', completed: false },
  { id: 't2', category: 'DSA', text: 'Frequency counting pattern practice', completed: false },
  { id: 't3', category: 'DSA', text: 'Solve Two Sum & Group Anagrams', completed: false },
  { id: 't4', category: 'Java', text: 'Core Collections framework revision', completed: false },
  { id: 't5', category: 'Timed Practice', text: '45-minute timed coding set', completed: false },
  { id: 't6', category: 'Interview', text: 'Revise 10 Core Java interview questions', completed: false },
];

export const PATTERN_LIBRARY: PatternItem[] = [
  {
    id: 'hashmap',
    name: 'HashMap / Frequency Counting',
    signal: 'Frequency / lookup / duplicates / fast key matching',
    mentalModel: 'Trade space O(N) for fast average O(1) lookup.',
    typicalDataStructure: 'HashMap<K, V> or int[26] / int[128]',
    typicalComplexity: 'Time: O(N), Space: O(N)',
    javaTemplate: `Map<Character, Integer> freq = new HashMap<>();
for (char c : str.toCharArray()) {
    freq.put(c, freq.getOrDefault(c, 0) + 1);
}`,
    exampleProblems: ['Two Sum', 'Group Anagrams', 'Valid Anagram', 'Subarray Sum Equals K']
  },
  {
    id: 'two-pointers',
    name: 'Two Pointers',
    signal: 'Sorted array / opposite ends / pair or triplet searching',
    mentalModel: 'Shrink or expand search space from boundaries using monotonic property.',
    typicalDataStructure: 'Primitive array / String index pointers',
    typicalComplexity: 'Time: O(N), Space: O(1)',
    javaTemplate: `int left = 0, right = arr.length - 1;
while (left < right) {
    int sum = arr[left] + arr[right];
    if (sum == target) return new int[]{left, right};
    else if (sum < target) left++;
    else right--;
}`,
    exampleProblems: ['Two Sum II (Sorted)', '3Sum', 'Container With Most Water', 'Trapping Rain Water']
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    signal: 'Contiguous substring / subarray + target condition or max/min range',
    mentalModel: 'Maintain dynamic range bounds [L, R], expand right pointer and shrink left when invalid.',
    typicalDataStructure: 'Two pointers + HashMap / HashSet / Deque',
    typicalComplexity: 'Time: O(N), Space: O(K)',
    javaTemplate: `int left = 0, maxLen = 0;
Map<Character, Integer> map = new HashMap<>();
for (int right = 0; right < s.length(); right++) {
    char c = s.charAt(right);
    map.put(c, map.getOrDefault(c, 0) + 1);
    while (/* condition invalid */) {
        // shrink window from left
        left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
}`,
    exampleProblems: ['Longest Substring Without Repeating Characters', 'Minimum Size Subarray Sum', 'Sliding Window Maximum']
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    signal: 'Sorted data / monotonic answer space / Find Kth or optimal threshold',
    mentalModel: 'Divide search space in half repeatedly by testing feasibility at mid.',
    typicalDataStructure: 'Array / Value Range [low, high]',
    typicalComplexity: 'Time: O(log N), Space: O(1)',
    javaTemplate: `int low = 0, high = arr.length - 1;
while (low <= high) {
    int mid = low + (high - low) / 2;
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
}`,
    exampleProblems: ['Binary Search', 'Search in Rotated Sorted Array', 'Capacity To Ship Packages Within D Days']
  },
  {
    id: 'bfs',
    name: 'Breadth-First Search (BFS)',
    signal: 'Shortest path in unweighted graph / tree level-order / minimum steps',
    mentalModel: 'Explore wave-by-wave level by level using Queue (FIFO).',
    typicalDataStructure: 'Queue<TreeNode> or Queue<int[]>',
    typicalComplexity: 'Time: O(V + E), Space: O(V)',
    javaTemplate: `Queue<Node> queue = new LinkedList<>();
queue.offer(root);
while (!queue.isEmpty()) {
    int size = queue.size();
    for (int i = 0; i < size; i++) {
        Node curr = queue.poll();
        // process curr & offer neighbors
    }
}`,
    exampleProblems: ['Binary Tree Level Order Traversal', 'Rotting Oranges', 'Word Ladder']
  },
  {
    id: 'dfs',
    name: 'Depth-First Search (DFS)',
    signal: 'Explore connected structures deeply / exhaust all paths / backtrack',
    mentalModel: 'Go deep along a branch until dead end, then backtrack.',
    typicalDataStructure: 'Call Stack (Recursion) or explicit Stack',
    typicalComplexity: 'Time: O(V + E), Space: O(H)',
    javaTemplate: `void dfs(Node node, Set<Node> visited) {
    if (node == null || visited.contains(node)) return;
    visited.add(node);
    for (Node neighbor : node.neighbors) {
        dfs(neighbor, visited);
    }
}`,
    exampleProblems: ['Number of Islands', 'Max Area of Island', 'Path Sum II']
  },
  {
    id: 'heap',
    name: 'Heap / PriorityQueue',
    signal: 'Top K elements / dynamically track min or max / streaming median',
    mentalModel: 'Maintain a min-heap or max-heap of bounded size K.',
    typicalDataStructure: 'PriorityQueue<Integer>',
    typicalComplexity: 'Time: O(N log K), Space: O(K)',
    javaTemplate: `PriorityQueue<Integer> minHeap = new PriorityQueue<>();
for (int num : nums) {
    minHeap.offer(num);
    if (minHeap.size() > k) {
        minHeap.poll();
    }
}`,
    exampleProblems: ['Kth Largest Element in an Array', 'Top K Frequent Elements', 'Find Median from Data Stream']
  },
  {
    id: 'dp',
    name: 'Dynamic Programming (DP)',
    signal: 'Overlapping subproblems + optimal substructure / count ways / min cost',
    mentalModel: 'Express current answer as recurrence relation of sub-states; memoize or tabularize.',
    typicalDataStructure: 'int[] or int[][] dp array',
    typicalComplexity: 'Time: O(States * Transitions), Space: O(States)',
    javaTemplate: `int[] dp = new int[n + 1];
dp[0] = 1;
for (int i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + (i >= 2 ? dp[i - 2] : 0);
}`,
    exampleProblems: ['Climbing Stairs', 'Coin Change', 'Longest Increasing Subsequence', '0/1 Knapsack']
  }
];

export const INITIAL_INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  { id: 'q1', category: 'Java', question: 'Explain internal working of HashMap in Java 8 (buckets, red-black tree threshold, hash collisions).', status: 'Not Practiced' },
  { id: 'q2', category: 'Java', question: 'Difference between String, StringBuilder, and StringBuffer with immutability & thread-safety.', status: 'Not Practiced' },
  { id: 'q3', category: 'Java', question: 'How does Garbage Collection work in Java? Explain G1GC and memory regions (Young, Old, Metaspace).', status: 'Not Practiced' },
  { id: 'q4', category: 'Java', question: 'Difference between Fail-Fast and Fail-Safe iterators with ConcurrentModificationException.', status: 'Not Practiced' },
  { id: 'q5', category: 'Spring Boot', question: 'What happens under the hood when @SpringBootApplication is executed?', status: 'Not Practiced' },
  { id: 'q6', category: 'Spring Boot', question: 'Explain Spring Bean Lifecycle and Scope types (Singleton, Prototype, Request, Session).', status: 'Not Practiced' },
  { id: 'q7', category: 'SQL', question: 'Difference between WHERE and HAVING clause. How does GROUP BY evaluate queries?', status: 'Not Practiced' },
  { id: 'q8', category: 'DBMS', question: 'Explain ACID properties and transaction isolation levels (Read Uncommitted to Serializable).', status: 'Not Practiced' },
  { id: 'q9', category: 'OS', question: 'Difference between Process and Thread. Explain Deadlock conditions and avoidance (Banker Algorithm).', status: 'Not Practiced' },
  { id: 'q10', category: 'Networking', question: 'What happens step-by-step when you type a URL into browser bar? (DNS -> TCP 3-way handshake -> HTTP/TLS).', status: 'Not Practiced' },
];

export const INITIAL_PROJECTS: ProjectPrep[] = [
  {
    id: 'p1',
    projectName: 'Enterprise E-Commerce Microservices Engine',
    problemSolved: 'High-throughput inventory allocation & payment processing during flash sales.',
    architecture: 'Spring Boot microservices with Spring Cloud Gateway, Kafka event bus, PostgreSQL, Redis cache.',
    technologies: ['Java 17', 'Spring Boot 3', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
    myContribution: 'Designed order processing pipeline, implemented idempotent payment gateway integration, optimized SQL query latency.',
    challenges: 'Preventing double-booking of inventory under 5,000 requests/second concurrent load.',
    performance: 'Reduced average P99 API response time from 450ms to 42ms using Redis caching & async Kafka processing.',
    testing: '85%+ JUnit 5 test coverage, Mockito for unit testing, Testcontainers for integration tests.',
    deployment: 'Deployed on AWS EKS using Helm charts and GitHub Actions CI/CD pipeline.',
    crossQuestions: [
      {
        question: 'How did you handle distributed transactions across Microservices without 2-phase commit?',
        myAnswer: 'Used the Saga Pattern with orchestration. Each microservice publishes events to Kafka, and if a downstream service fails, compensating transactions are published to roll back state.'
      },
      {
        question: 'How did you prevent Redis cache stampede/thundering herd during flash sales?',
        myAnswer: 'Used Redis distributed lock (Redisson) for cache miss calculation combined with jittered TTL expiration times.'
      }
    ]
  }
];

export const INITIAL_PREP_STATE: PrepState = {
  targetDate: '2026-11-01',
  mode: 'assessment',
  dailyTasks: [
    { id: 't1', category: 'DSA', text: 'HashMap & Frequency Counting pattern practice', completed: true },
    { id: 't2', category: 'DSA', text: 'Two Pointers & Sliding Window optimization', completed: true },
    { id: 't3', category: 'Java', text: 'Core Collections framework & internal HashMap structure', completed: true },
    { id: 't4', category: 'DSA', text: 'Solve Subarray Sum Equals K & 3Sum', completed: false },
    { id: 't5', category: 'Timed Practice', text: '45-minute timed set (2 Medium problems)', completed: false },
    { id: 't6', category: 'Interview', text: 'Revise 10 Core Java interview questions & STAR story', completed: false },
  ],
  dsaTopics: INITIAL_DSA_TOPICS.map(t => {
    if (t.name === 'Arrays') return { ...t, status: 'Interview Ready' as const, problemsCount: 14, independentCount: 13, hintsCount: 1, confidence: 90 };
    if (t.name === 'HashMap') return { ...t, status: 'Interview Ready' as const, problemsCount: 12, independentCount: 11, hintsCount: 1, confidence: 92 };
    if (t.name === 'Strings') return { ...t, status: 'Comfortable' as const, problemsCount: 9, independentCount: 8, hintsCount: 2, confidence: 85 };
    if (t.name === 'Two Pointers') return { ...t, status: 'Comfortable' as const, problemsCount: 8, independentCount: 7, hintsCount: 1, confidence: 85 };
    if (t.name === 'Sliding Window') return { ...t, status: 'Practicing' as const, problemsCount: 6, independentCount: 5, hintsCount: 2, confidence: 75 };
    if (t.name === 'Prefix Sum') return { ...t, status: 'Comfortable' as const, problemsCount: 5, independentCount: 5, hintsCount: 0, confidence: 88 };
    if (t.name === 'Binary Search') return { ...t, status: 'Practicing' as const, problemsCount: 6, independentCount: 5, hintsCount: 1, confidence: 78 };
    if (t.name === 'Sorting') return { ...t, status: 'Comfortable' as const, problemsCount: 4, independentCount: 4, hintsCount: 0, confidence: 85 };
    if (t.name === 'Linked List') return { ...t, status: 'Practicing' as const, problemsCount: 5, independentCount: 4, hintsCount: 1, confidence: 72 };
    if (t.name === 'Stack') return { ...t, status: 'Practicing' as const, problemsCount: 4, independentCount: 3, hintsCount: 1, confidence: 70 };
    if (t.name === 'Trees') return { ...t, status: 'Learning' as const, problemsCount: 3, independentCount: 2, hintsCount: 2, confidence: 55 };
    return t;
  }),
  javaTopics: INITIAL_JAVA_TOPICS.map(j => {
    if (j.name === 'OOP') return { ...j, progress: 95, confidence: 95, lastRevised: '2026-10-10' };
    if (j.name === 'Collections') return { ...j, progress: 90, confidence: 92, lastRevised: '2026-10-09' };
    if (j.name === 'Streams') return { ...j, progress: 85, confidence: 85, lastRevised: '2026-10-08' };
    if (j.name === 'Multithreading') return { ...j, progress: 75, confidence: 75, lastRevised: '2026-10-07' };
    if (j.name === 'Spring Boot') return { ...j, progress: 88, confidence: 88, lastRevised: '2026-10-09' };
    if (j.name === 'Microservices') return { ...j, progress: 80, confidence: 82, lastRevised: '2026-10-08' };
    if (j.name === 'REST') return { ...j, progress: 90, confidence: 90, lastRevised: '2026-10-06' };
    if (j.name === 'JPA' || j.name === 'Hibernate') return { ...j, progress: 82, confidence: 80, lastRevised: '2026-10-05' };
    return j;
  }),
  csTopics: INITIAL_CS_TOPICS.map(c => {
    if (c.name === 'SQL') return { ...c, progress: 88, confidence: 85 };
    if (c.name === 'DBMS') return { ...c, progress: 82, confidence: 80 };
    if (c.name === 'Operating Systems') return { ...c, progress: 78, confidence: 75 };
    if (c.name === 'Computer Networks') return { ...c, progress: 75, confidence: 72 };
    return c;
  }),
  problems: [
    {
      id: 'p1',
      name: 'Subarray Sum Equals K',
      date: '2026-10-11',
      topic: 'HashMap',
      pattern: 'HashMap / Frequency Counting',
      difficulty: 'Medium',
      timeTakenMinutes: 22,
      solvedIndependently: true,
      hintsRequired: 0,
      mistakeNotes: 'Key insight: prefix sum frequency mapping with pre-seeding prefixSumMap.put(0, 1).',
      revisionRequired: false
    },
    {
      id: 'p2',
      name: 'Group Anagrams',
      date: '2026-10-10',
      topic: 'Strings',
      pattern: 'HashMap / Frequency Counting',
      difficulty: 'Medium',
      timeTakenMinutes: 19,
      solvedIndependently: true,
      hintsRequired: 0,
      mistakeNotes: 'Character frequency array as String key outperforms Arrays.sort() for large inputs.',
      revisionRequired: false
    },
    {
      id: 'p3',
      name: 'Longest Substring Without Repeating Characters',
      date: '2026-10-09',
      topic: 'Sliding Window',
      pattern: 'Sliding Window',
      difficulty: 'Medium',
      timeTakenMinutes: 28,
      solvedIndependently: false,
      hintsRequired: 1,
      mistakeNotes: 'Remember to update left pointer to max(left, lastSeenIndex + 1) to avoid backward regression.',
      revisionRequired: true,
      nextRevisionDate: '2026-10-12'
    },
    {
      id: 'p4',
      name: '3Sum',
      date: '2026-10-08',
      topic: 'Two Pointers',
      pattern: 'Two Pointers',
      difficulty: 'Medium',
      timeTakenMinutes: 26,
      solvedIndependently: true,
      hintsRequired: 0,
      mistakeNotes: 'Skip duplicates on both outer loop and inner two-pointer increments.',
      revisionRequired: false
    },
    {
      id: 'p5',
      name: 'Search in Rotated Sorted Array',
      date: '2026-10-07',
      topic: 'Binary Search',
      pattern: 'Binary Search',
      difficulty: 'Medium',
      timeTakenMinutes: 31,
      solvedIndependently: true,
      hintsRequired: 1,
      mistakeNotes: 'Identify which half is strictly sorted before testing target containment bounds.',
      revisionRequired: true,
      nextRevisionDate: '2026-10-13'
    },
    {
      id: 'p6',
      name: 'Two Sum',
      date: '2026-10-06',
      topic: 'HashMap',
      pattern: 'HashMap / Frequency Counting',
      difficulty: 'Easy',
      timeTakenMinutes: 11,
      solvedIndependently: true,
      hintsRequired: 0,
      mistakeNotes: 'One-pass hash table with target - nums[i] lookup.',
      revisionRequired: false
    }
  ],
  timedSessions: [
    {
      id: 'ts1',
      date: '2026-10-10',
      type: '45 MIN',
      durationMinutes: 45,
      timeUsedMinutes: 39,
      score: 100,
      maxScore: 100,
      problemsSolved: 2,
      totalProblems: 2,
      accuracy: 95,
      hintsUsed: 0,
      failedTestCases: 0,
      weakPatterns: []
    },
    {
      id: 'ts2',
      date: '2026-10-08',
      type: '30 MIN',
      durationMinutes: 30,
      timeUsedMinutes: 24,
      score: 100,
      maxScore: 100,
      problemsSolved: 1,
      totalProblems: 1,
      accuracy: 100,
      hintsUsed: 0,
      failedTestCases: 0,
      weakPatterns: []
    }
  ],
  mockTests: [
    {
      id: 'm1',
      title: 'INFOSYS SP MOCK #1',
      date: '2026-10-09',
      score: 250,
      maxScore: 300,
      q1Status: 'Solved',
      q2Status: 'Solved',
      q3Status: 'Partial',
      timeTakenMinutes: 78,
      totalTimeMinutes: 90,
      notes: 'Q1 (HashMap) solved in 18m. Q2 (Sliding Window) solved in 25m. Q3 (Graph BFS) passed 7/10 test cases before timeout.'
    }
  ],
  interviewQuestions: INITIAL_INTERVIEW_QUESTIONS.map(q => {
    if (q.id === 'q1' || q.id === 'q2') return { ...q, status: 'Confident' as const };
    if (q.id === 'q3' || q.id === 'q5') return { ...q, status: 'Practiced' as const };
    if (q.id === 'q8') return { ...q, status: 'Needs Revision' as const };
    return q;
  }),
  projects: INITIAL_PROJECTS,
  journalEntries: [
    {
      id: 'j1',
      date: '2026-10-11',
      whatILearned: 'Mastered Prefix Sum + HashMap technique for Subarray Sum Equals K. Understood how cumulative frequencies translate O(N^2) subarray iteration into an O(N) single-pass lookup.',
      problemsSolved: 'Subarray Sum Equals K, Two Sum, Group Anagrams',
      struggledWith: 'Handling edge case when cumulative sum directly equals K without subtraction (resolved by map.put(0, 1)).',
      mistakes: 'Initially forgot to handle duplicate elements in 3Sum.',
      tomorrowPriority: 'Binary Search variations + custom Comparator sorting in Java 17.'
    },
    {
      id: 'j2',
      date: '2026-10-10',
      whatILearned: 'Re-examined HashMap internal rehashing in Java 8. When bucket count exceeds 8 and table capacity >= 64, buckets convert from LinkedList to Red-Black Tree (O(log N)).',
      problemsSolved: 'Group Anagrams, Two Sum II',
      struggledWith: 'Sliding window pointer regression on repeat characters.',
      mistakes: 'Did not use Math.max for left pointer advancement.',
      tomorrowPriority: 'Mock Assessment Simulation #2 under timed conditions.'
    }
  ],
  studyDays: ['2026-10-07', '2026-10-08', '2026-10-09', '2026-10-10', '2026-10-11'],
  totalStudyHours: 18.5
};
