import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Oval from 'assets/images/Oval.svg';
import Card from './Card';

export default function Testimonial() {
  const [testimonial, setTestimonial] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  useEffect(() => {
    axios
      .get('https://wknd-take-home-challenge-api.herokuapp.com/testimonial')
      .then((response) => {
        setTestimonial(response.data);
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
    <section className="container testimony">
      <img src={Oval} alt="Oval-path" />
      <h2 className="title-section text-white font-weight-bold mb-5">
        Testimonial
      </h2>
      <div className="content-wrapper">
        <div className="row">
          {/* <Slider {...settings}> */}
          {testimonial.map((item) => {
            return (
              <Card key={item.id} by={item.by} description={item.testimony} />
            );
          })}
          {/* </Slider> */}
        </div>
      </div>
    </section>
  );
}
