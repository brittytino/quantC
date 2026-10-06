"use client";

import React from "react";

interface WelfareStackProps {
  className?: string;
}

export function WelfareStackSystem({ className = "" }: WelfareStackProps) {
  // 6 Cylinders for Annapoorani Super Six
  const cylinders = [1, 2, 3, 4, 5, 6];

  const components = [
    { title: "Vettri Payanam", detail: "Free Transit Choice", icon: "🚌", color: "#38bdf8" },
    { title: "Annapoorani LPG", detail: "6 Free Cylinders/Year", icon: "🔥", color: "#f59e0b" },
    { title: "₹2,500 Support", detail: "Monthly Income Floor", icon: "₹", color: "#10b981" },
    { title: "Annan Seer", detail: "Bride Gold & Silk Saree", icon: "✨", color: "#eab308" },
    { title: "Education Support", detail: "Tuition & Tech Grants", icon: "🎓", color: "#a855f7" },
  ];

  return (
    <div className={`relative w-full flex flex-col items-center select-none ${className}`}>
      {/* Top: Annapoorani Super Six (6 LPG Cylinders Visual) */}
      <div className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl p-4 mb-4">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
              Component Focus • Annapoorani Super Six
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            6 Cylinders = 6 Independent Variables
          </span>
        </div>

        {/* 6 Cylinders Vector Row */}
        <div className="grid grid-cols-6 gap-3 py-1">
          {cylinders.map((num) => (
            <div
              key={num}
              className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-900/60 border border-amber-500/20"
            >
              {/* Vector SVG LPG Cylinder */}
              <svg width="34" height="46" viewBox="0 0 34 46" fill="none" className="overflow-visible">
                {/* Cylinder Cap / Handle */}
                <path d="M11 6 C11 2, 23 2, 23 6 L23 9 L11 9 Z" fill="#b45309" stroke="#f59e0b" strokeWidth="0.8" />
                <rect x="14" y="2" width="6" height="3" rx="1" fill="#fde68a" />
                {/* Cylinder Neck */}
                <rect x="13" y="8" width="8" height="4" fill="#d97706" />
                {/* Cylinder Body */}
                <rect x="5" y="12" width="24" height="26" rx="6" fill="#b45309" stroke="#f59e0b" strokeWidth="1" />
                {/* Center Ring Accent */}
                <line x1="5" y1="25" x2="29" y2="25" stroke="#fde68a" strokeWidth="1" opacity="0.6" />
                {/* Base Ring */}
                <rect x="8" y="38" width="18" height="4" rx="2" fill="#78350f" stroke="#b45309" strokeWidth="0.8" />
              </svg>
              <span className="text-[10px] font-mono text-amber-300 font-semibold mt-1">
                0{num}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Grid: Individual Programmes (Left) -> Transition -> Combined Welfare System (Right) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
        {/* Left (5 cols): Individual Programmes */}
        <div className="md:col-span-5 space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
            01 • Individual Input Components
          </span>
          {components.map((c, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center text-xs">
                  {c.icon}
                </span>
                <div>
                  <span className="text-xs font-bold text-white block">{c.title}</span>
                  <span className="text-[10px] font-mono text-slate-400">{c.detail}</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-slate-500 font-bold">x_{i}</span>
            </div>
          ))}
        </div>

        {/* Center Transition Conduit (1 col) */}
        <div className="md:col-span-1 flex flex-col items-center justify-center py-2 text-slate-500 font-mono text-lg">
          <span className="hidden md:block">➔</span>
          <span className="md:hidden">⬇</span>
        </div>

        {/* Right (5 cols): Combined Welfare System & Quantum Mapping */}
        <div className="md:col-span-5 bg-slate-950 border border-cyan-500/30 rounded-2xl p-5 flex flex-col justify-between h-full">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block mb-1">
              02 • Combined System State
            </span>
            <h4 className="text-lg font-bold font-mono text-white tracking-tight">
              COMBINED WELFARE SYSTEM
            </h4>
            <p className="text-xs text-slate-300 font-sans mt-2 leading-relaxed">
              “Each scheme is one component. But the overall system depends on how those components combine together.”
            </p>
          </div>

          {/* Mathematical Connection Vector */}
          <div className="my-4 p-3 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs space-y-1">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">
              Mathematical Analogy:
            </div>
            <div className="text-cyan-300 font-bold text-sm">
              |Ψ_system⟩ = ∑ c_i |programme_i⟩
            </div>
            <div className="text-[10px] text-slate-400 font-sans">
              Multiple discrete components combine into a unified joint state space.
            </div>
          </div>

          {/* Analogy badge */}
          <div className="pt-2 border-t border-slate-900 flex items-center gap-2 text-[10px] font-mono text-slate-500">
            <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-bold">
              ANALOGY
            </span>
            <span>Helps visualize multi-variable systems; physics is continuous amplitudes.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
