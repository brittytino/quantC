"use client";

import React from "react";

interface QuantumResearcherProps {
  className?: string;
  width?: number;
  height?: number;
  label?: string;
}

export function QuantumResearcher({
  className = "",
  width = 160,
  height = 200,
  label = "Quantum Researcher",
}: QuantumResearcherProps) {
  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 160 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="researcherCoat" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="laptopScreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Shadow */}
        <ellipse cx="80" cy="192" rx="42" ry="6" fill="#000000" opacity="0.6" />

        {/* Legs / Trousers */}
        <path d="M68 140 L65 186 L74 186 L77 140 Z" fill="#090d16" stroke="#1e293b" strokeWidth="1.2" />
        <path d="M83 140 L86 186 L95 186 L92 140 Z" fill="#090d16" stroke="#1e293b" strokeWidth="1.2" />
        {/* Clean Shoes */}
        <path d="M62 184 L75 184 L76 190 L61 190 Z" fill="#1e293b" />
        <path d="M85 184 L98 184 L99 190 L84 190 Z" fill="#1e293b" />

        {/* Lab Coat / Professional Jacket */}
        <path
          d="M54 75 L50 152 L76 154 L78 115 L82 115 L84 154 L110 152 L106 75 Z"
          fill="url(#researcherCoat)"
          stroke="#334155"
          strokeWidth="1.2"
        />

        {/* Shirt / Tie Accent */}
        <polygon points="76,75 84,75 82,105 78,105" fill="#f8fafc" opacity="0.9" />
        <polygon points="78.5,82 81.5,82 81,102 79,102" fill="#38bdf8" />

        {/* Head & Hair */}
        <circle cx="80" cy="52" r="14" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        <path d="M68 49 C 68 36, 92 36, 92 49 C 89 42, 73 43, 68 49 Z" fill="#090d16" />
        {/* Glasses / Modern Focus */}
        <rect x="71" y="49" width="7" height="5" rx="1.5" stroke="#38bdf8" strokeWidth="1" fill="#0f172a" />
        <rect x="82" y="49" width="7" height="5" rx="1.5" stroke="#38bdf8" strokeWidth="1" fill="#0f172a" />
        <line x1="78" y1="51.5" x2="82" y2="51.5" stroke="#38bdf8" strokeWidth="1" />

        {/* Arms holding slim Laptop */}
        {/* Left Arm */}
        <path d="M54 82 L42 110 L60 120 L68 112 L58 102 L64 85 Z" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        {/* Right Arm */}
        <path d="M106 82 L118 110 L100 120 L92 112 L102 102 L96 85 Z" fill="#1e293b" stroke="#334155" strokeWidth="1" />

        {/* Slim Open Laptop */}
        {/* Base */}
        <polygon points="56,122 104,122 98,130 62,130" fill="#334155" stroke="#475569" strokeWidth="1" />
        {/* Screen lid tilted */}
        <polygon points="62,94 98,94 104,122 56,122" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
        {/* Illuminated Screen with tiny code / state pulse */}
        <polygon points="64,96 96,96 102,120 58,120" fill="url(#laptopScreen)" />
        {/* Glowing code lines on screen */}
        <line x1="68" y1="102" x2="86" y2="102" stroke="#ffffff" strokeWidth="1.2" opacity="0.9" />
        <line x1="68" y1="107" x2="92" y2="107" stroke="#ffffff" strokeWidth="1.2" opacity="0.7" />
        <line x1="68" y1="112" x2="78" y2="112" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />
      </svg>

      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-1 block">
        {label}
      </span>
    </div>
  );
}
