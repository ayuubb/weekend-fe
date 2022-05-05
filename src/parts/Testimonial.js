import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

export default function Testimonial() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://wknd-take-home-challenge-api.herokuapp.com/testimonial')
      .then((result) => {
        // console.log('data', result.data);
        const response = result.data;
        setData(response.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  return (
    <section className="container">
      <h2 className="text-white text-center font-weight-bold">Testimonial</h2>
      <div className="content-wrapper">
        {data.map((item, index) => {
          return (
            <Card key={item.id} title={item.by} description={item.testimony} />
          );
        })}
      </div>
    </section>
  );
}
