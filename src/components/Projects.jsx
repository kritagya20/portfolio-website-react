import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, githubProfileUrl } from '../data/portfolio.js';
import { GithubSvg } from '../icon_jsx';

const FILTERS = ['All', 'Featured', 'Internal', 'Full Stack', 'Web App'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const list = useMemo(() => {
    if (filter === 'All') return projects;
    if (filter === 'Featured') return projects.filter((p) => p.featured);
    return projects.filter((p) => p.type === filter);
  }, [filter]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">
            <span className="dot" /> Selected work
          </span>
          <h2 className="section-title">
            Recent <span className="accent">Projects</span>
          </h2>
          <p className="section-sub">
            A showcase of applications I've built, tested, automated, and continuously improved.
          </p>
        </motion.div>

        <motion.div
          className="skills-tabs"
          style={{ marginBottom: 28 }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`skill-tab ${f === filter ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => {
              const isInternal = p.type === 'Internal' || (!p.links?.code && !p.links?.live);
              return (
                <motion.article
                  layout
                  key={p.title}
                  className="card project"
                  initial={{ opacity: 0, y: 40, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{
                    duration: 0.6,
                    delay: (i % 3) * 0.1,
                    ease: [0.175, 0.885, 0.32, 1.275],
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="tag-row">
                    <span className="badge">{p.type}</span>
                    <div style={{ display: 'flex', gap: 6 }}>
                      {p.featured && <span className="badge"> Featured</span>}
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
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

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
