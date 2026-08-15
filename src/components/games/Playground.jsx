import { useEffect, useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playgroundHeader, gamesData } from '../../data/games.js';

const PerfectCircle = lazy(() => import('./PerfectCircle.jsx'));
const TypingTest = lazy(() => import('./TypingTest.jsx'));
const MemorySequence = lazy(() => import('./MemorySequence.jsx'));
const BugHunter = lazy(() => import('./BugHunter.jsx'));
const MemoryMatch = lazy(() => import('./MemoryMatch.jsx'));
const Hangman = lazy(() => import('./Hangman.jsx'));

const BEST_KEY = 'kritagya-portfolio-game-best-v1';

const COMPONENT_MAP = {
  circle: PerfectCircle,
  typing: TypingTest,
  sequence: MemorySequence,
  bug: BugHunter,
  memory: MemoryMatch,
  hangman: Hangman,
};

const BEST_LABEL_MAP = {
  circle: (v) => `Best: ${v}%`,
  typing: (v) => `Best: ${v} WPM`,
  sequence: (v) => `Round ${v}`,
  bug: (v) => `Best: ${v}/5`,
  memory: (v) => `Best: ${v} moves`,
  hangman: (v) => `Win streak: ${v}`,
};

export const GAMES = gamesData.map((g) => ({
  ...g,
  Component: COMPONENT_MAP[g.id],
  bestLabel: BEST_LABEL_MAP[g.id],
}));

function loadBests() {
  try {
    return JSON.parse(localStorage.getItem(BEST_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveBests(b) {
  localStorage.setItem(BEST_KEY, JSON.stringify(b));
}

export default function Playground({ onToast }) {
  const [bests, setBests] = useState(() => loadBests());
  const [activeId, setActiveId] = useState(null);

  useEffect(() => saveBests(bests), [bests]);

  useEffect(() => {
    if (activeId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeId]);

  const recordBest = (gameId, value) => {
    const game = GAMES.find((g) => g.id === gameId);
    if (!game) return;
    setBests((prev) => {
      const cur = prev[gameId];
      if (cur == null) return { ...prev, [gameId]: value };
      const better = game.bestIsHigher ? value > cur : value < cur;
      if (!better) return prev;
      onToast?.(`🏆 New best on ${game.name}!`);
      return { ...prev, [gameId]: value };
    });
  };

  const active = GAMES.find((g) => g.id === activeId) || null;

  return (
    <section id="playground" className="section">
      <div className="container">
        <span className="eyebrow">
          <span className="dot" /> {playgroundHeader.eyebrow}
        </span>
        <h2 className="section-title">
          {playgroundHeader.title.split(' ')[0]} <span className="accent">{playgroundHeader.titleAccent}</span>
        </h2>
        <p className="section-sub">
          {playgroundHeader.sub}
        </p>

        <div className="game-grid">
          {GAMES.map((g, i) => (
            <motion.button
              key={g.id}
              type="button"
              className="game-tile"
              style={{ '--g-color': g.color }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveId(g.id)}
            >
              <div className="game-tile-icon" aria-hidden>
                {g.icon}
              </div>
              <div className="game-tile-body">
                <div className="game-tile-row">
                  <h3>{g.name}</h3>
                  <span className="game-tag">{g.tag}</span>
                </div>
                <p>{g.desc}</p>
                <div className="game-tile-foot">
                  <span className="game-best">
                    {bests[g.id] != null ? `🏆 ${g.bestLabel(bests[g.id])}` : '✨ Try it'}
                  </span>
                  <span className="game-play">Play →</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="game-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveId(null);
            }}
          >
            <motion.div
              className="game-modal"
              initial={{ y: 30, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 30, scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ '--g-color': active.color }}
            >
              <header className="game-modal-head">
                <div>
                  <span className="game-tile-icon small" aria-hidden>
                    {active.icon}
                  </span>
                  <div>
                    <h3>{active.name}</h3>
                    <span className="game-tag">{active.tag}</span>
                  </div>
                </div>
                <button
                  className="game-close"
                  onClick={() => setActiveId(null)}
                  aria-label="Close game"
                >
                  ✕
                </button>
              </header>

              <div className="game-modal-body">
                <Suspense
                  fallback={
                    <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--primary-2)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>
                      {playgroundHeader.fallbackLoadingText}
                    </div>
                  }
                >
                  <active.Component
                    best={bests[active.id]}
                    onBest={(v) => recordBest(active.id, v)}
                    onToast={onToast}
                  />
                </Suspense>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

