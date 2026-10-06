"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { BlochSphere } from "../quantum/BlochSphere";

interface Slide03Props {
  replayTrigger?: number;
}

export function Slide03ClassicalVsQuantum({ replayTrigger = 0 }: Slide03Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const classicalRef = useRef<HTMLDivElement>(null);
  const quantumRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
        .fromTo(
          classicalRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
          "+=0.2"
        )
        .fromTo(
          quantumRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
          "-=0.4"
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
          FOUNDATIONAL BRIDGE
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
          Classical Computers See 0 or 1.
        </h2>
        <p className="text-base text-slate-300 mt-1 font-light">
          Transitioning from combinatorial equations to physical computing registers.
        </p>
      </div>

      {/* Main Grid: Clean Comparison of Classical Bit vs Quantum Qubit */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-auto items-center max-w-5xl mx-auto w-full">
        {/* Left: Classical Bit */}
        <div
          ref={classicalRef}
          className="bg-slate-950/70 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between h-96"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
              Classical Computation
            </span>
            <h3 className="text-2xl font-bold text-white font-mono">CLASSICAL BIT</h3>
            <span className="text-xs font-mono text-amber-400/90 block mt-1">
              One Definite State at a Time
            </span>
          </div>

          <div className="flex items-center justify-center gap-6 py-6 bg-slate-900/60 rounded-xl border border-slate-800">
            <span className="text-5xl font-mono font-bold text-slate-500">0</span>
            <span className="text-sm font-mono text-slate-600 font-bold">OR</span>
            <span className="text-5xl font-mono font-bold text-white">1</span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            A silicon transistor switch is physical voltage: either off or on. To evaluate $N$ factors,
            a classical processor must test combinations sequentially.
          </p>
        </div>

        {/* Right: Quantum Qubit */}
        <div
          ref={quantumRef}
          className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between h-96 relative"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-2">
              Quantum Computation
            </span>
            <h3 className="text-2xl font-bold text-white font-mono">QUBIT</h3>
            <span className="text-xs font-mono text-cyan-300 block mt-1">
              State Vector: |ψ⟩ = α|0⟩ + β|1⟩
            </span>
          </div>

          <div className="flex items-center justify-center my-auto scale-90">
            <BlochSphere size={200} interactive={false} label="Continuous Amplitudes α, β" />
          </div>

          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            A qubit exists as a linear combination of basis states. The continuous parameters $\alpha$
            and $\beta$ track probability amplitudes across possibilities simultaneously.
          </p>
        </div>
      </div>

      {/* Tiny Mandatory Footnote */}
      <div className="border-t border-slate-900 pt-3 flex justify-between items-center text-[11px] font-mono text-slate-500">
        <span>
          *Measurement gives a classical outcome. The quantum state before measurement contains amplitudes for possible outcomes.
        </span>
        <span className="text-slate-600">Slide 03 of 08</span>
      </div>
    </div>
  );
}
