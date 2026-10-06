"use client";

import React from "react";
import { motion } from "framer-motion";
import { BlochSphere } from "../quantum/BlochSphere";
import { QuantumCharacter } from "../quantum/QuantumCharacter";

// Slide 1: Cinematic Opening Slide
export function Slide01Intro() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-12 overflow-hidden select-none">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-violet-600/10 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Subtitle */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 mb-3 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          TECHNICAL SEMINAR • FOUNDATIONS & LIVE DEMO
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans"
        >
          ⚛️ QUANTUM MACHINE LEARNING
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-lg md:text-xl text-slate-300 mt-2 font-light max-w-2xl mx-auto"
        >
          When <span className="text-cyan-400 font-medium">Artificial Intelligence</span> meets the strange rules of{" "}
          <span className="text-violet-400 font-medium">Quantum Mechanics</span>.
        </motion.p>
      </div>

      {/* Center Hero: Formula + Bloch Sphere + Quantum Explorer Character */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 items-center justify-items-center gap-6 my-auto">
        {/* Left: Opening Equation & Animated Sequence */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center md:items-start text-left bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-md max-w-xs w-full"
        >
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
            Core Convergence
          </span>

          <div className="space-y-2.5 font-mono text-sm">
            <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="w-7 h-7 rounded-md bg-cyan-950 border border-cyan-500/40 text-cyan-300 flex items-center justify-center font-bold text-xs">
                AI
              </span>
              <span className="text-slate-200">Pattern Recognition</span>
            </div>

            <div className="text-center text-slate-500 text-xs font-mono font-bold">+</div>

            <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="w-7 h-7 rounded-md bg-violet-950 border border-violet-500/40 text-violet-300 flex items-center justify-center font-bold text-xs">
                QM
              </span>
              <span className="text-slate-200">Hilbert State Space</span>
            </div>

            <div className="text-center text-slate-500 text-xs font-mono font-bold">=</div>

            <div className="flex items-center gap-3 p-2.5 rounded-lg bg-gradient-to-r from-cyan-950/80 to-violet-950/80 border border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.2)]">
              <span className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-400 to-violet-500 text-white flex items-center justify-center font-black text-xs">
                QML
              </span>
              <span className="text-white font-bold text-sm">Quantum Machine Learning</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
            Exploiting superposition & entanglement for feature mapping.
          </div>
        </motion.div>

        {/* Center: Animated Vector Bloch Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="flex flex-col items-center"
        >
          <BlochSphere size={290} interactive={true} label="|ψ⟩ = α|0⟩ + β|1⟩" />
        </motion.div>

        {/* Right: Original Vector Quantum Explorer Character */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <QuantumCharacter width={280} height={320} />
        </motion.div>
      </div>

      {/* Bottom Cinematic Hook Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="relative z-10 text-center border-t border-slate-800/60 pt-3"
      >
        <p className="text-base md:text-lg font-medium text-slate-200 tracking-wide font-sans">
          “What happens when machine learning enters the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 font-bold">
            quantum world
          </span>
          ?”
        </p>
        <span className="text-[11px] font-mono text-slate-500 mt-0.5 block">
          Presented by 2 Students • Technical Deck • Python + Qiskit Architecture
        </span>
      </motion.div>
    </div>
  );
}
