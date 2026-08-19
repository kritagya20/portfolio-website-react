import { motion } from 'framer-motion';
import { footerData } from '../data/portfolio.js';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer space-footer" data-testid="footer__container__footer">
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
        >
          <div className="visitor-info">
            <span className="visitor-text" style={{ textTransform: 'none', letterSpacing: '0.02em', fontSize: '0.82rem' }}>
              Developed &amp; Designed by <strong>Kritagya Singh Chouhan</strong> @ {currentYear}
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

