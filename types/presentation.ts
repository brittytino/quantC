export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  presenter: 1 | 2;
  presenterName: string;
}

export interface CandidateFeatures {
  // TVK 2026 Ruling Government Analytics Features
  welfare_delivery?: number; // 0 to 100% (Vettri Payanam Free Bus + Annapoorani LPG & ₹2,500 DBT)
  youth_approval?: number; // 0 to 100% (Youth & Student Support for Ruling TVK)
  governance_rating?: number; // 0 to 100% (Statewide Governance Performance & Delivery)
  constituency?: string; // e.g. "Madurantakam (SC)", "Dharapuram", "Vikravandi", "Coimbatore South"

  // Backward compatibility alias keys
  youth_turnout?: number;
  anti_incumbency?: number;
  alliance_factor?: number;
  attendance?: number;
  study_hours?: number;
  previous_score?: number;
  experience?: number;
  skill_score?: number;
  interview_score?: number;
}

export interface QuantumPredictionResult {
  prediction: string; // e.g. "Ruling TVK Landslide Retention", "Ruling TVK Solid Win", "Close Battleground"
  probability: number; // 0.0 to 1.0 (confidence for predicted class)
  probabilities: {
    tvk_victory?: number; // Ruling TVK retention probability
    close_swing?: number;
    status_quo?: number;
    strong_candidate?: number;
    needs_improvement?: number;
  };
  projected_vote_share?: number;
  constituency?: string;
  measurement_counts: {
    "00": number; // Opposition DMK
    "01": number; // Opposition AIADMK
    "10": number; // Third Front / Independents
    "11": number; // Ruling TVK Retained
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

