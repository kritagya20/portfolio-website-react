import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { footerData } from '../data/portfolio.js';

const VISITOR_KEY = 'kritagya-portfolio-visits';

function bumpVisits() {
  try {
    const n = Number(localStorage.getItem(VISITOR_KEY) || 0) + 1;
    localStorage.setItem(VISITOR_KEY, String(n));
    return n;
  } catch {
    return 1;
  }
}

export default function Footer() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    setVisits(bumpVisits());
  }, []);

  return (
    <footer className="footer space-footer">
      <div className="container footer-inner">
        <motion.div
          className="space-footer-card greeting-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="space-footer-sparkle" aria-hidden="true">🚀</span>
          <span className="single-line-greeting">
            <strong>{footerData.greeting}</strong> {footerData.greetingSub}
          </span>
        </motion.div>

        <motion.div
          className="space-footer-card visitor-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          title="Local orbital visit counter"
        >
          <div className="radar-pulse-box">
            <span className="radar-dot" />
            <span className="radar-ring" />
          </div>
          <div className="visitor-info">
            <span className="visitor-meta">{footerData.visitorTelemetryLabel}</span>
            <span className="visitor-text">
              YOU ARE VISITOR <b className="visitor-num">#{visits}</b> ON THIS SITE
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

