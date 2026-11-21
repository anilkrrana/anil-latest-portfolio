import React, { useState, useRef, ReactNode } from "react";

interface HolographicTiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: number;
}

export default function HolographicTiltCard({
  children,
  className = "",
  glowColor = "rgba(0, 229, 255, 0.4)",
  intensity = 10,
}: HolographicTiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = Math.round((x / rect.width) * 100);
    const yPercent = Math.round((y / rect.height) * 100);

    const rotateY = (((x / rect.width) - 0.5) * intensity * 2).toFixed(2);
    const rotateX = (((y / rect.height) - 0.5) * -intensity * 2).toFixed(2);

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    setGlare({ x: xPercent, y: yPercent, opacity: 0.65 });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="w-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform,
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease-out",
        }}
        className={`relative ${className}`}
      >
        {children}

        {/* Dynamic Holographic Glare Sheen */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden mix-blend-overlay transition-opacity duration-300"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle 320px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.75), transparent 70%)`,
          }}
        />

        {/* 3D Cyber Shimmer Border */}
        {glare.opacity > 0 && (
          <div
            className="absolute -inset-[1.5px] rounded-2xl pointer-events-none -z-10 blur-[1px] opacity-80"
            style={{
              background: `linear-gradient(135deg, ${glowColor}, transparent 50%, rgba(0, 161, 224, 0.5))`,
            }}
          />
        )}
      </div>
    </div>
  );
}