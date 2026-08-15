import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { memoryMatchData } from '../../data/games.js';

function selectMixedPairs(numPairs = 12) {
  const tech = memoryMatchData.techPairs || memoryMatchData.pairs || [];
  const space = memoryMatchData.spacePairs || [];

  const shuffleArray = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const shuffledTech = shuffleArray(tech);
  const shuffledSpace = shuffleArray(space);

  // Mix 7 tech stack pairs and 5 cosmic exploration space pairs
  const chosenTech = shuffledTech.slice(0, 7);
  const chosenSpace = shuffledSpace.slice(0, Math.max(0, numPairs - chosenTech.length));
  
  const combined = shuffleArray([...chosenTech, ...chosenSpace]);
  return combined.slice(0, numPairs);
}

function buildGameData() {
  const activePairs = selectMixedPairs(12);
  const deck = [...activePairs, ...activePairs].map((p, i) => ({
    key: i + '-' + p.id,
    pair: p,
  }));
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return { deck, activePairs };
}

export default function MemoryMatch({ best, onBest, onToast }) {
  const [{ deck, activePairs }, setGameState] = useState(() => buildGameData());
  const [open, setOpen] = useState([]);
  const [matched, setMatched] = useState(new Set());
  const [moves, setMoves] = useState(0);
  const [lock, setLock] = useState(false);

  const totalPairs = activePairs.length;
  const won = matched.size > 0 && matched.size === totalPairs * 2;

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
    setGameState(buildGameData());
    setOpen([]);
    setMatched(new Set());
    setMoves(0);
    setLock(false);
  };

  return (
    <div className="game mm">
      <div className="mm-head">
        <p className="game-intro" style={{ margin: 0 }}>
          {memoryMatchData.gameIntro}
        </p>
        <div className="mm-stats">
          <span><b>{moves}</b> moves</span>
          <span><b>{matched.size / 2}</b>/{totalPairs} pairs</span>
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
