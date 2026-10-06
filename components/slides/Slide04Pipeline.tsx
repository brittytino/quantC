"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Database, Binary, Cpu, Waves, Activity, RefreshCw, CheckCircle2 } from "lucide-react";

export function Slide04Pipeline() {
  const [activeStage, setActiveStage] = useState<number>(2); // 0 to 6

  const pipelineStages = [
    {
      id: 0,
      name: "Classical Data",
      type: "classical",
      icon: Database,
      desc: "Raw tabular features (e.g. Attendance 85%, Study Hours 6, Previous Score 72)",
      badge: "Classical Domain",
    },
    {
      id: 1,
      name: "Feature Engineering",
      type: "classical",
      icon: Binary,
      desc: "Normalize into bounded parameters [0, π] for quantum rotation angles",
      badge: "Classical Domain",
    },
    {
      id: 2,
      name: "Quantum Encoding",
      type: "quantum",
      icon: Waves,
      desc: "Apply Ry(θ) / Rz(θ) feature map gates to encode data into state vector |ψ(x)⟩",
      badge: "Quantum Domain",
    },
    {
      id: 3,
      name: "Quantum Circuit",
      type: "quantum",
      icon: Cpu,
      desc: "Parameterized ansatz (H, Ry(w), CNOT) entangles features in Hilbert space",
      badge: "Quantum Domain",
    },
    {
      id: 4,
      name: "Measurement",
      type: "quantum",
      icon: Activity,
      desc: "Sample shots across computational basis {|00⟩, |01⟩, |10⟩, |11⟩} to obtain expectation values",
      badge: "Quantum Domain",
    },
    {
      id: 5,
      name: "Classical Optimizer",
      type: "classical",
      icon: RefreshCw,
      desc: "COBYLA / Adam updates quantum circuit variational weights (w₀, w₁) via gradient descent",
      badge: "Classical Domain",
    },
    {
      id: 6,
      name: "Prediction",
      type: "classical",
      icon: CheckCircle2,
      desc: "Class assignment: P(PASS) = 84.7% ➔ Class Output: PASS ✅",
      badge: "Classical Domain",
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-10 select-none overflow-hidden">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
            Slide 04 • System Architecture
          </span>
          <span className="text-xs font-mono text-slate-500">PRESENTER 01</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          🔗 How Quantum + Machine Learning Connect
        </h2>
        <p className="text-sm md:text-base text-slate-300 mt-1">
          The hybrid quantum-classical co-processing pipeline.
        </p>
      </div>

      {/* Main Interactive Pipeline Diagram */}
      <div className="my-auto py-2">
        {/* Domain Divider Tags */}
        <div className="flex justify-between items-center px-4 mb-2 text-xs font-mono">
          <span className="text-amber-400/90 font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            CLASSICAL DOMAIN (Preprocessing & Optimization)
          </span>
          <span className="text-cyan-300 font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            QUANTUM PROCESSING UNIT (QPU)
          </span>
          <span className="text-emerald-400 font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            DECISION DOMAIN
          </span>
        </div>

        {/* Pipeline Nodes Strip */}
        <div className="grid grid-cols-7 gap-2 bg-slate-950/80 border border-slate-800 rounded-2xl p-3 backdrop-blur-md">
          {pipelineStages.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = activeStage === idx;
            const isQuantum = stage.type === "quantum";

            return (
              <div
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`cursor-pointer rounded-xl p-3 flex flex-col items-center text-center transition-all relative ${
                  isSelected
                    ? isQuantum
                      ? "bg-violet-950/80 border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                      : "bg-slate-900 border-2 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                    : isQuantum
                    ? "bg-violet-950/30 border border-violet-800/40 hover:border-violet-500/60"
                    : "bg-slate-900/60 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Stage number */}
                <span className="text-[10px] font-mono text-slate-400 mb-1">Step {idx + 1}</span>

                {/* Icon */}
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 ${
                    isQuantum ? "text-cyan-300 bg-cyan-950/70" : "text-amber-400 bg-amber-950/60"
                  }`}
                >
                  <Icon size={18} />
                </div>

                {/* Title */}
                <span className="text-[11px] font-bold font-mono text-white leading-tight">
                  {stage.name}
                </span>

                {/* Connecting arrow indicator for all except last */}
                {idx < 6 && (
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-600 font-bold text-xs pointer-events-none hidden md:block">
                    ►
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Concrete Walkthrough Example: Student Data to PASS */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
          {/* Example Data Input */}
          <div className="md:col-span-4 bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs">
            <div className="text-slate-400 uppercase text-[10px] font-bold mb-2">Example Input Data:</div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-300">Attendance:</span>
                <span className="text-cyan-400 font-bold">85%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Study Hours:</span>
                <span className="text-cyan-400 font-bold">6 hrs/day</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Previous Score:</span>
                <span className="text-cyan-400 font-bold">72 / 100</span>
              </div>
            </div>
          </div>

          {/* Active Stage Deep Dive */}
          <div className="md:col-span-5 px-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Active Stage: {pipelineStages[activeStage].name}
            </span>
            <p className="text-xs text-slate-200 mt-1 leading-relaxed">
              {pipelineStages[activeStage].desc}
            </p>
          </div>

          {/* Prediction Result Output */}
          <div className="md:col-span-3 bg-emerald-950/50 border border-emerald-500/40 rounded-xl p-3 text-center flex flex-col items-center justify-center">
            <span className="text-[10px] font-mono uppercase text-emerald-300 font-bold">Model Output</span>
            <span className="text-lg font-bold text-white mt-0.5 flex items-center gap-1 font-mono">
              PASS <span className="text-emerald-400">✅</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400">Confidence: 84.7%</span>
          </div>
        </div>
      </div>

      {/* Prominent Architectural Takeaway Quote (CRITICAL REQUIREMENT) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative bg-gradient-to-r from-violet-950/90 via-slate-900/90 to-cyan-950/90 border-2 border-violet-500/50 rounded-2xl p-4 text-center shadow-xl backdrop-blur-md"
      >
        <p className="text-base md:text-lg font-bold text-white tracking-wide font-sans">
          “Quantum computing <span className="text-rose-400 font-extrabold underline decoration-rose-500">does not replace</span> machine learning. It becomes{" "}
          <span className="text-cyan-300 font-extrabold underline decoration-cyan-400">part of the learning pipeline</span>.”
        </p>
        <span className="text-[11px] font-mono text-violet-300/80 mt-1 block">
          Hybrid Quantum-Classical Co-Processing (NISQ Era Paradigm)
        </span>
      </motion.div>
    </div>
  );
}
