import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TechItem {
  name: string;
  category: string;
  logo: string;
  color: string;
  highlight?: boolean;
}

const techItems: TechItem[] = [
  { name: "Salesforce Certified", category: "Credential", logo: "/skillsLogos/salesforce-mulesoft-certified.svg", color: "#00E5FF", highlight: true },
  { name: "MuleSoft 4.9", category: "Integration", logo: "/skillsLogos/mulesoft.svg", color: "#00A1DF", highlight: true },
  { name: "Salesforce Cloud", category: "Platform", logo: "/skillsLogos/salesforce.svg", color: "#00A1E0", highlight: true },
  { name: "Java 21", category: "Backend Core", logo: "/skillsLogos/java.png", color: "#f89820" },
  { name: "Spring Boot", category: "Microservices", logo: "/skillsLogos/springboot.svg", color: "#6db33f" },
  { name: "DataWeave 2.0", category: "Transformation", logo: "/skillsLogos/dataweave.svg", color: "#38bdf8", highlight: true },
  { name: "RAML 1.0", category: "API Design", logo: "/skillsLogos/raml.svg", color: "#00bcd4" },
  { name: "PostgreSQL", category: "Database", logo: "/skillsLogos/postGreSQL.png", color: "#336791" },
  { name: "Redis", category: "Distributed Cache", logo: "/skillsLogos/redis.svg", color: "#dc382d" },
  { name: "Docker", category: "DevOps", logo: "/skillsLogos/docker.png", color: "#2496ed" },
];

export default function TechOrbit3D() {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeItem, setActiveItem] = useState<TechItem | null>(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.35) % 360);
    }, 25);
    return () => clearInterval(interval);
  }, [isPaused]);

  const radius = 240; // 3D cylinder radius in px

  return (
    <div className="w-full py-12 flex flex-col items-center justify-center relative overflow-hidden select-none">
      {/* 3D Perspective Viewport */}
      <div 
        style={{ perspective: 1000 }}
        className="w-full h-80 flex items-center justify-center relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setActiveItem(null);
        }}
      >
        {/* 3D Revolving Stage */}
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(-8deg) rotateY(${rotation}deg)`,
            transition: isPaused ? "transform 0.1s ease-out" : "none",
          }}
          className="relative w-28 h-28 flex items-center justify-center"
        >
          {techItems.map((item, index) => {
            const angle = (index * 360) / techItems.length;
            const rad = (angle * Math.PI) / 180;
            const x = Math.sin(rad) * radius;
            const z = Math.cos(rad) * radius;

            return (
              <div
                key={item.name}
                style={{
                  position: "absolute",
                  transformStyle: "preserve-3d",
                  transform: `translate3d(${x}px, 0px, ${z}px) rotateY(${-rotation - angle}deg)`,
                }}
                className="w-32 cursor-pointer group"
                onClick={() => setActiveItem(item)}
              >
                <div
                  className={`p-3 rounded-2xl backdrop-blur-xl border transition-all duration-300 text-center flex flex-col items-center shadow-xl ${
                    item.highlight
                      ? "dark:bg-cyan-950/70 bg-cyan-50/90 border-cyan-400/60 shadow-cyan-500/20 hover:scale-110 ring-2 ring-cyan-400/30"
                      : "dark:bg-neutral-900/80 bg-white/90 dark:border-neutral-800 border-slate-200 hover:scale-105"
                  }`}
                >
                  <div className="w-10 h-10 relative mb-1.5 flex items-center justify-center">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={36}
                      height={36}
                      className="object-contain drop-shadow"
                    />
                  </div>
                  <span className="text-[11px] font-bold dark:text-white text-slate-900 font-outfit truncate max-w-full">
                    {item.name}
                  </span>
                  <span
                    className="text-[9px] font-mono tracking-wider uppercase mt-0.5"
                    style={{ color: item.color }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Helper hint */}
      <p className="text-[11px] font-mono dark:text-neutral-500 text-slate-400 mt-2 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>Hover over items to pause 3D orbit · Click to inspect technology</span>
      </p>
    </div>
  );
}