import { useState } from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../data/portfolio.js';
import ScrambleText from './ScrambleText.jsx';

export default function About() {
  const [hudTab, setHudTab] = useState('telemetry');
  const [isTerminalExpanded, setIsTerminalExpanded] = useState(false);

  return (
    <section id="about" className="section" test-id="about__container_section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow" test-id="about__eyebrow_badge">
            <span className="dot" /> {aboutData.eyebrow}
          </span>
          <h2 className="section-title" test-id="about__title_heading">
            Engineering <ScrambleText text={aboutData.titleAccent} className="accent" /> &amp; Principles
          </h2>
        </motion.div>

        {/* Main Content Layout: Terminal Window (Left) + Open-Air Story Flow (Right) */}
        <div className="about-main-layout">
          {/* Left Column: Authentic macOS Terminal Window */}
          <motion.div
            className="mac-terminal-window"
            test-id="about__terminal_window"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* macOS Window Title Bar */}
            <div className="mac-terminal-bar" test-id="about__terminal_bar">
              <div className="mac-controls">
                <span className="mac-btn close" test-id="about__terminalClose_dot" aria-hidden="true" />
                <button
                  type="button"
                  className="mac-btn minimize"
                  onClick={() => setIsTerminalExpanded((prev) => !prev)}
                  aria-label={isTerminalExpanded ? 'Minimize terminal' : 'Expand terminal'}
                  test-id="about__terminalMinimize_btn"
                />
                <button
                  type="button"
                  className="mac-btn zoom"
                  onClick={() => setIsTerminalExpanded((prev) => !prev)}
                  aria-label={isTerminalExpanded ? 'Minimize terminal' : 'Expand terminal'}
                  test-id="about__terminalZoom_btn"
                />
              </div>
              <div className="mac-tabs">
                <button
                  type="button"
                  className={`mac-tab ${hudTab === 'telemetry' ? 'active' : ''}`}
                  onClick={() => setHudTab('telemetry')}
                  test-id="about__profile_tab"
                >
                  profile.json
                </button>
                <button
                  type="button"
                  className={`mac-tab ${hudTab === 'metrics' ? 'active' : ''}`}
                  onClick={() => setHudTab('metrics')}
                  test-id="about__architecture_tab"
                >
                  architecture.sh
                </button>
              </div>
            </div>

            {/* Terminal Body with Expandable Mobile Peek Mode */}
            <div
              className={`mac-terminal-body ${isTerminalExpanded ? 'expanded' : 'collapsed'}`}
              test-id="about__terminal_body"
            >
              {hudTab === 'telemetry' ? (
                <div className="hud-terminal">
                  <div className="terminal-line">
                    <span className="prompt">{aboutData.terminal.promptUser}</span> whoami
                  </div>
                  <div className="muted-text">→ Software Engineer (Backend Systems) @ Medkart</div>
                  <div className="terminal-line" style={{ marginTop: 14 }}>
                    <span className="prompt">{aboutData.terminal.promptUser}</span> cat profile.json
                  </div>
                  <pre className="json-block">
{`{
  `}<span className="key">"name"</span>{`: `}<span className="str">"{aboutData.terminal.profileJson.name}"</span>{`,
  `}<span className="key">"role"</span>{`: `}<span className="str">"{aboutData.terminal.profileJson.role}"</span>{`,
  `}<span className="key">"experience"</span>{`: `}<span className="str">"{aboutData.terminal.profileJson.experience}"</span>{`,
  `}<span className="key">"primaryStack"</span>{`: [`}{aboutData.terminal.profileJson.primaryStack.map((s, i) => (
                    <span key={s}><span className="str">"{s}"</span>{i < aboutData.terminal.profileJson.primaryStack.length - 1 ? ', ' : ''}</span>
                  ))}{`],
  `}<span className="key">"databases"</span>{`: [`}{aboutData.terminal.profileJson.databases.map((d, i) => (
                    <span key={d}><span className="str">"{d}"</span>{i < aboutData.terminal.profileJson.databases.length - 1 ? ', ' : ''}</span>
                  ))}{`],
  `}<span className="key">"systems"</span>{`: [`}{aboutData.terminal.profileJson.systems.map((t, i) => (
                    <span key={t}><span className="str">"{t}"</span>{i < aboutData.terminal.profileJson.systems.length - 1 ? ', ' : ''}</span>
                  ))}{`],
  `}<span className="key">"masters"</span>{`: `}<span className="str">"{aboutData.terminal.profileJson.masters}"</span>
{`}`}
                  </pre>
                  <div className="terminal-line" style={{ marginTop: 14 }}>
                    <span className="prompt">{aboutData.terminal.promptUser}</span> echo "Let’s build reliable softwares." <span className="caret">&nbsp;</span>
                  </div>
                </div>
              ) : (
                <div className="hud-terminal">
                  <div className="terminal-line">
                    <span className="prompt">{aboutData.terminal.promptUser}</span> ./architecture.sh
                  </div>
                  <div className="muted-text" style={{ marginTop: 4 }}>
                    # CORE SYSTEM ARCHITECTURE &amp; TECHNICAL SPECIFICATIONS
                  </div>
                  <div className="env-block" style={{ marginTop: 10 }}>
                    {aboutData.terminal.architectureSpecs.map((spec, i) => (
                      <div key={spec.section} style={{ marginTop: i === 0 ? 0 : 6 }}>
                        <div><span className="key">{spec.section}</span></div>
                        <div style={{ paddingLeft: 10 }}><span className="str">{spec.details}</span></div>
                      </div>
                    ))}
                  </div>
                  <div className="terminal-line" style={{ marginTop: 14 }}>
                    <span className="prompt">{aboutData.terminal.promptUser}</span> <span className="caret">&nbsp;</span>
                  </div>
                </div>
              )}
            </div>

            {/* Authentic macOS Terminal Status Bar & Mobile Expand Toggle */}
            <div className="mac-terminal-status-bar" test-id="about__status_bar">
              <div className="terminal-status-left">
                <span className="terminal-status-pulse" aria-hidden="true" />
                <span className="terminal-status-text">zsh 5.9</span>
                <span className="terminal-status-sep">·</span>
                <span className="terminal-status-text">UTF-8</span>
              </div>
              <button
                type="button"
                className="mac-terminal-expand-btn"
                onClick={() => setIsTerminalExpanded((prev) => !prev)}
                aria-expanded={isTerminalExpanded}
                test-id="about__terminalExpand_btn"
              >
                <span>{isTerminalExpanded ? '▲ Collapse Terminal' : '▼ Expand Full Terminal'}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Open-Air Typography Story Flow */}
          <motion.div
            className="about-story-col"
            test-id="about__story_column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="about-story-text lead-text">
              {aboutData.story.lead}
            </p>

            {aboutData.story.paragraphs.map((pText, i) => (
              <p key={i} className="about-story-text">
                {pText}
              </p>
            ))}

            <div className="about-glow-quote" test-id="about__quote_card">
              <span className="quote-bar" />
              <div>
                <p className="quote-body">
                  {aboutData.story.quote.body}
                </p>
                <span className="quote-author">{aboutData.story.quote.author}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
