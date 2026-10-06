"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export function EntanglementLink() {
  const [collapsedState, setCollapsedState] = useState<string | null>(null);

  const handleMeasure = () => {
    // Entangled Bell state (|00> + |11>) / sqrt(2)
    const outcome = Math.random() > 0.5 ? "0" : "1";
    setCollapsedState(outcome);
  };

  const handleReset = () => {
    setCollapsedState(null);
  };

  return (
    <div className="flex flex-col h-full justify-between bg-slate-950/80 border border-violet-500/30 rounded-2xl p-5 backdrop-blur-md">
      {/* Title & Analogy Header */}
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-ping" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-violet-200 font-mono">
              Quantum Entanglement (|Φ⁺⟩ = (|00⟩ + |11⟩)/√2)
            </h4>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleMeasure}
              className="text-xs font-mono px-3 py-1 rounded bg-violet-600 hover:bg-violet-500 text-white font-semibold shadow-sm transition-all"
            >
              ⚡ Measure Qubit A
            </button>
            {collapsedState && (
              <button
                onClick={handleReset}
                className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all"
              >
                Reset State
              </button>
            )}
          </div>
        </div>

        <div className="mt-1.5 flex items-center gap-2 bg-violet-950/40 border border-violet-800/40 rounded-lg px-3 py-1.5">
          <span className="text-sm">🦸‍♂️⚡🦸‍♀️</span>
          <p className="text-xs text-violet-200 italic font-sans">
            <strong>Superhero Analogy:</strong> “Think of two cosmic explorers bound by an energy covenant.
            Whatever decision one makes, the other’s state is instantaneously correlated — even across galaxies.”
          </p>
        </div>
      </div>

      {/* Vector Visualization: Qubit A <==== Quantum Link ====> Qubit B */}
      <div className="relative py-4 flex items-center justify-between px-6">
        {/* Qubit A */}
        <div className="flex flex-col items-center">
          <div
            className={`w-24 h-24 rounded-2xl flex flex-col items-center justify-center border-2 transition-all duration-500 ${
              collapsedState === null
                ? "bg-gradient-to-br from-cyan-950/70 to-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.3)] animate-pulse"
                : collapsedState === "0"
                ? "bg-slate-900 border-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.5)]"
                : "bg-slate-900 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.5)]"
            }`}
          >
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Qubit A</span>
            <span className="text-2xl font-mono font-bold text-white mt-1">
              {collapsedState === null ? "|ψ_A⟩" : `|${collapsedState}⟩`}
            </span>
            <span className="text-[10px] font-mono text-cyan-300 mt-1">
              {collapsedState === null ? "Superposed" : "Measured"}
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 mt-2">Station Earth</span>
        </div>

        {/* Animated Quantum Entanglement Bridge */}
        <div className="flex-1 mx-6 relative flex flex-col items-center">
          <div className="w-full relative h-12 flex items-center justify-center">
            {/* Background Conduit Tube */}
            <div className="w-full h-3 rounded-full bg-slate-900 border border-violet-500/40 overflow-hidden relative">
              {/* Traveling energy beam */}
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-500"
                animate={{
                  x: ["-100%", "100%"],
                  opacity: collapsedState === null ? [0.4, 0.9, 0.4] : 0.2,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "linear",
                }}
                style={{ width: "40%" }}
              />
            </div>

            {/* Glowing Center Core */}
            <div className="absolute flex items-center justify-center">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-violet-900/90 border border-violet-400 text-violet-100 shadow-md">
                {collapsedState === null ? "ENTANGLED (EPR PAIR)" : `CORRELATED: |${collapsedState}${collapsedState}⟩`}
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono text-slate-400 mt-1">
            Bell State: |Φ⁺⟩ = (|00⟩ + |11⟩) / √2
          </span>
        </div>

        {/* Qubit B */}
        <div className="flex flex-col items-center">
          <div
            className={`w-24 h-24 rounded-2xl flex flex-col items-center justify-center border-2 transition-all duration-500 ${
              collapsedState === null
                ? "bg-gradient-to-br from-violet-950/70 to-slate-900 border-violet-400 shadow-[0_0_20px_rgba(168,85,247,0.3)] animate-pulse"
                : collapsedState === "0"
                ? "bg-slate-900 border-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.5)]"
                : "bg-slate-900 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.5)]"
            }`}
          >
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Qubit B</span>
            <span className="text-2xl font-mono font-bold text-white mt-1">
              {collapsedState === null ? "|ψ_B⟩" : `|${collapsedState}⟩`}
            </span>
            <span className="text-[10px] font-mono text-violet-300 mt-1">
              {collapsedState === null ? "Superposed" : "Correlated"}
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 mt-2">Station Andromeda</span>
        </div>
      </div>

      {/* Critical Scientific Note Banner */}
      <div className="mt-2 bg-slate-900/90 border border-violet-500/30 rounded-xl p-2.5 flex items-start gap-2.5">
        <span className="text-violet-400 text-base">🛡️</span>
        <p className="text-[11px] text-slate-300 leading-snug">
          <strong className="text-violet-300">Crucial Physics Constraint:</strong> Entanglement creates{" "}
          <em>correlations</em> between quantum states upon measurement.{" "}
          <strong className="text-rose-300">
            It does NOT enable faster-than-light communication
          </strong>{" "}
          (No-Communication Theorem), because neither party can dictate which random outcome occurs without classical transmission.
        </p>
      </div>
    </div>
  );
}
