import { motion } from 'framer-motion';
import { experience } from '../data/portfolio.js';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">
            <span className="dot" /> Career
          </span>
          <h2 className="section-title">
            Work <span className="accent">Experience</span>
          </h2>
          <p className="section-sub">
            From automating quality to engineering scalable backend systems—bringing reliability to every line of code.
          </p>
        </motion.div>

        <div className="timeline">
          {experience.map((e, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={e.role + e.company}
                className="tl-item"
                initial={{ x: isLeft ? -60 : 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <div className="tl-card">
                  <div className="tl-head">
                    <h3>
                      {e.role} · <span style={{ color: 'var(--primary)' }}>{e.company}</span>
                    </h3>
                    <span className="when">{e.when}</span>
                  </div>
                  <div className="where">{e.where}</div>
                  <ul>
                    {e.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                  <div className="tech-row" style={{ marginTop: 12 }}>
                    {e.stack.map((s) => (
                      <span key={s} className="tech">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
