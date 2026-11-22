import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { footerData } from '../data/portfolio.js';
import { getOrdinalString } from '../utils/formatters.js';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState(106);

  useEffect(() => {
    let isMounted = true;

    // Resolve exact base URL path for Vite / GitHub Pages compatibility
    const baseUrl = (import.meta.env.BASE_URL || '/').endsWith('/') 
      ? (import.meta.env.BASE_URL || '/') 
      : `${import.meta.env.BASE_URL}/`;
    const statsUrl = `${baseUrl}visitor-stats.json`;

    fetch(statsUrl, { cache: 'no-store' })
      .then(res => {
        if (!res.ok) throw new Error(`Network response failed: ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (isMounted && data && typeof data.totalViews === 'number') {
          setVisitorCount(data.totalViews);
        }
      })
      .catch(err => {
        console.warn('[Footer] Visitor stats fetch warning:', err.message);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const ordinalViews = getOrdinalString(visitorCount);

  return (
    <footer className="footer space-footer" data-testid="footer__container__footer">
      <div className="container footer-inner">
        <motion.div
          className="space-footer-card visitor-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="visitor-info">
            <span className="visitor-text">
              You are <strong className="visitor-highlight">{ordinalViews}</strong> visitor to my site in {currentYear}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="space-footer-card greeting-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="space-footer-sparkle" aria-hidden="true">🚀</span>
          <span className="single-line-greeting">
            <strong>{footerData.greeting}</strong> {footerData.greetingSub}
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
