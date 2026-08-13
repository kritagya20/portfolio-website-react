import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
          className="space-footer-greeting"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="space-footer-sparkle">🚀</span>
          <span className="space-footer-text">
            <strong>Happy to see you here</strong> — have a great day ahead! 👋
          </span>
        </motion.div>

        <motion.div
          className="space-visitor-badge"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          title="Local orbital visit counter"
        >
          <div className="radar-pulse-box">
            <span className="radar-dot" />
            <span className="radar-ring" />
          </div>
          <div className="visitor-info">
            <span className="visitor-meta">// ORBIT VISITOR TELEMETRY</span>
            <span className="visitor-text">
              YOU ARE VISITOR <b className="visitor-num">#{visits}</b> ON THIS SITE
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
