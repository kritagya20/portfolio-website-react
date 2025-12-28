import React, { useState } from 'react';
import './Skills.css';
import { techstackData } from '../../data';

const TabContent = ({ isActive, title, content }) => {
  return (
    <div className={isActive ? 'tab__content--active' : 'tab__content'}>
      <div className="inner">
        <h2 className="title">{title}</h2>
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function Skills() {
  const [toggleState, setToggleState] = useState(1);

  return (
    <section className="skills section" id="techstack">
      <span className="skills__empty-bg-tags empty-bg-tags liner-gradient-2" />
      <h1>techstack</h1>

      <div className="skills__wrapper">
        {/* Tabs */}
        <div className="tab__list-container">
          <div className="tab__list">
            {techstackData.map((tab, index) => (
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

        {/* Content */}
        <div className="tab__content-list">
          {techstackData.map((tab, index) => (
            <TabContent
              key={index}
              isActive={toggleState === index + 1}
              title={tab.title}
              content={tab.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
