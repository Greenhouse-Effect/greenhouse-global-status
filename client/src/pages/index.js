import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tooltip as ReactToolTip } from 'react-tooltip';
import Button from '@mui/material/Button';
import 'react-tooltip/dist/react-tooltip.css';

import MapChart from './components/MapChart.js';
import QueryInput from './components/QueryInput/index.js';

export default function Home() {
  const [content, setContent] = useState('');

  const [entityInput, setEntityInput] = useState('');
  const [queryTypeInput, setQueryTypeInput] = useState('');
  const [attributeInput, setAttributeInput] = useState('');
  const [operatorInput, setOperatorInput] = useState('');
  const [countryName, setCountryName] = useState('');
  const [year, setYear] = useState('');

  const [axiosData, setAxiosData] = useState([]);

  const handleAxios = async () => {
    switch (queryTypeInput) {
      case 'Select One': {
        if (entityInput === 'Country') {
          const { data } = await axios.get(
            `http://35.92.119.149:8080/country/name/${countryName}`
          );
          setAxiosData(data);
        }
      }
    }
  };

  return (
    <div>
      <QueryInput
        entityInput={entityInput}
        setEntityInput={setEntityInput}
        queryTypeInput={queryTypeInput}
        setQueryTypeInput={setQueryTypeInput}
        attributeInput={attributeInput}
        setAttributeInput={setAttributeInput}
        operatorInput={operatorInput}
        setOperatorInput={setOperatorInput}
        countryName={countryName}
        setCountryName={setCountryName}
        year={year}
        setYear={setYear}
      />
      <Button variant="outlined" onClick={handleAxios}>
        Submit Query
      </Button>
      <MapChart setToolTipContent={setContent} />
      <ReactToolTip id="my-tooltip" float={true}>
        {content}
      </ReactToolTip>
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
