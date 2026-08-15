import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { hangmanData } from '../../data/games.js';

const WORDS = hangmanData.words;
const ALPHABET = hangmanData.alphabet;
const MAX_WRONG = hangmanData.maxWrong;

function pick(prevWord) {
  let e = WORDS[Math.floor(Math.random() * WORDS.length)];
  if (WORDS.length > 1) {
    while (e.word === prevWord) e = WORDS[Math.floor(Math.random() * WORDS.length)];
  }
  return e;
}

function CosmicRadarModule({ wrong }) {
  const isCritical = wrong >= 4;
  const isDead = wrong >= MAX_WRONG;

  // Radar node positions (6 nodes for 6 lives)
  const nodeDegrees = [0, 60, 120, 180, 240, 300];

  return (
    <div className="hm-radar-wrapper">
      <svg viewBox="0 0 220 220" className="hm-svg cosmic-radar-svg">
        <defs>
          <radialGradient id="radarCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={isDead ? '#ef4444' : isCritical ? '#f59e0b' : '#38bdf8'} stopOpacity="0.45" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Outer Orbital Grid Rings */}
        <circle cx="110" cy="110" r="95" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="110" cy="110" r="70" fill="none" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="1.5" />
        <circle cx="110" cy="110" r="42" fill="none" stroke="rgba(192, 132, 252, 0.2)" strokeWidth="1.5" />

        {/* Sweeping Telemetry Radar Beam */}
        {!isDead && (
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
            style={{ transformOrigin: '110px 110px' }}
          >
            <line x1="110" y1="110" x2="110" y2="15" stroke="var(--primary-2)" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            <polygon points="110,110 110,15 145,25" fill="rgba(56, 189, 248, 0.12)" />
          </motion.g>
        )}

        {/* Central Space Probe Core */}
        <circle cx="110" cy="110" r="48" fill="url(#radarCoreGlow)" />
        <circle
          cx="110" cy="110" r="22"
          fill={isDead ? 'rgba(239, 68, 68, 0.25)' : 'rgba(15, 23, 42, 0.9)'}
          stroke={isDead ? '#ef4444' : isCritical ? '#f59e0b' : 'var(--primary)'}
          strokeWidth="2.5"
        />

        {/* Central Status Icon */}
        <text
          x="110" y="115"
          textAnchor="middle"
          fill={isDead ? '#ef4444' : isCritical ? '#f59e0b' : '#ffffff'}
          fontSize="14"
          fontWeight="bold"
          fontFamily="Space Grotesk, sans-serif"
        >
          {isDead ? '✕' : isCritical ? '⚠️' : '🛰️'}
        </text>

        {/* 6 Peripheral Energy Beacons (Disables one by one as wrong guesses occur) */}
        {nodeDegrees.map((deg, idx) => {
          const rad = (deg * Math.PI) / 180;
          const nx = 110 + 70 * Math.cos(rad);
          const ny = 110 + 70 * Math.sin(rad);
          const isNodeDisabled = idx < wrong;

          return (
            <g key={deg}>
              <line
                x1="110" y1="110" x2={nx} y2={ny}
                stroke={isNodeDisabled ? '#ef4444' : 'var(--primary-2)'}
                strokeWidth="1.5"
                opacity={isNodeDisabled ? 0.25 : 0.7}
                strokeDasharray={isNodeDisabled ? '2 2' : 'none'}
              />
              <circle
                cx={nx} cy={ny} r="8"
                fill={isNodeDisabled ? 'rgba(239, 68, 68, 0.2)' : 'color-mix(in srgb, var(--surface-strong) 90%, #000)'}
                stroke={isNodeDisabled ? '#ef4444' : 'var(--primary-2)'}
                strokeWidth="2"
              />
              <circle
                cx={nx} cy={ny} r="3"
                fill={isNodeDisabled ? '#ef4444' : 'var(--primary-2)'}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

export default function CosmicCipher({ best, onBest, onToast }) {
  const [entry, setEntry] = useState(() => pick());
  const word = entry.word;
  const [picked, setPicked] = useState(new Set());
  const [streak, setStreak] = useState(0);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing' | 'won' | 'lost'

  const wrong = useMemo(
    () => [...picked].filter((l) => !word.includes(l)).length,
    [picked, word]
  );
  const masked = useMemo(
    () => word.split('').map((c) => (picked.has(c) ? c : '_')),
    [word, picked]
  );

  const isWon = useMemo(
    () => masked.length > 0 && masked.every((c) => c !== '_'),
    [masked]
  );
  const isLost = wrong >= MAX_WRONG;

  useEffect(() => {
    if (gameStatus === 'playing') {
      if (isWon) {
        setGameStatus('won');
        setStreak((s) => {
          const next = s + 1;
          onBest?.(next);
          return next;
        });
        onToast?.(hangmanData.messages.winToast);
      } else if (isLost) {
        setGameStatus('lost');
        setStreak(0);
        onToast?.(hangmanData.messages.loseToast(word));
      }
    }
  }, [isWon, isLost, gameStatus, word, onBest, onToast]);

  useEffect(() => {
    const onKey = (e) => {
      if (gameStatus !== 'playing') return;
      const k = e.key.toUpperCase();
      if (/^[A-Z]$/.test(k) && !picked.has(k)) {
        setPicked((p) => new Set([...p, k]));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [gameStatus, picked]);

  const guess = (l) => {
    if (gameStatus !== 'playing' || picked.has(l)) return;
    setPicked((p) => new Set([...p, l]));
  };

  const next = () => {
    setEntry(pick(word));
    setPicked(new Set());
    setGameStatus('playing');
  };

  return (
    <div className="game hm">
      <div className="hm-stage">
        <CosmicRadarModule wrong={wrong} />
        <div className="hm-side">
          <div className="hm-meta">
            <span>
              ❤️ <b>{Math.max(0, MAX_WRONG - wrong)}</b> lives left
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

      <div className="hm-keyboard-qwerty">
        {KEYBOARD_ROWS.map((row, rIdx) => (
          <div key={rIdx} className="hm-keyboard-row">
            {row.map((l) => {
              const used = picked.has(l);
              const inWord = word.includes(l);
              return (
                <button
                  key={l}
                  className={`hm-key ${used ? (inWord ? 'good' : 'bad') : ''}`}
                  onClick={() => guess(l)}
                  disabled={used || gameStatus !== 'playing'}
                >
                  {l}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {gameStatus !== 'playing' && (
          <motion.div
            className={`hm-result ${gameStatus === 'won' ? 'good' : 'bad'}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {gameStatus === 'won'
              ? hangmanData.messages.winResult(streak)
              : hangmanData.messages.loseResult(word)}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="game-actions">
        <button className="btn btn-primary" onClick={next}>
          {gameStatus !== 'playing' ? '▶️ Next word' : '🎲 New word'}
        </button>
        {best != null && <span className="best-pill">🏆 Best streak: {best}</span>}
      </div>
    </div>
  );
}
