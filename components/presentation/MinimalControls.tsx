"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MinimalControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onJump: (slideIndex: number) => void;
}

export function MinimalControls({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onJump,
}: MinimalControlsProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Auto-hide navigation controls completely on mouse inactivity
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleMouseMove = () => {
      setIsVisible(true);
      clearTimeout(timer);
      timer = setTimeout(() => setIsVisible(false), 2200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.25 }}
          className="absolute bottom-4 inset-x-8 flex items-center justify-between pointer-events-none z-30 select-none"
        >
          {/* Previous Arrow */}
          <div className="pointer-events-auto">
            <button
              onClick={onPrev}
              disabled={currentSlide === 1}
              className={`p-2 rounded-xl transition-all ${
                currentSlide === 1
                  ? "opacity-20 cursor-not-allowed text-slate-700"
                  : "text-slate-400 hover:text-white bg-slate-950/80 border border-slate-800/80 hover:bg-slate-900"
              }`}
              title="Previous Slide (← / ↑)"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          {/* Minimal Slide Dots Only (Zero permanent text labels) */}
          <div className="pointer-events-auto flex items-center gap-2 bg-slate-950/80 border border-slate-800/80 px-3 py-1.5 rounded-full">
            {Array.from({ length: totalSlides }, (_, i) => {
              const num = i + 1;
              const isActive = currentSlide === num;
              return (
                <button
                  key={num}
                  onClick={() => onJump(num)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? "w-5 h-1.5 bg-white"
                      : "w-1.5 h-1.5 bg-slate-700 hover:bg-slate-400"
                  }`}
                  title={`Jump to Slide ${num}`}
                />
              );
            })}
          </div>

          {/* Next Arrow */}
          <div className="pointer-events-auto">
            <button
              onClick={onNext}
              disabled={currentSlide === totalSlides}
              className={`p-2 rounded-xl transition-all ${
                currentSlide === totalSlides
                  ? "opacity-20 cursor-not-allowed text-slate-700"
                  : "text-slate-400 hover:text-white bg-slate-950/80 border border-slate-800/80 hover:bg-slate-900"
              }`}
              title="Next Slide (→ / ↓ / Space)"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
