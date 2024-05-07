import './Projects.css'; //component css
import { Projectimg1, Projectimg2, Projectimg3, Projectimg0, ProjectimgMob0, ProjectimgMob1, ProjectimgMob2, ProjectimgMob3} from '../../images/index'; // project images
import { HostedProject, Carousel, CarouselItem } from '../../components/index'; // different components
import { Link } from "react-router-dom"; // routing 
import {hostedProjectList} from '../../data';//fetching content of the component

function Projects() {
            
    const content = hostedProjectList.slice().reverse();
    const imgArray = [Projectimg0, Projectimg1, Projectimg2, Projectimg3];
    const imgArrayMob = [ProjectimgMob0, ProjectimgMob1, ProjectimgMob2, ProjectimgMob3];
 
  return (
    <section className="projects section" id="projects">
        <span className=" projects__empty-bg-tags empty-bg-tags liner-gradient-1 " />
        <h1 className="slide-down">Recent Projects</h1>
        <Link className="inline-link" to='/archives/'>
            view archive
        </Link >
        <div className="projects__wrapper">
            <Carousel>
                { content.map((element, index) => {
                    return  (
                        <CarouselItem key={index} className='ip__container'>
                            <HostedProject 
                                key={element.key}
                                id= {element.key}
                                link= {element.link}
                                githubLink= {element.githubLink}
                                title= {element.title}
                                description= {element.description}
                                tech= {element.tech}
                                img = {imgArray[index]}
                                imgMob={imgArrayMob[index]}
                            />
                        </CarouselItem>
                    )
                    })
                }            
            </Carousel>
        </div>
    </section>

  )
}

export default Projects;





