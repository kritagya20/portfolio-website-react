import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { projects, githubProfileUrl, projectsHeader } from '../data/portfolio.js';
import { GithubSvg } from '../icon_jsx';
import ScrambleText from './ScrambleText.jsx';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - 1);

  const prev = () => {
    setCurrentIndex((c) => Math.max(0, c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => Math.min(maxIndex, c + 1));
  };

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') {
        prev();
      } else if (e.key === 'ArrowRight') {
        next();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [maxIndex]);

  // Listen for direct satellite tag navigation events
  useEffect(() => {
    const handleSelectSlide = (e) => {
      const targetIdx = e.detail?.index;
      if (typeof targetIdx === 'number') {
        const maxIdx = Math.max(0, projects.length - 1);
        setCurrentIndex(Math.min(targetIdx, maxIdx));
      }

      // Calculate scroll position to place project carousel in vertical center of viewport
      requestAnimationFrame(() => {
        const container = document.querySelector('.projects-carousel-container');
        if (container) {
          const rect = container.getBoundingClientRect();
          const elementCenterY = window.scrollY + rect.top + (rect.height / 2);
          const viewportCenterY = window.innerHeight / 2;
          const targetScrollTop = Math.max(0, elementCenterY - viewportCenterY);

          window.scrollTo({
            top: targetScrollTop,
            behavior: 'auto',
          });
        }
      });
    };

    window.addEventListener('selectProjectSlide', handleSelectSlide);
    return () => window.removeEventListener('selectProjectSlide', handleSelectSlide);
  }, []);

  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

  const handleTouchStart = (e) => {
    touchStartRef.current = e.targetTouches[0].clientX;
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    const distance = touchStartRef.current - touchEndRef.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      prev();
    }
  };

  // 3D Orbital Perspective transform calculation
  const getCardTransform = (idx) => {
    const offset = idx - currentIndex;
    const absOffset = Math.abs(offset);
    const isMobile = viewportWidth < 640;
    const isTablet = viewportWidth >= 640 && viewportWidth < 1024;

    if (offset === 0) {
      return {
        x: '0px',
        y: '0px',
        z: 40,
        rotateY: 0,
        scale: 1,
        opacity: 1,
        zIndex: 30,
        pointerEvents: 'auto',
      };
    }

    if (isMobile) {
      if (absOffset === 1) {
        return {
          x: offset > 0 ? '70%' : '-70%',
          y: '6px',
          z: -50,
          rotateY: offset > 0 ? -14 : 14,
          scale: 0.85,
          opacity: 0.45,
          zIndex: 20,
          pointerEvents: 'auto',
        };
      }
      return {
        x: offset > 0 ? '110%' : '-110%',
        y: '12px',
        z: -120,
        rotateY: offset > 0 ? -22 : 22,
        scale: 0.72,
        opacity: 0,
        zIndex: 10 - absOffset,
        pointerEvents: 'none',
      };
    }

    if (isTablet) {
      if (absOffset === 1) {
        return {
          x: offset > 0 ? '220px' : '-220px',
          y: '6px',
          z: -70,
          rotateY: offset > 0 ? -16 : 16,
          scale: 0.86,
          opacity: 0.65,
          zIndex: 20,
          pointerEvents: 'auto',
        };
      }
      return {
        x: offset > 0 ? '420px' : '-420px',
        y: '14px',
        z: -180,
        rotateY: offset > 0 ? -26 : 26,
        scale: 0.74,
        opacity: 0,
        zIndex: 10 - absOffset,
        pointerEvents: 'none',
      };
    }

    // Desktop (>= 1024px)
    if (absOffset === 1) {
      return {
        x: offset > 0 ? '290px' : '-290px',
        y: '6px',
        z: -70,
        rotateY: offset > 0 ? -18 : 18,
        scale: 0.88,
        opacity: 0.72,
        zIndex: 20,
        pointerEvents: 'auto',
      };
    }

    if (absOffset === 2) {
      return {
        x: offset > 0 ? '520px' : '-520px',
        y: '14px',
        z: -180,
        rotateY: offset > 0 ? -26 : 26,
        scale: 0.75,
        opacity: 0.35,
        zIndex: 10,
        pointerEvents: 'auto',
      };
    }

    return {
      x: offset > 0 ? '700px' : '-700px',
      y: '22px',
      z: -280,
      rotateY: offset > 0 ? -36 : 36,
      scale: 0.65,
      opacity: 0,
      zIndex: 5,
      pointerEvents: 'none',
    };
  };

  return (
    <section id="projects" className="section" data-testid="projects__container__section">
      <div className="container">
        <div className="projects-header-row">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="eyebrow">
              <span className="dot" /> {projectsHeader.eyebrow}
            </span>
            <h2 className="section-title">
              Featured <ScrambleText text={projectsHeader.titleAccent} className="accent" />
            </h2>
          </motion.div>
        </div>

        {/* 3D Orbital Perspective Stage */}
        <div
          className="projects-carousel-container orbital-deck-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="orbital-deck-stage">
            {projects.map((p, idx) => {
              const isSelected = idx === currentIndex;
              const cardAnim = getCardTransform(idx);
              const isInternal = p.type === 'Internal' || (!p.links?.code && !p.links?.live);

              return (
                <motion.div
                  key={p.title}
                  className={`orbital-card-frame ${isSelected ? 'active-frame' : 'inactive-frame'}`}
                  data-testid={`projects.carousel__card-item__${idx}`}
                  animate={{
                    x: cardAnim.x,
                    y: cardAnim.y,
                    z: cardAnim.z,
                    rotateY: cardAnim.rotateY,
                    scale: cardAnim.scale,
                    opacity: cardAnim.opacity,
                    zIndex: cardAnim.zIndex,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 28,
                    mass: 0.85,
                  }}
                  onClick={() => {
                    if (!isSelected) setCurrentIndex(idx);
                  }}
                  onTouchEnd={(e) => {
                    const dist = Math.abs(touchStartRef.current - touchEndRef.current);
                    if (dist < 15 && !isSelected) {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }
                  }}
                  style={{
                    pointerEvents: cardAnim.pointerEvents,
                    cursor: isSelected ? 'default' : 'pointer',
                  }}
                >
                  <article className="card project">
                    <div className="card-nebula-glow" aria-hidden="true" />

                    <div className="project-content-lead">
                      <div className="tag-row">
                        <span className="badge badge-type" title={p.type}>{p.type}</span>
                      </div>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                    </div>

                    <div className="tech-row">
                      {p.tech.map((t) => (
                        <span key={t} className="tech">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="actions">
                      {p.links?.code && (
                        <a
                          className="icon-btn"
                          href={p.links.code}
                          target="_blank"
                          rel="noreferrer"
                          data-testid={`projects.card__code__link-${idx}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GithubSvg className="icon" />
                          Code
                        </a>
                      )}
                      {p.links?.live && (
                        <a
                          className="icon-btn"
                          href={p.links.live}
                          target="_blank"
                          rel="noreferrer"
                          data-testid={`projects.card__live__link-${idx}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          ↗ Live
                        </a>
                      )}
                      {isInternal && (
                        <span
                          className="icon-btn"
                          style={{ opacity: 0.7, cursor: 'default' }}
                          title="Built inside an organization — source not publicly available"
                          data-testid={`projects.card__internal__badge-${idx}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          🔒 Internal Project
                        </span>
                      )}
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Sleek Orbital Telemetry Dock (Numbers in center between side button icons) */}
        <div className="orbital-telemetry-dock">
          <button
            className="orbital-nav-circle-btn"
            onClick={prev}
            disabled={currentIndex === 0}
            aria-label="Previous project"
            data-testid="projects.carousel__prev__btn"
          >
            <svg viewBox="0 0 24 24" className="nav-chevron-svg">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="orbital-counter-pill" aria-label={`Project ${currentIndex + 1} of ${projects.length}`}>
            <span className="orbital-counter-current">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="orbital-counter-divider">/</span>
            <span className="orbital-counter-total">{String(projects.length).padStart(2, '0')}</span>
          </div>

          <button
            className="orbital-nav-circle-btn"
            onClick={next}
            disabled={currentIndex >= maxIndex}
            aria-label="Next project"
            data-testid="projects.carousel__next__btn"
          >
            <svg viewBox="0 0 24 24" className="nav-chevron-svg">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            className="btn btn-primary"
            href={githubProfileUrl}
            target="_blank"
            rel="noreferrer"
            data-testid="projects.cta__github__link"
          >
            <GithubSvg className="icon" />
            View all repos on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
