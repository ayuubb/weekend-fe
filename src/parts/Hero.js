import React from 'react';
import Path1 from 'assets/images/hero-path.png';
import HeroImg from 'assets/images/Bitmap.png';

export default function Hero() {
  return (
    <>
      <section className="hero">
        <img className="fits-path" src={Path1} alt="" />
        <div className="hero-description">
          <div className="text-center container">
            <h1 className="hero-title text-white">WEEKEND FROM HOME</h1>
            <p className="text-white font-weight-bolder">
              <i>Stay active with a little workout.</i>
            </p>
          </div>
          <div className="hero-img">
            <img className="img-hero" src={HeroImg} alt="" />
            <button className="bg-white">Let's Go</button>
          </div>
        </div>
      </section>
    </>
  );
}
