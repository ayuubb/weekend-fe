import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardHelp from './CardHelp';

export default function Help() {
  const [help, setHelp] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get('https://wknd-take-home-challenge-api.herokuapp.com/help-tips')
      .then((response) => {
        setHelp(response.data);
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
  if (error || !Array.isArray(help)) {
    return <p>There was an error loading your data!</p>;
  }

  return (
    <section className="container help">
      <h2 className="title-section text-white font-weight-bold mb-5">
        Help & Tips
      </h2>
      <div className="content-wrapper">
        <div className="row justify-content-center align-items-center">
          {help.map((item) => {
            return (
              <CardHelp
                key={item.id}
                title={item.title}
                image={`https://wknd-take-home-challenge-api.herokuapp.com/${item.id}.jpg`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
