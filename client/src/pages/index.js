import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Home() {
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    Axios.post('http://localhost:3002/api/country/').then((response) => {
      console.log(response.data);
    });
    Axios.get('http://localhost:3002/api/country/').then((response) => {
      setMockData(response.data);
      console.log(response.status);
    });
  }, []);

  return (
    <>
      <div className="text-3x1 text-blue-600">hello world!</div>
      {mockData.map((val) => {
        return (
          <h1>
            name: {val.countryName} | population: {val.countryPopulation}
          </h1>
        );
      })}
    </>
  );
}
