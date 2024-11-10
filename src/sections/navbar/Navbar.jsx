import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
<>
  <nav className="glass-effect-nav z-50">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-0">
      <a
        href="#"
        className="flex items-center space-x-3 rtl:space-x-reverse underline-offset-1"
      >
        <span className=" font-p underline-offset-1 self-center text-xl  whitespace-nowrap text-[#BBF7D0] dark:text-white">
          Resume
        </span>
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent">
          <li>
            <a href="#" className="font-p block py-4 px-3 nav-link" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="font-p block py-4 px-3 nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="font-p block py-4 px-3 nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="font-p block py-4 px-3 nav-link">
              Work
            </a>
          </li>
          <li>
            <a href="#" className="font-p block py-4 px-3 nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</>
  )
}

export default Navbar