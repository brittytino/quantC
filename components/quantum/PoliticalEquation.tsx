"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface PoliticalEquationProps {
  className?: string;
  onCombineTrigger?: () => void;
}

export function PoliticalEquation({ className = "", onCombineTrigger }: PoliticalEquationProps) {
  const [activeCombination, setActiveCombination] = useState<number>(0);

  // Neutral, factual representation of the major political forces shaping Tamil Nadu equations
  const forces = [
    { id: "DMK", name: "DMK Alliance", role: "Incumbent / Opposition Front", factor: "Coalition Base" },
    { id: "AIADMK", name: "AIADMK Front", role: "Principal Opposition Front", factor: "Grassroots Grid" },
    { id: "TVK", name: "TVK Factor", role: "Emergent Third Force (Vijay)", factor: "Youth & Swing Dynamics" },
    { id: "NDA", name: "BJP / NDA", role: "National Alliance", factor: "Consolidated Polarity" },
    { id: "LEFT", name: "Left & Regional", role: "Independent / Issue Blocs", factor: "Constituency Pockets" },
  ];

  const combinationScenarios = [
    {
      title: "Triangular Dispersion",
      formula: "Outcome = f(DMK ⊗ AIADMK ⊗ TVK)",
      desc: "Split anti-incumbency across multi-cornered contests (e.g. Madurantakam bypoll).",
      stateCount: "2⁴ = 16 Local State Vectors",
    },
    {
      title: "Bipolar Consolidation",
      formula: "Outcome = f((DMK + Allies) vs (AIADMK + NDA))",
      desc: "Direct two-front arithmetic where undecided voter share swings margins.",
      stateCount: "2² = 4 Primary Amplitudes",
    },
    {
      title: "Micro-Constituency Volatility",
      formula: "Outcome = ⨂ (Turnout × Local Issues × Candidate Pull)",
      desc: "Constituency-level factors override state-level macro trends.",
      stateCount: "2²³⁴ ≈ 10⁷⁰ Combinatorial Space",
    },
  ];

  return (
    <div className={`flex flex-col justify-between bg-slate-950/80 border border-slate-800 rounded-2xl p-6 select-none ${className}`}>
      {/* Top Heading */}
      <div>
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Tamil Nadu Multi-Factor Political Equation
          </span>
          <span className="text-[11px] font-mono text-cyan-400">
            N Variables ➔ 2ᴺ Simultaneous Possibilities
          </span>
        </div>
        <p className="text-sm text-slate-300 font-sans leading-relaxed">
          Tamil Nadu politics isn&apos;t just <strong>Party A vs Party B</strong>. The outcome of any bypoll
          or general election emerges from continuous non-linear interactions:
        </p>
      </div>

      {/* Center Abstract Flow Diagram: Forces -> Interacting Matrix -> Superposed Outcomes */}
      <div className="py-4">
        {/* 5 Interacting Forces Row */}
        <div className="grid grid-cols-5 gap-2 mb-4">
          {forces.map((force, i) => (
            <div
              key={force.id}
              onClick={() => setActiveCombination(i % combinationScenarios.length)}
              className="cursor-pointer bg-slate-900/90 border border-slate-800 hover:border-slate-600 rounded-xl p-2.5 text-center transition-all"
            >
              <span className="text-xs font-mono font-bold text-white block">{force.id}</span>
              <span className="text-[10px] text-slate-400 block mt-0.5 leading-tight">{force.name}</span>
              <span className="text-[9px] font-mono text-cyan-300/80 block mt-1">{force.factor}</span>
            </div>
          ))}
        </div>

        {/* Vector Interaction Conduit lines */}
        <div className="relative py-2 flex items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <svg viewBox="0 0 500 40" className="w-full h-10 overflow-visible">
              <path d="M 50 5 Q 250 35, 450 5" fill="none" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 4" />
              <circle cx="250" cy="20" r="4" fill="#38bdf8" />
              <line x1="250" y1="20" x2="250" y2="38" stroke="#38bdf8" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* Active Combinatorial State Card */}
        <div className="bg-slate-900/95 border border-slate-800 rounded-xl p-4">
          <div className="flex items-center justify-between text-xs font-mono mb-1">
            <span className="text-cyan-300 font-bold">
              Equation Mode: {combinationScenarios[activeCombination].title}
            </span>
            <span className="text-slate-400">
              State Complexity: {combinationScenarios[activeCombination].stateCount}
            </span>
          </div>

          <div className="text-xs font-mono text-slate-200 bg-slate-950 p-2 rounded-lg border border-slate-800/80 my-2">
            <code>{combinationScenarios[activeCombination].formula}</code>
          </div>

          <p className="text-xs text-slate-300">
            {combinationScenarios[activeCombination].desc}
          </p>

          <div className="flex gap-2 mt-3">
            {combinationScenarios.map((scen, idx) => (
              <button
                key={scen.title}
                onClick={() => {
                  setActiveCombination(idx);
                  if (onCombineTrigger) onCombineTrigger();
                }}
                className={`text-[10px] font-mono px-2.5 py-1 rounded transition-all ${
                  activeCombination === idx
                    ? "bg-cyan-950 border border-cyan-400 text-cyan-200 font-bold"
                    : "bg-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                Permutation {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* The Crucial Intellectual Bridge Statement */}
      <div className="border-t border-slate-800 pt-3">
        <blockquote className="text-xs text-slate-300 italic border-l-2 border-cyan-400 pl-3 leading-relaxed">
          “We are <strong>not predicting who wins</strong>. We are examining how many distinct simultaneous
          combinations of alliance and constituency states must exist before an outcome is observed.”
        </blockquote>
      </div>
    </div>
  );
}
