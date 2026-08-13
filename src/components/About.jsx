import { motion } from 'framer-motion';
import { aboutHighlights } from '../data/portfolio.js';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">
            <span className="dot" /> About Me
          </span>
          <h2 className="section-title">
            Engineering <span className="accent">Background</span> &amp; Strengths
          </h2>
          <p className="section-sub">
            A summary of my professional journey, technical specializations, and engineering principles.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="dossier-card"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="dossier-header">
              <div className="dossier-title-box">
                <div className="dossier-avatar" aria-hidden="true">KC</div>
                <div>
                  <h3 className="dossier-name">Kritagya Singh Chouhan</h3>
                  <span style={{ color: 'var(--primary-2)', fontSize: '0.88rem', fontWeight: 600 }}>
                    Software Engineer
                  </span>
                </div>
              </div>
            </div>

            <div className="dossier-body">
              <p>
                I’m a Software Engineer focused on architecting scalable, high-throughput, and production-ready systems. My mission centers on solving complex engineering challenges—designing robust backend microservices, optimizing low-latency APIs, tuning database interactions, and containerizing runtimes with <span className="dossier-tech-highlight">Docker</span>.
              </p>

              <p>
                Currently at <strong>Medkart</strong>, I build backend services engineered primarily in <span className="dossier-tech-highlight">Go (Golang)</span>. Grounded in my foundation across <span className="dossier-tech-highlight">Java</span>, <span className="dossier-tech-highlight">Selenium</span>, and <span className="dossier-tech-highlight">REST Assured</span>, I design automation frameworks that validate backend reliability under stress and ensure confident releases.
              </p>

              <p>
                I take end-to-end ownership—from system architecture and API design to automated test pipelines and performance optimization. Beyond code, I’m a football and cricket enthusiast who loves building dependable software solutions.
              </p>

              <div className="dossier-quote">
                “Great software isn’t just shipped fast—it is engineered to perform reliably under high scale.”
              </div>
            </div>
          </motion.div>

          <div className="about-list">
            {aboutHighlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="subsystem-card"
                initial={{ x: 40, opacity: 0, scale: 0.95 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.175, 0.885, 0.32, 1.275] }}
              >
                <div className="subsystem-head">
                  <div className="subsystem-title-wrap">
                    <div className="subsystem-ico" aria-hidden="true">
                      {h.icon}
                    </div>
                    <h4>{h.title}</h4>
                  </div>
                  <span className="subsystem-tag">MODULE 0{i + 1}</span>
                </div>
                <p>{h.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
