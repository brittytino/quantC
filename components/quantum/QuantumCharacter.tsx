"use client";

import React from "react";
import { motion } from "framer-motion";

interface QuantumCharacterProps {
  className?: string;
  width?: number;
  height?: number;
}

export function QuantumCharacter({ className = "", width = 380, height = 440 }: QuantumCharacterProps) {
  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Background radial energy field */}
      <div
        className="absolute -top-10 -left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(56, 189, 248, 0.2) 50%, transparent 80%)",
        }}
      />

      <svg
        width={width}
        height={height}
        viewBox="0 0 380 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          {/* Branch paths gradients */}
          <linearGradient id="branchAlpha" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="branchBeta" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="branchGamma" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </linearGradient>

          {/* Coat & Suit Gradients */}
          <linearGradient id="coatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="glowTrim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <radialGradient id="deviceAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </radialGradient>

          {/* Subtle glow filter */}
          <filter id="charGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ================= MULTIVERSE PROBABILITY BRANCH PATHS (BEHIND CHARACTER) ================= */}
        {/* Branch 1 (Left / State |00>) */}
        <g opacity="0.65">
          <path
            d="M190 220 C 140 180, 70 140, 30 70"
            stroke="url(#branchAlpha)"
            strokeWidth="2.5"
            strokeDasharray="6 4"
          />
          <circle cx="30" cy="70" r="5" fill="#38bdf8" filter="url(#charGlow)" />
          <text x="18" y="55" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">
            Path α |00⟩
          </text>
        </g>

        {/* Branch 2 (Center-Up / State |01⟩) */}
        <g opacity="0.75">
          <path
            d="M190 200 C 190 140, 200 90, 210 30"
            stroke="url(#branchBeta)"
            strokeWidth="3"
            strokeDasharray="5 3"
          />
          <circle cx="210" cy="30" r="6" fill="#c084fc" filter="url(#charGlow)" />
          <text x="220" y="32" fill="#c084fc" fontSize="11" fontFamily="monospace" fontWeight="bold">
            Path β |01⟩
          </text>
        </g>

        {/* Branch 3 (Right / State |11>) */}
        <g opacity="0.7">
          <path
            d="M190 220 C 250 180, 310 130, 350 80"
            stroke="url(#branchGamma)"
            strokeWidth="2.5"
            strokeDasharray="6 4"
          />
          <circle cx="350" cy="80" r="5" fill="#2dd4bf" filter="url(#charGlow)" />
          <text x="310" y="65" fill="#2dd4bf" fontSize="11" fontFamily="monospace" fontWeight="bold">
            Path γ |11⟩
          </text>
        </g>

        {/* Ambient State Interconnections */}
        <line x1="30" y1="70" x2="210" y2="30" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
        <line x1="210" y1="30" x2="350" y2="80" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />

        {/* ================= QUANTUM EXPLORER CHARACTER ================= */}

        {/* Shadow on ground */}
        <ellipse cx="190" cy="415" rx="75" ry="12" fill="#000000" opacity="0.7" />

        {/* Legs / Futuristic Trousers */}
        <path d="M165 310 L160 410 L176 410 L182 310 Z" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
        <path d="M198 310 L204 410 L220 410 L215 310 Z" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
        {/* Boots */}
        <path d="M152 405 L176 405 L178 418 L150 418 Z" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
        <path d="M204 405 L228 405 L230 418 L202 418 Z" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />

        {/* Futuristic Flowing Lab Coat (Rear panels) */}
        <path
          d="M130 180 L115 375 L160 380 L170 240 Z"
          fill="url(#coatGrad)"
          stroke="#334155"
          strokeWidth="1"
        />
        <path
          d="M250 180 L265 375 L220 380 L210 240 Z"
          fill="url(#coatGrad)"
          stroke="#334155"
          strokeWidth="1"
        />

        {/* Torso / High-Tech Suit Underlayer */}
        <path d="M150 150 L230 150 L220 310 L160 310 Z" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />

        {/* Front Lab Coat Lapels */}
        <path
          d="M145 150 L190 270 L140 370 L130 170 Z"
          fill="#1e293b"
          stroke="#38bdf8"
          strokeWidth="1.2"
        />
        <path
          d="M235 150 L190 270 L240 370 L250 170 Z"
          fill="#1e293b"
          stroke="#a855f7"
          strokeWidth="1.2"
        />

        {/* Glowing Quantum Core on Chest */}
        <polygon
          points="190,195 198,208 190,221 182,208"
          fill="#38bdf8"
          filter="url(#charGlow)"
        />
        <circle cx="190" cy="208" r="3" fill="#ffffff" />

        {/* Belt with Energy Cells */}
        <rect x="155" y="278" width="70" height="12" rx="3" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.2" />
        <rect x="183" y="275" width="14" height="18" rx="2" fill="#38bdf8" />

        {/* Right Arm (resting at side) */}
        <path
          d="M140 160 L115 250 L125 285 L135 280 L130 245 L150 170 Z"
          fill="#0f172a"
          stroke="#334155"
          strokeWidth="1"
        />

        {/* Left Arm raised holding Quantum Device */}
        <path
          d="M240 160 L275 220 L260 250 L240 240 L250 215 L230 170 Z"
          fill="#0f172a"
          stroke="#334155"
          strokeWidth="1"
        />

        {/* Glowing Quantum Device on Wrist / Forearm */}
        <circle cx="265" cy="235" r="28" fill="url(#deviceAura)" opacity="0.8" />
        {/* Holographic Device Rings */}
        <ellipse
          cx="265"
          cy="235"
          rx="18"
          ry="7"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="1.8"
          transform="rotate(-25 265 235)"
          filter="url(#charGlow)"
        />
        <ellipse
          cx="265"
          cy="235"
          rx="18"
          ry="7"
          fill="none"
          stroke="#c084fc"
          strokeWidth="1.5"
          transform="rotate(35 265 235)"
        />
        <circle cx="265" cy="235" r="5" fill="#ffffff" filter="url(#charGlow)" />

        {/* Head and Face */}
        {/* Neck */}
        <rect x="182" y="132" width="16" height="20" fill="#334155" rx="2" />
        {/* Head shape */}
        <path
          d="M172 105 C 172 80, 208 80, 208 105 C 208 128, 198 140, 190 142 C 182 140, 172 128, 172 105 Z"
          fill="#1e293b"
          stroke="#475569"
          strokeWidth="1.5"
        />
        {/* Futuristic Cybernetic Visor / Glasses */}
        <path
          d="M170 102 L210 102 L206 112 L174 112 Z"
          fill="#38bdf8"
          filter="url(#charGlow)"
          opacity="0.9"
        />
        <line x1="172" y1="107" x2="208" y2="107" stroke="#ffffff" strokeWidth="1" />

        {/* Sleek Hair / Hood contour */}
        <path
          d="M168 100 C 170 75, 210 75, 212 100 C 215 90, 205 70, 190 70 C 175 70, 165 90, 168 100 Z"
          fill="#0f172a"
        />

        {/* Glowing Collar / Lapel Trim */}
        <path d="M174 150 L190 180 L206 150" fill="none" stroke="url(#glowTrim)" strokeWidth="2.5" />
      </svg>

      {/* Multiverse Explorer Badge / Caption */}
      <div className="mt-2 text-center">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-violet-950/80 border border-violet-500/30 text-violet-200">
          The Quantum Explorer
        </span>
        <p className="text-[11px] text-slate-400 mt-1 italic font-sans max-w-xs">
          “What if our model could reason across a quantum state space?”
        </p>
      </div>
    </div>
  );
}
