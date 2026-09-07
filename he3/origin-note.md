> **Superseded. Retained for provenance only.**
>
> This is the originating concept note for the He-3 programme, as written before the feasibility
> assessment. It is kept because the design set repeatedly says "the concept note claimed X", and those
> corrections should be checkable against the actual source rather than against a paraphrase of it.
>
> **Do not treat anything below as current.** Three of its figures are wrong and are corrected in
> [`design/00-summary.md`](design/00-summary.md): the photodisintegration threshold (19.8 MeV is the
> proton channel, which makes tritium; the helium-3 channel is 20.578 MeV), the peak cross-section
> (~1.3 mb, not 8 mb), and the focal intensity (1.3 × 10²² W/cm², not 10²⁴). Its central mechanism,
> multi-photon absorption of ten 2.35 MeV photons, does not work at all, for the reasons set out in
> [`design/03-feasibility.md`](design/03-feasibility.md).
>
> Its live content - the array architecture, the AI alignment approach, the proof-of-concept bench, the
> budgets and the roadmap - has been restructured into [`design/`](design/) and is maintained there.
> Edit those, never this.

---

# Helium-3 Production via Coherent Multi-Beam Laser Photodisintegration

**Project Goal:** Develop a scalable, economically viable system for photodisintegrating helium-4 to helium-3 and protons using coherently combined laser arrays, enabling direct He-3 fuel supply for fusion energy.

**Strategic Insight:** Instead of pursuing a single ultra-intense laser (impossibly expensive), distribute the intensity challenge across hundreds of phase-locked modest-power lasers. Use AI to solve the alignment problem autonomously.

---

## 1. THE VISION: Full-Scale System (100-500 Coherent Lasers)

### 1.1 Nuclear Physics Foundation

**Target Reaction:** He-4(γ,n)He-3
- **Photodisintegration threshold:** 19.8 MeV
- **Giant Dipole Resonance peak:** ~23.5 MeV (cross-section ~ 8 millibarn)
- **Product:** Helium-3 (stable, non-radioactive) + neutron

**Why this matters:**
- He-3 fusion with deuterium produces charged particles → direct electricity conversion
- No problematic neutron flux (unlike D-T fusion)
- Supply bottleneck solved = fusion energy becomes viable

### 1.2 Multi-Photon Absorption Strategy

**Challenge:** Single 23.5 MeV photon is hard to generate and focus.

**Solution:** Absorb many lower-energy photons coherently.
- **Individual photon energy:** 2.35 MeV (hard X-ray regime)
- **Number of photons absorbed:** ~10 per He-4 nucleus
- **Total excitation:** 23.5 MeV → meets photodisintegration threshold

**Why coherence matters:** When N laser beams are perfectly phase-locked at a focal point, the intensity scales as N². With 100 beams, you get 10,000× intensity enhancement at the focal spot. This makes multi-photon absorption probable.

### 1.3 Full-Scale System Specifications

| Parameter | Value |
|-----------|-------|
| **Number of laser sources** | 100-500 (scalable) |
| **Per-laser average power** | 10 W (infrared) |
| **Total average power** | 1-5 kW |
| **Repetition rate** | 100 Hz |
| **Pulse duration** | 100 fs |
| **Focal intensity (coherent)** | ~10^24 W/cm² |
| **Coherent intensity gain** | N² (10,000× for 100 beams) |
| **Hard X-ray photons/pulse** | ~10^18 (after Compton conversion) |

### 1.4 System Architecture

```
Fiber Laser Array (100-500 × 10W infrared)
         ↓
Coherent Beam Combining Stage
  (phase-locked, actively controlled)
         ↓
Compton Backscatter X-ray Converter
  (infrared → 2.35 MeV hard X-rays)
         ↓
Hard X-ray Focusing Optics
  (multilayer mirrors, grazing incidence)
         ↓
He-4 Gas Target + Focal Point Monitoring
         ↓
AI Control Loop
  (sensor feedback → beam alignment adjustments)
         ↓
He-3 + neutrons (product)
```

---

## 2. PROOF-OF-CONCEPT: Small-Scale Demonstration (5-10 Lasers)

### 2.1 Why Proof-of-Concept First?

**Goal:** Demonstrate that AI can autonomously align laser beams and maintain coherence using only:
- Cheap laser sources (diode or fiber lasers, ~$500-1000 each)
- Standard mirrorless camera (35mm, ~$1000)
- Commodity stepper motors for mechanical control
- Open-source software (PyTorch, OpenAI Gym for RL)

**Payoff:** If this works, scaling to 100+ expensive lasers is an engineering problem, not a physics problem.

### 2.2 Proof-of-Concept Setup

#### Optical Configuration
- **Laser sources:** 5-10 infrared laser diodes or cheap fiber lasers
  - Wavelength: 1.0-1.55 μm (accessible, easy to generate)
  - Power per beam: 0.1-1 W (very low power, low cost)
  - Repetition rate: Not time-critical for PoC (can be CW)

- **Beam path:** Each laser fed through:
  - Collimating optics (couple of cheap lenses)
  - Motorized kinematic mirror mount (3 DOF: X, Y, angle)
  - Spatial filter / pinhole
  - Dichroic combiner (to overlay beams)
  - Focal lens

#### Detection: Interference Pattern Imaging
- **Sensor:** Standard 35mm mirrorless camera (Sony a6400, ~$700)
  - Sensitivity to IR (add IR pass filter)
  - Live video output via USB
  - High enough resolution to see fringes (need ~50 μm fringe spacing)
  
- **Target plane:** Diffuse scattering surface (white card) at focal plane or near-field
  - Capture live interference pattern every ~100 ms
  - Send images to control computer

#### Mechanical Control
- **Actuators:** Cheap NEMA stepper motors + mechanical stages
  - Per-beam cost: ~$100-200 (motor + mount + lead screw)
  - Resolution: ~10-50 μm (enough for rough alignment)
  - Speed: ~1 second per move (not speed-critical)

- **Control interface:** Arduino or Raspberry Pi running motor drivers
  - Total hardware cost: ~$200-500

#### Computational Control
- **Perception:** CNN extracts interference pattern features from camera images
  - Input: Raw RGB or IR images (640×480 or similar)
  - Output: Phase offset estimates for each beam pair

- **Alignment AI:** Reinforcement learning agent
  - State: Interference pattern + beam position history
  - Action: Stepper motor movements for each of 5-10 beams
  - Reward: Maximize power in focal spot or fringe contrast/visibility
  
### 2.3 Proof-of-Concept Hardware Budget

| Component | Qty | Unit Cost | Total |
|-----------|-----|-----------|-------|
| **Lasers (1W fiber or diode)** | 10 | $500 | $5,000 |
| **Motorized mounts (3 DOF)** | 10 | $150 | $1,500 |
| **Stepper motors + drivers** | 30 | $20 | $600 |
| **Optical elements** (lenses, filters, combiners) | 1 | $1,500 | $1,500 |
| **Mirrorless camera + IR filter** | 1 | $800 | $800 |
| **Control computer** (Raspberry Pi / Arduino) | 1 | $300 | $300 |
| **Optical breadboard + table** | 1 | $2,000 | $2,000 |
| **Miscellaneous** (cables, brackets, power supplies) | 1 | $500 | $500 |
| | | **TOTAL** | **~$12,000** |

**Key advantage:** Everything except optics is commodity off-the-shelf. Optical elements can be salvaged or sourced cheaply. Total cost is realistic for a prototype lab.

### 2.4 Proof-of-Concept Success Criteria

**Phase 1 (Basic Alignment):**
- [ ] Manually align 5 beams to visible interference pattern (human baseline)
- [ ] Capture interference images at 10 Hz with camera
- [ ] Extract phase information from images with CV algorithms

**Phase 2 (AI-Driven Alignment):**
- [ ] Train CNN on synthetic interference pattern data
  - Generate 10,000+ simulated patterns with known phase offsets
  - Train ResNet18 or similar to predict per-beam phase from pattern
- [ ] Deploy trained network on live camera feed
- [ ] Closed-loop control: AI suggests motor moves → camera captures new pattern → repeat

**Phase 3 (Autonomous Maintenance):**
- [ ] Introduce disturbances (manual nudge one mirror, change ambient temperature)
- [ ] AI autonomously re-aligns beams without manual intervention
- [ ] Hold coherence for >10 minutes continuously

**Success Metric:** Achieve 5-10 beam alignment and phase-locking using only camera feedback and stepper motor control, demonstrating proof that AI can solve the alignment problem automatically.

---

## 3. AI CONTROL SYSTEM: Technical Approach

### 3.1 Machine Learning Architecture for Alignment

#### Three Parallel Approaches (Try All Three)

**Approach A: Supervised Learning (CNN)**
- **Training:** Synthetic data of interference patterns with known phase offsets
  - Use Fresnel diffraction simulator to generate 10,000+ training images
  - Vary beam count, wavelength, phase errors, noise
- **Network:** ResNet18 or EfficientNet
  - Input: Camera image (640×480, grayscale or RGB)
  - Output: Phase offset for each beam (10 values for 10 beams)
  - Inference time: 10-50 ms per image
- **Deployment:** Real-time control loop
  - Capture image → network inference → motor commands → repeat at 10 Hz

**Advantages:**
- Fast (10-50 ms per decision)
- Deterministic (always same output for same input)
- Works even without physics model

**Challenges:**
- Requires good simulation-to-reality transfer
- May not generalize to untrained conditions

---

**Approach B: Reinforcement Learning (Model-Free)**
- **Environment:** Simulated optical system + real camera feed
- **Agent:** DQN or PPO (Proximal Policy Optimization)
  - State: Recent interference patterns (last 5 frames) + motor position history
  - Action: Discrete motor movements (up/down/left/right for each beam)
  - Reward: Change in focal power, fringe contrast, or phase coherence metric
- **Training:** Online on real hardware
  - Learns as it explores control space
  - Adapts to real disturbances (thermal drift, vibration)
- **Inference:** Action selection at 1-10 Hz

**Advantages:**
- Adapts to real hardware without pre-training
- Learns optimal strategy through interaction
- Robust to model mismatch

**Challenges:**
- Requires millions of interactions (slow to converge)
- Careful reward engineering needed

---

**Approach C: Reinforcement Learning (Model-Based)**
- **Physics Model:** Lightweight differentiable optics simulator
  - Input: Beam positions (X, Y, angle for each laser)
  - Output: Predicted interference pattern
  - Uses PyTorch Autograd for fast inference
- **Agent:** Model-based RL (Dreamer, MBPO)
  - Plans actions using learned model
  - Validates plan against real camera feedback
  - Updates model when prediction ≠ reality
- **Convergence:** Faster than model-free (100s of episodes instead of millions)

**Advantages:**
- Sample-efficient (fewer real-world interactions)
- Interpretable (can inspect learned model)

**Challenges:**
- Model must be accurate (need good optics simulator)
- More complex to implement

---

### 3.2 Recommended Path for PoC

**Start with Approach A (Supervised CNN):**
1. Generate 10,000+ synthetic interference patterns in simulation
2. Train ResNet18 to predict phase from patterns
3. Deploy as real-time controller with stepper motors
4. Validate on real system

**Then add Approach B (RL) for adaptive refinement:**
1. Use trained CNN as initialization
2. Deploy PPO agent to continuously refine alignment
3. Learn to handle real-world disturbances (thermal, vibration)

**Why this order:** Approach A gives you quick feedback (does the basic idea work?) with minimal real-world experimentation. Approach B then handles the messy reality.

### 3.3 Training Data Generation

**Synthetic Pattern Generation (Python/PyTorch):**

```python
import numpy as np
from scipy import special

def generate_interference_pattern(phases, amplitudes, grid_size=640):
    """
    Generate 2D interference pattern from N laser beams.
    
    Args:
        phases: array of phase offsets [0, 2π) for each beam
        amplitudes: beam amplitudes (normalized)
        grid_size: output image size
    
    Returns:
        intensity: 2D intensity array (interference pattern)
    """
    x = np.linspace(-1, 1, grid_size)
    y = np.linspace(-1, 1, grid_size)
    X, Y = np.meshgrid(x, y)
    
    intensity = np.zeros_like(X, dtype=float)
    
    # Assume beams at different angles arranged in circle
    num_beams = len(phases)
    angles = 2 * np.pi * np.arange(num_beams) / num_beams
    
    for i, (phase, angle, amp) in enumerate(zip(phases, amplitudes, amplitudes)):
        # Plane wave: E = amp * exp(i * (k·r + phase))
        k_x = np.cos(angle)
        k_y = np.sin(angle)
        
        field = amp * np.exp(1j * (k_x * X + k_y * Y + phase))
        intensity += np.abs(field) ** 2
    
    # Add realistic noise
    noise = np.random.normal(0, 0.01, intensity.shape)
    intensity += noise
    
    # Normalize to [0, 255] for image
    intensity = np.clip(255 * intensity / intensity.max(), 0, 255).astype(np.uint8)
    
    return intensity

# Generate training dataset
training_data = []
for _ in range(10000):
    num_beams = np.random.randint(5, 11)
    phases = np.random.uniform(0, 2*np.pi, num_beams)
    amplitudes = np.ones(num_beams)  # Equal amplitude
    
    pattern = generate_interference_pattern(phases, amplitudes)
    training_data.append((pattern, phases))

# Train neural network on (image, phase) pairs
```

### 3.4 Real-Time Control Loop

**Execution Flow (runs at 10 Hz):**

```
Loop:
  1. Capture image from camera (35 ms)
  2. Preprocess: convert to grayscale, normalize
  3. Feed to trained CNN: (640×480 image) → (10 phase predictions)
  4. Compare predicted phase to desired phase (target coherence)
  5. Compute required motor moves (proportional control)
  6. Send stepper motor commands via Arduino
  7. Wait for motors to settle (1-2 seconds)
  8. Loop
```

**Phase Prediction → Motor Command:**

```python
def motor_commands_from_phase_prediction(predicted_phases, desired_phases, 
                                         motor_range_um=500):
    """
    Convert phase errors into motor position commands.
    
    Phase error → lateral displacement needed to correct it.
    For beam i with phase error φ_i:
      Δx = (λ / 2π) * φ_i    (rough approximation)
    """
    wavelength = 1.0e-6  # 1 μm in meters
    
    phase_errors = predicted_phases - desired_phases
    
    # Phase to displacement (λ/2 per 2π phase)
    motor_moves = (wavelength / (2 * np.pi)) * phase_errors
    
    # Clamp to motor range
    motor_moves = np.clip(motor_moves * 1e6, -motor_range_um, motor_range_um)
    
    return motor_moves.astype(int)  # Steps for stepper motor
```

---

## 4. SCALING PATH: From PoC to Full System

### 4.1 PoC → 20-Beam Prototype

**Once 10-beam PoC succeeds:**
- Scale to 20 beams (still cheap lasers, cheap camera)
- Verify AI control scales (more challenging optimization landscape)
- Cost: ~$25k
- Timeline: 3-6 months

**Success metric:** Autonomously maintain phase coherence for 20 beams for >1 hour continuously.

### 4.2 20-Beam → 100-Beam Full Prototype

**Once 20-beam scales:**
- Upgrade to 10W fiber lasers per beam
- Upgrade to specialized coherent beam combining optics
- Add Compton backscatter X-ray generation stage
- Upgrade sensors (wavefront sensors, not just camera)
- Cost: ~$1.9M
- Timeline: 12-24 months

**New challenges at this scale:**
- Thermal management (1 kW dissipation)
- Phase coherence at femtosecond timescales
- Hard X-ray generation efficiency
- Target chamber design

### 4.3 100-Beam → 500-Beam Production System

**Once 100-beam demonstrates photodisintegration signal:**
- Replicate design 5× (economies of scale)
- Target 50-100 grams He-3 per day production
- Cost per system: ~$1.5M (hardware mature, refined integration)
- Timeline: 12 months per system

---

## 5. PROOF-OF-CONCEPT DETAILED ROADMAP

### Phase 1: Simulation & Training (Months 1-2)

**Goal:** Build AI models before hardware arrives.

**Deliverables:**
- [ ] Optics simulator (Fresnel diffraction of N laser beams)
- [ ] Training dataset: 50,000 synthetic interference patterns
- [ ] CNN trained to >95% accuracy on phase prediction
- [ ] Reinforcement learning environment setup
- [ ] Hardware BOM finalized and ordered

**Tools:**
- Python 3.10+
- PyTorch 2.0+
- SciPy (for Fresnel calculations)
- OpenAI Gym (for RL environment)

---

### Phase 2: Hardware Assembly (Months 2-3)

**Goal:** Build optical table with 5-10 laser sources and motorized mounts.

**Deliverables:**
- [ ] Optical breadboard setup and alignment
- [ ] 5-10 lasers mounted and collimated
- [ ] Motorized kinematic mounts (X, Y, angle per laser) operational
- [ ] Camera mounted at focal plane, IR filter installed
- [ ] Arduino + stepper motor drivers programmed
- [ ] Software control interface (Python ↔ Arduino)

**Skills needed:**
- Optical alignment (basic to moderate)
- Electronics (Arduino programming)
- Mechanical assembly (cutting mounts, lead screws)

---

### Phase 3: Manual Alignment Baseline (Weeks 3-4)

**Goal:** Establish human baseline for comparison.

**Task:**
- [ ] Manually align 5 beams to visible fringe pattern
- [ ] Document time taken, fringe contrast achieved
- [ ] Capture reference interference images
- [ ] Measure phase stability (drift over 5 minutes)

**Purpose:** Establish baseline. AI should beat this.

---

### Phase 4: Computer Vision Development (Weeks 5-6)

**Goal:** Develop image processing pipeline to extract phase from camera images.

**Deliverables:**
- [ ] Image preprocessing (noise reduction, normalization)
- [ ] Feature extraction (fringe detection, contrast calculation)
- [ ] Phase estimation algorithm (FFT-based, or neural network)
- [ ] Validation against synthetic data

**Techniques:**
- 2D Fourier Transform to extract fringe frequency
- Hermite-Gaussian decomposition
- Or: pre-trained CNN for end-to-end phase prediction

---

### Phase 5: AI Model Deployment (Weeks 7-9)

**Goal:** Deploy trained neural network for real-time control.

**Deliverables:**
- [ ] Load trained CNN on control computer
- [ ] Integrate with camera capture pipeline
- [ ] Implement proportional feedback control (phase error → motor commands)
- [ ] Test on manually misaligned beams

**Expected result:** AI suggests correct moves to restore alignment.

---

### Phase 6: Closed-Loop Autonomous Alignment (Weeks 10-12)

**Goal:** Full autonomous control with minimal human input.

**Deliverables:**
- [ ] Auto-align 5 misaligned beams in <5 minutes
- [ ] Maintain coherence for >10 minutes without human intervention
- [ ] Handle small disturbances (manual nudge, temp change)
- [ ] Demonstrate on 7-10 beams

**Success criteria:**
- Fringe contrast > 0.8 (fully coherent)
- Phase error < π/4 radians
- Stability over 10+ minutes
- No manual adjustment needed

---

## 6. SUCCESS METRICS

### Proof-of-Concept Success (Go / No-Go Decision)

**Hard metrics:**
1. **Autonomous alignment time:** < 10 minutes for 10-beam system
2. **Coherence maintenance:** > 30 minutes continuous without manual input
3. **Robustness:** Recovers from artificial disturbances (nudge, thermal)
4. **Cost:** Total hardware < $20k
5. **Reproducibility:** Works 4 out of 5 attempts without retraining

**Soft metrics:**
- Fringe contrast > 0.7 (visible interference)
- Phase stability < 1 radian RMS (laser timescale)
- Customer feedback: "This looks feasible to scale"

### Scaling Success (Full Prototype)

**100-laser system:**
1. **Photodisintegration signal detected:** Measurable He-3 production confirmed
2. **Power efficiency:** >1% He-3 atoms per incident hard X-ray photon
3. **Duty cycle:** >95% uptime (beam aligned, no human intervention)
4. **Cost per He-3:** < $100 per gram (target for commercial viability)

---

## 7. CRITICAL RISKS & MITIGATIONS

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Camera framerate insufficient for alignment feedback | Medium | High | Test with borrowed high-speed camera first; 10 Hz may be enough |
| Phase prediction error too large | Medium | High | Use ensemble of CNN + physics model; add uncertainty quantification |
| Thermal drift destabilizes alignment | High | Medium | Insulate optical table; add temperature compensation to motor control |
| Stepper motor resolution inadequate | Low | High | Use finer pitch lead screws; closed-loop encoder feedback if needed |
| Coherent beam combining optics too expensive | Low | High | Start with simple dichroic combiners (cheaper); upgrade later |
| AI training requires unrealistic compute | Low | Medium | Synthetic training data is cheap; inference is lightweight (ResNet18 runs on CPU) |
| Scaling to 100+ beams becomes intractable | Medium | High | Proof-of-concept on 10 beams directly addresses this; if 10-beam works, 100 is engineering |

---

## 8. RESEARCH CONTRIBUTION

### Published Results

**Potential papers from this work:**
1. *"AI-Driven Autonomous Alignment of Multi-Beam Laser Arrays Using Commodity Sensors"* — CVPRLaserVision, JOSA
2. *"Coherence Maintenance via Deep Reinforcement Learning in Fiber Laser Arrays"* — Optics Express
3. *"Proof-of-Concept Multi-Photon Photodisintegration of Helium-4 for Fusion Fuel"* — Nuclear Physics Letters (if He-3 signal achieved)

### IP Considerations

- **Open source:** Release RL control software (benefits field)
- **Patent:** Optical combining method + control algorithm combination (defensible if novel)
- **Pre-publication:** Establish priority via arxiv before journal submission

---

## 9. NEXT IMMEDIATE STEPS (Month 1)

1. **Finalize laser source:** Choose between fiber lasers vs. diodes
   - Fiber: more stable, ~$1000 each
   - Diodes: cheaper, ~$300 each (but less stable)
   - **Decision point:** Stability vs. cost trade-off

2. **Simulate first:**
   - Build Fresnel diffraction optics simulator
   - Generate synthetic training data (50k images)
   - Train baseline CNN on synthetic data
   - *Cost: $0 (software only)*
   - *Timeline: 2-3 weeks*

3. **Procurement:**
   - Order 10× laser sources
   - Order motorized mounts (M-STAGE kinematic series, ~$150 each)
   - Order NEMA17 stepper motors + drivers
   - Order 35mm mirrorless camera + IR filter
   - Order optical breadboard + simple optics
   - *Total: ~$12k*
   - *Lead time: 4-6 weeks*

4. **Parallel: Form team**
   - Optician (optical alignment)
   - Software engineer (PyTorch + control)
   - Electronics technician (Arduino, motors)
   - Project lead (integration, PoC success criteria)

5. **Establish success criteria document**
   - Weekly check-ins
   - Monthly PoC progress report
   - **Go / No-Go decision point:** End of Month 4
     - If 10-beam autonomous alignment achieved → proceed to scaling
     - If not → investigate root cause, iterate, or pivot

---

## 10. BUDGET SUMMARY

### Proof-of-Concept (5-10 beams)
- **Hardware:** $12,000
- **Software/simulation tools:** $0 (open source)
- **Personnel (6 months × 1 FTE):** ~$150,000
- **Miscellaneous:** $3,000
- **Total PoC:** ~$165,000

### 20-Beam Prototype
- **Hardware:** $25,000
- **Personnel (6 months × 2 FTE):** $300,000
- **Total:** ~$325,000

### 100-Beam Full Prototype
- **Hardware/optics/integration:** $1,900,000
- **Compton X-ray stage:** $500,000
- **Personnel (18 months × 3 FTE):** $675,000
- **Total:** ~$3,075,000

### Production Scale (500-laser system)
- **Unit cost (one system):** ~$1,500,000 (economies of scale)
- **Build time:** 12 months
- **Operating cost:** ~$100k/year (electricity, maintenance)

---

## 11. CONCLUSION

The path from concept to production is clear:

1. **PoC (6 months, $165k):** Prove AI can autonomously align cheap lasers with camera feedback
2. **Prototype (12 months, $3M):** Scale to 100 beams, add hard X-ray generation, demonstrate He-3 signal
3. **Production (36 months, $1.5M per unit):** Build multiple systems, refine, establish supply chain

**The critical insight:** If AI-driven alignment works at 10 beams, it works at 100 or 500. The proof-of-concept is the bottleneck.

**The research angle:** Nobody has published systematic AI-driven control of 100+ coherent lasers specifically for photodisintegration. This is publishable, defensible research.

**The commercial angle:** He-3 supply is the missing piece for fusion energy. Solving this unlocks a multi-billion-dollar market.

---

## Appendices

### A. Optical Simulation Code Outline

```python
# he3_optics_simulator.py

import numpy as np
from scipy.special import fresnel

class MultiBeamInterferometer:
    def __init__(self, num_beams, wavelength=1e-6):
        self.num_beams = num_beams
        self.wavelength = wavelength
        self.beam_angles = 2 * np.pi * np.arange(num_beams) / num_beams
    
    def compute_interference_pattern(self, phases, positions, grid_size=640):
        """
        Compute 2D interference pattern given beam positions and phases.
        """
        x = np.linspace(-1, 1, grid_size)
        y = np.linspace(-1, 1, grid_size)
        X, Y = np.meshgrid(x, y)
        
        intensity = np.zeros_like(X, dtype=float)
        
        for i in range(self.num_beams):
            angle = self.beam_angles[i]
            k_x = (2 * np.pi / self.wavelength) * np.cos(angle)
            k_y = (2 * np.pi / self.wavelength) * np.sin(angle)
            
            # Add positional offset
            x_i = X - positions[i, 0]
            y_i = Y - positions[i, 1]
            
            # Plane wave with phase
            phase_term = k_x * x_i + k_y * y_i + phases[i]
            field = np.exp(1j * phase_term)
            
            intensity += np.abs(field) ** 2
        
        # Normalize
        intensity = intensity / intensity.max()
        return (255 * intensity).astype(np.uint8)

# Usage:
simulator = MultiBeamInterferometer(num_beams=10)
pattern = simulator.compute_interference_pattern(
    phases=np.random.uniform(0, 2*np.pi, 10),
    positions=np.random.normal(0, 0.1, (10, 2))
)
```

### B. Stepper Motor Control (Arduino)

```cpp
// motor_control.ino
#include <Stepper.h>

const int num_beams = 10;
const int stepsPerRevolution = 200;

// Define stepper motors (3 per beam: X, Y, angle)
Stepper motor_x[num_beams] = {...};  // X motors
Stepper motor_y[num_beams] = {...};  // Y motors
Stepper motor_angle[num_beams] = {...};  // Angle motors

void setup() {
  Serial.begin(9600);
  for (int i = 0; i < num_beams; i++) {
    motor_x[i].setSpeed(60);  // RPM
    motor_y[i].setSpeed(60);
    motor_angle[i].setSpeed(60);
  }
}

void loop() {
  // Read commands from Python
  if (Serial.available() > 0) {
    String data = Serial.readStringUntil('\n');
    // Parse: "beam,axis,steps"
    // Move motors accordingly
    
    for (int i = 0; i < num_beams; i++) {
      int steps_x = parse_steps(data, i, 'x');
      int steps_y = parse_steps(data, i, 'y');
      int steps_angle = parse_steps(data, i, 'a');
      
      if (steps_x != 0) motor_x[i].step(steps_x);
      if (steps_y != 0) motor_y[i].step(steps_y);
      if (steps_angle != 0) motor_angle[i].step(steps_angle);
    }
    
    Serial.println("DONE");
  }
  
  delay(100);
}
```

### C. References

- **Coherent Beam Combining:**
  - Du et al., "Phase-locked control of coherent beam combining using deep learning," ScienceDirect 2025
  - Wu et al., "Harnessing AI for coherent beam combination," Nature Reviews Physics
  
- **Adaptive Optics & ML:**
  - Nousiainen et al., "Wavefront sensor-less adaptive optics using deep reinforcement learning," PMC
  - Yenra, "AI Optical System Design: 19 Updated Directions," 2026

- **Photodisintegration Physics:**
  - Kyoto University Dept. Physics, "Photodisintegration of He-4 in GDR region," 2023
  - Recent experimental data: $^4He(\gamma, n)^3He$ cross-section measurements

- **Fusion Energy:**
  - Helion Energy, "D-He-3 Fuel Cycle Renewable Engineering," 2024
  - TAE Technologies, "Helium-3 Supply for Next-Gen Fusion," Technical Report

---

**Document Status:** Living document — update as PoC progresses.
**Last Updated:** September 2026
**Owner:** [Your Name]
**Collaborators:** [Team members]
