"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { TamilNaduPolicyMap } from "../quantum/TamilNaduPolicyMap";
import { QuantumResearcher } from "../quantum/QuantumResearcher";

interface Slide01Props {
  replayTrigger?: number;
}

export function Slide01OneGovernment({ replayTrigger = 0 }: Slide01Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);
  const mapColRef = useRef<HTMLDivElement>(null);
  const narrationRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const quantumHookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Step 1: Black screen with pure Apple Keynote focus: "ONE GOVERNMENT."
      tl.fromTo(
        title1Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }
      )
        // Step 2: "MANY MOVING PARTS."
        .fromTo(
          title2Ref.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
          "+=0.2"
        )
        // Step 3: Vijay portrait anchor reveals respectfully
        .fromTo(
          imageColRef.current,
          { opacity: 0, scale: 0.97 },
          { opacity: 1, scale: 1, duration: 1.0, ease: "power2.out" },
          "+=0.2"
        )
        // Step 4: Tamil Nadu Policy Map with 7 categories reveals
        .fromTo(
          mapColRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.0, ease: "power2.out" },
          "-=0.6"
        )
        // Step 5: Narration quote
        .fromTo(
          narrationRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.2"
        )
        // Step 6: What happens when many possibilities come together?
        .fromTo(
          questionRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "+=0.3"
        )
        // Step 7: "That's where quantum computing begins."
        .fromTo(
          quantumHookRef.current,
          { opacity: 0, scale: 0.97 },
          { opacity: 1, scale: 1, duration: 1.0, ease: "power2.out" },
          "+=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [replayTrigger]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 select-none overflow-hidden bg-[#050505]"
    >
      {/* Top Authoritative Keynote Typography */}
      <div className="max-w-4xl z-20">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500 block mb-1">
          FOUNDATIONAL QUESTION • THE REAL-WORLD ANALOGY
        </span>
        <h1
          ref={title1Ref}
          className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-none font-sans"
        >
          ONE GOVERNMENT.
        </h1>
        <h2
          ref={title2Ref}
          className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 leading-tight font-sans"
        >
          MANY MOVING PARTS.
        </h2>
      </div>

      {/* Main Grid: Visual Anchor (~40-45%) + Tamil Nadu Policy Map (~55%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center z-10">
        {/* Left (5 cols / ~42%): Large Vijay Portrait Visual Anchor */}
        <div ref={imageColRef} className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-sm h-72 sm:h-84 md:h-96 rounded-3xl overflow-hidden border border-slate-800/80 bg-slate-950/80 shadow-2xl">
            <Image
              src="/cm_image.jpg"
              alt="Tamil Nadu Executive & Policy Leadership Context"
              fill
              className="object-cover object-top filter grayscale contrast-115 hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 450px"
              priority
            />
            {/* Cinematic dark gradients on all edges for seamless integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60 pointer-events-none" />

            {/* Respectful Overlay Text */}
            <div className="absolute bottom-4 inset-x-4 text-center">
              <span className="text-xs font-mono font-bold text-white tracking-wider block">
                One Government. Many Programmes.
              </span>
              <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                Executive policy system • Neutral educational analogy
              </span>
            </div>
          </div>
        </div>

        {/* Right (7 cols / ~58%): Tamil Nadu Policy Map + Narration & Quantum Hook */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          {/* Map with 7 policy sectors radiating */}
          <div ref={mapColRef} className="flex justify-center scale-95 origin-center">
            <TamilNaduPolicyMap width={390} height={320} />
          </div>

          {/* Narration Concept Quote */}
          <div ref={narrationRef} className="bg-slate-950/70 border-l-2 border-slate-700 pl-4 py-1">
            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed font-sans italic">
              “Think about any government programme. It isn’t just one decision. It is many connected pieces working together.”
            </p>
          </div>

          {/* Curiosity Build: What happens when many possibilities come together? */}
          <div ref={questionRef} className="pt-2">
            <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-slate-400 block font-semibold">
              WHAT HAPPENS WHEN MANY POSSIBILITIES COME TOGETHER?
            </span>
          </div>

          {/* Quantum Hook & Academic Character */}
          <div
            ref={quantumHookRef}
            className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 border border-cyan-500/30"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block mb-0.5">
                THE PHYSICAL ANALOGY
              </span>
              <h3 className="text-lg md:text-xl font-bold font-mono text-white tracking-tight">
                That’s where quantum computing begins.
              </h3>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                Representing multi-variable combinatorial spaces with quantum probability amplitudes.
              </p>
            </div>

            {/* Clean Academic Character (Slide 1) */}
            <div className="shrink-0 ml-4 hidden sm:block">
              <QuantumResearcher width={90} height={115} label="Researcher" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer minimal info */}
      <div className="flex justify-between items-center text-[10px] font-mono text-slate-600 border-t border-slate-900 pt-2 z-10">
        <span>Slide 01 • Introduction</span>
        <span>Press Space or → to advance</span>
      </div>
    </div>
  );
}
