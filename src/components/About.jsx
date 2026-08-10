import { motion } from 'framer-motion';
import { aboutHighlights } from '../data/portfolio.js';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">
            <span className="dot" /> About me
          </span>
          <h2 className="section-title">
            Allow me to <span className="accent">introduce</span> myself
          </h2>
          <p className="section-sub">
            A short story of where I’ve been and the kind of work I love shipping.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p>
              I’m <strong> Kritagya Singh Chouhan</strong>, a Software Engineer passionate about building
              scalable, reliable, and production-ready systems. What excites me most about engineering
              is solving real-world problems through software—whether that means designing backend
              services, optimizing APIs, working with databases, or containerizing applications with
              <strong> Docker</strong>. I enjoy understanding how every piece of a system fits together
              and contributes to delivering a great user experience.
            </p>

            <p>
              Currently at <strong>Medkart</strong>, I build high-performance backend systems primarily
              using <strong>Go (Golang)</strong>. My experience extends beyond development alone; I believe
              great software is not defined by how quickly it ships, but by how reliably it performs once
              users start depending on it. To support that philosophy, I leverage my background in
              <strong> Java</strong>, <strong>Selenium</strong>, and <strong>Rest-Assured</strong> to build
              robust API and UI automation frameworks that continuously validate product quality and
              accelerate confident releases.
            </p>

            <p>
              I enjoy taking ownership of problems end-to-end—from system design and implementation
              to automation, troubleshooting, and performance optimization. My experience across both
              development and quality engineering allows me to approach software from multiple
              perspectives: how it should be built, how it should behave under stress, and how it can
              continue scaling as requirements evolve. Outside of tech, I’m a football and cricket
              enthusiast who enjoys turning complex problems into clean, dependable software solutions.
            </p>
          </motion.div>

          <div className="about-list">
            {aboutHighlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="about-item"
                initial={{ x: 40, opacity: 0, scale: 0.95 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.175, 0.885, 0.32, 1.275] }}
              >
                <div className="ico" aria-hidden>
                  {h.icon}
                </div>
                <div>
                  <h4>{h.title}</h4>
                  <p>{h.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
