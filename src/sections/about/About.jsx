import { React, useRef, useState} from 'react';
import '../../App.css';
import './About.css';

import {ShapesSvg} from '../../components/index';

import { useElementOnScreen } from '../../intersectionObserver';


function About() {

    const [containerRef, isVisible ] = useElementOnScreen({
        root: null,
        rootMargin: "0px 0px -280px 0px",
        threshold: 0,
    }); 
    
  return (
    <section className="about section" id="about" ref={containerRef}>
        <span className=" about__empty-bg-tags empty-bg-tags liner-gradient-2 " />
        <h1>About Me</h1>
        <div className={isVisible ? "about__inner fade-in --appear" : "about__inner fade-in"}>
            <div className="text-container">
            <p>
                Hi, My name is Kritagya Singh Chouhan and I love creating things that
                live on the internet. I'm currently pursing my bachelor's degree in
                Computer Science. I had created numerous web-based projects using
                popular languages like HTML, CSS, JS, NodeJS, Bootstrap, AngularJS,
                React, WordPress, MaterialUI, Express and many more.
            </p>
            <br />
            <p>
                As count of my experience I had the privilege of working as a web
                developer intern at {" "}
                <a
                className="inline-link"
                href="https://www.cashe.co.in/"
                target="_blank"
                >
                Cashe
                </a>
                . My main focus these days is on mastering MERN stack developement by
                building accessible and optimised websites.
            </p>
            </div>
            <div className="image-container">
            <figure className="card">
                < ShapesSvg id="shapes" className="card__svg"/>
                <img 
                src={require("../../images/about.jpeg")}
                title="Kritagya Singh Chouhan"
                className="card__image"
                />
            </figure>
            </div>
        </div>
    </section>
  )
}

export default About
