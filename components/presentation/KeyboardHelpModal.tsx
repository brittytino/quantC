"use client";

import React from "react";
import { X, Keyboard } from "lucide-react";

interface KeyboardHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function KeyboardHelpModal({ isOpen, onClose }: KeyboardHelpModalProps) {
  if (!isOpen) return null;

  const shortcuts = [
    { key: "→ / ↓ / Space", desc: "Next slide" },
    { key: "← / ↑", desc: "Previous slide" },
    { key: "1 – 8", desc: "Jump directly to Slide 1 through 8" },
    { key: "Home / End", desc: "First / Last slide" },
    { key: "F", desc: "Toggle Fullscreen presentation mode" },
    { key: "R", desc: "Replay current slide animation" },
    { key: "D", desc: "Jump directly to Live Experiment (Slide 7)" },
    { key: "N", desc: "Toggle Speaker Notes drawer" },
    { key: "A / S / P", desc: "In Slide 7: Select Attendance / Study / Score" },
    { key: "↑ / ↓", desc: "In Slide 7: Adjust selected feature value" },
    { key: "Enter", desc: "In Slide 7: Execute live quantum model" },
    { key: "Escape", desc: "Exit Fullscreen or close overlays" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 select-none"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-900 transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2.5 mb-4">
          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-300">
            <Keyboard size={18} />
          </div>
          <div>
            <h3 className="text-base font-bold text-white font-mono">Keyboard Navigation</h3>
            <p className="text-xs text-slate-400">Zero-mouse presentation controls</p>
          </div>
        </div>

        <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
          {shortcuts.map(({ key, desc }) => (
            <div
              key={key}
              className="flex items-center justify-between py-1.5 px-3 bg-slate-900/60 border border-slate-800/80 rounded-xl"
            >
              <span className="text-xs font-mono font-bold text-cyan-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                {key}
              </span>
              <span className="text-xs text-slate-300">{desc}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-slate-900 text-center">
          <span className="text-[11px] font-mono text-slate-500">
            Press <kbd className="text-slate-300">N</kbd> anytime during your presentation for speaker talking points.
          </span>
        </div>
      </div>
    </div>
  );
}
