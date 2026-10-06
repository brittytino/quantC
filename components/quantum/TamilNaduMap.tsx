"use client";

import React from "react";

interface TamilNaduMapProps {
  className?: string;
  width?: number;
  height?: number;
  highlightedNodes?: string[];
  showConnections?: boolean;
}

export function TamilNaduMap({
  className = "",
  width = 360,
  height = 420,
  highlightedNodes = ["Chennai", "Madurantakam", "Dharapuram", "Coimbatore", "Madurai"],
  showConnections = true,
}: TamilNaduMapProps) {
  // Realistic relative coordinates mapped into a 360x420 bounding box
  const nodes = [
    { id: "Chennai", name: "Chennai", x: 275, y: 55, region: "North Capital" },
    { id: "Madurantakam", name: "Madurantakam", x: 255, y: 95, region: "Bypoll Hub (North)" },
    { id: "Salem", name: "Salem", x: 175, y: 155, region: "Central Corridor" },
    { id: "Dharapuram", name: "Dharapuram", x: 140, y: 205, region: "Bypoll Hub (West)" },
    { id: "Coimbatore", name: "Coimbatore", x: 95, y: 195, region: "Kongu Belt" },
    { id: "Tiruchirappalli", name: "Tiruchirappalli", x: 195, y: 215, region: "Delta Central" },
    { id: "Thanjavur", name: "Thanjavur", x: 235, y: 230, region: "Cauvery Delta" },
    { id: "Madurai", name: "Madurai", x: 165, y: 285, region: "South Central" },
    { id: "Tirunelveli", name: "Tirunelveli", x: 135, y: 360, region: "Deep South" },
    { id: "Kanyakumari", name: "Kanyakumari", x: 110, y: 400, region: "Cape Tip" },
  ];

  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  // Network connections showing combinatorial interdependence across regions
  const links = [
    ["Chennai", "Madurantakam"],
    ["Madurantakam", "Salem"],
    ["Salem", "Dharapuram"],
    ["Salem", "Tiruchirappalli"],
    ["Dharapuram", "Coimbatore"],
    ["Tiruchirappalli", "Thanjavur"],
    ["Tiruchirappalli", "Madurai"],
    ["Dharapuram", "Madurai"],
    ["Madurai", "Tirunelveli"],
    ["Tirunelveli", "Kanyakumari"],
    ["Chennai", "Thanjavur"],
  ];

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 360 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="tnBoundaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#818cf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="tnFillGrad" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.8" />
            <stop offset="80%" stopColor="#030712" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#020617" stopOpacity="1" />
          </radialGradient>
        </defs>

        {/* Clean, simplified vector geographic outline of Tamil Nadu */}
        <path
          d="M 230 25
             C 260 30, 285 45, 290 60
             C 295 75, 275 110, 270 135
             C 265 160, 275 190, 260 215
             C 245 240, 260 265, 235 285
             C 210 305, 200 335, 175 365
             C 150 395, 125 410, 105 412
             C 95 412, 105 385, 115 360
             C 125 330, 110 300, 95 270
             C 80 240, 70 215, 80 190
             C 90 165, 100 145, 125 125
             C 150 105, 175 80, 195 50
             Z"
          fill="url(#tnFillGrad)"
          stroke="url(#tnBoundaryGrad)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Combinatorial Network Links */}
        {showConnections &&
          links.map(([fromId, toId], idx) => {
            const from = nodeMap.get(fromId);
            const to = nodeMap.get(toId);
            if (!from || !to) return null;
            return (
              <line
                key={idx}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#64748b"
                strokeWidth="1"
                strokeDasharray="3 3"
                opacity="0.45"
              />
            );
          })}

        {/* Constituency / Regional Nodes */}
        {nodes.map((node) => {
          const isHighlighted = highlightedNodes.includes(node.id);
          return (
            <g key={node.id} className="transition-all">
              {/* Outer halo for highlighted hubs (e.g. Madurantakam, Dharapuram bypoll hubs) */}
              {isHighlighted && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="7"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.2"
                  opacity="0.7"
                />
              )}
              {/* Node core dot */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isHighlighted ? "3.5" : "2.5"}
                fill={isHighlighted ? "#ffffff" : "#94a3b8"}
              />

              {/* Node label */}
              {isHighlighted && (
                <text
                  x={node.x + 9}
                  y={node.y + 3}
                  fill="#f8fafc"
                  fontSize="11"
                  fontFamily="monospace"
                  fontWeight="600"
                >
                  {node.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      <span className="text-[11px] font-mono text-slate-400 mt-2 tracking-wide">
        TAMIL NADU ELECTORAL GRID • 234 ASSEMBLY CONSTITUENCIES
      </span>
    </div>
  );
}
