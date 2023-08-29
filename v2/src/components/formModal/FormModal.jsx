import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "./FormModal.css";

function FormModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false); // New state for sending loader


  const nameInput = useRef(null);

  useEffect(() => {
    if (nameInput.current) {
      nameInput.current.focus();
    }
  }, []);
  const isEmailValid = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isDisabled = () => {
    return !isEmailValid(email) || !name || !message || isSending;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      toast.error("Invalid email format");
      return;
    }

    setIsSending(true); // Start loading

    try {
      const template_params = {
        name: name,
        email: email,
        message: message,
      };

      await emailjs.sendForm(
        "service_ep5wsq2",
        "template_6rse44u",
        e.target,
        "lDfbIdvN4uubDrHPz", 
        template_params
      );

      toast.success("Your response recorded successfully!");
      setName("");
      setEmail("");
      setMessage("");
      onClose(); // Close the modal
    } catch (error) {
      toast.error("Error in sending message!");
      console.log(error.text);
    } finally {
      setIsSending(false); // Stop loading
    }
  };

  return (
    <div className={isOpen ? "modal-open form-modal-overlay" : "form-modal-overlay"}>
      <div className="form-modal">
        <button className="close-button" onClick={onClose}>
          &#215;
        </button>
        <h2 className="modal-title">Let's Connect</h2>
        <form className="modal-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              ref={nameInput}
              className={`input-field ${name ? 'valid' : 'invalid'}`}
              type="text"
              min="3"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="off"              
              autoFocus
              name="name"
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className={`input-field ${email ? (isEmailValid(email) ? 'valid' : 'invalid') : ''}`}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
              name="email"
              placeholder="Your Email Address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className={`input-field ${message ? 'valid' : 'invalid'}`}
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
              autoComplete="off"
              spellCheck="off"
              name="message"
              placeholder="Convey Your Message..."
            />
          </div>

          <button 
            type="submit" 
            className="modal-submit-btn"
            disabled={isDisabled()}
          >
            {isSending ? <span>Sending...</span> : <span>Submit</span>}
          </button> 
        </form>
      </div>
    </div>
  );
}

export default FormModal;
