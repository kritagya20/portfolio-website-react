import './ListedBlog.css';
import {articleList} from '../../data';
import {Blogimg} from '../../images/index';


function ListedBlog() {
    const {
        key: key, 
        title: title, 
        description: description, 
        date: date 
    } = articleList[0];

  return (
        <article className="individual-blog" id={key}>
            <a
            className="blog-link"
            href="https://blog01.kritagya.in/"
            target="_blank"
            >
                {/* BLOG-IMAGE */}
                <div className="blog__image">
                    <img src={Blogimg} alt="web development blog" />
                </div>
                {/* BLOG-CONTENT */}
                <div className="blog__inner">
                    <header>
                        {/* BLOG-HEADING */}
                        <h3 className="blog__title"> {title} </h3>
                        {/* BLOG-DESCRIPTION */}
                        <div className="blog__description">
                            <p> {description} </p>
                        </div>
                    </header>
                    <footer className='blog__footer'>
                        <small>published on {date}</small>
                    </footer>
                </div>
            </a>
        </article>
    );
}

export default ListedBlog;
