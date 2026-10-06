"use client";

import React from "react";
import Image from "next/image";

interface WelfareStackProps {
  className?: string;
}

export function WelfareStackSystem({ className = "" }: WelfareStackProps) {
  const components = [
    { title: "Vettri Payanam", detail: "Free Transit Choice", icon: "🚌", varName: "x₁ (Transit)" },
    { title: "Annapoorani LPG", detail: "Free Cylinders/Year", icon: "🔥", varName: "x₂ (Fuel)" },
    { title: "₹2,500 Support", detail: "Monthly Income Floor", icon: "₹", varName: "x₃ (Income)" },
    { title: "Education Support", detail: "Tuition & Tech Grants", icon: "🎓", varName: "x₄ (Education)" },
  ];

  return (
    <div className={`relative w-full flex flex-col items-center select-none ${className}`}>
      {/* Main Grid: Authentic Policy Cards (Left 6 cols) + Combined System Transition (Right 6 cols) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Column (6 cols): Two Authentic Policy Banners */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-3.5">
          {/* Card 1: Annapoorani Super Six Scheme Graphic */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-3 shadow-xl flex flex-col justify-between">
            <div className="relative w-full h-32 sm:h-36 rounded-2xl overflow-hidden bg-[#faf7f2] border border-amber-900/20">
              <Image
                src="/annapooraniSuper6.png"
                alt="Tamil Nadu Annapoorani Super Six Scheme"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 500px"
                priority
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between text-xs font-mono">
              <div>
                <span className="text-white font-bold block">Annapoorani Super Six</span>
                <span className="text-[10px] text-slate-400">LPG Cylinder Kitchen Relief • Component x₂</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/80 border border-amber-700/60 text-amber-300 font-bold">
                Fuel Variable
              </span>
            </div>
          </div>

          {/* Card 2: Women's Monthly Income Support (₹2,500) Graphic */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-3 shadow-xl flex flex-col justify-between">
            <div className="relative w-full h-32 sm:h-36 rounded-2xl overflow-hidden bg-black border border-red-900/30">
              <Image
                src="/2500rsVijay.png"
                alt="மாதம் ரூ. 2500 விஜய் அறிவிப்பு - Women's Monthly Assistance"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 500px"
                priority
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between text-xs font-mono">
              <div>
                <span className="text-white font-bold block">மாதம் ரூ. 2,500 அறிவிப்பு</span>
                <span className="text-[10px] text-slate-400">Monthly Financial Floor • Component x₃</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 font-bold">
                Income Variable
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (6 cols): Combined Welfare Stack & Quantum State Bridge */}
        <div className="lg:col-span-6 bg-slate-950 border border-cyan-500/30 rounded-3xl p-5 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                SYSTEM SYNTHESIS • MULTI-VARIABLE INTEGRATION
              </span>
              <span className="text-[10px] font-mono text-slate-500">4 Dimensions</span>
            </div>

            <h4 className="text-xl font-bold font-mono text-white tracking-tight">
              COMBINED WELFARE SYSTEM
            </h4>

            {/* Stacked Components Mini-list */}
            <div className="grid grid-cols-2 gap-2 my-3 font-mono text-xs">
              {components.map((c, i) => (
                <div key={i} className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                  <span className="text-sm">{c.icon}</span>
                  <div>
                    <span className="text-[11px] font-bold text-white block leading-tight">{c.title}</span>
                    <span className="text-[9px] text-cyan-300 block">{c.varName}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-300 font-sans leading-relaxed mt-1">
              “Each scheme is one independent component. But a family&apos;s welfare reality depends on how those components combine together.”
            </p>
          </div>

          {/* Mathematical Connection Vector Card */}
          <div className="my-2 p-3.5 rounded-2xl bg-slate-900/90 border border-cyan-500/20 font-mono text-xs space-y-1.5">
            <div className="flex justify-between items-center text-[10px] text-slate-400 uppercase tracking-wider">
              <span>Mathematical Formulation:</span>
              <span className="text-cyan-400 font-bold">Joint Hilbert Space</span>
            </div>
            <div className="text-cyan-300 font-bold text-sm tracking-wide py-0.5">
              |Ψ_system⟩ = c₁|transit⟩ + c₂|lpg⟩ + c₃|income⟩ + c₄|education⟩
            </div>
            <div className="text-[10px] text-slate-400 font-sans leading-relaxed">
              In classical systems, checking combinations scales exponentially ($2^N$). In quantum systems, all $2^N$ configurations are held in superposition across amplitudes.
            </div>
          </div>

          {/* Analogy badge footnote */}
          <div className="pt-2 border-t border-slate-900 flex items-center gap-2 text-[10px] font-mono text-slate-500">
            <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-bold">
              ANALOGY
            </span>
            <span>Helps visualize multi-variable systems; physics is continuous amplitudes.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
