import { useState } from 'react';
import './App.css';
import { Navbar, Hero } from './sections';

function App() {
  return (
    <>
      <div className='fixed left-0 top-0 -z-10 h-full w-full'>
        <div className="relative h-full w-full bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <Navbar />
          <div className='px-10'>
          <Hero />
          
          <Hero />
            
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;