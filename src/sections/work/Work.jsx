import React from 'react';
import './Work.css';

function Work({ data = [] }) {
  return (
    <>
    <section className="work section" id="work">
        <span className=" about__empty-bg-tags empty-bg-tags liner-gradient-2 " />
        <h1 className="slide-down"> Work</h1>
      <section className="work__wrapper">
        <ul className="work__card-list">
          {data.map((item) => {
            const {
              key,
              designation,
              organisation,
              time,
              description,
              highlights = [],
              tech = [],
            } = item;

            return (
              <li key={key} className="individualWork__card" id={key}>
                <div className="work__content-block">
                  <div className="head-container">
                    <p className="overliner">{designation}</p>

                    <h3 className="title">{organisation}</h3>

                    {tech.length > 0 && (
                      <ul className="tech-list">
                        {tech.map((techItem, index) => (
                          <li key={index}>{techItem}</li>
                        ))}
                      </ul>
                    )}

                    <div className="description">
                      <p>{description}</p>

                      {highlights.length > 0 && (
                        <ul className="tech-highlight">
                          {highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                <div className="work__image-block">
                  {/* image slot reserved for future use */}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
    </>

  );
}

export default Work;
