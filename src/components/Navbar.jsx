import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, THEMES } from '../context/ThemeContext.jsx';
import { navLinks as links } from '../data/portfolio.js';
import { MailSvg, LinkedinSvg, GithubSvg, MediumSvg, LeetCodeSvg } from '../icon_jsx';

export default function Navbar() {
  const { theme, cycleTheme } = useTheme();

  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  const pillRef = useRef(null);
  const navLinkRefs = useRef({});
  const [indicatorPos, setIndicatorPos] = useState({ left: 10, width: 60 });
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position so navbar appears only when user starts scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 1. IntersectionObserver for active section tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -45% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // 2. Measure active link position for indicator offset
  const updateIndicator = () => {
    const activeEl = navLinkRefs.current[active];
    const container = pillRef.current;

    if (activeEl && container) {
      const activeRect = activeEl.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setIndicatorPos({
        left: activeRect.left - containerRect.left,
        width: activeRect.width,
      });
    }
  };

  useLayoutEffect(() => {
    updateIndicator();
  }, [active]);

  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [active]);

  // 3. Halt background scrolling completely when mobile drawer is open
  useEffect(() => {
    if (!open) return;

    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyTouchAction = document.body.style.touchAction;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    const preventTouchMove = (e) => {
      // Allow scrolling inside .nav-mobile-links
      if (e.target.closest('.nav-mobile-links')) return;
      
      // Prevent touch scroll gestures outside link container
      if (e.cancelable) e.preventDefault();
    };

    document.addEventListener('touchmove', preventTouchMove, { passive: false });

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.touchAction = originalBodyTouchAction;
      document.removeEventListener('touchmove', preventTouchMove);
    };
  }, [open]);

  const handleNavClick = (e, linkId) => {
    e.preventDefault();
    setActive(linkId);
    setOpen(false);

    setTimeout(() => {
      if (linkId === 'projects') {
        window.dispatchEvent(new CustomEvent('selectProjectSlide', { detail: { index: 0 } }));
      } else {
        const el = document.getElementById(linkId);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top, behavior: 'auto' });
        }
      }
    }, 40);
  };

  const themeMeta = THEMES.find((t) => t.id === theme) || THEMES[0];

  return (
    <>
      {/* Mobile Top Bar (< 768px): Top Left Theme Button & Top Right Menu Button */}
      <div className="mobile-top-bar">
        <button
          className="mobile-theme-btn"
          onClick={cycleTheme}
          aria-label={`Switch theme (current: ${themeMeta.label})`}
          title={`Theme: ${themeMeta.label}`}
        >
          <span className="theme-icon">{themeMeta.icon}</span>
          <span className="theme-label">{themeMeta.label}</span>
        </button>

        <button
          className="mobile-menu-btn"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Desktop Floating Pill Navbar (> 768px): Arrives on Scroll */}
      <motion.header
        className="site-nav"
        initial={false}
        animate={{
          y: isScrolled ? 0 : -60,
          x: '-50%',
          opacity: isScrolled ? 1 : 0,
          pointerEvents: isScrolled ? 'auto' : 'none',
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1.0],
        }}
      >
        <div className="nav-pill" ref={pillRef}>
          <span
            className="nav-indicator"
            style={{
              left: `${indicatorPos.left}px`,
              width: `${indicatorPos.width}px`,
            }}
          />

          <nav className="nav-links">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  ref={(el) => (navLinkRefs.current[link.id] = el)}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    setActive(link.id);
                    if (link.id === 'projects') {
                      e.preventDefault();
                      window.dispatchEvent(new CustomEvent('selectProjectSlide', { detail: { index: 0 } }));
                    }
                  }}
                >
                  <span className="nav-label">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="nav-divider" />

          <button
            className="theme-nav-btn"
            onClick={cycleTheme}
            aria-label={`Switch theme (current: ${themeMeta.label})`}
            title={`Theme: ${themeMeta.label}`}
          >
            <span className="theme-icon">{themeMeta.icon}</span>
            <span className="theme-label">{themeMeta.label}</span>
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />

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
              <div className="nav-mobile-header">
                <span className="nav-mobile-title">
                   
                </span>
                <button
                  className="nav-mobile-close"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <nav className="nav-mobile-links">
                {links.map((link) => {
                  const isActive = active === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className={`nav-mobile-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                    >
                      <span className="nav-mobile-label">{link.label}</span>
                      {isActive && <span className="active-dot" />}
                    </a>
                  );
                })}
              </nav>

              <div className="nav-mobile-footer">
                <div className="nav-mobile-socials">
                  <a
                    href="https://github.com/kritagya20"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <GithubSvg className="icon icon--github" />
                  </a>
                  <a
                    href="https://leetcode.com/u/kritagya20/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LeetCode"
                  >
                    <LeetCodeSvg className="icon icon--leetcode" />
                  </a>
                  <a
                    href="https://medium.com/@kritagya2022"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Medium"
                  >
                    <MediumSvg className="icon icon--medium" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kritagyachouhan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinSvg className="icon icon--linkedin" />
                  </a>
                  <a
                    href="mailto:kritagya2022@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mail"
                  >
                    <MailSvg className="icon icon--mail" />
                  </a>
                </div>

                <button
                  className="nav-mobile-theme-btn"
                  onClick={cycleTheme}
                  aria-label="Switch Theme"
                >
                  <span>{themeMeta.icon}</span>
                  <span>
                    Theme: <strong>{themeMeta.label}</strong>
                  </span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}