import {ListedBlog} from '../../components/index';
import './Blogs.css';
import { Link } from "react-router-dom";
import { useElementOnScreen } from '../../intersectionObserver';

function Blogs() {
  const [containerRef, isVisible ] = useElementOnScreen({
    root: null,
    rootMargin: "0px 0px -275px 0px",
    threshold: 0,
  }); 
  return (
    <section className="blogs section" id="blogs" ref={containerRef}>
        <span className=" blogs__empty-bg-tags empty-bg-tags liner-gradient-1 " />
        <h1 className={isVisible ? " slide-down fade-in --appear" : "slide-down fade-in"}>Blogs</h1>
        <div className="blogs__wrapper">
            <ul className={isVisible ? "blogs__grid slide-up fade-in --appear" : "blogs__grid slide-up fade-in"}>
              <ListedBlog />
            </ul>
            <Link className={isVisible ? "btn more fade-in --appear" : "btn more fade-in"} to='/blogs/'>
              Read More
            </Link >
        </div>
    </section>

  )
}

export default Blogs
