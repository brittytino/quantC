"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onJump: (slideIndex: number) => void;
}

const SLIDE_TITLES = [
  "1. Quantum Machine Learning",
  "2. Why Do We Need QML?",
  "3. The Quantum World",
  "4. How Quantum + ML Connect",
  "5. QML Algorithms (VQC, QSVM, QNN)",
  "6. Python & Qiskit Implementation",
  "7. Live Quantum ML Web Demo",
  "8. Hype or Real Revolution?",
];

export function NavigationControls({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onJump,
}: NavigationControlsProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  // Auto-hide controls after 3.5 seconds of mouse inactivity
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = () => {
      setIsVisible(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 3500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.25 }}
          className="absolute bottom-4 inset-x-6 flex items-center justify-between pointer-events-none z-30 select-none"
        >
          {/* Bottom-left Previous button */}
          <div className="pointer-events-auto">
            <button
              onClick={onPrev}
              disabled={currentSlide === 1}
              className={`p-2.5 rounded-xl border flex items-center justify-center transition-all ${
                currentSlide === 1
                  ? "bg-slate-900/40 border-slate-800/40 text-slate-600 cursor-not-allowed"
                  : "bg-slate-900/90 hover:bg-slate-800 border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 shadow-lg backdrop-blur-md"
              }`}
              title="Previous Slide (← or Space with shift)"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          {/* Bottom-center: Dots indicator & keyboard hints */}
          <div className="pointer-events-auto flex flex-col items-center gap-1.5 bg-slate-950/80 border border-slate-800/90 rounded-2xl px-5 py-2 backdrop-blur-md shadow-xl">
            {/* Dots */}
            <div className="flex items-center gap-2 relative">
              {Array.from({ length: totalSlides }, (_, i) => {
                const slideNum = i + 1;
                const isActive = currentSlide === slideNum;
                return (
                  <div key={slideNum} className="relative">
                    <button
                      onClick={() => onJump(slideNum)}
                      onMouseEnter={() => setHoveredDot(slideNum)}
                      onMouseLeave={() => setHoveredDot(null)}
                      className={`transition-all duration-300 rounded-full ${
                        isActive
                          ? "w-7 h-2.5 bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                          : "w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500"
                      }`}
                      aria-label={`Jump to slide ${slideNum}`}
                    />

                    {/* Tooltip on dot hover */}
                    {hoveredDot === slideNum && (
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900 border border-slate-700 text-slate-200 text-[11px] font-mono px-2 py-1 rounded shadow-lg z-40 pointer-events-none">
                        {SLIDE_TITLES[i]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Small keyboard hint */}
            <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400">
              <span>← → Navigate</span>
              <span>•</span>
              <span>1–8 Jump</span>
              <span>•</span>
              <span>F Fullscreen</span>
            </div>
          </div>

          {/* Bottom-right Next button */}
          <div className="pointer-events-auto">
            <button
              onClick={onNext}
              disabled={currentSlide === totalSlides}
              className={`p-2.5 rounded-xl border flex items-center justify-center transition-all ${
                currentSlide === totalSlides
                  ? "bg-slate-900/40 border-slate-800/40 text-slate-600 cursor-not-allowed"
                  : "bg-slate-900/90 hover:bg-slate-800 border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 shadow-lg backdrop-blur-md"
              }`}
              title="Next Slide (→ or Space)"
              aria-label="Next Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
