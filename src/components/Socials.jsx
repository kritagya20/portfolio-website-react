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
      data-testid="socials__container__aside"
    >
      <div className="social__dock-pill">
        <ul className="social__icon-list">
          {socialLinks.map(({ label, href, iconName }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                data-testid={`socials__link__a-${iconName}`}
              >
                {iconMap[iconName] || null}
                <span className="social-tooltip">{label}</span>
              </a>
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
            title={`Theme: ${themeMeta.label}`}
            data-testid="sidebar__theme-toggle__btn"
          >
            <span className="theme-toggle-icon">{themeMeta.icon}</span>
            <span className="social-tooltip">Theme: {themeMeta.label}</span>
          </button>
        </div>
      </div>
    </aside>
  );
}