import './App.css';
import {archiveProjectList} from './data';
import { Socials, Footer } from './sections/index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import {BlogsPage, Home, ProjectArchives} from './pages/index';

function App() {
  return (
    <section className="app">
      <Router>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/archives/" element= {<ProjectArchives>{archiveProjectList}</ProjectArchives>} />
          <Route path="/blogs/" element= {<BlogsPage></BlogsPage>} />
        </Routes>                    
      </Router>   
      < Socials />
      < Footer />
    </section>
  );
}

export default App;
