import React from 'react';
import Arrow from 'assets/images/arrow.svg';

export default function CardHelp(props) {
  const { title, image } = props;
  return (
    <section className="card-help col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card img-wrapper">
        <img src={image} alt="gambar" style={{ height: 176 }} />
        <div className="card-desc-help">
          <p className="card-text-help">{title}</p>
          <button className="arrow-btn">
            <img src={Arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
