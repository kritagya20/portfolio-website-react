import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { bugHunterData } from '../../data/games.js';

const PUZZLES = bugHunterData.puzzles;

export default function BugHunter({ best, onBest }) {
  const [order] = useState(() => shuffle(PUZZLES.map((_, i) => i)));
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const puzzle = useMemo(() => PUZZLES[order[step]], [order, step]);
  const correct = picked != null && picked === puzzle.bug;
  const wrong = picked != null && picked !== puzzle.bug;

  const choose = (i) => {
    if (picked != null) return;
    setPicked(i);
    if (i === puzzle.bug) setScore((s) => s + 1);
  };

  const next = () => {
    if (step + 1 >= PUZZLES.length) {
      setDone(true);
      onBest?.(score);
      return;
    }
    setStep((s) => s + 1);
    setPicked(null);
  };

  const reset = () => {
    setStep(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  return (
    <div className="game bug">
      {!done ? (
        <>
          <div className="bug-head">
            <div>
              <span className="bug-tag">{puzzle.lang}</span>
              <h3>{puzzle.title}</h3>
            </div>
            <div className="bug-progress">
              Puzzle <b>{step + 1}</b> / {PUZZLES.length} · Score{' '}
              <b style={{ color: 'var(--primary-2)' }}>{score}</b>
            </div>
          </div>
          <p className="game-intro">{bugHunterData.gameIntro}</p>

          <pre className="bug-code">
            {puzzle.code.map((line, i) => (
              <motion.button
                key={i}
                type="button"
                className={`bug-line ${
                  picked == null ? '' : i === puzzle.bug ? 'is-bug' : i === picked ? 'wrong' : ''
                }`}
                onClick={() => choose(i)}
                whileTap={{ scale: 0.99 }}
              >
                <span className="ln">{i + 1}</span>
                <code>{line || ' '}</code>
              </motion.button>
            ))}
          </pre>

          <AnimatePresence>
            {picked != null && (
              <motion.div
                className={`bug-explain ${correct ? 'good' : 'bad'}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {correct ? '✅ Anomaly identified.' : '❌ Incorrect target.'} {puzzle.explain}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="game-actions">
            <button className="btn btn-primary" onClick={next} disabled={picked == null}>
              {step + 1 >= PUZZLES.length ? '🏁 Finish' : 'Next →'}
            </button>
            {best != null && <span className="best-pill">🏆 Best: {best}/{PUZZLES.length}</span>}
          </div>
        </>
      ) : (
        <motion.div
          className="bug-final"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="bug-final-num">
            {score}<span>/{PUZZLES.length}</span>
          </div>
          <p>
            {score === PUZZLES.length
              ? '🛸 Master space telemetry engineer.'
              : score >= 3
              ? '👀 Sharp telemetry eye.'
              : 'Anomaly detected — try again!'}
          </p>
          <div className="game-actions">
            <button className="btn btn-primary" onClick={reset}>
              🔁 Play again
            </button>
            {best != null && <span className="best-pill">🏆 Best: {best}/{PUZZLES.length}</span>}
          </div>
        </motion.div>
      )}
    </div>
  );
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
