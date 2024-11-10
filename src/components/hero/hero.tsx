import React from 'react'
import Image from 'next/image'
import './hero.css'
import About from '../../app/about/page';
import ContactPage from '../../app/contact/page';


const Hero = () => {
  return (
    <>
        <main className="banner-container">
          <div className="image-overlay">
            <Image
              className="banner-image "
              height={500}
              width={500}
              src="/umar.jpg"
              alt="banner pizza"
            />
            <div className="overlay-text">
              <p>Your favorite spot for fresh, delicious pizza!</p>
            </div>
          </div>
        </main>
        <About/>
        <ContactPage/>
        </>
      );
    };
    

export default Hero