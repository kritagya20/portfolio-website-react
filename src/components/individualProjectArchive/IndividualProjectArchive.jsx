import { GithubSvg } from '../index';
import './IndividualProjectArchive.css';
import { useElementOnScreen } from '../../intersectionObserver';

function IndividualProjectArchive(props) {

    const [containerRef, isVisible ] = useElementOnScreen({
        root: null,
        rootMargin: "0px 0px -200px 0px",
        threshold: 0,
    });  

  return (
    <div id={props.id} className="archive__card" ref={containerRef}>
        <div className= {isVisible ? "archive__content-block fade-in --appear" : "archive__content-block fade-in"}>
            <div className="head-container">
                <p className="overliner">Archived Project</p>
                <h3 className="title">
                    <a href={props.githubLink} target="_blank">
                        {props.title}
                    </a>
                </h3>
                <p className="description">
                    {props.description}
                </p>
                <ul className="tech-list">
                    {props.tech.map((tech) => {
                        return <li>{tech}</li>
                    })}
                </ul>
                <div className="link-container">
                    <a href={props.githubLink} aria-label="GitHub Link" target="_blank">
                        < GithubSvg />
                    </a>
                </div>
            </div>
        </div>
        <div className= {isVisible ? "archive__image-block fade-in --appear" : "archive__image-block fade-in"}>
            <figure>
            <img className="image" src={props.img} />
            </figure>
        </div>
    </div>

  )
}

export default IndividualProjectArchive;
