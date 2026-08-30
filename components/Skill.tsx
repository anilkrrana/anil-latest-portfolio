import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  imgsrc: string;
  isHighlighted?: boolean;
  category?: string;
};

export default function Skill({ name, imgsrc, isHighlighted = false }: Props) {
  return (
    <div
      className={`group relative flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 ${
        isHighlighted
          ? "dark:bg-blue-900/40 bg-blue-50 border-blue-500 shadow-md shadow-blue-500/10 scale-105"
          : "dark:bg-neutral-900/60 bg-white dark:border-neutral-800/80 border-slate-200 hover:border-blue-400 hover:bg-blue-50/30"
      }`}
    >
      <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center">
        <Image
          src={imgsrc}
          alt={name}
          width={32}
          height={32}
          className="object-contain rounded-sm"
        />
      </div>
      <span className="text-xs font-mono font-medium dark:text-neutral-200 text-slate-800 group-hover:text-blue-600 truncate">
        {name}
      </span>
    </div>
  );
}