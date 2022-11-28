import './BlogsPage.css';
import {Article} from '../../components/index';
import {articleList} from '../../data';
import { useElementOnScreen } from '../../intersectionObserver';

function BlogsPage() {

  const [containerRef, isVisible ] = useElementOnScreen({
    root: null,
    rootMargin: "0px 0px -260px 0px",
    threshold: 0,
  }); 

  return (
    <main className='blogs_page' ref={containerRef}>
        <div className="bp__heading">
            <h1 className={isVisible ? " slide-down fade-in --appear" : "slide-down fade-in"}>Blogs</h1>
        </div>
        <div className="bp__wrapper">
            <ol className={isVisible ? "bp__list slide-up fade-in --appear" : "bp__list slide-up fade-in"}>
            { articleList.map((element, index) => {
              return  (
                <Article 
                  id= {element.key}
                  link = {element.link}
                  title= {element.title}
                  description= {element.description}
                  date= {element.date}
                />
              )
            })
          }

            </ol>
        </div>
    </main> 

  )
}

export default BlogsPage;
