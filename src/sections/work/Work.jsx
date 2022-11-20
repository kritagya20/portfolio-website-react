import './Work.css';
import { useState } from 'react';
import { useElementOnScreen } from '../../intersectionObserver';

function Work() {

    
    const [containerRef, isVisible ] = useElementOnScreen({
        root: null,
        rootMargin: "0px 0px -300px 0px",
        threshold: 0,
    }); 

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="work section" id="work" ref={containerRef}>
        <span className=" work__empty-bg-tags empty-bg-tags liner-gradient-2 " />
        <h1>Past Work</h1>
        <div className={isVisible ? "work__wrapper fade-in --appear" : "work__wrapper fade-in"}>
            <div className="tab__list" role="tablist">
                <button
                    role="tab"
                    className={
                        toggleState === 1 
                        ? "active-tab"
                        : "tabs"
                    }
                    onClick={() => toggleTab(1)}
                >
                    Intern
                </button>
                <button
                    role="tab"
                    className={
                        toggleState === 2 
                        ? "active-tab"
                        : "tabs"
                    }
                    onClick={() => toggleTab(2)}
                >
                    Portfolio
                </button>
                <button
                    role="tab"
                    className={
                        toggleState === 3 
                        ? "active-tab"
                        : "tabs"
                    }
                    onClick={() => toggleTab(3)}
                >
                    Blog
                </button>
            </div>
            {/* CONTENT */}
            <div className="tab__content-list">
                {/*--INTER-------*/}
                <div 
                    className={
                        toggleState === 1 
                        ? "tab__content--active "
                        : "tab__content"
                    } 
                >
                    <div className="inner">
                    <h2>
                        <span>Intern at </span>&nbsp;
                        <a
                        href="https://www.cashe.co.in/"
                        className="inline-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Cashe
                        </a>
                    </h2>
                    <p className="range">May 2022 - Sep 2022</p>
                    <article>
                        <ul>
                        <li>Analysed entire codebase and reported any bugs detected.</li>
                        <li>
                            Worked with a variety of different languages, platforms,
                            frameworks, and CMS such as CSS, PHP, JavaScript, AngularJS,
                            JQuery, and WordPress.
                        </li>
                        <li>
                            Interacted with multi-disciplinary teams of engineers,
                            developers and managers on a daily basis.
                        </li>
                        </ul>
                    </article>
                    </div>
                </div>
                {/*--PORTFOLIO-------*/}
                <div 
                    className={
                        toggleState === 2 
                        ? "tab__content--active "
                        : "tab__content"
                    } 
                >
                    <div className="inner">
                    <h2>
                        <span>Developed </span>&nbsp;
                        <a
                        href="https://kritagya.in/"
                        className="inline-link"
                        target="_blank"
                        >
                        Portfolio Website
                        </a>
                    </h2>
                    <p className="range">Jul 2022 - Sep 2022</p>
                    <article>
                        <ul>
                        <li>
                            Developed optimised, modern, responsive website using React
                        </li>
                        <li>
                            Designed and developed entire portfolio website from scratch to
                            showcase my technical and designing capabilities
                        </li>
                        <li>
                            Worked on different frameworks like React and AngularJS to built
                            multiple projects
                        </li>
                        </ul>
                    </article>
                    </div>
                </div>
                {/*--BLOG-------*/}
                <div
                    className={
                        toggleState === 3 
                        ? "tab__content--active "
                        : "tab__content"
                    } 
                >
                    <div className="inner">
                    <h2>
                        <span>Wrote </span>&nbsp;
                        <a href="#blog" className="inline-link" target="_blank">
                        Blogs
                        </a>
                    </h2>
                    <p className="range">Sep 2022</p>
                    <article>
                        <ul>
                        <li>Published blogs for the personal portfolio website.</li>
                        <li>
                            Covered crucial subjects like search engine optimization, color
                            schema, and font selection to improve the blog's quality.
                        </li>
                        <li>
                            Explored tonne of articles, books, and reference website to
                            provide authentic and evident content.
                        </li>
                        </ul>
                    </article>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Work
