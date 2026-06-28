import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PAIRS = [
  { id: 'react',   label: 'React',  emoji: '⚛️',  color: '#22d3ee' },
  { id: 'node',    label: 'Node',   emoji: '🟢',  color: '#22c55e' },
  { id: 'csharp',  label: 'C#',     emoji: '🎯',  color: '#a855f7' },
  { id: 'azure',   label: 'Azure',  emoji: '☁️',  color: '#3b82f6' },
  { id: 'mysql',   label: 'MySQL',  emoji: '🐬',  color: '#0891b2' },
  { id: 'dotnet',  label: '.NET',   emoji: '🟣',  color: '#7c5cff' },
  { id: 'java',    label: 'Java',   emoji: '☕',  color: '#f59e0b' },
  { id: 'git',     label: 'Git',    emoji: '🌿',  color: '#ec4899' },
];

function buildDeck() {
  const deck = [...PAIRS, ...PAIRS].map((p, i) => ({
    key: i + '-' + p.id,
    pair: p,
  }));
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export default function MemoryMatch({ best, onBest, onToast }) {
  const [deck, setDeck] = useState(() => buildDeck());
  const [open, setOpen] = useState([]);
  const [matched, setMatched] = useState(new Set());
  const [moves, setMoves] = useState(0);
  const [lock, setLock] = useState(false);

  const won = matched.size === PAIRS.length * 2;

  useEffect(() => {
    if (open.length !== 2) return;
    setLock(true);
    const [a, b] = open;
    const ca = deck.find((c) => c.key === a);
    const cb = deck.find((c) => c.key === b);
    setMoves((m) => m + 1);
    if (ca.pair.id === cb.pair.id) {
      setTimeout(() => {
        setMatched((s) => new Set([...s, a, b]));
        setOpen([]);
        setLock(false);
      }, 350);
    } else {
      setTimeout(() => {
        setOpen([]);
        setLock(false);
      }, 800);
    }
  }, [open, deck]);

  useEffect(() => {
    if (won) {
      onBest?.(moves);
      onToast?.(`🎉 Cleared in ${moves} moves`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [won]);

  const flip = (key) => {
    if (lock) return;
    if (open.includes(key)) return;
    if (matched.has(key)) return;
    if (open.length >= 2) return;
    setOpen((o) => [...o, key]);
  };

  const reset = () => {
    setDeck(buildDeck());
    setOpen([]);
    setMatched(new Set());
    setMoves(0);
    setLock(false);
  };

  return (
    <div className="game mm">
      <div className="mm-head">
        <p className="game-intro" style={{ margin: 0 }}>
          Flip two cards. Match all 8 pairs in the fewest moves.
        </p>
        <div className="mm-stats">
          <span><b>{moves}</b> moves</span>
          <span><b>{matched.size / 2}</b>/{PAIRS.length} pairs</span>
        </div>
      </div>

      <div className="mm-grid">
        {deck.map((c) => {
          const isOpen = open.includes(c.key) || matched.has(c.key);
          const isMatched = matched.has(c.key);
          return (
            <button
              key={c.key}
              type="button"
              className={`mm-card ${isOpen ? 'open' : ''} ${isMatched ? 'matched' : ''}`}
              onClick={() => flip(c.key)}
              aria-label={isOpen ? c.pair.label : 'Hidden card'}
            >
              <div className="mm-inner">
                <div className="mm-face mm-back">?</div>
                <div
                  className="mm-face mm-front"
                  style={{ borderColor: c.pair.color, color: c.pair.color }}
                >
                  <span className="mm-emoji">{c.pair.emoji}</span>
                  <span className="mm-label">{c.pair.label}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {won && (
          <motion.div
            className="mm-final"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            🎉 Cleared in <b>{moves}</b> moves
          </motion.div>
        )}
      </AnimatePresence>

      <div className="game-actions">
        <button className="btn" onClick={reset}>
          🔄 Shuffle &amp; restart
        </button>
        {best != null && <span className="best-pill">🏆 Best: {best} moves</span>}
      </div>
    </div>
  );
}
