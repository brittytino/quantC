"use client";

import React, { useState } from "react";
import { Maximize, Minimize, HelpCircle, Cpu, CheckCircle2, Radio } from "lucide-react";
import { ConnectionStatus } from "@/types/presentation";

interface SlideHeaderProps {
  currentSlide: number;
  totalSlides: number;
  presenter: 1 | 2;
  connectionStatus: ConnectionStatus;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onOpenHelp: () => void;
  onRetryConnection: () => void;
}

export function SlideHeader({
  currentSlide,
  totalSlides,
  presenter,
  connectionStatus,
  isFullscreen,
  onToggleFullscreen,
  onOpenHelp,
  onRetryConnection,
}: SlideHeaderProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const formattedSlide = String(currentSlide).padStart(2, "0");
  const formattedTotal = String(totalSlides).padStart(2, "0");

  return (
    <header className="w-full flex items-center justify-between px-6 py-3 select-none border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md z-30">
      {/* Left: Presentation Branding & Presenter indicator */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">⚛️</span>
          <span className="text-sm font-bold tracking-tight text-white font-mono hidden sm:inline-block">
            Quantum ML <span className="text-cyan-400 font-normal">with Python</span>
          </span>
        </div>

        <div className="h-4 w-px bg-slate-800" />

        {/* Presenter Badge */}
        {presenter === 1 ? (
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            PRESENTER 01
          </div>
        ) : (
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-violet-950/80 border border-violet-500/40 text-violet-300 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            PRESENTER 02
          </div>
        )}
      </div>

      {/* Middle: Quantum Engine Connection Status Pill */}
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={onRetryConnection}
      >
        {connectionStatus === "connected" ? (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 transition-all">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium">Python Quantum Engine: Connected</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-violet-950/70 border border-violet-500/30 text-violet-300 hover:bg-violet-900/60 transition-all">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            <span>Demo Simulation Mode</span>
            <span className="text-[10px] text-slate-400 bg-slate-900 px-1.5 py-0.2 rounded border border-slate-700">
              Fallback
            </span>
          </div>
        )}

        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 bg-slate-900/95 border border-slate-700 rounded-lg p-2.5 shadow-2xl text-[11px] text-slate-300 z-50 pointer-events-none">
            {connectionStatus === "connected" ? (
              <p>
                Connected to local FastAPI + Qiskit backend (<code className="text-cyan-300">port 8000</code>). Click to re-verify.
              </p>
            ) : (
              <p>
                Operating with client-side exact statevector quantum simulator. Seamless for presentation. Click to recheck Python backend.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Right: Slide Counter, Shortcuts, Fullscreen */}
      <div className="flex items-center gap-3 font-mono">
        <div className="flex items-center gap-1 text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-200">
          <span className="text-cyan-400 font-bold">{formattedSlide}</span>
          <span className="text-slate-500">/</span>
          <span className="text-slate-400">{formattedTotal}</span>
        </div>

        {/* Keyboard Help Trigger */}
        <button
          onClick={onOpenHelp}
          className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          title="Keyboard Shortcuts (?)"
          aria-label="Keyboard Shortcuts"
        >
          <HelpCircle size={16} />
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={onToggleFullscreen}
          className="flex items-center gap-1 px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg text-xs text-slate-300 hover:text-white transition-all"
          title={isFullscreen ? "Exit Fullscreen (Esc or F)" : "Fullscreen Mode (F)"}
          aria-label="Toggle Fullscreen"
        >
          {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
          <span className="text-[11px] font-mono hidden md:inline-block">F</span>
        </button>
      </div>
    </header>
  );
}
