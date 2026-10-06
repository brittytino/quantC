"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { PoliticalEquation } from "../quantum/PoliticalEquation";
import { ChiefMinisterAnchor } from "../quantum/ChiefMinisterAnchor";
import { TAMIL_NADU_POLITICAL_SOURCES } from "@/lib/political-sources";

interface Slide02Props {
  replayTrigger?: number;
}

export function Slide02PoliticalEquation({ replayTrigger = 0 }: Slide02Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const equationRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
        .fromTo(
          equationRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "+=0.2"
        )
        .fromTo(
          anchorRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
          "+=0.1"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [replayTrigger]);

  const source = TAMIL_NADU_POLITICAL_SOURCES[0];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col justify-between p-8 md:p-12 select-none overflow-hidden"
    >
      {/* Header */}
      <div ref={headlineRef} className="max-w-4xl">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-1">
          ANALOGY • COMBINATORIAL REALITY
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
          Think About a Political Equation.
        </h2>
        <p className="text-base text-slate-300 mt-1 font-light">
          When political equations shift, outcomes emerge from non-linear combinations—not isolated variables.
        </p>
      </div>

      {/* Main Grid: Political Equation System & Leadership Visual Anchor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-stretch">
        {/* Left Column (8 cols): Abstract Multi-Factor Political Equation */}
        <div ref={equationRef} className="lg:col-span-8 flex flex-col justify-between h-full">
          <PoliticalEquation />
        </div>

        {/* Right Column (4 cols): Chief Minister Visual Anchor & Context */}
        <div ref={anchorRef} className="lg:col-span-4 flex flex-col justify-between gap-4">
          <ChiefMinisterAnchor caption="State Leadership & Executive Context" />

          {/* Academic Analogy Callout Card */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-xs font-mono text-slate-300 space-y-2">
            <span className="text-cyan-400 font-bold block uppercase tracking-wider text-[11px]">
              Why this connects to Quantum ML:
            </span>
            <p className="text-slate-400 leading-relaxed font-sans text-xs">
              In classical computing, modeling $N$ interconnected political factors requires checking
              each combination one by one ($2^N$ operations). Quantum mechanics provides a mathematical
              framework to represent all $2^N$ probability amplitudes within just $N$ qubits.
            </p>
          </div>
        </div>
      </div>

      {/* Footer with Subtle Neutral Citation */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] font-mono text-slate-500 border-t border-slate-900 pt-2 gap-1">
        <span>
          Source: {source.title} ({source.year}) • {source.context}
        </span>
        <span className="text-slate-600">Slide 02 of 08</span>
      </div>
    </div>
  );
}
