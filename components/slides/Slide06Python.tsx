"use client";

import React, { useState } from "react";
import { Database, Binary, Cpu, Activity, RefreshCw, Sliders } from "lucide-react";

export function Slide06Python() {
  const [selectedStep, setSelectedStep] = useState<number>(2);

  const loopSteps = [
    {
      num: "01",
      name: "TN WELFARE & BOOTH DATA",
      sub: "Delivery & Public Ratings",
      icon: Database,
      domain: "Classical Input",
      desc: "Real tabular inputs from 65,000 polling booths: Vettri Payanam free bus usage, Annapoorani 6 free LPG cylinders + ₹2,500 monthly DBT delivery, and constituency ratings.",
      color: "border-slate-800 bg-slate-950/80 text-slate-300",
    },
    {
      num: "02",
      name: "FEATURE EMBEDDING",
      sub: "Ry(θ) Angle Mapping",
      icon: Binary,
      domain: "Quantum Interface",
      desc: "Classical governance metrics are normalized into angles [0, π] and rotated onto the Bloch sphere to create continuous quantum state vectors.",
      color: "border-cyan-500/40 bg-cyan-950/40 text-cyan-200",
    },
    {
      num: "03",
      name: "QUANTUM CIRCUIT",
      sub: "Entangled Ansatz",
      icon: Cpu,
      domain: "Quantum QPU",
      desc: "Hadamard superposition + CNOT welfare entanglement + parameterized rotation gates evaluate voter interference in Hilbert space.",
      color: "border-purple-500/40 bg-purple-950/40 text-purple-200",
    },
    {
      num: "04",
      name: "1,000 SHOTS MEASUREMENT",
      sub: "EVM State Sampling",
      icon: Activity,
      domain: "Quantum QPU",
      desc: "Collapses wave functions across basis states: |00⟩ Opposition DMK, |01⟩ AIADMK, |10⟩ Third Front, |11⟩ Ruling TVK Retained.",
      color: "border-emerald-500/40 bg-emerald-950/40 text-emerald-200",
    },
    {
      num: "05",
      name: "CLASSICAL OPTIMIZER",
      sub: "Adam / COBYLA",
      icon: RefreshCw,
      domain: "Classical Python",
      desc: "Calculates cross-entropy loss against certified by-election victory margins and computes quantum gradients via the Parameter Shift Rule.",
      color: "border-amber-500/40 bg-amber-950/40 text-amber-200",
    },
    {
      num: "06",
      name: "UPDATED WEIGHTS",
      sub: "w ← w - η∇L",
      icon: Sliders,
      domain: "Classical Python",
      desc: "Variational weights (w₀, w₁) are calibrated iteratively until the quantum model accurately maps non-linear governance retention waves.",
      color: "border-slate-800 bg-slate-950/80 text-slate-300",
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 select-none overflow-hidden bg-[#05070e]">
      {/* Slide Header */}
      <div className="z-10">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 bg-purple-950/80 px-2.5 py-0.5 rounded-full border border-purple-500/30">
            Slide 06 • Hybrid Algorithm Architecture
          </span>
          <span className="text-xs font-mono text-slate-500">PRESENTER 02</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-sans">
          THE HYBRID QUANTUM-CLASSICAL ML LOOP
        </h2>
        <p className="text-sm sm:text-lg lg:text-xl text-slate-300 mt-1 font-medium">
          How Quantum State Spaces Train with Python Classical Optimizers to Predict Retention
        </p>
      </div>

      {/* Main Center Area: 6-Step Loop + Deep Dive Inspection Card */}
      <div className="my-auto space-y-6 max-w-[1720px] mx-auto w-full z-10">
        {/* 6-Step Horizontal Pipeline Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {loopSteps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = selectedStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setSelectedStep(idx)}
                className={`cursor-pointer rounded-2xl p-4 flex flex-col items-center text-center border transition-all ${
                  isSelected
                    ? "border-cyan-400 bg-cyan-950/80 shadow-[0_0_25px_rgba(6,182,212,0.35)] scale-102"
                    : `${step.color} hover:border-slate-600`
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center mb-2">
                  <Icon size={20} className="text-white" />
                </div>
                <span className="text-xs font-mono text-slate-400 block mb-0.5">Step {step.num}</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-white block leading-tight">
                  {step.name}
                </span>
                <span className="text-xs font-mono text-slate-400 block mt-1">
                  {step.sub}
                </span>
              </div>
            );
          })}
        </div>

        {/* Concrete Deep Dive Inspection Card */}
        {(() => {
          const active = loopSteps[selectedStep];
          return (
            <div className="bg-slate-950/95 border border-slate-800 rounded-3xl p-6 lg:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-mono px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-bold">
                    Step {active.num} • {active.domain}
                  </span>
                  <span className="text-lg sm:text-2xl font-bold text-white font-sans">{active.name}</span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans pt-1">
                  {active.desc}
                </p>
              </div>

              {/* Real Governance Data Concrete Example */}
              <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-5 font-mono text-xs sm:text-sm text-slate-300 min-w-[360px] space-y-2 shadow-lg">
                <span className="text-xs text-amber-400 uppercase tracking-wider font-bold block">
                  Ground Truth By-Election Data (Oct 9, 2026):
                </span>
                <div className="flex justify-between">
                  <span className="text-slate-400">Madurantakam (SC):</span>
                  <span className="text-red-400 font-bold">74,048 votes (+20K margin)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Dharapuram (West):</span>
                  <span className="text-red-400 font-bold">66,841 votes (+9.4K margin)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Welfare Delivery Factor:</span>
                  <span className="text-cyan-400 font-bold">85% Entangled</span>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between text-emerald-400 font-bold">
                  <span>Actual ECI Result:</span>
                  <span>Ruling TVK: 2 • Opposition DMK: 0</span>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Big Definition Callout: What Makes This QML */}
        <div className="p-5 rounded-3xl bg-gradient-to-r from-red-950/40 via-slate-900/90 to-cyan-950/40 border border-cyan-500/40 text-center">
          <h3 className="text-lg sm:text-2xl font-bold font-sans text-white">
            “Quantum Machine Learning doesn&apos;t replace classical Python AI.”
          </h3>
          <p className="text-sm sm:text-base text-slate-300 font-sans mt-1">
            It offloads the complex <span className="text-cyan-300 font-bold">234-constituency entangled state space</span> to quantum Hilbert vectors, while <span className="text-amber-300 font-bold">Python classical optimizers</span> iteratively tune the weights!
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs sm:text-sm font-mono text-slate-500 border-t border-slate-900 pt-3 z-10">
        <span>Slide 06 • The Hybrid QML Loop</span>
        <span>Next: Slide 07 Classical ML vs Quantum ML: Why QML Won ➔</span>
      </div>
    </div>
  );
}
