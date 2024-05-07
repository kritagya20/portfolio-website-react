import {  Nav, Hero, About, Projects,  Work,  Contact } from '../../sections/index';


function Home() {
  return (
    <>
      < Nav />
      <main>          
          < Hero />
          < About />
          < Projects />
          < Work />
          < Contact />
      </main>
    </>
  )
}

export default Home
