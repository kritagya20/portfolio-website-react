import './Nav.css';
import React, {useState, useEffect} from 'react';


function Nav() {

  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      changeBackground();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`primary-header ${navbar ? 'window-scroll' : ''}`}>
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
            {['Home', 'About','Skills', 'Projects', 'Work', 'Contact'].map((item) => (
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