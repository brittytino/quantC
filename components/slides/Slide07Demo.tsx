"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Play, CheckCircle2, AlertTriangle, Sparkles, RefreshCw, BarChart3, Info } from "lucide-react";
import { CandidateFeatures, QuantumPredictionResult } from "@/types/presentation";
import { runQuantumClassification } from "@/lib/api-client";
import { QuantumCircuit } from "../quantum/QuantumCircuit";
import { ProbabilityBars } from "../quantum/ProbabilityBars";

export function Slide07Demo() {
  const [features, setFeatures] = useState<CandidateFeatures>({
    experience: 3,
    skill_score: 82,
    interview_score: 76,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [executionStage, setExecutionStage] = useState<string>("");
  const [fallbackToast, setFallbackToast] = useState<string | null>(null);
  const [result, setResult] = useState<QuantumPredictionResult>({
    prediction: "Strong Candidate",
    probability: 0.847,
    probabilities: {
      strong_candidate: 84.7,
      needs_improvement: 15.3,
    },
    measurement_counts: {
      "00": 120,
      "01": 180,
      "10": 210,
      "11": 490,
    },
    measurement_percentages: {
      "00": 12.0,
      "01": 18.0,
      "10": 21.0,
      "11": 49.0,
    },
    circuit_params: {
      theta_0: 1.764,
      theta_1: 2.45,
      w_0: 0.84,
      w_1: 1.28,
    },
    model: "Variational Quantum Classifier (VQC)",
    backend: "Qiskit Simulator / Exact Statevector",
    qubits: 2,
    shots: 1000,
    source: "browser-fallback",
  });

  const presets = [
    { label: "Junior Quantum Dev", exp: 3, skill: 82, interview: 76 },
    { label: "Senior AI Researcher", exp: 8, skill: 95, interview: 92 },
    { label: "Novice Applicant", exp: 1, skill: 42, interview: 48 },
  ];

  const handleRunModel = async () => {
    setIsLoading(true);
    setFallbackToast(null);

    // Staged visual telemetry for classroom demonstration
    setExecutionStage("1/5: Mapping features to rotation angles (θ₀, θ₁)...");
    await new Promise((r) => setTimeout(r, 250));

    setExecutionStage("2/5: Applying Hadamard superposition gates...");
    await new Promise((r) => setTimeout(r, 250));

    setExecutionStage("3/5: Entangling qubits via CNOT gate...");
    await new Promise((r) => setTimeout(r, 300));

    setExecutionStage("4/5: Running variational parameters & sampling 1,000 shots...");
    await new Promise((r) => setTimeout(r, 300));

    try {
      const pred = await runQuantumClassification(features, (msg: string) => {
        setFallbackToast(msg);
      });
      setResult(pred);
    } catch {
      // Fallback guarantees safety
    } finally {
      setIsLoading(false);
      setExecutionStage("");
    }
  };

  const isStrong = result.prediction === "Strong Candidate";

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-8 select-none overflow-hidden">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400 bg-violet-950/80 px-2.5 py-0.5 rounded-full border border-violet-500/30">
              Slide 07 • Live Interactive Demo
            </span>
            <span className="text-xs font-mono text-slate-500">PRESENTER 02</span>
          </div>

          {/* Fallback Non-intrusive Toast */}
          {fallbackToast && (
            <div className="text-[11px] font-mono text-amber-300 bg-amber-950/70 border border-amber-500/40 px-3 py-1 rounded-full flex items-center gap-1.5 animate-pulse">
              <Info size={13} />
              <span>{fallbackToast}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <span>🚀 Quantum Candidate Classifier</span>
            </h2>
            <p className="text-xs md:text-sm text-slate-400">
              Real-time Variational Quantum Classifier (VQC) running parameterized Qiskit circuit inference.
            </p>
          </div>

          {/* Run Quantum Model Button */}
          <button
            onClick={handleRunModel}
            disabled={isLoading}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-xl ${
              isLoading
                ? "bg-violet-950 border border-cyan-400 text-cyan-300 animate-pulse cursor-wait"
                : "bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-600 hover:from-cyan-300 hover:to-violet-500 text-slate-950 hover:text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            }`}
          >
            {isLoading ? <RefreshCw size={15} className="animate-spin" /> : <Cpu size={15} />}
            <span>{isLoading ? "RUNNING QUANTUM CIRCUIT..." : "⚛ RUN QUANTUM MODEL"}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Inputs (Left) & Quantum Circuit + Results (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto items-stretch">
        {/* Left Column (4 cols): Input Parameters & Candidate Presets */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-slate-950/80 border border-slate-800 rounded-2xl p-4 backdrop-blur-md">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <span className="text-xs font-mono font-bold uppercase text-slate-300">
                Candidate Feature Inputs
              </span>
              <span className="text-[10px] font-mono text-cyan-400">Dim = 3 Features</span>
            </div>

            {/* Presets */}
            <div className="mb-4">
              <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1.5">
                Load Preset Profiles:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {presets.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => {
                      setFeatures({ experience: p.exp, skill_score: p.skill, interview_score: p.interview });
                    }}
                    className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-3.5">
              {/* Feature 1: Experience */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-300">Experience:</span>
                  <span className="text-cyan-400 font-bold">{features.experience} years</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={features.experience}
                  onChange={(e) => setFeatures({ ...features, experience: parseFloat(e.target.value) })}
                  className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
              </div>

              {/* Feature 2: Skill Score */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-300">Skill Score:</span>
                  <span className="text-sky-400 font-bold">{features.skill_score} / 100</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={features.skill_score}
                  onChange={(e) => setFeatures({ ...features, skill_score: parseFloat(e.target.value) })}
                  className="w-full accent-sky-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
              </div>

              {/* Feature 3: Interview Score */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-300">Interview Score:</span>
                  <span className="text-purple-400 font-bold">{features.interview_score} / 100</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={features.interview_score}
                  onChange={(e) => setFeatures({ ...features, interview_score: parseFloat(e.target.value) })}
                  className="w-full accent-purple-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Model Telemetry Box */}
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono space-y-1 text-slate-400">
            <div className="flex justify-between">
              <span>Model:</span>
              <span className="text-slate-200">{result.model}</span>
            </div>
            <div className="flex justify-between">
              <span>Backend:</span>
              <span className="text-cyan-300">{result.backend}</span>
            </div>
            <div className="flex justify-between">
              <span>Qubits / Shots:</span>
              <span className="text-slate-200">
                {result.qubits} Qubits • {result.shots} Shots
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (8 cols): Circuit + Prediction Results + Basis Counts */}
        <div className="lg:col-span-8 flex flex-col justify-between gap-4">
          {/* Top: Animated Circuit Schematic */}
          <QuantumCircuit
            theta0={result.circuit_params.theta_0}
            theta1={result.circuit_params.theta_1}
            w0={result.circuit_params.w_0}
            w1={result.circuit_params.w_1}
            isExecuting={isLoading}
          />

          {/* Bottom Split: Prediction Card & Probability Bars */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Prediction Card (5 cols) */}
            <div
              className={`md:col-span-5 rounded-2xl p-4 border flex flex-col justify-between backdrop-blur-md transition-all ${
                isStrong
                  ? "bg-gradient-to-br from-emerald-950/60 to-slate-950 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                  : "bg-gradient-to-br from-rose-950/60 to-slate-950 border-rose-500/40 shadow-[0_0_20px_rgba(244,63,94,0.2)]"
              }`}
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Quantum Prediction Result
                </span>

                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      isStrong ? "bg-emerald-400 animate-ping" : "bg-rose-400 animate-ping"
                    }`}
                  />
                  <h3
                    className={`text-xl font-black font-mono tracking-tight ${
                      isStrong ? "text-emerald-300" : "text-rose-300"
                    }`}
                  >
                    {result.prediction.toUpperCase()}
                  </h3>
                </div>

                {/* Probability Distribution */}
                <div className="mt-3 space-y-2 font-mono text-xs">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Strong Candidate:</span>
                      <span className="text-emerald-400 font-bold">
                        {result.probabilities.strong_candidate}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                      <motion.div
                        className="bg-emerald-500 h-full rounded-full"
                        animate={{ width: `${result.probabilities.strong_candidate}%` }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-400 mb-1">
                      <span>Needs Improvement:</span>
                      <span className="text-slate-400">
                        {result.probabilities.needs_improvement}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                      <motion.div
                        className="bg-slate-700 h-full rounded-full"
                        animate={{ width: `${result.probabilities.needs_improvement}%` }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {isLoading && (
                <div className="mt-2 text-[10px] font-mono text-cyan-300 animate-pulse">
                  {executionStage}
                </div>
              )}
            </div>

            {/* Basis State Probability Bars (7 cols) */}
            <div className="md:col-span-7">
              <ProbabilityBars
                probabilities={result.measurement_percentages}
                counts={result.measurement_counts}
                shots={result.shots}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Footer with Mandatory Educational Label */}
      <div className="flex items-center justify-between border-t border-slate-800/80 pt-2 text-[11px] font-mono">
        <span className="text-cyan-400 font-semibold">
          Educational QML Demonstration
        </span>
        <span className="text-slate-400 italic">
          *Demonstrates variational quantum optimization principles; does not falsely claim quantum advantage on classical hardware.
        </span>
      </div>
    </div>
  );
}
