import React, { useState, useEffect } from 'react';
import { populationScale, queryByPopulation, populationChangeScale, queryByPopulationChange, populationTooltipInfo } from './components/populationMap';
import axios from 'axios';
import { Tooltip as ReactToolTip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

import MapChart from './components/MapChart.js';
import QueryState from './components/queryState';

export default function Home() {
  const [content, setContent] = useState("");
  const [queryData, setQueryData] = useState([]);
  
  // still needs to be abstracted
  useEffect(() => {
    const getCountries = async () => {
      const { data } = await axios.get("http://35.92.119.149:8080/COUNTRY");
      setQueryData(data);
    }
    
    getCountries().catch(console.error);
  }, []);

  const [query, setQuery] = useState(new QueryState(populationScale( queryData ), queryByPopulation, populationTooltipInfo, null, null, null));
  
  return (
    <div>
      <MapChart setToolTipContent={setContent} queryState={query} queryData={queryData}/>
      <ReactToolTip id='my-tooltip' float={true} multiline={true}>{content}</ReactToolTip>
    </div>
  );
}