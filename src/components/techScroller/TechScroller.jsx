import React, { useEffect, useState } from 'react';
import './TechScroller.css';

const Demo = () => {
  const technologiesList = [
    {
      category: 'Frontend',
      skills: [
        { className: 'reactjs', name: 'React', imgSrc: require('../../images/svg/react.svg').default },
        { className: 'css', name: 'CSS', imgSrc: require('../../images/svg/css3.svg').default },
        { className: 'js', name: 'JavaScript', imgSrc: require('../../images/svg/javascript.svg').default },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { className: 'nodejs', name: 'NodeJS', imgSrc: require('../../images/svg/nodejs.svg').default },
        { className: 'express', name: 'Express', imgSrc: require('../../images/svg/expressjs.svg').default },
        { className: 'java', name: 'Java', imgSrc: require('../../images/svg/java.svg').default },
      ],
    },
    {
      category: 'UI Framework',
      skills: [
        { className: 'bootstrap', name: 'Bootstrap', imgSrc: require('../../images/svg/bootstrap.svg').default },
        { className: 'material-ui', name: 'MaterialUI', imgSrc: require('../../images/svg/material-ui.svg').default },
        { className: 'tailwind', name: 'Tailwind', imgSrc: require('../../images/svg/tailwind.svg').default },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { className: 'git', name: 'Git', imgSrc: require('../../images/svg/git.svg').default },
        { className: 'jenkins', name: 'Jenkins', imgSrc: require('../../images/svg/jenkins.svg').default },        
        { className: 'docker', name: 'Docker', imgSrc: require('../../images/svg/docker.svg').default },
      ],
    },
    
    {
      category: 'Automation',
      skills: [
        { className: 'Selenium', name: 'selenium', imgSrc: require('../../images/svg/selenium.svg').default },
        { className: 'appium', name: 'Appium', imgSrc: require('../../images/svg/appium.svg').default },        
        { className: 'docker', name: 'Docker', imgSrc: require('../../images/svg/docker.svg').default },
      ],
    },
  ];

// State to keep track of the active category index
const [activeCategory, setActiveCategory] = useState(0);

// useEffect to handle the interval for changing categories
useEffect(() => {
  // Set up an interval to change the active category every 3 seconds
  const intervalId = setInterval(() => {
    // Update the active category to the next one in a circular manner
    // - currentValue is the current active category
    // - (currentValue + 1) calculates the index of the next category
    // - % technologiesList.length ensures that the index stays within the bounds of the array
    setActiveCategory((currentValue) => (currentValue + 1) % technologiesList.length);
  }, 3000);

  // Clean up the interval when the component is unmounted
  return () => clearInterval(intervalId);
}, [technologiesList.length]);

  return (
    <>
      <div className="tech-scroller">
        <div className="tech-scroller_wrap">
          <h4>Technologies</h4>
          <div className="tech-scroller_category" >
            {technologiesList.map((obj, index) => (
              <div key={index} className={index === activeCategory ? 'active' : 'inactive'}>
                <ul className='category_list'>
                  {obj.skills.map(({ className, imgSrc, name }) => (
                    <li key={className} className={`category_list__li ${className}`}>
                      <img className="image" src={imgSrc} alt={name} />
                      <p className="name">{name}</p>
                    </li>
                  ))}
                </ul>
                <h5 className='underliner'>{obj.category}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
