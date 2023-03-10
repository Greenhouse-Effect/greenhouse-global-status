import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tooltip as ReactToolTip } from 'react-tooltip';
import Button from '@mui/material/Button';
import 'react-tooltip/dist/react-tooltip.css';

import MapChart from './components/MapChart.js';
import QueryInput from './components/QueryInput/index.js';
import {
  handleAxios,
  translateEntityToApi,
  translateAttributeToApi,
  translateOperatorToApi
} from './utils/index.js';

export default function Home() {
  const [content, setContent] = useState('');

  const [entityInput, setEntityInput] = useState('');
  const [queryTypeInput, setQueryTypeInput] = useState('');
  const [attributeInput, setAttributeInput] = useState('');
  const [operatorInput, setOperatorInput] = useState('');
  const [countryName, setCountryName] = useState('');
  const [year, setYear] = useState('');
  const [sliderInput, setSliderInput] = useState();

  const [axiosData, setAxiosData] = useState();

  const handleSubmit = async () => {
    const translatedEntity = translateEntityToApi(entityInput);
    const translatedYear = Number(year);
    const translatedAttribute = translateAttributeToApi(attributeInput);
    const translatedOperator = translateOperatorToApi(operatorInput);
    const data = await handleAxios(
      translatedEntity,
      queryTypeInput,
      countryName,
      translatedYear,
      translatedAttribute,
      translatedOperator,
      sliderInput
    );
    console.log(data);
    setAxiosData(data);
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
        sliderInput={sliderInput}
        setSliderInput={setSliderInput}
      />
      <Button variant="outlined" onClick={handleSubmit}>
        Submit Query
      </Button>
      <MapChart setToolTipContent={setContent} axiosData={axiosData} />
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
