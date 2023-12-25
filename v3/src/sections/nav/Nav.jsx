import './Nav.css';
import React, {useState, useEffect} from 'react';


function Nav() {

  const [toggle, setToggle] = useState(false);


  return (
    <header className={`primary-header`}>
      <div className="nav-toggle-container">
        <button
          className={`nav-toggle ${toggle ? 'visible' : ''}`}
          aria-controls="primary-navigation"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </button>
      </div>
      <nav className='navbar'>
        <ul className={`primary-navigation ${toggle ? 'visible' : ''}`} id="primary-navigation">
            {['Home', 'About', 'Projects', 'Work', 'Contact'].map((item) => (
                <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="nav-link" onClick={()=> {setToggle(false)}}>
                  {item}
                </a>
                </li>
            ))}
        </ul>

      </nav>
    </header>
  );
}

export default Nav;