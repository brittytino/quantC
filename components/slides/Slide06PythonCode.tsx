"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { QuantumCircuit } from "../quantum/QuantumCircuit";

interface Slide06Props {
  replayTrigger?: number;
}

export function Slide06PythonCode({ replayTrigger = 0 }: Slide06Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const circuitRef = useRef<HTMLDivElement>(null);
  const lineHRef = useRef<HTMLDivElement>(null);
  const lineRYRef = useRef<HTMLDivElement>(null);
  const lineCXRef = useRef<HTMLDivElement>(null);
  const lineMRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Step 1: Headline
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
        // Step 2: Editor appears
        .fromTo(
          editorRef.current,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "+=0.1"
        )
        // Step 3: Circuit appears
        .fromTo(
          circuitRef.current,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        // Step 4: Line H highlights
        .fromTo(
          lineHRef.current,
          { backgroundColor: "transparent" },
          { backgroundColor: "rgba(56, 189, 248, 0.15)", duration: 0.5 },
          "+=0.2"
        )
        // Step 5: Line RY highlights
        .fromTo(
          lineRYRef.current,
          { backgroundColor: "transparent" },
          { backgroundColor: "rgba(6, 182, 212, 0.15)", duration: 0.5 },
          "+=0.3"
        )
        // Step 6: Line CX highlights
        .fromTo(
          lineCXRef.current,
          { backgroundColor: "transparent" },
          { backgroundColor: "rgba(168, 85, 247, 0.15)", duration: 0.5 },
          "+=0.3"
        )
        // Step 7: Line Measure highlights
        .fromTo(
          lineMRef.current,
          { backgroundColor: "transparent" },
          { backgroundColor: "rgba(16, 185, 129, 0.15)", duration: 0.5 },
          "+=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [replayTrigger]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col justify-between p-8 md:p-12 select-none overflow-hidden"
    >
      {/* Header */}
      <div ref={headlineRef} className="max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-1">
          PYTHON IMPLEMENTATION
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
          Let&apos;s Actually Write It in Python.
        </h2>
        <p className="text-base text-slate-300 mt-1 font-light">
          A complete 2-qubit variational circuit modeled in Qiskit 1.0.
        </p>
      </div>

      {/* Main Grid: Clean Code Editor on Left & Circuit Vector on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-center max-w-6xl mx-auto w-full">
        {/* Left (6 cols): Clean, Large Code Presentation */}
        <div
          ref={editorRef}
          className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden font-mono text-xs md:text-sm shadow-xl"
        >
          {/* Editor Header Bar */}
          <div className="px-5 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
            <span className="text-slate-400 text-xs">qml_circuit.py</span>
            <span className="text-[10px] text-cyan-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
              Qiskit 1.0 Syntax
            </span>
          </div>

          {/* Clean Code Content */}
          <div className="p-5 space-y-1.5 leading-relaxed text-slate-200">
            <div className="text-slate-500">from qiskit import QuantumCircuit</div>
            <div className="text-white font-bold py-1">qc = QuantumCircuit(2)</div>
            <div className="text-slate-700 py-0.5"># ──────────────────────────</div>

            {/* Line H */}
            <div ref={lineHRef} className="p-1 rounded flex items-center justify-between">
              <span>qc.h(0); qc.h(1)</span>
              <span className="text-[11px] text-cyan-400 font-semibold font-sans">
                H ➔ Superposition
              </span>
            </div>

            {/* Line RY */}
            <div ref={lineRYRef} className="p-1 rounded flex items-center justify-between">
              <span>qc.ry(theta[0], 0); qc.ry(theta[1], 1)</span>
              <span className="text-[11px] text-sky-400 font-semibold font-sans">
                RY ➔ Rotation (Features)
              </span>
            </div>

            {/* Line CX */}
            <div ref={lineCXRef} className="p-1 rounded flex items-center justify-between">
              <span>qc.cx(0, 1)</span>
              <span className="text-[11px] text-purple-400 font-semibold font-sans">
                CX ➔ Entanglement
              </span>
            </div>

            {/* Line Measure */}
            <div ref={lineMRef} className="p-1 rounded flex items-center justify-between">
              <span>qc.measure_all()</span>
              <span className="text-[11px] text-emerald-400 font-semibold font-sans">
                Measure ➔ Classical Output
              </span>
            </div>

            <div className="text-slate-700 pt-2 border-t border-slate-900">
              # Trainable classical optimizer loop:
            </div>
            <div className="text-slate-400">model.fit(X_train, y_train)</div>
            <div className="text-slate-400">prediction = model.predict(X_test)</div>
          </div>
        </div>

        {/* Right (6 cols): Circuit Schematic Vector */}
        <div ref={circuitRef} className="lg:col-span-6 flex flex-col justify-center">
          <QuantumCircuit theta0={1.84} theta1={2.46} w0={0.84} w1={1.28} />
          <div className="mt-3 text-center">
            <span className="text-[11px] font-mono text-slate-500">
              Press <kbd className="text-slate-300 bg-slate-900 px-1 py-0.5 rounded border border-slate-800">R</kbd> to replay the code execution sequence
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-900 pt-3 flex justify-between items-center text-[11px] font-mono text-slate-500">
        <span>Slide 06 • Implementation</span>
        <span>Next: Slide 7 Live Quantum ML Experiment ➔</span>
      </div>
    </div>
  );
}
