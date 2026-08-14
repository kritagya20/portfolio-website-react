import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects, githubProfileUrl, projectsHeader } from '../data/portfolio.js';
import { GithubSvg } from '../icon_jsx';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive visible count tracking (3 on desktop, 2 on tablet, 1 on mobile)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - visibleCount);

  // Ensure index stays valid when screen size changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, maxIndex, currentIndex]);

  const prev = () => {
    setCurrentIndex((c) => Math.max(0, c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => Math.min(maxIndex, c + 1));
  };

  return (
    <section id="projects" className="section">
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
              Featured <span className="accent">{projectsHeader.titleAccent}</span>
            </h2>
            <p className="section-sub">
              {projectsHeader.sub}
            </p>
          </motion.div>

          {/* Carousel Navigation Buttons & Counter */}
          {projects.length > visibleCount && (
            <div className="carousel-nav">
              <span className="carousel-counter">
                {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <button
                className="carousel-btn"
                onClick={prev}
                disabled={currentIndex === 0}
                aria-label="Previous project"
              >
                <svg viewBox="0 0 24 24" className="carousel-nav-svg">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                className="carousel-btn"
                onClick={next}
                disabled={currentIndex >= maxIndex}
                aria-label="Next project"
              >
                <svg viewBox="0 0 24 24" className="carousel-nav-svg">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Carousel Viewport Container */}
        <div className="projects-carousel-container">
          <div
            className="projects-carousel-track"
            style={{
              transform: `translateX(calc(-${currentIndex} * ((100% + 20px) / ${visibleCount})))`,
            }}
          >
            {projects.map((p) => {
              const isInternal = p.type === 'Internal' || (!p.links?.code && !p.links?.live);
              return (
                <div
                  key={p.title}
                  className="projects-carousel-slide"
                  style={{
                    flex: `0 0 calc((100% - ${(visibleCount - 1) * 20}px) / ${visibleCount})`,
                  }}
                >
                  <article className="card project">
                    <div className="card-nebula-glow" aria-hidden="true" />
                    <div className="hud-scanline" aria-hidden="true" />

                    {/* Corner HUD Telemetry Brackets */}
                    <span className="hud-bracket tl" aria-hidden="true" />
                    <span className="hud-bracket tr" aria-hidden="true" />
                    <span className="hud-bracket bl" aria-hidden="true" />
                    <span className="hud-bracket br" aria-hidden="true" />

                    {/* Stardust Sparkles */}
                    <div className="card-sparkles" aria-hidden="true">
                      <span className="card-sparkle s1" />
                      <span className="card-sparkle s2" />
                      <span className="card-sparkle s3" />
                    </div>

                    <div className="tag-row">
                      <span className="badge">{p.type}</span>
                      <div style={{ display: 'flex', gap: 6 }}>
                        {p.featured && <span className="badge">Featured</span>}
                        {isInternal && (
                          <span
                            className="badge"
                            style={{
                              background: 'color-mix(in srgb, #94a3b8 18%, transparent)',
                              color: '#94a3b8',
                            }}
                          >
                            Private
                          </span>
                        )}
                      </div>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
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
                        >
                          ↗ Live
                        </a>
                      )}
                      {isInternal && (
                        <span
                          className="icon-btn"
                          style={{ opacity: 0.7, cursor: 'default' }}
                          title="Built inside an organization — source not publicly available"
                        >
                          🔒 Internal Project
                        </span>
                      )}
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Pagination Dots */}
        {projects.length > visibleCount && (
          <div className="carousel-dots">
            {projects.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(Math.min(idx, maxIndex))}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        )}

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
          >
            <GithubSvg className="icon" />
            View all repos on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
