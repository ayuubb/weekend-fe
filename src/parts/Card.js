import React from 'react';

export default function Card(props) {
  const { title, description } = props;
  return (
    <section className="container mb-4">
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
