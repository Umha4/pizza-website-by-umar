// app/footer.tsx
import React from 'react';
import './footer.css'; // Importing CSS for the footer

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#" className="footer-link">Home</a>
          <a href="#" className="footer-link">About</a>
          <a href="#" className="footer-link">Contact Us</a>
        </div>
        <div className="footer-socials">
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Twitter</a>
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">GitHub</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hafiz Muhammad Umar. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
