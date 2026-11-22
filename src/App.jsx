import { useEffect, useState, lazy, Suspense } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Playground from './components/games/Playground.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Socials from './components/Socials.jsx';

const StarfieldCanvas = lazy(() => import('./components/StarfieldCanvas.jsx'));

export default function App() {
  const { scrollYProgress } = useScroll();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.__dismissSubtleLoader) {
      window.__dismissSubtleLoader(() => {
        setIsReady(true);
      });
    } else {
      setIsReady(true);
    }
  }, []);

  return (
    <div className="app">
      <Suspense fallback={null}>
        <StarfieldCanvas />
      </Suspense>
      <CustomCursor />
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <Navbar />
      <main>
        <Hero isReady={isReady} />
        <About />
        <Experience />
        <Projects />
        <Playground />
        <Contact />
      </main>

      <Socials />
      <Footer />
    </div>
  );
}
