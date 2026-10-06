"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BlochSphere } from "../quantum/BlochSphere";
import { EntanglementLink } from "../quantum/EntanglementLink";

export function Slide03Quantum() {
  const [activeConcept, setActiveConcept] = useState<1 | 2 | 3>(1);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-10 select-none overflow-hidden">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
            Slide 03 • Fundamental Principles
          </span>
          <span className="text-xs font-mono text-slate-500">PRESENTER 01</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          🌌 The Quantum World
        </h2>
        <p className="text-sm md:text-base text-slate-300 mt-1">
          The three foundational physical phenomena powering quantum machine learning.
        </p>
      </div>

      {/* 3 Concepts Tabs */}
      <div className="flex items-center justify-center gap-3 my-2">
        <button
          onClick={() => setActiveConcept(1)}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
            activeConcept === 1
              ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
          }`}
        >
          <span>01</span>
          <span>QUBIT</span>
        </button>

        <button
          onClick={() => setActiveConcept(2)}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
            activeConcept === 2
              ? "bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
              : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
          }`}
        >
          <span>02</span>
          <span>SUPERPOSITION</span>
        </button>

        <button
          onClick={() => setActiveConcept(3)}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
            activeConcept === 3
              ? "bg-violet-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]"
              : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
          }`}
        >
          <span>03</span>
          <span>ENTANGLEMENT</span>
        </button>
      </div>

      {/* Concept Panels Display */}
      <div className="flex-1 my-auto flex items-center justify-center">
        {/* Concept 1: QUBIT */}
        {activeConcept === 1 && (
          <motion.div
            key="concept-1"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl w-full"
          >
            {/* Visual Vector Comparison */}
            <div className="bg-slate-950/80 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-md">
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block mb-4">
                State Vector Representation
              </span>

              <div className="flex items-center justify-center gap-6 py-6 bg-slate-900/60 rounded-xl border border-slate-800">
                <div className="flex flex-col items-center">
                  <span className="text-xs font-mono text-slate-400 mb-1">Classical</span>
                  <div className="w-16 h-16 rounded-xl bg-slate-800 border-2 border-slate-600 flex items-center justify-center font-mono text-2xl font-bold text-slate-200">
                    0 or 1
                  </div>
                </div>

                <div className="text-cyan-400 font-mono text-xl font-bold">⟹</div>

                <div className="flex flex-col items-center">
                  <span className="text-xs font-mono text-cyan-400 mb-1">Quantum</span>
                  <div className="px-4 py-3 rounded-xl bg-cyan-950/70 border-2 border-cyan-400 flex items-center justify-center font-mono text-base font-bold text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    α|0⟩ + β|1⟩
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-1.5 text-xs text-slate-300 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400">Normalization:</span>
                  <span className="text-cyan-300 font-bold">|α|² + |β|² = 1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Physical System:</span>
                  <span className="text-slate-200">Superconducting transmon / Trapped Ion</span>
                </div>
              </div>
            </div>

            {/* Explanation Details */}
            <div className="space-y-4">
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5">
                <h3 className="text-xl font-bold text-white mb-2">01. The Qubit</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  While a classical bit must choose between binary states 0 or 1, a <strong>qubit</strong> is a 2-level quantum mechanical system described by complex probability amplitudes $\alpha$ and $\beta$.
                </p>
                <div className="mt-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400">
                  <strong className="text-cyan-300">Why it matters for ML:</strong> High-dimensional data features can be encoded directly into quantum rotational angles $\theta$ and phases $\phi$, creating an exponential geometric feature space.
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Concept 2: SUPERPOSITION */}
        {activeConcept === 2 && (
          <motion.div
            key="concept-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-4xl w-full"
          >
            {/* Bloch Sphere */}
            <div className="md:col-span-6 flex justify-center">
              <BlochSphere size={280} interactive={true} label="Superposition: |+⟩ = (|0⟩ + |1⟩)/√2" />
            </div>

            {/* Tree Branch Diagram & Details */}
            <div className="md:col-span-6 space-y-4">
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5">
                <h3 className="text-xl font-bold text-white mb-2">02. Superposition</h3>
                <div className="font-mono text-sm text-cyan-300 bg-slate-950 p-3 rounded-xl border border-slate-800 text-center my-3">
                  <pre className="text-xs text-slate-300">
{`        |0⟩ (Amplitude α)
       /
QUBIT
       \\
        |1⟩ (Amplitude β)`}
                  </pre>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Created via the <strong>Hadamard (H) Gate</strong>. Puts the qubit into an equal combination of basis states prior to measurement.
                </p>
                <div className="mt-3 text-[11px] font-mono text-indigo-300 bg-indigo-950/50 border border-indigo-500/30 p-2.5 rounded-lg">
                  Measurement forces the wave function to collapse to either |0⟩ or |1⟩ with probabilities |α|² and |β|².
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Concept 3: ENTANGLEMENT */}
        {activeConcept === 3 && (
          <motion.div
            key="concept-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-4xl"
          >
            <EntanglementLink />
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-800/80 pt-2 text-[11px] font-mono text-slate-500">
        <span>Slide 3 of 8</span>
        <span>Click tabs 01, 02, or 03 above to examine each physical phenomenon</span>
        <span>Speaker: PRESENTER 01</span>
      </div>
    </div>
  );
}
