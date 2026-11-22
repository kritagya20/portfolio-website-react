import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: fine)').matches;
  });

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    const updatePointer = () => setIsFinePointer(media.matches);
    updatePointer();

    if (media.addEventListener) {
      media.addEventListener('change', updatePointer);
    } else {
      media.addListener(updatePointer);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', updatePointer);
      } else {
        media.removeListener(updatePointer);
      }
    };
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (dot) {
        dot.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
      }

      if (outline) {
        outline.animate(
          {
            transform: `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`,
          },
          { duration: 250, fill: 'forwards', easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
        );
      }

      // Check hover state over clickable elements only when changed
      const target = e.target;
      if (target && target.closest) {
        const isInteractable = Boolean(
          target.closest(
            'a, button, .card, .btn, .nav-link, input, select, textarea, .tl-card, .sat-node, .game-tile'
          )
        );
        setHovered((prev) => (prev !== isInteractable ? isInteractable : prev));
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div
        ref={outlineRef}
        className={`cursor-outline ${hovered ? 'hovered' : ''}`}
      />
    </>
  );
}
