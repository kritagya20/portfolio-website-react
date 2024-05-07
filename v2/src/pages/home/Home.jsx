import {  Nav, Hero, About, Skills, Projects,  Work,  Contact } from '../../sections/index';


function Home() {
  return (
    <>
      < Nav />
      <main>          
          < Hero />
          < About />
          < Skills />
          < Projects />
          < Work />
          < Contact />
      </main>
    </>
  )
}

export default Home
