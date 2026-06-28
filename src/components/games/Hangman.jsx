import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = [
  { word: 'JAVASCRIPT',     hint: 'The language of the web' },
  { word: 'REACT',          hint: "Meta's component-based UI library" },
  { word: 'MICROSERVICES',  hint: 'Architecture made of many small services' },
  { word: 'KUBERNETES',     hint: 'Container orchestration platform' },
  { word: 'DEVELOPER',      hint: 'Person who writes code for a living' },
  { word: 'ALGORITHM',      hint: 'Step-by-step problem-solving recipe' },
  { word: 'DATABASE',       hint: 'Where structured data lives' },
  { word: 'FUNCTION',       hint: 'A reusable block of code' },
  { word: 'COMPONENT',      hint: 'A reusable UI building block' },
  { word: 'DEPLOYMENT',     hint: 'Releasing code to production' },
  { word: 'AZURE',          hint: "Microsoft's cloud platform" },
  { word: 'FRONTEND',       hint: 'The part of an app the user sees' },
  { word: 'BACKEND',        hint: 'Server-side logic and data' },
  { word: 'DEBUGGING',      hint: 'Finding and fixing problems in code' },
  { word: 'REPOSITORY',     hint: 'A versioned project folder (Git)' },
  { word: 'FRAMEWORK',      hint: 'Skeleton library you build apps on' },
  { word: 'CONTAINER',      hint: 'Lightweight isolated runtime (e.g. Docker)' },
  { word: 'PIPELINE',       hint: 'Automated build / deploy flow' },
  { word: 'INTEGRATION',    hint: 'Connecting two systems together' },
  { word: 'AUTHENTICATION', hint: 'Verifying who you are' },
];

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const MAX_WRONG = 6;

function pick(prevWord) {
  let e = WORDS[Math.floor(Math.random() * WORDS.length)];
  if (WORDS.length > 1) {
    while (e.word === prevWord) e = WORDS[Math.floor(Math.random() * WORDS.length)];
  }
  return e;
}

function HangmanFigure({ wrong }) {
  const stroke = 'var(--text)';
  return (
    <svg viewBox="0 0 200 220" className="hm-svg">
      {/* Gallows */}
      <line x1="20" y1="210" x2="180" y2="210" stroke={stroke} strokeWidth="4" />
      <line x1="50" y1="210" x2="50" y2="20" stroke={stroke} strokeWidth="4" />
      <line x1="50" y1="20" x2="130" y2="20" stroke={stroke} strokeWidth="4" />
      <line x1="130" y1="20" x2="130" y2="40" stroke={stroke} strokeWidth="4" />
      {/* Head */}
      <AnimatePresence>
        {wrong >= 1 && (
          <motion.circle
            key="head" cx="130" cy="60" r="20" fill="none"
            stroke="var(--primary-2)" strokeWidth="4"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }}
          />
        )}
        {wrong >= 2 && (
          <motion.line key="body" x1="130" y1="80" x2="130" y2="140" stroke="var(--primary-2)" strokeWidth="4"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4 }} />
        )}
        {wrong >= 3 && (
          <motion.line key="arm1" x1="130" y1="100" x2="105" y2="120" stroke="var(--primary-2)" strokeWidth="4"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3 }} />
        )}
        {wrong >= 4 && (
          <motion.line key="arm2" x1="130" y1="100" x2="155" y2="120" stroke="var(--primary-2)" strokeWidth="4"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3 }} />
        )}
        {wrong >= 5 && (
          <motion.line key="leg1" x1="130" y1="140" x2="110" y2="175" stroke="var(--primary-2)" strokeWidth="4"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3 }} />
        )}
        {wrong >= 6 && (
          <motion.line key="leg2" x1="130" y1="140" x2="150" y2="175" stroke="#ef4444" strokeWidth="4"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3 }} />
        )}
      </AnimatePresence>
    </svg>
  );
}

export default function Hangman({ best, onBest, onToast }) {
  const [entry, setEntry] = useState(() => pick());
  const word = entry.word;
  const [picked, setPicked] = useState(new Set());
  const [streak, setStreak] = useState(0);
  const [ended, setEnded] = useState(false);

  const wrong = useMemo(
    () => [...picked].filter((l) => !word.includes(l)).length,
    [picked, word]
  );
  const masked = useMemo(
    () => word.split('').map((c) => (picked.has(c) ? c : '_')),
    [word, picked]
  );
  const won = !ended && masked.every((c) => c !== '_');
  const lost = !ended && wrong >= MAX_WRONG;

  useEffect(() => {
    if (won && !ended) {
      setEnded(true);
      setStreak((s) => {
        const next = s + 1;
        onBest?.(next);
        return next;
      });
      onToast?.(`🎉 You saved them!`);
    } else if (lost && !ended) {
      setEnded(true);
      setStreak(0);
      onToast?.(`💀 The word was ${word}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [won, lost]);

  useEffect(() => {
    const onKey = (e) => {
      if (ended) return;
      const k = e.key.toUpperCase();
      if (/^[A-Z]$/.test(k) && !picked.has(k)) {
        setPicked((p) => new Set([...p, k]));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [ended, picked]);

  const guess = (l) => {
    if (ended || picked.has(l)) return;
    setPicked((p) => new Set([...p, l]));
  };

  const next = () => {
    setEntry(pick(word));
    setPicked(new Set());
    setEnded(false);
  };

  return (
    <div className="game hm">
      <div className="hm-stage">
        <HangmanFigure wrong={wrong} />
        <div className="hm-side">
          <div className="hm-meta">
            <span>
              ❤️ <b>{MAX_WRONG - wrong}</b> lives left
            </span>
            <span>
              🔥 Streak: <b>{streak}</b>
            </span>
          </div>
          <div className="hm-hint">
            <span className="hm-hint-tag">💡 Hint</span>
            <span className="hm-hint-text">{entry.hint}</span>
          </div>
          <div className="hm-word" aria-label="word to guess">
            {masked.map((c, i) => (
              <motion.span
                key={i}
                className={`hm-letter ${c !== '_' ? 'shown' : ''}`}
                initial={false}
                animate={c !== '_' ? { y: [0, -6, 0] } : {}}
                transition={{ duration: 0.25 }}
              >
                {c === '_' ? '\u00A0' : c}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <div className="hm-keys">
        {ALPHABET.split('').map((l) => {
          const used = picked.has(l);
          const inWord = word.includes(l);
          return (
            <button
              key={l}
              className={`hm-key ${used ? (inWord ? 'good' : 'bad') : ''}`}
              onClick={() => guess(l)}
              disabled={used || ended}
            >
              {l}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {ended && (
          <motion.div
            className={`hm-result ${won ? 'good' : 'bad'}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {won ? `🎉 You got it! Streak: ${streak}` : `💀 The word was "${word}"`}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="game-actions">
        <button className="btn btn-primary" onClick={next}>
          {ended ? '▶️ Next word' : '🎲 New word'}
        </button>
        {best != null && <span className="best-pill">🏆 Best streak: {best}</span>}
      </div>
    </div>
  );
}
