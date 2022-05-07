import React from 'react';

export default function Card(props) {
  const { by, description } = props;
  return (
    <section className="card-part col mb-2 ">
      <div className="card" style={{ height: 140 }}>
        <div className="card-body">
          <h5 className="card-title">{by}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </section>
  );
}
