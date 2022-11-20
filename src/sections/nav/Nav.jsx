import './Nav.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 


function Nav() {
    const [navbar, setNavbar] = useState(false);
    const [toggle, setToggle] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 1) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
    }

    useEffect(() => {
        changeBackground();
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground);
    });


  return (
    <header className={navbar ? "primary-header window-scroll" : "primary-header"} >

        <div className="resume-container">
            <li>
                <a
                    className="resume"
                    href="./resume/resume.pdf"
                    download="resume"
                    title="Resume"
                    target="_blank"
                >
                    Resume
                </a>
            </li>
        </div>
        <div className="nav-toggle-container">
            <button
                className={toggle ? "nav-toggle visible" : "nav-toggle"} 
                aria-controls="primary-navigation"
                onClick={ () => {setToggle(!toggle)}}
                >
                <span className="line" />
                <span className="line" />
                <span className="line" />
            </button>
        </div>
        <nav>
            <ul
            className={toggle ? "primary-navigation visible" : "primary-navigation"}
            id="primary-navigation"
            >
            <li>
                <a className="nav-link" href="#hero">
                Home
                </a>
            </li>
            <li>
                <a className="nav-link" href="#about">
                About
                </a>
            </li>
            <li>
                <a className="nav-link" href="#skills">
                Skills
                </a>
            </li>
            <li>
                <a className="nav-link" href="#projects">
                Projects
                </a>
            </li>
            <li>
                <a className="nav-link" href="#work">
                Work
                </a>
            </li>
            <li>
                <a className="nav-link" href="#blogs">
                Blogs
                </a>
            </li>
            <li>
                <a className="nav-link" href="#contact">
                Contact
                </a>
            </li>
            </ul>
        </nav>        
    </header>
)}

export default Nav
