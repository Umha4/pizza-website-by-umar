import React from 'react';
import './header.css';
import Link from 'next/link';

const HeaderPage = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="logo">Pizzato</h1>
        <nav className="nav">
        <Link href="/" className="nav-item">Home</Link>
          <Link href="/about" className="nav-item">About</Link>
          <Link href="/contact" className="nav-item">Contact Us</Link>
          <a href="/path/to/cv.pdf" download className="cv-button">Order Now!</a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderPage;

