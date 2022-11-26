import './Hero.css';
import {Heroimg} from '../../images/index';
import { useElementOnScreen } from '../../intersectionObserver';

function Hero() {
    
    const [containerRef, isVisible ] = useElementOnScreen({
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0,
    }); 

  return (
    <section className='hero section' id='hero' ref={containerRef}>
        <span className="hero__empty-bg-tags empty-bg-tags liner-gradient-2" />
        <div className='hero__inner'>
        <section className="hero__left">
            <h1>
                <span className={isVisible ? "name slide-down fade-in --appear" : " name slide-down fade-in"}>Kritagya Singh Chouhan</span>
                <span  className={isVisible ? "auto-typing fade-in --appear" : "auto-typing fade-in"}>Web Developer/ Designer</span>
            </h1>
            <p className={isVisible ? "slide-up fade-in --appear" : " slide-up fade-in"}>
                I create an inclusive online presences that enables your growth
                significantly. I'm a curious individual excited about new things, ideas,
                and technologies to develop secure, reliable, quick, and optimized
                websites.
            </p>
            <div className={isVisible ? "hero__btn fade-in --appear" : "hero__btn fade-in"}>
                <a href="#about" className="hero__btn--explore button_slide">
                    Explore
                </a>
                <a href="#contact" className="hero__btn--hire button_slide">
                    Hire Me
                </a>
            </div>
        </section>
        <section className="hero__right">
            <img className={isVisible ? "hero-image fade-in --appear" : "hero-image fade-in"}  src={Heroimg} />
        </section>
        </div>

    </section>
  )
}

export default Hero
