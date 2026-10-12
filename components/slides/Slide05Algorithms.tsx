"use client";

import React, { useState } from "react";
import { QuantumCircuit } from "../quantum/QuantumCircuit";

export function Slide05Algorithms() {
  const [activeGate, setActiveGate] = useState<number>(1);

  const gateExplanations = [
    {
      step: "01",
      gate: "Hadamard (H)",
      code: "qc.h(0); qc.h(1)",
      meaning: "Initializes both qubits into equal superposition. Models the 1.5+ crore undecided Tamil Nadu voters who hold no prior party allegiance.",
      color: "text-cyan-300 border-cyan-500/40 bg-cyan-950/40",
    },
    {
      step: "02",
      gate: "Rotation-Y (RY)",
      code: "qc.ry(theta_youth, 0); qc.ry(theta_swing, 1)",
      meaning: "Angle Embedding: Encodes real demographic features (Youth Turnout % & Anti-Incumbency Index) as continuous rotation angles onto the Bloch sphere.",
      color: "text-sky-300 border-sky-500/40 bg-sky-950/40",
    },
    {
      step: "03",
      gate: "Controlled-NOT (CNOT)",
      code: "qc.cx(0, 1)",
      meaning: "Creates quantum entanglement between youth sentiment and coalition partners, modeling Vijay's power-sharing alliance multiplier.",
      color: "text-purple-300 border-purple-500/40 bg-purple-950/40",
    },
    {
      step: "04",
      gate: "Variational Layer (Ansatz)",
      code: "qc.ry(w[0], 0); qc.ry(w[1], 1)",
      meaning: "Parameterized weights updated iteratively by Python's classical optimizer (Adam/COBYLA) to learn election voting patterns.",
      color: "text-amber-300 border-amber-500/40 bg-amber-950/40",
    },
    {
      step: "05",
      gate: "Measurement",
      code: "qc.measure_all()",
      meaning: "Simulates 1,000 voting booth EVM button presses, sampling the probability distribution across all 4 election outcomes.",
      color: "text-emerald-300 border-emerald-500/40 bg-emerald-950/40",
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-14 select-none overflow-hidden bg-[#05070e]">
      {/* Slide Header */}
      <div className="z-10">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
            Slide 05 • Python Implementation
          </span>
          <span className="text-xs font-mono text-slate-500">PRESENTER 02</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-sans">
          WRITING THE QUANTUM CIRCUIT IN PYTHON
        </h2>
        <p className="text-sm sm:text-lg lg:text-xl text-slate-300 mt-1 font-medium">
          Under 15 Lines of Qiskit Code Modeling Tamil Nadu Election Complexity
        </p>
      </div>

      {/* Main Grid: Left Code Editor + Right Circuit Visualizer & Explanations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-stretch max-w-[1720px] mx-auto w-full z-10">
        {/* Left Column (6 cols): Clean Python Code Presentation */}
        <div className="lg:col-span-6 bg-slate-950/95 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between">
          {/* Editor Header Bar */}
          <div className="px-6 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between font-mono text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80" />
              <span className="w-3.5 h-3.5 rounded-full bg-green-500/80" />
              <span className="text-slate-200 font-bold ml-1.5">tvk_quantum_model.py</span>
            </div>
            <span className="text-xs text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-lg border border-cyan-800/40 font-bold">
              Python 3.11 + Qiskit 1.0
            </span>
          </div>

          {/* Code Lines with Click-to-Inspect Handlers */}
          <div className="p-6 font-mono text-xs sm:text-sm lg:text-base leading-relaxed space-y-2 text-slate-200">
            <div className="text-purple-400">from qiskit import QuantumCircuit</div>
            <div className="text-white font-bold">qc = QuantumCircuit(2)</div>
            <div className="text-slate-700 py-0.5"># ──────────────────────────────────────────</div>

            {/* Gate 1: H */}
            <div
              onClick={() => setActiveGate(0)}
              className={`p-2 rounded-xl cursor-pointer flex items-center justify-between transition-all ${
                activeGate === 0 ? "bg-cyan-950 border border-cyan-400 text-white font-bold shadow-md" : "hover:bg-slate-900"
              }`}
            >
              <span>qc.h([0, 1])</span>
              <span className="text-xs text-cyan-400 font-sans">01 • Superposition Baseline</span>
            </div>

            {/* Gate 2: RY Features */}
            <div
              onClick={() => setActiveGate(1)}
              className={`p-2 rounded-xl cursor-pointer flex items-center justify-between transition-all ${
                activeGate === 1 ? "bg-sky-950 border border-sky-400 text-white font-bold shadow-md" : "hover:bg-slate-900"
              }`}
            >
              <span>qc.ry(theta_youth, 0); qc.ry(theta_swing, 1)</span>
              <span className="text-xs text-sky-400 font-sans">02 • TN Demographics</span>
            </div>

            {/* Gate 3: CNOT */}
            <div
              onClick={() => setActiveGate(2)}
              className={`p-2 rounded-xl cursor-pointer flex items-center justify-between transition-all ${
                activeGate === 2 ? "bg-purple-950 border border-purple-400 text-white font-bold shadow-md" : "hover:bg-slate-900"
              }`}
            >
              <span>qc.cx(0, 1)</span>
              <span className="text-xs text-purple-400 font-sans">03 • Coalition Multiplier</span>
            </div>

            {/* Gate 4: RY Weights */}
            <div
              onClick={() => setActiveGate(3)}
              className={`p-2 rounded-xl cursor-pointer flex items-center justify-between transition-all ${
                activeGate === 3 ? "bg-amber-950 border border-amber-400 text-white font-bold shadow-md" : "hover:bg-slate-900"
              }`}
            >
              <span>qc.ry(w[0], 0); qc.ry(w[1], 1)</span>
              <span className="text-xs text-amber-400 font-sans">04 • Variational Ansatz</span>
            </div>

            {/* Gate 5: Measure */}
            <div
              onClick={() => setActiveGate(4)}
              className={`p-2 rounded-xl cursor-pointer flex items-center justify-between transition-all ${
                activeGate === 4 ? "bg-emerald-950 border border-emerald-400 text-white font-bold shadow-md" : "hover:bg-slate-900"
              }`}
            >
              <span>qc.measure_all()</span>
              <span className="text-xs text-emerald-400 font-sans">05 • 1,000 Booth Shots</span>
            </div>

            <div className="text-slate-700 pt-3 border-t border-slate-900">
              # Classical Scikit-Learn Training Loop:
            </div>
            <div className="text-slate-400">optimizer.minimize(loss_fn, initial_weights)</div>
          </div>

          <div className="px-6 py-3 bg-slate-900/60 border-t border-slate-800 text-xs font-mono text-slate-400 flex justify-between">
            <span>Click any code line to inspect quantum operation</span>
            <span className="text-cyan-400 font-bold">Circuit Depth: 4 Gates</span>
          </div>
        </div>

        {/* Right Column (6 cols): Circuit Schematic Vector & Gate Deep Dive */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-5">
          <QuantumCircuit theta0={1.84} theta1={2.46} w0={0.84} w1={1.28} />

          {/* Active Gate Deep Dive Card */}
          {(() => {
            const current = gateExplanations[activeGate];
            return (
              <div className={`p-6 lg:p-7 rounded-3xl border ${current.color} shadow-2xl flex flex-col justify-between`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider">
                    Step {current.step} • {current.gate}
                  </span>
                  <span className="font-mono text-xs px-3 py-1 rounded-xl bg-black/70 text-white font-bold">
                    {current.code}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed mt-1">
                  {current.meaning}
                </p>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs sm:text-sm font-mono text-slate-500 border-t border-slate-900 pt-3 z-10">
        <span>Slide 05 • Python Qiskit Circuit</span>
        <span>Next: Slide 06 The Hybrid Quantum-Classical ML Loop ➔</span>
      </div>
    </div>
  );
}
