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
    title: "One Government. Many Moving Parts.",
    keyIdea: "Introduce complex multi-variable systems using familiar Tamil Nadu welfare programmes before touching quantum mechanics.",
    talkingPoints: [
      "Welcome everyone. Today our technical subject is Quantum Machine Learning with Python.",
      "Instead of starting with dry quantum physics equations, let's start with a visual intuition everyone in Tamil Nadu understands: How do many small pieces combine to create one outcome?",
      "Think about a government system: Women's welfare, Education, Transit, Healthcare, Food security, Youth, and Technology. None of these exist in isolation.",
      "When many possibilities and moving parts interact together, that is the exact mental model needed to understand how quantum states work.",
      "That is where quantum computing begins.",
    ],
    timingMinutes: "1:30",
  },
  2: {
    slide: 2,
    title: "Take Vettri Payanam",
    keyIdea: "Deconstruct an everyday journey into multiple variables and branching possibilities.",
    talkingPoints: [
      "Take Vettri Payanam, the expanded free bus travel programme across Tamil Nadu.",
      "A passenger steps onto a government bus: she could be traveling to college, work, a hospital, the market, or back home.",
      "One person represents many possible journeys, defined by route, time, destination, cost, and purpose.",
      "These become variables. Quantum computing is built around representing and manipulating states with many possible configurations.",
      "Subtle clarification: The bus journey is an educational analogy to visualize multiple possibilities; quantum mechanics works with continuous state amplitudes.",
    ],
    timingMinutes: "1:30",
  },
  3: {
    slide: 3,
    title: "Now Add Annapoorani",
    keyIdea: "Demonstrate how individual policy components combine into an interconnected welfare system state.",
    talkingPoints: [
      "Now look at how components combine: Vettri Payanam free transit + Annapoorani Super Six (6 free LPG cylinders) + ₹2,500 monthly income support + Annan Seer bride support + Education initiatives.",
      "Each scheme is one component. But a family's welfare outcome depends on how those components combine together.",
      "In mathematics and physics, we describe this as a combined composite state.",
      "Notice how transit lines transform into mathematical coordinate lines. Individual programmes become combined state spaces.",
    ],
    timingMinutes: "1:45",
  },
  4: {
    slide: 4,
    title: "Meet the Qubit",
    keyIdea: "Translate the combinatorial analogy into quantum mechanics: Classical Bit vs Qubit Bloch Sphere.",
    talkingPoints: [
      "Now we directly enter quantum mechanics.",
      "A classical computer bit is binary: strictly 0 or 1. High voltage or low voltage, testing combinations one by one.",
      "A qubit exists in a superposition state: |ψ⟩ = α|0⟩ + β|1⟩, described by continuous probability amplitudes α and β.",
      "On this Bloch sphere, the north pole is |0⟩ and the south pole is |1⟩. Before observation, the state vector points anywhere on the surface.",
      "Just like our welfare system held multiple variables, the qubit represents multiple possibilities simultaneously.",
    ],
    timingMinutes: "1:45",
  },
  5: {
    slide: 5,
    title: "The Magic is Not the Qubit",
    keyIdea: "Explain what we DO with qubits: H, RY, CNOT, and Measurement gates.",
    talkingPoints: [
      "A static qubit is useless on its own. The true power comes from what we DO with the qubits.",
      "Hadamard (H): creates equal superposition from a ground state.",
      "Rotation-Y (RY): rotates the state vector, encoding numerical input features into angles.",
      "CNOT (Controlled-NOT): creates entanglement, correlating two qubits so measuring one immediately determines the state of the other.",
      "Measurement: collapses the continuous quantum state into classical binary results (00, 01, 10, or 11).",
    ],
    timingMinutes: "1:30",
  },
  6: {
    slide: 6,
    title: "Now Add Machine Learning",
    keyIdea: "Establish the hybrid classical-quantum loop using a clean student evaluation profile.",
    talkingPoints: [
      "Where does machine learning enter this picture?",
      "Quantum ML doesn't replace classical computers; it forms a hybrid co-processing loop.",
      "Real Data ➔ Feature Normalization ➔ Quantum Circuit Ansatz ➔ Measurement Counts ➔ Classical Optimizer (gradient descent) ➔ Parameter Update ➔ Repeat.",
      "Look at our clean student profile: Attendance (85%), Study Hours (6 hrs), Previous Score (72).",
      "Quantum ML combines a quantum circuit with a classical learning loop.",
    ],
    timingMinutes: "1:45",
  },
  7: {
    slide: 7,
    title: "Live Quantum ML Experiment",
    keyIdea: "Execute live variational quantum inference using keyboard inputs with zero mouse required.",
    talkingPoints: [
      "Let's run a real experiment live. No pre-recorded video, no smoke and mirrors.",
      "Using our keyboard: Press A for Attendance, S for Study Hours, P for Score. Press Up/Down to alter student traits.",
      "Press Enter to execute the circuit. Watch the execution pulse traverse the gates across 1,000 shots.",
      "Notice the basis state distribution: |00⟩, |01⟩, |10⟩, |11⟩. Constructive interference yields 84.7% confidence for 'Strong Candidate'.",
      "The quantum measurement directly transforms into actionable data.",
    ],
    timingMinutes: "2:00",
  },
  8: {
    slide: 8,
    title: "From Welfare Systems to Quantum Systems",
    keyIdea: "Full-circle synthesis: Systems, Quantum representation, Machine Learning, and Python.",
    talkingPoints: [
      "We've come full circle: from a government system with many programmes to a quantum system with many quantum states, to machine learning extracting actionable patterns.",
      "Quantum Machine Learning isn't magic.",
      "It's a different way of representing and processing information.",
      "And Python lets us experiment with it today.",
      "Thank you everyone, we welcome your questions.",
    ],
    timingMinutes: "1:30",
  },
};
