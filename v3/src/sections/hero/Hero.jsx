import './Hero.css';
import {Heroimg} from '../../images/index';
import Button from '../../components/button/Button';


function Hero() {

  return (
    <section className='hero section' id='home'>
        <span className="hero__empty-bg-tags empty-bg-tags liner-gradient-2" />
        <div className='hero__inner'>
        <div className="hero__left">
            <h1>
                <span className="name">Kritagya Singh Chouhan</span>
                <span  className="auto-typing">Full Stack Developer</span>
            </h1>
            <p>
                I'm a software developer specializing in building (and occasionally designing) exceptional digital experiences. At Present, I’m focused on building scalable, user-centered products at Jio.
            </p>
            <div className="hero__btn">
                <Button
                    className='btn hero__btn btn--explore'
                    data='explore'
                    href='#about'
                    title='Explore'                
                />
                <Button
                    className='btn hero__btn btn--hire'
                    data='contact'
                    href='#contact'
                    title='contact'                
                />
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
