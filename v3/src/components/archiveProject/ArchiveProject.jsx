import React from 'react';
import { GithubSvg } from '../index';
import './ArchiveProject.css';

function IndividualProjectArchive(props) {
    const {
        index, 
        title, 
        id, 
        githubLink: git, 
        description, 
        tech, 
        img,
        imgMob
    } = props;


    return (
        <div id={id} className={`archive__card`}>
            <div className="archive__content-block">
                <div className="head-container">
                    <p className="overliner">Archived Project {index}</p>
                    <h3 className="title">
                        <a href={git} target="_blank" rel="noopener noreferrer">
                            {title}
                        </a>
                    </h3>
                    <p className="description">
                        {description}
                    </p>
                    <ul className="tech-list">
                        {tech.map((techItem, techIndex) => (
                            <li key={techIndex}>{techItem}</li>
                        ))}
                    </ul>
                    <div className="link-container">
                        <a href={git} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                            <GithubSvg />
                        </a>
                    </div>
                </div>
            </div>
            <div className="archive__image-block">
                <picture className='figure'>
                    <source srcSet={img} media="(min-width: 800px)" className="image"/>
                    <img src={imgMob} alt="Image" className="image"/>
                </picture>
            </div>
        </div>
    );
}

export default IndividualProjectArchive;
