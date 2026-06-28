import React from 'react';
import { MailSvg, LinkedinSvg, GithubSvg, MediumSvg, LeetCodeSvg } from '../icon_jsx';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/kritagya20',
    icon: <GithubSvg className='icon icon--github' />
  },
  {
    label: 'Leet Code',
    href: 'https://leetcode.com/u/kritagya20/',
    icon: <LeetCodeSvg className='icon icon--leetcode' />
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@kritagya2022',
    icon: <MediumSvg className='icon icon--medium' />
  },
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/kritagyachouhan/',
    icon: <LinkedinSvg className='icon icon--linkedin' />
  },
  {
    label: 'Mail',
    href: 'mailto: kritagya2022@gmail.com',
    icon: <MailSvg className='icon icon--mail' />
  },
];

function Socials() {
  return (
    <section className="socials">
      <ul className="social__icon-list">
        {socialLinks.map(({ label, href, icon }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Socials;