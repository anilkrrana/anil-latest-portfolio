import React from "react";

export default function BackgroundCircles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center -z-10">
      {/* Central Ambient Glow */}
      <div className="absolute w-[500px] h-[500px] dark:bg-blue-600/10 bg-blue-500/5 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute w-[300px] h-[300px] dark:bg-indigo-500/10 bg-indigo-500/5 rounded-full blur-[90px]" />
    </div>
  );
}
