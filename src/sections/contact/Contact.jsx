import './Contact.css';
import { useElementOnScreen } from '../../intersectionObserver';

function Contact() {
    
    const [containerRef, isVisible ] = useElementOnScreen({
        root: null,
        rootMargin: "-275px 0px -275px 0px",
        threshold: 0,
    }); 

  return (
    <section className="contact section" id="contact" ref={containerRef}>
        <span className=" contact__empty-bg-tags empty-bg-tags liner-gradient-2 " />
        <div className='contact__wrapper'>
            <h1 className={isVisible ? "slide-down fade-in --appear" : "slide-down fade-in"}>Get In Touch</h1>    
            <p className={isVisible ? "slide-up fade-in --appear" : "slide-up fade-in"}>
                My mail box is always open to everyone for collaborations and
                consultations. I'm actively looking for opportunities and to deliver best of my skill sets. I'll do my best to connect with you as soon as
                possible.
            </p>
            <div className={isVisible ? "contact__btns fade-in --appear" : "contact__btns fade-in"} >
                <a 
                    className='btn__link btn--mail'
                    href='mailto: kritagya2022@gmail.com'
                    target="_blank"
                    title='mail me'
                >
                    mail
                </a>
                <a 
                    className='btn__link btn--call'
                    href="tel:+917987322906"
                    target="_blank"
                    title='call me'
                >
                    call
                </a>
            </div>
        </div>
    </section>

  )
}

export default Contact
