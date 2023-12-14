import React from 'react';
import './TechModal.css';

const skillItems = [
  {
    className: 'html',
    imgSrc: require('../../images/svg/html-5.svg').default,
    name: 'HTML'
  },
  {
    className: 'css',
    imgSrc: require('../../images/svg/css3.svg').default,
    name: 'CSS'
  },
  {
    className: 'js',
    imgSrc: require('../../images/svg/javascript.svg').default,
    name: 'JavaScript'
  },
  {
    className: 'reactjs',
    imgSrc: require('../../images/svg/react.svg').default,
    name: 'React'
  },
  {
    className: 'redux',
    imgSrc: require('../../images/svg/redux.svg').default,
    name: 'Redux'
  },
  {
    className: 'nodejs',
    imgSrc: require('../../images/svg/nodejs.svg').default,
    name: 'NodeJS'
  },
  {
    className: 'express',
    imgSrc: require('../../images/svg/expressjs.svg').default,
    name: 'Express'
  },
  { 
    className: 'firebase', 
    imgSrc: require('../../images/svg/firebase.svg').default ,
    name: 'Firebase', 
  },
  {
    className: 'bootstrap',
    imgSrc: require('../../images/svg/bootstrap.svg').default,
    name: 'Bootstrap'
  },
  {
    className: 'material-ui',
    imgSrc: require('../../images/svg/material-ui.svg').default,
    name: 'MaterialUI'
  },
  {
    className: 'tailwind',
    imgSrc: require('../../images/svg/tailwind.svg').default,
    name: 'Tailwind'
  },
  {
    className: 'git',
    imgSrc: require('../../images/svg/git.svg').default,
    name: 'git'
  }
];


function Skills({isOpen, onClose}) {

  return (
    <section className={isOpen ?`tech-modal-open tech-modal-overlay skills`: `tech-modal-overlay skills`} id="skills">
      <div className="tech-modal">
        <button className="tech-modal__close-button" onClick={onClose}>
          &#215;
        </button>
      <h1 >Technologies</h1>
      <ul className={`skills__grid`}>
        {skillItems.map(({ className, imgSrc, name }) => (
          <li key={className} className={`individual-skill ${className}`}>
            <img className="skills__image" src={imgSrc} alt='logo' />
            <p className="name">{name}</p>
          </li>
        ))}
      </ul>
      </div>
      <span className="skills__empty-bg-tags empty-bg-tags liner-gradient-1" />
    </section>
  );
}

export default Skills;
