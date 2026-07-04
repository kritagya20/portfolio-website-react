import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, THEMES } from '../context/ThemeContext.jsx';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'playground', label: 'Playground' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, cycleTheme } = useTheme();

  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY + 140;

      let current = 'home';

      for (const link of links) {
        const el = document.getElementById(link.id);

        if (el && el.offsetTop <= offset) {
          current = link.id;
        }
      }

      setActive(current);
    };

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollY);
    };
  }, [open]);

  const themeMeta = THEMES.find((t) => t.id === theme);

  return (
    <>
      {/* Theme Button */}
      <button
        className="theme-floating-btn"
        onClick={cycleTheme}
        aria-label={`Switch theme (current: ${themeMeta.label})`}
        title={`Theme: ${themeMeta.label}`}
      >
        <span>{themeMeta.icon}</span>

        <span className="theme-label">
          {themeMeta.label}
        </span>
      </button>

      {/* Desktop / Mobile Navbar */}
      <header className="nav">
        <div className="nav-inner">
          <nav className="nav-links">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={active === link.id ? 'active' : ''}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="menu-btn"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            {/* Blur Overlay */}

            <motion.div
              className="nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />

            {/* Mobile Drawer */}

            <motion.div
              className="nav-mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 28,
                stiffness: 260,
              }}
            >
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}