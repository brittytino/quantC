"use client";

import React from "react";
import { motion } from "framer-motion";

interface VettriPayanamBusProps {
  className?: string;
  showTransformation?: boolean;
}

export function VettriPayanamBus({
  className = "",
  showTransformation = false,
}: VettriPayanamBusProps) {
  const destinations = [
    { label: "College", icon: "🎓", x: 620, y: 35, color: "#38bdf8" },
    { label: "Work", icon: "💼", x: 620, y: 75, color: "#818cf8" },
    { label: "Hospital", icon: "🏥", x: 620, y: 115, color: "#ec4899" },
    { label: "Market", icon: "🛒", x: 620, y: 155, color: "#f59e0b" },
    { label: "Home", icon: "🏡", x: 620, y: 195, color: "#10b981" },
  ];

  return (
    <div className={`relative w-full flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 760 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
      >
        <defs>
          <linearGradient id="busBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <linearGradient id="routeLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
          <filter id="busGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Origin / Starting Point */}
        <circle cx="50" cy="115" r="7" fill="#ffffff" />
        <text x="50" y="142" fill="#94a3b8" fontSize="11" fontFamily="monospace" textAnchor="middle">
          Origin
        </text>

        {/* Main Transit Corridor Trunk Line */}
        <line x1="57" y1="115" x2="430" y2="115" stroke="url(#routeLineGrad)" strokeWidth="3" />

        {/* ================= VECTOR BUS ================= */}
        {/* Animated motion along trunk line */}
        <g transform="translate(140, 75)">
          {/* Bus Shadow */}
          <ellipse cx="90" cy="48" rx="85" ry="6" fill="#000000" opacity="0.6" />

          {/* Bus Body */}
          <rect x="10" y="4" width="160" height="40" rx="8" fill="url(#busBodyGrad)" stroke="#38bdf8" strokeWidth="1.2" />

          {/* Roof line accent */}
          <line x1="20" y1="8" x2="160" y2="8" stroke="#7dd3fc" strokeWidth="1.5" />

          {/* Windows row */}
          <rect x="22" y="12" width="22" height="15" rx="3" fill="#0f172a" stroke="#38bdf8" strokeWidth="0.8" />
          <rect x="50" y="12" width="22" height="15" rx="3" fill="#0f172a" stroke="#38bdf8" strokeWidth="0.8" />
          <rect x="78" y="12" width="22" height="15" rx="3" fill="#0f172a" stroke="#38bdf8" strokeWidth="0.8" />
          <rect x="106" y="12" width="22" height="15" rx="3" fill="#0f172a" stroke="#38bdf8" strokeWidth="0.8" />
          {/* Driver Front Windshield */}
          <path d="M 134 12 L 158 12 L 164 27 L 134 27 Z" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="0.8" />

          {/* Headlights beam */}
          <polygon points="168,30 230,22 230,42 168,36" fill="#38bdf8" fillOpacity="0.15" />

          {/* Wheels */}
          <circle cx="45" cy="44" r="8" fill="#090d16" stroke="#64748b" strokeWidth="2" />
          <circle cx="45" cy="44" r="3" fill="#94a3b8" />
          <circle cx="135" cy="44" r="8" fill="#090d16" stroke="#64748b" strokeWidth="2" />
          <circle cx="135" cy="44" r="3" fill="#94a3b8" />

          {/* Bus Nameplate */}
          <text x="90" y="35" fill="#f8fafc" fontSize="8" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">
            VETTRI PAYANAM
          </text>
        </g>

        {/* Branching Nodes to 5 Destinations */}
        {destinations.map((d, i) => (
          <g key={i}>
            {/* Branching curve line */}
            <path
              d={`M 430 115 C 500 115, 530 ${d.y}, 600 ${d.y}`}
              stroke={d.color}
              strokeWidth="2"
              strokeDasharray="4 3"
              opacity="0.8"
            />
            {/* Destination Target Node */}
            <circle cx="600" cy={d.y} r="5" fill={d.color} filter="url(#busGlow)" />
            {/* Destination Label */}
            <text x="618" y={d.y + 4} fill="#f8fafc" fontSize="12" fontWeight="600" fontFamily="sans-serif">
              {d.icon} {d.label}
            </text>
          </g>
        ))}

        {/* Mathematical Route to Wire Transformation Hint */}
        <g transform="translate(180, 205)">
          <rect x="-10" y="-14" width="400" height="28" rx="6" fill="#090d16" stroke="#334155" strokeWidth="1" />
          <text x="190" y="4" fill="#94a3b8" fontSize="10.5" fontFamily="monospace" textAnchor="middle">
            Route: Coimbatore ➔ Chennai&nbsp;&nbsp;transforms to&nbsp;&nbsp;
            <tspan fill="#38bdf8" fontWeight="bold">q₀ ───────────────</tspan>
          </text>
        </g>
      </svg>
    </div>
  );
}
