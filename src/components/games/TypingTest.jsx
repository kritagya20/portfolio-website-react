import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { typingTestData } from '../../data/portfolio.js';

const SNIPPETS = typingTestData.snippets;

function pickSnippet(prevIdx) {
  if (SNIPPETS.length === 1) return 0;
  let n = Math.floor(Math.random() * SNIPPETS.length);
  if (n === prevIdx) n = (n + 1) % SNIPPETS.length;
  return n;
}

export default function TypingTest({ best, onBest }) {
  const [snipIdx, setSnipIdx] = useState(() => Math.floor(Math.random() * SNIPPETS.length));
  const text = SNIPPETS[snipIdx];
  const [typed, setTyped] = useState('');
  const [startedAt, setStartedAt] = useState(null);
  const [endedAt, setEndedAt] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [snipIdx]);

  const onChange = (e) => {
    const v = e.target.value;
    if (!startedAt && v.length > 0) setStartedAt(Date.now());
    if (v.length <= text.length) setTyped(v);
    if (v === text) {
      const finishedAt = Date.now();
      setEndedAt(finishedAt);
    }
  };

  const stats = useMemo(() => {
    if (!startedAt) return { wpm: 0, acc: 100, secs: 0, correct: 0, wrong: 0 };
    const secs = Math.max(1, ((endedAt || Date.now()) - startedAt) / 1000);
    let correct = 0;
    let wrong = 0;
    for (let i = 0; i < typed.length; i++) {
      if (typed[i] === text[i]) correct++;
      else wrong++;
    }
    const words = correct / 5;
    const wpm = Math.round((words / secs) * 60);
    const acc = typed.length ? Math.round((correct / typed.length) * 100) : 100;
    return { wpm, acc, secs: secs.toFixed(1), correct, wrong };
  }, [typed, startedAt, endedAt, text]);

  useEffect(() => {
    if (endedAt && stats.wpm > 0 && stats.acc >= 80) onBest?.(stats.wpm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endedAt]);

  const reset = () => {
    setSnipIdx((i) => pickSnippet(i));
    setTyped('');
    setStartedAt(null);
    setEndedAt(null);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <div className="game tt">
      <p className="game-intro">
        {typingTestData.gameIntro}
      </p>

      <div className="tt-stage">
        <pre className="tt-target" aria-label="snippet to type">
          {text.split('').map((ch, i) => {
            let cls = 'p';
            if (i < typed.length) cls = typed[i] === ch ? 'ok' : 'bad';
            else if (i === typed.length) cls = 'cur';
            return (
              <span key={i} className={`tt-ch ${cls}`}>
                {ch === '\n' ? '\u23CE\n' : ch}
              </span>
            );
          })}
        </pre>

        <textarea
          ref={inputRef}
          className="tt-input"
          value={typed}
          onChange={onChange}
          spellCheck={false}
          placeholder={typingTestData.placeholder}
          disabled={!!endedAt}
        />
      </div>

      <div className="tt-stats">
        <Stat label="WPM" value={stats.wpm} accent />
        <Stat label="Accuracy" value={`${stats.acc}%`} />
        <Stat label="Time" value={`${stats.secs}s`} />
        <Stat label="Errors" value={stats.wrong} />
      </div>

      {endedAt && (
        <motion.div
          className="tt-result"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ✅ Done — <b>{stats.wpm} WPM</b> at <b>{stats.acc}%</b> accuracy
          {best != null && stats.wpm > best ? ' · 🏆 New best!' : ''}
        </motion.div>
      )}

      <div className="game-actions">
        <button className="btn" onClick={reset}>
          🎲 New snippet
        </button>
        {best != null && <span className="best-pill">🏆 Best: {best} WPM</span>}
      </div>
    </div>
  );
}

function Stat({ label, value, accent }) {
  return (
    <div className={`tt-stat ${accent ? 'accent' : ''}`}>
      <div className="tt-v">{value}</div>
      <div className="tt-l">{label}</div>
    </div>
  );
}
