"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { VettriPayanamBus } from "../quantum/VettriPayanamBus";

interface Slide02Props {
  replayTrigger?: number;
}

export function Slide02VettriPayanam({ replayTrigger = 0 }: Slide02Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const busRef = useRef<HTMLDivElement>(null);
  const variablesRef = useRef<HTMLDivElement>(null);
  const deductionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Step 1: Headline
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
        // Step 2: Vector Bus and transit branches
        .fromTo(
          busRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" },
          "+=0.2"
        )
        // Step 3: Variables grid
        .fromTo(
          variablesRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.2"
        )
        // Step 4: Quantum representation deduction
        .fromTo(
          deductionRef.current,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "+=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [replayTrigger]);

  const variables = [
    { label: "Route", val: "Coimbatore ➔ Chennai", note: "Spatial path" },
    { label: "Time", val: "08:30 AM Peak", note: "Temporal coordinate" },
    { label: "Destination", val: "College / Hospital", note: "Branch choice" },
    { label: "Cost", val: "₹0.00 (Zero fare)", note: "Free policy baseline" },
    { label: "Purpose", val: "Work / Education", note: "Objective function" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 select-none overflow-hidden bg-[#050505]"
    >
      {/* Top Header */}
      <div ref={headlineRef} className="max-w-4xl">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500">
            CASE STUDY 01 • BRANCHING POSSIBILITY SPACES
          </span>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-900 border border-slate-800 text-cyan-400">
            ANALOGY
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
          Take Vettri Payanam.
        </h2>
        <p className="text-sm md:text-base text-slate-300 font-light mt-1">
          October 2026 Expanded Transit Programme • Government-operated bus network across Tamil Nadu.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="my-auto space-y-5">
        {/* Vector Bus & Journey Branching Graph */}
        <div ref={busRef} className="w-full max-w-4xl mx-auto">
          {/* Journey Concept Banner */}
          <div className="flex items-center justify-between px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl mb-2 font-mono text-xs">
            <span className="text-slate-400">A PASSENGER STEPS ONTO THE BUS:</span>
            <span className="text-white font-bold tracking-wider">
              ONE PERSON ➔ MANY POSSIBLE JOURNEYS
            </span>
          </div>

          <VettriPayanamBus />
        </div>

        {/* Journey Variables Decomposition */}
        <div ref={variablesRef} className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 max-w-4xl mx-auto">
          {variables.map((v, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 font-mono">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                Variable 0{i + 1}
              </span>
              <span className="text-xs font-bold text-white block mt-0.5">{v.label}</span>
              <span className="text-[11px] text-cyan-400 block mt-0.5 font-sans">{v.val}</span>
              <span className="text-[9px] text-slate-500 block mt-1">{v.note}</span>
            </div>
          ))}
        </div>

        {/* Narration & Educational Quantum Takeaway */}
        <div
          ref={deductionRef}
          className="max-w-4xl mx-auto bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              Narration Concept:
            </span>
            <p className="text-xs md:text-sm text-slate-200 font-sans italic">
              “Even a simple journey can be described by multiple variables.”
            </p>
            <p className="text-xs md:text-sm text-white font-medium font-sans">
              Quantum computing is built around representing and manipulating states with many possible configurations.
            </p>
          </div>

          {/* Subtly Clarify Analogy ≠ Physics */}
          <div className="shrink-0 text-right font-mono text-[10px] text-slate-500 border-t md:border-t-0 md:border-l border-slate-800 pt-2 md:pt-0 md:pl-4 max-w-xs">
            <span>*This helps us visualize the idea. It is not a literal physical claim that quantum computers calculate all bus routes.</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] font-mono text-slate-600 border-t border-slate-900 pt-2">
        <span>Slide 02 • Possibility Spaces</span>
        <span>Next: Slide 03 Now Add Annapoorani ➔</span>
      </div>
    </div>
  );
}
