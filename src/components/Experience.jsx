import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { experience } from '../data/portfolio.js';

export default function Experience() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 80%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 28,
    restDelta: 0.001,
  });

  // Map scaleY progress to top percentage for travelling dot to avoid scale distortion
  const dotTop = useTransform(scaleY, [0, 1], ['0%', '100%']);

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

        <div className="timeline" ref={containerRef}>
          {/* Background Track Line */}
          <div className="timeline-track" />

          {/* Animated Scroll Fill Line */}
          <motion.div className="timeline-progress" style={{ scaleY }} />

          {/* Un-deformed Travelling Glowing Dot */}
          <motion.div className="timeline-progress-dot" style={{ top: dotTop }} />

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
