import {IndividualProjectArchive} from '../../components/index';
import './ProjectArchives.css';
import { Archiveimg0, Archiveimg1, Archiveimg2, Archiveimg3, Archiveimg4, Archiveimg5, Archiveimg6, } from '../../images/index';


function ProjectArchives(props) {    

  const contentArray = props.children;
  const imgArray = [Archiveimg0, Archiveimg1, Archiveimg2, Archiveimg3, Archiveimg4, Archiveimg5, Archiveimg6,];

  

  return (
    <section className="archive__wrapper">
        <ul className="archive__card-list">

          { contentArray.map((element, index) => {
              return  (
                <IndividualProjectArchive 
                  index = {index+1}
                  id= {element.key}
                  githubLink= {element.githubLink}
                  title= {element.title}
                  description= {element.description}
                  tech= {element.tech}
                  img = {imgArray[index]}
                />
              )
            })
          }
        </ul>
    </section>

  );
}

export default ProjectArchives;
