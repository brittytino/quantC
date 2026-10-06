# ⚛️ Quantum Machine Learning with Python
## Cinematic Technical Presentation Deck & Live QML Experiment

> A story-driven, classroom-tailored presentation designed for a **Tamil Nadu college technical audience**, bridging real-world multi-state political equations with quantum computing and variational machine learning.

---

## 🎭 The Storytelling Progression

Rather than starting with abstract Hilbert space mathematics, the presentation follows a single continuous visual and conceptual narrative:

```text
Tamil Nadu
    ↓
Political equations (Alliances, constituencies, voter groups, non-linear combinations)
    ↓
Many possible combinations (Exponential 2ᴺ combinatorial space)
    ↓
Probability amplitudes
    ↓
Quantum state
    ↓
Qubit (α|0⟩ + β|1⟩)
    ↓
Quantum circuit (Superposition & Entanglement)
    ↓
Machine Learning (Hybrid quantum-classical loop)
    ↓
Python (Qiskit 1.0 implementation)
    ↓
Live QML Experiment (Scientific keyboard-controlled simulation)
```

---

## 📋 The 8-Slide Structure

| Slide | Title & Theme | Core Visual & Narrative Concept |
|---|---|---|
| **01** | **One Question. Many Possibilities.** | Pure cinematic opening. Minimalist vector outline of Tamil Nadu (`TamilNaduMap.tsx`). Multi-constituency state grid. Audience curiosity hook $\to$ Quantum ML reveal. |
| **02** | **Think About a Political Equation** | Tamil Nadu political landscape (DMK front, AIADMK front, TVK factor, NDA/BJP, Left/Regional). Leadership visual anchor. Neutral mathematical analogy: *"We're not predicting who wins; we're examining how many distinct simultaneous combinations exist before an outcome is observed."* |
| **03** | **Classical Computers See 0 or 1** | The computational bridge: Classical Bit ($0$ or $1$, one definite state at a time) vs Qubit ($|\psi\rangle = \alpha\|0\rangle + \beta\|1\rangle$). Clean vector Bloch sphere without neon clutter. |
| **04** | **Now Imagine the Possibilities Interact** | **Superposition** (Hadamard branch vector) & **Entanglement** (CNOT coupled qubits). Analogy: changing one equation alters correlated outcomes across the system. Academic disclaimer: non-classical correlation, not faster-than-light signaling. |
| **05** | **Where Does Machine Learning Enter?** | Major visual reveal: Classical Data $\to$ Features $\to$ Quantum Encoding $\to$ Circuit $\to$ Measurement $\to$ Optimizer $\to$ Prediction. Real-world Student Evaluation profile ($85\%$ Attendance, $6$ Study Hours, $72$ Previous Score). *"Quantum ML combines a quantum circuit with a classical learning loop."* |
| **06** | **Let's Actually Write It in Python** | Distraction-free Qiskit 1.0 code presentation: $H \to$ Superposition, $RY \to$ Rotation, $CX \to$ Entanglement, $Measure \to$ Classical result. Press `R` to replay code and circuit execution. |
| **07** | **Live Quantum ML Experiment** | **Scientific experiment** layout (no forms/dashboards). Real-time execution of Variational Quantum Classifier (VQC). Keyboard control: `A` (Attendance), `S` (Study), `P` (Score), `↑ / ↓` to adjust, `Enter` to run. Output: `STRONG CANDIDATE (84.7%)`, basis distribution $00: 12\%, 01: 18\%, 10: 21\%, 11: 49\%$. |
| **08** | **Is Quantum ML Actually Better?** | Intellectual honesty: Today (NISQ hardware limitations) $\to$ Research (provable quantum kernels) $\to$ Future (QEC fault tolerance). Final statement: *"Quantum ML isn't about replacing classical AI. It's about discovering where quantum computation gives us something new."* |

---

## ⌨️ Zero-Mouse Keyboard Controller

The presenter can deliver the entire presentation seamlessly without touching a mouse:

| Key | Action |
|---|---|
| **$\rightarrow$** / **$\downarrow$** / **Space** | Next slide |
| **$\leftarrow$** / **$\uparrow$** | Previous slide |
| **1 – 8** | Jump directly to Slide 1 through 8 |
| **Home** / **End** | Jump to First / Last slide |
| **F** | Toggle Fullscreen presentation mode |
| **R** | Replay current slide entrance animation (GSAP timeline restart) |
| **D** | Jump directly to Slide 7 (Live Quantum Experiment) |
| **N** | Toggle Speaker Notes drawer (detailed talking points for presenters) |
| **?** | Toggle Keyboard Shortcuts help modal |
| **Esc** | Exit Fullscreen or close drawer/modals |

### Live Experiment Keyboard Controls (Slide 7):
- Press **A**: Focus **Attendance** parameter
- Press **S**: Focus **Study Hours** parameter
- Press **P**: Focus **Previous Score** parameter
- Press **$\uparrow$** / **$\downarrow$**: Increment / Decrement focused parameter
- Press **Enter**: Execute live quantum circuit simulation

---

## 🖼️ Chief Minister Image Placement

To display the photograph of the Tamil Nadu Chief Minister respectfully in Slide 2:
1. Place your image file into:
   ```text
   public/cm_image.jpg
   ```
   *(or `public/cm_image.png`)*
2. The component (`ChiefMinisterAnchor.tsx`) will automatically render the image with a subtle cinematic vignette, neutral framing, and respectful academic caption.
3. If no image file is found, a dignified leadership vector frame is displayed as a fallback.

---

## 🛠️ Local Development & Running

### Frontend (Next.js)
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

### Python Quantum Backend
```bash
python python/main.py
```
FastAPI server runs on [http://127.0.0.1:8000](http://127.0.0.1:8000).

### Vercel Deployment
1. Connect repository to Vercel.
2. If using an external Python API, configure `NEXT_PUBLIC_QML_API_URL`.
3. If unset, the frontend seamlessly uses its built-in Next.js serverless route (`/api/qml`) and exact browser statevector simulator.
