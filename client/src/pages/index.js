import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [mockData, setMockData] = useState([]);

  useEffect(() => {

    const getCountries = async () => {
      const { data } = await axios.get("http://localhost:3002/country");
      setMockData(data);
    }

    getCountries().catch(console.error);
  }, []);

  return (
    <>
      <div className="text-3x1 text-blue-600">hello world!</div>
      {/* {mockData.map((val) => {
        return (
          <h1>
            name: {val.countryName} | population: {val.countryPopulation}
          </h1>
        );
      })} */}
      {/* {
        <h1>
          name: {mockData.countryName} | {mockData.countryPopulation}
        </h1>
      } */}
    </>
  );
}
