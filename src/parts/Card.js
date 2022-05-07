import React from 'react';

export default function Card(props) {
  const { by, description } = props;
  return (
    <section className="card-part mb-4">
      <div className="col">
        <div className="card" style={{ width: 250, height: 140 }}>
          <div className="card-body">
            <h5 className="card-title">{by}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
