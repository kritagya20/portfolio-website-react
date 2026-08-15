import { useEffect, useState, useRef } from 'react';

const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function ScrambleText({ text, className = 'accent', duration = 950 }) {
  const [displayText, setDisplayText] = useState(() => {
    if (!text) return '';
    return text
      .split('')
      .map((c) => (c === ' ' ? ' ' : ALPHABETS[Math.floor(Math.random() * ALPHABETS.length)]))
      .join('');
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el || !text || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();

          const targetText = text;
          const length = targetText.length;
          const startTime = Date.now();

          // All letters start scrambling together immediately at t=0ms.
          // Letters settle into place between 50% and 100% of duration (500ms - 950ms).
          const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(1, elapsed / duration);

            const result = targetText
              .split('')
              .map((char, index) => {
                if (char === ' ') return ' ';
                const letterLockProgress = 0.5 + (index / length) * 0.5;
                if (progress >= letterLockProgress) {
                  return char;
                }
                return ALPHABETS[Math.floor(Math.random() * ALPHABETS.length)];
              })
              .join('');

            setDisplayText(result);

            if (progress >= 1) {
              setDisplayText(targetText);
              clearInterval(interval);
            }
          }, 30);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text, duration, hasAnimated]);

  return (
    <span ref={elementRef} className={className}>
      {displayText || text}
    </span>
  );
}
