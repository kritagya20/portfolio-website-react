import { useEffect, useRef } from 'react';

export default function StardustTrail() {
  const containerRef = useRef(null);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTimeRef.current < 40) return; // Throttle spawn rate to 25 FPS
      lastTimeRef.current = now;

      const container = containerRef.current;
      if (!container) return;

      const particle = document.createElement('span');
      particle.className = 'stardust-particle';

      const colors = ['#38bdf8', '#c084fc', '#f59e0b', '#a7f3d0', '#ffffff'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 5 + 3; // 3px to 8px

      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = color;
      particle.style.boxShadow = `0 0 8px ${color}, 0 0 16px ${color}`;

      const offsetX = (Math.random() - 0.5) * 24;
      const offsetY = (Math.random() - 0.5) * 24;
      particle.style.setProperty('--dx', `${offsetX}px`);
      particle.style.setProperty('--dy', `${offsetY}px`);

      container.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 650);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={containerRef} className="stardust-container" />;
}
