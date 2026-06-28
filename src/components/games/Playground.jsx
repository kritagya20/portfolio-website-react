import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PerfectCircle from './PerfectCircle.jsx';
import TypingTest from './TypingTest.jsx';
import MemorySequence from './MemorySequence.jsx';
import BugHunter from './BugHunter.jsx';
import MemoryMatch from './MemoryMatch.jsx';
import Hangman from './Hangman.jsx';

const BEST_KEY = 'ys-portfolio-game-best-v1';

export const GAMES = [
  {
    id: 'circle',
    name: 'Perfect Circle',
    tag: 'Reflex',
    icon: '◯',
    color: '#7c5cff',
    desc: 'Draw a circle in one go. Score is how round it actually was.',
    Component: PerfectCircle,
    bestLabel: (v) => `Best: ${v}%`,
    bestIsHigher: true,
  },
  {
    id: 'typing',
    name: 'Code Typing',
    tag: 'Skill',
    icon: '⌨',
    color: '#22d3ee',
    desc: 'Type a real code snippet. We measure WPM and accuracy.',
    Component: TypingTest,
    bestLabel: (v) => `Best: ${v} WPM`,
    bestIsHigher: true,
  },
  {
    id: 'sequence',
    name: 'Memory Sequence',
    tag: 'Memory',
    icon: '🎵',
    color: '#22c55e',
    desc: 'Watch the lights, repeat the pattern. Each round adds one step.',
    Component: MemorySequence,
    bestLabel: (v) => `Round ${v}`,
    bestIsHigher: true,
  },
  {
    id: 'bug',
    name: 'Bug Hunter',
    tag: 'Logic',
    icon: '🐛',
    color: '#f59e0b',
    desc: 'Spot the buggy line in real code. 5 puzzles, no hints.',
    Component: BugHunter,
    bestLabel: (v) => `Best: ${v}/5`,
    bestIsHigher: true,
  },
  {
    id: 'memory',
    name: 'Stack Match',
    tag: 'Memory',
    icon: '🧠',
    color: '#ec4899',
    desc: 'Flip cards to match tech-stack pairs. Fewer moves = better.',
    Component: MemoryMatch,
    bestLabel: (v) => `Best: ${v} moves`,
    bestIsHigher: false,
  },
  {
    id: 'hangman',
    name: 'Tech Hangman',
    tag: 'Word',
    icon: '🎯',
    color: '#fb7185',
    desc: 'Guess the tech word before the doodle finishes.',
    Component: Hangman,
    bestLabel: (v) => `Win streak: ${v}`,
    bestIsHigher: true,
  },
];

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
          <span className="dot" /> Have a minute?
        </span>
        <h2 className="section-title">
          Mini <span className="accent">Playground</span>
        </h2>
        <p className="section-sub">
          Six small dev-flavored games — built in React, no backend, your best scores stay
          on this device.
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
                <active.Component
                  best={bests[active.id]}
                  onBest={(v) => recordBest(active.id, v)}
                  onToast={onToast}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
