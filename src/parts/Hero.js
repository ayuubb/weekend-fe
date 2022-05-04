import React from 'react';
import Path1 from 'assets/images/Path 1.svg';
import Path2 from 'assets/images/Path 2.svg';
import Path3 from 'assets/images/Path 3.svg';
import Oval from 'assets/images/Oval.svg';
import HeroImg from 'assets/images/Bitmap.png';

export default function Hero() {
  return (
    <>
      <img className="fits-path" src={Path1} alt="" />
      {/* <img className="second-path" src={Path2} alt="" /> */}
      <section className="hero">
        {/* <img className="oval" src={Oval} alt="" /> */}
        {/* <img className="third-path" src={Path3} alt="" /> */}
        <div className="hero-description text-center container">
          <h1 className="hero-title text-white">WEEKEND FROM HOME</h1>
          <p className="text-white font-weight-bolder">
            <i>Stay active with a little workout.</i>
          </p>
        </div>
        <div className="hero-img">
          <img className="img-hero" src={HeroImg} alt="" />
          <button className="bg-white">Let's Go</button>
        </div>
      </section>
    </>
  );
}
