"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw, Terminal, CheckCircle2 } from "lucide-react";
import { QuantumCircuit } from "../quantum/QuantumCircuit";

export function Slide06Python() {
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [executionOutput, setExecutionOutput] = useState<{
    state: string;
    counts: Record<string, number>;
    prediction: string;
  } | null>(null);

  const handleRunCircuit = () => {
    setIsRunning(true);
    setActiveStep(0);
    setExecutionOutput(null);

    // Sequence through circuit steps: H -> RY -> CX -> RY(w) -> Measure
    setTimeout(() => setActiveStep(1), 500);  // RY encoding
    setTimeout(() => setActiveStep(2), 1000); // CX
    setTimeout(() => setActiveStep(3), 1500); // RY variational
    setTimeout(() => setActiveStep(4), 2000); // Measurement
    setTimeout(() => {
      setIsRunning(false);
      setExecutionOutput({
        state: "Collapsed to computational eigenstate |11⟩",
        counts: { "00": 12, "01": 18, "10": 21, "11": 49 },
        prediction: "PASS (Strong Candidate) - Confidence 84.7%",
      });
    }, 2500);
  };

  const handleReset = () => {
    setActiveStep(-1);
    setIsRunning(false);
    setExecutionOutput(null);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-10 select-none overflow-hidden">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400 bg-violet-950/80 px-2.5 py-0.5 rounded-full border border-violet-500/30">
            Slide 06 • Implementation
          </span>
          <span className="text-xs font-mono text-slate-500">PRESENTER 02</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              🐍 Python Implementation
            </h2>
            <p className="text-sm md:text-base text-slate-300 mt-0.5">
              “Let’s build one.” Practical Qiskit circuit modeling in under 15 lines of code.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleRunCircuit}
              disabled={isRunning}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all shadow-lg ${
                isRunning
                  ? "bg-cyan-950 border border-cyan-500 text-cyan-300 animate-pulse cursor-wait"
                  : "bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 hover:text-white"
              }`}
            >
              <Play size={14} fill="currentColor" />
              <span>{isRunning ? "EXECUTING CIRCUIT..." : "▶ RUN QUANTUM CIRCUIT"}</span>
            </button>

            {executionOutput && (
              <button
                onClick={handleReset}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all"
                title="Reset simulation"
              >
                <RotateCcw size={15} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid: Code Editor on Left & Circuit Visualizer on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto items-stretch">
        {/* Left: Beautiful Code Editor UI */}
        <div className="lg:col-span-6 bg-slate-950/90 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between shadow-2xl backdrop-blur-md">
          {/* Editor Window Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400">qml_vqc_model.py</span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40">
              Qiskit 1.0+
            </span>
          </div>

          {/* Syntax Highlighted Code Lines with Operation Annotations */}
          <div className="p-4 font-mono text-[11px] md:text-xs leading-relaxed space-y-1">
            <div className="text-purple-400">
              <span className="text-slate-500">1 </span>from qiskit import QuantumCircuit
            </div>
            <div className="text-slate-300">
              <span className="text-slate-500">2 </span>qc = QuantumCircuit(2)
            </div>
            <div className="text-slate-600">
              <span className="text-slate-500">3 </span>
            </div>

            {/* Line H */}
            <div
              className={`p-1 rounded flex items-center justify-between transition-colors ${
                activeStep === 0 ? "bg-cyan-950/90 border-l-2 border-cyan-400 text-white" : "text-slate-300"
              }`}
            >
              <div>
                <span className="text-slate-500">4 </span>qc.h(0); qc.h(1)
              </div>
              <span className="text-[10px] text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded font-bold">
                H ➔ Superposition
              </span>
            </div>

            {/* Line RY */}
            <div
              className={`p-1 rounded flex items-center justify-between transition-colors ${
                activeStep === 1 ? "bg-sky-950/90 border-l-2 border-sky-400 text-white" : "text-slate-300"
              }`}
            >
              <div>
                <span className="text-slate-500">5 </span>qc.ry(theta[0], 0); qc.ry(theta[1], 1)
              </div>
              <span className="text-[10px] text-sky-400 bg-sky-950/60 px-1.5 py-0.5 rounded font-bold">
                RY ➔ Rotation / feature
              </span>
            </div>

            {/* Line CX */}
            <div
              className={`p-1 rounded flex items-center justify-between transition-colors ${
                activeStep === 2 ? "bg-purple-950/90 border-l-2 border-purple-400 text-white" : "text-slate-300"
              }`}
            >
              <div>
                <span className="text-slate-500">6 </span>qc.cx(0, 1)
              </div>
              <span className="text-[10px] text-purple-400 bg-purple-950/60 px-1.5 py-0.5 rounded font-bold">
                CX ➔ Entanglement
              </span>
            </div>

            {/* Line Measure */}
            <div
              className={`p-1 rounded flex items-center justify-between transition-colors ${
                activeStep === 4 ? "bg-emerald-950/90 border-l-2 border-emerald-400 text-white" : "text-slate-300"
              }`}
            >
              <div>
                <span className="text-slate-500">7 </span>qc.measure_all()
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded font-bold">
                Measure ➔ Classical result
              </span>
            </div>

            <div className="text-slate-600 pt-2 border-t border-slate-900">
              <span className="text-slate-500">8 </span># Scikit-learn familiar hybrid interface:
            </div>
            <div className="text-emerald-300">
              <span className="text-slate-500">9 </span>model.fit(X_train, y_train)
            </div>
            <div className="text-cyan-300">
              <span className="text-slate-500">10</span>prediction = model.predict(X_test)
            </div>
          </div>

          {/* Editor Status Bar */}
          <div className="px-4 py-2 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>Encoding: Angle Embedding</span>
            <span>Qubits: 2</span>
            <span>Ansatz: RealAmplitudes</span>
          </div>
        </div>

        {/* Right: Interactive Quantum Circuit Animation & Readout */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-3">
          <QuantumCircuit
            activeGateIndex={activeStep}
            isExecuting={isRunning}
            theta0={1.76}
            theta1={2.45}
          />

          {/* Live Circuit Execution Console Output */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-4 font-mono text-xs flex flex-col justify-between flex-1">
            <div className="flex items-center gap-2 text-slate-400 text-[11px] mb-2 border-b border-slate-800 pb-1.5">
              <Terminal size={14} className="text-cyan-400" />
              <span>CIRCUIT EXECUTION TELEMETRY</span>
            </div>

            {executionOutput ? (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between text-cyan-300">
                  <span>State Collapse:</span>
                  <span className="font-bold">{executionOutput.state}</span>
                </div>

                <div className="flex items-center justify-between text-slate-300 bg-slate-900/80 p-2 rounded-lg">
                  <span>Counts: 00: {executionOutput.counts["00"]}%</span>
                  <span>01: {executionOutput.counts["01"]}%</span>
                  <span>10: {executionOutput.counts["10"]}%</span>
                  <span className="text-cyan-300 font-bold">11: {executionOutput.counts["11"]}%</span>
                </div>

                <div className="flex items-center justify-between bg-emerald-950/60 border border-emerald-500/40 p-2 rounded-lg text-emerald-300 font-bold">
                  <span>Final Model Prediction:</span>
                  <span>{executionOutput.prediction}</span>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center py-6 text-slate-500 text-center">
                <span className="text-2xl mb-1">⚛️</span>
                <span>Click &quot;▶ RUN QUANTUM CIRCUIT&quot; above to animate qubit state evolution</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Synergy Banner */}
      <div className="flex items-center justify-between border-t border-slate-800/80 pt-2 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-3">
          <span className="text-cyan-300 font-bold">Python</span>
          <span className="text-slate-600">+</span>
          <span className="text-purple-300 font-bold">Qiskit</span>
          <span className="text-slate-600">+</span>
          <span className="text-emerald-300 font-bold">Machine Learning</span>
        </div>
        <span className="text-[11px] text-slate-500">
          Next: Slide 7 Full Live Interactive Web Demo ➔
        </span>
      </div>
    </div>
  );
}
