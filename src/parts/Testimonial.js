import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

export default function Testimonial() {
  const [testimonial, setTestimonial] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get('https://wknd-take-home-challenge-api.herokuapp.com/testimonial')
      .then((response) => {
        setTestimonial(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log('error', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }
  if (error || !Array.isArray(testimonial)) {
    return <p>There was an error loading your data!</p>;
  }
  return (
    <section className="container">
      <h2 className="text-white text-center font-weight-bold mb-5">
        Testimonial
      </h2>
      <div className="content-wrapper">
        <div className="row justify-content-center">
          {testimonial.map((item) => {
            return (
              <Card key={item.id} by={item.by} description={item.testimony} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
