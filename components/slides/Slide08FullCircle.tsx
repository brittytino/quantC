"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface Slide08Props {
  replayTrigger?: number;
}

export function Slide08FullCircle({ replayTrigger = 0 }: Slide08Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const chainRef = useRef<HTMLDivElement>(null);
  const triadRef = useRef<HTMLDivElement>(null);
  const statement1Ref = useRef<HTMLHeadingElement>(null);
  const statement2Ref = useRef<HTMLHeadingElement>(null);
  const statement3Ref = useRef<HTMLHeadingElement>(null);
  const finalBadgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Step 1: Headline
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
        // Step 2: 5-Stage Hierarchy Chain
        .fromTo(
          chainRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "+=0.2"
        )
        // Step 3: Triad Comparison (Gov / Quantum / ML)
        .fromTo(
          triadRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.2"
        )
        // Step 4: Statement 1: "Quantum Machine Learning isn't magic."
        .fromTo(
          statement1Ref.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.3"
        )
        // Step 5: Statement 2: "It's a different way of representing and processing information."
        .fromTo(
          statement2Ref.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.4"
        )
        // Step 6: Statement 3: "And Python lets us experiment with it today."
        .fromTo(
          statement3Ref.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.3"
        )
        // Step 7: Grand Final Anchor
        .fromTo(
          finalBadgeRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" },
          "+=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [replayTrigger]);

  const chain = [
    { title: "MANY COMPONENTS", sub: "Individual variables" },
    { title: "RELATIONSHIPS", sub: "Couplings & policies" },
    { title: "COMBINATIONS", sub: "Interconnected branches" },
    { title: "SYSTEM STATE", sub: "Unified composite space" },
    { title: "OBSERVED OUTCOME", sub: "Classical measurement" },
  ];

  const triad = [
    {
      domain: "Government System",
      sub: "Tamil Nadu Welfare Stack",
      result: "Many Programmes",
      detail: "Transport, LPG, Income, Education combine to shape human lives.",
      color: "border-slate-800 text-slate-300",
      accent: "text-amber-400",
    },
    {
      domain: "Quantum System",
      sub: "Hilbert State Space",
      result: "Many Quantum States",
      detail: "Superposition and entanglement hold all combinations in amplitude.",
      color: "border-cyan-500/30 text-cyan-200",
      accent: "text-cyan-400",
    },
    {
      domain: "Machine Learning",
      sub: "Variational Optimization",
      result: "Learn Useful Patterns",
      detail: "Classical feedback loops iteratively optimize quantum circuit parameters.",
      color: "border-slate-800 text-slate-300",
      accent: "text-purple-400",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 select-none overflow-hidden bg-[#050505]"
    >
      {/* Top Header */}
      <div ref={headlineRef} className="max-w-4xl">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500 block mb-1">
          CLOSING SYNTHESIS • FULL CIRCLE
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
          From Welfare Systems to Quantum Systems
        </h2>
        <p className="text-sm md:text-base text-slate-300 font-light mt-1">
          Connecting real-world multi-variable complexity to quantum computing reality.
        </p>
      </div>

      {/* Main Center Area */}
      <div className="my-auto space-y-5 max-w-5xl mx-auto w-full">
        {/* The 5-Stage Hierarchy Chain */}
        <div
          ref={chainRef}
          className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 p-3 bg-slate-950 border border-slate-800 rounded-2xl font-mono text-center"
        >
          {chain.map((c, i) => (
            <div key={c.title} className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-[9px] text-slate-500 block">0{i + 1}</span>
              <span className="text-xs font-bold text-white block mt-0.5">{c.title}</span>
              <span className="text-[9px] text-slate-400 block mt-0.5">{c.sub}</span>
            </div>
          ))}
        </div>

        {/* The Triad Comparison (Gov / Quantum / ML) */}
        <div ref={triadRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {triad.map((t) => (
            <div
              key={t.domain}
              className={`p-4 rounded-2xl bg-slate-950 border ${t.color} flex flex-col justify-between`}
            >
              <div>
                <span className={`text-[10px] font-mono uppercase tracking-wider ${t.accent} block`}>
                  {t.domain}
                </span>
                <span className="text-xs font-mono text-slate-500 block mt-0.5">{t.sub}</span>
                <h4 className="text-lg font-bold font-mono text-white mt-2 mb-1">{t.result}</h4>
              </div>
              <p className="text-xs text-slate-400 font-sans leading-relaxed mt-2 pt-2 border-t border-slate-900">
                {t.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Final Tri-Statement Sequence */}
        <div className="text-center space-y-1.5 pt-2">
          <h3
            ref={statement1Ref}
            className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans"
          >
            “Quantum Machine Learning isn’t magic.”
          </h3>
          <h4
            ref={statement2Ref}
            className="text-base sm:text-lg font-light text-slate-300 font-sans"
          >
            “It’s a different way of representing and processing information.”
          </h4>
          <h5
            ref={statement3Ref}
            className="text-sm sm:text-base font-mono text-cyan-300 font-semibold"
          >
            “And Python lets us experiment with it today.”
          </h5>
        </div>
      </div>

      {/* Grand Final Anchor Banner */}
      <div
        ref={finalBadgeRef}
        className="max-w-5xl mx-auto w-full border-t border-slate-900 pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">⚛️</span>
          <span className="text-white font-bold tracking-wider">
            QUANTUM MACHINE LEARNING WITH PYTHON
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-slate-600">•</span>
          <span className="text-white font-bold text-sm tracking-wider">THANK YOU</span>
          <span className="text-slate-600">•</span>
          <span className="text-cyan-400">Questions & Discussion</span>
        </div>
      </div>
    </div>
  );
}
