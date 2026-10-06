"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { VettriPayanamBus } from "../quantum/VettriPayanamBus";

interface Slide02Props {
  replayTrigger?: number;
}

export function Slide02VettriPayanam({ replayTrigger = 0 }: Slide02Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const emblemCardRef = useRef<HTMLDivElement>(null);
  const busGraphRef = useRef<HTMLDivElement>(null);
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
        // Step 2: Authentic Scheme Emblem Card
        .fromTo(
          emblemCardRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "+=0.1"
        )
        // Step 3: Transit Graph & Variables
        .fromTo(
          busGraphRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        // Step 4: Quantum representation deduction
        .fromTo(
          deductionRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "+=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [replayTrigger]);

  const variables = [
    { label: "Route", val: "Coimbatore ➔ Chennai", note: "Spatial path" },
    { label: "Time", val: "08:30 AM Peak", note: "Temporal slot" },
    { label: "Destination", val: "College / Hospital", note: "Branch choice" },
    { label: "Cost", val: "₹0 (Zero Fare)", note: "Free transit" },
    { label: "Purpose", val: "Work / Education", note: "Objective" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 select-none overflow-hidden bg-[#050505]"
    >
      {/* Top Header */}
      <div ref={headlineRef} className="max-w-4xl z-20">
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

      {/* Main Grid: Authentic Policy Emblem (Left) + Branching System Graph (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-stretch max-w-6xl mx-auto w-full z-10">
        {/* Left Column (4 cols): Authentic Scheme Emblem Card */}
        <div
          ref={emblemCardRef}
          className="lg:col-span-4 bg-slate-950 border border-slate-800 rounded-3xl p-4 flex flex-col justify-between shadow-2xl"
        >
          {/* Authentic Scheme Emblem Image */}
          <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden bg-white flex items-center justify-center p-3 shadow-inner">
            <Image
              src="/vetri_Payanam.png"
              alt="வெற்றிப் பயணம் - Vettri Payanam Official Emblem"
              fill
              className="object-contain p-2"
              priority
              sizes="(max-width: 1024px) 100vw, 380px"
            />
          </div>

          {/* Contextual Narrative Information */}
          <div className="mt-3 space-y-1.5 font-sans">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                வெற்றிப் பயணம்
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 border border-sky-800 text-sky-300">
                TNSTC Transit
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Expanded state-wide transit initiative guaranteeing free bus travel for women. A single person stepping onto a bus embodies a branching possibility space.
            </p>
            <div className="pt-2 border-t border-slate-900 flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span>ONE PASSENGER</span>
              <span className="text-cyan-400 font-bold">➔ 5 DESTINATIONS</span>
            </div>
          </div>
        </div>

        {/* Right Column (8 cols): Journey Graph, Variables & Quantum Wire Morph */}
        <div ref={busGraphRef} className="lg:col-span-8 flex flex-col justify-between gap-3">
          {/* Journey Concept Banner */}
          <div className="flex items-center justify-between px-4 py-2 bg-slate-950 border border-slate-800 rounded-2xl font-mono text-xs">
            <span className="text-slate-400">A PASSENGER STEPS ONTO THE BUS:</span>
            <span className="text-white font-bold tracking-wider">
              ONE PERSON ➔ MANY POSSIBLE JOURNEYS
            </span>
          </div>

          {/* Transit Line & Destination Nodes */}
          <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-3">
            <VettriPayanamBus />
          </div>

          {/* 5 Decomposed Variables */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {variables.map((v, i) => (
              <div key={i} className="p-2 rounded-xl bg-slate-950 border border-slate-800 font-mono text-center">
                <span className="text-[9px] text-slate-500 uppercase block">Var 0{i + 1}</span>
                <span className="text-xs font-bold text-white block mt-0.5">{v.label}</span>
                <span className="text-[10px] text-cyan-400 block mt-0.5 truncate">{v.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Deduction Callout */}
      <div
        ref={deductionRef}
        className="max-w-6xl mx-auto w-full bg-slate-900/80 border border-slate-800 rounded-2xl p-3.5 flex flex-col md:flex-row items-center justify-between gap-4 z-10"
      >
        <div className="space-y-0.5">
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

        <div className="shrink-0 text-right font-mono text-[10px] text-slate-500 border-t md:border-t-0 md:border-l border-slate-800 pt-2 md:pt-0 md:pl-4 max-w-xs">
          <span>*This helps us visualize the idea. It is not a literal physical claim that quantum computers calculate bus routes.</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] font-mono text-slate-600 border-t border-slate-900 pt-2 z-10">
        <span>Slide 02 • Possibility Spaces</span>
        <span>Next: Slide 03 Now Add Annapoorani ➔</span>
      </div>
    </div>
  );
}
