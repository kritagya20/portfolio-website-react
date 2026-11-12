import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { profile, satellites } from '../data/portfolio.js';

function useTypewriterOnce(textToType = 'Software Development Engineer', speed = 55, delay = 250) {
  const [text, setText] = useState('');
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    if (hasCompletedRef.current) {
      setText(textToType);
      return;
    }

    let index = 0;
    let timerId;

    const startTimer = setTimeout(() => {
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
    }, delay);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(timerId);
    };
  }, [textToType, speed, delay]);

  return text;
}

export default function Hero() {
  const singleRole = typeof profile.typewriter === 'string'
    ? profile.typewriter
    : (Array.isArray(profile.typewriter) ? profile.typewriter[0] : 'Software Development Engineer');
  const typed = useTypewriterOnce(singleRole);
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
    <section id="home" className="section hero hero-centered-theme" data-testid="hero__container__section">
      <div className="container">
        <motion.div
          ref={stageRef}
          className="hero-centered-stage"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.175, 0.885, 0.32, 1.275] }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Centered Hero Solar Orbit System */}
          <div
            className={`hero-solar-system ${activeSat !== null ? 'gravitational-warp-active' : ''}`}
            style={{
              '--warp-color': activeColor || 'var(--primary)',
            }}
          >
            {/* Multi-Tier Orbit Rings - Exclusively React to Gravity Warp */}
            <div className={`solar-ring ring-1 ${activeSat === 0 || activeSat === 1 ? 'ring-active' : ''}`} />
            <div className={`solar-ring ring-2 ${activeSat === 2 || activeSat === 3 ? 'ring-active' : ''}`} />
            <div className={`solar-ring ring-3 ${activeSat === 4 || activeSat === 5 ? 'ring-active' : ''}`} />
            <div className={`solar-ring ring-4 ${activeSat === 6 || activeSat === 7 ? 'ring-active' : ''}`} />

            {/* Central Nucleus Core - Kept Calm & Stable */}
            <div className="solar-core">
              <div className="core-glow-aura" />
              <div className="core-pulse-ring" />
              
              <div className="core-typer-sub">
                <span className="typer-prompt">&gt;</span> {typed}
                <span className="caret" aria-hidden="true" />
              </div>
              <h1 className="hero-title">
                Hi, I’m <span className="grad">{profile.name.split(' ')[0]}</span>.
              </h1>

              {/* Primary & Secondary Dual Glass CTA Buttons */}
              <div className="hero-cta-group">
                <a className="hero-btn hero-btn--primary" href="#about" data-testid="hero__explore__link">
                  <span>Explore</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </a>
                <a
                  className="hero-btn hero-btn--secondary"
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="hero__resume__link"
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
            </div>

            {/* Orbiting Satellite Tech Badges Dynamic Mapping */}
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

              return (
                <div
                  key={sat.label}
                  className={`sat-node ${posClass} ${isSelected ? 'sat-active' : ''}`}
                  onMouseEnter={() => setActiveSat(idx)}
                  onMouseLeave={() => setActiveSat(null)}
                  onClick={() => handleSatClick(sat.projectIndex)}
                  data-testid={`hero__satellite__node-${idx}`}
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
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
