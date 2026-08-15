import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const STATUS_STAGES = [
  { threshold: 0, text: 'Establishing orbital telemetry link…' },
  { threshold: 30, text: 'Loading core microservices & specs…' },
  { threshold: 65, text: 'Initializing interactive space arcade…' },
  { threshold: 90, text: 'Systems online. Launching…' },
];

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState(STATUS_STAGES[0].text);

  useEffect(() => {
    // Fast progress ticker (~1.2 seconds total duration)
    const startTime = Date.now();
    const duration = 1250; // ms

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      
      setProgress(pct);

      // Update status text based on threshold
      for (let i = STATUS_STAGES.length - 1; i >= 0; i--) {
        if (pct >= STATUS_STAGES[i].threshold) {
          setStatusText(STATUS_STAGES[i].text);
          break;
        }
      }

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete?.();
        }, 220);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader-overlay"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      <div className="preloader-content">
        {/* Concentric Cosmic Radar Telemetry Rings */}
        <div className="preloader-radar">
          <svg viewBox="0 0 160 160" className="preloader-svg">
            <circle cx="80" cy="80" r="72" className="ring ring-outer" />
            <circle cx="80" cy="80" r="52" className="ring ring-mid" />
            <circle cx="80" cy="80" r="32" className="ring ring-inner" />
            <motion.line
              x1="80" y1="80" x2="80" y2="8"
              className="radar-beam"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              style={{ transformOrigin: '80px 80px' }}
            />
          </svg>
          <div className="preloader-core-icon">🛰️</div>
        </div>

        {/* Dynamic Percentage Counter */}
        <div className="preloader-counter-row">
          <span className="preloader-pct">{progress}</span>
          <span className="preloader-symbol">%</span>
        </div>

        {/* Progress Bar Track */}
        <div className="preloader-track">
          <motion.div
            className="preloader-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Telemetry Text */}
        <div className="preloader-status">
          <span className="dot-pulse" /> {statusText}
        </div>
      </div>
    </motion.div>
  );
}
