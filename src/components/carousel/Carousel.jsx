import React, { useState } from 'react';
import './Carousel.css';
import { RightSvg, LeftSvg } from '../index';

export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};


function Carousel({children}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if(newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.children.count(children) -1;
        }

        setActiveIndex(newIndex);
    }

  return (
    <div className='wrapper'>
        <div className="indicators">
            <button 
                className={
                    activeIndex === 0
                    ? "carousel__button  invisible"
                    : "carousel__button"
                }
                onClick={() => {
                    updateIndex(activeIndex - 1);
                }}
            >
                
                <LeftSvg 
                    className='button__image'
                />
            </button>
      </div>
    
        <div className="carousel">
        <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, { width: "100%" });
            })}
        </div>
        </div>


      <div className="indicators">
        <button
            className={
                activeIndex === 3
                ? "carousel__button  invisible"
                : "carousel__button "
            }
            onClick={() => {
                updateIndex(activeIndex + 1);
            }}
        >
            
            <RightSvg 
                className='button__image'
            />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
