// app/contact/page.tsx
import React from 'react';
import './contact.css';

const ContactPage = () => {
  return (
    <main className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-description">
        We would love to hear from you! Please fill out the form below, and we will get back to you as soon as possible.
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={5} required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </main>
  );
};

export default ContactPage;
