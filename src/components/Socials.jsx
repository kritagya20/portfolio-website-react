import React, { useState, useEffect } from 'react';
import { socialLinks } from '../data/portfolio.js';
import { MailSvg, LinkedinSvg, GithubSvg, MediumSvg, LeetCodeSvg } from '../icon_jsx';
import { useTheme, THEMES } from '../context/ThemeContext.jsx';

const iconMap = {
  github: <GithubSvg className="icon icon--github" />,
  leetcode: <LeetCodeSvg className="icon icon--leetcode" />,
  medium: <MediumSvg className="icon icon--medium" />,
  linkedin: <LinkedinSvg className="icon icon--linkedin" />,
  mail: <MailSvg className="icon icon--mail" />,
};

export default function Socials() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, cycleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themeMeta = THEMES.find((t) => t.id === theme) || THEMES[0];

  return (
    <aside
      className={`socials ${isScrolled ? 'visible' : ''}`}
      aria-label="Social Profiles and Theme Controls"
      test-id="socials__container_aside"
    >
      <div className="social__dock-pill" test-id="socials__dock_pill">
        <ul className="social__icon-list">
          {socialLinks.map(({ label, href, iconName }) => (
            <li key={label} className="social-item">
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                test-id="socials__dock_link"
              >
                {iconMap[iconName] || null}
              </a>
              <span className="social-tooltip" aria-hidden="true">{label}</span>
            </li>
          ))}
        </ul>

        {/* Desktop-only glowing divider beam line & Theme Toggle */}
        <div className="social__beam-separator" aria-hidden="true" />

        <div className="social__theme-wrapper">
          <button
            type="button"
            className="social-theme-toggle"
            onClick={cycleTheme}
            aria-label={`Switch theme (current: ${themeMeta.label})`}
            test-id="socials__themeToggle_btn"
          >
            <span className="theme-toggle-icon">{themeMeta.icon}</span>
          </button>
          <span className="social-tooltip" aria-hidden="true">Theme: {themeMeta.label}</span>
        </div>
      </div>
    </aside>
  );
}