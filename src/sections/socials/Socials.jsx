import React from 'react';
import { MailSvg, TwitterSvg, LinkedinSvg, GithubSvg } from '../../components';
import './Socials.css';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/kritagya20',
    icon: <GithubSvg className='icon icon--github' />
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/kritagyachouhan',
    icon: <TwitterSvg className='icon icon--twitter' />
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