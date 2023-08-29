import '../../App.css';
import './About.css';
import {ShapesSvg} from '../../components/index'; //vectors of on about image

function About() {
 
  return (
    <section className="about section" id="about">
        <span className=" about__empty-bg-tags empty-bg-tags liner-gradient-2 " />
        <h1>About Me</h1>
        <a 
            href="Resume - Kritagya Singh Chouhan.pdf" 
            download="Resume - Kritagya Singh Chouhan.pdf" 
            target="_blank" 
            className={"inline-link resume"}
        >
            Resume
        </a>
        <div className={"about__inner"}>
            <div className="text-container">
                <p>Hi, My name is Kritagya Singh Chouhan, and I recently earned a Bachelor degree in Computer Applications. During my graduation, I developed an interest in web development and web designing. My proficiency in languages like HTML, CSS, and JavaScript, as well as frameworks like Bootstrap, MaterialUI, Tailwind, React, and AngularJS, along with my deep expertise in creating appealing user interfaces, allow me to produce immersive digital experiences.</p><br />
                <p>I'm a front-end developer who also has a background in backend development. I'm developing innovative and technically sound solutions by architecting robust systems using NodeJS, Express, MongoDB, and firebase.</p><br />
                <p>My journey took an enriching turn during my tenure as a web development intern at {" "} <a className="inline-link" href="https://www.cashe.co.in/" target="_blank" rel="noopener noreferrer">Cashe</a>, where I navigated real-world challenges & refined my skills. My current focus is on creating top-notch projects that expertly combine art and technology. I want to demonstrate my capacity to deliver effective solutions by fusing my technical expertise with creative ideas.</p><br />
                <p>My objective as I continue on this road is to make the most of my abilities so that I may effectively contribute to web development teams and build user-friendly websites that provide results. I am equipped to take on new problems and improve the digital landscape thanks to a solid foundation, expertise in both frontend and backend technologies, and a drive for excellence.</p><br />
            
            </div>
            <div className="image-container">
            <figure className={"card"}>
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
