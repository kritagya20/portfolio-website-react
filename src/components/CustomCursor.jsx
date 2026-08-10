import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const trailContainerRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trailContainer = trailContainerRef.current;

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      // 1. Move Cosmic Rocket Cursor
      if (cursor) {
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }

      // 2. Emit Stardust Sparkles from Rocket Thruster
      const now = Date.now();
      if (now - lastTimeRef.current > 35 && trailContainer) {
        lastTimeRef.current = now;

        const particle = document.createElement('span');
        particle.className = 'stardust-particle';

        const colors = ['#38bdf8', '#c084fc', '#f59e0b', '#a7f3d0', '#ffffff'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 6 + 4; // 4px to 10px

        // Position particle slightly behind rocket thruster
        particle.style.left = `${x}px`;
        particle.style.top = `${y + 12}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = color;
        particle.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;

        const dx = (Math.random() - 0.5) * 28;
        const dy = Math.random() * 20 + 8; // Drifts downward like thruster exhaust
        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);

        trailContainer.appendChild(particle);

        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 650);
      }

      // 3. Detect hover over clickable elements
      const target = e.target;
      const isClickable =
        target.closest('a, button, .card, .btn, .nav-link, input, select, textarea');
      setHovered(Boolean(isClickable));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Stardust Trail Container */}
      <div ref={trailContainerRef} className="stardust-container" />

      {/* Cosmic Rocket Cursor Head */}
      <div
        ref={cursorRef}
        className={`custom-cursor-head ${hovered ? 'hovered' : ''}`}
      >
        <span className="rocket-icon">🚀</span>
      </div>
    </>
  );
}
