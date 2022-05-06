import Hero from 'parts/Hero';
import Navbar from 'parts/Navbar';
import Testimonial from 'parts/Testimonial';
import Weekend from 'parts/Weekend';
import Card from 'parts/Card';

import React from 'react';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Weekend />
      <Testimonial />
    </>
  );
}
