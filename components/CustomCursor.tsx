import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("interactive"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`pointer-events-none fixed z-50 rounded-full transition-transform duration-100 ease-out hidden md:block ${
        isHovered
          ? "w-8 h-8 bg-blue-500/20 border border-blue-400/60 scale-125"
          : "w-3 h-3 bg-blue-400/80 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
      }`}
      style={{
        transform: `translate3d(${position.x - (isHovered ? 16 : 6)}px, ${
          position.y - (isHovered ? 16 : 6)
        }px, 0)`,
      }}
    />
  );
}
