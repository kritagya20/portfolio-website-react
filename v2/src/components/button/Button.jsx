import React from 'react';
import './Button.css';

const Button = ({className, data, href, title, target}) => {

  return (
    <>
        <button className='btn-container'>
            <a className={className} href={href} title={title} target={target}>
              {data}
            </a>
        </button>
    </>
  )
}

export default Button;
