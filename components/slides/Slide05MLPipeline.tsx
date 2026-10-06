"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Database, Binary, Cpu, Waves, Activity, RefreshCw, CheckCircle2 } from "lucide-react";

interface Slide05Props {
  replayTrigger?: number;
}

export function Slide05MLPipeline({ replayTrigger = 0 }: Slide05Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const pipelineRef = useRef<HTMLDivElement>(null);
  const studentRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
        .fromTo(
          pipelineRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "+=0.2"
        )
        .fromTo(
          studentRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "+=0.1"
        )
        .fromTo(
          quoteRef.current,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" },
          "+=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [replayTrigger]);

  const pipeline = [
    { title: "Real Data", sub: "Tabular Features", icon: Database },
    { title: "Features", sub: "Normalized to [0, π]", icon: Binary },
    { title: "Encoding", sub: "Ry(θ) Rotations", icon: Waves },
    { title: "Circuit", sub: "PQC / Entangler", icon: Cpu },
    { title: "Measurement", sub: "1,000 Shots", icon: Activity },
    { title: "Optimizer", sub: "Classical Loop", icon: RefreshCw },
    { title: "Prediction", sub: "Class Decision", icon: CheckCircle2 },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col justify-between p-8 md:p-12 select-none overflow-hidden"
    >
      {/* Header */}
      <div ref={headlineRef} className="max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-1">
          INTEGRATION ARCHITECTURE
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
          Where Does Machine Learning Enter?
        </h2>
        <p className="text-base text-slate-300 mt-1 font-light">
          Bridging classical feature vectors with parameterized quantum circuits.
        </p>
      </div>

      {/* Main Flow Pipeline */}
      <div className="my-auto space-y-6">
        {/* Pipeline Nodes Flow */}
        <div ref={pipelineRef} className="grid grid-cols-7 gap-2 max-w-5xl mx-auto w-full">
          {pipeline.map((step, idx) => {
            const Icon = step.icon;
            const isQuantum = idx >= 2 && idx <= 4;
            return (
              <div
                key={step.title}
                className={`relative rounded-xl p-3 flex flex-col items-center text-center border transition-all ${
                  isQuantum
                    ? "bg-slate-950 border-cyan-500/50 text-cyan-200"
                    : "bg-slate-950/70 border-slate-800 text-slate-300"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center mb-1.5 ${
                    isQuantum ? "text-cyan-400 bg-cyan-950/50" : "text-slate-400 bg-slate-900"
                  }`}
                >
                  <Icon size={16} />
                </div>
                <span className="text-xs font-mono font-bold text-white block">{step.title}</span>
                <span className="text-[10px] font-mono text-slate-400 block mt-0.5 leading-tight">
                  {step.sub}
                </span>

                {idx < 6 && (
                  <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600 font-bold text-xs pointer-events-none hidden md:block">
                    ►
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Real Example Walkthrough: Student Evaluation Data */}
        <div
          ref={studentRef}
          className="max-w-3xl mx-auto bg-slate-950/90 border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Input Values */}
          <div className="font-mono text-xs space-y-1">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">
              Sample Candidate Profile:
            </span>
            <div className="flex justify-between gap-6">
              <span className="text-slate-400">Attendance:</span>
              <span className="text-white font-bold">85%</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-slate-400">Study Hours:</span>
              <span className="text-white font-bold">6 hrs/day</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-slate-400">Previous Score:</span>
              <span className="text-white font-bold">72 / 100</span>
            </div>
          </div>

          <div className="text-slate-600 font-mono text-sm hidden sm:block">⟹</div>

          {/* Processing Bridge */}
          <div className="text-center font-mono text-xs">
            <span className="text-[10px] text-cyan-400 uppercase tracking-wider block">
              Quantum Ansatz Layer
            </span>
            <span className="text-slate-300 font-bold mt-1 block">
              Ry(θ₀) ⊗ Ry(θ₁) ➔ CNOT
            </span>
            <span className="text-[10px] text-slate-500">1,000 Shot Measurement</span>
          </div>

          <div className="text-slate-600 font-mono text-sm hidden sm:block">⟹</div>

          {/* Output */}
          <div className="font-mono text-xs text-center bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
            <span className="text-[10px] text-emerald-400 uppercase tracking-wider block">
              Model Prediction
            </span>
            <span className="text-base font-bold text-white block mt-0.5">
              STRONG CANDIDATE
            </span>
            <span className="text-[10px] text-slate-400">84.7% Confidence</span>
          </div>
        </div>
      </div>

      {/* Huge Focal Statement */}
      <div ref={quoteRef} className="border-t border-slate-800 pt-4 text-center">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white font-sans max-w-4xl mx-auto leading-snug">
          “Quantum ML combines a{" "}
          <span className="text-cyan-300 underline decoration-cyan-500 underline-offset-4">
            quantum circuit
          </span>{" "}
          with a{" "}
          <span className="text-white underline decoration-slate-500 underline-offset-4">
            classical learning loop
          </span>
          .”
        </h3>
        <span className="text-xs font-mono text-slate-500 mt-1 block">
          Variational Quantum Classifier (VQC) Hybrid Architecture
        </span>
      </div>
    </div>
  );
}
