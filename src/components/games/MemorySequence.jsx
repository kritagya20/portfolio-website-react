import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PADS = [
  { id: 0, name: 'Red',    color: '#ef4444', glow: '#fca5a5', freq: 329.63 },
  { id: 1, name: 'Green',  color: '#22c55e', glow: '#86efac', freq: 261.63 },
  { id: 2, name: 'Blue',   color: '#3b82f6', glow: '#93c5fd', freq: 392.0  },
  { id: 3, name: 'Yellow', color: '#f59e0b', glow: '#fcd34d', freq: 440.0  },
];

const SHOW_MS = 520;
const GAP_MS = 180;
const START_DELAY_MS = 700;

export default function MemorySequence({ best, onBest, onToast }) {
  const [seq, setSeq] = useState([]);
  const [userIdx, setUserIdx] = useState(0);
  const [phase, setPhase] = useState('idle');     // idle | showing | input | gameover
  const [activePad, setActivePad] = useState(null);
  const [muted, setMuted] = useState(false);

  const seqRef = useRef([]);
  const timeoutsRef = useRef([]);
  const audioCtxRef = useRef(null);

  useEffect(() => () => clearAllTimers(), []);

  const clearAllTimers = () => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  };

  const playTone = (freq, duration = 0.32) => {
    if (muted) return;
    try {
      if (!audioCtxRef.current) {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (!Ctx) return;
        audioCtxRef.current = new Ctx();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration + 0.05);
    } catch {
      /* ignore */
    }
  };

  const flashPad = (padId, ms = SHOW_MS) => {
    const pad = PADS[padId];
    setActivePad(padId);
    playTone(pad.freq, ms / 1000);
    return new Promise((resolve) => {
      const t = setTimeout(() => {
        setActivePad(null);
        const t2 = setTimeout(resolve, GAP_MS);
        timeoutsRef.current.push(t2);
      }, ms);
      timeoutsRef.current.push(t);
    });
  };

  const playSequence = async (sequence) => {
    setPhase('showing');
    setActivePad(null);
    await new Promise((r) => {
      const t = setTimeout(r, START_DELAY_MS);
      timeoutsRef.current.push(t);
    });
    for (const id of sequence) {
      // eslint-disable-next-line no-await-in-loop
      await flashPad(id);
    }
    setPhase('input');
    setUserIdx(0);
  };

  const start = () => {
    clearAllTimers();
    const next = [Math.floor(Math.random() * 4)];
    seqRef.current = next;
    setSeq(next);
    setUserIdx(0);
    playSequence(next);
  };

  const padPress = (id) => {
    if (phase !== 'input') return;
    const pad = PADS[id];
    setActivePad(id);
    playTone(pad.freq, 0.18);
    const t = setTimeout(() => setActivePad(null), 180);
    timeoutsRef.current.push(t);

    const expected = seqRef.current[userIdx];
    if (id !== expected) {
      // wrong → game over
      setPhase('gameover');
      const reached = seqRef.current.length - 1; // last fully completed round
      const score = Math.max(0, reached);
      onBest?.(seqRef.current.length); // length they reached (1-based round)
      onToast?.(`💥 Wrong! You reached round ${seqRef.current.length}.`);
      return;
    }

    if (userIdx + 1 === seqRef.current.length) {
      // round cleared → extend sequence and replay
      const nextSeq = [...seqRef.current, Math.floor(Math.random() * 4)];
      seqRef.current = nextSeq;
      setSeq(nextSeq);
      const t2 = setTimeout(() => playSequence(nextSeq), 600);
      timeoutsRef.current.push(t2);
    } else {
      setUserIdx((i) => i + 1);
    }
  };

  const restart = () => {
    clearAllTimers();
    setSeq([]);
    setUserIdx(0);
    setPhase('idle');
    setActivePad(null);
  };

  const round = seq.length;
  const statusLabel =
    phase === 'idle'
      ? 'Press start to begin'
      : phase === 'showing'
      ? 'Watch the sequence…'
      : phase === 'input'
      ? `Your turn — step ${userIdx + 1} / ${round}`
      : 'Game over';

  return (
    <div className="game ms">
      <p className="game-intro">
        Watch the sequence, then repeat it by tapping the pads in the same order. Each round
        adds one more step.
      </p>

      <div className="ms-hud">
        <div className="ms-hud-stat">
          <span className="lbl">Round</span>
          <span className="val">{round || 0}</span>
        </div>
        <div className="ms-hud-stat">
          <span className="lbl">Status</span>
          <span className={`val phase-${phase}`}>{statusLabel}</span>
        </div>
        <button
          type="button"
          className={`ms-mute ${muted ? 'on' : ''}`}
          onClick={() => setMuted((m) => !m)}
          aria-pressed={muted}
          title={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? '🔇' : '🔊'}
        </button>
      </div>

      <div className="ms-board">
        {PADS.map((p) => {
          const active = activePad === p.id;
          return (
            <motion.button
              key={p.id}
              type="button"
              className={`ms-pad ${active ? 'active' : ''} ${
                phase === 'input' ? 'clickable' : ''
              }`}
              style={{ '--pad': p.color, '--pad-glow': p.glow }}
              onClick={() => padPress(p.id)}
              disabled={phase !== 'input'}
              aria-label={p.name}
              animate={active ? { scale: 1.04 } : { scale: 1 }}
              transition={{ duration: 0.12 }}
              whileTap={phase === 'input' ? { scale: 0.96 } : {}}
            />
          );
        })}
        <div className="ms-center">
          <div className="ms-center-num">{round || '—'}</div>
          <div className="ms-center-lbl">round</div>
        </div>
      </div>

      <AnimatePresence>
        {phase === 'gameover' && (
          <motion.div
            className="ms-result"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            💥 Game over — you reached round <b>{round}</b>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="game-actions">
        {phase === 'idle' && (
          <button className="btn btn-primary" onClick={start}>
            ▶ Start
          </button>
        )}
        {phase === 'gameover' && (
          <button className="btn btn-primary" onClick={start}>
            🔁 Play again
          </button>
        )}
        {(phase === 'showing' || phase === 'input') && (
          <button className="btn" onClick={restart}>
            ⏹ Reset
          </button>
        )}
        {best != null && <span className="best-pill">🏆 Best: round {best}</span>}
      </div>
    </div>
  );
}
