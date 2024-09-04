import './Contact.css';
import { FormModal } from '../../components';
import React, { useState } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from '../../components/button/Button';

function Contact() {
    
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

  return (
    <>
        <section className="contact section" id="contact">
            <span className=" contact__empty-bg-tags empty-bg-tags liner-gradient-2 " />
            <div className='contact__wrapper'>
                <h1>Get In Touch</h1>    
                <p>Let's collaborate to turn ideas into tangible digital solutions. I'm eager to explore new opportunities and contribute my skills.</p>
                <div className={"contact__btns"} >
                    <div className="external-links">
                        <span onClick={openModal} >
                            <Button
                                className='btn contact__btn btn--message'
                                href='#contact'
                                title='Send a Message'
                                data='message'                                
                            />
                        </span>
                        <Button
                            className='btn contact__btn btn--call'
                            href='tel:+917987322906'
                            target='_blank'
                            title='Call 7987322906'
                            data='call'
                        />
                        
                    </div>

                </div>
            </div>
        </section>
        <FormModal isOpen={modalOpen} onClose={closeModal} />        
        <ToastContainer 
            position="top-center" 
            autoClose={3500}
        />



    </>
  )
}

export default Contact
