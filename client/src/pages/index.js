import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tooltip as ReactToolTip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

import MapChart from './components/MapChart.js';

export default function Home() {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setToolTipContent={setContent}/>
      <ReactToolTip id='my-tooltip' float={true} >{content}</ReactToolTip>
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