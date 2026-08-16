import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { profile, satellites } from '../data/portfolio.js';

function useTypewriter(words, typing = 80, holding = 1400) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx % words.length];
    let timeout;
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), holding);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          const next = deleting
            ? word.slice(0, text.length - 1)
            : word.slice(0, text.length + 1);
          setText(next);
        },
        deleting ? typing / 2 : typing
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, typing, holding]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.typewriter);
  const stageRef = useRef(null);
  const [activeSat, setActiveSat] = useState(null);

  const handleMouseMove = (e) => {
    const stage = stageRef.current;
    if (!stage) return;

    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    stage.style.transition = 'transform 0.1s ease-out';
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

  return (
    <section id="home" className="section hero hero-centered-theme">
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
                <span className="caret">&nbsp;</span>
              </div>
              <h1 className="hero-title">
                Hi, I’m <span className="grad">{profile.name.split(' ')[0]}</span>.
              </h1>

              {/* Embedded Action Buttons inside Central Core Card */}
              <div className="core-tab-actions">
                <a className="core-tab-btn active" href="#about">
                  Explore →
                </a>
                <a className="core-tab-btn" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                  📄 Resume
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
                  style={{
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
