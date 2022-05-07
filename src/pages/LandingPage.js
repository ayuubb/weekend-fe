import React from 'react';

import Hero from 'parts/Hero';
import Navbar from 'parts/Navbar';
import Testimonial from 'parts/Testimonial';
import Weekend from 'parts/Weekend';
import Pov from 'parts/Pov';
import Resource from 'parts/Resource';
import Help from 'parts/Help';
import About from 'parts/About';
import Footer from 'parts/Footer';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Weekend />
      <Testimonial />
      <div className="section bg-black py-5">
        <Pov />
        <Resource />
        <Help />
        <About />
      </div>
      <Footer />
    </>
  );
}
