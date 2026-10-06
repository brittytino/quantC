"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProbabilityBarsProps {
  probabilities: {
    "00": number;
    "01": number;
    "10": number;
    "11": number;
  };
  counts?: {
    "00": number;
    "01": number;
    "10": number;
    "11": number;
  };
  shots?: number;
  showCounts?: boolean;
}

export function ProbabilityBars({
  probabilities,
  counts,
  shots = 1000,
  showCounts = true,
}: ProbabilityBarsProps) {
  const states = [
    { key: "00", label: "|00⟩", color: "from-slate-500 to-slate-400", border: "border-slate-500" },
    { key: "01", label: "|01⟩", color: "from-sky-500 to-cyan-400", border: "border-sky-400" },
    { key: "10", label: "|10⟩", color: "from-indigo-500 to-violet-400", border: "border-indigo-400" },
    { key: "11", label: "|11⟩", color: "from-violet-500 to-purple-400", border: "border-purple-400" },
  ] as const;

  return (
    <div className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl p-4 backdrop-blur-md">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="text-xs font-mono font-bold uppercase text-slate-300">
          Computational Basis Distribution (N = 2 Qubits)
        </span>
        <span className="text-[11px] font-mono text-cyan-400">
          {shots.toLocaleString()} Shots Measured
        </span>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {states.map(({ key, label, color, border }) => {
          const pct = probabilities[key] || 0;
          const count = counts ? counts[key] : Math.round((pct / 100) * shots);

          return (
            <div
              key={key}
              className="flex flex-col items-center bg-slate-900/70 border border-slate-800/80 rounded-xl p-2.5 transition-all hover:border-slate-700"
            >
              {/* Basis Label */}
              <span className="text-xs font-mono font-bold text-white mb-2">{label}</span>

              {/* Bar container */}
              <div className="w-full bg-slate-800/80 h-28 rounded-lg flex flex-col justify-end p-1 relative overflow-hidden">
                {/* Background grid line at 50% */}
                <div className="absolute top-1/2 left-0 w-full border-b border-slate-700/40 pointer-events-none" />

                <motion.div
                  className={`w-full rounded-md bg-gradient-to-t ${color} shadow-sm`}
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.max(6, pct)}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>

              {/* Percentage */}
              <span className="text-sm font-mono font-bold text-cyan-300 mt-2">
                {pct.toFixed(1)}%
              </span>

              {/* Shot count */}
              {showCounts && (
                <span className="text-[10px] font-mono text-slate-400">
                  {count} shots
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
