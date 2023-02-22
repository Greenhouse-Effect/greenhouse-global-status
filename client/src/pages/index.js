import React, { useState, useEffect } from 'react';
import MapChart, { CreateTitle } from './components/WorldMap/index.jsx';
import axios from 'axios';

export default function tempFunction() {
  const [content, setContent] = useState("");
  return (
    <div>
      <CreateTitle />
      <MapChart />
    </div>
  );
}

/*
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
      <div className="text-3x1 text-blue-600">hello world!</div>
    );=
}
*/