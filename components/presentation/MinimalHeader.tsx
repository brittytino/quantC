"use client";

import React from "react";
import { Maximize, Minimize, BookOpen, HelpCircle } from "lucide-react";
import { ConnectionStatus } from "@/types/presentation";

interface MinimalHeaderProps {
  currentSlide: number;
  totalSlides: number;
  connectionStatus: ConnectionStatus;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onToggleNotes: () => void;
  onOpenHelp: () => void;
}

export function MinimalHeader({
  currentSlide,
  totalSlides,
  connectionStatus,
  isFullscreen,
  onToggleFullscreen,
  onToggleNotes,
  onOpenHelp,
}: MinimalHeaderProps) {
  return (
    <header className="w-full flex items-center justify-between px-6 sm:px-10 py-3 select-none z-30 bg-transparent">
      {/* Discreet Left Brand Marker */}
      <div className="flex items-center gap-2.5">
        <span className="text-xs font-mono font-medium tracking-wider text-slate-400">
          QUANTUM MACHINE LEARNING <span className="text-slate-600 font-normal">WITH PYTHON</span>
        </span>

        {/* Quiet status dot */}
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: connectionStatus === "connected" ? "#10b981" : "#0284c7",
          }}
          title="Next.js Quantum Engine Active (Vercel Ready)"
        />
      </div>

      {/* Subtle Slide Counter in Corner & Utility Triggers */}
      <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
        <button
          onClick={onToggleNotes}
          className="p-1 rounded-lg hover:bg-slate-900 hover:text-slate-200 transition-colors cursor-pointer"
          title="Speaker Notes (N)"
        >
          <BookOpen size={13} />
        </button>

        <button
          onClick={onOpenHelp}
          className="p-1 rounded-lg hover:bg-slate-900 hover:text-slate-200 transition-colors cursor-pointer"
          title="Keyboard Shortcuts (?)"
        >
          <HelpCircle size={13} />
        </button>

        <button
          onClick={onToggleFullscreen}
          className="p-1 rounded-lg hover:bg-slate-900 hover:text-slate-200 transition-colors cursor-pointer"
          title={isFullscreen ? "Exit Fullscreen (F / Esc)" : "Fullscreen Mode (F)"}
        >
          {isFullscreen ? <Minimize size={13} /> : <Maximize size={13} />}
        </button>

        <div className="h-3 w-px bg-slate-800" />

        {/* Slide Counter: Strictly 03 / 08 */}
        <div className="text-slate-300 font-mono tracking-wider text-xs">
          <span className="text-white font-bold">{String(currentSlide).padStart(2, "0")}</span>
          <span className="text-slate-600"> / </span>
          <span>{String(totalSlides).padStart(2, "0")}</span>
        </div>
      </div>
    </header>
  );
}
