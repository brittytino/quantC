import { NextRequest, NextResponse } from "next/server";
import { simulateVQC } from "@/lib/quantum-simulator";

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    engine: "Next.js Quantum Simulator (Vercel Serverless)",
    model: "Variational Quantum Classifier (VQC)",
    qubits: 2,
    online: true,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      welfare_delivery,
      youth_approval,
      governance_rating,
      youth_turnout,
      anti_incumbency,
      alliance_factor,
      constituency,
      attendance,
      study_hours,
      previous_score,
      experience = 3,
      skill_score = 80,
      interview_score = 75,
    } = body;

    const result = simulateVQC(
      {
        welfare_delivery: welfare_delivery !== undefined ? Number(welfare_delivery) : undefined,
        youth_approval: youth_approval !== undefined ? Number(youth_approval) : undefined,
        governance_rating: governance_rating !== undefined ? Number(governance_rating) : undefined,
        youth_turnout: youth_turnout !== undefined ? Number(youth_turnout) : undefined,
        anti_incumbency: anti_incumbency !== undefined ? Number(anti_incumbency) : undefined,
        alliance_factor: alliance_factor !== undefined ? Number(alliance_factor) : undefined,
        constituency: constituency !== undefined ? String(constituency) : undefined,
        attendance: attendance !== undefined ? Number(attendance) : undefined,
        study_hours: study_hours !== undefined ? Number(study_hours) : undefined,
        previous_score: previous_score !== undefined ? Number(previous_score) : undefined,
        experience: Number(experience),
        skill_score: Number(skill_score),
        interview_score: Number(interview_score),
      },
      "nextjs-api"
    );

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to run quantum circuit", details: String(error) },
      { status: 500 }
    );
  }
}

