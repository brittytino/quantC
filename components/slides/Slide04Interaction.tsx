"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface Slide04Props {
  replayTrigger?: number;
}

export function Slide04Interaction({ replayTrigger = 0 }: Slide04Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const superpositionCardRef = useRef<HTMLDivElement>(null);
  const entanglementCardRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
        .fromTo(
          superpositionCardRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.2"
        )
        .fromTo(
          entanglementCardRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          noteRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: "power2.out" },
          "+=0.2"
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
          PHYSICAL PHENOMENA
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
          Now Imagine the Possibilities Interact.
        </h2>
        <p className="text-base text-slate-300 mt-1 font-light">
          How superposition and entanglement transform independent variables into coherent joint states.
        </p>
      </div>

      {/* Main 2-Column Concept Cards: Superposition & Entanglement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto items-stretch max-w-5xl mx-auto w-full">
        {/* Card 1: SUPERPOSITION */}
        <div
          ref={superpositionCardRef}
          className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
              01 • Linear Combination
            </span>
            <h3 className="text-2xl font-bold text-white font-mono">SUPERPOSITION</h3>
            <span className="text-xs font-mono text-cyan-300 block mt-1">
              Hadamard Gate (H) Evolution
            </span>
          </div>

          {/* Minimalist vector branch diagram */}
          <div className="py-6 flex items-center justify-center">
            <svg viewBox="0 0 240 100" className="w-56 h-24 overflow-visible">
              {/* Central origin node */}
              <circle cx="40" cy="50" r="5" fill="#ffffff" />
              <text x="15" y="54" fill="#94a3b8" fontSize="12" fontFamily="monospace">
                |0⟩
              </text>

              {/* Branching vectors */}
              <line x1="45" y1="50" x2="160" y2="20" stroke="#38bdf8" strokeWidth="1.5" />
              <line x1="45" y1="50" x2="160" y2="80" stroke="#a855f7" strokeWidth="1.5" />

              {/* State tips */}
              <circle cx="160" cy="20" r="4" fill="#38bdf8" />
              <text x="175" y="24" fill="#38bdf8" fontSize="14" fontFamily="monospace" fontWeight="bold">
                |0⟩ (α)
              </text>

              <circle cx="160" cy="80" r="4" fill="#a855f7" />
              <text x="175" y="84" fill="#a855f7" fontSize="14" fontFamily="monospace" fontWeight="bold">
                |1⟩ (β)
              </text>
            </svg>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            The qubit is not rapidly switching between 0 and 1. It exists in an uncollapsed linear
            superposition state (|0⟩ + |1⟩)/√2 until physical measurement.
          </p>
        </div>

        {/* Card 2: ENTANGLEMENT */}
        <div
          ref={entanglementCardRef}
          className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
              02 • Correlated States
            </span>
            <h3 className="text-2xl font-bold text-white font-mono">ENTANGLEMENT</h3>
            <span className="text-xs font-mono text-cyan-300 block mt-1">
              CNOT Two-Qubit Coupling
            </span>
          </div>

          {/* Minimalist vector link diagram */}
          <div className="py-6 flex items-center justify-center">
            <svg viewBox="0 0 280 100" className="w-64 h-24 overflow-visible">
              {/* Qubit A */}
              <rect x="20" y="30" width="55" height="40" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
              <text x="47" y="55" fill="#ffffff" fontSize="13" fontFamily="monospace" textAnchor="middle">
                q₀
              </text>

              {/* Conduit */}
              <line x1="75" y1="50" x2="205" y2="50" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 3" />
              <circle cx="140" cy="50" r="4" fill="#818cf8" />

              {/* Qubit B */}
              <rect x="205" y="30" width="55" height="40" rx="8" fill="#0f172a" stroke="#a855f7" strokeWidth="1.2" />
              <text x="232" y="55" fill="#ffffff" fontSize="13" fontFamily="monospace" textAnchor="middle">
                q₁
              </text>

              <text x="140" y="80" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">
                |Φ⁺⟩ = (|00⟩ + |11⟩)/√2
              </text>
            </svg>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            The quantum states of two qubits become inextricably linked. Measuring one instantaneously
            determines the measurement probabilities of the other.
          </p>
        </div>
      </div>

      {/* Narrative Bridge & Academic Disclaimer */}
      <div ref={noteRef} className="border-t border-slate-900 pt-3 space-y-1">
        <p className="text-xs text-slate-300 font-sans">
          <strong>The Political Analogy:</strong> “Changing one part of an equation alters the overall
          relationship across all other possibilities simultaneously.”
        </p>
        <p className="text-[11px] font-mono text-slate-500">
          *Important clarification: This is an analogy for correlated mathematical states, not a claim that human politics behaves like quantum mechanics.
        </p>
      </div>
    </div>
  );
}
