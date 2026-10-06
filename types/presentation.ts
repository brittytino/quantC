export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  presenter: 1 | 2;
  presenterName: string;
}

export interface CandidateFeatures {
  // Scientific student evaluation features for Slide 7
  attendance?: number; // 0 to 100%
  study_hours?: number; // 0 to 12 hrs
  previous_score?: number; // 0 to 100
  // Backwards compatibility legacy fields
  experience?: number; // 0 to 10 years
  skill_score?: number; // 0 to 100
  interview_score?: number; // 0 to 100
}

export interface QuantumPredictionResult {
  prediction: "Strong Candidate" | "Needs Improvement";
  probability: number; // 0.0 to 1.0 (confidence for predicted class)
  probabilities: {
    strong_candidate: number; // e.g. 84.7
    needs_improvement: number; // e.g. 15.3
  };
  measurement_counts: {
    "00": number;
    "01": number;
    "10": number;
    "11": number;
  };
  measurement_percentages: {
    "00": number;
    "01": number;
    "10": number;
    "11": number;
  };
  circuit_params: {
    theta_0: number;
    theta_1: number;
    w_0: number;
    w_1: number;
  };
  model: string;
  backend: string;
  qubits: number;
  shots: number;
  source: "python-api" | "nextjs-api" | "browser-fallback";
}

export type ConnectionStatus = "connected" | "fallback" | "checking";
