"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ElectionAnalogy } from "../quantum/ElectionAnalogy";

export function Slide02Classical() {
  const [qubitState, setQubitState] = useState({ alpha: 0.707, beta: 0.707 });

  const p0 = (qubitState.alpha * qubitState.alpha * 100).toFixed(1);
  const p1 = (qubitState.beta * qubitState.beta * 100).toFixed(1);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-10 select-none overflow-hidden">
      {/* Slide Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
            Slide 02 • Foundations
          </span>
          <span className="text-xs font-mono text-slate-500">PRESENTER 01</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          🧠 Why Do We Need Quantum Machine Learning?
        </h2>
        <p className="text-sm md:text-base text-slate-300 mt-1">
          The exponential curse of dimensionality vs. quantum state spaces.
        </p>
      </div>

      {/* Main Grid: Left (Bit vs Qubit) & Right (Election Analogy) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto items-stretch">
        {/* Left Column (5 cols): Classical Bit vs Qubit */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          {/* Classical Bit Card */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                Classical Bit
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                Deterministic
              </span>
            </div>

            <div className="flex items-center justify-center gap-8 py-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
              <div className="flex flex-col items-center">
                <span className="w-12 h-12 rounded-xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center font-mono text-xl font-bold text-slate-400">
                  0
                </span>
                <span className="text-[10px] font-mono text-slate-500 mt-1">Voltage LOW</span>
              </div>
              <span className="text-xs font-mono font-bold text-amber-500">OR</span>
              <div className="flex flex-col items-center">
                <span className="w-12 h-12 rounded-xl bg-amber-950/40 border-2 border-amber-500 flex items-center justify-center font-mono text-xl font-bold text-amber-300">
                  1
                </span>
                <span className="text-[10px] font-mono text-amber-400/80 mt-1">Voltage HIGH</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
              At any clock cycle, a classical transistor bit resides strictly in state <strong>0</strong> or <strong>1</strong>.
              To process $N$ variables, states must be stored and evaluated sequentially.
            </p>
          </div>

          {/* Qubit Card with Interactive Amplitude Tuning */}
          <div className="bg-slate-950/80 border border-violet-500/30 rounded-2xl p-4 backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-violet-300 uppercase tracking-wider">
                Quantum Qubit
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-950/80 text-violet-300 border border-violet-500/40">
                |ψ⟩ = α|0⟩ + β|1⟩
              </span>
            </div>

            <div className="py-2.5 px-3 bg-slate-900/80 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-cyan-300 font-bold">|α|² = P(|0⟩): {p0}%</span>
                <span className="text-purple-300 font-bold">|β|² = P(|1⟩): {p1}%</span>
              </div>

              {/* Stacked Amplitude Bar */}
              <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden flex">
                <motion.div
                  className="bg-cyan-400 h-full"
                  animate={{ width: `${p0}%` }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className="bg-purple-500 h-full"
                  animate={{ width: `${p1}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Sliders to play with amplitudes */}
              <div className="mt-2.5 flex items-center justify-between gap-2">
                <button
                  onClick={() => setQubitState({ alpha: 1.0, beta: 0.0 })}
                  className="text-[10px] font-mono px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                >
                  Pure |0⟩
                </button>
                <button
                  onClick={() => setQubitState({ alpha: 0.7071, beta: 0.7071 })}
                  className="text-[10px] font-mono px-2 py-1 rounded bg-violet-900/60 hover:bg-violet-800 text-violet-200 border border-violet-500/40"
                >
                  Balanced (H)
                </button>
                <button
                  onClick={() => setQubitState({ alpha: 0.0, beta: 1.0 })}
                  className="text-[10px] font-mono px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                >
                  Pure |1⟩
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
              A qubit exists in a linear superposition of computational basis states.
              Constraint: <strong>|α|² + |β|² = 1</strong> (conservation of total probability).
            </p>
          </div>
        </div>

        {/* Right Column (7 cols): The Election Complexity Analogy & Science Reality */}
        <div className="lg:col-span-7 h-full">
          <ElectionAnalogy />
        </div>
      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between border-t border-slate-800/80 pt-2 text-[11px] font-mono text-slate-500">
        <span>Slide 2 of 8</span>
        <span>Key Takeaway: Quantum superposition expands representation from 2ᴺ discrete states to continuous Hilbert space</span>
        <span>Topic: State Representation</span>
      </div>
    </div>
  );
}
