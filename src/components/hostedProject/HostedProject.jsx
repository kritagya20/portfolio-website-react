import { ExternalSvg, GithubSvg } from "../index";
import "./HostedProject.css";

function HostedProject(props) {
  return (
    <div id={props.id} className="individual-project">
      {/* PROJECT-CONTENT */}
      <div className="project__wrapper">
      <a href={props.link} target="_blank">
        <header>
          {/* PROJECT-HEADING */}
          <h2 className="project__title">            
            {props.title}            
          </h2>
          {/* PROJECT-DESCRIPTION */}
          <p className="project__description">{props.description}</p>
          {/* PROJECT-TECHNOLOGY-LIST */}
          <ul className="project__tech-list">
            {props.tech.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </header>
      </a>  
        <footer className="project__links">
          {/* PROJECT-EXTERNAL-ICON-LINK */}
          <div className="external-link">
            <a
              href={props.link}
              aria-label="External Link"
              className="external"
              target="_blank"
            >
              <ExternalSvg />
            </a>
          </div>
          {/* PROJECT-GITHUB-ICON-LINK */}
          <div className="github-link">
            <a
              href={props.githubLink}
              aria-label="GitHub Link"
              className="github"
              target="_blank"
            >
              <GithubSvg />
            </a>
          </div>
        </footer>
      </div>
      {/* PROJECT-IMAGE */}
      <figure className="project__image-block">
        <img src={props.img} className="project__image" />
      </figure>
    </div> 
  );
}

export default HostedProject;
