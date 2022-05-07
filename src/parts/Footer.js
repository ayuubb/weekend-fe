import React from 'react';

export default function Footer() {
  return (
    <section className="footer">
      <div className="container d-flex justify-content-between align-items-center">
        <p>
          wknd@<span>2020</span>
        </p>
        <div className="version p-1">
          <p>alpha version 0.1</p>
        </div>
      </div>
    </section>
  );
}
