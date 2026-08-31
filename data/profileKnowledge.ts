export interface ProfileKnowledge {
  identity: {
    name: string;
    role: string;
    company: string;
    experience: string;
    location: string;
    bio: string;
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
    youtube: string;
    resume: string;
  };
  professionalSummary: string;
  experience: Array<{
    company: string;
    role: string;
    period: string;
    highlights: string[];
    techStack: string[];
  }>;
  orderflow: {
    title: string;
    subtitle: string;
    repo: string;
    description: string;
    keyFeatures: string[];
    techStack: string[];
    engineeringProblems: string[];
  };
  projects: Array<{
    title: string;
    category: string;
    description: string;
    github: string;
    demo: string;
    tech: string[];
  }>;
  teaching: {
    studentCount: string;
    topics: string[];
    description: string;
    youtubeHandle: string;
    contactEmail: string;
  };
  careerGoals: {
    primaryFocus: string;
    targetRole: string;
    currentLearning: string[];
    philosophy: string;
  };
  engineeringMindset: {
    pillars: string[];
    motivation: string;
  };
  recruiterSummary: string;
  faqs: Array<{
    keywords: string[];
    question: string;
    answer: string;
  }>;
}

export const profileKnowledge: ProfileKnowledge = {
  identity: {
    name: "Anil Kumar Rana",
    role: "Senior Software Engineer",
    company: "Capgemini",
    experience: "2+ years of professional software engineering experience",
    location: "India",
    bio: "Senior Software Engineer at Capgemini specializing in Java backend development, Spring Boot microservices, enterprise MuleSoft integrations, PostgreSQL, Redis caching, and robust API design."
  },
  contact: {
    email: "er.anilkrana@gmail.com",
    github: "https://github.com/anilkrrana",
    linkedin: "https://www.linkedin.com/in/anil-kumar-rana-124b1721b/",
    youtube: "https://www.youtube.com/@webtechnil",
    resume: "https://drive.google.com/file/d/1z94SpgAE9w-950xogS74NxzpgCRpod7N/view?usp=sharing"
  },
  professionalSummary: "Anil Kumar Rana is a Senior Software Engineer at Capgemini (promoted Mar 2025) with over 2 years of professional software engineering experience. His primary technical direction is Java backend engineering, Spring Boot microservices, REST APIs, enterprise MuleSoft API integrations, PostgreSQL database engineering, Redis caching, and production-oriented system design.",
  experience: [
    {
      company: "Capgemini",
      role: "Senior Software Engineer — MuleSoft & Java",
      period: "Sep 2024 – Present (Promoted Mar 2025)",
      highlights: [
        "Architected and delivered high-throughput Spring Boot microservices, improving backend performance by 40% across enterprise integration systems.",
        "Led API-led connectivity initiatives using MuleSoft 4.9, DataWeave 2.0, and layered Experience/Process/System API architecture.",
        "Reduced integration failures by 35% through systematic error handling, retry logic, and robust MuleSoft pipeline design.",
        "Governed API security via Mule Gateway policies and integrated ActiveMQ messaging queues and LDAP directory services.",
        "Mentored junior engineers, conducted knowledge-transfer sessions, and drove enterprise integration standards."
      ],
      techStack: ["Java 21", "Spring Boot", "MuleSoft 4.9", "DataWeave 2.0", "RAML", "ActiveMQ", "PostgreSQL", "Jenkins CI/CD"]
    },
    {
      company: "SimpleByte",
      role: "Frontend Developer Intern",
      period: "Mar 2024 – May 2024",
      highlights: [
        "Built responsive web application components using React.js and Tailwind CSS.",
        "Improved component render performance by 30% through optimized state handlers and memoization.",
        "Collaborated on cross-browser user experience and REST API endpoint integration."
      ],
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs"]
    }
  ],
  orderflow: {
    title: "OrderFlow (E-Commerce Backend Engine)",
    subtitle: "Production-Oriented Spring Boot Backend Engine",
    repo: "https://github.com/anilkrrana/orderflow",
    description: "OrderFlow is Anil's flagship backend project. It is a high-performance Java 21 & Spring Boot 3.x e-commerce backend engine engineered for high-concurrency order placement and secure payment processing.",
    keyFeatures: [
      "JWT Authentication with Refresh Token Rotation",
      "PostgreSQL Pessimistic Row-Level DB Locking for Concurrency & Inventory Control",
      "Server-side Price & Stock Validation",
      "Redis Cache-Aside Strategy with Eviction TTL",
      "Razorpay HMAC-SHA256 Payment Webhook Verification",
      "Flyway Database Schema Migrations & Testcontainers Integration Tests"
    ],
    techStack: ["Java 21", "Spring Boot 3.x", "PostgreSQL", "Redis", "Spring Security", "JWT", "Razorpay", "Docker", "Flyway", "Testcontainers", "JUnit 5", "Mockito"],
    engineeringProblems: [
      "Preventing double-allocation / race conditions during high-concurrency checkout via pessimistic DB locking.",
      "Securing payment state against webhooks tampering using HMAC-SHA256 cryptographic verification.",
      "Optimizing database load using Redis cache-aside strategies for hot product data."
    ]
  },
  projects: [
    {
      title: "OrderFlow (Flagship Backend)",
      category: "Backend Engineering",
      description: "High-concurrency Java 21 & Spring Boot 3.x e-commerce backend engine with Redis cache-aside, PostgreSQL row locking, and Razorpay webhook validation.",
      github: "https://github.com/anilkrrana/orderflow",
      demo: "",
      tech: ["Java 21", "Spring Boot", "PostgreSQL", "Redis", "Docker", "Flyway"]
    },
    {
      title: "ShoppingAdda",
      category: "Full-Stack Web App",
      description: "Full-stack e-commerce store with Google OAuth authentication, interactive cart management, state persistence, and checkout flows.",
      github: "https://github.com/anilkrrana/ShoppingAdda",
      demo: "https://shopping-adda-hazel.vercel.app/",
      tech: ["React.js", "Tailwind CSS", "Firebase Auth", "REST APIs"]
    },
    {
      title: "YouTube Clone",
      category: "Frontend Web App",
      description: "Video streaming web app demonstrating component architecture, REST API integration, live search debouncing, and dynamic category filtering.",
      github: "https://github.com/anilkrrana/youtube_clone",
      demo: "https://youtube-clone-anilkrrana.vercel.app/",
      tech: ["React.js", "Tailwind CSS", "REST APIs"]
    },
    {
      title: "Animate-On-Scroll Web Product",
      category: "Frontend Experience",
      description: "Interactive product landing showcase focusing on Framer Motion viewport triggers, responsive flexbox/grid layouts, and smooth typography.",
      github: "https://github.com/anilkrrana/Landing_page_animate_on_scroll",
      demo: "https://landing-page-animate-on-scroll.vercel.app/",
      tech: ["React.js", "Framer Motion", "Tailwind CSS"]
    },
    {
      title: "Interactive Quiz Web App",
      category: "Frontend App",
      description: "Real-time quiz engine using Web APIs, dynamic DOM state management, score tracking, and async trivia endpoint fetching.",
      github: "https://github.com/anilkrrana/SIMBT_04_Quiz-app",
      demo: "https://simbt-04-quiz-app.vercel.app/",
      tech: ["JavaScript", "HTML5", "CSS3", "Fetch API"]
    },
    {
      title: "TravelEase Booking Interface",
      category: "Frontend App",
      description: "Modular travel destination platform designed for exploring tour packages and dynamic location filtering.",
      github: "https://github.com/anilkrrana/React-Tour-Travel-Website",
      demo: "https://codesandbox.io/s/github/anilkrrana/React-Tour-Travel-Website",
      tech: ["React.js", "JavaScript", "CSS Modules"]
    },
    {
      title: "Todos List Task Manager",
      category: "Frontend Utility",
      description: "Lightweight task management web application with LocalStorage persistence and filter controls.",
      github: "https://github.com/anilkrrana/SIMBT_02-Todos-List",
      demo: "https://simbt-02-todos-list.vercel.app/",
      tech: ["React.js", "Tailwind CSS", "LocalStorage API"]
    }
  ],
  teaching: {
    studentCount: "10+ active online students",
    topics: ["Java Fundamentals", "Object-Oriented Programming (OOP)", "Spring Boot", "Backend Engineering", "REST API Design", "Git & GitHub", "IT Career Guidance"],
    description: "Anil actively mentors online learners in software engineering fundamentals, helping beginners and career switchers build strong coding foundations and transition into IT software development.",
    youtubeHandle: "@webtechnil",
    contactEmail: "er.anilkrana@gmail.com"
  },
  careerGoals: {
    primaryFocus: "Java Backend Architecture, Spring Boot Microservices, Distributed Systems, and System Design.",
    targetRole: "Senior Software Engineer / Backend Engineer / Systems Architect.",
    currentLearning: ["Generative AI & Claude AI", "Spring AI & Vector Databases", "Advanced System Design & Distributed Systems", "High-Throughput Concurrency Patterns"],
    philosophy: "Building reliable, secure, and production-grade backend systems through continuous learning, clean architecture, and technical depth."
  },
  engineeringMindset: {
    pillars: [
      "Correctness & Data Integrity: Pessimistic locking for inventory race conditions.",
      "Security First: JWT token rotation and HMAC-SHA256 webhook signatures.",
      "Performance & Caching: Redis Cache-Aside strategies to minimize DB latency.",
      "Robust Testing: Automated integration tests using Testcontainers and Flyway migrations."
    ],
    motivation: "Anil is driven by engineering curiosity, building production-ready scalable systems, deepening his backend architecture expertise, and giving back by teaching developers."
  },
  recruiterSummary: `📌 RECRUITER SUMMARY — ANIL KUMAR RANA

👤 WHO I AM: Senior Software Engineer at Capgemini (promoted Mar 2025) with 2+ years of professional software engineering experience.
⚡ CORE TECHNICAL FOCUS: Java 21, Spring Boot, REST APIs, PostgreSQL, Redis, Docker, MuleSoft 4.9 enterprise API integration.
🏆 FLAGSHIP PROJECT: OrderFlow — high-concurrency Spring Boot backend engine with pessimistic locking, Redis cache-aside, and Razorpay HMAC security.
💡 ENGINEERING STRENGTHS: Backend correctness, concurrency control, API security, automated testing, and performance optimization.
🎓 MENTORSHIP: Mentors 10+ online students in Java & Spring Boot fundamentals (YouTube: @webtechnil).
📬 CONTACT: er.anilkrana@gmail.com | GitHub: github.com/anilkrrana`,
  faqs: [
    {
      keywords: ["who", "about", "bio", "background", "summary", "anil"],
      question: "Who is Anil Kumar Rana?",
      answer: "Anil Kumar Rana is a Senior Software Engineer at Capgemini (promoted Mar 2025) with over 2 years of professional software engineering experience. He specializes in Java backend development, Spring Boot microservices, enterprise MuleSoft integrations, PostgreSQL, and Redis caching."
    },
    {
      keywords: ["role", "current", "job", "company", "capgemini", "position", "experience"],
      question: "What is Anil's current role and experience?",
      answer: "Anil is a Senior Software Engineer at Capgemini. He has 2+ years of professional experience building high-throughput Spring Boot microservices, leading API-led connectivity with MuleSoft 4.9 & DataWeave 2.0, and optimizing enterprise backend integrations."
    },
    {
      keywords: ["orderflow", "flagship", "backend project", "best project", "strongest project"],
      question: "Tell me about OrderFlow (Anil's flagship project).",
      answer: "OrderFlow is Anil's flagship backend project (built with Java 21 & Spring Boot 3.x). It features PostgreSQL pessimistic row locking for concurrency control, Redis cache-aside invalidation, JWT authentication with refresh token rotation, and Razorpay HMAC-SHA256 webhook verification. Repository: https://github.com/anilkrrana/orderflow"
    },
    {
      keywords: ["skills", "tech", "stack", "technologies", "java", "spring", "rds", "aws"],
      question: "What are Anil's strongest technical skills?",
      answer: "Anil's core technical focus is Java 21, Spring Boot, REST APIs, PostgreSQL, Redis, AWS RDS, Docker, MuleSoft, DataWeave 2.0, Spring Security, and System Design."
    },
    {
      keywords: ["projects", "built", "portfolio", "shoppingadda", "youtube", "quiz"],
      question: "What projects has Anil built?",
      answer: "In addition to OrderFlow (Spring Boot backend), Anil has built ShoppingAdda (Full-stack e-commerce with OAuth), YouTube Clone (React API app), Animate-On-Scroll (Framer Motion landing), Interactive Quiz App (JS Web APIs), TravelEase (React tour app), and Todos List (LocalStorage app)."
    },
    {
      keywords: ["teach", "mentoring", "student", "classes", "learn", "course", "youtube", "webtechnil"],
      question: "Does Anil teach or mentor developers?",
      answer: "Yes! Anil actively teaches 10+ online students covering Java fundamentals, OOP, Spring Boot, REST APIs, Git, and IT career guidance. You can check out his content on YouTube (@webtechnil) or contact him at er.anilkrana@gmail.com."
    },
    {
      keywords: ["goals", "career", "future", "targeting", "looking"],
      question: "What are Anil's career goals?",
      answer: "Anil is targeting Senior Backend Engineering and Systems Architect roles focusing on Java, Spring Boot microservices, distributed systems, high-concurrency architecture, and emerging AI integrations (Spring AI)."
    },
    {
      keywords: ["learning", "exploring", "currently", "genai", "claude"],
      question: "What is Anil currently learning?",
      answer: "Anil is currently expanding his expertise into Generative AI, Claude AI, Spring AI, Vector Databases, Retrieval-Augmented Generation (RAG) concepts, and advanced distributed system design."
    },
    {
      keywords: ["contact", "email", "reach", "hire", "linkedin", "github", "resume"],
      question: "How can I contact Anil or view his resume?",
      answer: "You can email Anil directly at er.anilkrana@gmail.com, view his GitHub at https://github.com/anilkrrana, visit his YouTube channel @webtechnil, or access his resume at https://drive.google.com/file/d/1z94SpgAE9w-950xogS74NxzpgCRpod7N/view?usp=sharing."
    },
    {
      keywords: ["recruiter", "summary", "overview", "hiring", "short"],
      question: "Can I get a quick Recruiter Summary?",
      answer: `📌 RECRUITER SUMMARY — ANIL KUMAR RANA\n\n👤 WHO I AM: Senior Software Engineer at Capgemini (2+ years exp).\n⚡ TECH STACK: Java 21, Spring Boot, REST APIs, PostgreSQL, Redis, Docker, MuleSoft 4.9.\n🏆 FLAGSHIP PROJECT: OrderFlow (Java 21/Spring Boot 3.x backend engine).\n💡 STRENGTHS: Concurrency locking, cache-aside, API security, automated testing.\n🎓 MENTORSHIP: Teaches 10+ students Java/Spring Boot (@webtechnil).\n📬 CONTACT: er.anilkrana@gmail.com | github.com/anilkrrana`
    }
  ]
};
