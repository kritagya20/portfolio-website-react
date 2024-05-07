import './Projects.css'; //component css
import { Projectimg1, Projectimg2, Projectimg3, Projectimg0, Projectimg4 } from '../../images/index'; // project images
import { HostedProject, Carousel, CarouselItem } from '../../components/index'; // different components
import { Link } from "react-router-dom"; // routing 
import {hostedProjectList} from '../../data';//fetching content of the component
import { useElementOnScreen } from '../../intersectionObserver'; //intersection obeserver logic

function Projects() {
        
    const [containerRef, isVisible ] = useElementOnScreen({
        root: null,
        rootMargin: "-260px 0px -260px 0px",
        threshold: 0,
    });     

    const content = hostedProjectList;
    const imgArray = [Projectimg0, Projectimg1, Projectimg2, Projectimg3, Projectimg4];
 
  return (
    <section className="projects section" id="projects" ref={containerRef}>
        <span className=" projects__empty-bg-tags empty-bg-tags liner-gradient-1 " />
        <h1 className={isVisible ? " slide-down fade-in --appear" : "slide-down fade-in"}>Recent Projects</h1>
        <Link className={isVisible ? "inline-link fade-in --appear" : "inline-link fade-in"} to='/archives/'>
            view the archive
        </Link >
        <div className={isVisible ? "projects__wrapper slide-up fade-in --appear" : "projects__wrapper slide-up fade-in"}>
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





