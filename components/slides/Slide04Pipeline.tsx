"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export function Slide04Pipeline() {
  const [measurementOutcome, setMeasurementOutcome] = useState<string | null>(null);

  const handleMeasure = () => {
    // 75% probability of correlated ruling TVK retention state |11>
    const outcome = Math.random() > 0.25 ? "11" : "00";
    setMeasurementOutcome(outcome);
  };

  const handleReset = () => {
    setMeasurementOutcome(null);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 select-none overflow-hidden bg-[#05070e]">
      {/* Slide Header */}
      <div className="z-10">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 bg-purple-950/80 px-2.5 py-0.5 rounded-full border border-purple-500/30">
            Slide 04 • Multi-Qubit Physics
          </span>
          <span className="text-xs font-mono text-slate-500">PRESENTER 01</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-sans">
          QUANTUM ENTANGLEMENT: THE WELFARE SCHEME MULTIPLIER
        </h2>
        <p className="text-sm sm:text-lg lg:text-xl text-slate-300 mt-1 font-medium">
          Non-Separable Joint States: |Φ⁺⟩ = (|00⟩ + |11⟩) / √2 • Vettri Payanam & Annapoorani Super 6 Synergy
        </p>
      </div>

      {/* Main Grid: Left Welfare Entanglement Logic + Right Interactive Bell State Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-stretch max-w-[1720px] mx-auto w-full z-10">
        {/* Left Column (5 cols): TVK Welfare Multiplier Context */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-5">
          <div className="bg-slate-950/95 border border-slate-800 rounded-3xl p-6 lg:p-8 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs sm:text-sm font-mono uppercase text-amber-400 font-bold">
                RULING WELFARE DOCTRINE
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-red-950 border border-red-800 text-red-300 font-bold">
                Ruling TVK Policy
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-sans text-white">
              Synergistic Welfare Delivery: Free Bus + LPG + Cash Aid
            </h3>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              The ruling TVK government’s two flagship programs don&apos;t operate in isolation. A woman commuter who travels for free under <strong className="text-cyan-300">வெற்றிப் பயணம்</strong> and also receives 6 free LPG cylinders + ₹2,500 monthly DBT under <strong className="text-amber-300">அன்னபூரணி</strong> experiences a non-linear, compounded positive evaluation.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5 font-mono text-xs sm:text-sm">
              <span className="text-cyan-400 font-bold block">The Entanglement Equation:</span>
              <p className="text-slate-300 font-sans leading-relaxed">
                Voter satisfaction is non-separable: <strong>P(Bus ∩ LPG) ≠ P(Bus) · P(LPG)</strong>.
                When public transit satisfaction rotates Qubit 0 into state |1⟩, the CNOT gate entangles and amplifies Qubit 1 instantaneously!
              </p>
            </div>
          </div>

          {/* CNOT Gate Mathematical Foundation */}
          <div className="bg-purple-950/40 border border-purple-500/40 rounded-3xl p-5 sm:p-6 shadow-xl flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-purple-300 font-bold block">
                The CNOT Entangler Gate
              </span>
              <span className="text-base sm:text-lg font-bold text-white font-sans block">
                Control: Vettri Payanam ➔ Target: Household Retention
              </span>
              <span className="text-xs sm:text-sm text-slate-300 font-sans block">
                Creates a Bell state |Φ⁺⟩ that explains the 20,000+ vote landslide retention
              </span>
            </div>
            <span className="text-3xl shrink-0 ml-3">⚡</span>
          </div>
        </div>

        {/* Right Column (7 cols): Interactive Bell State Simulator */}
        <div className="lg:col-span-7 bg-slate-950/95 border border-purple-500/30 rounded-3xl p-6 lg:p-8 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs sm:text-sm font-mono uppercase text-purple-300 font-bold block">
                  BELL STATE CONDUIT
                </span>
                <span className="text-base sm:text-lg font-sans font-bold text-white mt-0.5 block">
                  Simulating Correlated Policy Entanglement Across Tamil Nadu
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleMeasure}
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs sm:text-sm font-bold transition-all shadow-lg cursor-pointer"
                >
                  ⚡ MEASURE SYSTEM
                </button>
                {measurementOutcome && (
                  <button
                    onClick={handleReset}
                    className="px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-mono text-xs sm:text-sm transition-all border border-slate-800 cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            {/* Visual Two-Qubit Entangled Bridge */}
            <div className="py-8 flex items-center justify-between px-6">
              {/* Qubit 0: Vettri Payanam Bus Scheme */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-32 h-32 rounded-3xl flex flex-col items-center justify-center border-2 transition-all duration-500 ${
                    measurementOutcome === null
                      ? "bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] animate-pulse"
                      : measurementOutcome === "11"
                      ? "bg-red-950/80 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.5)]"
                      : "bg-slate-900 border-slate-600 shadow-none"
                  }`}
                >
                  <span className="text-xs font-mono text-slate-400 uppercase">Qubit 0</span>
                  <span className="text-3xl font-mono font-black text-white mt-0.5">
                    {measurementOutcome === null ? "|ψ₀⟩" : `|${measurementOutcome[0]}⟩`}
                  </span>
                  <span className="text-xs font-mono text-cyan-300 mt-1">
                    {measurementOutcome === null ? "Superposed" : measurementOutcome === "11" ? "Free Bus Pass" : "Opposition"}
                  </span>
                </div>
                <span className="text-sm font-mono font-bold text-white mt-2.5">வெற்றிப் பயணம் (Bus)</span>
              </div>

              {/* Quantum Entanglement Conduit */}
              <div className="flex-1 mx-6 relative flex flex-col items-center">
                <div className="w-full h-4 rounded-full bg-slate-900 border border-purple-500/40 overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-500"
                    animate={{
                      x: ["-100%", "100%"],
                      opacity: measurementOutcome === null ? [0.4, 0.9, 0.4] : 0.2,
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.0,
                      ease: "linear",
                    }}
                    style={{ width: "45%" }}
                  />
                </div>
                <span className="text-xs font-mono text-purple-300 mt-2 font-bold uppercase tracking-wider">
                  {measurementOutcome === null
                    ? "ENTANGLED BELL STATE: (|00⟩ + |11⟩)/√2"
                    : `INSTANTANEOUSLY COLLAPSED: |${measurementOutcome}⟩`}
                </span>
              </div>

              {/* Qubit 1: Annapoorani Super 6 LPG & DBT Scheme */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-32 h-32 rounded-3xl flex flex-col items-center justify-center border-2 transition-all duration-500 ${
                    measurementOutcome === null
                      ? "bg-slate-900 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)] animate-pulse"
                      : measurementOutcome === "11"
                      ? "bg-red-950/80 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.5)]"
                      : "bg-slate-900 border-slate-600 shadow-none"
                  }`}
                >
                  <span className="text-xs font-mono text-slate-400 uppercase">Qubit 1</span>
                  <span className="text-3xl font-mono font-black text-white mt-0.5">
                    {measurementOutcome === null ? "|ψ₁⟩" : `|${measurementOutcome[1]}⟩`}
                  </span>
                  <span className="text-xs font-mono text-amber-300 mt-1">
                    {measurementOutcome === null ? "Superposed" : measurementOutcome === "11" ? "LPG + ₹2.5K DBT" : "Opposition"}
                  </span>
                </div>
                <span className="text-sm font-mono font-bold text-white mt-2.5">அன்னபூரணி (LPG & DBT)</span>
              </div>
            </div>

            {/* Measurement Status Callout */}
            <div className="mt-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 font-mono text-xs sm:text-sm">
              {measurementOutcome === null ? (
                <div className="text-slate-400 flex items-center justify-between">
                  <span>State vector currently in superposition:</span>
                  <span className="text-cyan-400 font-bold">50% |00⟩ + 50% |11⟩ (Zero Cross-Terms)</span>
                </div>
              ) : measurementOutcome === "11" ? (
                <div className="text-emerald-400 flex items-center justify-between font-bold">
                  <span>Both schemes correlated simultaneously:</span>
                  <span>|11⟩ Ruling TVK Landslide Retained (+20,040 votes)</span>
                </div>
              ) : (
                <div className="text-amber-400 flex items-center justify-between font-bold">
                  <span>Measurement collapsed into basis state:</span>
                  <span>|00⟩ Opposition Vote</span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs sm:text-sm font-sans text-slate-300 flex items-center justify-between">
            <span>When two policies entangle, evaluating one instantly reveals the other.</span>
            <span className="text-purple-400 font-mono font-bold">P(|01⟩) = P(|10⟩) = 0</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs sm:text-sm font-mono text-slate-500 border-t border-slate-900 pt-3 z-10">
        <span>Slide 04 • Multi-Qubit Entanglement</span>
        <span>Next: Slide 05 Writing the Quantum Circuit in Python ➔</span>
      </div>
    </div>
  );
}
