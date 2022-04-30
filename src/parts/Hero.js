import React from 'react';
import Path1 from 'assets/images/Path 1.svg';
import Path2 from 'assets/images/Path 2.svg';
import Path3 from 'assets/images/Path 3.svg';
import Oval from 'assets/images/Oval.svg';

export default function Hero() {
  return (
    <>
      <section className="hero">
        <img className="fits-path" src={Path1} alt="" />
        <img className="oval" src={Oval} alt="" />
        <img className="second-path" src={Path2} alt="" />
        <img className="third-path" src={Path3} alt="" />
      </section>
    </>
  );
}
