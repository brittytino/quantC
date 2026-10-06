"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { InteractiveQuantumGates } from "../quantum/InteractiveQuantumGates";

interface Slide05Props {
  replayTrigger?: number;
}

export function Slide05QuantumGates({ replayTrigger = 0 }: Slide05Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const pipelinePillRef = useRef<HTMLDivElement>(null);
  const gatesRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Step 1: Headline
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
        // Step 2: Flow Pipeline Pills
        .fromTo(
          pipelinePillRef.current,
          { opacity: 0, scale: 0.97 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "+=0.1"
        )
        // Step 3: Interactive Circuit and Gate cards
        .fromTo(
          gatesRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
          "+=0.2"
        )
        // Step 4: Big educational takeaway
        .fromTo(
          quoteRef.current,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "+=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [replayTrigger]);

  const stages = [
    { label: "QUBIT", color: "text-slate-400" },
    { label: "H GATE", color: "text-sky-400" },
    { label: "RY GATE", color: "text-cyan-400" },
    { label: "CNOT", color: "text-purple-400" },
    { label: "MEASUREMENT", color: "text-emerald-400" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 select-none overflow-hidden bg-[#050505]"
    >
      {/* Top Header */}
      <div ref={headlineRef} className="max-w-4xl">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500 block mb-1">
          EDUCATIONAL PRINCIPLE
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
          The Magic is Not the Qubit.
        </h2>
        <p className="text-sm md:text-base text-cyan-300 font-mono mt-1 font-semibold">
          “The power comes from what we DO with the qubits.”
        </p>
      </div>

      {/* Main Flow: Qubit -> H -> RY -> CNOT -> Measurement */}
      <div className="my-auto space-y-4 max-w-5xl mx-auto w-full">
        {/* Horizontal Pipeline Sequence */}
        <div
          ref={pipelinePillRef}
          className="flex items-center justify-between p-2.5 bg-slate-950 border border-slate-800 rounded-2xl font-mono text-xs overflow-x-auto"
        >
          {stages.map((st, i) => (
            <React.Fragment key={st.label}>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                <span className="text-[10px] text-slate-500">0{i + 1}</span>
                <span className={`font-bold ${st.color}`}>{st.label}</span>
              </div>
              {i < stages.length - 1 && (
                <span className="text-slate-600 font-bold shrink-0 mx-1">➔</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Visual Circuit & Gate Blocks */}
        <div ref={gatesRef}>
          <InteractiveQuantumGates />
        </div>
      </div>

      {/* Bottom Synthesis Callout */}
      <div
        ref={quoteRef}
        className="max-w-5xl mx-auto w-full border-t border-slate-900 pt-3 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-2"
      >
        <div>
          <span>Circuit Depth: 4 Gates • Two-Qubit Entangled RealAmplitudes State</span>
        </div>
        <div className="text-slate-500">
          Slide 05 • Quantum Logic Operations
        </div>
      </div>
    </div>
  );
}
