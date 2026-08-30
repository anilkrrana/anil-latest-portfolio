import React from "react";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const experiences = [
    {
      clogo: "/companyLogo/capgLogo.png",
      title: "Senior Software Engineer — MuleSoft & Java",
      company: "Capgemini",
      period: "Sep 2024 – Present (Promoted Mar 2025)",
      isCurrent: true,
      points: [
        "Architect and deliver high-throughput Spring Boot microservices, improving backend performance by 40% across enterprise integration systems.",
        "Lead API-led connectivity initiatives using MuleSoft 4.9, DataWeave 2.0, and layered Experience/Process/System API architecture.",
        "Reduced integration failures by 35% through systematic error handling, retry logic, and robust MuleSoft pipeline design.",
        "Govern API security via Mule Gateway policies; integrate ActiveMQ messaging queues and LDAP directory services.",
        "Mentor junior engineers, conduct knowledge-transfer sessions, and drive enterprise integration standards.",
        "Champion CI/CD improvements using Jenkins and Bitbucket, cutting deployment cycle time by 25%."
      ],
      skills: [
        "Java 21",
        "Spring Boot",
        "MuleSoft 4.9",
        "DataWeave 2.0",
        "RAML",
        "ActiveMQ",
        "PostgreSQL",
        "Jenkins CI/CD"
      ]
    },
    {
      clogo: "/companyLogo/simplbyte-logo.png",
      title: "Frontend Developer Intern",
      company: "SimpleByte",
      period: "Mar 2024 – May 2024",
      isCurrent: false,
      points: [
        "Built responsive web application components using React.js and Tailwind CSS.",
        "Improved component render performance by 30% through optimized state handlers and memoization.",
        "Collaborated on cross-browser user experience and REST API endpoint integration."
      ],
      skills: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "REST APIs"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-command-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="cmdBadge mb-3">PROFESSIONAL TIMELINE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 font-outfit tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm dark:text-neutral-400 text-slate-600 mt-2 max-w-xl">
            2+ years of professional software engineering experience delivering enterprise API integrations and Spring Boot backend systems.
          </p>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
