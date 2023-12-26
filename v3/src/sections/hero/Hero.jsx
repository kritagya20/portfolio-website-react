import './Hero.css';
import {Heroimg} from '../../images/index';


function Hero() {

  return (
    <section className='hero section' id='home'>
        <span className="hero__empty-bg-tags empty-bg-tags liner-gradient-2" />
        <div className='hero__inner'>
        <div className="hero__left">
            <h1 className="name">Kritagya Singh Chouhan</h1>
            <h6  className="auto-typing">Full Stack Developer</h6>
            <p>
                I'm a software developer specializing in building (and occasionally designing) exceptional digital experiences. At Present, I’m focused on building scalable, user-centered products at Jio.
            </p>

        </div>
        <div className="hero__right">
            <img className="hero-image" src={Heroimg} />
        </div>
        </div>

    </section>
  )
}

export default Hero
