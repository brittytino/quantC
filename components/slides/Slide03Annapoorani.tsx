"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { WelfareStackSystem } from "../quantum/WelfareStackSystem";

interface Slide03Props {
  replayTrigger?: number;
}

export function Slide03Annapoorani({ replayTrigger = 0 }: Slide03Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
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
        // Step 2: Welfare Stack System
        .fromTo(
          stackRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" },
          "+=0.2"
        )
        // Step 3: Combined state deduction
        .fromTo(
          deductionRef.current,
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
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500">
            CASE STUDY 02 • COMPONENT COMBINATIONS
          </span>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-900 border border-slate-800 text-cyan-400">
            ANALOGY
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
          Now Add Annapoorani.
        </h2>
        <p className="text-sm md:text-base text-slate-300 font-light mt-1">
          Annapoorani Super Six (6 Free LPG Cylinders/Year) + Stacked Welfare Programmes.
        </p>
      </div>

      {/* Main Center Section: Welfare Stack System */}
      <div ref={stackRef} className="my-auto max-w-5xl mx-auto w-full">
        <WelfareStackSystem />
      </div>

      {/* Bottom Deduction Callout: Individual Programmes -> Combined State */}
      <div
        ref={deductionRef}
        className="max-w-5xl mx-auto w-full bg-slate-900/60 border border-slate-800 rounded-2xl p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div className="space-y-0.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block">
            The Fundamental Insight:
          </span>
          <p className="text-xs md:text-sm text-slate-200 font-sans italic">
            “Each scheme is one component. But the overall system depends on how those components combine.”
          </p>
        </div>

        <div className="bg-slate-950 px-4 py-2 rounded-xl border border-cyan-500/30 text-center font-mono">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
            Quantum Translation
          </span>
          <span className="text-xs md:text-sm text-white font-bold block mt-0.5">
            Quantum states work with the same idea of combinations, but mathematically.
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] font-mono text-slate-600 border-t border-slate-900 pt-2">
        <span>Slide 03 • Combined Systems</span>
        <span>Next: Slide 04 Meet The Qubit ➔</span>
      </div>
    </div>
  );
}
