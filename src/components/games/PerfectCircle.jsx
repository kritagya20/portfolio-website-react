import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SIZE = 360;

function scoreCircle(points) {
  if (points.length < 25) return 0;
  const cx = points.reduce((a, p) => a + p.x, 0) / points.length;
  const cy = points.reduce((a, p) => a + p.y, 0) / points.length;
  const radii = points.map((p) => Math.hypot(p.x - cx, p.y - cy));
  const mean = radii.reduce((a, b) => a + b, 0) / radii.length;
  if (mean < 30) return 0;

  const variance =
    radii.reduce((a, r) => a + (r - mean) ** 2, 0) / radii.length;
  const stddev = Math.sqrt(variance);
  const cv = stddev / mean;

  const start = points[0];
  const end = points[points.length - 1];
  const closure = Math.hypot(end.x - start.x, end.y - start.y) / mean;

  let score = (1 - cv * 4) * 100;
  score *= Math.max(0, 1 - closure * 0.6);
  return Math.max(0, Math.min(100, Math.round(score)));
}

export default function PerfectCircle({ best, onBest }) {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [points, setPoints] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    c.width = SIZE * dpr;
    c.height = SIZE * dpr;
    ctx.scale(dpr, dpr);
    redraw();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    redraw();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points, result]);

  const redraw = () => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(SIZE / 2, SIZE / 2, SIZE / 2 - 20, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    ctx.fillRect(SIZE / 2 - 2, SIZE / 2 - 2, 4, 4);

    if (points.length >= 2) {
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      const grad = ctx.createLinearGradient(0, 0, SIZE, SIZE);
      grad.addColorStop(0, '#7c5cff');
      grad.addColorStop(1, '#22d3ee');
      ctx.strokeStyle = grad;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
      ctx.stroke();
    }
  };

  const getXY = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const t = e.touches?.[0];
    const cx = (t ? t.clientX : e.clientX) - rect.left;
    const cy = (t ? t.clientY : e.clientY) - rect.top;
    return {
      x: (cx / rect.width) * SIZE,
      y: (cy / rect.height) * SIZE,
    };
  };

  const start = (e) => {
    e.preventDefault();
    setResult(null);
    setDrawing(true);
    setPoints([getXY(e)]);
  };
  const move = (e) => {
    if (!drawing) return;
    e.preventDefault();
    setPoints((p) => [...p, getXY(e)]);
  };
  const end = () => {
    if (!drawing) return;
    setDrawing(false);
    const s = scoreCircle(points);
    setResult(s);
    if (s > 0) onBest?.(s);
  };

  const reset = () => {
    setPoints([]);
    setResult(null);
  };

  return (
    <div className="game pc">
      <p className="game-intro">
        Hold and drag (or touch) inside the box to draw a circle in <b>one stroke</b>.
        Release to score.
      </p>

      <div className="pc-stage">
        <canvas
          ref={canvasRef}
          style={{ width: SIZE, height: SIZE, maxWidth: '100%' }}
          onMouseDown={start}
          onMouseMove={move}
          onMouseUp={end}
          onMouseLeave={end}
          onTouchStart={start}
          onTouchMove={move}
          onTouchEnd={end}
        />

        <AnimatePresence>
          {result !== null && (
            <motion.div
              key="badge"
              className="pc-badge"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <div className="pc-num">{result}%</div>
              <div className="pc-cap">
                {result > 95
                  ? 'Mathematical.'
                  : result > 85
                  ? 'Outstanding!'
                  : result > 70
                  ? 'Pretty round!'
                  : result > 40
                  ? 'Keep practicing.'
                  : 'That… was not a circle.'}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="game-actions">
        <button className="btn" onClick={reset}>
          🔄 Try again
        </button>
        {best != null && (
          <span className="best-pill">🏆 Best: {best}%</span>
        )}
      </div>
    </div>
  );
}
