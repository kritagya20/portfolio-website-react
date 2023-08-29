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
                MERN Stack Developer and Frontend Designer with a passion for web development. Seeking a dynamic role in a web development team where I can use my skills to create innovative and user-friendly websites.
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
                    title='Hire'                
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
