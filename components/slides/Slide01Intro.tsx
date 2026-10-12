"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

interface Slide01Props {
  replayTrigger?: number;
}

export function Slide01Intro({ replayTrigger = 0 }: Slide01Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const statGridRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          heroCardRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          statGridRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          footerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [replayTrigger]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 select-none overflow-hidden bg-[#05070e]"
    >
      {/* Background ambient lighting */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Block - Ultra Widescreen */}
      <div className="text-center max-w-[1700px] mx-auto w-full z-10">
        <div ref={badgeRef} className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2 rounded-full bg-slate-900/95 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-mono font-bold mb-3 shadow-[0_0_25px_rgba(245,158,11,0.25)]">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          <span>TAMIL NADU RULING PARTY GOVERNANCE</span>
          <span className="text-slate-500">|</span>
          <span className="text-emerald-400">OCTOBER 9, 2026 BY-ELECTIONS: TVK SWEEPS 2-0 (MADURANTAKAM & DHARAPURAM)</span>
          <span className="text-slate-500">|</span>
          <span className="text-cyan-400">QML VALIDATION CASE STUDY</span>
        </div>

        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-sans uppercase leading-none"
        >
          QUANTUM MACHINE LEARNING{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
            WITH PYTHON
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg sm:text-2xl lg:text-3xl text-slate-200 mt-3 font-semibold max-w-[1600px] mx-auto leading-relaxed"
        >
          Modeling Ruling TVK Welfare Policy Entanglement & By-Election Landslide Retention in Tamil Nadu
        </p>
      </div>

      {/* Center Hero: Cinematic Graphic + Quantum Governance Hook */}
      <div
        ref={heroCardRef}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-center max-w-[1720px] mx-auto w-full z-10"
      >
        {/* Left Hero Graphic Card (7 cols) */}
        <div className="lg:col-span-7 relative h-72 sm:h-88 md:h-[400px] rounded-3xl overflow-hidden border border-slate-800 bg-slate-950/80 shadow-2xl group">
          <Image
            src="/tvk_quantum_hero.jpg"
            alt="Tamil Nadu Ruling TVK Governance meets Quantum Machine Learning"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent pointer-events-none" />

          {/* Overlay Context Badge */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 z-10">
            <div>
              <span className="text-xs sm:text-sm font-mono font-bold text-amber-400 uppercase tracking-widest block">
                Tamilaga Vettri Kazhagam (TVK) • Ruling Party of Tamil Nadu
              </span>
              <span className="text-base sm:text-xl font-sans text-white font-black block mt-1">
                Flagships: வெற்றிப் பயணம் (Free Bus) • அன்னபூரணி Super 6 (LPG & ₹2,500 DBT)
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/80 border border-cyan-500/50 text-cyan-300 font-mono text-xs sm:text-sm font-bold shadow-lg">
              <span>Python 3.11</span>
              <span>•</span>
              <span>Qiskit 1.0 VQC</span>
            </div>
          </div>
        </div>

        {/* Right QML Conceptual Bridge (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-5 h-full">
          <div className="bg-slate-950/95 border border-slate-800 rounded-3xl p-6 lg:p-7 shadow-2xl space-y-4">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-400 font-bold block">
              THE CORE SCIENTIFIC QUESTION
            </span>
            <p className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed">
              Classical polls treat voters as binary 0 or 1. But evaluating a <strong className="text-amber-400">ruling government</strong> with 6.2 crore citizens and multi-scheme welfare benefits creates continuous <strong className="text-cyan-300">Quantum Superposition</strong> and cross-policy entanglement.
            </p>
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 font-mono text-sm sm:text-base text-slate-300 flex items-center justify-between">
              <span className="text-slate-400">State Vector:</span>
              <span className="text-cyan-300 font-bold">|ψ⟩ = α|Opposition DMK⟩ + β|Ruling TVK Retained⟩</span>
            </div>
          </div>

          {/* Real October 2026 By-Election Validation Callout */}
          <div className="bg-gradient-to-r from-red-950/60 via-slate-950 to-emerald-950/60 border border-emerald-500/50 rounded-3xl p-5 sm:p-6 shadow-xl flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-emerald-400 font-bold block tracking-wider">
                CERTIFIED ECI OUTCOME (OCTOBER 9, 2026)
              </span>
              <span className="text-base sm:text-lg font-sans font-bold text-white block">
                Ruling TVK Sweeps By-Elections 2-0: Madurantakam & Dharapuram
              </span>
              <span className="text-xs sm:text-sm text-slate-300 font-sans block">
                Classical models predicted opposition swings. Quantum ML captured the true non-linear welfare retention wave!
              </span>
            </div>
            <span className="text-3xl shrink-0 ml-3">🗳️</span>
          </div>
        </div>
      </div>

      {/* 4 Bottom Key Metrics - Ultra Widescreen Strip */}
      <div
        ref={statGridRef}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-[1720px] mx-auto w-full z-10"
      >
        <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-center shadow-lg">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">State Electorate</span>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono text-white mt-1 block">234 Seats</span>
          <span className="text-xs font-mono text-cyan-400 block mt-0.5">6.2 Crore Tamil Nadu Citizens</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-center shadow-lg">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Oct 9 By-Election Sweep</span>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono text-emerald-400 mt-1 block">Ruling TVK: 2 / 2</span>
          <span className="text-xs font-mono text-slate-300 block mt-0.5">Madurantakam (+20K) & Dharapuram (+9.4K)</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-center shadow-lg">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Welfare Multipliers</span>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono text-amber-400 mt-1 block">Free Bus + LPG</span>
          <span className="text-xs font-mono text-slate-300 block mt-0.5">Vettri Payanam & Annapoorani Super 6</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-center shadow-lg">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Simulation Engine</span>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono text-cyan-400 mt-1 block">Python Qiskit VQC</span>
          <span className="text-xs font-mono text-slate-300 block mt-0.5">Slide 08 Live Interactive Demo</span>
        </div>
      </div>

      {/* Minimal Footer */}
      <div
        ref={footerRef}
        className="flex justify-between items-center text-xs sm:text-sm font-mono text-slate-500 border-t border-slate-900 pt-3 z-10"
      >
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-bold">Ruling TVK 2026</span>
          <span>•</span>
          <span className="text-slate-300 font-medium">Quantum Machine Learning with Python</span>
          <span>•</span>
          <span className="text-cyan-400 font-bold">Slide 01 of 08</span>
        </div>
        <div>
          <span>Press <kbd className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 font-bold">Space</kbd> or <kbd className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 font-bold">→</kbd> to Advance</span>
        </div>
      </div>
    </div>
  );
}
