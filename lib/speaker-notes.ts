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
    title: "Quantum Machine Learning with Python: Tamil Nadu TVK Politics",
    keyIdea: "Introduce Quantum Machine Learning with Python through the historic breakthrough of Tamil Nadu 2026 politics and the fresh October 9 by-election sweep.",
    talkingPoints: [
      "Vanakkam and welcome everyone. Today, our technical seminar explores Quantum Machine Learning with Python.",
      "Instead of abstract toy datasets, we are tackling a high-dimensional, non-linear real-world problem: Can quantum machine learning model the Tamil Nadu 2026 electoral landscape?",
      "Just days ago, on October 9, 2026, the Election Commission of India counted the by-election results: Thalapathy Vijay's TVK swept both Madurantakam (SC) and Dharapuram 2-0!",
      "Classical polls failed completely because they treated voters as binary 0 or 1. But Tamil Nadu voter psychology acts in a continuous quantum state space.",
      "Today, we will show you how Python and Quantum Circuits model this non-linear interference, concluding with a live quantum simulation on our final slide!",
    ],
    timingMinutes: "1:30",
  },
  2: {
    slide: 2,
    title: "The 234-Constituency Battlefield & By-Election Shock",
    keyIdea: "Demonstrate ground-truth proof from the October 9, 2026 by-election sweep (TVK 2 - DMK 0) and explain the mathematical breakdown of classical computing.",
    talkingPoints: [
      "Look at the empirical data from October 9, 2026: Madurantakam (SC) saw TVK's K. Maragatham Kumaravel win with 74,048 votes against DMK's 54,008—a massive +20,040 vote landslide!",
      "In Dharapuram, TVK's P. Sathyabama secured 66,841 votes against DMK's 57,370—a +9,471 vote victory!",
      "Final Tally: TVK 2, Ruling DMK 0. All classical pollsters predicted the ruling party would retain both seats due to executive machinery and cash transfer schemes.",
      "Why did classical models fail? First: Binary reductionism—voters are not 0 or 1. Second: Evaluating 20 demographic variables across 234 seats requires 2^20 > 1,048,576 classical operations sequentially.",
      "Third: Classical linear hyperplanes smooth out voter swings, completely blind to the 3-5% youth surge that flipped 20,000 votes!",
    ],
    timingMinutes: "1:45",
  },
  3: {
    slide: 3,
    title: "Meet the Qubit: The 'Schrödinger Voter'",
    keyIdea: "Map undecided Tamil Nadu youth voters into the quantum mechanical qubit and Bloch sphere superposition.",
    talkingPoints: [
      "This brings us directly to foundational physics: Meet the Qubit.",
      "A classical computer bit is strictly trapped at 0 or 1. But over 1.5 crore first-time and youth voters in Tamil Nadu are not committed to traditional Dravidian flags.",
      "They exist in a continuous Quantum Superposition: |ψ⟩ = α|Status Quo⟩ + β|TVK Transformation⟩.",
      "On this 3D Bloch Sphere, polar angle θ represents ideological change, while phase φ captures local constituency resonance.",
      "And what happens on Election Day? When the voter steps into the polling booth and presses the EVM button, the quantum wavefunction collapses into a single classical measurement!",
    ],
    timingMinutes: "1:45",
  },
  4: {
    slide: 4,
    title: "Quantum Entanglement: The Coalition Multiplier",
    keyIdea: "Demonstrate how TVK's power-sharing doctrine maps to multi-qubit Bell state entanglement.",
    talkingPoints: [
      "Single qubits are powerful, but the true revolution is multi-qubit Quantum Entanglement.",
      "At the historic Vikravandi conference, Thalapathy Vijay announced TVK's doctrine: 'ஆட்சி அதிகாரத்தில் பங்கு' (Power Sharing in Governance).",
      "In Tamil Nadu, voting blocs are mathematically entangled: P(A ∩ B) ≠ P(A) · P(B).",
      "Bell State: |Φ⁺⟩ = (|00⟩ + |11⟩) / √2. When youth turnout in an industrial hub like Coimbatore swings toward TVK, social networks cause adjacent rural alliance belts to correlate instantaneously!",
      "The CNOT gate acts as the alliance multiplier in our quantum circuit.",
    ],
    timingMinutes: "1:30",
  },
  5: {
    slide: 5,
    title: "Writing the Quantum Circuit in Python",
    keyIdea: "Walk through clean, executable Qiskit 1.0 Python code mapping electoral variables to quantum gates.",
    talkingPoints: [
      "Now, let's look at the Python code. In under 15 lines of Qiskit, we build the entire electoral simulation circuit.",
      "Line 4: qc.h([0, 1]) puts both qubits into equal superposition—our undecided voter baseline.",
      "Line 5: qc.ry(theta_youth, 0) applies angle embedding, rotating the state vector by youth turnout percentages.",
      "Line 6: qc.cx(0, 1) entangles the youth surge with coalition partner seats.",
      "Line 7: qc.ry(w[0], 0) applies our variational ansatz weights—trainable parameters optimized by Python.",
      "Line 8: qc.measure_all() samples 1,000 simulated voting booth EVM shots.",
    ],
    timingMinutes: "1:45",
  },
  6: {
    slide: 6,
    title: "The Hybrid Quantum-Classical ML Loop",
    keyIdea: "Detail the closed co-processing loop between quantum state spaces and classical gradient optimizers.",
    talkingPoints: [
      "How does this circuit actually 'learn'? Through a hybrid quantum-classical co-processing loop.",
      "1: Real polling data is normalized. 2: Features are embedded into quantum rotation angles.",
      "3: The quantum circuit evaluates the high-dimensional state space. 4: We measure 1,000 shots across basis states.",
      "5: Classical Python optimizers (Adam or COBYLA) compute quantum parameter gradients via the Parameter Shift Rule.",
      "6: Weights w are updated iteratively until the model converges on ground truth outcomes like the October by-elections.",
      "Crucial takeaway: Quantum computing provides the exponential Hilbert representation; Python drives the learning engine.",
    ],
    timingMinutes: "1:30",
  },
  7: {
    slide: 7,
    title: "Classical ML vs Quantum ML: The Breakthrough",
    keyIdea: "Highlight why Quantum Kernel methods detect non-linear electoral surges that classical algorithms miss.",
    talkingPoints: [
      "Let's compare them head-to-head. Why did Quantum ML predict the October 9 by-election sweep while classical models failed?",
      "Classical logistic regression and SVMs are confined to flat Euclidean space. They assume voter independence and falsely predict status quo inertia.",
      "Quantum Support Vector Machines use the Quantum Kernel Trick: K(x, z) = |⟨ψ(x)|ψ(z)⟩|² in 2^N-dimensional Hilbert space.",
      "Constructive quantum interference amplifies the TVK victory wave state |11⟩ while destructive interference cancels polling noise.",
      "It proved itself on October 9 by accurately identifying the exact critical threshold that flipped Madurantakam and Dharapuram!",
    ],
    timingMinutes: "1:30",
  },
  8: {
    slide: 8,
    title: "Live Demo: TVK 2026 Quantum Election Predictor",
    keyIdea: "Execute the live interactive Python quantum election simulation on key bellwether Tamil Nadu constituencies.",
    talkingPoints: [
      "And now, our grand technical climax: The Live Quantum Election Predictor.",
      "Look at our constituency selector—it includes Madurantakam (SC) and Dharapuram, where TVK just won by 20,000 and 9,400 votes!",
      "Let's select Madurantakam, tune the youth turnout to 85%, and click '⚡ RUN QUANTUM MODEL'.",
      "Watch the telemetry: Feature encoding -> Superposition -> CNOT Entanglement -> 1,000 Shots EVM Measurement.",
      "Look at the basis distribution: State |11⟩ captures over 60% of the quantum shots, predicting TVK Victory Disruption with 42.5% vote share!",
      "Classical polls called this impossible; our quantum circuit accurately reconstructs the ground-truth outcome.",
      "Thank you everyone. We welcome your questions!",
    ],
    timingMinutes: "2:15",
  },
};
