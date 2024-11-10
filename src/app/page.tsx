import Footer from '@/components/footer/footer';
import HeaderPage from '@/components/header/header';
import Hero from '@/components/hero/hero';
import React from 'react';
// import Hero from '../components/hero';


const Homepage = () => {
  return (
    <main>
      <HeaderPage/>
      <Hero/>
      <Footer/>
    </main>
  );
};

export default Homepage;