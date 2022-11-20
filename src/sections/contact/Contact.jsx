import './Contact.css';
import { useElementOnScreen } from '../../intersectionObserver';

function Contact() {
    
    const [containerRef, isVisible ] = useElementOnScreen({
        root: null,
        rootMargin: "0px 0px -300px 0px",
        threshold: 0,
    }); 

  return (
    <section className="contact section" id="contact" ref={containerRef}>
        <span className=" contact__empty-bg-tags empty-bg-tags liner-gradient-2 " />
        <div className={isVisible ? "contact__wrapper fade-in --appear" : "contact__wrapper fade-in"}>
            <h1>Get In Touch</h1>    
            <p>
                My mail box is always open to everyone for collaborations and
                consultations. I'm actively looking for opportunities and to deliver best of my skill sets. I'll do my best to connect with you as soon as
                possible.
            </p>
            <div className="contact__btns">
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
