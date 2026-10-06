"use client";

import React from "react";

interface PolicyMapProps {
  className?: string;
  width?: number;
  height?: number;
  activeCategories?: string[];
}

export function TamilNaduPolicyMap({
  className = "",
  width = 380,
  height = 420,
}: PolicyMapProps) {
  // 7 Core Policy Pillars in 2026 Tamil Nadu Welfare Stack
  const categories = [
    { id: "women", label: "Women", sub: "₹2,500 & Safety", x: 60, y: 70, anchorX: 195, anchorY: 90 },
    { id: "education", label: "Education", sub: "Support & Skills", x: 40, y: 170, anchorX: 160, anchorY: 170 },
    { id: "transport", label: "Transport", sub: "Vettri Payanam", x: 50, y: 275, anchorX: 140, anchorY: 260 },
    { id: "food", label: "Food", sub: "Annapoorani LPG", x: 320, y: 80, anchorX: 250, anchorY: 85 },
    { id: "healthcare", label: "Healthcare", sub: "Universal Access", x: 325, y: 185, anchorX: 230, anchorY: 200 },
    { id: "youth", label: "Youth", sub: "Employment & AI", x: 310, y: 290, anchorX: 190, anchorY: 280 },
    { id: "technology", label: "Technology", sub: "Digital Ecosystem", x: 190, y: 395, anchorX: 160, anchorY: 340 },
  ];

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 380 430"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="policyBoundaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.6" />
          </linearGradient>
          <radialGradient id="policyMapFill" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.85" />
            <stop offset="85%" stopColor="#020617" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#000000" stopOpacity="1" />
          </radialGradient>
        </defs>

        {/* Tamil Nadu Vector Contour (Centered) */}
        <g transform="translate(15, 0)">
          <path
            d="M 225 35
               C 255 40, 278 55, 282 70
               C 287 85, 268 118, 263 142
               C 258 166, 268 194, 254 218
               C 240 242, 254 266, 230 285
               C 206 304, 196 332, 172 360
               C 148 388, 124 402, 105 404
               C 96 404, 105 378, 114 354
               C 123 325, 109 296, 95 267
               C 81 238, 72 214, 81 190
               C 90 166, 99 147, 123 128
               C 147 109, 171 85, 191 56
               Z"
            fill="url(#policyMapFill)"
            stroke="url(#policyBoundaryGrad)"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />

          {/* Regional Hubs inside TN */}
          <circle cx="270" cy="70" r="3" fill="#38bdf8" /> {/* Chennai */}
          <circle cx="105" cy="205" r="3" fill="#818cf8" /> {/* Coimbatore */}
          <circle cx="185" cy="225" r="3" fill="#c084fc" /> {/* Trichy */}
          <circle cx="160" cy="290" r="3" fill="#38bdf8" /> {/* Madurai */}
          <circle cx="130" cy="360" r="3" fill="#818cf8" /> {/* Tirunelveli */}
        </g>

        {/* Filaments connecting the 7 policy sectors to the state geography */}
        {categories.map((c) => (
          <g key={c.id}>
            <line
              x1={c.x}
              y1={c.y}
              x2={c.anchorX}
              y2={c.anchorY}
              stroke="#475569"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity="0.6"
            />
            <circle cx={c.anchorX} cy={c.anchorY} r="2" fill="#38bdf8" opacity="0.8" />
          </g>
        ))}

        {/* 7 Policy Sectors Badges around the map */}
        {categories.map((c) => (
          <g key={`badge-${c.id}`} transform={`translate(${c.x}, ${c.y})`} className="cursor-default">
            <rect
              x="-48"
              y="-16"
              width="96"
              height="32"
              rx="8"
              fill="#090d16"
              stroke="#334155"
              strokeWidth="1"
              fillOpacity="0.9"
            />
            <text
              x="0"
              y="-2"
              fill="#f8fafc"
              fontSize="11"
              fontWeight="bold"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              {c.label}
            </text>
            <text
              x="0"
              y="10"
              fill="#94a3b8"
              fontSize="8.5"
              fontFamily="monospace"
              textAnchor="middle"
            >
              {c.sub}
            </text>
          </g>
        ))}
      </svg>

      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">
        TAMIL NADU WELFARE STACK • INTERCONNECTED POLICY SECTORS
      </span>
    </div>
  );
}
