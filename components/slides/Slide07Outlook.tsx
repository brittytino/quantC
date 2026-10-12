"use client";

import React from "react";
import { Layers, Cpu, CheckCircle2, XCircle, ArrowRight } from "lucide-react";

export function Slide07Outlook() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 select-none overflow-hidden bg-[#05070e]">
      {/* Slide Header */}
      <div className="z-10">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-500/30">
            Slide 07 • The Scientific Advantage
          </span>
          <span className="text-xs font-mono text-slate-500">PRESENTER 02</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-sans">
          CLASSICAL ML vs QUANTUM MACHINE LEARNING
        </h2>
        <p className="text-sm sm:text-lg lg:text-xl text-slate-300 mt-1 font-medium">
          Why Quantum Kernel Methods Accurately Predicted the Ruling TVK Retention Landslide
        </p>
      </div>

      {/* Main Grid: Direct Head-to-Head Comparison - Ultra Widescreen */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto items-stretch max-w-[1720px] mx-auto w-full z-10">
        {/* Left: Classical Machine Learning */}
        <div className="bg-slate-950/95 border border-slate-800 rounded-3xl p-6 lg:p-8 shadow-2xl flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div>
                <span className="text-xs sm:text-sm font-mono uppercase text-slate-400 font-bold block">
                  CONVENTIONAL LOGISTIC / SVM
                </span>
                <h3 className="text-xl sm:text-3xl font-bold font-sans text-white mt-1">
                  Classical Machine Learning
                </h3>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400">
                <Layers size={24} />
              </div>
            </div>

            <div className="space-y-4 font-sans text-xs sm:text-sm lg:text-base">
              <div className="flex items-start gap-3">
                <XCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-relaxed">
                  <strong className="text-white">Confined to Euclidean Space:</strong> Uses linear decision boundaries that flatten multi-scheme welfare benefits into disjoint averages.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <XCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-relaxed">
                  <strong className="text-white">Assumes Independent Features:</strong> Calculates P(Bus ∩ LPG) = P(Bus) · P(LPG). Fails completely when policy benefits compound non-linearly.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <XCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-relaxed">
                  <strong className="text-white">False Anti-Incumbency Bias:</strong> Falsely predicted tight toss-ups or opposition DMK flips in Madurantakam & Dharapuram, blindsided by welfare delivery retention.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-red-950/40 border border-red-500/40 text-xs sm:text-sm font-mono text-red-300">
            <span>❌ Classical Poll Result: Falsely projected opposition swings; missed the +20,040 ruling TVK landslide!</span>
          </div>
        </div>

        {/* Right: Quantum Machine Learning */}
        <div className="bg-slate-950/95 border border-cyan-500/40 rounded-3xl p-6 lg:p-8 shadow-2xl flex flex-col justify-between space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div>
                <span className="text-xs sm:text-sm font-mono uppercase text-cyan-400 font-bold block">
                  QUANTUM KERNEL HILBERT SPACE
                </span>
                <h3 className="text-xl sm:text-3xl font-bold font-sans text-white mt-1">
                  Quantum Machine Learning (VQC)
                </h3>
              </div>
              <div className="p-3 rounded-2xl bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                <Cpu size={24} />
              </div>
            </div>

            <div className="space-y-4 font-sans text-xs sm:text-sm lg:text-base">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-slate-200 leading-relaxed">
                  <strong className="text-white">Exponential Hilbert Space:</strong> Maps 234 assembly districts into 2ᴺ-dimensional state vectors where complex governance patterns become linearly separable.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-slate-200 leading-relaxed">
                  <strong className="text-white">Constructive Interference:</strong> Naturally amplifies the ruling TVK retention state |11⟩ while canceling out statistical polling noise.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-slate-200 leading-relaxed">
                  <strong className="text-white">Accurate Retention Modeling:</strong> Identified the exact welfare threshold that produced the October 9 By-Election sweep (Madurantakam & Dharapuram)!
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-cyan-950/60 border border-cyan-500/50 text-xs sm:text-sm font-mono text-cyan-200">
            <span>✅ Quantum Advantage Proven: Correctly predicted the constructive interference of the ruling TVK wave!</span>
          </div>
        </div>
      </div>

      {/* Bottom Transition Banner to Demo */}
      <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-red-950/60 via-slate-900 to-cyan-950/60 border border-amber-500/40 flex items-center justify-between max-w-[1720px] mx-auto w-full z-10">
        <div className="space-y-0.5">
          <span className="text-xs sm:text-sm font-mono uppercase text-amber-400 font-bold block">
            NEXT: THE CLIMAX DEMONSTRATION
          </span>
          <span className="text-base sm:text-lg lg:text-xl font-bold text-white font-sans block">
            Slide 08: Live Interactive Ruling TVK 2026 Quantum Election Predictor
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-cyan-300 font-bold bg-slate-900/90 px-4 py-2 rounded-xl border border-slate-700 shadow-md">
          <span>RUN LIVE DEMO</span>
          <ArrowRight size={16} />
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs sm:text-sm font-mono text-slate-500 border-t border-slate-900 pt-3 z-10">
        <span>Slide 07 • The Quantum Advantage</span>
        <span>Press Space or → for the Live Climax Demo ➔</span>
      </div>
    </div>
  );
}
