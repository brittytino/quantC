"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface QuantumCircuitProps {
  theta0?: number;
  theta1?: number;
  w0?: number;
  w1?: number;
  activeGateIndex?: number;
  isExecuting?: boolean;
}

export function QuantumCircuit({
  theta0 = 1.76,
  theta1 = 2.45,
  w0 = 0.84,
  w1 = 1.28,
  activeGateIndex = -1,
  isExecuting = false,
}: QuantumCircuitProps) {
  return (
    <div className="relative w-full bg-slate-950/90 border border-cyan-500/30 rounded-2xl p-4 shadow-xl overflow-hidden backdrop-blur-md">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-64 h-32 bg-cyan-500/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-mono font-bold uppercase text-cyan-300 tracking-wider">
            2-Qubit Variational Quantum Circuit (VQC)
          </span>
        </div>
        <div className="flex gap-3 text-[11px] font-mono text-slate-400">
          <span>Depth: 4</span>
          <span>•</span>
          <span>Gates: 6</span>
          <span>•</span>
          <span>Entangler: CNOT</span>
        </div>
      </div>

      {/* Circuit SVG Diagram */}
      <div className="relative py-2">
        <svg viewBox="0 0 740 180" className="w-full h-auto overflow-visible select-none">
          <defs>
            <filter id="gateGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>

          {/* ================= QUBIT 0 WIRE ================= */}
          {/* Wire label */}
          <text x="25" y="55" fill="#38bdf8" fontSize="15" fontFamily="monospace" fontWeight="bold">
            q₀ |0⟩
          </text>
          {/* Wire line */}
          <line x1="85" y1="50" x2="680" y2="50" stroke="#334155" strokeWidth="2.5" />

          {/* ================= QUBIT 1 WIRE ================= */}
          {/* Wire label */}
          <text x="25" y="135" fill="#c084fc" fontSize="15" fontFamily="monospace" fontWeight="bold">
            q₁ |0⟩
          </text>
          {/* Wire line */}
          <line x1="85" y1="130" x2="680" y2="130" stroke="#334155" strokeWidth="2.5" />

          {/* ================= GATES STAGE 1: HADAMARD (H) ================= */}
          {/* H Gate q0 */}
          <g transform="translate(130, 26)">
            <rect
              width="48"
              height="48"
              rx="8"
              fill="#1e293b"
              stroke="#38bdf8"
              strokeWidth={activeGateIndex === 0 ? "2.5" : "1.5"}
              className="transition-all"
              filter={activeGateIndex === 0 ? "url(#gateGlow)" : undefined}
            />
            <text x="24" y="30" fill="#38bdf8" fontSize="18" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
              H
            </text>
          </g>
          {/* H Gate q1 */}
          <g transform="translate(130, 106)">
            <rect
              width="48"
              height="48"
              rx="8"
              fill="#1e293b"
              stroke="#38bdf8"
              strokeWidth={activeGateIndex === 0 ? "2.5" : "1.5"}
              filter={activeGateIndex === 0 ? "url(#gateGlow)" : undefined}
            />
            <text x="24" y="30" fill="#38bdf8" fontSize="18" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
              H
            </text>
          </g>

          {/* ================= GATES STAGE 2: FEATURE ENCODING RY(θ) ================= */}
          {/* Ry(θ0) q0 */}
          <g transform="translate(230, 26)">
            <rect
              width="68"
              height="48"
              rx="8"
              fill="#0c4a6e"
              stroke="#06b6d4"
              strokeWidth={activeGateIndex === 1 ? "2.5" : "1.5"}
              filter={activeGateIndex === 1 ? "url(#gateGlow)" : undefined}
            />
            <text x="34" y="24" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
              Ry(θ₀)
            </text>
            <text x="34" y="39" fill="#67e8f9" fontSize="10" fontFamily="monospace" textAnchor="middle">
              {theta0.toFixed(2)}
            </text>
          </g>
          {/* Ry(θ1) q1 */}
          <g transform="translate(230, 106)">
            <rect
              width="68"
              height="48"
              rx="8"
              fill="#0c4a6e"
              stroke="#06b6d4"
              strokeWidth={activeGateIndex === 1 ? "2.5" : "1.5"}
              filter={activeGateIndex === 1 ? "url(#gateGlow)" : undefined}
            />
            <text x="34" y="24" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
              Ry(θ₁)
            </text>
            <text x="34" y="39" fill="#67e8f9" fontSize="10" fontFamily="monospace" textAnchor="middle">
              {theta1.toFixed(2)}
            </text>
          </g>

          {/* ================= GATES STAGE 3: CNOT ENTANGLER (CX) ================= */}
          {/* Control point on q0 */}
          <circle
            cx="355"
            cy="50"
            r="7"
            fill="#a855f7"
            stroke="#ffffff"
            strokeWidth="1.5"
            filter={activeGateIndex === 2 ? "url(#gateGlow)" : undefined}
          />
          {/* Connecting vertical line */}
          <line
            x1="355"
            y1="50"
            x2="355"
            y2="130"
            stroke="#a855f7"
            strokeWidth="2.5"
            strokeDasharray={activeGateIndex === 2 ? "none" : "none"}
          />
          {/* Target circle on q1 */}
          <circle
            cx="355"
            cy="130"
            r="16"
            fill="#1e1b4b"
            stroke="#a855f7"
            strokeWidth="2.5"
            filter={activeGateIndex === 2 ? "url(#gateGlow)" : undefined}
          />
          {/* Target Plus sign */}
          <line x1="344" y1="130" x2="366" y2="130" stroke="#a855f7" strokeWidth="2.5" />
          <line x1="355" y1="119" x2="355" y2="141" stroke="#a855f7" strokeWidth="2.5" />

          {/* ================= GATES STAGE 4: VARIATIONAL WEIGHTS RY(w) ================= */}
          {/* Ry(w0) q0 */}
          <g transform="translate(425, 26)">
            <rect
              width="68"
              height="48"
              rx="8"
              fill="#3b0764"
              stroke="#c084fc"
              strokeWidth={activeGateIndex === 3 ? "2.5" : "1.5"}
              filter={activeGateIndex === 3 ? "url(#gateGlow)" : undefined}
            />
            <text x="34" y="24" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
              Ry(w₀)
            </text>
            <text x="34" y="39" fill="#e9d5ff" fontSize="10" fontFamily="monospace" textAnchor="middle">
              {w0.toFixed(2)}
            </text>
          </g>
          {/* Ry(w1) q1 */}
          <g transform="translate(425, 106)">
            <rect
              width="68"
              height="48"
              rx="8"
              fill="#3b0764"
              stroke="#c084fc"
              strokeWidth={activeGateIndex === 3 ? "2.5" : "1.5"}
              filter={activeGateIndex === 3 ? "url(#gateGlow)" : undefined}
            />
            <text x="34" y="24" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
              Ry(w₁)
            </text>
            <text x="34" y="39" fill="#e9d5ff" fontSize="10" fontFamily="monospace" textAnchor="middle">
              {w1.toFixed(2)}
            </text>
          </g>

          {/* ================= GATES STAGE 5: MEASUREMENT METERS ================= */}
          {/* Measure q0 */}
          <g transform="translate(545, 26)">
            <rect
              width="50"
              height="48"
              rx="8"
              fill="#0f172a"
              stroke="#10b981"
              strokeWidth={activeGateIndex === 4 ? "2.5" : "1.5"}
              filter={activeGateIndex === 4 ? "url(#gateGlow)" : undefined}
            />
            {/* Meter arc */}
            <path d="M12 36 A 14 14 0 0 1 38 36" fill="none" stroke="#34d399" strokeWidth="1.8" />
            <line x1="25" y1="36" x2="34" y2="20" stroke="#34d399" strokeWidth="2" />
            <text x="25" y="44" fill="#34d399" fontSize="9" fontFamily="monospace" textAnchor="middle">
              M₀
            </text>
          </g>
          {/* Measure q1 */}
          <g transform="translate(545, 106)">
            <rect
              width="50"
              height="48"
              rx="8"
              fill="#0f172a"
              stroke="#10b981"
              strokeWidth={activeGateIndex === 4 ? "2.5" : "1.5"}
              filter={activeGateIndex === 4 ? "url(#gateGlow)" : undefined}
            />
            {/* Meter arc */}
            <path d="M12 36 A 14 14 0 0 1 38 36" fill="none" stroke="#34d399" strokeWidth="1.8" />
            <line x1="25" y1="36" x2="34" y2="20" stroke="#34d399" strokeWidth="2" />
            <text x="25" y="44" fill="#34d399" fontSize="9" fontFamily="monospace" textAnchor="middle">
              M₁
            </text>
          </g>

          {/* Double wire for classical measurement output */}
          <line x1="595" y1="46" x2="680" y2="46" stroke="#10b981" strokeWidth="1.5" />
          <line x1="595" y1="52" x2="680" y2="52" stroke="#10b981" strokeWidth="1.5" />

          <line x1="595" y1="126" x2="680" y2="126" stroke="#10b981" strokeWidth="1.5" />
          <line x1="595" y1="132" x2="680" y2="132" stroke="#10b981" strokeWidth="1.5" />

          {/* Classical bit register output labels */}
          <text x="690" y="53" fill="#10b981" fontSize="13" fontFamily="monospace" fontWeight="bold">
            c[0]
          </text>
          <text x="690" y="133" fill="#10b981" fontSize="13" fontFamily="monospace" fontWeight="bold">
            c[1]
          </text>

          {/* Animated photon pulse running along wire when executing */}
          {isExecuting && (
            <>
              <motion.circle
                r="6"
                fill="#38bdf8"
                filter="url(#gateGlow)"
                animate={{ cx: [85, 660], cy: [50, 50] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle
                r="6"
                fill="#c084fc"
                filter="url(#gateGlow)"
                animate={{ cx: [85, 660], cy: [130, 130] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.1 }}
              />
            </>
          )}
        </svg>
      </div>

      {/* Gate labels legend */}
      <div className="grid grid-cols-4 gap-2 pt-2 border-t border-slate-800 text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-cyan-300">
          <span className="w-2.5 h-2.5 rounded bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-[9px] font-bold">
            H
          </span>
          <span>Superposition</span>
        </div>
        <div className="flex items-center gap-1.5 text-sky-300">
          <span className="w-2.5 h-2.5 rounded bg-sky-500/20 border border-sky-400 flex items-center justify-center text-[9px] font-bold">
            Ry
          </span>
          <span>Encoding</span>
        </div>
        <div className="flex items-center gap-1.5 text-purple-300">
          <span className="w-2.5 h-2.5 rounded bg-purple-500/20 border border-purple-400 flex items-center justify-center text-[9px] font-bold">
            CX
          </span>
          <span>Entanglement</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-300">
          <span className="w-2.5 h-2.5 rounded bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-[9px] font-bold">
            M
          </span>
          <span>Measurement</span>
        </div>
      </div>
    </div>
  );
}
