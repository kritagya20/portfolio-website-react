import { useEffect, useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Preloader from './components/Preloader.jsx';
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
  const [toast, setToast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Remove static HTML fallback preloader once React mounts
  useEffect(() => {
    const el = document.getElementById('static-preloader');
    if (el) el.remove();
  }, []);

  const handlePreloadComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={handlePreloadComplete} />
        )}
      </AnimatePresence>

      <motion.div
        key="site-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Suspense fallback={null}>
          <StarfieldCanvas />
        </Suspense>
        <CustomCursor />
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
      </motion.div>

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
