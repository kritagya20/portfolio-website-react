import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { footerData } from '../data/portfolio.js';

function getOrdinalString(n) {
  if (n === null || n === undefined || isNaN(n)) return '100th';
  const num = Number(n);
  const formattedNum = num.toLocaleString();
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return `${formattedNum}st`;
  }
  if (lastDigit === 2 && lastTwoDigits !== 12) {
    return `${formattedNum}nd`;
  }
  if (lastDigit === 3 && lastTwoDigits !== 13) {
    return `${formattedNum}rd`;
  }
  return `${formattedNum}th`;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState(100);

  useEffect(() => {
    let isMounted = true;
    fetch('/visitor-stats.json')
      .then(res => {
        if (!res.ok) throw new Error('Network response failed');
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
            <span className="visitor-text" style={{ textTransform: 'none', letterSpacing: '0.02em', fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.65)' }}>
              You are <strong style={{ color: '#ffffff', fontWeight: 600 }}>{ordinalViews}</strong> visitor to my site in {currentYear}
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
