"use client";

import React from "react";
import { CheckCircle2, AlertOctagon, TrendingUp, Vote, ArrowRight } from "lucide-react";

export function Slide02Classical() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 select-none overflow-hidden bg-[#05070e]">
      {/* Slide Header */}
      <div className="z-10">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-500/30">
            Slide 02 • Ground Truth By-Election Proof & Classical Limits
          </span>
          <span className="text-xs font-mono text-slate-500">PRESENTER 01</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-sans">
          GROUND TRUTH BY-ELECTION PROOF & WHY CLASSICAL ML FAILED
        </h2>
        <p className="text-sm sm:text-lg lg:text-xl text-slate-300 mt-1 font-medium">
          October 9, 2026 Certified Results: Ruling TVK Sweeps 2-0 (Madurantakam & Dharapuram) Against Opposition DMK
        </p>
      </div>

      {/* Main Grid: Left Ground Truth Results + Right Classical Mathematical Failure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-stretch max-w-[1720px] mx-auto w-full z-10">
        {/* Left Column (7 cols): The Official October 9, 2026 By-Election Results */}
        <div className="lg:col-span-7 bg-slate-950/95 border border-slate-800 rounded-3xl p-6 lg:p-8 shadow-2xl flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div>
                <span className="text-xs sm:text-sm font-mono uppercase text-emerald-400 font-bold flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  OFFICIAL BY-ELECTION COUNTING: OCTOBER 9, 2026
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mt-1">
                  Ruling TVK Sweeps Both Tamil Nadu Assembly By-Elections (2 / 2)
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-xl bg-red-950 text-red-300 border border-red-500/50 font-bold">
                ECI Certified
              </span>
            </div>

            {/* 2 By-Election Result Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Seat 1: Madurantakam (SC) */}
              <div className="p-4.5 rounded-2xl bg-slate-900/90 border border-red-500/50 shadow-lg space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">Constituency 01</span>
                    <h4 className="text-lg font-bold text-white font-sans">Madurantakam (SC)</h4>
                    <span className="text-xs font-mono text-red-400 font-bold block mt-0.5">
                      Winner: K. Maragatham Kumaravel (Ruling TVK)
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/40">
                    TVK RETAINED
                  </span>
                </div>

                <div className="space-y-1 font-mono text-xs pt-2 border-t border-slate-800">
                  <div className="flex justify-between">
                    <span className="text-red-400 font-bold">Ruling TVK:</span>
                    <span className="text-white font-black text-sm">74,048 votes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Opposition DMK:</span>
                    <span className="text-slate-300 font-bold">54,008 votes</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-slate-800/80 text-emerald-400 font-bold">
                    <span>Victory Margin:</span>
                    <span>+20,040 votes (Landslide!)</span>
                  </div>
                </div>
              </div>

              {/* Seat 2: Dharapuram */}
              <div className="p-4.5 rounded-2xl bg-slate-900/90 border border-red-500/50 shadow-lg space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">Constituency 02</span>
                    <h4 className="text-lg font-bold text-white font-sans">Dharapuram (West)</h4>
                    <span className="text-xs font-mono text-red-400 font-bold block mt-0.5">
                      Winner: P. Sathyabama (Ruling TVK)
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/40">
                    TVK RETAINED
                  </span>
                </div>

                <div className="space-y-1 font-mono text-xs pt-2 border-t border-slate-800">
                  <div className="flex justify-between">
                    <span className="text-red-400 font-bold">Ruling TVK:</span>
                    <span className="text-white font-black text-sm">66,841 votes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Opposition DMK:</span>
                    <span className="text-slate-300 font-bold">57,370 votes</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-slate-800/80 text-emerald-400 font-bold">
                    <span>Victory Margin:</span>
                    <span>+9,471 votes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ground Truth Synthesis Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/40 via-slate-900 to-emerald-950/40 border border-slate-800 space-y-1 text-xs sm:text-sm font-sans">
            <span className="text-xs font-mono uppercase text-amber-400 font-bold block">
              FINAL BY-ELECTION TALLY: RULING TVK 2 • OPPOSITION DMK 0
            </span>
            <p className="text-slate-200 leading-relaxed">
              Opposition parties and classical pollsters predicted anti-incumbency losses for the ruling administration.
              Instead, <strong className="text-white">citizens overwhelmingly voted to retain ruling TVK by margins up to +20,040 votes</strong>—validating the state-wide delivery of <em>Vettri Payanam</em> and <em>Annapoorani Super 6</em>. Why did classical polling miss this?
            </p>
          </div>
        </div>

        {/* Right Column (5 cols): The Classical Computational Crisis */}
        <div className="lg:col-span-5 bg-slate-950/95 border border-slate-800 rounded-3xl p-6 lg:p-8 shadow-2xl flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div>
                <span className="text-xs sm:text-sm font-mono uppercase text-red-400 font-bold block">
                  MATHEMATICAL CAUSE OF FAILURE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mt-1">
                  Why Classical ML Failed
                </h3>
              </div>
              <span className="text-2xl">⚠️</span>
            </div>

            <div className="space-y-3 font-mono text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                <span className="text-amber-400 font-bold block mb-1">01. Binary Reductionism (0 vs 1)</span>
                <p className="text-slate-300 font-sans text-xs leading-relaxed">
                  Classical bits assume voters are discrete binary switches (0 or 1). They cannot model the <strong>undecided quantum superposition</strong> of citizens balancing welfare satisfaction against local candidate factors.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                <span className="text-amber-400 font-bold block mb-1">02. Independent Feature Fallacy</span>
                <p className="text-slate-300 font-sans text-xs leading-relaxed">
                  Classical ML assumes features are independent: P(A ∩ B) = P(A) · P(B). In reality, free bus transit and LPG cash transfers are <strong>synergistically entangled</strong>!
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                <span className="text-amber-400 font-bold block mb-1">03. Combinatorial Explosion (2ᴺ)</span>
                <p className="text-slate-300 font-sans text-xs leading-relaxed">
                  Evaluating 20 policy, caste, and constituency variables across 234 seats sequentially requires <strong>2²⁰ &gt; 1,048,576 operations</strong> in classical loops.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-cyan-950/50 border border-cyan-500/50 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-xs font-mono uppercase text-cyan-400 font-bold block">
                The Quantum Breakthrough:
              </span>
              <span className="text-sm sm:text-base font-bold text-white font-sans block">
                N Qubits hold all 2ᴺ governance states simultaneously!
              </span>
            </div>
            <span className="text-2xl">⚛️</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs sm:text-sm font-mono text-slate-500 border-t border-slate-900 pt-3 z-10">
        <span>Slide 02 • Ground Truth By-Election Proof & Classical Limits</span>
        <span>Next: Slide 03 Meet the Qubit: The &apos;Superposition Voter&apos; ➔</span>
      </div>
    </div>
  );
}
