"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BlochSphereProps {
  interactive?: boolean;
  size?: number;
  initialTheta?: number; // 0 to Math.PI
  initialPhi?: number;   // 0 to 2*Math.PI
  label?: string;
  animateSuperposition?: boolean;
}

export function BlochSphere({
  interactive = false,
  size = 320,
  initialTheta = Math.PI / 3,
  initialPhi = Math.PI / 4,
  label = "|ψ⟩ = α|0⟩ + β|1⟩",
  animateSuperposition = true,
}: BlochSphereProps) {
  const [theta, setTheta] = useState(initialTheta);
  const [phi, setPhi] = useState(initialPhi);
  const [isRotating, setIsRotating] = useState(animateSuperposition);

  // Auto precession animation if enabled
  useEffect(() => {
    if (!isRotating) return;
    const interval = setInterval(() => {
      setPhi((p) => (p + 0.03) % (2 * Math.PI));
    }, 40);
    return () => clearInterval(interval);
  }, [isRotating]);

  // Center coordinate
  const r = size * 0.38;
  const cx = size / 2;
  const cy = size / 2;

  // Qubit vector tip projection
  // x = r * sin(theta) * cos(phi)
  // y = r * cos(theta) (inverted in screen coords: up is -z)
  // z = r * sin(theta) * sin(phi)
  const tipX = cx + r * Math.sin(theta) * Math.cos(phi) * 0.95;
  const tipY = cy - r * Math.cos(theta) * 0.95 + r * Math.sin(theta) * Math.sin(phi) * 0.28;

  // Quantum amplitudes
  const alpha = Math.cos(theta / 2);
  const beta = Math.sin(theta / 2);
  const prob0 = (alpha * alpha * 100).toFixed(1);
  const prob1 = (beta * beta * 100).toFixed(1);

  return (
    <div className="flex flex-col items-center select-none">
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {/* Ambient glow behind sphere */}
        <div
          className="absolute rounded-full blur-2xl opacity-30 pointer-events-none"
          style={{
            width: size * 0.8,
            height: size * 0.8,
            background: "radial-gradient(circle, #8b5cf6 0%, #38bdf8 60%, transparent 80%)",
          }}
        />

        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
          <defs>
            <radialGradient id="sphereGrad" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#0f172a" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#020617" stopOpacity="0.95" />
            </radialGradient>
            <linearGradient id="vectorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Sphere body */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="url(#sphereGrad)"
            stroke="#6366f1"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />

          {/* Equator Ellipse (XY plane) */}
          <ellipse
            cx={cx}
            cy={cy}
            rx={r}
            ry={r * 0.32}
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1.2"
            strokeDasharray="4 3"
            strokeOpacity="0.5"
          />

          {/* Prime Meridian Ellipse (YZ plane) */}
          <ellipse
            cx={cx}
            cy={cy}
            rx={r * 0.32}
            ry={r}
            fill="none"
            stroke="#a855f7"
            strokeWidth="1"
            strokeDasharray="4 3"
            strokeOpacity="0.3"
          />

          {/* Z Axis: |0> (top) to |1> (bottom) */}
          <line
            x1={cx}
            y1={cy - r - 20}
            x2={cx}
            y2={cy + r + 20}
            stroke="#94a3b8"
            strokeWidth="1.2"
            strokeOpacity="0.6"
          />
          {/* Z Axis arrowheads */}
          <polygon
            points={`${cx},${cy - r - 22} ${cx - 4},${cy - r - 12} ${cx + 4},${cy - r - 12}`}
            fill="#38bdf8"
          />
          <polygon
            points={`${cx},${cy + r + 22} ${cx - 4},${cy + r + 12} ${cx + 4},${cy + r + 12}`}
            fill="#94a3b8"
          />

          {/* X Axis */}
          <line
            x1={cx - r - 18}
            y1={cy + 14}
            x2={cx + r + 18}
            y2={cy - 14}
            stroke="#64748b"
            strokeWidth="0.9"
            strokeOpacity="0.4"
          />

          {/* State vector |psi> line */}
          <line
            x1={cx}
            y1={cy}
            x2={tipX}
            y2={tipY}
            stroke="url(#vectorGrad)"
            strokeWidth="2.5"
            filter="url(#glow)"
          />

          {/* Vector tip (pulsing quantum particle) */}
          <circle
            cx={tipX}
            cy={tipY}
            r="6"
            fill="#38bdf8"
            stroke="#ffffff"
            strokeWidth="2"
            filter="url(#glow)"
          />

          {/* Projection helper to equatorial plane */}
          <line
            x1={tipX}
            y1={tipY}
            x2={tipX}
            y2={cy + (tipY - cy) * 0.35}
            stroke="#c084fc"
            strokeWidth="1"
            strokeDasharray="2 2"
            strokeOpacity="0.4"
          />

          {/* Center Origin Dot */}
          <circle cx={cx} cy={cy} r="3" fill="#cbd5e1" />

          {/* Pole Labels */}
          {/* |0> North Pole */}
          <g transform={`translate(${cx + 10}, ${cy - r - 8})`}>
            <rect x="-4" y="-14" width="34" height="20" rx="4" fill="#0f172a" fillOpacity="0.8" />
            <text fill="#38bdf8" fontSize="13" fontWeight="bold" fontFamily="monospace">
              |0⟩
            </text>
          </g>

          {/* |1> South Pole */}
          <g transform={`translate(${cx + 10}, ${cy + r + 18})`}>
            <rect x="-4" y="-14" width="34" height="20" rx="4" fill="#0f172a" fillOpacity="0.8" />
            <text fill="#a855f7" fontSize="13" fontWeight="bold" fontFamily="monospace">
              |1⟩
            </text>
          </g>

          {/* State Vector Label |ψ⟩ */}
          <g transform={`translate(${tipX + 10}, ${tipY - 8})`}>
            <rect x="-4" y="-14" width="38" height="20" rx="4" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="0.8" />
            <text fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace">
              |ψ⟩
            </text>
          </g>

          {/* Superposition Equator Label */}
          <text
            x={cx - r - 8}
            y={cy - 6}
            fill="#67e8f9"
            fontSize="10"
            fontFamily="monospace"
            opacity="0.8"
          >
            |+⟩ (|0⟩+|1⟩)/√2
          </text>
        </svg>

        {/* Interactive toggle control */}
        {interactive && (
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="absolute bottom-1 right-1 text-[11px] px-2.5 py-1 rounded-full bg-violet-950/80 border border-violet-500/40 text-violet-200 hover:bg-violet-900/80 transition-all font-mono"
          >
            {isRotating ? "⏸ Pause" : "▶ Rotate"}
          </button>
        )}
      </div>

      {/* Amplitude probability readout */}
      <div className="mt-2 text-center bg-slate-900/80 border border-slate-800 rounded-lg px-4 py-1.5 backdrop-blur-md">
        <div className="text-xs font-mono text-cyan-400 font-semibold">{label}</div>
        <div className="flex items-center justify-center gap-4 text-[11px] text-slate-300 font-mono mt-0.5">
          <span>
            P(|0⟩) = <span className="text-cyan-300 font-bold">{prob0}%</span>
          </span>
          <span className="text-slate-600">|</span>
          <span>
            P(|1⟩) = <span className="text-purple-300 font-bold">{prob1}%</span>
          </span>
        </div>
      </div>
    </div>
  );
}
