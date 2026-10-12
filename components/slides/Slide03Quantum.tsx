"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BlochSphere } from "../quantum/BlochSphere";

export function Slide03Quantum() {
  const [qubitState, setQubitState] = useState<{ alpha: number; beta: number; label: string }>({
    alpha: 0.7071,
    beta: 0.7071,
    label: "Balanced Undecided Voter (Hadamard Superposition)",
  });

  const p0 = Number((qubitState.alpha * qubitState.alpha * 100).toFixed(1));
  const p1 = Number((qubitState.beta * qubitState.beta * 100).toFixed(1));

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 select-none overflow-hidden bg-[#05070e]">
      {/* Slide Header */}
      <div className="z-10">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
            Slide 03 • Fundamental Quantum Mechanics
          </span>
          <span className="text-xs font-mono text-slate-500">PRESENTER 01</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-sans">
          MEET THE QUBIT: THE &apos;SUPERPOSITION VOTER&apos;
        </h2>
        <p className="text-sm sm:text-lg lg:text-xl text-slate-300 mt-1 font-medium">
          From Binary Transistors to Continuous Quantum State Space: |ψ⟩ = α|0⟩ + β|1⟩
        </p>
      </div>

      {/* Main Grid: Left Comparison + Center Bloch Sphere + Right State Amplitudes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-stretch max-w-[1720px] mx-auto w-full z-10">
        {/* Left Column (4 cols): Classical Bit vs Quantum Qubit */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-5">
          {/* Classical Bit Box */}
          <div className="bg-slate-950/95 border border-slate-800 rounded-3xl p-6 lg:p-7 shadow-2xl space-y-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs sm:text-sm font-mono uppercase text-slate-400 font-bold">
                Classical Transistor Bit
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                Rigid Binary
              </span>
            </div>

            <div className="flex items-center justify-center gap-8 py-5 bg-slate-900/60 rounded-2xl border border-slate-800 my-2">
              <div className="text-center">
                <span className="text-5xl font-mono font-bold text-slate-500 block">0</span>
                <span className="text-xs font-mono text-slate-400 mt-1 block">Opposition</span>
              </div>
              <span className="text-base font-mono font-bold text-slate-500">OR</span>
              <div className="text-center">
                <span className="text-5xl font-mono font-bold text-amber-400 block">1</span>
                <span className="text-xs font-mono text-amber-300 mt-1 block">Ruling TVK</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Binary logic forces voters into 0 or 1 prematurely. It cannot model citizens weighing multiple flagship policies simultaneously.
            </p>
          </div>

          {/* Wavefunction Collapse Card */}
          <div className="bg-red-950/40 border border-red-500/40 rounded-3xl p-6 shadow-2xl space-y-2">
            <span className="text-xs sm:text-sm font-mono uppercase text-red-400 font-bold tracking-wider block">
              POLLING DAY WAVEFUNCTION COLLAPSE
            </span>
            <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
              When a citizen enters the booth and presses the button on the Electronic Voting Machine (EVM), the quantum wavefunction{" "}
              <strong className="text-white">collapses</strong> into a single classical eigenvalue:
            </p>
            <div className="pt-2 border-t border-red-900/60 font-mono text-xs text-red-300 flex justify-between">
              <span>EVM Button Press</span>
              <span className="font-bold">➔ Projective Measurement P(1) = |β|²</span>
            </div>
          </div>
        </div>

        {/* Center Column (4 cols): Animated Bloch Sphere */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center bg-slate-950/90 border border-cyan-500/30 rounded-3xl p-6 lg:p-8 shadow-2xl relative">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-2 text-center">
            THE BLOCH SPHERE OF VOTER SENTIMENT
          </span>

          <div className="my-auto scale-105">
            <BlochSphere size={280} interactive={true} label="|ψ⟩ = α|0⟩ + β|1⟩" />
          </div>

          <div className="w-full text-center mt-3">
            <span className="text-xs sm:text-sm font-mono text-slate-400 block">
              North Pole: |0⟩ (Opposition DMK) • South Pole: |1⟩ (Ruling TVK Retained)
            </span>
          </div>
        </div>

        {/* Right Column (4 cols): Interactive State Amplitudes & Political Translation */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-5">
          <div className="bg-slate-950/95 border border-slate-800 rounded-3xl p-6 lg:p-7 shadow-2xl space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm font-mono uppercase text-cyan-400 font-bold">
                Quantum State Amplitudes
              </span>
              <span className="text-xs sm:text-sm font-mono text-white font-bold">|α|² + |β|² = 1</span>
            </div>

            {/* Probability Bars */}
            <div className="space-y-3 font-mono text-xs sm:text-sm">
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>|0⟩ Opposition DMK:</span>
                  <span className="text-slate-400 font-bold">{p0}%</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <motion.div className="bg-slate-500 h-full" animate={{ width: `${p0}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>|1⟩ Ruling TVK Retained:</span>
                  <span className="text-red-400 font-bold">{p1}%</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <motion.div className="bg-gradient-to-r from-red-500 to-amber-500 h-full" animate={{ width: `${p1}%` }} />
                </div>
              </div>
            </div>

            {/* Tuner Buttons */}
            <div className="space-y-2 pt-3 border-t border-slate-800">
              <span className="text-xs font-mono text-slate-400 block">Simulate Voter Alignment:</span>
              <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                <button
                  onClick={() => setQubitState({ alpha: 0.92, beta: 0.39, label: "Critical Opposition Leaning" })}
                  className="py-2 px-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-all text-center"
                >
                  Opposition
                </button>
                <button
                  onClick={() => setQubitState({ alpha: 0.7071, beta: 0.7071, label: "Balanced Undecided Citizen" })}
                  className="py-2 px-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/50 transition-all text-center font-bold"
                >
                  Undecided (H)
                </button>
                <button
                  onClick={() => setQubitState({ alpha: 0.25, beta: 0.97, label: "Ruling TVK Welfare Retention Wave" })}
                  className="py-2 px-2 rounded-xl bg-red-950 hover:bg-red-900 text-red-300 border border-red-500/50 transition-all text-center font-bold"
                >
                  Welfare Wave
                </button>
              </div>
            </div>
          </div>

          {/* Academic Insight Box */}
          <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              The Fundamental Takeaway:
            </span>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 font-sans leading-relaxed">
              Superposition allows Python algorithms to operate on continuous probability vectors instead of guessing static binary polls.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs sm:text-sm font-mono text-slate-500 border-t border-slate-900 pt-3 z-10">
        <span>Slide 03 • The Qubit & Superposition</span>
        <span>Next: Slide 04 Quantum Entanglement: The Multi-Scheme Multiplier ➔</span>
      </div>
    </div>
  );
}
