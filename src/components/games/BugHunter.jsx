import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PUZZLES = [
  {
    lang: 'JavaScript',
    title: 'Array iteration',
    code: [
      'function sumArr(arr) {',
      '  let sum = 0;',
      '  for (let i = 0; i <= arr.length; i++) {',
      '    sum += arr[i];',
      '  }',
      '  return sum;',
      '}',
    ],
    bug: 2,
    explain: 'Off-by-one: i should go up to < arr.length, not <= (causes NaN on the last index).',
  },
  {
    lang: 'C#',
    title: 'Async without await',
    code: [
      'public async Task<User> GetUserAsync(int id) {',
      '    var user = _db.Users.FindAsync(id);',
      '    if (user == null) return null;',
      '    return user;',
      '}',
    ],
    bug: 1,
    explain: 'FindAsync returns a Task — must be awaited. Otherwise user is the Task object.',
  },
  {
    lang: 'SQL',
    title: 'Vulnerable query',
    code: [
      'string sql = "SELECT * FROM users " +',
      '             "WHERE name = \'" + name + "\'";',
      'var rows = db.Query(sql);',
      'return rows;',
    ],
    bug: 0,
    explain: 'String concatenation = SQL injection. Use parameterized queries instead.',
  },
  {
    lang: 'JavaScript',
    title: 'Equality check',
    code: [
      'function isAdmin(user) {',
      '  if (user.role == "admin") {',
      '    return true;',
      '  }',
      '  return false;',
      '}',
    ],
    bug: 1,
    explain: 'Use === for strict equality. == triggers type coercion that can cause subtle bugs.',
  },
  {
    lang: 'React',
    title: 'Missing dependency',
    code: [
      'function Profile({ id }) {',
      '  const [user, setUser] = useState(null);',
      '  useEffect(() => {',
      '    fetchUser(id).then(setUser);',
      '  }, []);',
      '  return <div>{user?.name}</div>;',
      '}',
    ],
    bug: 4,
    explain: 'The dep array should include `id`. Otherwise the effect never re-fires when id changes.',
  },
];

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
          <p className="game-intro">Click the line that contains the bug.</p>

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
                {correct ? '✅ Nailed it.' : '❌ Not quite.'} {puzzle.explain}
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
              ? '🐞 Master bug hunter.'
              : score >= 3
              ? '👀 Pretty sharp eye.'
              : 'Nice attempt — try again!'}
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
