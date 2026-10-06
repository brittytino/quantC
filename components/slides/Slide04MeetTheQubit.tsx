"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { BlochSphere } from "../quantum/BlochSphere";
import { QuantumResearcher } from "../quantum/QuantumResearcher";

interface Slide04Props {
  replayTrigger?: number;
}

export function Slide04MeetTheQubit({ replayTrigger = 0 }: Slide04Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const analogyBridgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Step 1: Headline
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
        // Step 2: Bit vs Qubit comparison
        .fromTo(
          comparisonRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" },
          "+=0.2"
        )
        // Step 3: Analogy Bridge
        .fromTo(
          analogyBridgeRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [replayTrigger]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 select-none overflow-hidden bg-[#050505]"
    >
      {/* Top Header */}
      <div ref={headlineRef} className="max-w-4xl">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500 block mb-1">
          FOUNDATIONAL QUANTUM MECHANICS
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
          Meet the Qubit.
        </h2>
        <p className="text-sm md:text-base text-slate-300 font-light mt-1">
          From binary switches to continuous complex probability amplitudes.
        </p>
      </div>

      {/* Main Grid: Classical Bit vs Quantum Qubit */}
      <div
        ref={comparisonRef}
        className="grid grid-cols-1 md:grid-cols-12 gap-6 my-auto items-center max-w-5xl mx-auto w-full"
      >
        {/* Left (5 cols): Classical Bit */}
        <div className="md:col-span-5 bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between h-84 md:h-96">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
              Deterministic Logic
            </span>
            <h3 className="text-xl font-bold font-mono text-white">CLASSICAL BIT</h3>
            <span className="text-xs font-mono text-amber-400/90 block mt-0.5">
              Definite Classical State
            </span>
          </div>

          <div className="flex items-center justify-center gap-6 py-8 bg-slate-900/60 rounded-2xl border border-slate-800/80 my-auto">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-mono font-bold text-slate-600">0</span>
              <span className="text-[10px] font-mono text-slate-500 mt-1">Low Voltage</span>
            </div>
            <span className="text-sm font-mono text-slate-600 font-bold">OR</span>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-mono font-bold text-white">1</span>
              <span className="text-[10px] font-mono text-slate-400 mt-1">High Voltage</span>
            </div>
          </div>

          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            A classical bit is physically constrained to one definite state at any moment. Testing $N$ factors requires iterating combinations one by one.
          </p>
        </div>

        {/* Center Indicator (1 col) */}
        <div className="md:col-span-1 flex flex-col items-center justify-center text-slate-600 font-mono text-xl">
          <span className="hidden md:block">➔</span>
          <span className="md:hidden">⬇</span>
        </div>

        {/* Right (6 cols): Quantum Qubit + Animated Bloch Sphere */}
        <div className="md:col-span-6 bg-slate-950 border border-cyan-500/30 rounded-3xl p-6 flex flex-col justify-between h-84 md:h-96 relative">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block mb-1">
              Quantum Physics
            </span>
            <h3 className="text-xl font-bold font-mono text-white">QUBIT</h3>
            <span className="text-xs font-mono text-cyan-300 block mt-0.5">
              Superposition: |ψ⟩ = α|0⟩ + β|1⟩
            </span>
          </div>

          {/* Animated 3D Bloch Sphere */}
          <div className="flex items-center justify-center my-auto scale-90">
            <BlochSphere size={210} interactive={false} label="State Amplitudes (α, β)" />
          </div>

          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            A qubit exists as a linear combination of basis states. The continuous amplitudes $\alpha$ and $\beta$ describe probability distributions across outcomes.
          </p>
        </div>
      </div>

      {/* Analogy Bridge & Academic Researcher Callout */}
      <div
        ref={analogyBridgeRef}
        className="max-w-5xl mx-auto w-full bg-slate-900/80 border border-slate-800 rounded-2xl p-3 sm:p-4 flex items-center justify-between gap-4"
      >
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
            Why the previous welfare slides existed:
          </span>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-200">
            <span className="text-slate-400">Separate Components</span>
            <span className="text-cyan-400">➔</span>
            <span className="text-slate-300">Combined System</span>
            <span className="text-cyan-400">➔</span>
            <span className="text-white font-bold">Quantum State Vector |ψ⟩</span>
          </div>
          <p className="text-[11px] font-sans text-slate-400">
            The welfare schemes taught us how multiple variables combine. The qubit gives us the physical mathematics to compute with them.
          </p>
        </div>

        {/* Academic Researcher (Slide 4) */}
        <div className="shrink-0 hidden sm:block">
          <QuantumResearcher width={85} height={105} label="Researcher" />
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] font-mono text-slate-600 border-t border-slate-900 pt-2">
        <span>Slide 04 • Quantum State</span>
        <span>Next: Slide 05 The Magic is Not the Qubit ➔</span>
      </div>
    </div>
  );
}
