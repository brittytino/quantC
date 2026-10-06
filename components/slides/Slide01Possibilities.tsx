"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TamilNaduMap } from "../quantum/TamilNaduMap";

interface Slide01Props {
  replayTrigger?: number;
}

export function Slide01Possibilities({ replayTrigger = 0 }: Slide01Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const bridgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Step 1: Black screen with massive, confident typography
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" }
      )
        // Step 2: Tamil Nadu map reveals as abstract state space
        .fromTo(
          mapContainerRef.current,
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 1.0, ease: "power2.out" },
          "+=0.4"
        )
        // Step 3: Audience curiosity hook
        .fromTo(
          bridgeRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.3"
        )
        // Step 4: The Core Subject Reveal
        .fromTo(
          titleRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.0, ease: "power2.out" },
          "+=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [replayTrigger]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col justify-between p-8 md:p-14 select-none overflow-hidden"
    >
      {/* Top Hook: One Question. Many Possibilities. */}
      <div className="max-w-4xl">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-2">
          FOUNDATIONAL QUESTION
        </span>
        <h1
          ref={headlineRef}
          className="text-4xl md:text-6xl font-light tracking-tight text-white leading-tight font-sans"
        >
          ONE QUESTION.
          <br />
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            MANY POSSIBILITIES.
          </span>
        </h1>
      </div>

      {/* Center: Tamil Nadu Geographic State Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto">
        <div ref={mapContainerRef} className="md:col-span-6 flex justify-center">
          <TamilNaduMap width={320} height={380} />
        </div>

        {/* Right side narrative build */}
        <div className="md:col-span-6 space-y-6">
          <div ref={bridgeRef} className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              The Real-World System
            </span>
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
              Think of Tamil Nadu. 234 assembly constituencies, multi-party alliances, local candidate
              dynamics, and millions of interacting voter decisions.
            </p>
            <p className="text-base text-slate-400 italic font-serif">
              Before an election is held, how many distinct configurations of political reality exist simultaneously?
            </p>
          </div>

          {/* Reveal: Connection to QML */}
          <div ref={titleRef} className="pt-4 border-t border-slate-800">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
              This is the exact idea we need to understand:
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white font-mono">
              QUANTUM MACHINE LEARNING
            </h2>
            <span className="text-xs font-mono text-cyan-300 mt-1 block">
              Representing multi-state combinatorial spaces with quantum amplitudes.
            </span>
          </div>
        </div>
      </div>

      {/* Footer minimal indicator */}
      <div className="flex justify-between items-center text-[11px] font-mono text-slate-600 border-t border-slate-900 pt-3">
        <span>Slide 01 • Introduction</span>
        <span>Press Space or → to advance</span>
      </div>
    </div>
  );
}
