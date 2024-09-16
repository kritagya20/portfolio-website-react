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
                    Hi, I am <span>Kritagya Singh Chouhan</span>, a web development enthusiast. My journey into the world of web development began in <span>2020</span> as a hobby, evolving into a genuine passion. Graduating with a Bachelor's degree in Computer Applications, I am currently pursuing my Master's (Mtech) at BITS Pilani. <br/>
                    As a web development intern at <span>Cashe</span>, I navigated real-world challenges and honed my skills. Joining <span>Jio</span>, one of India's largest startups, I continue to enrich my professional experience. <br/>
                    Beyond coding, I am a <span>sports enthusiast</span>, particularly in footballand cricket. Excited to explore new technologies and broaden my knowledge&#x1F50D;, I aim to combine technical expertise with creative ideas for impactful web development.
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
                        className={" resume"}                        
                        title='Download CV' 
                    >
                    
                    Download CV
                    </a>               

                </span>
            </div>
        </div>
        <TechModal  isOpen={techModal} onClose={closeTechModal}/>
    </section>
  )
}

export default About
