import React from 'react';

export default function CardHelp(props) {
  const { title, image } = props;
  return (
    <section className="col mb-2">
      <div className="img-wrapper">
        <img src={image} alt="gambar" style={{ width: 311, height: 176 }} />
        <p className="card-text-help">{title}</p>
      </div>
    </section>
  );
}
