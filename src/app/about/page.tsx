// app/about/page.tsx
import React from 'react';
import Image from 'next/image';
import './about.css';

const About = () => {
  return (
    <main className="home-main">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Text Section */}
        <div className="hero-text">
          <h1 className="hero-title">Welcome to Pizzatos Pizza</h1>
          <p className="hero-description">
            Welcome to Pizzatos Pizza, where passion for pizza meets quality ingredients! We craft every pizza with care, using the freshest toppings and authentic recipes to deliver a slice of happiness in every bite. Whether you crave a classic Margherita or a bold, customized creation, our menu offers something for everyone. Join us for an unforgettable pizza experience and discover why Pizzatos is your perfect pizza destination!
          </p>
          <button className="cta-button">Explore Our Menu</button>
        </div>

        {/* Image Section */}
        <div className="hero-image-container">
          <Image
            height={400}
            width={400}
            src="/hero.webp" // Ensure this path is correct
            alt="Pizza Image"
            className="hero-image"
          />
        </div>
      </section>

      {/* Animated Skills Section */}
      <section className="skills-section">
        <p className="skills-text">Classic Margherita, Pepperoni Paradise, BBQ Chicken Delight</p>
        <p className="skills-text">Hawaiian Bliss, Meat Lovers, Veggie Supreme</p>
        <p className="skills-text">Mushroom & Truffle, White Pizza, Neapolitan, Sicilian</p>
      </section>
    </main>
  );
};

export default About;
