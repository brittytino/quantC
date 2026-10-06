"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { CandidateFeatures, QuantumPredictionResult } from "@/types/presentation";
import { runQuantumClassification } from "@/lib/api-client";
import { QuantumCircuit } from "../quantum/QuantumCircuit";
import { QuantumResearcher } from "../quantum/QuantumResearcher";

interface Slide07Props {
  replayTrigger?: number;
}

type SelectedParam = "attendance" | "studyHours" | "score";

export function Slide07LiveExperiment({ replayTrigger = 0 }: Slide07Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const experimentAreaRef = useRef<HTMLDivElement>(null);

  // Student features
  const [attendance, setAttendance] = useState<number>(85);
  const [studyHours, setStudyHours] = useState<number>(6);
  const [score, setScore] = useState<number>(72);
  const [selectedParam, setSelectedParam] = useState<SelectedParam>("attendance");

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<string>("Ready");
  const [result, setResult] = useState<QuantumPredictionResult>({
    prediction: "Strong Candidate",
    probability: 0.847,
    probabilities: { strong_candidate: 84.7, needs_improvement: 15.3 },
    measurement_counts: { "00": 120, "01": 180, "10": 210, "11": 490 },
    measurement_percentages: { "00": 12.0, "01": 18.0, "10": 21.0, "11": 49.0 },
    circuit_params: { theta_0: 1.841, theta_1: 2.463, w_0: 0.84, w_1: 1.28 },
    model: "Variational Quantum Classifier (VQC)",
    backend: "Next.js VQC Engine (Vercel Serverless)",
    qubits: 2,
    shots: 1000,
    source: "browser-fallback",
  });

  const runExperiment = useCallback(async () => {
    setIsRunning(true);
    setActiveStep("ENCODE");

    await new Promise((r) => setTimeout(r, 220));
    setActiveStep("QUANTUM CIRCUIT");

    await new Promise((r) => setTimeout(r, 250));
    setActiveStep("MEASURE");

    await new Promise((r) => setTimeout(r, 220));
    setActiveStep("CLASSIFY");

    const feat: CandidateFeatures = {
      attendance,
      study_hours: studyHours,
      previous_score: score,
      // fallback legacy mapping
      experience: studyHours,
      skill_score: score,
      interview_score: attendance,
    };

    try {
      const pred = await runQuantumClassification(feat);
      setResult(pred);
    } catch {
      // fallback safely
    } finally {
      setIsRunning(false);
      setActiveStep("COMPLETE");
    }
  }, [attendance, studyHours, score]);

  // Keyboard navigation controller: A, S, P, Up, Down, Enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      switch (e.key.toLowerCase()) {
        case "a":
          e.preventDefault();
          setSelectedParam("attendance");
          break;
        case "s":
          e.preventDefault();
          setSelectedParam("studyHours");
          break;
        case "p":
          e.preventDefault();
          setSelectedParam("score");
          break;
        case "arrowup":
          e.preventDefault();
          if (selectedParam === "attendance") {
            setAttendance((prev) => Math.min(100, prev + 5));
          } else if (selectedParam === "studyHours") {
            setStudyHours((prev) => Math.min(12, prev + 1));
          } else if (selectedParam === "score") {
            setScore((prev) => Math.min(100, prev + 5));
          }
          break;
        case "arrowdown":
          e.preventDefault();
          if (selectedParam === "attendance") {
            setAttendance((prev) => Math.max(30, prev - 5));
          } else if (selectedParam === "studyHours") {
            setStudyHours((prev) => Math.max(1, prev - 1));
          } else if (selectedParam === "score") {
            setScore((prev) => Math.max(30, prev - 5));
          }
          break;
        case "enter":
          e.preventDefault();
          runExperiment();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedParam, runExperiment]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
      gsap.fromTo(
        experimentAreaRef.current,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out", delay: 0.15 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [replayTrigger]);

  const states = [
    { key: "00", count: result.measurement_counts["00"], pct: result.measurement_percentages["00"] },
    { key: "01", count: result.measurement_counts["01"], pct: result.measurement_percentages["01"] },
    { key: "10", count: result.measurement_counts["10"], pct: result.measurement_percentages["10"] },
    { key: "11", count: result.measurement_counts["11"], pct: result.measurement_percentages["11"] },
  ] as const;

  const executionSteps = ["ENCODE", "QUANTUM CIRCUIT", "MEASURE", "CLASSIFY"];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 select-none overflow-hidden bg-[#050505]"
    >
      {/* Top Header */}
      <div ref={headlineRef} className="flex items-center justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500 block mb-0.5">
            THE CLIMAX • REAL-TIME EXPERIMENTAL PROTOCOL
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-mono">
            LIVE QUANTUM ML EXPERIMENT
          </h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
          <span className="text-slate-500">BACKEND:</span>
          <span className="text-cyan-400 font-semibold">{result.backend}</span>
        </div>
      </div>

      {/* Main Experiment Arena */}
      <div
        ref={experimentAreaRef}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-stretch max-w-6xl mx-auto w-full"
      >
        {/* Left Column (4 cols): Student Profile Parameter Selectors */}
        <div className="lg:col-span-4 bg-slate-950 border border-slate-800 rounded-3xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                STUDENT PROFILE
              </span>
              <span className="text-[10px] font-mono text-slate-500">Keyboard A/S/P</span>
            </div>

            {/* Parameter Items */}
            <div className="space-y-2.5 font-mono text-xs">
              {/* Attendance */}
              <div
                onClick={() => setSelectedParam("attendance")}
                className={`cursor-pointer p-3 rounded-2xl border transition-all ${
                  selectedParam === "attendance"
                    ? "bg-slate-900 border-white text-white shadow-lg"
                    : "bg-slate-950/80 border-slate-800 text-slate-400 hover:border-slate-700"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold flex items-center gap-1.5">
                    <kbd className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-cyan-300">
                      A
                    </kbd>
                    Attendance
                  </span>
                  <span className="font-bold text-white text-sm">{attendance}%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-white h-full" style={{ width: `${attendance}%` }} />
                </div>
              </div>

              {/* Study Hours */}
              <div
                onClick={() => setSelectedParam("studyHours")}
                className={`cursor-pointer p-3 rounded-2xl border transition-all ${
                  selectedParam === "studyHours"
                    ? "bg-slate-900 border-white text-white shadow-lg"
                    : "bg-slate-950/80 border-slate-800 text-slate-400 hover:border-slate-700"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold flex items-center gap-1.5">
                    <kbd className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-cyan-300">
                      S
                    </kbd>
                    Study Hours
                  </span>
                  <span className="font-bold text-white text-sm">{studyHours} hrs/day</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-white h-full" style={{ width: `${(studyHours / 12) * 100}%` }} />
                </div>
              </div>

              {/* Previous Score */}
              <div
                onClick={() => setSelectedParam("score")}
                className={`cursor-pointer p-3 rounded-2xl border transition-all ${
                  selectedParam === "score"
                    ? "bg-slate-900 border-white text-white shadow-lg"
                    : "bg-slate-950/80 border-slate-800 text-slate-400 hover:border-slate-700"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold flex items-center gap-1.5">
                    <kbd className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-cyan-300">
                      P
                    </kbd>
                    Previous Score
                  </span>
                  <span className="font-bold text-white text-sm">{score} / 100</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-white h-full" style={{ width: `${score}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Action Trigger Button & Researcher character */}
          <div className="pt-3 border-t border-slate-900 space-y-2">
            <button
              onClick={runExperiment}
              disabled={isRunning}
              className="w-full py-3 rounded-xl bg-white hover:bg-slate-200 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isRunning ? `PROCESSING: ${activeStep}` : "RUN MODEL (ENTER)"}</span>
            </button>
            <span className="text-[10px] font-mono text-slate-500 block text-center">
              Press <kbd className="text-slate-300">↑/↓</kbd> to alter value • <kbd className="text-slate-300">Enter</kbd> to run
            </span>
          </div>
        </div>

        {/* Right Column (8 cols): Circuit Vector + Progress + Outcome & Measurements */}
        <div className="lg:col-span-8 flex flex-col justify-between gap-4">
          {/* Real-Time Processing Sequence Indicator */}
          <div className="grid grid-cols-4 gap-2 text-center font-mono text-[11px]">
            {executionSteps.map((step) => {
              const isActive = activeStep === step;
              return (
                <div
                  key={step}
                  className={`py-1.5 px-2 rounded-xl border transition-all ${
                    isActive
                      ? "bg-cyan-950/80 border-cyan-400 text-cyan-300 font-bold"
                      : "bg-slate-950/60 border-slate-800 text-slate-500"
                  }`}
                >
                  {step}
                </div>
              );
            })}
          </div>

          {/* Animated Quantum Circuit */}
          <QuantumCircuit
            theta0={result.circuit_params.theta_0}
            theta1={result.circuit_params.theta_1}
            w0={result.circuit_params.w_0}
            w1={result.circuit_params.w_1}
            isExecuting={isRunning}
          />

          {/* Results: Outcome + Measurement Distribution */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
            {/* Classification Outcome (5 cols) */}
            <div className="md:col-span-5 bg-slate-950 border border-slate-800 rounded-3xl p-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                  RESULT
                </span>
                <h3 className="text-2xl font-black font-mono text-white tracking-tight">
                  {result.prediction.toUpperCase()}
                </h3>
                <span className="text-base font-mono text-emerald-400 font-bold block mt-1">
                  {result.probabilities.strong_candidate}% Confidence
                </span>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-900 text-[10px] font-mono text-slate-500">
                <span>1,000 Shots • 2 Qubits • Statevector Sampling</span>
              </div>
            </div>

            {/* Measurement Counts Bar Graph (7 cols) */}
            <div className="md:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  MEASUREMENT DISTRIBUTION (1,000 SHOTS)
                </span>
                <span className="text-[10px] font-mono text-cyan-400">Quantum ➔ Data</span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center font-mono">
                {states.map(({ key, count, pct }) => (
                  <div key={key} className="bg-slate-900/60 p-2 rounded-2xl border border-slate-800">
                    <span className="text-xs text-slate-400 block mb-1">|{key}⟩</span>
                    <div className="h-16 w-full bg-slate-950 rounded-lg flex flex-col justify-end p-0.5 overflow-hidden">
                      <div
                        className="bg-white w-full rounded transition-all duration-500"
                        style={{ height: `${Math.max(10, pct)}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-white mt-1.5 block">{pct}%</span>
                    <span className="text-[9px] text-slate-500 block">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-900 pt-2 flex justify-between items-center text-[10px] font-mono text-slate-500">
        <span>Slide 07 • Live Experiment Climax</span>
        <span>Keyboard: A/S/P + ↑/↓ to tune, Enter to execute</span>
      </div>
    </div>
  );
}
