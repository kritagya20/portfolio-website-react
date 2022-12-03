import React, { useState } from 'react';
import './App.css';
import {archiveProjectList} from './data';
import { Socials, Footer } from './sections/index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import {BlogsPage, Home, ProjectArchives} from './pages/index';
import ScrollToTop from './scrollToTop';

function App() {
  const [loading, setLoading] = useState(true);
  const loader = document.getElementById('loader');
  if(loader) {
    setTimeout(()=>{
      loader.style.display = 'none';
      setLoading(false);
    }, 2500);
  }
  return (
    !loading && (
      <section className="app">
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element= {<Home/>} />
            <Route path="/archives/" element= {<ProjectArchives>{archiveProjectList}</ProjectArchives>} />
            <Route path="/blogs/" element= {<BlogsPage></BlogsPage>} />
          </Routes>                    
        </Router>   
        < Socials />
        < Footer />
      </section>
    )
  );
}

export default App;
