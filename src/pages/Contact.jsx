import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Reach out for any questions or support.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
