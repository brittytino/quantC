export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  presenter: 1 | 2;
  presenterName: string;
}

export interface CandidateFeatures {
  // TVK 2026 Tamil Nadu Electoral Features
  youth_turnout?: number; // 0 to 100% (Gen Z & Youth TVK Mobilization)
  anti_incumbency?: number; // 0 to 100% (Dissatisfaction with Status Quo)
  alliance_factor?: number; // 0 to 100% (Power-Sharing Entanglement Multiplier)
  constituency?: string; // e.g. "Vikravandi", "Coimbatore South", "Madurai Central", "Kolathur", "Tambaram"

  // Legacy backward-compatibility parameters
  attendance?: number;
  study_hours?: number;
  previous_score?: number;
  experience?: number;
  skill_score?: number;
  interview_score?: number;
}

export interface QuantumPredictionResult {
  prediction: string; // e.g. "TVK Disruption / Victory", "Close Contest / Swing", "Status Quo Lead"
  probability: number; // 0.0 to 1.0 (confidence for predicted class)
  probabilities: {
    tvk_victory?: number;
    close_swing?: number;
    status_quo?: number;
    strong_candidate?: number;
    needs_improvement?: number;
  };
  projected_vote_share?: number;
  constituency?: string;
  measurement_counts: {
    "00": number; // DMK+ Status Quo
    "01": number; // AIADMK+ Traditional
    "10": number; // NDA / NTK
    "11": number; // TVK Victory
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

