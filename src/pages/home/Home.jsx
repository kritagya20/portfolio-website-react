import {  Nav, Hero, About, Projects,  Work,  Contact, Skills } from '../../sections/index';
import {workList} from '../../data';


function Home() {
  return (
    <>
      < Nav />
      <main>          
          < Hero />
          < About />
          < Work data={workList} />
          < Projects />
          <Skills />
          < Contact />
      </main>
    </>
  )
}

export default Home
