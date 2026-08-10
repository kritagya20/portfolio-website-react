import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import StarfieldCanvas from './components/StarfieldCanvas.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Playground from './components/games/Playground.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Socials from './components/Socials.jsx';

export default function App() {
  const { scrollYProgress } = useScroll();
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <div className="app">
      <StarfieldCanvas />
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Playground onToast={setToast} />
        <Contact onToast={setToast} />
      </main>

      <Socials />
      <Footer />
      {toast && (
        <motion.div
          className="toast"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
        >
          {toast}
        </motion.div>
      )}
    </div>
  );
}
