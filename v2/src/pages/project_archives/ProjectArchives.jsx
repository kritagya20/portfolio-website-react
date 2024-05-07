import { ArchiveProject } from "../../components/index";
import "./ProjectArchives.css";
import {
  Archiveimg0,
  Archiveimg1,
  Archiveimg2,
  Archiveimg3,
  Archiveimg4,
  Archiveimg5,
  Archiveimg6,
  Archiveimg7,
  Archiveimg8,
  Archiveimg9,
  ArchiveimgMob0,
  ArchiveimgMob1,
  ArchiveimgMob2,
  ArchiveimgMob3,
  ArchiveimgMob4,
  ArchiveimgMob5,
  ArchiveimgMob6,
  ArchiveimgMob7,
  ArchiveimgMob8,
  ArchiveimgMob9,
} from "../../images";

function ProjectArchives(props) {
  const contentArray = props.children;
  const imgArray = [
    Archiveimg0,
    Archiveimg1,
    Archiveimg2,
    Archiveimg3,
    Archiveimg4,
    Archiveimg5,
    Archiveimg6,
    Archiveimg7,
    Archiveimg8,
    Archiveimg9,
  ];

  const imgArrayMob = [    
  ArchiveimgMob0,
  ArchiveimgMob1,
  ArchiveimgMob2,
  ArchiveimgMob3,
  ArchiveimgMob4,
  ArchiveimgMob5,
  ArchiveimgMob6,
  ArchiveimgMob7,
  ArchiveimgMob8,
  ArchiveimgMob9,
  ];

  return (
    <section className="archive__wrapper">
      <ul className="archive__card-list">
        {contentArray.map((element, index) => {
          return (
            <ArchiveProject
              key={index}
              index={index + 1}
              id={element.key}
              githubLink={element.githubLink}
              title={element.title}
              description={element.description}
              tech={element.tech}
              img={imgArray[index]}
              imgMob={imgArrayMob[index]}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default ProjectArchives;
