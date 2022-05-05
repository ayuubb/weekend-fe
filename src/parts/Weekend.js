import React from 'react';
import Bitmap from 'assets/images/Bitmap-right.png';
import Path4 from 'assets/images/Path 4.svg';

export default function Weekend() {
  return (
    <>
      <div className="path-weekend">
        <img className="path-right" src={Path4} alt="weekend-bitmap" />
        <img
          className="bitmap-weekend"
          src={Bitmap}
          alt="weekend-bitmap"
          style={{ width: 160 }}
        />
      </div>
      <section className="container">
        <div className="weekend-section">
          <p>
            <span>Deffinition;</span> a practice or exercise to test or improve
            one's fitness for athletic competition, ability, or performance to
            exhaust (something, such as a mine) by working to devise, arrange,
            or achieve by resolving d ifficulties. <br />
            Merriam-Webster.com Dictionary.
          </p>
          <p className="text-white">
            <i>-weekend team</i>
          </p>
        </div>
      </section>
    </>
  );
}
