import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio.js';

function useTypewriter(words, typing = 80, holding = 1400) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx % words.length];
    let timeout;
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), holding);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          const next = deleting
            ? word.slice(0, text.length - 1)
            : word.slice(0, text.length + 1);
          setText(next);
        },
        deleting ? typing / 2 : typing
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, typing, holding]);

  return text;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const titleVariant = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] },
  },
};

const btnLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const btnRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const typed = useTypewriter(profile.typewriter);

  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="typer" variants={itemUp}>
            &gt; {typed}
            <span className="caret">&nbsp;</span>
          </motion.div>

          <motion.h1 variants={titleVariant}>
            Hi, I’m <span className="grad">{profile.name.split(' ')[0]}</span>.
            <br />I build <span className="grad">scalable full stack</span> projects.
          </motion.h1>

          <motion.p className="lead" variants={itemUp}>
            {profile.tagline}
          </motion.p>

          <div className="cta">
            <motion.a className="btn btn-primary" href="#projects" variants={btnLeft}>
              View My Work →
            </motion.a>
            <motion.a className="btn" href={profile.resumeUrl} target="_blank" rel="noreferrer" variants={btnRight}>
              📄 Download Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}
        >
          <div className="terminal-bar">
            <span /> <span /> <span />
          </div>
          <div className="terminal">
            <div>
              <span className="prompt">$</span> whoami
            </div>
            <div className="muted">→ Full Stack Software Engineer @ Medkart</div>
            <div style={{ marginTop: 10 }}>
              <span className="prompt">$</span> cat profile.json
            </div>
            <pre style={{ margin: 0 }}>
{`{
  `}<span className="key">"name"</span>{`: `}<span className="str">"Kritagya Singh Chouhan"</span>{`,
  `}<span className="key">"experience"</span>{`: `}<span className="str">"3+ years"</span>{`,
  `}<span className="key">"stack"</span>{`: [`}<span className="str">"Golang"</span>{`, `}<span className="str">"Java"</span>{`, `}<span className="str">"React"</span>{`, `}<span className="str">"Selenium"</span>{`, `}<span className="str">"Postgresql"</span>{`, `}<span className="str">"MySQL"</span>{`],
  `}<span className="key">"focus"</span>{`: [`}<span className="str">"APIs"</span>{`, `}<span className="str">"Performance"</span>{`, `}<span className="str">"GenAI"</span>{`],
  `}<span className="key">"college"</span>{`: `}<span className="str">"IIT PATNA"</span>{`,
}`}
            </pre>
            <div style={{ marginTop: 10 }}>
              <span className="prompt">$</span> echo "Let’s build something great."{' '}
              <span className="caret">&nbsp;</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
