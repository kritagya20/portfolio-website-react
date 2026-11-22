import { useEffect, useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { profile, satellites } from '../data/portfolio.js';

function useTypewriterOnce(textToType = 'Software Development Engineer', speed = 45, startTyping = false) {
  const [text, setText] = useState('');
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    // Guaranteed empty state while card is popping up or waiting
    if (!startTyping) {
      setText('');
      return;
    }
    if (hasCompletedRef.current) {
      setText(textToType);
      return;
    }

    let index = 0;
    let timerId;

    // Mindful cognitive pause after card pop-up animation completes (150ms)
    const initialPause = setTimeout(() => {
      const step = () => {
        if (index < textToType.length) {
          index++;
          setText(textToType.slice(0, index));
          timerId = setTimeout(step, speed);
        } else {
          hasCompletedRef.current = true;
        }
      };
      step();
    }, 150);

    return () => {
      clearTimeout(initialPause);
      clearTimeout(timerId);
    };
  }, [textToType, speed, startTyping]);

  return text;
}

// Chaotic "Big-Bang" cosmic genesis configuration for celestial orbits
// Tuned for rapid, crisp manifestation so the stage completely clears before the card pops up
const ORBIT_RINGS = [
  {
    id: 'ring-2',
    ringClass: 'ring-2',
    activeSatIndices: [2, 3],
    // Ring 2 bursts first with energetic expansion from core
    delayDesktop: 0.20,
    delayMobile: 0.12,
    initialScaleDesktop: 0.15,
    initialScaleMobile: 0.22,
    initialRotate: -24,
    stiffness: 340,
    damping: 18,
  },
  {
    id: 'ring-4',
    ringClass: 'ring-4',
    activeSatIndices: [6, 7],
    // Ring 4 (outer boundary) snaps in second from outer horizon
    delayDesktop: 0.32,
    delayMobile: 0.20,
    initialScaleDesktop: 1.40,
    initialScaleMobile: 1.20,
    initialRotate: 16,
    stiffness: 280,
    damping: 22,
  },
  {
    id: 'ring-1',
    ringClass: 'ring-1',
    activeSatIndices: [0, 1],
    // Ring 1 (inner nucleus) quantum-sparks third from singularity
    delayDesktop: 0.44,
    delayMobile: 0.28,
    initialScaleDesktop: 0.22,
    initialScaleMobile: 0.28,
    initialRotate: 26,
    stiffness: 360,
    damping: 18,
  },
  {
    id: 'ring-3',
    ringClass: 'ring-3',
    activeSatIndices: [4, 5],
    // Ring 3 (mid-outer harmonic) locks into resonance fourth
    delayDesktop: 0.56,
    delayMobile: 0.36,
    initialScaleDesktop: 0.36,
    initialScaleMobile: 0.42,
    initialRotate: -15,
    stiffness: 310,
    damping: 20,
  },
];

// Asynchronous starlight ignition delays mapped to parent orbits
const SATELLITE_BIG_BANG_DELAYS_DESKTOP = [
  0.50, // idx 0: Go & REST APIs (on Ring 1, pops right after Ring 1 at 0.44s)
  0.56, // idx 1: Java & Spring Boot (on Ring 1)
  0.26, // idx 2: PostgreSQL & SQL (on Ring 2, pops right after Ring 2 at 0.20s)
  0.32, // idx 3: Redis & Caching (on Ring 2)
  0.62, // idx 4: Docker & Linux (on Ring 3, pops right after Ring 3 at 0.56s)
  0.68, // idx 5: API Reliability & k6 (on Ring 3)
  0.38, // idx 6: System Reliability (on Ring 4, pops right after Ring 4 at 0.32s)
];

const SATELLITE_BIG_BANG_DELAYS_MOBILE = [
  0.32, // idx 0 (Ring 1)
  0.36, // idx 1 (Ring 1)
  0.16, // idx 2 (Ring 2)
  0.20, // idx 3 (Ring 2)
  0.40, // idx 4 (Ring 3)
  0.44, // idx 5 (Ring 3)
  0.24, // idx 6 (Ring 4)
];

export default function Hero({ isReady = true }) {
  const singleRole = typeof profile.typewriter === 'string'
    ? profile.typewriter
    : (Array.isArray(profile.typewriter) ? profile.typewriter[0] : 'Software Development Engineer');

  // Adaptive timing: ensures sequential staging (Orbits -> Stage Clears -> Card Pops Up -> Typing Starts)
  const timingConfig = useMemo(() => {
    if (typeof window === 'undefined') {
      return {
        isInstant: false,
        isMobile: false,
        singularityDelay: 0.10,
        scannerDelay: 0.36,
        coreDelay: 0.82,
      };
    }

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // Instant fast-path for accessibility preference (zero artificial wait)
    if (prefersReducedMotion) {
      return {
        isInstant: true,
        isMobile,
        singularityDelay: 0,
        scannerDelay: 0,
        coreDelay: 0.05,
      };
    }

    // Snappy mobile choreography (~0.52s before card pop-up)
    if (isMobile) {
      return {
        isInstant: false,
        isMobile: true,
        singularityDelay: 0.06,
        scannerDelay: 0.24,
        coreDelay: 0.52,
      };
    }

    // Cinematic staged desktop choreography (~0.82s before card pop-up)
    return {
      isInstant: false,
      isMobile: false,
      singularityDelay: 0.10,
      scannerDelay: 0.36,
      coreDelay: 0.82,
    };
  }, []);

  // Card Pop-Up State Machine: Card arrives EMPTY; typing only triggers after pop-up completes
  const [cardAnimationDone, setCardAnimationDone] = useState(false);

  // Safety fallback: guarantees typing activates even if onAnimationComplete is interrupted
  useEffect(() => {
    if (!isReady) return;
    if (timingConfig.isInstant) {
      setCardAnimationDone(true);
      return;
    }
    const timeoutMs = (timingConfig.coreDelay + 0.95) * 1000;
    const fallbackTimer = setTimeout(() => {
      setCardAnimationDone(true);
    }, timeoutMs);
    return () => clearTimeout(fallbackTimer);
  }, [isReady, timingConfig.isInstant, timingConfig.coreDelay]);

  const typed = useTypewriterOnce(singleRole, 45, cardAnimationDone);
  const stageRef = useRef(null);
  const [activeSat, setActiveSat] = useState(null);

  const handleMouseMove = (e) => {
    if (window.matchMedia && !window.matchMedia('(pointer: fine)').matches) return;
    const stage = stageRef.current;
    if (!stage) return;

    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;

    stage.style.transition = 'transform 0.15s ease-out';
    stage.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const stage = stageRef.current;
    if (!stage) return;

    stage.style.transition = 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)';
    stage.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
    setActiveSat(null);
  };

  const activeColor = activeSat !== null ? satellites[activeSat]?.color : null;

  const handleSatClick = (projectIndex) => {
    window.dispatchEvent(new CustomEvent('selectProjectSlide', { detail: { index: projectIndex } }));
  };

  return (
    <section id="home" className="section hero hero-centered-theme" test-id="hero__container_section">
      <div className="container">
        <div
          ref={stageRef}
          className="hero-centered-stage"
          test-id="hero__stage_container"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Centered Hero Solar Orbit System */}
          <div
            className={`hero-solar-system ${activeSat !== null ? 'gravitational-warp-active' : ''}`}
            test-id="hero__solar_stage"
            style={{
              '--warp-color': activeColor || 'var(--primary)',
            }}
          >
            {/* Phase 1: Chaotic Big-Bang Orbits Genesis & Singularity Wave (Finishes before card pop-up) */}
            <div className="solar-rings-stage" test-id="hero__rings_stage">
              {/* Central Singularity Detonation Wave */}
              {!timingConfig.isInstant && (
                <motion.div
                  className="solar-singularity-pulse"
                  initial={{ opacity: 0, scale: 0.1 }}
                  animate={
                    isReady
                      ? {
                          opacity: [0, 0.92, 0],
                          scale: [0.1, 1.45],
                        }
                      : { opacity: 0 }
                  }
                  transition={{
                    duration: timingConfig.isMobile ? 0.45 : 0.55,
                    delay: timingConfig.singularityDelay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              )}

              {/* Sweeping Scanner Radar Pulse (Clears the stage before card arrives) */}
              {!timingConfig.isInstant && (
                <motion.div
                  className="solar-scanner-pulse"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={
                    isReady
                      ? {
                          opacity: [0, 0.75, 0],
                          scale: [0.5, 1.05, 1.25],
                        }
                      : { opacity: 0 }
                  }
                  transition={{
                    duration: timingConfig.isMobile ? 0.38 : 0.45,
                    delay: timingConfig.scannerDelay,
                    ease: 'easeOut',
                  }}
                />
              )}

              {/* Asynchronous Big-Bang Orbital Rings */}
              {ORBIT_RINGS.map((orbit) => {
                const ringDelay = timingConfig.isInstant
                  ? 0
                  : (timingConfig.isMobile ? orbit.delayMobile : orbit.delayDesktop);
                const initScale = timingConfig.isInstant
                  ? 1
                  : (timingConfig.isMobile ? orbit.initialScaleMobile : orbit.initialScaleDesktop);
                const initRotate = timingConfig.isInstant ? 0 : orbit.initialRotate;
                const isRingActive = orbit.activeSatIndices.includes(activeSat);

                return (
                  <motion.div
                    key={orbit.id}
                    className="solar-ring-slot"
                    initial={{
                      opacity: 0,
                      scale: initScale,
                      rotate: initRotate,
                    }}
                    animate={
                      isReady
                        ? { opacity: 1, scale: 1, rotate: 0 }
                        : { opacity: 0, scale: initScale, rotate: initRotate }
                    }
                    transition={
                      timingConfig.isInstant
                        ? { duration: 0.1 }
                        : {
                            opacity: { duration: 0.22, delay: ringDelay },
                            scale: {
                              type: 'spring',
                              stiffness: orbit.stiffness,
                              damping: orbit.damping,
                              mass: 0.75,
                              delay: ringDelay,
                            },
                            rotate: {
                              type: 'spring',
                              stiffness: 280,
                              damping: 22,
                              delay: ringDelay,
                            },
                          }
                    }
                  >
                    <div className={`solar-ring ${orbit.ringClass} ${isRingActive ? 'ring-active' : ''}`} />
                  </motion.div>
                );
              })}
            </div>

            {/* Phase 2: Orbiting Satellite Tech Badges (Igniting as Parent Orbits Form) */}
            {satellites.map((sat, idx) => {
              const ringClassMap = [
                'sat-r1-1',
                'sat-r1-2',
                'sat-r2-1',
                'sat-r2-2',
                'sat-r3-1',
                'sat-r3-2',
                'sat-r4-1',
                'sat-r4-2',
              ];
              const posClass = ringClassMap[idx] || `sat-r1-1`;
              const isSelected = activeSat === idx;
              const satDelay = timingConfig.isInstant
                ? 0
                : (timingConfig.isMobile
                    ? (SATELLITE_BIG_BANG_DELAYS_MOBILE[idx] ?? 0.25)
                    : (SATELLITE_BIG_BANG_DELAYS_DESKTOP[idx] ?? 0.45));

              return (
                <motion.div
                  key={sat.label}
                  className={`sat-node ${posClass} ${isSelected ? 'sat-active' : ''}`}
                  initial={{ opacity: 0, scale: timingConfig.isInstant ? 1 : 0.25 }}
                  animate={isReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.25 }}
                  transition={
                    timingConfig.isInstant
                      ? { duration: 0.12 }
                      : {
                          type: 'spring',
                          stiffness: 300,
                          damping: 19,
                          delay: satDelay,
                        }
                  }
                  onMouseEnter={() => setActiveSat(idx)}
                  onMouseLeave={() => setActiveSat(null)}
                  onClick={() => handleSatClick(sat.projectIndex)}
                  test-id="hero__satellite_node"
                  style={{
                    cursor: 'pointer',
                    borderColor: isSelected ? sat.color : undefined,
                    color: isSelected ? '#ffffff' : undefined,
                    boxShadow: isSelected
                      ? `0 10px 28px rgba(0, 0, 0, 0.7), 0 0 25px ${sat.color}`
                      : undefined,
                  }}
                >
                  <span className="sat-dot" style={{ background: sat.color }} />
                  {sat.label}
                </motion.div>
              );
            })}

            {/* Phase 3: Central Hero Card Pop-Up (Arrives EMPTY, triggers typing on animation complete) */}
            <motion.div
              className="solar-core"
              test-id="hero__core_card"
              initial={{
                opacity: 0,
                y: timingConfig.isInstant ? 0 : 28,
                scale: timingConfig.isInstant ? 1 : 0.82,
                z: timingConfig.isInstant ? 40 : 0,
              }}
              animate={
                isReady
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      z: 40,
                    }
                  : {
                      opacity: 0,
                      y: 28,
                      scale: 0.82,
                      z: 0,
                    }
              }
              transition={
                timingConfig.isInstant
                  ? { duration: 0.1 }
                  : {
                      type: 'spring',
                      stiffness: 300,
                      damping: 22,
                      mass: 0.75,
                      delay: timingConfig.coreDelay,
                    }
              }
              onAnimationComplete={() => {
                if (isReady) {
                  setCardAnimationDone(true);
                }
              }}
            >
              <div className="core-glow-aura" />
              <div className="core-pulse-ring" />
              
              {/* Terminal Typewriter Badge: Arrives empty (> _); typing starts only after card pop-up settles */}
              <div className="core-typer-sub" test-id="hero__typewriter_badge">
                <span className="typer-prompt">&gt;</span> {typed}
                <span className="caret" aria-hidden="true" />
              </div>
              <h1 className="hero-title" test-id="hero__title_heading">
                Hi, I’m <span className="grad">{profile.name.split(' ')[0]}</span>.
              </h1>

              {/* Primary & Secondary Dual Glass CTA Buttons */}
              <div className="hero-cta-group" test-id="hero__cta_group">
                <a className="hero-btn hero-btn--primary" href="#about" test-id="hero__explore_btn">
                  <span>Explore</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </a>
                <a
                  className="hero-btn hero-btn--secondary"
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  test-id="hero__resume_link"
                >
                  <svg
                    className="btn-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span>Resume</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
