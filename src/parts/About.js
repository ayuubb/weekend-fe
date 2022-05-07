import React from 'react';
import Path from 'assets/images/about-path.svg';
import Hero from 'assets/images/Bitmap.png';

export default function About() {
  return (
    <section className="container-fluid about">
      <div className="container about-section">
        <h2 className="title-section text-white font-weight-bold mb-4">
          You’re all set.
        </h2>
        <p className="text-section text-white">
          The wise man therefore always holds in these matters to this principle
          of selection.
        </p>
      </div>
      <div className="img-wrapper-about">
        <img className="img-hero-about" src={Hero} alt="hero-img" />
        <img className="path-hero-about" src={Path} alt="path-img" />
      </div>
    </section>
  );
}
