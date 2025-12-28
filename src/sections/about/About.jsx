import '../../App.css';
import './About.css';
import { TechModal, TechScroller} from '../../components'; //vectors of on about image
import { useState } from 'react';


function About() {

    const [techModal, setTechModal] = useState(false);

    const openTechModal = () => ( setTechModal(true) );

    const closeTechModal = () => ( setTechModal(false) );

 
  return (
    <section className="about section" id="about">
        <span className=" about__empty-bg-tags empty-bg-tags liner-gradient-2 " />
        <h1>About Me</h1>
        <div className={"about__inner"}>
            <div className="text-container">
                <p>
                    Hi, I am <span>Kritagya Singh Chouhan</span>, a Software Development Engineer in Test (SDET). My journey into software engineering began in <span>2020</span>, evolving from development fundamentals into a strong focus on building reliable, scalable automation systems. I hold a Bachelor’s degree in Computer Applications and bring a solid understanding of both frontend and backend systems. <br/> <br/> 
                    At <span>Cashe</span>, I worked on automating critical fintech workflows and building mobile test frameworks from scratch. Currently at <span>Jio</span>, one of India’s largest technology platforms, I focus on regression automation, CI/CD integration, and improving test visibility through internal tooling. <br/> <br/> 
                    Beyond work, I am a <span>sports enthusiast</span>, especially passionate about football and cricket. Driven by curiosity and continuous learning, I enjoy strengthening quality engineering practices by combining technical depth with practical, impact-driven automation. <br/> 
                </p>

            </div>
            <div className="techScroller-container" onClick={openTechModal}>
                <TechScroller />
            </div>
            <div className='resume-container'>
                <span>
                    <a 
                        href="Resume - Kritagya Singh Chouhan.pdf" 
                        download="Resume - Kritagya Singh Chouhan.pdf" 
                        target="_blank" 
                        className={"resume"}                        
                        title='Resume - Kritagya Singh Chouhan.pdf' 
                    >
                    
                    Download Resume
                    </a>               

                </span>
            </div>
        </div>
    </section>
  )
}

export default About
