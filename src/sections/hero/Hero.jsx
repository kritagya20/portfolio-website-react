import './Hero.css';
import { Heroimg} from '../../images/index';
import { CopyButton } from '../../components';


function Hero() {

  return (
    <section className='hero section' id='home'>
        <span className="hero__empty-bg-tags empty-bg-tags liner-gradient-2" />
        <div className='hero__inner'>
        <div className="hero__left">
            <h1 className="name">Kritagya Singh Chouhan</h1>
            <h6  className="auto-typing">Software Developer Engineer in Test</h6>
            <p>
                SDET focused on building reliable automation frameworks, scalable test systems, and CI-driven quality for modern applications.
            </p>
            <div className="hero__btn">
              <CopyButton />
            </div>

        </div>
        <div className="hero__right">
            <img className="hero-image" src={Heroimg} />
        </div>
        </div>

    </section>
  )
}

export default Hero
