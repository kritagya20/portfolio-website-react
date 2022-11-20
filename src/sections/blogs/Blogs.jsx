import {ListedBlog} from '../../components/index';
import './Blogs.css';
import { Link } from "react-router-dom";
import { useElementOnScreen } from '../../intersectionObserver';

function Blogs() {
  const [containerRef, isVisible ] = useElementOnScreen({
    root: null,
    rootMargin: "0px 0px -300px 0px",
    threshold: 0,
  }); 
  return (
    <section className="blogs section" id="blogs" ref={containerRef}>
        <span className=" blogs__empty-bg-tags empty-bg-tags liner-gradient-1 " />
        <h1>Blogs</h1>
        <div className={isVisible ? "blogs__wrapper fade-in --appear" : "blogs__wrapper fade-in"}>
            <ul className="blogs__grid">
              <ListedBlog />
            </ul>
            <Link className="btn more" to='/blogs/'>
              Read More
            </Link >
        </div>
    </section>

  )
}

export default Blogs
