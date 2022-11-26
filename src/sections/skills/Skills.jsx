import './Skills.css';
import { useElementOnScreen } from '../../intersectionObserver';

function Skills() {

  const [containerRef, isVisible ] = useElementOnScreen({
    root: null,
    rootMargin: "0px 0px -300px 0px",
    threshold: 0,
  });  

  return (
    <section className="skills section" id="skills" ref={containerRef}>
      <span className=" skills__empty-bg-tags empty-bg-tags liner-gradient-1 " />
      <h1 className={isVisible ? " slide-down fade-in --appear" : "slide-down fade-in"}>Technologies</h1>
      <ul  className={isVisible ? "skills__grid slide-up fade-in --appear" : "skills__grid slide-up fade-in"}>
        <li className="individual-skill html">
          <img
            className="skills__image"
            src={require("../../images/svg/html-5.svg").default }
            alt="html"
          />
          <p className="name"> HTML </p>
        </li>
        <li className="individual-skill css" >
          <img className="skills__image" src={require("../../images/svg/css3.svg").default } alt="css" />
          <p className="name"> CSS </p>
        </li>
        <li className="individual-skill js" >
          <img
            className="skills__image"
            src={require("../../images/svg/javascript.svg").default }
            alt="javascript"
          />
          <p className="name"> JavaScript </p>
        </li>
        <li className="individual-skill reactjs" >
          <img
            className="skills__image"
            src={require("../../images/svg/react.svg").default }
            alt="reactjs"
          />
          <p className="name"> ReactJS </p>
        </li>
        <li className="individual-skill redux" >
          <img
            className="skills__image"
            src={require("../../images/svg/redux.svg").default }
            alt="jquery"
          />
          <p className="name">Redux</p>
        </li>
        <li className="individual-skill nodejs" >
          <img
            className="skills__image"
            src={require("../../images/svg/nodejs.svg").default }
            alt="nodejs"
          />
          <p className="name">NodeJS</p>
        </li>
        <li className="individual-skill express" >
          <img
            className="skills__image"
            src={require("../../images/svg/expressjs.svg").default }
            alt="express"
          />
          <p className="name"> Express </p>
        </li>
        <li className="individual-skill bootstrap" >
          <img
            className="skills__image"
            src={require("../../images/svg/bootstrap.svg").default }
            alt="bootstrap"
          />
          <p className="name"> Bootstrap </p>
        </li>
        <li className="individual-skill material-ui" >
          <img
            className="skills__image"
            src={require("../../images/svg/material-ui.svg").default }
            alt="materialui"
          />
          <p className="name"> MaterialUI </p>
        </li>
        <li className="individual-skill tailwind" >
          <img
            className="skills__image"
            src={require("../../images/svg/tailwind.svg").default }
            alt="tailwind"
          />
          <p className="name"> Tailwind </p>
        </li>
      </ul>
    </section>


  )
}

export default Skills
