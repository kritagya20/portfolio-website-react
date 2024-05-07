import { GithubSvg } from '../index';
import './IndividualProjectArchive.css';
import { useElementOnScreen } from '../../intersectionObserver';

function IndividualProjectArchive(props) {

    const [containerRef, isVisible ] = useElementOnScreen({
        root: null,
        rootMargin: "0px 0px -260px 0px",
        threshold: 0,
    });  

    const {
        index: index, 
        title: title, 
        id:id, 
        githubLink: git, 
        description: description, 
        tech: tech, 
        img: img
    } = props;

  return (
    <div id={id} className="archive__card" ref={containerRef}>
        <div className= {isVisible ? "archive__content-block slide-up fade-in --appear" : "archive__content-block slide-up fade-in"}>
            <div className="head-container">
                <p className="overliner">Archived Project {index}</p>
                <h3 className="title">
                    <a href={git} target="_blank">
                        {title}
                    </a>
                </h3>
                <p className="description">
                    {description}
                </p>
                <ul className="tech-list">
                    {tech.map((tech) => {
                        return <li>{tech}</li>
                    })}
                </ul>
                <div className="link-container">
                    <a href={git} aria-label="GitHub Link" target="_blank">
                        < GithubSvg />
                    </a>
                </div>
            </div>
        </div>
        <div className= {isVisible ? "archive__image-block slide-up fade-in --appear" : "archive__image-block slide-up fade-in"}>
            <figure>
            <img className="image" src={img} />
            </figure>
        </div>
    </div>

  )
}

export default IndividualProjectArchive;
