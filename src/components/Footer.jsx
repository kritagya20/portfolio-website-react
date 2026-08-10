import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio.js';

const VISITOR_KEY = 'kritagya-portfolio-visits';

function bumpVisits() {
  try {
    const n = Number(localStorage.getItem(VISITOR_KEY) || 0) + 1;
    localStorage.setItem(VISITOR_KEY, String(n));
    return n;
  } catch {
    return 1;
  }
}

export default function Footer() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    setVisits(bumpVisits());
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <span style={{ color: 'var(--text)', fontWeight: 600 }}>
            Happy to see you here
          </span>{' '}
          — have a great day ahead 👋
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <span className="visitor-pill" title="Local visit counter">
            👀 You’re  <b style={{ color: 'var(--text)', fontWeight: 600 }}>#{visits}</b>th visiter to my site :)
          </span>
        </div>
      </div>
    </footer>
  );
}
