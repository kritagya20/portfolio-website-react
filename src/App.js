import React, { useState } from 'react';
import './App.css';
import { workList } from './data';
import { Socials, Footer } from './sections/index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { Home } from './pages/index';
import ScrollToTop from './scrollToTop';
import { Loader } from './components';

function App() {
  const [loading, setLoading] = useState(true);
  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 1250);
  }

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <section className="app">
          <Router basename="/portfolio-website-react">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
          <Socials />
          <Footer />
        </section>
      )}
    </>
  );
}

export default App;