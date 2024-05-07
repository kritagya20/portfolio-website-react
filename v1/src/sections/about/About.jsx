import '../../App.css';
import './About.css';
import {ShapesSvg} from '../../components/index'; //vectors of on about image
import { useElementOnScreen } from '../../intersectionObserver'; //intersection
import { Link } from "react-router-dom"; // routing 
import { pdf } from "../../images/resume.pdf"

function About() {

    const [containerRef, isVisible ] = useElementOnScreen({
        root: null,
        rootMargin: "-260px 0px -260px 0px",
        threshold: 0,
    }); 
    
  return (
    <section className="about section" id="about" ref={containerRef}>
        <span className=" about__empty-bg-tags empty-bg-tags liner-gradient-2 " />
        <h1 className={isVisible ? " slide-down fade-in --appear" : "slide-down fade-in"}>About Me</h1>
        <a 
            href="resume.pdf" 
            download="resume.pdf" 
            target="_blank" 
            className={isVisible ? "inline-link resume fade-in --appear" : "inline-link resume fade-in"}
        >
            Resume
        </a>
        <div className={isVisible ? "about__inner slide-up fade-in --appear" : "about__inner slide-up fade-in"}>
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
            <figure className={isVisible ? "card fade-in --appear" : "card fade-in"}>
                < ShapesSvg id="shapes" className= "card__svg"/>
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
