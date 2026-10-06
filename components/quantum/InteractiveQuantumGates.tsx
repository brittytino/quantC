"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface InteractiveQuantumGatesProps {
  className?: string;
  activeGateIndex?: number;
}

export function InteractiveQuantumGates({
  className = "",
  activeGateIndex = -1,
}: InteractiveQuantumGatesProps) {
  const [selectedGate, setSelectedGate] = useState<number>(0);

  const gates = [
    {
      symbol: "H",
      name: "HADAMARD GATE",
      action: "Creates Superposition",
      formula: "|0⟩ ➔ (|0⟩ + |1⟩) / √2",
      role: "Transforms a definite classical-like ground state into an equal linear combination of possibilities.",
      color: "#38bdf8",
      accentBg: "rgba(56, 189, 248, 0.1)",
    },
    {
      symbol: "RY",
      name: "ROTATION-Y GATE",
      action: "Changes the Quantum State",
      formula: "Ry(θ) = exp(-i θ Y / 2)",
      role: "Continuous rotation around the Y-axis. In QML, this encodes numerical feature inputs directly into quantum angles.",
      color: "#06b6d4",
      accentBg: "rgba(6, 182, 212, 0.1)",
    },
    {
      symbol: "CNOT",
      name: "CONTROLLED-NOT GATE",
      action: "Creates Correlation / Entanglement",
      formula: "|00⟩ ➔ (|00⟩ + |11⟩) / √2",
      role: "Couples two qubits together so the state of one becomes conditional on the other. Non-separable joint probability space.",
      color: "#a855f7",
      accentBg: "rgba(168, 85, 247, 0.1)",
    },
    {
      symbol: "M",
      name: "MEASUREMENT",
      action: "Turns Quantum State into Classical Result",
      formula: "P(x) = |⟨x|ψ⟩|²",
      role: "Projects the continuous probability amplitudes onto physical detector readings (e.g. 00, 01, 10, or 11 bitstrings).",
      color: "#10b981",
      accentBg: "rgba(16, 185, 129, 0.1)",
    },
  ];

  return (
    <div className={`w-full flex flex-col justify-between select-none ${className}`}>
      {/* Visual Quantum Circuit Schematic */}
      <div className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 shadow-xl mb-4">
        <svg viewBox="0 0 680 150" className="w-full h-auto overflow-visible">
          {/* Wire 0 */}
          <text x="20" y="45" fill="#38bdf8" fontSize="13" fontFamily="monospace" fontWeight="bold">
            q₀ |0⟩
          </text>
          <line x1="75" y1="40" x2="620" y2="40" stroke="#334155" strokeWidth="2.5" />

          {/* Wire 1 */}
          <text x="20" y="115" fill="#c084fc" fontSize="13" fontFamily="monospace" fontWeight="bold">
            q₁ |0⟩
          </text>
          <line x1="75" y1="110" x2="620" y2="110" stroke="#334155" strokeWidth="2.5" />

          {/* Gate 1: H Gates */}
          <g
            onClick={() => setSelectedGate(0)}
            className="cursor-pointer"
            transform="translate(120, 20)"
          >
            <rect
              width="40"
              height="40"
              rx="6"
              fill={selectedGate === 0 ? "#0c4a6e" : "#1e293b"}
              stroke="#38bdf8"
              strokeWidth={selectedGate === 0 ? "2.5" : "1.2"}
            />
            <text x="20" y="25" fill="#38bdf8" fontSize="16" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
              H
            </text>
          </g>
          <g
            onClick={() => setSelectedGate(0)}
            className="cursor-pointer"
            transform="translate(120, 90)"
          >
            <rect
              width="40"
              height="40"
              rx="6"
              fill={selectedGate === 0 ? "#0c4a6e" : "#1e293b"}
              stroke="#38bdf8"
              strokeWidth={selectedGate === 0 ? "2.5" : "1.2"}
            />
            <text x="20" y="25" fill="#38bdf8" fontSize="16" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
              H
            </text>
          </g>

          {/* Gate 2: RY(θ) Gates */}
          <g
            onClick={() => setSelectedGate(1)}
            className="cursor-pointer"
            transform="translate(220, 20)"
          >
            <rect
              width="55"
              height="40"
              rx="6"
              fill={selectedGate === 1 ? "#0e7490" : "#0c4a6e"}
              stroke="#06b6d4"
              strokeWidth={selectedGate === 1 ? "2.5" : "1.2"}
            />
            <text x="27.5" y="25" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
              Ry(θ₀)
            </text>
          </g>
          <g
            onClick={() => setSelectedGate(1)}
            className="cursor-pointer"
            transform="translate(220, 90)"
          >
            <rect
              width="55"
              height="40"
              rx="6"
              fill={selectedGate === 1 ? "#0e7490" : "#0c4a6e"}
              stroke="#06b6d4"
              strokeWidth={selectedGate === 1 ? "2.5" : "1.2"}
            />
            <text x="27.5" y="25" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
              Ry(θ₁)
            </text>
          </g>

          {/* Gate 3: CNOT */}
          <g onClick={() => setSelectedGate(2)} className="cursor-pointer">
            {/* Control */}
            <circle
              cx="340"
              cy="40"
              r="6"
              fill="#a855f7"
              stroke="#ffffff"
              strokeWidth={selectedGate === 2 ? "2" : "1"}
            />
            {/* Conduit line */}
            <line x1="340" y1="40" x2="340" y2="110" stroke="#a855f7" strokeWidth="2.5" />
            {/* Target */}
            <circle
              cx="340"
              cy="110"
              r="14"
              fill="#1e1b4b"
              stroke="#a855f7"
              strokeWidth={selectedGate === 2 ? "2.5" : "1.5"}
            />
            <line x1="331" y1="110" x2="349" y2="110" stroke="#a855f7" strokeWidth="2" />
            <line x1="340" y1="101" x2="340" y2="119" stroke="#a855f7" strokeWidth="2" />
          </g>

          {/* Variational Param Layer Ry(w) */}
          <g
            onClick={() => setSelectedGate(1)}
            className="cursor-pointer"
            transform="translate(410, 20)"
          >
            <rect width="55" height="40" rx="6" fill="#3b0764" stroke="#c084fc" strokeWidth="1.2" />
            <text x="27.5" y="25" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
              Ry(w₀)
            </text>
          </g>
          <g
            onClick={() => setSelectedGate(1)}
            className="cursor-pointer"
            transform="translate(410, 90)"
          >
            <rect width="55" height="40" rx="6" fill="#3b0764" stroke="#c084fc" strokeWidth="1.2" />
            <text x="27.5" y="25" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
              Ry(w₁)
            </text>
          </g>

          {/* Gate 4: Measurement M */}
          <g
            onClick={() => setSelectedGate(3)}
            className="cursor-pointer"
            transform="translate(520, 20)"
          >
            <rect
              width="45"
              height="40"
              rx="6"
              fill={selectedGate === 3 ? "#064e3b" : "#0f172a"}
              stroke="#10b981"
              strokeWidth={selectedGate === 3 ? "2.5" : "1.2"}
            />
            <path d="M10 28 A 12 12 0 0 1 35 28" fill="none" stroke="#34d399" strokeWidth="1.5" />
            <line x1="22" y1="28" x2="30" y2="15" stroke="#34d399" strokeWidth="1.8" />
          </g>
          <g
            onClick={() => setSelectedGate(3)}
            className="cursor-pointer"
            transform="translate(520, 90)"
          >
            <rect
              width="45"
              height="40"
              rx="6"
              fill={selectedGate === 3 ? "#064e3b" : "#0f172a"}
              stroke="#10b981"
              strokeWidth={selectedGate === 3 ? "2.5" : "1.2"}
            />
            <path d="M10 28 A 12 12 0 0 1 35 28" fill="none" stroke="#34d399" strokeWidth="1.5" />
            <line x1="22" y1="28" x2="30" y2="15" stroke="#34d399" strokeWidth="1.8" />
          </g>

          {/* Classical Double Wires */}
          <line x1="565" y1="37" x2="630" y2="37" stroke="#10b981" strokeWidth="1.2" />
          <line x1="565" y1="43" x2="630" y2="43" stroke="#10b981" strokeWidth="1.2" />
          <line x1="565" y1="107" x2="630" y2="107" stroke="#10b981" strokeWidth="1.2" />
          <line x1="565" y1="113" x2="630" y2="113" stroke="#10b981" strokeWidth="1.2" />
          <text x="638" y="44" fill="#10b981" fontSize="12" fontFamily="monospace">
            c[0]
          </text>
          <text x="638" y="114" fill="#10b981" fontSize="12" fontFamily="monospace">
            c[1]
          </text>
        </svg>
      </div>

      {/* 4 Clean Gate Cards (No paragraph blocks) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {gates.map((g, idx) => {
          const isSelected = selectedGate === idx;
          return (
            <div
              key={g.name}
              onClick={() => setSelectedGate(idx)}
              className={`cursor-pointer rounded-xl p-3.5 border transition-all ${
                isSelected
                  ? "bg-slate-900 border-white shadow-lg"
                  : "bg-slate-950/80 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="px-2 py-0.5 rounded text-xs font-mono font-bold"
                  style={{ color: g.color, backgroundColor: g.accentBg }}
                >
                  {g.symbol}
                </span>
                <span className="text-[10px] font-mono text-slate-500">Step 0{idx + 1}</span>
              </div>

              <h4 className="text-sm font-bold text-white font-mono tracking-tight">{g.action}</h4>
              <span className="text-[11px] font-mono text-cyan-300 block mt-1">{g.formula}</span>

              <p className="text-xs text-slate-300 font-sans mt-2 leading-relaxed">
                {g.role}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
