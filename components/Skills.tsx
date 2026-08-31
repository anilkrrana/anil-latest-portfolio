import React, { useState } from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { CpuChipIcon, ServerIcon, CommandLineIcon, CloudIcon, CodeBracketIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>("backend");

  const skillCategories = [
    {
      id: "backend",
      title: "Backend & Core",
      icon: ServerIcon,
      skills: [
        { name: "Java 21", imgsrc: "/skillsLogos/java.png" },
        { name: "Spring Boot", imgsrc: "/skillsLogos/springboot.svg" },
        { name: "REST APIs", imgsrc: "/skillsLogos/api-design.svg" },
        { name: "Spring Security", imgsrc: "/skillsLogos/springsecurity.svg" },
        { name: "JPA / Hibernate", imgsrc: "/skillsLogos/hibernate.svg" },
        { name: "MuleSoft", imgsrc: "/skillsLogos/mulesoft.svg" },
        { name: "DataWeave 2.0", imgsrc: "/skillsLogos/dataweave.svg" },
        { name: "RAML", imgsrc: "/skillsLogos/raml.svg" },
      ]
    },
    {
      id: "database",
      title: "Databases & Caching",
      icon: CpuChipIcon,
      skills: [
        { name: "PostgreSQL", imgsrc: "/skillsLogos/postGreSQL.png" },
        { name: "Redis", imgsrc: "/skillsLogos/redis.svg" },
        { name: "AWS RDS", imgsrc: "/skillsLogos/aws-rds.svg" },
        { name: "MySQL", imgsrc: "/skillsLogos/mysql.svg" },
        { name: "MongoDB", imgsrc: "/skillsLogos/mongodb.png" },
      ]
    },
    {
      id: "architecture",
      title: "System Architecture",
      icon: CommandLineIcon,
      skills: [
        { name: "Microservices", imgsrc: "/skillsLogos/microservices.svg" },
        { name: "API Design", imgsrc: "/skillsLogos/api-design.svg" },
        { name: "Concurrency Locking", imgsrc: "/skillsLogos/concurrency.svg" },
        { name: "Cache-Aside Pattern", imgsrc: "/skillsLogos/cache-aside.svg" },
        { name: "Idempotency", imgsrc: "/skillsLogos/idempotency.svg" },
        { name: "Flyway Migrations", imgsrc: "/skillsLogos/flyway.svg" },
      ]
    },
    {
      id: "devops",
      title: "DevOps & Tools",
      icon: CloudIcon,
      skills: [
        { name: "Docker", imgsrc: "/skillsLogos/docker.png" },
        { name: "GitHub Actions", imgsrc: "/skillsLogos/github.png" },
        { name: "Git", imgsrc: "/skillsLogos/git.png" },
        { name: "Postman", imgsrc: "/skillsLogos/postman.png" },
      ]
    },
    {
      id: "frontend",
      title: "Frontend Background",
      icon: CodeBracketIcon,
      skills: [
        { name: "React.js", imgsrc: "/skillsLogos/react.png" },
        { name: "Next.js", imgsrc: "/skillsLogos/next-js.png" },
        { name: "TypeScript", imgsrc: "/skillsLogos/typescript.png" },
        { name: "JavaScript", imgsrc: "/skillsLogos/js.png" },
        { name: "Tailwind CSS", imgsrc: "/skillsLogos/tailwind.png" },
      ]
    },
    {
      id: "ai",
      title: "AI & Emerging Tech",
      icon: SparklesIcon,
      skills: [
        { name: "GenAI", imgsrc: "/skillsLogos/genai.svg" },
        { name: "Claude AI", imgsrc: "/skillsLogos/claude.svg" },
        { name: "Spring AI", imgsrc: "/skillsLogos/spring.svg" },
        { name: "RAG Concepts", imgsrc: "/skillsLogos/rag.svg" },
        { name: "LLM Integration", imgsrc: "/skillsLogos/llm.svg" },
      ]
    }
  ];

  const handleCategoryClick = (catId: string | null) => {
    setActiveCategory(catId);
    if (catId) {
      const element = document.getElementById(`skills-${catId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-command-grid bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="cmdBadge mb-3">TECHNICAL PROFICIENCY</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 font-outfit tracking-tight">
            Skills &amp; Technology Constellation
          </h2>
          <p className="text-sm dark:text-neutral-400 text-slate-600 mt-2 max-w-xl">
            Click any category below to smoothly navigate to the corresponding skill cluster.
          </p>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* Category Filter Pills (Smooth Navigation Targets) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 sticky top-20 z-20 py-2 backdrop-blur-md dark:bg-black/40 bg-white/40 rounded-2xl p-2">
          <button
            onClick={() => handleCategoryClick(null)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeCategory === null
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                : "dark:bg-neutral-900/80 bg-white dark:text-neutral-400 text-slate-600 border dark:border-neutral-800 border-slate-200 hover:text-blue-500"
            }`}
          >
            Show All Technologies
          </button>

          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-blue-600 text-white border border-blue-400/50 shadow-lg shadow-blue-500/25 scale-105"
                    : "dark:bg-neutral-900/80 bg-white dark:text-neutral-300 text-slate-700 border dark:border-neutral-800 border-slate-200 hover:border-blue-400 hover:text-blue-500"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isCatActive = activeCategory === null || activeCategory === cat.id;

            return (
              <div
                id={`skills-${cat.id}`}
                key={cat.id}
                className={`cmdCard p-6 border-neutral-800 transition-all duration-300 ${
                  isCatActive ? "opacity-100 border-blue-500/40 ring-1 ring-blue-500/20" : "opacity-50"
                }`}
              >
                <div className="flex items-center gap-3 pb-4 mb-4 border-b dark:border-neutral-800 border-slate-200">
                  <div className="w-8 h-8 rounded-lg dark:bg-blue-900/60 bg-blue-100 border dark:border-blue-800/60 border-blue-200 flex items-center justify-center text-blue-500">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold dark:text-white text-slate-900 font-outfit">
                    {cat.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {cat.skills.map((skill, idx) => (
                    <Skill
                      key={idx}
                      name={skill.name}
                      imgsrc={skill.imgsrc}
                      isHighlighted={isCatActive && activeCategory === cat.id}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}