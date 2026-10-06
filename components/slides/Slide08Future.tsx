"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, TrendingUp, Sparkles, CheckCircle, HelpCircle } from "lucide-react";

export function Slide08Future() {
  const timelineSteps = [
    { label: "Classical ML", sub: "Statistical & Deep Learning", active: false },
    { label: "Quantum Research", sub: "Theoretical Foundations", active: false },
    { label: "NISQ Era", sub: "Noisy Intermediate Scale (Today)", active: true },
    { label: "Better Hardware", sub: "Error Correction & QEC", active: false },
    { label: "Quantum Advantage", sub: "Provable Speedup on Practical Tasks", active: false },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-10 select-none overflow-hidden">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400 bg-violet-950/80 px-2.5 py-0.5 rounded-full border border-violet-500/30">
            Slide 08 • Outlook & Conclusion
          </span>
          <span className="text-xs font-mono text-slate-500">PRESENTER 02</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          🔮 Hype or Real Revolution?
        </h2>
        <p className="text-sm md:text-base text-slate-300 mt-1">
          Separating scientific reality from premature marketing claims.
        </p>
      </div>

      {/* Center 2-Column Comparison: TODAY vs POTENTIAL FUTURE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto items-stretch">
        {/* Left Side: TODAY (NISQ Reality) */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 backdrop-blur-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <h3 className="text-lg font-black font-mono tracking-wider text-amber-300">
                  TODAY (NISQ ERA)
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/60 text-amber-400 border border-amber-800/40">
                Current Reality
              </span>
            </div>

            <ul className="space-y-3 font-sans text-xs md:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <AlertCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Small quantum systems:</strong> 50 to 1,000 physical qubits without full error correction.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Noisy hardware & decoherence:</strong> Environmental thermal noise limits circuit depth and causes phase flip errors.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Research-heavy phase:</strong> Focus is on finding heuristic variational ansatzes and quantum kernels.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Simulation is common:</strong> Most ML workflows run on classical GPU tensor/statevector simulators (like Qiskit Aer).
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-4 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-400">
            No universal quantum speedup has yet been demonstrated over classical deep learning on commercial tabular data.
          </div>
        </div>

        {/* Right Side: POTENTIAL FUTURE */}
        <div className="bg-gradient-to-br from-violet-950/50 via-slate-950/80 to-cyan-950/40 border border-violet-500/40 rounded-2xl p-5 backdrop-blur-md flex flex-col justify-between shadow-[0_0_25px_rgba(139,92,246,0.15)]">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <h3 className="text-lg font-black font-mono tracking-wider text-cyan-300">
                  POTENTIAL FUTURE
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
                Fault-Tolerant Horizon
              </span>
            </div>

            <ul className="space-y-3 font-sans text-xs md:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <Sparkles size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Logical Fault-Tolerant Qubits:</strong> Quantum error correction (surface codes) suppressing decoherence to near zero.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Sparkles size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Dramatically Lower Error Rates:</strong> Enables deep parameterized circuits with millions of entangling gates.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Sparkles size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Better Quantum Algorithms:</strong> Provable quadratic or super-polynomial advantages in quantum chemistry, materials science, and cryptography.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Sparkles size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Hybrid Cloud Architectures:</strong> Seamless co-processing where classical GPUs handle backpropagation and QPUs handle state kernel projection.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-4 p-2.5 rounded-xl bg-violet-950/60 border border-violet-800/40 text-[11px] font-mono text-cyan-300">
            Target applications: Quantum chemistry drug discovery, high-dimensional generative modeling, and optimization.
          </div>
        </div>
      </div>

      {/* Animated Evolutionary Timeline */}
      <div className="py-2">
        <div className="flex items-center justify-between gap-2 bg-slate-950/80 border border-slate-800 rounded-2xl p-3 backdrop-blur-md">
          {timelineSteps.map((step, idx) => (
            <React.Fragment key={step.label}>
              <div
                className={`flex-1 flex flex-col items-center text-center p-2 rounded-xl border transition-all ${
                  step.active
                    ? "bg-cyan-950/80 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    : "bg-slate-900/60 border-slate-800 text-slate-400"
                }`}
              >
                <span className="text-[10px] font-mono text-slate-500 uppercase">Phase {idx + 1}</span>
                <span className="text-xs font-mono font-bold mt-0.5 text-slate-200">
                  {step.label}
                </span>
                <span className="text-[9px] text-slate-400 leading-tight mt-0.5 hidden sm:block">
                  {step.sub}
                </span>
              </div>
              {idx < timelineSteps.length - 1 && (
                <span className="text-slate-600 font-bold text-xs">➔</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Final Cinematic Quote & Closing */}
      <div className="bg-gradient-to-r from-violet-950/80 via-slate-900 to-cyan-950/80 border border-violet-500/40 rounded-2xl p-4 text-center">
        <p className="text-sm md:text-base font-medium text-white italic max-w-3xl mx-auto">
          “Classical ML taught machines to learn. Quantum ML asks whether the laws of quantum mechanics can teach them to{" "}
          <span className="text-cyan-300 font-bold underline decoration-cyan-400">learn differently</span>.”
        </p>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-6 text-xs font-mono pt-2 border-t border-slate-800/80">
          <span className="text-white font-bold text-sm">THANK YOU</span>
          <span className="text-slate-600">•</span>
          <span className="text-cyan-400 font-semibold">Questions?</span>
          <span className="text-slate-600">•</span>
          <div className="flex items-center gap-2 text-slate-300">
            <span>⚛️ QML</span>
            <span>+</span>
            <span>🐍 Python</span>
            <span>+</span>
            <span>🤖 AI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
