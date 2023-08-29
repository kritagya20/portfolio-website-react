import React, { useState } from 'react';
import './Work.css';
import { workData } from '../../data';

const TabContent = ({ isActive, tab, title, link, date, content }) => {
  return (
    <div className={isActive ? 'tab__content--active' : 'tab__content'}>
      <div className="inner">
        <h2>
          <a href={link} className="title" target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p className="range">{date}</p>
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function Work() {

  const [toggleState, setToggleState] = useState(1);

  return (
    <section className="work section" id="work">
      <span className=" work__empty-bg-tags empty-bg-tags liner-gradient-2 " />
      <h1>Past Work</h1>
      <div className={'work__wrapper'}>
        <div className="tab__list-container">
          <div className="tab__list">
            {workData.map((tab, index) => (
              <button
                key={index}
                role="tab"
                className={toggleState === index + 1 ? 'active-tab tabs' : 'tabs'}
                onClick={() => setToggleState(index + 1)}
              >
                {tab.tab}
              </button>
            ))}
          </div>
        </div>
        <div className="tab__content-list">
          {workData.map((tab, index) => (
            <TabContent
              key={index}
              isActive={toggleState === index + 1}
              tab={tab.tab}
              title={tab.title}
              link={tab.link}
              date={tab.date}
              content={tab.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
