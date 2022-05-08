import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Oval from 'assets/images/Oval.svg';
import Card from './Card';

export default function Testimonial() {
  const [testimonial, setTestimonial] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error] = useState();

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
      <div className="content-wrapper-testi">
        <div className="row justify-content-center align-items-center">
          <Swiper
            className="center"
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
            }}
          >
            {testimonial.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Card
                    key={item.id}
                    by={item.by}
                    description={item.testimony}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
