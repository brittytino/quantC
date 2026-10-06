"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ChiefMinisterAnchorProps {
  className?: string;
  imageSrc?: string;
  caption?: string;
}

export function ChiefMinisterAnchor({
  className = "",
  imageSrc = "/cm_image.jpg",
  caption = "State Leadership & Governance Context",
}: ChiefMinisterAnchorProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/60 flex flex-col items-center justify-center p-3 select-none ${className}`}
    >
      <div className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black flex items-center justify-center border border-slate-800/50">
        {!hasError ? (
          <div className="relative w-full h-full">
            <Image
              src={imageSrc}
              alt="Tamil Nadu Leadership Visual Anchor"
              fill
              className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              onError={() => setHasError(true)}
              sizes="(max-width: 768px) 100vw, 350px"
              priority
            />
            {/* Cinematic subtle vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-slate-800/40 pointer-events-none" />
          </div>
        ) : (
          /* Dignified vector fallback if user has not yet dropped cm_image.jpg into public/ */
          <div className="flex flex-col items-center justify-center text-center p-4">
            <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span className="text-xs font-mono font-medium text-slate-300">
              State Leadership & Executive Context
            </span>
            <span className="text-[10px] font-mono text-slate-500 mt-1 max-w-[200px]">
              Drop <code className="text-slate-400">public/cm_image.jpg</code> to anchor photograph
            </span>
          </div>
        )}
      </div>

      <div className="mt-2 text-center">
        <span className="text-[11px] font-mono text-slate-400 block tracking-wide">
          {caption}
        </span>
        <span className="text-[10px] font-mono text-slate-600 block mt-0.5">
          Electoral Executive Landscape • Neutral Academic Analogy
        </span>
      </div>
    </div>
  );
}
