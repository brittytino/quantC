"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export function ElectionAnalogy() {
  const [interferenceActive, setInterferenceActive] = useState(false);

  return (
    <div className="flex flex-col h-full justify-between bg-slate-950/70 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-md">
      {/* Top Banner / Setup */}
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-mono">
              The Election Complexity Paradox
            </h4>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
            N = 20 Constituencies → 2²⁰ ≈ 1.04M Scenarios
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          “Imagine trying to understand millions of possible election outcomes one decision at a time.”
        </p>
      </div>

      {/* Middle Vector Diagram: Voters -> Candidates -> Combinatorial Tree */}
      <div className="relative py-3 flex items-center justify-between gap-4">
        {/* Step 1: Voters */}
        <div className="flex flex-col items-center bg-slate-900/90 border border-slate-800 rounded-xl p-3 w-32 text-center">
          <div className="flex gap-1 mb-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="text-xs font-bold text-slate-200">10,000 Voters</div>
          <div className="text-[10px] text-slate-400">Demographic inputs & voting preferences</div>
        </div>

        {/* Vector Arrow 1 */}
        <div className="flex items-center text-slate-600 font-mono text-xs">───►</div>

        {/* Step 2: Candidates */}
        <div className="flex flex-col gap-1.5 bg-slate-900/90 border border-slate-800 rounded-xl p-3 w-44">
          <div className="text-[11px] font-semibold text-slate-400 uppercase font-mono">Poll Polarity</div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-cyan-400 font-bold">Candidate A</span>
            <span className="font-mono text-slate-300">48%</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-cyan-400 h-full" style={{ width: "48%" }} />
          </div>
          <div className="flex items-center justify-between text-xs mt-1">
            <span className="text-purple-400 font-bold">Candidate B</span>
            <span className="font-mono text-slate-300">45%</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-purple-400 h-full" style={{ width: "45%" }} />
          </div>
          <div className="text-[10px] text-amber-300/80 font-mono mt-0.5">Undecided Swing: 7%</div>
        </div>

        {/* Vector Arrow 2 */}
        <div className="flex items-center text-slate-600 font-mono text-xs">───►</div>

        {/* Step 3: Combinatorial Outcome Space */}
        <div className="flex flex-col items-center bg-slate-900/90 border border-slate-800 rounded-xl p-3 w-40 text-center">
          <div className="text-xs font-bold text-amber-400 font-mono">Millions of Outcomes</div>
          <div className="text-[10px] text-slate-400 mt-1">
            Turnout shifts, swing margins, cross-district correlations
          </div>
          <div className="mt-2 text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
            State Space = 2ᴺ
          </div>
        </div>
      </div>

      {/* Comparison: Classical One-by-One vs Quantum Amplitude Manipulation */}
      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800/80">
        {/* Classical Left */}
        <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 font-mono uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-400" /> Classical Computing
          </div>
          <p className="text-[11px] text-slate-300 mt-1">
            <strong className="text-slate-100">One definite state at a time.</strong> Must test outcomes sequentially through brute-force simulation or Monte Carlo sampling.
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-[10px] font-mono text-slate-500">Evaluation:</span>
            <div className="flex gap-1">
              <span className="w-4 h-2 rounded bg-amber-500/80" />
              <span className="w-4 h-2 rounded bg-slate-800" />
              <span className="w-4 h-2 rounded bg-slate-800" />
              <span className="w-4 h-2 rounded bg-slate-800" />
              <span className="text-[9px] font-mono text-slate-400">...1.04M steps</span>
            </div>
          </div>
        </div>

        {/* Quantum Right */}
        <div className="bg-gradient-to-br from-violet-950/40 to-cyan-950/30 rounded-xl p-3 border border-violet-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300 font-mono uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" /> Quantum Computing
            </div>
            <button
              onClick={() => setInterferenceActive(!interferenceActive)}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-600 hover:bg-violet-500 text-white transition-all shadow-sm"
            >
              {interferenceActive ? "Reset Amplitudes" : "⚡ Apply Interference"}
            </button>
          </div>
          <p className="text-[11px] text-slate-300 mt-1">
            <strong className="text-cyan-300">Probability amplitudes across states.</strong>
          </p>
          {/* Animated amplitude bars */}
          <div className="mt-2 space-y-1 font-mono text-[10px]">
            <div className="flex items-center justify-between text-slate-400">
              <span>Target Solution State |ψ_opt⟩:</span>
              <span className="text-cyan-300 font-bold">
                {interferenceActive ? "Amplified 79.4%" : "Uniform 25.0%"}
              </span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-cyan-400 to-violet-500 h-full rounded-full"
                animate={{ width: interferenceActive ? "79.4%" : "25%" }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Critical Scientific Note Banner */}
      <div className="mt-2 bg-slate-900/90 border border-cyan-500/30 rounded-xl p-2.5 flex items-start gap-2.5">
        <span className="text-cyan-400 text-base">⚛️</span>
        <p className="text-[11px] text-slate-300 leading-snug">
          <strong className="text-cyan-300">Scientific Reality:</strong> Quantum computers do{" "}
          <em>not</em> magically test all paths at once and pick the answer. Instead, quantum
          algorithms manipulate <strong className="text-violet-300">probability amplitudes</strong>{" "}
          using destructive interference on incorrect paths so constructive interference amplifies
          useful outcomes for measurement.
        </p>
      </div>
    </div>
  );
}
