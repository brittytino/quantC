"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface Slide08Props {
  replayTrigger?: number;
}

export function Slide08Outlook({ replayTrigger = 0 }: Slide08Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const realityRef = useRef<HTMLDivElement>(null);
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
          realityRef.current,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "+=0.2"
        )
        .fromTo(
          quoteRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
          "+=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [replayTrigger]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col justify-between p-8 md:p-14 select-none overflow-hidden"
    >
      {/* Header */}
      <div ref={headlineRef} className="max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-1">
          SCIENTIFIC ASSESSMENT
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
          Is Quantum ML Actually Better?
        </h2>
        <p className="text-base text-slate-300 mt-1 font-light">
          Separating empirical physical limitations from speculative hype.
        </p>
      </div>

      {/* Center Evolution Architecture: Today -> Research -> Future */}
      <div
        ref={realityRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto items-stretch max-w-5xl mx-auto w-full"
      >
        {/* Stage 1: Today */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono uppercase text-slate-500 block mb-1">Phase 01</span>
            <h3 className="text-xl font-bold font-mono text-white">TODAY</h3>
            <span className="text-xs font-mono text-amber-400/90 block mt-1">NISQ Era Reality</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-sans my-4">
            Quantum hardware is currently limited to 50–1,000 physical qubits. Thermal noise and
            decoherence constrain circuit depth. Most workflows run on classical simulators.
          </p>

          <span className="text-[10px] font-mono text-slate-500 pt-3 border-t border-slate-900">
            No universal speedup yet over classical deep learning
          </span>
        </div>

        {/* Stage 2: Research */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono uppercase text-slate-500 block mb-1">Phase 02</span>
            <h3 className="text-xl font-bold font-mono text-white">RESEARCH</h3>
            <span className="text-xs font-mono text-cyan-400 block mt-1">Targeted Niches</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-sans my-4">
            Investigators are identifying specific problem topologies—such as quantum chemistry kernels,
            combinatorial logistics, and non-linear feature maps—where quantum speedup is provable.
          </p>

          <span className="text-[10px] font-mono text-slate-500 pt-3 border-t border-slate-900">
            Focus: Variational ansatz design & barren plateaus
          </span>
        </div>

        {/* Stage 3: Future */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono uppercase text-slate-500 block mb-1">Phase 03</span>
            <h3 className="text-xl font-bold font-mono text-white">FUTURE</h3>
            <span className="text-xs font-mono text-white block mt-1">Fault-Tolerant Horizon</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-sans my-4">
            Logical qubits stabilized by quantum error correction (QEC), paired with classical GPUs in
            hybrid cloud datacenters for deep co-processing.
          </p>

          <span className="text-[10px] font-mono text-slate-500 pt-3 border-t border-slate-900">
            Error suppression & long coherence times
          </span>
        </div>
      </div>

      {/* Final Concluding Statement */}
      <div ref={quoteRef} className="border-t border-slate-900 pt-4 text-center space-y-3">
        <h3 className="text-xl md:text-3xl font-extrabold tracking-tight text-white font-sans max-w-4xl mx-auto leading-tight">
          “Quantum ML isn&apos;t about replacing classical AI.
          <br />
          <span className="text-slate-400 font-light">
            It&apos;s about discovering where quantum computation gives us something new.”
          </span>
        </h3>

        <div className="flex items-center justify-center gap-6 pt-3 text-sm font-mono text-slate-400">
          <span className="text-white font-bold">THANK YOU</span>
          <span className="text-slate-700">•</span>
          <span className="text-cyan-400">Questions?</span>
          <span className="text-slate-700">•</span>
          <span>Python + Qiskit</span>
        </div>
      </div>
    </div>
  );
}
