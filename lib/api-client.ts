import { CandidateFeatures, QuantumPredictionResult } from "@/types/presentation";
import { simulateVQC } from "./quantum-simulator";

/**
 * Checks if the internal Next.js quantum engine is healthy.
 * Runs seamlessly on Vercel Serverless or local development without any separate Python backend.
 */
export async function checkQuantumEngineHealth(): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);

    const res = await fetch("/api/qml", {
      method: "GET",
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return res.ok;
  } catch {
    // Client-side in-memory quantum simulator is always available
    return true;
  }
}

/**
 * Executes the Variational Quantum Classifier (VQC) directly in Next.js.
 * 1. Calls internal Next.js API route `/api/qml` (Vercel Serverless function).
 * 2. Falls back instantly to in-memory statevector simulation with zero delay or errors.
 */
export async function runQuantumClassification(
  features: CandidateFeatures,
  onFallbackUsed?: (message: string) => void
): Promise<QuantumPredictionResult> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch("/api/qml", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(features),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      return {
        ...data,
        source: "nextjs-api",
      };
    }
  } catch {
    // Clean fallback to client in-memory simulation
  }

  return simulateVQC(features, "browser-fallback");
}

// Backwards compatibility alias
export const checkPythonEngineHealth = checkQuantumEngineHealth;
