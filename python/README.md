# ⚛️ Python Quantum Machine Learning Backend

This directory contains the Python FastAPI backend for the Quantum Machine Learning presentation and live demo.

## Overview
- **Model**: Educational Variational Quantum Classifier (VQC)
- **Qubits**: 2 Qubits with parameterized rotations ($R_y$) and CNOT entanglement
- **Backend**: Qiskit 1.0+ Statevector Simulator (with automatic pure-Python statevector fallback)
- **Framework**: FastAPI + Uvicorn

## Local Setup

### 1. Create a Virtual Environment (Optional but recommended)
```bash
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

### 2. Install Requirements
```bash
pip install -r requirements.txt
```

### 3. Run the FastAPI Server
```bash
uvicorn main:app --reload --port 8000
```
Or directly:
```bash
python main.py
```

The server will start at `http://127.0.0.1:8000`.
- API Docs: `http://127.0.0.1:8000/docs`
- Health check: `http://127.0.0.1:8000/health`
- Predict Endpoint: `POST http://127.0.0.1:8000/predict`

## API Schema

### Request (`POST /predict`)
```json
{
  "experience": 3,
  "skill_score": 82,
  "interview_score": 76
}
```

### Response
```json
{
  "prediction": "Strong Candidate",
  "probability": 0.847,
  "probabilities": {
    "strong_candidate": 84.7,
    "needs_improvement": 15.3
  },
  "measurement_counts": {
    "00": 120,
    "01": 180,
    "10": 210,
    "11": 490
  },
  "measurement_percentages": {
    "00": 12.0,
    "01": 18.0,
    "10": 21.0,
    "11": 49.0
  },
  "circuit_params": {
    "theta_0": 1.764,
    "theta_1": 2.4504,
    "w_0": 0.84,
    "w_1": 1.28
  },
  "model": "Variational Quantum Classifier (VQC)",
  "backend": "Qiskit Aer/Statevector Simulator",
  "qubits": 2,
  "shots": 1000
}
```

## Vercel Deployment Note
When deploying the Next.js frontend to Vercel, set the environment variable:
```bash
NEXT_PUBLIC_QML_API_URL=https://your-python-api.example.com
```
If this variable is unset or the external API is offline, the Next.js frontend seamlessly switches to its built-in browser-side exact quantum simulation fallback mode.
