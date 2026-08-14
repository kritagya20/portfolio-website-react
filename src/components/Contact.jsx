import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile, contactData } from '../data/portfolio.js';
import { MailSvg } from '../icon_jsx';

export default function Contact({ onToast }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !msg.trim()) {
      onToast?.(contactData.validationMessage);
      return;
    }
    const subject = encodeURIComponent(`Portfolio transmission from ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    onToast?.(contactData.sendingMessage);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">
            <span className="dot" /> {contactData.eyebrow}
          </span>
          <h2 className="section-title">
            Establish <span className="accent">{contactData.titleAccent}</span>
          </h2>
          <p className="section-sub">
            {contactData.sub}
          </p>
        </motion.div>

        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, scale: 0.96, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
        >
          <motion.div
            className="contact-info"
            initial={{ x: -25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a className="contact-channel" href={`mailto:${profile.email}`}>
              <div className="channel-ico">
                <svg viewBox="0 0 24 24" className="icon" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="channel-body">
                <div className="channel-head">
                  <strong className="channel-title">Email</strong>
                  <span className="channel-badge">MAIL</span>
                </div>
                <span className="channel-val">{profile.email}</span>
              </div>
            </a>

            <a className="contact-channel" href={`tel:${profile.phone.replace(/\s+/g, '')}`}>
              <div className="channel-ico">
                <svg viewBox="0 0 24 24" className="icon" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div className="channel-body">
                <div className="channel-head">
                  <strong className="channel-title">Phone</strong>
                  <span className="channel-badge">CALL</span>
                </div>
                <span className="channel-val">{profile.phone}</span>
              </div>
            </a>

            <a
              className="contact-channel"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <div className="channel-ico">
                <svg viewBox="0 0 24 24" className="icon" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <div className="channel-body">
                <div className="channel-head">
                  <strong className="channel-title">Resume</strong>
                  <span className="channel-badge">PDF</span>
                </div>
                <span className="channel-val">Download PDF</span>
              </div>
            </a>
          </motion.div>

          <motion.form
            onSubmit={submit}
            className="contact-terminal-card"
            initial={{ x: 25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="field">
              <label>{contactData.formLabels.name}</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder={contactData.formLabels.namePlaceholder}
              />
            </div>
            <div className="field">
              <label>{contactData.formLabels.email}</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder={contactData.formLabels.emailPlaceholder}
              />
            </div>
            <div className="field">
              <label>{contactData.formLabels.message}</label>
              <textarea
                rows={4}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder={contactData.formLabels.messagePlaceholder}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              {contactData.formLabels.buttonText}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

