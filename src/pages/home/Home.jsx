import {  Nav, Hero, About, Skills, Projects,  Work, Blogs, Contact } from '../../sections/index';


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
          < Blogs />
          < Contact />
      </main>
    </>
  )
}

export default Home
