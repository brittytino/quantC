"use client";

import React from "react";
import { X, Clock, Lightbulb, BookOpen } from "lucide-react";
import { SPEAKER_NOTES } from "@/lib/speaker-notes";

interface SpeakerNotesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
}

export function SpeakerNotesDrawer({ isOpen, onClose, currentSlide }: SpeakerNotesDrawerProps) {
  if (!isOpen) return null;

  const note = SPEAKER_NOTES[currentSlide] || {
    slide: currentSlide,
    title: `Slide ${currentSlide}`,
    keyIdea: "Explain key visual transitions.",
    talkingPoints: ["Walk the audience through the diagram.", "Emphasize core concept."],
    timingMinutes: "1:30",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs select-none"
      onClick={onClose}
    >
      <aside
        className="w-full max-w-md h-full bg-slate-950 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-cyan-400" />
              <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider">
                Speaker Notes • Slide {String(currentSlide).padStart(2, "0")}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-900 transition-colors"
              title="Close notes (N or Esc)"
            >
              <X size={16} />
            </button>
          </div>

          {/* Slide Title & Timing */}
          <div className="mb-4">
            <h4 className="text-lg font-bold text-white tracking-tight">{note.title}</h4>
            <div className="flex items-center gap-2 mt-1 text-xs font-mono text-slate-400">
              <Clock size={13} className="text-cyan-400" />
              <span>Target Duration: ~{note.timingMinutes} mins</span>
            </div>
          </div>

          {/* Key Idea */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 mb-5">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-300 uppercase mb-1">
              <Lightbulb size={14} />
              Core Takeaway for Audience
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">{note.keyIdea}</p>
          </div>

          {/* Talking Points List */}
          <div>
            <h5 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider mb-2">
              Presenter Talking Points
            </h5>
            <ul className="space-y-3 font-sans text-xs text-slate-200">
              {note.talkingPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center font-mono text-[10px] text-cyan-400 shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Hint */}
        <div className="pt-4 border-t border-slate-900 text-center text-[10px] font-mono text-slate-500">
          Press <kbd className="text-slate-300 bg-slate-900 px-1 py-0.5 rounded border border-slate-800">N</kbd> anytime to toggle notes.
        </div>
      </aside>
    </div>
  );
}
