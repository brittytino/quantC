"""
FastAPI Server for Quantum Machine Learning Demo
Runs local Qiskit/Statevector VQC inference.
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Dict, Any

from qml_model import VariationalQuantumClassifier, HAS_QISKIT

app = FastAPI(
    title="Quantum Machine Learning (QML) Engine",
    description="Educational VQC inference engine powered by Qiskit / Quantum Statevector Simulation",
    version="1.0.0"
)

# Enable CORS for local Next.js frontend and Vercel domains
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

classifier = VariationalQuantumClassifier()


class CandidateInput(BaseModel):
    # Student evaluation features (Slide 7 live experiment)
    attendance: float = Field(default=85.0, ge=0, le=100, description="Attendance percentage (0-100)")
    study_hours: float = Field(default=6.0, ge=0, le=24, description="Daily study hours (0-24)")
    previous_score: float = Field(default=72.0, ge=0, le=100, description="Previous assessment score (0-100)")
    # Backwards compatibility fields
    experience: float = Field(default=None, description="Legacy experience parameter")
    skill_score: float = Field(default=None, description="Legacy skill parameter")
    interview_score: float = Field(default=None, description="Legacy interview parameter")


@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "Quantum Machine Learning API",
        "has_qiskit": HAS_QISKIT,
        "engine": "Qiskit Simulator" if HAS_QISKIT else "Statevector Simulator",
        "model": "Variational Quantum Classifier (VQC)",
        "qubits": 2
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "qiskit_available": HAS_QISKIT,
    }


@app.post("/predict")
def predict_candidate(data: CandidateInput) -> Dict[str, Any]:
    try:
        result = classifier.predict(
            experience=data.experience,
            skill_score=data.skill_score,
            interview_score=data.interview_score,
            attendance=data.attendance,
            study_hours=data.study_hours,
            previous_score=data.previous_score,
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Quantum circuit execution error: {str(e)}")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
