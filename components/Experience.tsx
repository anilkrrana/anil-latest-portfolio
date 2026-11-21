import React from "react";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const experiences = [
    {
      clogo: "/companyLogo/capgLogo.png",
      title: "Senior Software Engineer — MuleSoft & Java (Salesforce Certified)",
      company: "Capgemini",
      period: "Sep 2024 – Present (Promoted Mar 2025)",
      isCurrent: true,
      points: [
        "Play a key role in the ESB Conversion Program for Liberty Latin America (LLA), delivering strategic API conversions and cloud transformation initiatives critical to customer resiliency.",
        "Lead the MuleSoft 4.9 modernization program: migrated mission-critical APIs to MuleSoft 4.9 & CloudHub with code remediation, validation testing, and zero-downtime deployments.",
        "Engineered the FMC Legacy Modernization initiative, analyzing intricate dependency chains and successfully migrating 7 legacy endpoints to MuleSoft 4.9 while maintaining 100% business continuity.",
        "Deliver enterprise payment management & channel integrations across Cerillion, Liberate, Amdocs, Emida, Skymond, USSD, and Kiosk with robust validation rules and seamless transaction processing.",
        "Spearhead key components of the LC market's 4.x and 3.9 endpoint migrations with accurate, on-time delivery and proactive workflow improvements.",
        "Provide critical production support, root-cause analysis (RCA), and incident resolution; actively lead knowledge transfer (KT) sessions and mentor junior integration engineers."
      ],
      skills: [
        "Salesforce Certified MuleSoft Dev",
        "MuleSoft 4.9 & CloudHub",
        "ESB Conversion (LLA)",
        "FMC Modernization (7 APIs)",
        "Payment APIs (Cerillion, Amdocs)",
        "Java 21",
        "Spring Boot",
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
    <section id="experience" className="py-24 relative bg-command-grid bg-radial-gradient">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="cmdBadge mb-3">PROFESSIONAL TIMELINE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 font-outfit tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm dark:text-neutral-300 text-slate-600 mt-2 max-w-xl font-normal">
            2+ years of professional software engineering experience delivering enterprise API integrations and Spring Boot backend systems.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3" />
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