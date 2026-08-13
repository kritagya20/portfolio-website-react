import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { experience } from '../data/portfolio.js';

function TimelineItem({ item, index, total, scaleY }) {
  const isLeft = index % 2 === 0;
  const itemRef = useRef(null);
  const [reached, setReached] = useState(false);
  const [threshold, setThreshold] = useState(
    (index / Math.max(total - 1, 1)) * 0.8 + 0.02
  );

  // Measure exact element offset ratio relative to container
  useEffect(() => {
    if (itemRef.current && itemRef.current.parentElement) {
      const itemTop = itemRef.current.offsetTop + 10;
      const totalHeight = itemRef.current.parentElement.offsetHeight;
      if (totalHeight > 0) {
        setThreshold(Math.max(0.01, itemTop / totalHeight));
      }
    }
  }, [total]);

  useEffect(() => {
    if (scaleY.get() >= threshold) {
      setReached(true);
    }
    return scaleY.on('change', (val) => {
      if (val >= threshold) {
        setReached(true);
      }
    });
  }, [scaleY, threshold]);

  return (
    <motion.div
      ref={itemRef}
      className={`tl-item ${reached ? 'reached' : ''}`}
      initial={{ x: isLeft ? -60 : 60, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      <div className="tl-card">
        <div className="tl-head">
          <h3>
            <span className="tl-role">{item.role}</span> · <span className="tl-company">{item.company}</span>
          </h3>
          <span className="when">{item.when}</span>
        </div>
        <div className="where">{item.where}</div>
        <ul className="tl-bullets">
          {item.bullets.map((b, idx) => (
            <li key={idx}>
              <span className="tl-bullet-icon">›</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="tech-row" style={{ marginTop: 14 }}>
          {item.stack.map((s) => (
            <span key={s} className="tech">
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

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

  const maxScaleY = useMotionValue(0);

  useEffect(() => {
    const unsub = scaleY.on('change', (val) => {
      if (val > maxScaleY.get()) {
        const newVal = val >= 0.98 ? 1 : val;
        maxScaleY.set(newVal);
      }
    });
    return () => unsub();
  }, [scaleY, maxScaleY]);

  // Map maxScaleY progress to top percentage for travelling dot to avoid scale distortion
  const dotTop = useTransform(maxScaleY, [0, 1], ['0%', '100%']);

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
            <span className="dot" /> Spaceflight Trajectory
          </span>
          <h2 className="section-title">
            Career <span className="accent">Trajectory</span>
          </h2>
          <p className="section-sub">
            From automating quality engineering to architecting high-throughput Go backend services.
          </p>
        </motion.div>

        <div className="timeline" ref={containerRef}>
          {/* Background Track Line */}
          <div className="timeline-track" />

          {/* Animated Scroll Fill Line */}
          <motion.div className="timeline-progress" style={{ scaleY: maxScaleY }} />

          {/* Travelling Glowing Space Comet */}
          <motion.div className="timeline-comet" style={{ top: dotTop }} title="Cosmic Meteor">
            <div className="comet-tail" />
            <div className="comet-head">
              <div className="comet-core" />
              <div className="comet-aura" />
            </div>
            <div className="comet-sparkles" aria-hidden="true">
              <span className="sparkle s1" />
              <span className="sparkle s2" />
              <span className="sparkle s3" />
              <span className="sparkle s4" />
            </div>
          </motion.div>

          {experience.map((e, i) => (
            <TimelineItem
              key={e.role + e.company}
              item={e}
              index={i}
              total={experience.length}
              scaleY={maxScaleY}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
