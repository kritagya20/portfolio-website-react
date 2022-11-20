import './Hero.css';
import {Heroimg} from '../../images/index';
import { useElementOnScreen } from '../../intersectionObserver';

function Hero() {
    
    const [containerRef, isVisible ] = useElementOnScreen({
        root: null,
        rootMargin: "0px 0px -10px 0px",
        threshold: 0,
    }); 

  return (
    <section className='hero section' id='hero' ref={containerRef}>
        <span className="hero__empty-bg-tags empty-bg-tags liner-gradient-2" />
        <div className={isVisible ? "hero__inner fade-in --appear" : "hero__inner fade-in"}>
        <section className="hero__left">
            <h1>
                <span className="name">Kritagya Singh Chouhan</span>
                <span className="auto-typing">Web Developer/ Designer</span>
            </h1>
            <p>
                I create an inclusive online presences that enables your growth
                significantly. I'm a curious individual excited about new things, ideas,
                and technologies to develop secure, reliable, quick, and optimized
                websites.
            </p>
            <div className="hero__btn">
                <a href="#about" className="hero__btn--explore button_slide">
                    Explore
                </a>
                <a href="#contact" className="hero__btn--hire button_slide">
                    Hire Me
                </a>
            </div>
        </section>
        <section className="hero__right">
            <img className="hero-image" src={Heroimg} />
        </section>
        </div>

    </section>
  )
}

export default Hero
