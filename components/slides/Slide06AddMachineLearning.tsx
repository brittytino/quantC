"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Database, Binary, Cpu, Activity, RefreshCw, Sliders, RotateCcw } from "lucide-react";

interface Slide06Props {
  replayTrigger?: number;
}

export function Slide06AddMachineLearning({ replayTrigger = 0 }: Slide06Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const loopRef = useRef<HTMLDivElement>(null);
  const studentRef = useRef<HTMLDivElement>(null);
  const titleBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Step 1: Headline
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
        // Step 2: Loop Flow Pipeline
        .fromTo(
          loopRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" },
          "+=0.2"
        )
        // Step 3: Scientific Student Profile Example
        .fromTo(
          studentRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.2"
        )
        // Step 4: Big Quantum ML Title & Insight
        .fromTo(
          titleBlockRef.current,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "+=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [replayTrigger]);

  const loopSteps = [
    { name: "REAL DATA", sub: "Tabular Features", icon: Database, isQuantum: false },
    { name: "ENCODING", sub: "Ry(θ) Rotations", icon: Binary, isQuantum: true },
    { name: "QUANTUM CIRCUIT", sub: "Entangled Ansatz", icon: Cpu, isQuantum: true },
    { name: "MEASUREMENT", sub: "1,000 Shots Counts", icon: Activity, isQuantum: true },
    { name: "CLASSICAL OPTIMIZER", sub: "Gradient Descent", icon: RefreshCw, isQuantum: false },
    { name: "BETTER PARAMETERS", sub: "Updated Weights (w)", icon: Sliders, isQuantum: false },
    { name: "REPEAT", sub: "Training Loop", icon: RotateCcw, isQuantum: false },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 select-none overflow-hidden bg-[#050505]"
    >
      {/* Top Header */}
      <div ref={headlineRef} className="max-w-4xl">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500 block mb-1">
          HYBRID ALGORITHM ARCHITECTURE
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
          Now Add Machine Learning.
        </h2>
        <p className="text-sm md:text-base text-slate-300 font-light mt-1">
          Bridging classical parameter optimization with parameterized quantum state spaces.
        </p>
      </div>

      {/* Main Center Area */}
      <div className="my-auto space-y-5 max-w-5xl mx-auto w-full">
        {/* The 7-Step Circular / Pipeline Loop */}
        <div ref={loopRef} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {loopSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.name}
                className={`relative rounded-2xl p-3 flex flex-col items-center text-center border transition-all ${
                  step.isQuantum
                    ? "bg-slate-950 border-cyan-500/50 text-cyan-200 shadow-md shadow-cyan-950/20"
                    : "bg-slate-950/80 border-slate-800 text-slate-300"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 ${
                    step.isQuantum ? "bg-cyan-950/80 text-cyan-400" : "bg-slate-900 text-slate-400"
                  }`}
                >
                  <Icon size={16} />
                </div>
                <span className="text-[10px] font-mono text-slate-500 block mb-0.5">
                  0{idx + 1}
                </span>
                <span className="text-xs font-mono font-bold text-white block leading-tight">
                  {step.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400 block mt-1 leading-tight">
                  {step.sub}
                </span>

                {idx < 6 && (
                  <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600 font-bold text-xs pointer-events-none hidden lg:block">
                    ►
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Clean Scientific Student Profile (Academic Dataset) */}
        <div
          ref={studentRef}
          className="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Scientific Features Input */}
          <div className="space-y-1 font-mono text-xs w-full md:w-auto">
            <span className="text-[10px] uppercase tracking-wider text-slate-500 block mb-1">
              Scientific Student Profile (No Political Data):
            </span>
            <div className="flex justify-between md:gap-8 py-0.5 border-b border-slate-900">
              <span className="text-slate-400">Attendance:</span>
              <span className="text-white font-bold">85%</span>
            </div>
            <div className="flex justify-between md:gap-8 py-0.5 border-b border-slate-900">
              <span className="text-slate-400">Study Hours:</span>
              <span className="text-white font-bold">6 hrs/day</span>
            </div>
            <div className="flex justify-between md:gap-8 py-0.5">
              <span className="text-slate-400">Previous Score:</span>
              <span className="text-white font-bold">72 / 100</span>
            </div>
          </div>

          <div className="text-slate-600 font-mono text-xl hidden md:block">➔</div>

          {/* Feature Encoding Layer */}
          <div className="text-center font-mono text-xs w-full md:w-auto bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <span className="text-[10px] text-cyan-400 uppercase tracking-wider block">
              Continuous Encoding
            </span>
            <span className="text-white font-bold block mt-1">
              θ₀ = 1.84 rad • θ₁ = 2.46 rad
            </span>
            <span className="text-[10px] text-slate-400 block mt-0.5">
              Rotations onto Bloch Sphere
            </span>
          </div>

          <div className="text-slate-600 font-mono text-xl hidden md:block">➔</div>

          {/* Model Outcome */}
          <div className="text-center font-mono text-xs w-full md:w-auto bg-slate-900/60 p-3 rounded-xl border border-emerald-500/30">
            <span className="text-[10px] text-emerald-400 uppercase tracking-wider block">
              Classification
            </span>
            <span className="text-white font-bold block mt-1">STRONG CANDIDATE</span>
            <span className="text-[10px] text-emerald-300 block mt-0.5">84.7% Confidence</span>
          </div>
        </div>

        {/* Big Definition Callout: Quantum Machine Learning */}
        <div ref={titleBlockRef} className="text-center pt-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono">
            QUANTUM MACHINE LEARNING
          </h3>
          <p className="text-sm md:text-base text-slate-300 font-sans mt-1">
            “Quantum ML combines a{" "}
            <span className="text-cyan-300 font-semibold underline decoration-cyan-500 underline-offset-4">
              quantum circuit
            </span>{" "}
            with a{" "}
            <span className="text-white font-semibold underline decoration-slate-400 underline-offset-4">
              classical learning loop
            </span>
            .”
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] font-mono text-slate-600 border-t border-slate-900 pt-2">
        <span>Slide 06 • Machine Learning Integration</span>
        <span>Next: Slide 07 Live Quantum ML Experiment ➔</span>
      </div>
    </div>
  );
}
