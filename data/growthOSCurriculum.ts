// ANIL'S ENGINEERING GROWTH OS — COMPLETE CURRICULUM & KNOWLEDGE BASE
// Auto-extracted and curated from ANIL_OS_v4.xlsx (20 worksheets)
// Preserves curriculum structure, resources, frameworks, and official interview guidance.

export interface SDEPillar {
  id: string;
  name: string;
  weight: number; // e.g. 22%
  targetScore: number;
  description: string;
}

export interface DSAStepItem {
  step: string;
  title: string;
  subtopics: string;
  approxProblems: number;
  category: string;
}

export interface ComplexityRule {
  id: number;
  check: string;
  why: string;
}

export interface SystemDesignItem {
  id: string;
  tier: 'Tier 1: Foundational (SDE-1)' | 'Tier 2: Advanced Distributed (SDE-2)';
  name: string;
  coreIdea: string;
  components: string[];
  whereToLearn: string;
  sampleTradeOff: string;
}

export interface DesignPatternItem {
  id: string;
  pattern: string;
  category: 'Creational' | 'Structural' | 'Behavioral';
  whenToUse: string;
  keyExample: string;
}

export interface MachineCodingChallenge {
  id: string;
  title: string;
  patternsRequired: string;
  description: string;
  keyJavaSkeletons?: string;
}

export interface CurriculumTopic {
  id: string;
  section: string;
  topic: string;
  mustExplain: string;
  sampleQuestion: string;
}

export interface CloudServiceItem {
  id: string;
  provider: 'AWS' | 'Azure';
  service: string;
  whatItDoes: string;
  whenToUse: string;
}

export interface BehavioralLPItem {
  id: string;
  principle: string;
  testingFor: string;
  sampleQuestion: string;
}

export interface CompanyRoadmapItem {
  id: string;
  company: 'Microsoft' | 'Amazon' | 'Google';
  round: string;
  whatItTests: string;
  prepFocus: string;
}

export interface InterviewQABankItem {
  id: string;
  section: string;
  question: string;
  whatEvaluating: string;
  howToStructure: string;
}

export interface ResumeAuditItem {
  id: string;
  asIs: string;
  owned: string;
  quantifiedImpact: string;
  improvedBullet: string;
  atsKeywords: string;
}

export const SDE_PILLARS: SDEPillar[] = [
  {
    "id": "dsa",
    "name": "DSA (Striver TUF + SDE-2 Patterns)",
    "weight": 22,
    "targetScore": 85,
    "description": "Mastery of array, tree, graph, DP patterns with optimal Big-O implementation."
  },
  {
    "id": "hld",
    "name": "High-Level System Design (HLD)",
    "weight": 18,
    "targetScore": 80,
    "description": "Tiered architecture: URL shorteners to large-scale distributed message queues."
  },
  {
    "id": "lld",
    "name": "Low-Level Design & Machine Coding",
    "weight": 10,
    "targetScore": 75,
    "description": "GOF design patterns and compilable Java class skeletons in 45-60 min."
  },
  {
    "id": "java",
    "name": "Core Java & JVM Internals",
    "weight": 8,
    "targetScore": 85,
    "description": "JVM memory model (Heap/Metaspace), G1/ZGC algorithms, concurrency, and collections."
  },
  {
    "id": "backend",
    "name": "Backend Engineering & Kafka",
    "weight": 8,
    "targetScore": 85,
    "description": "Spring Boot lifecycle, microservices patterns (Saga, Outbox), Kafka, Redis caching."
  },
  {
    "id": "database",
    "name": "Database Engineering & SQL",
    "weight": 6,
    "targetScore": 80,
    "description": "Hands-on live SQL queries, indexing internals (B-Tree), query optimization, ACID."
  },
  {
    "id": "corecs",
    "name": "CS Fundamentals (OS, Networks, OOP)",
    "weight": 6,
    "targetScore": 75,
    "description": "Operating systems (threads, deadlocks, paging), Networks (TCP/UDP, DNS, TLS), SOLID."
  },
  {
    "id": "cloud",
    "name": "Cloud Fundamentals (AWS & Azure)",
    "weight": 5,
    "targetScore": 70,
    "description": "Compute, storage, messaging, serverless architectures, and cost vs performance trade-offs."
  },
  {
    "id": "behavioral",
    "name": "Behavioral Story Bank (STAR)",
    "weight": 7,
    "targetScore": 90,
    "description": "Amazon 16 LPs, Microsoft values, Googleyness mapped with verified metrics."
  },
  {
    "id": "projects",
    "name": "Project Deep Dive Defense",
    "weight": 5,
    "targetScore": 90,
    "description": "Defending real production systems: architecture, failure modes, scale, latency reduction."
  },
  {
    "id": "mocks",
    "name": "Mock Interview Analytics",
    "weight": 5,
    "targetScore": 80,
    "description": "Timed coding simulations and peer mocks tracking performance trend lines."
  }
];

export const DSA_TUF_STEPS: DSAStepItem[] = [
  {
    "step": "Step #",
    "title": "Topic",
    "subtopics": "Sub-Topics Covered",
    "approxProblems": 10,
    "category": "Striver A2Z DSA"
  },
  {
    "step": "Step 1",
    "title": "Learn the Basics",
    "subtopics": "Patterns, Java/C++ basics, Math (digits, palindrome, GCD), Recursion intro, Hashing basics",
    "approxProblems": 35,
    "category": "Striver A2Z DSA"
  },
  {
    "step": "Step 2",
    "title": "Sorting Techniques",
    "subtopics": "Selection, Bubble, Insertion, Merge, Recursive Bubble/Insertion, Quick Sort",
    "approxProblems": 8,
    "category": "Striver A2Z DSA"
  },
  {
    "step": "Step 3",
    "title": "Arrays",
    "subtopics": "Easy: largest, second largest, rotate, missing number, max consecutive 1s. Medium: 2Sum, Kadane's, rearrange sorted, leaders, longest subarray. Hard: 3Sum, 4Sum, merge intervals, merge sorted array without extra space",
    "approxProblems": 32,
    "category": "Striver A2Z DSA"
  },
  {
    "step": "Step 4",
    "title": "Binary Search",
    "subtopics": "1D BS, 2D BS, Search-Insert-Position, Order agnostic BS, Bouquets, K divisors, Capacity to ship packages, Median of 2 sorted arrays, Kth element of 2 sorted arrays, Row with max 1s, Search in 2D matrix, Peak element",
    "approxProblems": 32,
    "category": "Striver A2Z DSA"
  },
  {
    "step": "Step 5",
    "title": "Strings",
    "subtopics": "Basic: reverse words, palindrome, anagram. Medium: longest palindromic substring, roman to integer, longest common prefix, rabin karp. Hard: Z-function, KMP algo",
    "approxProblems": 15,
    "category": "Striver A2Z DSA"
  },
  {
    "step": "Step 6",
    "title": "Linked List",
    "subtopics": "1D LL: intro, insertion, deletion, reverse, detect+remove loop, find middle, palindrome check, segregate odd-even. 2D LL: intro, insertion, deletion. Medium/Hard: add two numbers, delete given node, intersection point, clone LL with random pointer",
    "approxProblems": 31,
    "category": "Striver A2Z DSA"
  },
  {
    "step": "Step 7",
    "title": "Recursion",
    "subtopics": "Subset sums, combination sum 1&2, palindrome partitioning, k-th permutation, print all subsequences",
    "approxProblems": 25,
    "category": "Striver A2Z DSA"
  },
  {
    "step": "Step 8",
    "title": "Bit Manipulation",
    "subtopics": "Basics, power set, max XOR subarray, count subsets with sum K, find XOR of numbers 1 to N, divide two integers, count set bits",
    "approxProblems": 18,
    "category": "Striver A2Z DSA"
  },
  {
    "step": "Step 9",
    "title": "Stack & Queue",
    "subtopics": "Implementation, infix-postfix-prefix conversions, next greater element, sort a stack, stock span, sliding window maximum, LRU cache, LFU cache, largest rectangle histogram, celebrity problem",
    "approxProblems": 30,
    "category": "Striver A2Z DSA"
  },
  {
    "step": "Step 10",
    "title": "Sliding Window & Two Pointers",
    "subtopics": "Max consecutive 1s, longest subarray with sum K, longest substring without repeat, max points from cards, fruits into baskets, longest repeating substring with K replacements",
    "approxProblems": 12,
    "category": "Striver A2Z DSA"
  },
  {
    "step": "Step 11",
    "title": "Heaps",
    "subtopics": "Implementation, max/min heap, Kth largest/smallest, sort K-sorted array, merge K sorted arrays, K most frequent elements, find median in running stream",
    "approxProblems": 16,
    "category": "Striver A2Z DSA"
  },
  {
    "step": "Step 12",
    "title": "Greedy Algorithms",
    "subtopics": "N meetings in one room, jump game, job sequencing, candy distribution, shortest job first, minimum platforms, valid parenthesis string, fractional knapsack",
    "approxProblems": 15,
    "category": "Striver A2Z DSA"
  },
  {
    "step": "Step 13",
    "title": "Binary Trees",
    "subtopics": "Traversals (pre/in/post/level \u2014 recursive+iterative), morris traversal, vertical/diagonal order, top/bottom view, boundary traversal, max width, height, diameter, LCA, max path sum, check balanced, identical trees, symmetric tree, flatten BT, serialize/deserialize, max path sum between 2 nodes, max sum path",
    "approxProblems": 38,
    "category": "Striver A2Z DSA"
  },
  {
    "step": "Step 14",
    "title": "Binary Search Trees",
    "subtopics": "Search in BST, ceil/floor in BST, insert/delete node, kth smallest/largest, check valid BST, LCA in BST, construct BST from preorder, inorder successor/predecessor, merge two BSTs, two sum in BST, recover BST, largest BST in BT",
    "approxProblems": 18,
    "category": "Striver A2Z DSA"
  },
  {
    "step": "Step 15",
    "title": "Graphs",
    "subtopics": "BFS, DFS, cycle detection (BFS/DFS, directed/undirected), topological sort, number of islands, bipartite check, SCC (Kosaraju), Dijkstra, Bellman-Ford, Floyd-Warshall, MST (Prim, Kruskal), bridges, articulation points, word ladder, alien dictionary",
    "approxProblems": 54,
    "category": "Striver A2Z DSA"
  },
  {
    "step": "Step 16",
    "title": "Dynamic Programming",
    "subtopics": "1D: climbing stairs, frog jump, house robber. 2D/3D: ninja training, grid unique paths, min path sum, subset sum, knapsack 0/1, unbounded knapsack, coin change, LCS, LIS, edit distance, wildcard matching, matrix chain multiplication, palindrome partitioning, MCM variations, buy/sell stock variants",
    "approxProblems": 56,
    "category": "Striver A2Z DSA"
  },
  {
    "step": "Step 17",
    "title": "Tries",
    "subtopics": "Implementation, longest string with all prefixes, number of distinct substrings, power set via trie, max XOR of two numbers, word break using trie",
    "approxProblems": 7,
    "category": "Striver A2Z DSA"
  },
  {
    "step": "Step 18",
    "title": "Strings (Hard)",
    "subtopics": "Min insertions to make palindrome, longest happy prefix, count+say, compare version numbers",
    "approxProblems": 5,
    "category": "Striver A2Z DSA"
  }
];

export const COMPLEXITY_RULES: ComplexityRule[] = [
  {
    "id": 1,
    "check": "Check the constraint on n first.",
    "why": "If n \u2264 10\u2079, you cannot even store the input \u2014 the answer must be O(1) or O(log n) space. If n \u2264 10\u2077, you can move on."
  },
  {
    "id": 2,
    "check": "Default to AUXILIARY space, not total.",
    "why": "Most interviewers ask about extra memory your algorithm uses ON TOP of the input \u2014 that's the default unless told otherwise."
  },
  {
    "id": 3,
    "check": "Count every extra data structure you create.",
    "why": "Hash maps, sets, stacks, queues, DP tables, copied arrays \u2014 all count toward space."
  },
  {
    "id": 4,
    "check": "Count recursion stack depth.",
    "why": "Recursive calls are NOT free \u2014 each frame sits on the call stack and counts as space."
  },
  {
    "id": 5,
    "check": "Count BFS queue or DFS stack size.",
    "why": "BFS can store an entire level of a tree/graph at once \u2014 don't assume it's small."
  },
  {
    "id": 6,
    "check": "Output arrays are usually excluded.",
    "why": "Unless the interviewer says 'total space' \u2014 if in doubt, ask explicitly."
  },
  {
    "id": 7,
    "check": "Add input size only if asked for 'total' space.",
    "why": "If the interviewer says 'total space complexity' or 'including input', then add the input size too."
  }
];

export const SYSTEM_DESIGN_CURRICULUM: SystemDesignItem[] = [
  {
    "id": "sd-0",
    "tier": "Tier 1: Foundational (SDE-1)",
    "name": "\ud83c\udfd7  SYSTEM DESIGN  \u2014  Tiered: SDE-1 (Light) \u2192 SDE-2 (Alex Xu Deep Dive)",
    "coreIdea": "",
    "components": [],
    "whereToLearn": "",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-1",
    "tier": "Tier 1: Foundational (SDE-1)",
    "name": "Per Amazon SDE: 'SDE1 questions are not that tough... simple designs.' But: '2024 grad \u2192 consider SDE-2 \u2192 read Alex Xu.'",
    "coreIdea": "",
    "components": [],
    "whereToLearn": "",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-4",
    "tier": "Tier 1: Foundational (SDE-1)",
    "name": "URL Shortener",
    "coreIdea": "Map long URL \u2192 short code using hashing/base62, store in DB, redirect on lookup.",
    "components": [
      "Hash function",
      "SQL/NoSQL DB",
      "simple cache",
      "REST API"
    ],
    "whereToLearn": "Any 'URL shortener system design' YouTube video (Gaurav Sen / ByteByteGo) \u2014 15 min watch",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-5",
    "tier": "Tier 1: Foundational (SDE-1)",
    "name": "Rate Limiter",
    "coreIdea": "Limit requests per user/IP within time window using token bucket or sliding window.",
    "components": [
      "Counter store (Redis)",
      "API Gateway",
      "time window logic"
    ],
    "whereToLearn": "'Rate Limiter system design' video \u2014 15 min watch",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-6",
    "tier": "Tier 1: Foundational (SDE-1)",
    "name": "Pastebin",
    "coreIdea": "Store text snippets, generate unique short link, optional expiry.",
    "components": [
      "Same as URL shortener + expiry logic + larger storage"
    ],
    "whereToLearn": "Similar pattern to URL Shortener \u2014 10 min understanding",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-7",
    "tier": "Tier 1: Foundational (SDE-1)",
    "name": "Parking Lot (LLD)",
    "coreIdea": "OOP design: ParkingLot, Floor, Spot, Vehicle, Ticket, payment strategy.",
    "components": [
      "Classes + interfaces",
      "Strategy pattern for pricing"
    ],
    "whereToLearn": "Most common SDE-1 LLD ask \u2014 practice writing the class diagram",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-8",
    "tier": "Tier 1: Foundational (SDE-1)",
    "name": "Library Management",
    "coreIdea": "OOP design: Book, Member, Library, BorrowRecord, fine calculation.",
    "components": [
      "Classes",
      "simple state (borrowed/returned)",
      "basic OOP"
    ],
    "whereToLearn": "Classic LLD warm-up \u2014 30 min to design + code skeleton",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-9",
    "tier": "Tier 1: Foundational (SDE-1)",
    "name": "Vending Machine",
    "coreIdea": "State machine: Idle \u2192 Selecting \u2192 Dispensing \u2192 Idle. Inventory + payment.",
    "components": [
      "State pattern",
      "simple inventory map"
    ],
    "whereToLearn": "Good State Machine practice \u2014 common SDE-1 ask",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-11",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Resource / Case Study",
    "coreIdea": "Alex Xu Book",
    "components": [
      "Key Concepts"
    ],
    "whereToLearn": "Status",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-12",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Read: Scalability fundamentals (Ch 1-3)",
    "coreIdea": "Vol 1",
    "components": [
      "Vertical vs horizontal scaling",
      "load balancer",
      "CDN",
      "database replication",
      "sharding basics"
    ],
    "whereToLearn": "Not Started",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-13",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Read: Key-Value Store design (Ch 6)",
    "coreIdea": "Vol 1",
    "components": [
      "Consistent hashing",
      "vector clocks",
      "quorum",
      "gossip protocol \u2014 used in DynamoDB/Cassandra"
    ],
    "whereToLearn": "Not Started",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-14",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Read: Unique ID Generator (Ch 7)",
    "coreIdea": "Vol 1",
    "components": [
      "Twitter snowflake",
      "UUID",
      "range-based",
      "multi-master replication"
    ],
    "whereToLearn": "Not Started",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-15",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Read: Web Crawler (Ch 9)",
    "coreIdea": "Vol 1",
    "components": [
      "URL frontier",
      "politeness",
      "duplicate detection",
      "BFS vs DFS crawling"
    ],
    "whereToLearn": "Not Started",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-16",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Read: Notification System (Ch 10)",
    "coreIdea": "Vol 1",
    "components": [
      "Push (APNs/FCM)",
      "third-party integration",
      "reliability",
      "rate limiting"
    ],
    "whereToLearn": "Not Started",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-17",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Case Study: Chat System (WhatsApp)",
    "coreIdea": "Vol 1",
    "components": [
      "WebSocket",
      "message queue",
      "fan-out",
      "online presence",
      "group chat scaling"
    ],
    "whereToLearn": "Not Started",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-18",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Case Study: Search Autocomplete",
    "coreIdea": "Vol 1",
    "components": [
      "Trie",
      "top-K queries",
      "AJAX",
      "caching frequent queries"
    ],
    "whereToLearn": "Not Started",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-19",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Case Study: YouTube / Video Streaming",
    "coreIdea": "Vol 2",
    "components": [
      "CDN",
      "transcoding pipeline",
      "adaptive bitrate (HLS/DASH)",
      "object storage"
    ],
    "whereToLearn": "Not Started",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-20",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Case Study: Google Drive / Dropbox",
    "coreIdea": "Vol 2",
    "components": [
      "Chunked upload",
      "delta sync",
      "metadata DB",
      "conflict resolution"
    ],
    "whereToLearn": "Not Started",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-21",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Case Study: Proximity / Nearby Service",
    "coreIdea": "Vol 2",
    "components": [
      "Geohashing",
      "Quadtree",
      "location indexing"
    ],
    "whereToLearn": "Not Started",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-22",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Case Study: Amazon E-commerce (build yourself)",
    "coreIdea": "Self-study",
    "components": [
      "Microservices",
      "cart",
      "inventory",
      "payment saga pattern",
      "Kafka for order events"
    ],
    "whereToLearn": "Not Started",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-23",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Case Study: Ad Click Aggregator",
    "coreIdea": "Vol 2",
    "components": [
      "Stream processing (Kafka+Flink)",
      "real-time aggregation",
      "idempotency"
    ],
    "whereToLearn": "Not Started",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-24",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "LLD MACHINE CODING \u2014 8 Practice Challenges  (Weekend practice, all levels)",
    "coreIdea": "",
    "components": [],
    "whereToLearn": "",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-25",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Challenge",
    "coreIdea": "Patterns Used",
    "components": [
      "Status"
    ],
    "whereToLearn": "Conf\n(1-10)",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-26",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Parking Lot",
    "coreIdea": "Strategy, Singleton",
    "components": [
      "Not Started"
    ],
    "whereToLearn": "5",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-27",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "ATM System",
    "coreIdea": "State Machine, OOP",
    "components": [
      "Not Started"
    ],
    "whereToLearn": "5",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-28",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Vending Machine",
    "coreIdea": "State Machine",
    "components": [
      "Not Started"
    ],
    "whereToLearn": "5",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-29",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Tic Tac Toe",
    "coreIdea": "OOP, Strategy",
    "components": [
      "Not Started"
    ],
    "whereToLearn": "5",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-30",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Library Management",
    "coreIdea": "OOP, simple state",
    "components": [
      "Not Started"
    ],
    "whereToLearn": "5",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-31",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Splitwise (Expense Split)",
    "coreIdea": "Graph, Greedy, OOP",
    "components": [
      "Not Started"
    ],
    "whereToLearn": "5",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-32",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Logging Framework",
    "coreIdea": "Singleton, Chain of Responsibility",
    "components": [
      "Not Started"
    ],
    "whereToLearn": "5",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-33",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Elevator System",
    "coreIdea": "State Machine, Strategy",
    "components": [
      "Not Started"
    ],
    "whereToLearn": "5",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-36",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Key-Value Store (Dynamo-style)",
    "coreIdea": "Petabyte scale, 99.99% availability target",
    "components": [
      "Consistent hashing",
      "vector clocks",
      "gossip protocol",
      "read/write quorum"
    ],
    "whereToLearn": "Not Started",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-37",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Notification System",
    "coreIdea": "Billions of notifications/day, multi-channel",
    "components": [
      "Fan-out service",
      "APNs/FCM",
      "third-party providers",
      "retry + dedup logic"
    ],
    "whereToLearn": "Not Started",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-38",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Chat System (WhatsApp-style)",
    "coreIdea": "Millions of concurrent connections",
    "components": [
      "WebSocket servers",
      "message queue",
      "fan-out on write vs read",
      "presence service"
    ],
    "whereToLearn": "Not Started",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-39",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "News Feed (Facebook/Twitter-style)",
    "coreIdea": "Celebrity fan-out problem at scale",
    "components": [
      "Hybrid push-pull",
      "feed ranking",
      "cache warm-up",
      "pagination"
    ],
    "whereToLearn": "Not Started",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-40",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Web Crawler",
    "coreIdea": "Billions of pages, politeness constraints",
    "components": [
      "URL frontier",
      "dedup via bloom filter",
      "distributed crawl coordination"
    ],
    "whereToLearn": "Not Started",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-41",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Search Autocomplete",
    "coreIdea": "Sub-100ms latency requirement",
    "components": [
      "Trie with frequency",
      "top-K caching",
      "query log aggregation pipeline"
    ],
    "whereToLearn": "Not Started",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-44",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "YouTube / Video Streaming",
    "coreIdea": "Transcoding pipeline, adaptive bitrate (HLS/DASH), CDN strategy, storage cost optimization at exabyte scale",
    "components": [
      "Not Started"
    ],
    "whereToLearn": "5",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-45",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Distributed Ad Click Aggregator",
    "coreIdea": "Real-time stream processing (Kafka+Flink), exactly-once semantics, idempotency, late-arriving data",
    "components": [
      "Not Started"
    ],
    "whereToLearn": "5",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-46",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Google Drive / Dropbox",
    "coreIdea": "Chunked upload, delta sync, conflict resolution (CRDT vs last-write-wins), metadata DB design",
    "components": [
      "Not Started"
    ],
    "whereToLearn": "5",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-47",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Distributed Task Scheduler",
    "coreIdea": "DAG execution, leader election, fault tolerance, exactly-once task execution",
    "components": [
      "Not Started"
    ],
    "whereToLearn": "5",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-48",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Payment System (Amazon-style)",
    "coreIdea": "Idempotency keys, distributed transactions (Saga pattern), reconciliation, fraud detection hooks",
    "components": [
      "Not Started"
    ],
    "whereToLearn": "5",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-49",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Ride-sharing Matching (Uber-style)",
    "coreIdea": "Geo-sharding, real-time matching algorithm, surge pricing, ETA computation at scale",
    "components": [
      "Not Started"
    ],
    "whereToLearn": "5",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-50",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Distributed Lock Service",
    "coreIdea": "Consensus algorithms (Paxos/Raft simplified), leader election, split-brain handling",
    "components": [
      "Not Started"
    ],
    "whereToLearn": "5",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  },
  {
    "id": "sd-51",
    "tier": "Tier 2: Advanced Distributed (SDE-2)",
    "name": "Multi-region Database Design",
    "coreIdea": "Active-active vs active-passive, conflict resolution across regions, latency vs consistency trade-offs",
    "components": [
      "Not Started"
    ],
    "whereToLearn": "5",
    "sampleTradeOff": "Read-heavy vs write-heavy storage, cache eviction policies, CAP theorem selection"
  }
];

export const LLD_PATTERNS: DesignPatternItem[] = [
  {
    "id": "pat-1",
    "pattern": "Singleton",
    "category": "Creational",
    "whenToUse": "Single shared instance \u2014 config managers, connection pools, thread pools",
    "keyExample": "public class DatabasePool { private static volatile DatabasePool instance; private DatabasePool() {} public static DatabasePool getInstance() { if (instance == null) { synchronized(DatabasePool.class) { if (instance == null) instance = new DatabasePool(); } } return instance; } }"
  },
  {
    "id": "pat-2",
    "pattern": "Factory Method",
    "category": "Creational",
    "whenToUse": "Object creation logic varies by type; caller delegates instantiation",
    "keyExample": "PaymentProcessor processor = PaymentFactory.getProcessor(PaymentType.UPI);"
  },
  {
    "id": "pat-3",
    "pattern": "Builder",
    "category": "Creational",
    "whenToUse": "Complex object construction with many optional parameters",
    "keyExample": "Order order = new Order.Builder().setUserId('123').addItem(item).build();"
  },
  {
    "id": "pat-4",
    "pattern": "Abstract Factory",
    "category": "Creational",
    "whenToUse": "Families of related or dependent objects without specifying concrete classes",
    "keyExample": "GUIFactory factory = OS.isMac() ? new MacFactory() : new WinFactory();"
  },
  {
    "id": "pat-5",
    "pattern": "Strategy",
    "category": "Behavioral",
    "whenToUse": "Interchangeable algorithms at runtime (e.g. pricing strategies, route calculation)",
    "keyExample": "pricingContext.setStrategy(new SurgePricingStrategy()); double price = pricingContext.calculate(base);"
  },
  {
    "id": "pat-6",
    "pattern": "Observer",
    "category": "Behavioral",
    "whenToUse": "One-to-many event notification without tight coupling",
    "keyExample": "orderService.registerListener(new EmailNotificationListener()); orderService.notifySubscribers();"
  },
  {
    "id": "pat-7",
    "pattern": "Decorator",
    "category": "Structural",
    "whenToUse": "Add behavior dynamically without modifying base class (e.g. Java I/O streams)",
    "keyExample": "Coffee coffee = new MilkDecorator(new SugarDecorator(new SimpleCoffee()));"
  },
  {
    "id": "pat-8",
    "pattern": "Adapter",
    "category": "Structural",
    "whenToUse": "Bridge incompatible interfaces (e.g. legacy payment gateway to modern API)",
    "keyExample": "PaymentGateway adapter = new StripeToLegacyAdapter(stripeClient);"
  },
  {
    "id": "pat-9",
    "pattern": "Proxy",
    "category": "Structural",
    "whenToUse": "Control access to an object (lazy loading, security, caching, Spring @Transactional)",
    "keyExample": "Image image = new ProxyImage('high_res_photo.png'); image.display();"
  },
  {
    "id": "pat-10",
    "pattern": "Chain of Responsibility",
    "category": "Behavioral",
    "whenToUse": "Pass request along a chain of handlers (Servlet Filters, logging, authentication)",
    "keyExample": "authFilter.setNext(rateLimitFilter).setNext(validationFilter); authFilter.handle(request);"
  },
  {
    "id": "pat-11",
    "pattern": "Command",
    "category": "Behavioral",
    "whenToUse": "Encapsulate a request as an object (undo/redo, queueing operations)",
    "keyExample": "commandQueue.add(new PlaceOrderCommand(order)); executor.process();"
  },
  {
    "id": "pat-12",
    "pattern": "State",
    "category": "Behavioral",
    "whenToUse": "Object behavior changes with internal state (Vending Machine, Order status)",
    "keyExample": "orderContext.setState(new ShippedState()); orderContext.process();"
  },
  {
    "id": "pat-13",
    "pattern": "Composite",
    "category": "Structural",
    "whenToUse": "Tree structures representing part-whole hierarchies (File system directories & files)",
    "keyExample": "Directory root = new Directory('root'); root.add(new File('notes.txt'));"
  },
  {
    "id": "pat-14",
    "pattern": "Template Method",
    "category": "Behavioral",
    "whenToUse": "Skeleton algorithm in base class, subclasses fill specific steps",
    "keyExample": "abstract class DataParser { public void process() { read(); parse(); validate(); save(); } }"
  }
];

export const MACHINE_CODING_CHALLENGES: MachineCodingChallenge[] = [
  {
    "id": "mc-1",
    "title": "Parking Lot System",
    "patternsRequired": "Strategy (pricing), Singleton (lot manager), Factory (spot types)",
    "description": "Design a multi-level parking lot supporting compact, regular, and large vehicle slots with dynamic hourly rate calculation."
  },
  {
    "id": "mc-2",
    "title": "Elevator System",
    "patternsRequired": "State Machine, Strategy (scheduling algorithm - SCAN/LOOK)",
    "description": "Design controller for N elevators servicing M floors handling concurrent up/down passenger requests efficiently."
  },
  {
    "id": "mc-3",
    "title": "LRU Cache from Scratch",
    "patternsRequired": "Doubly Linked List + HashMap (O(1) get & put)",
    "description": "Implement thread-safe Least Recently Used cache without using LinkedHashMap, handling concurrent capacity evictions."
  },
  {
    "id": "mc-4",
    "title": "Rate Limiter (In-Memory)",
    "patternsRequired": "Token Bucket or Sliding Window Log",
    "description": "Implement token bucket rate limiter with thread-safe atomic counter and automatic background token replenishment."
  },
  {
    "id": "mc-5",
    "title": "Splitwise / Expense Sharing",
    "patternsRequired": "Strategy (split types: Equal, Exact, Percentage), Graph (debt simplification)",
    "description": "Track shared group expenses and simplify multilateral debts using transaction minimization algorithm."
  },
  {
    "id": "mc-6",
    "title": "Library Management System",
    "patternsRequired": "OOP fundamentals, State pattern (Book status: Issued, Reserved, Lost)",
    "description": "Manage book catalog, search by title/author/ISBN, reservation queues, and fine calculations."
  },
  {
    "id": "mc-7",
    "title": "In-Memory Key-Value Store with TTL",
    "patternsRequired": "HashMap + PriorityQueue / ScheduledExecutorService",
    "description": "Key-value store supporting O(1) reads, expirations with TTL, and active/passive memory cleanup."
  },
  {
    "id": "mc-8",
    "title": "Concurrent Producer-Consumer Queue",
    "patternsRequired": "ReentrantLock, Condition variables / Semaphore",
    "description": "Build custom bounded blocking queue in Java with put() and take() without using java.util.concurrent.ArrayBlockingQueue."
  },
  {
    "id": "mc-9",
    "title": "Cab Booking System (Uber-Lite)",
    "patternsRequired": "Strategy (driver matching), Observer (trip updates), State (ride lifecycle)",
    "description": "Match nearest available drivers based on geo-hash/coordinates, manage trip states, and calculate dynamic fare."
  },
  {
    "id": "mc-10",
    "title": "Movie Ticket Booking (BookMyShow-Lite)",
    "patternsRequired": "Concurrency (seat lock with TTL), Factory, Strategy",
    "description": "Handle simultaneous seat selection with 10-minute hold lock, payment verification, and seat release on timeout."
  }
];

export const JAVA_DEEP_DIVE: CurriculumTopic[] = [
  {
    "id": "java-0",
    "section": "JVM Internals",
    "topic": "\u2615  JAVA DEEP DIVE  \u2014  JVM Internals, Concurrency, Collections  |  Your Differentiator",
    "mustExplain": "",
    "sampleQuestion": ""
  },
  {
    "id": "java-1",
    "section": "JVM Internals",
    "topic": "You already write Java daily \u2014 this sheet turns daily familiarity into interview-grade depth. SDE-2 interviewers WILL probe internals.",
    "mustExplain": "",
    "sampleQuestion": ""
  },
  {
    "id": "java-4",
    "section": "JVM Internals",
    "topic": "Memory Model (Heap/Stack/Metaspace)",
    "mustExplain": "Heap: objects (Young Gen Eden/Survivor + Old Gen). Stack: method frames, local vars. Metaspace: class metadata.",
    "sampleQuestion": "Q: Where does a local variable live vs an object it references?"
  },
  {
    "id": "java-5",
    "section": "JVM Internals",
    "topic": "Garbage Collection Algorithms",
    "mustExplain": "Serial, Parallel, CMS (deprecated), G1 (default since Java 9), ZGC/Shenandoah (low-pause). Generational hypothesis.",
    "sampleQuestion": "Q: Which GC would you pick for a low-latency service vs high-throughput batch job?"
  },
  {
    "id": "java-6",
    "section": "JVM Internals",
    "topic": "GC Tuning Basics",
    "mustExplain": "-Xms/-Xmx, -XX:+UseG1GC, reading GC logs, minor vs major (full) GC pause impact.",
    "sampleQuestion": "Q: Your service has GC pauses causing timeouts \u2014 how do you diagnose and fix?"
  },
  {
    "id": "java-7",
    "section": "JVM Internals",
    "topic": "Class Loading",
    "mustExplain": "Bootstrap \u2192 Extension \u2192 Application classloader. Loading, linking, initialization. Parent delegation model.",
    "sampleQuestion": "Q: What is the parent delegation model and why does it exist?"
  },
  {
    "id": "java-8",
    "section": "JVM Internals",
    "topic": "JIT Compilation",
    "mustExplain": "Interpreter first, then JIT compiles hot methods (C1/C2 compiler). Tiered compilation.",
    "sampleQuestion": "Q: Why is the first run of a method slower than the 1000th run?"
  },
  {
    "id": "java-9",
    "section": "JVM Internals",
    "topic": "Object Memory Layout",
    "mustExplain": "Object header (mark word + class pointer) + instance data + padding.",
    "sampleQuestion": "Q: Why might an empty Java object still take 16 bytes?"
  },
  {
    "id": "java-10",
    "section": "JVM Internals",
    "topic": "String Pool & Interning",
    "mustExplain": "String literals go to the string pool. `new String()` doesn't. Why String is immutable.",
    "sampleQuestion": "Q: Why is String immutable in Java, and what problems would mutability cause?"
  },
  {
    "id": "java-13",
    "section": "Concurrency & Multithreading",
    "topic": "Thread Lifecycle",
    "mustExplain": "NEW \u2192 RUNNABLE \u2192 RUNNING \u2192 BLOCKED/WAITING/TIMED_WAITING \u2192 TERMINATED. start() vs run().",
    "sampleQuestion": "Q: What happens if you call run() instead of start()?"
  },
  {
    "id": "java-14",
    "section": "Concurrency & Multithreading",
    "topic": "synchronized keyword",
    "mustExplain": "Intrinsic lock per object. Method-level vs block-level. Reentrant.",
    "sampleQuestion": "Q: What's the difference between synchronizing on `this` vs a dedicated lock object?"
  },
  {
    "id": "java-15",
    "section": "Concurrency & Multithreading",
    "topic": "volatile keyword",
    "mustExplain": "Guarantees visibility (not atomicity). Prevents instruction reordering.",
    "sampleQuestion": "Q: Why doesn't volatile make i++ thread-safe?"
  },
  {
    "id": "java-16",
    "section": "Concurrency & Multithreading",
    "topic": "Java Memory Model (JMM)",
    "mustExplain": "Happens-before relationship. Why visibility issues occur without synchronization.",
    "sampleQuestion": "Q: Why can one thread see a stale value updated by another thread?"
  },
  {
    "id": "java-17",
    "section": "Concurrency & Multithreading",
    "topic": "Locks (ReentrantLock, ReadWriteLock)",
    "mustExplain": "More flexible than synchronized: tryLock(), fairness, interruptible.",
    "sampleQuestion": "Q: When would you use ReentrantLock over synchronized?"
  },
  {
    "id": "java-18",
    "section": "Concurrency & Multithreading",
    "topic": "Atomic classes",
    "mustExplain": "CAS (Compare-And-Swap) based, lock-free counters.",
    "sampleQuestion": "Q: How does AtomicInteger achieve thread-safety without locks?"
  },
  {
    "id": "java-19",
    "section": "Concurrency & Multithreading",
    "topic": "ExecutorService & Thread Pools",
    "mustExplain": "Fixed/Cached/Scheduled pools. Future, CompletableFuture for async chaining.",
    "sampleQuestion": "Q: How would you design a thread pool for bursty traffic?"
  },
  {
    "id": "java-20",
    "section": "Concurrency & Multithreading",
    "topic": "ConcurrentHashMap Internals",
    "mustExplain": "Segment-based locking (Java 7) \u2192 CAS + synchronized on bins (Java 8+).",
    "sampleQuestion": "Q: How does ConcurrentHashMap achieve high concurrency without locking the whole map?"
  },
  {
    "id": "java-21",
    "section": "Concurrency & Multithreading",
    "topic": "BlockingQueue",
    "mustExplain": "Producer-consumer building block. put()/take() block when full/empty.",
    "sampleQuestion": "Q: Implement a producer-consumer system using BlockingQueue."
  },
  {
    "id": "java-22",
    "section": "Concurrency & Multithreading",
    "topic": "Deadlock, Livelock, Starvation",
    "mustExplain": "Deadlock: circular wait. Livelock: threads keep retrying. Starvation: low-priority thread never runs.",
    "sampleQuestion": "Q: How do you detect and prevent deadlocks in production?"
  },
  {
    "id": "java-23",
    "section": "Concurrency & Multithreading",
    "topic": "CompletableFuture",
    "mustExplain": "Async, non-blocking composition: thenApply, thenCompose, thenCombine.",
    "sampleQuestion": "Q: How would you call 3 microservices in parallel and combine results?"
  },
  {
    "id": "java-24",
    "section": "Concurrency & Multithreading",
    "topic": "Fork/Join Framework",
    "mustExplain": "Divide-and-conquer parallelism, work-stealing. Used internally by parallel streams.",
    "sampleQuestion": "Q: How do parallel streams achieve parallelism under the hood?"
  },
  {
    "id": "java-26",
    "section": "Collections & Java 8+",
    "topic": "Class",
    "mustExplain": "Internal Working",
    "sampleQuestion": "Common Interview Question"
  },
  {
    "id": "java-27",
    "section": "Collections & Java 8+",
    "topic": "HashMap",
    "mustExplain": "Array of buckets. hash() spreads bits. Java 8+: bucket becomes tree if >8 collisions. Load factor 0.75 triggers resize.",
    "sampleQuestion": "Q: Why does HashMap convert a bucket's linked list to a tree, and what's the threshold?"
  },
  {
    "id": "java-28",
    "section": "Collections & Java 8+",
    "topic": "HashMap resize / rehashing",
    "mustExplain": "Resize doubles capacity, rehashes all entries \u2014 O(n) operation, amortized O(1) per insert.",
    "sampleQuestion": "Q: What happens internally when a HashMap resizes?"
  },
  {
    "id": "java-29",
    "section": "Collections & Java 8+",
    "topic": "equals() and hashCode() contract",
    "mustExplain": "Equal objects MUST have equal hashCodes. Breaking this contract breaks HashMap/HashSet.",
    "sampleQuestion": "Q: What breaks if you override equals() but not hashCode()?"
  },
  {
    "id": "java-30",
    "section": "Collections & Java 8+",
    "topic": "ArrayList vs LinkedList",
    "mustExplain": "ArrayList: O(1) random access. LinkedList: O(1) insert/delete at ends, O(n) random access.",
    "sampleQuestion": "Q: When would LinkedList actually be the better choice?"
  },
  {
    "id": "java-31",
    "section": "Collections & Java 8+",
    "topic": "TreeMap / TreeSet",
    "mustExplain": "Red-Black tree backing, O(log n) for get/put/remove, maintains sorted order.",
    "sampleQuestion": "Q: How would you implement a 'find closest value' feature efficiently?"
  },
  {
    "id": "java-32",
    "section": "Collections & Java 8+",
    "topic": "ConcurrentModificationException",
    "mustExplain": "Thrown by fail-fast iterators when collection is structurally modified during iteration.",
    "sampleQuestion": "Q: Why does removing from a List while iterating with for-each throw an exception?"
  },
  {
    "id": "java-33",
    "section": "Collections & Java 8+",
    "topic": "Comparable vs Comparator",
    "mustExplain": "Comparable: natural ordering (compareTo). Comparator: external ordering, passed to sort.",
    "sampleQuestion": "Q: How would you sort Employees by salary descending, then name ascending?"
  },
  {
    "id": "java-34",
    "section": "Collections & Java 8+",
    "topic": "Fail-fast vs Fail-safe iterators",
    "mustExplain": "Fail-fast (ArrayList, HashMap) throws on concurrent modification. Fail-safe (CopyOnWriteArrayList) iterates a snapshot.",
    "sampleQuestion": "Q: Which collections are safe to modify while iterating, and why?"
  },
  {
    "id": "java-35",
    "section": "Collections & Java 8+",
    "topic": "PART D \u2014 MODERN JAVA (8-21) \u2014 EXPECTED FLUENCY",
    "mustExplain": "",
    "sampleQuestion": ""
  },
  {
    "id": "java-36",
    "section": "Collections & Java 8+",
    "topic": "Feature",
    "mustExplain": "What to Know",
    "sampleQuestion": ""
  },
  {
    "id": "java-37",
    "section": "Collections & Java 8+",
    "topic": "Streams API",
    "mustExplain": "map/filter/reduce/collect. Lazy evaluation. Parallel streams trade-offs.",
    "sampleQuestion": ""
  },
  {
    "id": "java-38",
    "section": "Collections & Java 8+",
    "topic": "Optional",
    "mustExplain": "Avoiding null checks. orElse/orElseGet/orElseThrow. Don't overuse.",
    "sampleQuestion": ""
  },
  {
    "id": "java-39",
    "section": "Collections & Java 8+",
    "topic": "Lambda & Functional Interfaces",
    "mustExplain": "Function, Predicate, Supplier, Consumer, BiFunction. Method references.",
    "sampleQuestion": ""
  },
  {
    "id": "java-40",
    "section": "Collections & Java 8+",
    "topic": "var (local type inference)",
    "mustExplain": "Java 10+. Compile-time type inference, not dynamic typing.",
    "sampleQuestion": ""
  },
  {
    "id": "java-41",
    "section": "Collections & Java 8+",
    "topic": "Records (Java 14+)",
    "mustExplain": "Immutable data carriers, auto-generates equals/hashCode/toString. Good for DTOs.",
    "sampleQuestion": ""
  },
  {
    "id": "java-42",
    "section": "Collections & Java 8+",
    "topic": "Sealed Classes (Java 17+)",
    "mustExplain": "Restrict which classes can extend/implement.",
    "sampleQuestion": ""
  },
  {
    "id": "java-43",
    "section": "Collections & Java 8+",
    "topic": "Virtual Threads (Java 21)",
    "mustExplain": "Lightweight threads for high-concurrency I/O-bound workloads.",
    "sampleQuestion": ""
  }
];

export const BACKEND_CURRICULUM: CurriculumTopic[] = [
  {
    "id": "backend-0",
    "section": "Spring Boot Framework",
    "topic": "\ud83c\udf10  BACKEND ENGINEERING + DISTRIBUTED SYSTEMS  \u2014  Spring Boot, Microservices, Kafka",
    "mustExplain": "",
    "sampleQuestion": ""
  },
  {
    "id": "backend-1",
    "section": "Spring Boot Framework",
    "topic": "This is YOUR home turf. Most SDE-2 candidates fake this \u2014 you actually do it daily. Turn MuleSoft/Spring Boot work into crisp depth.",
    "mustExplain": "",
    "sampleQuestion": ""
  },
  {
    "id": "backend-4",
    "section": "Spring Boot Framework",
    "topic": "IoC & Dependency Injection",
    "mustExplain": "Spring container manages object lifecycle. Constructor injection preferred (testability, immutability, avoids circular deps).",
    "sampleQuestion": "Q: Why is constructor injection preferred over @Autowired field injection?"
  },
  {
    "id": "backend-5",
    "section": "Spring Boot Framework",
    "topic": "Bean Lifecycle",
    "mustExplain": "Instantiation \u2192 DI \u2192 @PostConstruct \u2192 ready \u2192 @PreDestroy \u2192 destroyed. BeanFactory vs ApplicationContext.",
    "sampleQuestion": "Q: Walk through what happens from startup to a bean being ready."
  },
  {
    "id": "backend-6",
    "section": "Spring Boot Framework",
    "topic": "Bean Scopes",
    "mustExplain": "Singleton (default) vs Prototype vs Request/Session scope. Singleton + mutable state = thread-safety risk.",
    "sampleQuestion": "Q: What's dangerous about a singleton bean holding mutable instance state?"
  },
  {
    "id": "backend-7",
    "section": "Spring Boot Framework",
    "topic": "Spring AOP",
    "mustExplain": "Proxy-based (JDK dynamic proxy / CGLIB). Used for @Transactional, @Cacheable, logging.",
    "sampleQuestion": "Q: How does @Transactional actually work under the hood?"
  },
  {
    "id": "backend-8",
    "section": "Spring Boot Framework",
    "topic": "Spring Boot Auto-configuration",
    "mustExplain": "@EnableAutoConfiguration scans classpath, conditionally configures beans (@ConditionalOnClass).",
    "sampleQuestion": "Q: How does Spring Boot know to configure a DataSource just from a JDBC dependency?"
  },
  {
    "id": "backend-9",
    "section": "Spring Boot Framework",
    "topic": "Exception Handling",
    "mustExplain": "@ControllerAdvice + @ExceptionHandler for centralized handling. Custom error response structure.",
    "sampleQuestion": "Q: How would you design consistent error responses across all your REST APIs?"
  },
  {
    "id": "backend-10",
    "section": "Spring Boot Framework",
    "topic": "Spring Data JPA",
    "mustExplain": "Repository pattern, derived queries, N+1 problem and fixes (JOIN FETCH, @EntityGraph).",
    "sampleQuestion": "Q: How do you detect and fix the N+1 query problem in JPA?"
  },
  {
    "id": "backend-11",
    "section": "Spring Boot Framework",
    "topic": "Transactions (@Transactional)",
    "mustExplain": "Propagation (REQUIRED, REQUIRES_NEW), Isolation levels. Self-invocation breaks @Transactional.",
    "sampleQuestion": "Q: Why doesn't @Transactional work when called from within the same class?"
  },
  {
    "id": "backend-12",
    "section": "Spring Boot Framework",
    "topic": "Spring Security basics",
    "mustExplain": "Authentication vs Authorization. Filter chain. JWT stateless vs session-based.",
    "sampleQuestion": "Q: How would you secure a REST API for a mobile app \u2014 sessions or tokens?"
  },
  {
    "id": "backend-13",
    "section": "Spring Boot Framework",
    "topic": "Actuator & Observability",
    "mustExplain": "Health checks, metrics endpoints, Prometheus/Grafana integration.",
    "sampleQuestion": "Q: How do you know if your microservice is healthy in production right now?"
  },
  {
    "id": "backend-16",
    "section": "Microservices Patterns",
    "topic": "Service Decomposition",
    "mustExplain": "Decompose by business capability (DDD bounded contexts), not technical layer. Avoid distributed monolith.",
    "sampleQuestion": "Q: How would you decide service boundaries for an e-commerce platform?"
  },
  {
    "id": "backend-17",
    "section": "Microservices Patterns",
    "topic": "Service Discovery",
    "mustExplain": "Client-side (Eureka+Ribbon) vs Server-side (via load balancer). Why hardcoded URLs don't scale.",
    "sampleQuestion": "Q: How does Service A find Service B's current location in a dynamically scaling environment?"
  },
  {
    "id": "backend-18",
    "section": "Microservices Patterns",
    "topic": "API Gateway Pattern",
    "mustExplain": "Single entry point: auth, rate limiting, routing, request aggregation.",
    "sampleQuestion": "Q: What problems does an API Gateway solve that load balancers alone can't?"
  },
  {
    "id": "backend-19",
    "section": "Microservices Patterns",
    "topic": "Circuit Breaker Pattern",
    "mustExplain": "Resilience4j/Hystrix. Closed \u2192 Open \u2192 Half-Open. Prevents cascading failures.",
    "sampleQuestion": "Q: Service B is slow/down \u2014 how do you stop it from taking down Service A too?"
  },
  {
    "id": "backend-20",
    "section": "Microservices Patterns",
    "topic": "Saga Pattern",
    "mustExplain": "Choreography vs Orchestration. Compensating transactions since no 2PC across services.",
    "sampleQuestion": "Q: How do you handle a transaction spanning Order, Payment, and Inventory services?"
  },
  {
    "id": "backend-21",
    "section": "Microservices Patterns",
    "topic": "Eventual Consistency",
    "mustExplain": "Idempotent consumers, outbox pattern for reliable event publishing.",
    "sampleQuestion": "Q: Order Service publishes an event but the broker is down \u2014 how do you not lose it?"
  },
  {
    "id": "backend-22",
    "section": "Microservices Patterns",
    "topic": "Inter-service Communication",
    "mustExplain": "Sync (REST/gRPC) vs Async (message queue). gRPC for internal, REST for external.",
    "sampleQuestion": "Q: When would you choose gRPC over REST for inter-service calls?"
  },
  {
    "id": "backend-23",
    "section": "Microservices Patterns",
    "topic": "Distributed Tracing",
    "mustExplain": "Correlation IDs, Zipkin/Jaeger, OpenTelemetry.",
    "sampleQuestion": "Q: A request is slow across 5 microservices \u2014 how do you find which one?"
  },
  {
    "id": "backend-24",
    "section": "Microservices Patterns",
    "topic": "Config Management",
    "mustExplain": "Centralized config (Spring Cloud Config). Secrets management (Vault).",
    "sampleQuestion": "Q: How do you change a feature flag across 20 microservices without redeploying?"
  },
  {
    "id": "backend-25",
    "section": "Microservices Patterns",
    "topic": "Database per Service",
    "mustExplain": "Each microservice owns its data \u2014 cross-service via API or CQRS materialized views.",
    "sampleQuestion": "Q: Why shouldn't two microservices share the same database table?"
  },
  {
    "id": "backend-28",
    "section": "Kafka & Messaging",
    "topic": "Topics & Partitions",
    "mustExplain": "Topic = logical stream. Partitions = parallelism unit, ordered within partition only.",
    "sampleQuestion": "Q: Why might two events about the same order end up out of order without careful partition keying?"
  },
  {
    "id": "backend-29",
    "section": "Kafka & Messaging",
    "topic": "Consumer Groups",
    "mustExplain": "Each partition consumed by exactly one consumer within a group.",
    "sampleQuestion": "Q: You have 10 partitions and add an 11th consumer \u2014 what happens?"
  },
  {
    "id": "backend-30",
    "section": "Kafka & Messaging",
    "topic": "Offsets & Replay",
    "mustExplain": "Consumers track offset. Can reset/replay for reprocessing.",
    "sampleQuestion": "Q: A bug caused incorrect processing for 2 hours \u2014 how do you fix it using Kafka's design?"
  },
  {
    "id": "backend-31",
    "section": "Kafka & Messaging",
    "topic": "Delivery Semantics",
    "mustExplain": "At-most-once, at-least-once, exactly-once. Most target at-least-once + idempotent consumers.",
    "sampleQuestion": "Q: How do you handle duplicate processing if Kafka guarantees only at-least-once delivery?"
  },
  {
    "id": "backend-32",
    "section": "Kafka & Messaging",
    "topic": "Kafka vs RabbitMQ vs SQS",
    "mustExplain": "Kafka: high throughput, replay. RabbitMQ: flexible routing. SQS: managed, AWS-native.",
    "sampleQuestion": "Q: Choosing a message broker for an order-processing pipeline \u2014 which and why?"
  },
  {
    "id": "backend-33",
    "section": "Kafka & Messaging",
    "topic": "Dead Letter Queues",
    "mustExplain": "Failed messages routed to DLQ after N retries \u2014 critical for production resilience.",
    "sampleQuestion": "Q: A malformed message is stuck retrying forever \u2014 how do you prevent this?"
  },
  {
    "id": "backend-34",
    "section": "Kafka & Messaging",
    "topic": "Outbox Pattern",
    "mustExplain": "Write DB change + event to outbox table in same transaction, then publish separately.",
    "sampleQuestion": "Q: How do you guarantee a DB write and Kafka publish happen atomically?"
  },
  {
    "id": "backend-35",
    "section": "Kafka & Messaging",
    "topic": "Schema Evolution",
    "mustExplain": "Avro/Protobuf with schema registry \u2014 backward/forward compatibility.",
    "sampleQuestion": "Q: You need to add a new field to an event \u2014 how without breaking consumers?"
  },
  {
    "id": "backend-38",
    "section": "Distributed Caching & Redis",
    "topic": "Enterprise Integration Patterns",
    "mustExplain": "MuleSoft is built on EIP (Message Router, Content-Based Router, Splitter/Aggregator) \u2014 maps directly to microservices patterns. Say so explicitly.",
    "sampleQuestion": ""
  },
  {
    "id": "backend-39",
    "section": "Distributed Caching & Redis",
    "topic": "API-led Connectivity",
    "mustExplain": "MuleSoft's System/Process/Experience API layering is conceptually identical to microservices layering.",
    "sampleQuestion": ""
  },
  {
    "id": "backend-40",
    "section": "Distributed Caching & Redis",
    "topic": "Transformation & Mapping (DataWeave)",
    "mustExplain": "Position as: handled complex data transformation across heterogeneous systems \u2014 relevant to integration-heavy backend roles.",
    "sampleQuestion": ""
  },
  {
    "id": "backend-41",
    "section": "Distributed Caching & Redis",
    "topic": "Error Handling & Retry Logic",
    "mustExplain": "MuleSoft's error handlers map to circuit breakers and retry patterns \u2014 connect the dot explicitly.",
    "sampleQuestion": ""
  },
  {
    "id": "backend-42",
    "section": "Distributed Caching & Redis",
    "topic": "Idempotency in Integration Flows",
    "mustExplain": "If you've handled duplicate message processing in MuleSoft, that's the same problem as idempotent Kafka consumers \u2014 reuse this story.",
    "sampleQuestion": ""
  },
  {
    "id": "backend-43",
    "section": "Distributed Caching & Redis",
    "topic": "REST/SOAP Connector Experience",
    "mustExplain": "Hands-on experience with diverse protocols is valuable breadth most candidates lack.",
    "sampleQuestion": ""
  }
];

export const DATABASE_CURRICULUM: CurriculumTopic[] = [
  {
    "id": "db-0",
    "section": "SQL Practice",
    "topic": "\ud83d\uddc4  DATABASE ENGINEERING  \u2014  SQL Hands-On + Schema Design + Internals",
    "mustExplain": "",
    "sampleQuestion": ""
  },
  {
    "id": "db-1",
    "section": "SQL Practice",
    "topic": "SDE-2 SQL rounds expect you to WRITE correct, optimized queries live. Practice on paper/whiteboard, not just IDE autocomplete.",
    "mustExplain": "",
    "sampleQuestion": ""
  },
  {
    "id": "db-4",
    "section": "SQL Hands-On Practice",
    "topic": "Joins",
    "mustExplain": "Find employees who earn more than their manager (self-join)",
    "sampleQuestion": "Self-join, comparison across rows"
  },
  {
    "id": "db-5",
    "section": "SQL Hands-On Practice",
    "topic": "Joins",
    "mustExplain": "Find all customers who have NOT placed an order (LEFT JOIN + IS NULL)",
    "sampleQuestion": "Anti-join pattern"
  },
  {
    "id": "db-6",
    "section": "SQL Hands-On Practice",
    "topic": "Aggregation",
    "mustExplain": "Find the department with the highest average salary (GROUP BY + HAVING)",
    "sampleQuestion": "GROUP BY vs WHERE vs HAVING"
  },
  {
    "id": "db-7",
    "section": "SQL Hands-On Practice",
    "topic": "Window Functions",
    "mustExplain": "Find the 2nd highest salary per department (RANK/DENSE_RANK + PARTITION BY)",
    "sampleQuestion": "Window functions \u2014 frequently asked"
  },
  {
    "id": "db-8",
    "section": "SQL Hands-On Practice",
    "topic": "Window Functions",
    "mustExplain": "Calculate running total of sales by month (SUM() OVER ORDER BY)",
    "sampleQuestion": "Cumulative aggregation"
  },
  {
    "id": "db-9",
    "section": "SQL Hands-On Practice",
    "topic": "Subqueries",
    "mustExplain": "Find products priced above the average price of their category (correlated subquery)",
    "sampleQuestion": "Correlated vs non-correlated subqueries"
  },
  {
    "id": "db-10",
    "section": "SQL Hands-On Practice",
    "topic": "Set Operations",
    "mustExplain": "Find users in Table A but not Table B (EXCEPT / NOT IN / NOT EXISTS)",
    "sampleQuestion": "NULL handling pitfalls"
  },
  {
    "id": "db-11",
    "section": "SQL Hands-On Practice",
    "topic": "CTE / Recursive",
    "mustExplain": "Find all reports under a manager recursively using WITH RECURSIVE",
    "sampleQuestion": "Recursive CTEs for hierarchical data"
  },
  {
    "id": "db-12",
    "section": "SQL Hands-On Practice",
    "topic": "Date Functions",
    "mustExplain": "Find users who signed up but made no purchase in their first 30 days",
    "sampleQuestion": "Date arithmetic, business logic"
  },
  {
    "id": "db-13",
    "section": "SQL Hands-On Practice",
    "topic": "Deduplication",
    "mustExplain": "Remove duplicate rows keeping the latest by timestamp (ROW_NUMBER + DELETE)",
    "sampleQuestion": "Window function for dedup"
  },
  {
    "id": "db-14",
    "section": "SQL Hands-On Practice",
    "topic": "Pivoting",
    "mustExplain": "Convert rows into columns using CASE WHEN + aggregation",
    "sampleQuestion": "Manual pivot pattern"
  },
  {
    "id": "db-15",
    "section": "SQL Hands-On Practice",
    "topic": "Performance",
    "mustExplain": "Given a slow query and EXPLAIN output, identify the missing index",
    "sampleQuestion": "Reading query plans, index usage"
  },
  {
    "id": "db-18",
    "section": "Database Internals & Indexing",
    "topic": "Indexing internals (B+ Tree)",
    "mustExplain": "Why B+ Tree is the standard \u2014 sorted range queries, balanced height, sequential leaf access.",
    "sampleQuestion": ""
  },
  {
    "id": "db-19",
    "section": "Database Internals & Indexing",
    "topic": "Clustered vs Non-clustered index",
    "mustExplain": "Clustered: determines physical row order, one per table. Non-clustered: separate structure pointing to rows.",
    "sampleQuestion": ""
  },
  {
    "id": "db-20",
    "section": "Database Internals & Indexing",
    "topic": "Composite index column order",
    "mustExplain": "Leftmost-prefix rule \u2014 index on (a,b,c) helps (a), (a,b), (a,b,c) but not (b) alone.",
    "sampleQuestion": ""
  },
  {
    "id": "db-21",
    "section": "Database Internals & Indexing",
    "topic": "Normalization vs Denormalization",
    "mustExplain": "Normalize for write-heavy/OLTP. Denormalize for read-heavy/OLAP \u2014 discuss this trade-off for YOUR project.",
    "sampleQuestion": ""
  },
  {
    "id": "db-22",
    "section": "Database Internals & Indexing",
    "topic": "Transaction Isolation Levels",
    "mustExplain": "Read Uncommitted/Committed, Repeatable Read, Serializable \u2014 which level prevents which anomaly.",
    "sampleQuestion": ""
  },
  {
    "id": "db-23",
    "section": "Database Internals & Indexing",
    "topic": "Locking (Pessimistic vs Optimistic)",
    "mustExplain": "Pessimistic: lock rows on read. Optimistic: version column check on write.",
    "sampleQuestion": ""
  },
  {
    "id": "db-24",
    "section": "Database Internals & Indexing",
    "topic": "Database Sharding Strategies",
    "mustExplain": "Range-based, hash-based, directory-based. Consistent hashing minimizes resharding pain.",
    "sampleQuestion": ""
  },
  {
    "id": "db-25",
    "section": "Database Internals & Indexing",
    "topic": "Replication",
    "mustExplain": "Master-slave (read scaling) vs Master-master (write availability, conflict risk).",
    "sampleQuestion": ""
  },
  {
    "id": "db-26",
    "section": "Database Internals & Indexing",
    "topic": "Connection Pooling",
    "mustExplain": "Why you can't open a new DB connection per request \u2014 HikariCP basics.",
    "sampleQuestion": ""
  },
  {
    "id": "db-27",
    "section": "Database Internals & Indexing",
    "topic": "NoSQL trade-offs",
    "mustExplain": "Document/KV/Column/Graph models \u2014 match to use case (MongoDB/DynamoDB/Cassandra/Neo4j).",
    "sampleQuestion": ""
  }
];

export const CORE_CS_CURRICULUM: CurriculumTopic[] = [
  {
    "id": "cs-0",
    "section": "Operating Systems",
    "topic": "\ud83d\udcbe  CS FUNDAMENTALS  \u2014  OS + Computer Networks + OOP  |  Google Weighs This Heavily",
    "mustExplain": "",
    "sampleQuestion": ""
  },
  {
    "id": "cs-1",
    "section": "Operating Systems",
    "topic": "SQL/DBMS theory lives in the Database Engineering sheet. This sheet = OS, Networks, OOP \u2014 probed directly in Google/MS screening rounds.",
    "mustExplain": "",
    "sampleQuestion": ""
  },
  {
    "id": "cs-2",
    "section": "Operating Systems",
    "topic": "CS Fundamentals Readiness (pulled by Dashboard P1):",
    "mustExplain": "",
    "sampleQuestion": ""
  },
  {
    "id": "cs-5",
    "section": "Operating Systems",
    "topic": "Process vs Thread",
    "mustExplain": "Process: isolated memory, heavyweight context switch. Thread: shared memory, lightweight. PCB vs TCB.",
    "sampleQuestion": "Q: Why are threads called 'lightweight processes'?"
  },
  {
    "id": "cs-6",
    "section": "Operating Systems",
    "topic": "CPU Scheduling",
    "mustExplain": "FCFS, SJF, Round Robin, Priority, MLFQ. Convoy effect, starvation, turnaround/waiting time calculations.",
    "sampleQuestion": "Q: Calculate average waiting time for these processes using SJF."
  },
  {
    "id": "cs-7",
    "section": "Operating Systems",
    "topic": "Deadlocks",
    "mustExplain": "4 necessary conditions. Prevention vs Avoidance (Banker's Algorithm) vs Detection+Recovery.",
    "sampleQuestion": "Q: Explain the Banker's Algorithm and when you'd use it."
  },
  {
    "id": "cs-8",
    "section": "Operating Systems",
    "topic": "Synchronization Primitives",
    "mustExplain": "Mutex, Semaphore (counting vs binary), Monitor. Producer-consumer problem as the classic example.",
    "sampleQuestion": "Q: Solve the producer-consumer problem using semaphores."
  },
  {
    "id": "cs-9",
    "section": "Operating Systems",
    "topic": "Memory Management",
    "mustExplain": "Paging, Segmentation, Virtual Memory, Page Fault, Thrashing, TLB.",
    "sampleQuestion": "Q: What causes thrashing and how do you mitigate it?"
  },
  {
    "id": "cs-10",
    "section": "Operating Systems",
    "topic": "File Systems",
    "mustExplain": "Inode structure, file allocation methods (contiguous/linked/indexed), directory structures.",
    "sampleQuestion": "Q: How does the OS locate a file's data blocks given its inode?"
  },
  {
    "id": "cs-13",
    "section": "Computer Networks",
    "topic": "OSI vs TCP/IP Model",
    "mustExplain": "7 layers vs 4 layers. Know which protocol operates at which layer (HTTP=App, TCP=Transport, IP=Network).",
    "sampleQuestion": "Q: At which layer does a router operate, and why?"
  },
  {
    "id": "cs-14",
    "section": "Computer Networks",
    "topic": "TCP vs UDP",
    "mustExplain": "TCP: reliable, ordered, 3-way handshake, congestion control. UDP: fast, connectionless, no guarantees.",
    "sampleQuestion": "Q: Why does DNS use UDP but file transfer uses TCP?"
  },
  {
    "id": "cs-15",
    "section": "Computer Networks",
    "topic": "HTTP/HTTPS & versions",
    "mustExplain": "HTTP/1.1 (head-of-line blocking) vs HTTP/2 (multiplexing) vs HTTP/3 (QUIC, UDP-based). Status codes, headers, idempotency.",
    "sampleQuestion": "Q: What problem does HTTP/2 multiplexing solve compared to HTTP/1.1?"
  },
  {
    "id": "cs-16",
    "section": "Computer Networks",
    "topic": "DNS Resolution",
    "mustExplain": "Recursive vs iterative resolution, DNS hierarchy (root\u2192TLD\u2192authoritative), caching/TTL.",
    "sampleQuestion": "Q: Walk through what happens when you type a URL into the browser."
  },
  {
    "id": "cs-17",
    "section": "Computer Networks",
    "topic": "Load Balancing (network layer)",
    "mustExplain": "L4 vs L7 load balancing, health checks, sticky sessions.",
    "sampleQuestion": "Q: What's the difference between L4 and L7 load balancing?"
  },
  {
    "id": "cs-18",
    "section": "Computer Networks",
    "topic": "REST vs gRPC vs WebSockets",
    "mustExplain": "REST: stateless request/response. gRPC: HTTP/2, Protobuf, fast for internal services. WebSocket: full-duplex persistent connection.",
    "sampleQuestion": "Q: When would you use WebSockets instead of REST polling?"
  },
  {
    "id": "cs-21",
    "section": "Object Oriented Design",
    "topic": "Encapsulation",
    "mustExplain": "Bundling data + methods, restricting direct access via access modifiers \u2014 protects invariants.",
    "sampleQuestion": ""
  },
  {
    "id": "cs-22",
    "section": "Object Oriented Design",
    "topic": "Inheritance vs Composition",
    "mustExplain": "'Favor composition over inheritance' \u2014 why deep inheritance hierarchies become fragile (fragile base class problem).",
    "sampleQuestion": ""
  },
  {
    "id": "cs-23",
    "section": "Object Oriented Design",
    "topic": "Polymorphism",
    "mustExplain": "Compile-time (overloading) vs runtime (overriding via dynamic dispatch / vtable mechanism).",
    "sampleQuestion": ""
  },
  {
    "id": "cs-24",
    "section": "Object Oriented Design",
    "topic": "Abstraction",
    "mustExplain": "Interfaces vs abstract classes \u2014 when to use which (multiple inheritance of type vs shared implementation).",
    "sampleQuestion": ""
  },
  {
    "id": "cs-25",
    "section": "Object Oriented Design",
    "topic": "SOLID Principles",
    "mustExplain": "Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion \u2014 with a Java example for each.",
    "sampleQuestion": ""
  },
  {
    "id": "cs-26",
    "section": "Object Oriented Design",
    "topic": "Liskov Substitution Principle (deep)",
    "mustExplain": "Classic violation example: Square extends Rectangle \u2014 be ready to explain why this breaks LSP.",
    "sampleQuestion": ""
  }
];

export const CLOUD_CURRICULUM: CloudServiceItem[] = [
  {
    "id": "cloud-1",
    "provider": "AWS",
    "service": "You don't need certification-level depth. You need: name the right service, explain the trade-off, sound like you've used it.",
    "whatItDoes": "",
    "whenToUse": ""
  },
  {
    "id": "cloud-4",
    "provider": "AWS",
    "service": "EC2",
    "whatItDoes": "Virtual machines / compute instances",
    "whenToUse": "Hosting backend services that need full OS control"
  },
  {
    "id": "cloud-5",
    "provider": "AWS",
    "service": "S3",
    "whatItDoes": "Object storage (files, blobs, static assets)",
    "whenToUse": "Storing uploaded files, logs, static website hosting, data lake"
  },
  {
    "id": "cloud-6",
    "provider": "AWS",
    "service": "RDS",
    "whatItDoes": "Managed relational database",
    "whenToUse": "Don't want to manage DB ops yourself"
  },
  {
    "id": "cloud-7",
    "provider": "AWS",
    "service": "DynamoDB",
    "whatItDoes": "Managed NoSQL key-value/document store",
    "whenToUse": "High-scale, low-latency key-based access patterns"
  },
  {
    "id": "cloud-8",
    "provider": "AWS",
    "service": "Lambda",
    "whatItDoes": "Serverless functions, event-triggered",
    "whenToUse": "Short-lived tasks, glue code, no idle-server cost"
  },
  {
    "id": "cloud-9",
    "provider": "AWS",
    "service": "SQS",
    "whatItDoes": "Managed message queue",
    "whenToUse": "Decoupling producers/consumers, simpler than self-hosting Kafka"
  },
  {
    "id": "cloud-10",
    "provider": "AWS",
    "service": "SNS",
    "whatItDoes": "Pub-sub notification service",
    "whenToUse": "Fan-out a single event to multiple subscribers"
  },
  {
    "id": "cloud-11",
    "provider": "AWS",
    "service": "API Gateway",
    "whatItDoes": "Managed API front door",
    "whenToUse": "Expose Lambda/backend services as REST APIs"
  },
  {
    "id": "cloud-12",
    "provider": "AWS",
    "service": "CloudFront",
    "whatItDoes": "CDN",
    "whenToUse": "Serving static/media content with low latency globally"
  },
  {
    "id": "cloud-13",
    "provider": "AWS",
    "service": "ELB",
    "whatItDoes": "Load balancing layer",
    "whenToUse": "Distributing traffic across EC2/containers"
  },
  {
    "id": "cloud-14",
    "provider": "AWS",
    "service": "ECS / EKS",
    "whatItDoes": "Container orchestration",
    "whenToUse": "Running containerized microservices at scale"
  },
  {
    "id": "cloud-16",
    "provider": "AWS",
    "service": "CloudWatch",
    "whatItDoes": "Monitoring & logging",
    "whenToUse": "Tracking metrics, setting alarms, centralizing logs"
  },
  {
    "id": "cloud-17",
    "provider": "AWS",
    "service": "PART B \u2014 AZURE ESSENTIALS  (assumed baseline at Microsoft)",
    "whatItDoes": "",
    "whenToUse": ""
  },
  {
    "id": "cloud-22",
    "provider": "Azure",
    "service": "Cosmos DB",
    "whatItDoes": "DynamoDB",
    "whenToUse": "Globally distributed, multi-model NoSQL database"
  },
  {
    "id": "cloud-24",
    "provider": "Azure",
    "service": "Service Bus",
    "whatItDoes": "SQS+SNS",
    "whenToUse": "Enterprise messaging \u2014 queues + topics in one service"
  },
  {
    "id": "cloud-27",
    "provider": "Azure",
    "service": "AKS",
    "whatItDoes": "EKS",
    "whenToUse": "Managed Kubernetes for container orchestration"
  },
  {
    "id": "cloud-31",
    "provider": "AWS",
    "service": "Concept",
    "whatItDoes": "What to Know",
    "whenToUse": "Status"
  },
  {
    "id": "cloud-32",
    "provider": "AWS",
    "service": "Containers & Docker",
    "whatItDoes": "Image vs container. Why containers > VMs for microservices.",
    "whenToUse": "Not Started"
  },
  {
    "id": "cloud-33",
    "provider": "AWS",
    "service": "Kubernetes basics",
    "whatItDoes": "Pods, Deployments, Services, ConfigMaps/Secrets. Auto-scaling (HPA), self-healing.",
    "whenToUse": "Not Started"
  },
  {
    "id": "cloud-34",
    "provider": "AWS",
    "service": "Infrastructure as Code",
    "whatItDoes": "Terraform/CloudFormation/ARM \u2014 why manual console clicking doesn't scale.",
    "whenToUse": "Not Started"
  },
  {
    "id": "cloud-35",
    "provider": "AWS",
    "service": "CI/CD Pipelines",
    "whatItDoes": "Build \u2192 Test \u2192 Deploy. Blue-green vs canary vs rolling deployments.",
    "whenToUse": "Not Started"
  },
  {
    "id": "cloud-36",
    "provider": "AWS",
    "service": "Auto-scaling",
    "whatItDoes": "Horizontal scaling triggered by CPU/memory/custom metrics.",
    "whenToUse": "Not Started"
  },
  {
    "id": "cloud-37",
    "provider": "AWS",
    "service": "Cost optimization awareness",
    "whatItDoes": "Reserved vs on-demand vs spot instances. Right-sizing.",
    "whenToUse": "Not Started"
  }
];

export const BEHAVIORAL_LPS: BehavioralLPItem[] = [
  {
    "id": "lp-0",
    "principle": "\ud83c\udfa4  BEHAVIORAL STORY BANK  \u2014  Amazon LPs + Microsoft Values + Google Googleyness",
    "testingFor": "",
    "sampleQuestion": ""
  },
  {
    "id": "lp-1",
    "principle": "SDE-2 bar: stories must show OWNERSHIP and SCOPE \u2014 not 'I fixed a bug' but 'I owned X system area and drove Y outcome'.",
    "testingFor": "",
    "sampleQuestion": ""
  },
  {
    "id": "lp-2",
    "principle": "ALL 16 LEADERSHIP PRINCIPLES + STORY MAPPING",
    "testingFor": "",
    "sampleQuestion": ""
  },
  {
    "id": "lp-4",
    "principle": "Customer Obsession",
    "testingFor": "Do you start with customer needs and work backward?",
    "sampleQuestion": ""
  },
  {
    "id": "lp-5",
    "principle": "Ownership",
    "testingFor": "Do you act like an owner, take responsibility beyond your role?",
    "sampleQuestion": ""
  },
  {
    "id": "lp-6",
    "principle": "Invent and Simplify",
    "testingFor": "Do you find simple solutions to complex problems?",
    "sampleQuestion": ""
  },
  {
    "id": "lp-7",
    "principle": "Are Right, A Lot",
    "testingFor": "Do you have strong judgment and good instincts?",
    "sampleQuestion": ""
  },
  {
    "id": "lp-8",
    "principle": "Learn and Be Curious",
    "testingFor": "Are you continuously learning new things?",
    "sampleQuestion": ""
  },
  {
    "id": "lp-9",
    "principle": "Hire and Develop the Best",
    "testingFor": "Do you raise the bar and mentor others?",
    "sampleQuestion": ""
  },
  {
    "id": "lp-10",
    "principle": "Insist on the Highest Standards",
    "testingFor": "Do you refuse to settle for 'good enough'?",
    "sampleQuestion": ""
  },
  {
    "id": "lp-11",
    "principle": "Think Big",
    "testingFor": "Do you create and communicate bold direction?",
    "sampleQuestion": ""
  },
  {
    "id": "lp-12",
    "principle": "Bias for Action",
    "testingFor": "Do you value speed and calculated risk-taking?",
    "sampleQuestion": ""
  },
  {
    "id": "lp-13",
    "principle": "Frugality",
    "testingFor": "Do you accomplish more with less?",
    "sampleQuestion": ""
  },
  {
    "id": "lp-14",
    "principle": "Earn Trust",
    "testingFor": "Are you respectful, honest, and a good listener?",
    "sampleQuestion": ""
  },
  {
    "id": "lp-15",
    "principle": "Dive Deep",
    "testingFor": "Do you stay connected to the details and data?",
    "sampleQuestion": ""
  },
  {
    "id": "lp-16",
    "principle": "Have Backbone; Disagree and Commit",
    "testingFor": "Do you respectfully challenge decisions, then commit?",
    "sampleQuestion": ""
  },
  {
    "id": "lp-17",
    "principle": "Deliver Results",
    "testingFor": "Do you deliver despite obstacles?",
    "sampleQuestion": ""
  },
  {
    "id": "lp-18",
    "principle": "Strive to be Earth's Best Employer",
    "testingFor": "Do you create an inclusive, safe environment?",
    "sampleQuestion": ""
  },
  {
    "id": "lp-19",
    "principle": "Success and Scale Bring Broad Responsibility",
    "testingFor": "Do you consider broader impact of your decisions?",
    "sampleQuestion": ""
  },
  {
    "id": "lp-20",
    "principle": "YOUR STAR STORY BANK  (Min 12-15, seeded from Capgemini experience)",
    "testingFor": "",
    "sampleQuestion": ""
  },
  {
    "id": "lp-21",
    "principle": "Story Title",
    "testingFor": "LPs Covered",
    "sampleQuestion": "Microsoft Value\nMapping"
  },
  {
    "id": "lp-22",
    "principle": "Integration Latency Fix",
    "testingFor": "Ownership, Bias for Action, Dive Deep",
    "sampleQuestion": "Growth Mindset, Accountable"
  },
  {
    "id": "lp-23",
    "principle": "Legacy XML to REST Migration",
    "testingFor": "Ownership, Invent and Simplify",
    "sampleQuestion": "Growth Mindset, One Microsoft"
  },
  {
    "id": "lp-24",
    "principle": "Saturday Production Outage",
    "testingFor": "Dive Deep, Bias for Action, Earn Trust",
    "sampleQuestion": "Accountable, Customer Obsessed"
  },
  {
    "id": "lp-25",
    "principle": "Pushed Back on Tight Deadline",
    "testingFor": "Have Backbone and Disagree and Commit, Insist on Highest Standards",
    "sampleQuestion": "Respectful, Accountable"
  },
  {
    "id": "lp-26",
    "principle": "Code Review Standards",
    "testingFor": "Insist on Highest Standards, Ownership",
    "sampleQuestion": "Accountable, Growth Mindset"
  },
  {
    "id": "lp-27",
    "principle": "Self-Taught Spring Boot",
    "testingFor": "Learn and Be Curious",
    "sampleQuestion": "Growth Mindset"
  },
  {
    "id": "lp-28",
    "principle": "Mentored Junior Developer",
    "testingFor": "Hire and Develop the Best",
    "sampleQuestion": "Growth Mindset, Diverse & Inclusive"
  },
  {
    "id": "lp-29",
    "principle": "Cross-Team API Conflict",
    "testingFor": "Earn Trust, Have Backbone and Disagree and Commit",
    "sampleQuestion": "One Microsoft, Respectful"
  },
  {
    "id": "lp-30",
    "principle": "Add story #9 \u2192",
    "testingFor": "Choose LP(s)",
    "sampleQuestion": ""
  },
  {
    "id": "lp-31",
    "principle": "Add story #10 \u2192",
    "testingFor": "Choose LP(s)",
    "sampleQuestion": ""
  },
  {
    "id": "lp-32",
    "principle": "Add story #11 \u2192",
    "testingFor": "Choose LP(s)",
    "sampleQuestion": ""
  },
  {
    "id": "lp-33",
    "principle": "Add story #12 \u2192",
    "testingFor": "Choose LP(s)",
    "sampleQuestion": ""
  },
  {
    "id": "lp-34",
    "principle": "MICROSOFT CORE VALUES  \u2014  Map 2-3 stories explicitly to each",
    "testingFor": "",
    "sampleQuestion": ""
  },
  {
    "id": "lp-35",
    "principle": "Microsoft Value",
    "testingFor": "What They Look For",
    "sampleQuestion": ""
  },
  {
    "id": "lp-36",
    "principle": "Growth Mindset",
    "testingFor": "Learning from failure, openness to feedback, curiosity over ego",
    "sampleQuestion": ""
  },
  {
    "id": "lp-37",
    "principle": "Customer Obsessed",
    "testingFor": "Understanding user pain, building for users not just features",
    "sampleQuestion": ""
  },
  {
    "id": "lp-38",
    "principle": "Diverse & Inclusive",
    "testingFor": "Creating psychological safety, valuing different perspectives",
    "sampleQuestion": ""
  },
  {
    "id": "lp-39",
    "principle": "One Microsoft",
    "testingFor": "Cross-team collaboration, company success over individual/team credit",
    "sampleQuestion": ""
  },
  {
    "id": "lp-40",
    "principle": "Accountable",
    "testingFor": "Owning outcomes, including failures, without deflecting",
    "sampleQuestion": ""
  },
  {
    "id": "lp-41",
    "principle": "GOOGLE-SPECIFIC: \"GOOGLEYNESS & LEADERSHIP\"  \u2014  Different framework, NOT LP-based",
    "testingFor": "",
    "sampleQuestion": ""
  },
  {
    "id": "lp-42",
    "principle": "Signal Google Looks For",
    "testingFor": "How to Demonstrate It",
    "sampleQuestion": ""
  },
  {
    "id": "lp-43",
    "principle": "Comfort with ambiguity",
    "testingFor": "Talk about a time requirements were unclear and you drove clarity yourself rather than waiting to be told.",
    "sampleQuestion": ""
  },
  {
    "id": "lp-44",
    "principle": "Intellectual humility",
    "testingFor": "Have ONE genuine story about being wrong and changing your approach based on being shown evidence \u2014 Google explicitly probes for this.",
    "sampleQuestion": ""
  },
  {
    "id": "lp-45",
    "principle": "Collaborative, not competitive",
    "testingFor": "Frame achievements as 'we' where a team was involved, while still being clear about YOUR specific contribution.",
    "sampleQuestion": ""
  },
  {
    "id": "lp-46",
    "principle": "Doing the right thing even when hard",
    "testingFor": "A story where you flagged a quality/ethics/correctness issue even though it was easier to stay quiet.",
    "sampleQuestion": ""
  },
  {
    "id": "lp-47",
    "principle": "Structured communication",
    "testingFor": "Less about a specific story, more about how clearly you structure ANY answer \u2014 practice STAR structure even for non-behavioral questions.",
    "sampleQuestion": ""
  }
];

export const COMPANY_ROADMAPS: CompanyRoadmapItem[] = [
  {
    "id": "roadmap-0",
    "company": "Microsoft",
    "round": "\ud83c\udfe2  COMPANY-SPECIFIC PREPARATION ROADMAPS  \u2014  Microsoft | Amazon | Google",
    "whatItTests": "",
    "prepFocus": ""
  },
  {
    "id": "roadmap-1",
    "company": "Microsoft",
    "round": "Same engineer, three very different interview philosophies. Allocate your final 6-8 weeks per company differently based on this.",
    "whatItTests": "",
    "prepFocus": ""
  },
  {
    "id": "roadmap-4",
    "company": "Microsoft",
    "round": "Phone Screen (1 round)",
    "whatItTests": "1-2 DSA problems, medium difficulty, clean code + complexity discussion",
    "prepFocus": "TUF Steps 1-10 solid. Practice explaining approach before coding."
  },
  {
    "id": "roadmap-5",
    "company": "Microsoft",
    "round": "Coding Rounds (2-3 onsite)",
    "whatItTests": "Medium-hard DSA, sometimes with a light design twist",
    "prepFocus": "Full TUF + Google-focus add-ons. Practice 'design + code' combined problems."
  },
  {
    "id": "roadmap-6",
    "company": "Microsoft",
    "round": "System Design (1 round)",
    "whatItTests": "Practical, not bar-raiser-extreme. Clear component breakdown + reasonable trade-offs",
    "prepFocus": "Tier 1 + Tier 2 case studies. MS values clarity over exotic scale numbers."
  },
  {
    "id": "roadmap-7",
    "company": "Microsoft",
    "round": "'As Appropriate' (AA) round",
    "whatItTests": "Senior engineer/manager interview \u2014 technical depth + collaboration signal",
    "prepFocus": "Project Deep Dive prep + 3-4 strong stories on cross-team collaboration."
  },
  {
    "id": "roadmap-8",
    "company": "Microsoft",
    "round": "Final/HM round",
    "whatItTests": "Culture fit: Growth Mindset, Customer Obsessed, Diverse & Inclusive, One Microsoft",
    "prepFocus": "Map 2-3 stories explicitly to each MS value \u2014 practiced aloud."
  },
  {
    "id": "roadmap-11",
    "company": "Amazon",
    "round": "Online Assessment",
    "whatItTests": "2 DSA problems + a work-style/behavioral questionnaire scored against LPs",
    "prepFocus": "TUF foundations + start thinking in LP language."
  },
  {
    "id": "roadmap-12",
    "company": "Amazon",
    "round": "Phone Screen",
    "whatItTests": "1 DSA problem + heavy behavioral questions woven in throughout",
    "prepFocus": "Every coding round at Amazon ALSO tests behavioral signal."
  },
  {
    "id": "roadmap-13",
    "company": "Amazon",
    "round": "Onsite Loop (4-5 rounds)",
    "whatItTests": "Each interviewer owns 2-3 LPs and digs deep with follow-ups",
    "prepFocus": "12+ STAR stories ready, each mapped to 2-3 LPs, surviving 3 follow-ups per story."
  },
  {
    "id": "roadmap-14",
    "company": "Amazon",
    "round": "Coding rounds (within loop)",
    "whatItTests": "DSA + sometimes LLD/machine coding",
    "prepFocus": "DSA + full LLD Tracker \u2014 Amazon weighs LLD higher than MS/Google."
  },
  {
    "id": "roadmap-15",
    "company": "Amazon",
    "round": "System Design round",
    "whatItTests": "Trade-offs through an Amazon lens \u2014 cost, operational simplicity, customer impact",
    "prepFocus": "Tier 1-2 case studies + explicitly mention cost/ops trade-offs."
  },
  {
    "id": "roadmap-16",
    "company": "Amazon",
    "round": "Bar Raiser round",
    "whatItTests": "Interviewer from OUTSIDE the team, veto power, purely assessing LP fit",
    "prepFocus": "Highest-stakes round. Save your STRONGEST 3-4 stories for maximum depth here."
  },
  {
    "id": "roadmap-19",
    "company": "Google",
    "round": "Phone Screen (1-2 rounds)",
    "whatItTests": "1 hard DSA problem, multiple approaches discussed before coding the optimal one",
    "prepFocus": "Practice stating brute force \u2192 optimization reasoning OUT LOUD before touching keyboard."
  },
  {
    "id": "roadmap-20",
    "company": "Google",
    "round": "Onsite Coding (2-3 rounds)",
    "whatItTests": "Hard DSA + generalization follow-ups ('what if doesn't fit memory', 'what if stream')",
    "prepFocus": "Google-focus add-ons in DSA Tracker \u2014 practice unprompted follow-up twists."
  },
  {
    "id": "roadmap-21",
    "company": "Google",
    "round": "System Design (mainly SDE-2+)",
    "whatItTests": "Reasoning under genuine ambiguity with minimal hand-holding",
    "prepFocus": "Tier 2-3 case studies. Practice asking YOUR OWN clarifying questions."
  },
  {
    "id": "roadmap-22",
    "company": "Google",
    "round": "Googleyness & Leadership round",
    "whatItTests": "NOT LP-based \u2014 comfort with ambiguity, intellectual humility, collaboration",
    "prepFocus": "Use the Google-specific signals in Leadership Principles sheet, not Amazon LPs."
  },
  {
    "id": "roadmap-23",
    "company": "Google",
    "round": "Hiring Committee Review",
    "whatItTests": "No single interviewer decides \u2014 packet reviewed by committee post-loop",
    "prepFocus": "Consistency across ALL rounds matters more than any single great round."
  },
  {
    "id": "roadmap-24",
    "company": "Google",
    "round": "\u23f1 FINAL 6-8 WEEK TIME ALLOCATION  (if applying to all 3 in parallel)",
    "whatItTests": "",
    "prepFocus": ""
  },
  {
    "id": "roadmap-25",
    "company": "Google",
    "round": "Activity",
    "whatItTests": "% of Remaining Time",
    "prepFocus": "Reasoning"
  },
  {
    "id": "roadmap-26",
    "company": "Google",
    "round": "Core DSA (shared across all 3)",
    "whatItTests": "35%",
    "prepFocus": "DSA is necessary for all three \u2014 never wasted effort regardless of which company moves fastest."
  },
  {
    "id": "roadmap-27",
    "company": "Google",
    "round": "System Design (shared, depth for Google/MS)",
    "whatItTests": "20%",
    "prepFocus": "Google and MS go deepest here; Amazon's bar is slightly lower but still required."
  },
  {
    "id": "roadmap-28",
    "company": "Google",
    "round": "Amazon LP story depth",
    "whatItTests": "15%",
    "prepFocus": "Only needed if Amazon is actively in your pipeline."
  },
  {
    "id": "roadmap-29",
    "company": "Google",
    "round": "LLD / Machine Coding",
    "whatItTests": "12%",
    "prepFocus": "Amazon-weighted but useful everywhere \u2014 don't skip even for MS/Google."
  },
  {
    "id": "roadmap-30",
    "company": "Google",
    "round": "Java/Backend/Distributed depth",
    "whatItTests": "10%",
    "prepFocus": "Differentiator for all 3 \u2014 comes from work you already do, low marginal time cost."
  },
  {
    "id": "roadmap-31",
    "company": "Google",
    "round": "Mock interviews",
    "whatItTests": "8%",
    "prepFocus": "Cannot be skipped \u2014 the gap between knowing and performing live is the #1 failure mode."
  }
];

export const INTERVIEWER_QA_BANK: InterviewQABankItem[] = [
  {
    "id": "qa-0",
    "section": "Technical Screening",
    "question": "\u2753  INTERVIEWER Q&A BANK  \u2014  Technical + HR + General Questions  (As Asked by Product Co. Interviewers)",
    "whatEvaluating": "",
    "howToStructure": ""
  },
  {
    "id": "qa-1",
    "section": "Technical Screening",
    "question": "Compiled as a senior interviewer at Microsoft/Amazon-tier companies would actually ask across all rounds.",
    "whatEvaluating": "",
    "howToStructure": ""
  },
  {
    "id": "qa-4",
    "section": "Technical Screening",
    "question": "Walk me through your resume / a recent project you're proud of.",
    "whatEvaluating": "Communication clarity, ownership, technical depth.",
    "howToStructure": "Use a mini-STAR: context \u2192 your role \u2192 technical decisions \u2192 impact. Keep under 3 minutes."
  },
  {
    "id": "qa-5",
    "section": "Technical Screening",
    "question": "What is the difference between an ArrayList and a LinkedList in Java? When would you use each?",
    "whatEvaluating": "Java fundamentals + practical judgment.",
    "howToStructure": "Define both, give Big-O for key ops, give a real use case for each (e.g. frequent random access vs frequent insert/delete)."
  },
  {
    "id": "qa-6",
    "section": "Technical Screening",
    "question": "Explain how HashMap works internally in Java.",
    "whatEvaluating": "Depth of language knowledge, not just usage.",
    "howToStructure": "Hashing, buckets, equals()+hashCode(), collision handling (linked list \u2192 tree in Java 8+), resize/rehashing."
  },
  {
    "id": "qa-7",
    "section": "Technical Screening",
    "question": "What happens when you type a URL into a browser and press Enter?",
    "whatEvaluating": "Systems thinking, breadth of networking knowledge.",
    "howToStructure": "DNS resolution \u2192 TCP handshake \u2192 TLS \u2192 HTTP request \u2192 server processing \u2192 response \u2192 render. Walk through each layer."
  },
  {
    "id": "qa-8",
    "section": "Technical Screening",
    "question": "How would you design a rate limiter?",
    "whatEvaluating": "Light system design + tradeoff thinking.",
    "howToStructure": "Clarify requirements first (per-user? per-IP?). Discuss Token Bucket vs Sliding Window. Mention Redis for distributed case."
  },
  {
    "id": "qa-9",
    "section": "Technical Screening",
    "question": "What is the time and space complexity of your solution? Can you do better?",
    "whatEvaluating": "Core DSA evaluation \u2014 non-negotiable in every coding round.",
    "howToStructure": "State Big-O clearly. If asked to optimize, think aloud about trade-offs (time vs space) before jumping to code."
  },
  {
    "id": "qa-10",
    "section": "Technical Screening",
    "question": "Tell me about a bug that was hard to find. How did you debug it?",
    "whatEvaluating": "Debugging process, not just the fix.",
    "howToStructure": "Describe your systematic approach: reproduce \u2192 isolate \u2192 hypothesize \u2192 test \u2192 fix \u2192 prevent recurrence."
  },
  {
    "id": "qa-11",
    "section": "Technical Screening",
    "question": "How do you ensure code quality in your projects?",
    "whatEvaluating": "Engineering maturity beyond just writing code.",
    "howToStructure": "Mention: code reviews, unit tests, CI/CD, static analysis tools, documentation."
  },
  {
    "id": "qa-12",
    "section": "Technical Screening",
    "question": "Have you used any AI coding tools? How?",
    "whatEvaluating": "NEW \u2014 GenAI fluency assessment.",
    "howToStructure": "Be honest and specific: name the tool, the use case, and importantly HOW you verified the output before using it."
  },
  {
    "id": "qa-13",
    "section": "Technical Screening",
    "question": "Explain a time you had to learn a new technology quickly for a project.",
    "whatEvaluating": "Learning agility \u2014 important at fast-moving companies.",
    "howToStructure": "Specific example, your learning method, how fast, and the outcome it enabled."
  },
  {
    "id": "qa-15",
    "section": "System Design & Architecture",
    "question": "Evaluation Area",
    "whatEvaluating": "What Good Looks Like",
    "howToStructure": "What Bad Looks Like"
  },
  {
    "id": "qa-16",
    "section": "System Design & Architecture",
    "question": "Clarifying Questions",
    "whatEvaluating": "Asks about input size, edge cases, constraints before coding.",
    "howToStructure": "Jumps straight into coding without understanding the problem."
  },
  {
    "id": "qa-17",
    "section": "System Design & Architecture",
    "question": "Communication While Coding",
    "whatEvaluating": "Thinks aloud, explains approach before writing code, narrates trade-offs.",
    "howToStructure": "Codes in silence, interviewer has no idea what's happening."
  },
  {
    "id": "qa-18",
    "section": "System Design & Architecture",
    "question": "Brute Force \u2192 Optimal",
    "whatEvaluating": "States brute force first, then optimizes with reasoning.",
    "howToStructure": "Jumps to a 'memorized' solution without explaining the thought process."
  },
  {
    "id": "qa-19",
    "section": "System Design & Architecture",
    "question": "Code Quality",
    "whatEvaluating": "Clean variable names, modular functions, handles edge cases.",
    "howToStructure": "Messy code, magic numbers, ignores null/empty inputs."
  },
  {
    "id": "qa-20",
    "section": "System Design & Architecture",
    "question": "Testing Own Code",
    "whatEvaluating": "Dry-runs with a test case before saying 'done'.",
    "howToStructure": "Says 'I think this works' without verifying."
  },
  {
    "id": "qa-21",
    "section": "System Design & Architecture",
    "question": "Handling Hints",
    "whatEvaluating": "Takes hints gracefully, incorporates them quickly.",
    "howToStructure": "Gets defensive or shuts down when given a hint."
  },
  {
    "id": "qa-22",
    "section": "System Design & Architecture",
    "question": "Time Management",
    "whatEvaluating": "Solves within time, leaves room to discuss complexity.",
    "howToStructure": "Spends 35 of 45 min still understanding the problem."
  },
  {
    "id": "qa-25",
    "section": "Coding & Data Structures",
    "question": "Why do you want to leave your current company?",
    "whatEvaluating": "Are you running from problems or running toward growth?",
    "howToStructure": "Never badmouth your current employer. Frame it as seeking growth, scale, or new challenges."
  },
  {
    "id": "qa-26",
    "section": "Coding & Data Structures",
    "question": "Why Microsoft / Why Amazon?",
    "whatEvaluating": "Did you actually research us, or is this a generic answer?",
    "howToStructure": "Reference specific products, culture values (LPs/Growth Mindset), or technical challenges unique to them."
  },
  {
    "id": "qa-27",
    "section": "Coding & Data Structures",
    "question": "Where do you see yourself in 5 years?",
    "whatEvaluating": "Are your goals realistic and aligned with this role?",
    "howToStructure": "Avoid 'I want your job' or vague answers. Show growth ambition within engineering, not just management."
  },
  {
    "id": "qa-28",
    "section": "Coding & Data Structures",
    "question": "Tell me about a time you failed.",
    "whatEvaluating": "Self-awareness and ability to learn from mistakes, not perfection.",
    "howToStructure": "Don't pick a fake-failure (humble brag). Pick a real one, own it fully, show the lesson learned."
  },
  {
    "id": "qa-29",
    "section": "Coding & Data Structures",
    "question": "How do you handle stress or tight deadlines?",
    "whatEvaluating": "Resilience and realistic self-management, not superhero claims.",
    "howToStructure": "Avoid 'I just work harder.' Mention prioritization, communication with stakeholders, and saying no when needed."
  },
  {
    "id": "qa-30",
    "section": "Coding & Data Structures",
    "question": "Do you have any questions for us?",
    "whatEvaluating": "Genuine interest and engagement level.",
    "howToStructure": "ALWAYS have 2-3 questions ready. Ask about team structure, tech challenges, or growth \u2014 not just salary/perks."
  },
  {
    "id": "qa-31",
    "section": "Coding & Data Structures",
    "question": "What's your expected salary / notice period?",
    "whatEvaluating": "Logistics check \u2014 also tests your negotiation maturity.",
    "howToStructure": "Research market range beforehand. Give a range, not a fixed number. Be honest about notice period."
  },
  {
    "id": "qa-32",
    "section": "Coding & Data Structures",
    "question": "Tell me about a conflict with a manager or teammate.",
    "whatEvaluating": "Maturity and professionalism in handling friction.",
    "howToStructure": "Never trash-talk anyone. Focus on the resolution and what you learned, not who was wrong."
  },
  {
    "id": "qa-35",
    "section": "Behavioral & HR",
    "question": "If you disagree with a technical decision your senior makes, what do you do?",
    "whatEvaluating": "Tests 'Disagree and Commit' maturity.",
    "howToStructure": "State you'd raise concerns with data/reasoning once, then support the team decision once made \u2014 unless it's ethically wrong."
  },
  {
    "id": "qa-36",
    "section": "Behavioral & HR",
    "question": "How would you explain [a technical concept] to a non-technical person?",
    "whatEvaluating": "Communication skill across audiences.",
    "howToStructure": "Use analogies. Practice explaining recursion, APIs, or databases to a 10-year-old mentally beforehand."
  },
  {
    "id": "qa-37",
    "section": "Behavioral & HR",
    "question": "What's a technology you dislike or disagree with the popularity of?",
    "whatEvaluating": "Tests independent thinking, not just trend-following.",
    "howToStructure": "Pick something defensible, explain your reasoning calmly, acknowledge valid counterarguments."
  },
  {
    "id": "qa-38",
    "section": "Behavioral & HR",
    "question": "How do you stay updated with technology?",
    "whatEvaluating": "Genuine curiosity vs box-ticking.",
    "howToStructure": "Mention specific newsletters, communities, or projects \u2014 not just 'I read articles sometimes.'"
  },
  {
    "id": "qa-39",
    "section": "Behavioral & HR",
    "question": "Estimate how many lines of code are in [some large system].",
    "whatEvaluating": "Tests structured estimation thinking (Fermi estimation), not the actual number.",
    "howToStructure": "Break down into components, state assumptions out loud, arrive at an order-of-magnitude answer."
  }
];

export const RESUME_AUDITS: ResumeAuditItem[] = [
  {
    "id": "resume-0",
    "asIs": "\ud83d\udcc4  RESUME IMPACT TRACKER  \u2014  Quantify Every Bullet, ATS-Optimize for SDE-2",
    "owned": "",
    "quantifiedImpact": "",
    "improvedBullet": "",
    "atsKeywords": ""
  },
  {
    "id": "resume-1",
    "asIs": "SDE-2 resumes need OWNERSHIP and SCALE language, not task lists. Every bullet should answer: what did you own, and what changed because of it?",
    "owned": "",
    "quantifiedImpact": "",
    "improvedBullet": "",
    "atsKeywords": ""
  },
  {
    "id": "resume-2",
    "asIs": "BULLET-BY-BULLET IMPACT AUDIT  (rewrite each resume bullet through this lens)",
    "owned": "",
    "quantifiedImpact": "",
    "improvedBullet": "",
    "atsKeywords": ""
  },
  {
    "id": "resume-4",
    "asIs": "Worked on integration flows using MuleSoft for client projects.",
    "owned": "Owned 5 integration flows end-to-end: design, build, testing, production support.",
    "quantifiedImpact": "83% latency reduction (3000ms\u2192500ms), 0 data loss, 50K transactions/day",
    "improvedBullet": "Architected and led migration of 5 mission-critical MuleSoft integration flows to Spring Boot microservices, reducing latency 83% (3000ms\u2192500ms) and processing 50K+ transactions/day with zero data loss \u2014 now the team's migration template.",
    "atsKeywords": "Architected, Migration, Spring Boot, Microservices, Latency"
  },
  {
    "id": "resume-19",
    "asIs": "ATS KEYWORD BANK  \u2014  Mirror these from target job descriptions",
    "owned": "",
    "quantifiedImpact": "",
    "improvedBullet": "",
    "atsKeywords": ""
  },
  {
    "id": "resume-21",
    "asIs": "Languages/Frameworks",
    "owned": "Java, Spring Boot, Spring Framework, Microservices, RESTful APIs, MuleSoft, Hibernate/JPA",
    "quantifiedImpact": "",
    "improvedBullet": "",
    "atsKeywords": ""
  },
  {
    "id": "resume-22",
    "asIs": "Distributed Systems",
    "owned": "Kafka, Event-Driven Architecture, Distributed Systems, Message Queues, Microservices Architecture",
    "quantifiedImpact": "",
    "improvedBullet": "",
    "atsKeywords": ""
  },
  {
    "id": "resume-23",
    "asIs": "Databases",
    "owned": "SQL, MySQL/PostgreSQL, NoSQL, Database Design, Query Optimization, Indexing",
    "quantifiedImpact": "",
    "improvedBullet": "",
    "atsKeywords": ""
  },
  {
    "id": "resume-24",
    "asIs": "Cloud/DevOps",
    "owned": "AWS or Azure, Docker, Kubernetes, CI/CD, Cloud-Native",
    "quantifiedImpact": "",
    "improvedBullet": "",
    "atsKeywords": ""
  },
  {
    "id": "resume-25",
    "asIs": "Scale/Impact Verbs",
    "owned": "Architected, Designed, Optimized, Scaled, Led, Migrated, Reduced, Improved, Built, Owned",
    "quantifiedImpact": "",
    "improvedBullet": "",
    "atsKeywords": ""
  },
  {
    "id": "resume-26",
    "asIs": "System Design",
    "owned": "Scalability, High Availability, Low Latency, Distributed Systems, Caching, Load Balancing",
    "quantifiedImpact": "",
    "improvedBullet": "",
    "atsKeywords": ""
  },
  {
    "id": "resume-27",
    "asIs": "\ud83d\udd0d  KEYWORD DENSITY CHECK  \u2014  Does Your v2 Bullet Bank Cover the Keyword Categories Above?",
    "owned": "",
    "quantifiedImpact": "",
    "improvedBullet": "",
    "atsKeywords": ""
  },
  {
    "id": "resume-28",
    "asIs": "Keyword Category",
    "owned": "Keywords to Check For",
    "quantifiedImpact": "Found in Your v2 Bullets?\n(manual check)",
    "improvedBullet": "Status",
    "atsKeywords": ""
  },
  {
    "id": "resume-29",
    "asIs": "Languages/Frameworks",
    "owned": "Java, Spring Boot, Microservices, REST APIs",
    "quantifiedImpact": "No",
    "improvedBullet": "\ud83d\udd34 Missing",
    "atsKeywords": ""
  },
  {
    "id": "resume-30",
    "asIs": "Distributed Systems",
    "owned": "Kafka, Event-Driven, Message Queues",
    "quantifiedImpact": "No",
    "improvedBullet": "\ud83d\udd34 Missing",
    "atsKeywords": ""
  },
  {
    "id": "resume-31",
    "asIs": "Databases",
    "owned": "SQL, Database Design, Query Optimization",
    "quantifiedImpact": "No",
    "improvedBullet": "\ud83d\udd34 Missing",
    "atsKeywords": ""
  },
  {
    "id": "resume-32",
    "asIs": "Cloud/DevOps",
    "owned": "AWS/Azure, Docker, Kubernetes, CI/CD",
    "quantifiedImpact": "No",
    "improvedBullet": "\ud83d\udd34 Missing",
    "atsKeywords": ""
  },
  {
    "id": "resume-33",
    "asIs": "Scale/Impact Verbs",
    "owned": "Architected, Optimized, Scaled, Led, Migrated",
    "quantifiedImpact": "No",
    "improvedBullet": "\ud83d\udd34 Missing",
    "atsKeywords": ""
  },
  {
    "id": "resume-34",
    "asIs": "System Design",
    "owned": "Scalability, High Availability, Low Latency",
    "quantifiedImpact": "No",
    "improvedBullet": "\ud83d\udd34 Missing",
    "atsKeywords": ""
  },
  {
    "id": "resume-35",
    "asIs": "\ud83d\udcca Overall Keyword Density Score:",
    "owned": "",
    "quantifiedImpact": "0%",
    "improvedBullet": "",
    "atsKeywords": ""
  }
];
