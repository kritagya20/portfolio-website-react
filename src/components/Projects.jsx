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

  const total = projects.length;
  const openSource = projects.filter((p) => p.links?.code).length;

  return (
    <section id="projects" className="section">
      <div className="container">
        <span className="eyebrow">
          <span className="dot" /> Selected work
        </span>
        <h2 className="section-title">
          Recent <span className="accent">Projects</span>
        </h2>
        <p className="section-sub">
          A showcase of applications I've built, tested, automated, and continuously improved.
        </p>

        <div className="skills-tabs" style={{ marginBottom: 28 }}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`skill-tab ${f === filter ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {list.map((p, i) => {
              const isInternal = p.type === 'Internal' || (!p.links?.code && !p.links?.live);
              return (
                <motion.article
                  layout
                  key={p.title}
                  className="card project"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{ y: -6 }}
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
                       <GithubSvg className='icon ' />
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

        <div className="projects-cta">
          <a
            className="btn btn-primary"
            href={githubProfileUrl}
            target="_blank"
            rel="noreferrer"
          >
           <GithubSvg className='icon ' />
           View all repos on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
