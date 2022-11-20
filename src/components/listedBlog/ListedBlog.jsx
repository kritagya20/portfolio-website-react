import './ListedBlog.css';
import {articleList} from '../../data';
import {Blogimg} from '../../images/index';


function ListedBlog() {
    const content = articleList[0];
  return (
        <article className="individual-blog" id={content.id}>
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
                <h3 className="blog__title">
                {content.title}
                </h3>
                {/* BLOG-DESCRIPTION */}
                <div className="blog__description">
                    <p>
                    The creation of stunning and useful user interfaces requires a
                    variety of strategies. Here are my top 15 CSS design hacks,
                    which I believe will be helpful to you in your work...
                    </p>
                </div>
                </header>
                <footer className='blog__footer'>
                <small>published on {content.date}</small>
                </footer>
            </div>
            </a>
        </article>
    );
}

export default ListedBlog;
