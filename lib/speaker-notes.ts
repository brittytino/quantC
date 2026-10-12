export interface SpeakerNote {
  slide: number;
  title: string;
  keyIdea: string;
  talkingPoints: string[];
  timingMinutes: string;
}

export const SPEAKER_NOTES: Record<number, SpeakerNote> = {
  1: {
    slide: 1,
    title: "Quantum Machine Learning with Python: Ruling TVK Governance Analytics",
    keyIdea: "Introduce Quantum Machine Learning with Python through the real-world governance retention and October 9 by-election sweep of Tamil Nadu's ruling party, TVK.",
    talkingPoints: [
      "Vanakkam and good morning everyone. Today, we present: Quantum Machine Learning with Python.",
      "Instead of using boring toy datasets like Iris or Titanic, we apply cutting-edge quantum computing to a high-stakes, real-world case study: Tamil Nadu's ruling party, Tamilaga Vettri Kazhagam (TVK), led by Chief Minister Vijay.",
      "Tamil Nadu is a complex state of 234 assembly seats and 6.2 crore voters. The ruling TVK government has rolled out massive flagship welfare schemes like 'வெற்றிப் பயணம்' (Free public bus travel for women and students) and 'அன்னபூரணி திட்டம்' (6 free LPG cylinders + ₹2,500 monthly assistance).",
      "Just days ago, on October 9, 2026, the Election Commission of India counted the by-election results: Ruling TVK swept both Madurantakam (SC) and Dharapuram with huge margins (+20,040 and +9,471 votes) defeating opposition DMK 2-0!",
      "Classical polls failed to predict this retention landslide because they treat voters as independent binary switches. Quantum Machine Learning solves this by modeling continuous voter superposition and policy entanglement in Python!",
    ],
    timingMinutes: "1:30",
  },
  2: {
    slide: 2,
    title: "Ground Truth By-Election Proof & Why Classical ML Failed",
    keyIdea: "Present the certified October 9, 2026 by-election data (Ruling TVK 2 - Opposition DMK 0) and mathematically break down classical polling limits.",
    talkingPoints: [
      "Let's look at the official ground-truth numbers from October 9, 2026: In Madurantakam (SC), ruling TVK's K. Maragatham Kumaravel secured 74,048 votes against DMK's 54,008—a massive victory margin of +20,040 votes!",
      "In Dharapuram, ruling TVK's P. Sathyabama secured 66,841 votes against DMK's 57,370—a victory margin of +9,471 votes!",
      "Final tally: Ruling TVK: 2 seats, Opposition DMK: 0 seats. Classical pollsters predicted anti-incumbency and claimed opposition DMK would flip these seats. Why were classical models completely wrong?",
      "1. Binary Reductionism: Classical computers use bits (0 or 1). They assume a voter is rigidly pro-ruling or anti-ruling, ignoring the fluid sentiment of 1.5 crore young voters.",
      "2. Independent Feature Assumption: Classical models treat bus travel, LPG subsidies, and candidate ratings as independent variables P(A ∩ B) = P(A) · P(B). In reality, these policies reinforce each other non-linearly!",
      "3. Combinatorial Explosion: Across 234 constituencies with 20 demographic variables, classical exploration requires 2^20 > 1,048,576 operations sequentially.",
    ],
    timingMinutes: "1:45",
  },
  3: {
    slide: 3,
    title: "Meet the Qubit: The 'Superposition Voter'",
    keyIdea: "Map undecided Tamil Nadu voters into quantum superposition on the Bloch Sphere, with EVM polling as wavefunction collapse.",
    talkingPoints: [
      "Now, let's connect this to quantum physics: Meet the Qubit.",
      "A classical transistor bit is stuck at either 0 or 1. But a voter under a ruling government exists in a continuous Quantum Superposition: |ψ⟩ = α|0⟩ + β|1⟩.",
      "Here, state |0⟩ represents opposition voting sentiment, and state |1⟩ represents ruling TVK governance retention.",
      "The voter's mind is a point on this 3D Bloch Sphere. The polar angle θ measures policy satisfaction, while the azimuthal angle φ represents local constituency sentiment.",
      "Crucial insight: What happens on election day? When the citizen presses the button on the Electronic Voting Machine (EVM), the quantum wavefunction instantaneously collapses into a single classical vote!",
    ],
    timingMinutes: "1:45",
  },
  4: {
    slide: 4,
    title: "Quantum Entanglement: The Multi-Scheme Multiplier",
    keyIdea: "Explain how ruling TVK's welfare policies (Vettri Payanam + Annapoorani Super 6) entangle non-locally like a quantum Bell State.",
    talkingPoints: [
      "One qubit gives us superposition, but two or more qubits unlock the true superpower of quantum computing: Entanglement.",
      "Consider two welfare schemes launched by the ruling TVK government: Qubit 0 represents 'வெற்றிப் பயணம்' (Free bus transit), and Qubit 1 represents 'அன்னபூரணி சூப்பர் 6' (6 free LPG cylinders + ₹2,500 DBT).",
      "These schemes are not evaluated in isolation. A woman commuting for free on a TVK bus who also receives the monthly ₹2,500 credit experiences a compounded positive impact. Mathematically, this creates a Bell State: |Φ⁺⟩ = (|00⟩ + |11⟩) / √2.",
      "In our quantum circuit, the CNOT (Controlled-NOT) gate entangles these policies. When the control qubit (bus transit satisfaction) flips to 1, it automatically amplifies the target qubit (household economic satisfaction)!",
      "This quantum policy entanglement explains why ruling TVK retained Madurantakam with an overwhelming 20,000-vote margin!",
    ],
    timingMinutes: "1:30",
  },
  5: {
    slide: 5,
    title: "Writing the Quantum Circuit in Python (Qiskit 1.0)",
    keyIdea: "Present the concise 12-line Python script building the Variational Quantum Classifier with Qiskit 1.0.",
    talkingPoints: [
      "Now let's examine the Python implementation. Using Python 3.11 and Qiskit 1.0, we construct the entire quantum model in just 12 lines of clean code.",
      "Line 1 & 2: We import QuantumCircuit from Qiskit and initialize a 2-qubit register.",
      "Line 4: qc.h([0, 1]) applies Hadamard gates, putting both voter qubits into equal superposition.",
      "Line 5: qc.ry(theta_welfare, 0) and qc.ry(theta_approval, 1) perform Angle Embedding, converting real-world percentage metrics into continuous rotation angles.",
      "Line 6: qc.cx(0, 1) applies the CNOT gate to create quantum entanglement between welfare delivery and voter retention.",
      "Line 7: qc.ry(w[0], 0) and qc.ry(w[1], 1) apply our parameterized variational ansatz weights, which Python will optimize.",
      "Line 8: qc.measure_all() measures 1,000 EVM shots, returning the probability distribution of election outcomes.",
    ],
    timingMinutes: "1:45",
  },
  6: {
    slide: 6,
    title: "The Hybrid Quantum-Classical Machine Learning Loop",
    keyIdea: "Explain how the quantum circuit and classical Python optimizers co-process data in a closed variational loop.",
    talkingPoints: [
      "How does this quantum circuit learn from data? Through a Hybrid Quantum-Classical co-processing loop (VQC).",
      "Step 1: Classical booth data (welfare delivery, youth approval, local sentiment) is loaded in Python.",
      "Step 2: Python encodes these features into rotation angles θ.",
      "Step 3: The Quantum Processing Unit evaluates the entangled Hilbert state.",
      "Step 4: We sample 1,000 measurement shots across basis states: |00⟩ Opposition DMK, |01⟩ AIADMK, |10⟩ Third Front, |11⟩ Ruling TVK Retained.",
      "Step 5: Classical Python optimizers (Adam or COBYLA) calculate the loss function and evaluate quantum gradients using the Parameter-Shift Rule.",
      "Step 6: The variational parameters w are updated iteratively until the predictions match certified ground truth like the October by-elections!",
    ],
    timingMinutes: "1:30",
  },
  7: {
    slide: 7,
    title: "Classical ML vs Quantum ML: Why QML Won",
    keyIdea: "Compare Classical Machine Learning vs Quantum Machine Learning head-to-head on governance election prediction.",
    talkingPoints: [
      "Let's compare Classical ML against Quantum ML directly. Why did classical regression fail to foresee the ruling TVK sweep, while Quantum ML predicted it accurately?",
      "Classical Machine Learning (Logistic Regression, Decision Trees) operates in flat Euclidean space. It relies on linear decision boundaries and independent feature assumptions.",
      "When faced with non-linear multi-scheme governance effects, classical models require manual polynomial feature engineering (O(N^2) complexity) and still suffer from the curse of dimensionality.",
      "Quantum Machine Learning uses Quantum Kernel Methods in 2^N-dimensional Hilbert space. Through constructive quantum interference, the ruling TVK retention state |11⟩ is amplified, while destructive interference cancels statistical polling noise.",
      "This is why our QML model predicted the massive +20,040 victory in Madurantakam when classical polls predicted a tight toss-up!",
    ],
    timingMinutes: "1:30",
  },
  8: {
    slide: 8,
    title: "Live Interactive Demo: Ruling TVK 2026 Governance Predictor",
    keyIdea: "Run the interactive live QML simulator, testing Madurantakam, Dharapuram, and other Tamil Nadu constituencies with real-time parameter tuning.",
    talkingPoints: [
      "Now, for our live demonstration! This is a real-time Variational Quantum Classifier simulator running in Python right here on our screen.",
      "Notice our constituency dropdown: It includes Madurantakam (SC) and Dharapuram, where ruling TVK just won by 20,040 and 9,471 votes on October 9!",
      "Let's select Madurantakam (SC). Look at the governance sliders: Welfare Delivery (Vettri Payanam + Annapoorani) is set to 85%, Youth Approval to 88%, and Governance Rating to 80%.",
      "Let's click '⚡ RUN QUANTUM MODEL'.",
      "Watch the 4-stage quantum telemetry: Angle Encoding -> Hadamard Superposition -> CNOT Entanglement -> 1,000 EVM Shots Sampling.",
      "Look at the measurement outcome: Basis state |11⟩ captures over 65% of shots, giving a 92% retention confidence and a 43.5% projected vote share—confirming a 'Ruling TVK Landslide Retention'!",
      "You can test other seats like Dharapuram, Vikravandi, or Coimbatore South. The quantum simulator accurately models how ruling governance policies translate into electoral retention.",
      "Thank you everyone! We are now open for your questions and discussion.",
    ],
    timingMinutes: "2:15",
  },
};
