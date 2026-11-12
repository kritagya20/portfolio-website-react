import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, AnimatePresence } from 'framer-motion';
import { experience, experienceHeader } from '../data/portfolio.js';
import ScrambleText from './ScrambleText.jsx';
import { ResponsiveTimelineDate, isCurrentRole } from '../utils/dateFormatter.jsx';

function TimelineItem({ item, index, total, scaleY, onOpenModal }) {
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

  const isCurrent = isCurrentRole(item.when);

  return (
    <motion.div
      ref={itemRef}
      className={`tl-item ${reached ? 'reached' : ''}`}
      data-testid={`experience.timeline__card-item__${index}`}
      initial={{ x: isLeft ? -60 : 60, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      <div className="tl-card">
        {/* Desktop Header */}
        <div className="tl-head tl-head-desktop">
          <div className="tl-head-title">
            <h3 className="tl-title-heading">
              <span className="tl-role">{item.role}</span>
              <span className="tl-desktop-sep"> · </span>
              <span className="tl-company">{item.company}</span>
            </h3>
          </div>
          <span className={`when ${isCurrent ? 'is-present' : ''}`}>
            {isCurrent && <span className="status-dot-pulse" aria-hidden="true" />}
            <ResponsiveTimelineDate date={item.when} />
          </span>
        </div>

        {/* Mobile Header: Company & Status on top, Role Title below */}
        <div className="tl-head-mobile">
          <div className="tl-meta-header">
            <div className="tl-company-badge">
              <span className="tl-company-icon">◈</span>
              <span className="tl-company">{item.companyAbbr || item.company}</span>
            </div>
            <span className={`when ${isCurrent ? 'is-present' : ''}`}>
              {isCurrent && <span className="status-dot-pulse" aria-hidden="true" />}
              <ResponsiveTimelineDate date={item.when} />
            </span>
          </div>
          <h3 className="tl-role-mobile">{item.role}</h3>
        </div>

        <div className="where">{item.where}</div>

        {/* Desktop view: full bullet list */}
        <ul className="tl-bullets tl-bullets-desktop">
          {item.bullets.map((b, idx) => (
            <li key={idx}>
              <span className="tl-bullet-icon">›</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Mobile view only: Frosted glass summary callout with accent beam */}
        <div
          className="tl-mobile-summary-wrapper"
          onClick={() => onOpenModal(item)}
          title="Click to view full details"
          role="button"
          tabIndex={0}
        >
          <p
            className="tl-mobile-summary"
            data-testid={`experience.timeline__summary__p-${index}`}
          >
            {item.summary || item.bullets[0]}
          </p>
        </div>

        {/* Skill stack (desktop / modal) */}
        <div className="tech-row">
          {item.stack.map((s) => (
            <span key={s} className="tech">
              {s}
            </span>
          ))}
        </div>

        {/* Mobile Action Footer Bar */}
        <div className="tl-mobile-footer">
          <div className="tl-mobile-count">
            <span className="count-icon">✦</span>
            <span>{item.bullets.length} Highlights</span>
          </div>

          <button
            type="button"
            className="tl-card-trigger-link"
            onClick={() => onOpenModal(item)}
            data-testid={`experience.timeline__details__btn-${index}`}
            aria-label={`View details for ${item.role} at ${item.company}`}
          >
            <span>View details</span>
            <span className="link-icon">↗</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const [selectedExperience, setSelectedExperience] = useState(null);

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

  const scrollPosRef = useRef(0);

  // Robust mobile & desktop background scroll lock with exact scroll position memory
  useEffect(() => {
    if (selectedExperience) {
      scrollPosRef.current = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else if (scrollPosRef.current > 0) {
      const targetY = scrollPosRef.current;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.scrollTo(0, targetY);
      scrollPosRef.current = 0;
    }
  }, [selectedExperience]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedExperience(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="experience" className="section" data-testid="experience__container__section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">
            <span className="dot" /> {experienceHeader.eyebrow}
          </span>
          <h2 className="section-title">
            Career <ScrambleText text={experienceHeader.titleAccent} className="accent" />
          </h2>
          <p className="section-sub">
            {experienceHeader.sub}
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
          </motion.div>

          {experience.map((e, i) => (
            <TimelineItem
              key={e.role + e.company}
              item={e}
              index={i}
              total={experience.length}
              scaleY={maxScaleY}
              onOpenModal={(item) => setSelectedExperience(item)}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Cosmic Dossier Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            className="exp-modal-backdrop"
            data-testid="experience.modal__backdrop__div"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              className="exp-modal-content"
              data-testid="experience.modal__dossier__dialog"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner HUD Telemetry Brackets */}
              <div className="hud-bracket tl" />
              <div className="hud-bracket tr" />
              <div className="hud-bracket bl" />
              <div className="hud-bracket br" />

              <button
                type="button"
                className="exp-modal-close"
                onClick={() => setSelectedExperience(null)}
                aria-label="Close dossier"
                data-testid="experience.modal__close__btn"
              >
                ✕
              </button>

              <div className="exp-modal-header">
                <h3 className="exp-modal-title">
                  <span className="tl-role">{selectedExperience.role}</span>
                  <span className="exp-modal-sep"> · </span>
                  <span className="tl-company">{selectedExperience.company}</span>
                </h3>
                <div className="exp-modal-meta">
                  <span className="when">{selectedExperience.when}</span>
                  <span className="where">{selectedExperience.where}</span>
                </div>
              </div>

              <div className="exp-modal-body">
                <div className="exp-modal-section-title">DETAILED RESPONSIBILITIES & IMPACT</div>
                <ul className="tl-bullets">
                  {selectedExperience.bullets.map((b, idx) => (
                    <li key={idx}>
                      <span className="tl-bullet-icon">›</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="exp-modal-footer">
                <div className="exp-modal-section-title">TECHNICAL STACK</div>
                <div className="tech-row">
                  {selectedExperience.stack.map((s) => (
                    <span key={s} className="tech">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

