import React from 'react';

export default function Footer() {
  return (
    <section className="footer d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        <p className="footer-year">
          wknd@<span className="year">2020</span>
        </p>
        <p className="version">alpha version 0.1</p>
      </div>
    </section>
  );
}
