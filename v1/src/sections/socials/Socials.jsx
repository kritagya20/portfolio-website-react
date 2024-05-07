import {TwitterSvg, LinkedinSvg, InstagramSvg, GithubSvg } from '../../components/index';
import './Socials.css'
   
  
function socials() {
  return (
    <>
      <section className="socials">
        <ul className="social__icon-list">
          <li>
            <a
              href="https://github.com/kritagya20"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
                <GithubSvg className='icon icon--github'/>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kritagyasinghchouhan/"
              aria-label="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinSvg className='icon icon--linkedin'/>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/kritagyachouhan"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >  
                <TwitterSvg className='icon icon--twitter'/>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/kritagya_chouhan"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramSvg className='icon icon--instagram'/>   
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}

export default socials
