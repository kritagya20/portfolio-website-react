import { ExternalSvg, GithubSvg } from "../index"; //svg 
import "./HostedProject.css"; //styles

function HostedProject(props) {
  const {
    id: id, 
    link: link, 
    githubLink: githubLink,
    title: title, 
    description: description, 
    tech: tech, 
    img: img,
  } = props;
  return (
    <div id={id} className="individual-project">
      {/* PROJECT-CONTENT */}
      <div className="project__wrapper">
      <a href={link} target="_blank">
        <header>
          {/* PROJECT-HEADING */}
          <h2 className="project__title">            
            {title}            
          </h2>
          {/* PROJECT-DESCRIPTION */}
          <p className="project__description">{description}</p>
          {/* PROJECT-TECHNOLOGY-LIST */}
          <ul className="project__tech-list">
            {tech.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </header>
      </a>  
        <footer className="project__links">
          {/* PROJECT-EXTERNAL-ICON-LINK */}
          <div className="external-link">
            <a
              href={link}
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
              href={githubLink}
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
        <img src={img} className="project__image" />
      </figure>
    </div> 
  );
}

export default HostedProject;
