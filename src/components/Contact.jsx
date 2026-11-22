import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { profile, contactData } from '../data/portfolio.js';
import { MailSvg } from '../icon_jsx';
import ScrambleText from './ScrambleText.jsx';
import { useToast } from '../context/ToastContext.jsx';

export default function Contact({ onToast }) {
  const { showToast } = useToast();
  const triggerToast = onToast || showToast;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    msg: '',
  });

  // Field-specific validation errors anchored directly towards each field
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    msg: '',
  });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const msgRef = useRef(null);

  const validate = () => {
    const newErrors = { name: '', email: '', msg: '' };
    let isValid = true;
    let firstInvalidRef = null;

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = 'Your name is required';
      isValid = false;
      if (!firstInvalidRef) firstInvalidRef = nameRef;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
      if (!firstInvalidRef) firstInvalidRef = nameRef;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Your email address is required';
      isValid = false;
      if (!firstInvalidRef) firstInvalidRef = emailRef;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email (e.g. name@domain.com)';
      isValid = false;
      if (!firstInvalidRef) firstInvalidRef = emailRef;
    }

    // Validate Message
    if (!formData.msg.trim()) {
      newErrors.msg = 'Message is required';
      isValid = false;
      if (!firstInvalidRef) firstInvalidRef = msgRef;
    } else if (formData.msg.trim().length < 5) {
      newErrors.msg = 'Message must be at least 5 characters';
      isValid = false;
      if (!firstInvalidRef) firstInvalidRef = msgRef;
    }

    setErrors(newErrors);

    if (!isValid && firstInvalidRef?.current) {
      firstInvalidRef.current.focus();
    }

    return isValid;
  };

  const submit = (e) => {
    e.preventDefault();

    // Field-level validation: errors are shown directly towards the field, NOT on the center toast
    const isValid = validate();
    if (!isValid) {
      return;
    }

    const subject = encodeURIComponent(`Portfolio transmission from ${formData.name.trim()}`);
    const body = encodeURIComponent(`${formData.msg.trim()}\n\n— ${formData.name.trim()} (${formData.email.trim()})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    triggerToast(contactData.sendingMessage);
  };

  const handleChange = (e) => {
    const { name: field, value } = e.target;
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contact" className="section" test-id="contact__container_section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow" test-id="contact__eyebrow_badge">
            <span className="dot" /> {contactData.eyebrow}
          </span>
          <h2 className="section-title" test-id="contact__title_heading">
            Establish <ScrambleText text={contactData.titleAccent} className="accent" />
          </h2>
        </motion.div>

        <motion.div
          className="contact-grid"
          test-id="contact__grid_container"
          initial={{ opacity: 0, scale: 0.96, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
        >
          <motion.div
            className="contact-info"
            test-id="contact__info_container"
            initial={{ x: -25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a className="contact-channel" href={`mailto:${profile.email}`} test-id="contact__email_link">
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

            <a className="contact-channel" href={`tel:${profile.phone.replace(/\s+/g, '')}`} test-id="contact__phone_link">
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
              rel="noopener noreferrer"
              test-id="contact__resume_link"
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
                <span className="channel-val">View PDF</span>
              </div>
            </a>
          </motion.div>

          <motion.form
            onSubmit={submit}
            className="contact-terminal-card"
            test-id="contact__message_form"
            initial={{ x: 25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            noValidate
          >
            <div className={`field ${errors.name ? 'field-has-error' : ''}`}>
              <div className="field-label-row">
                <label htmlFor="contact-name">
                  {contactData.formLabels.name} <span className="req-star" aria-hidden="true">*</span>
                </label>
              </div>
              <input
                ref={nameRef}
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                autoComplete="name"
                placeholder={contactData.formLabels.namePlaceholder}
                test-id="contact__name_input"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
              />
              {errors.name && (
                <div id="contact-name-error" className="field-error-msg" role="alert">
                  <svg className="error-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 3a.75.75 0 01.75.75v4a.75.75 0 01-1.5 0v-4A.75.75 0 018 4zm0 8a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                  <span>{errors.name}</span>
                </div>
              )}
            </div>

            <div className={`field ${errors.email ? 'field-has-error' : ''}`}>
              <div className="field-label-row">
                <label htmlFor="contact-email">
                  {contactData.formLabels.email} <span className="req-star" aria-hidden="true">*</span>
                </label>
              </div>
              <input
                ref={emailRef}
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                autoComplete="email"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck="false"
                placeholder={contactData.formLabels.emailPlaceholder}
                test-id="contact__email_input"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
              />
              {errors.email && (
                <div id="contact-email-error" className="field-error-msg" role="alert">
                  <svg className="error-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 3a.75.75 0 01.75.75v4a.75.75 0 01-1.5 0v-4A.75.75 0 018 4zm0 8a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            <div className={`field ${errors.msg ? 'field-has-error' : ''}`}>
              <div className="field-label-row">
                <label htmlFor="contact-message">
                  {contactData.formLabels.message} <span className="req-star" aria-hidden="true">*</span>
                </label>
              </div>
              <textarea
                ref={msgRef}
                id="contact-message"
                name="msg"
                rows={4}
                value={formData.msg}
                onChange={handleChange}
                placeholder={contactData.formLabels.messagePlaceholder}
                test-id="contact__message_textarea"
                aria-required="true"
                aria-invalid={!!errors.msg}
                aria-describedby={errors.msg ? 'contact-msg-error' : undefined}
              />
              {errors.msg && (
                <div id="contact-msg-error" className="field-error-msg" role="alert">
                  <svg className="error-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 3a.75.75 0 01.75.75v4a.75.75 0 01-1.5 0v-4A.75.75 0 018 4zm0 8a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                  <span>{errors.msg}</span>
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} test-id="contact__submit_btn">
              {contactData.formLabels.buttonText}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

