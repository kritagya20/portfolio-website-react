import React, { useState, useEffect } from 'react';
import { socialLinks } from '../data/portfolio.js';
import { MailSvg, LinkedinSvg, GithubSvg, MediumSvg, LeetCodeSvg } from '../icon_jsx';

const iconMap = {
  github: <GithubSvg className="icon icon--github" />,
  leetcode: <LeetCodeSvg className="icon icon--leetcode" />,
  medium: <MediumSvg className="icon icon--medium" />,
  linkedin: <LinkedinSvg className="icon icon--linkedin" />,
  mail: <MailSvg className="icon icon--mail" />,
};

export default function Socials() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className={`socials ${isScrolled ? 'visible' : ''}`} aria-label="Social Profiles">
      <ul className="social__icon-list">
        {socialLinks.map(({ label, href, iconName }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              {iconMap[iconName] || null}
              <span className="social-tooltip">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}