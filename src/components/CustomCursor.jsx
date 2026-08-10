import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (dot) {
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;
      }

      if (outline) {
        outline.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 400, fill: 'forwards', easing: 'cubic-bezier(0.25, 1, 0.5, 1)' }
        );
      }

      // Check hover state over clickable elements
      const target = e.target;
      const isInteractable = target.closest(
        'a, button, .card, .btn, .nav-link, input, select, textarea, .tl-card'
      );
      setHovered(Boolean(isInteractable));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
