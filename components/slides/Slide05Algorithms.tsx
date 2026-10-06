"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Layers, Cpu, Network } from "lucide-react";

export function Slide05Algorithms() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(0); // Default to VQC

  const algorithms = [
    {
      id: 0,
      code: "VQC",
      name: "Variational Quantum Classifier",
      isDemo: true,
      icon: Cpu,
      gradient: "from-cyan-950/80 to-violet-950/70",
      borderColor: "border-cyan-400",
      accentColor: "text-cyan-300",
      pipeline: ["Data", "Quantum Feature Map", "Parameterized Circuit", "Measurement", "Prediction"],
      description:
        "Uses a parameterized quantum circuit (PQC / ansatz) as a hypothesis function. Variational rotation angles are trained iteratively using classical gradient-based optimizers.",
      advantage: "Fault-tolerant to near-term noise; highly adaptable to hybrid quantum systems.",
    },
    {
      id: 1,
      code: "QSVM",
      name: "Quantum Support Vector Machine",
      isDemo: false,
      icon: Layers,
      gradient: "from-slate-900 to-indigo-950/70",
      borderColor: "border-indigo-400/50",
      accentColor: "text-indigo-300",
      pipeline: ["Data", "Quantum Kernel", "Classical SVM", "Classification"],
      description:
        "Maps classical feature vectors non-linearly into exponentially large quantum Hilbert states K(x, z) = |⟨ψ(x)|ψ(z)⟩|² where inner products represent quantum kernel distances.",
      advantage: "Solves non-linearly separable problems directly in state space without explicit coordinate expansion.",
    },
    {
      id: 2,
      code: "QNN",
      name: "Quantum Neural Network",
      isDemo: false,
      icon: Network,
      gradient: "from-slate-900 to-purple-950/70",
      borderColor: "border-purple-400/50",
      accentColor: "text-purple-300",
      pipeline: ["Input", "Quantum Layers", "Measurement", "Output"],
      description:
        "Composes multiple variational entanglement layers analogous to hidden layers in deep learning. Employs parameterized unitary transformations U(θ) for universal function approximation.",
      advantage: "High representational expressivity with fewer active physical parameters than deep classical networks.",
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-10 select-none overflow-hidden">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400 bg-violet-950/80 px-2.5 py-0.5 rounded-full border border-violet-500/30">
            Slide 05 • Core Algorithms
          </span>
          <span className="text-xs font-mono text-slate-500">PRESENTER 02</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          ⚙️ Quantum Machine Learning Algorithms
        </h2>
        <p className="text-sm md:text-base text-slate-300 mt-1">
          Three principal paradigms uniting quantum state spaces with machine learning.
        </p>
      </div>

      {/* 3 Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto items-stretch">
        {algorithms.map((algo) => {
          const Icon = algo.icon;
          const isSelected = hoveredCard === algo.id;

          return (
            <motion.div
              key={algo.code}
              onMouseEnter={() => setHoveredCard(algo.id)}
              className={`relative rounded-2xl p-5 border flex flex-col justify-between transition-all duration-300 cursor-pointer backdrop-blur-md ${
                algo.isDemo
                  ? "border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)] bg-gradient-to-b from-cyan-950/40 to-slate-950"
                  : isSelected
                  ? "border-violet-400/80 shadow-[0_0_15px_rgba(139,92,246,0.2)] bg-slate-950/90"
                  : "border-slate-800 bg-slate-950/60 hover:border-slate-700"
              }`}
            >
              {/* Highlight Tag for VQC */}
              {algo.isDemo && (
                <div className="absolute -top-3 left-4 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold bg-gradient-to-r from-cyan-500 to-violet-500 text-slate-950 flex items-center gap-1 shadow-md">
                  <Sparkles size={11} />
                  ⭐ DEMO → VQC
                </div>
              )}

              {/* Card Top */}
              <div>
                <div className="flex items-center justify-between mb-3 mt-1">
                  <span className="text-2xl font-black font-mono tracking-tight text-white">
                    {algo.code}
                  </span>
                  <div className={`p-2 rounded-xl bg-slate-900 border border-slate-800 ${algo.accentColor}`}>
                    <Icon size={20} />
                  </div>
                </div>

                <h3 className="text-sm font-bold text-slate-200 mb-2">{algo.name}</h3>

                {/* Pipeline Flow representation */}
                <div className="py-2.5 px-2 bg-slate-900/80 rounded-xl border border-slate-800 mb-3 font-mono text-[10px]">
                  <div className="text-slate-500 uppercase tracking-wider text-[9px] mb-1">Architecture:</div>
                  <div className="flex flex-wrap items-center gap-1 text-slate-300">
                    {algo.pipeline.map((step, idx) => (
                      <React.Fragment key={step}>
                        <span
                          className={`px-1.5 py-0.5 rounded ${
                            idx === 1 || idx === 2
                              ? "bg-violet-950 text-violet-300 border border-violet-800/60"
                              : "bg-slate-800 text-slate-300"
                          }`}
                        >
                          {step}
                        </span>
                        {idx < algo.pipeline.length - 1 && (
                          <span className="text-cyan-400 font-bold">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">{algo.description}</p>
              </div>

              {/* Card Bottom / Key Advantage */}
              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <span className="text-[10px] font-mono uppercase text-slate-500 block">Core Strength:</span>
                <span className="text-xs font-medium text-slate-200">{algo.advantage}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Prominent Educational Callout for VQC */}
      <div className="bg-gradient-to-r from-cyan-950/80 via-slate-900/90 to-violet-950/80 border border-cyan-500/40 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 flex items-center justify-center font-bold text-lg">
            ⭐
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
              Why We Selected VQC for Our Technical Demo:
            </span>
            <p className="text-xs md:text-sm text-slate-200 mt-0.5">
              “VQC is ideal for our educational demonstration because it combines{" "}
              <strong className="text-white">classical optimization</strong> with a{" "}
              <strong className="text-cyan-300">parameterized quantum circuit</strong>.”
            </p>
          </div>
        </div>

        <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-cyan-900/60 border border-cyan-500/40 text-cyan-200 hidden lg:inline-block">
          Next: Python Code & Circuit Run ➔
        </span>
      </div>
    </div>
  );
}
