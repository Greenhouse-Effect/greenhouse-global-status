import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [mockData, setMockData] = useState([]);

  useEffect(() => {

    // const postCountry = async () => {
    //   await axios.post('http://localhost:3002/country', { name: "USA", population: 6825445 })
    //   .then((response) => {
    //     console.log(response)
    //   });
    // } 
    
    // postCountry().catch(console.error)

    // const { data } = axios.get(`http://localhost:3002/country`);
    // console.log(data);
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
