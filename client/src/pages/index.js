import React, { useState, useEffect } from 'react';
import {
  populationScale,
  queryByPopulation,
  populationChangeScale,
  queryByPopulationChange,
  populationTooltipInfo
} from './components/populationMap';
import axios from 'axios';
import { Tooltip as ReactToolTip } from 'react-tooltip';
import Button from '@mui/material/Button';
import 'react-tooltip/dist/react-tooltip.css';

import MapChart from './components/MapChart.js';
import QueryInput from './components/QueryInput.js';
import {
  handleAxios,
  translateEntityToApi,
  translateAttributeToApi,
  translateOperatorToApi
} from './utils/apiUtil.js';

export default function Home() {
  // query input states
  const [entityInput, setEntityInput] = useState('');
  const [queryTypeInput, setQueryTypeInput] = useState('');
  const [attributeInput, setAttributeInput] = useState('');
  const [operatorInput, setOperatorInput] = useState('');
  const [countryName, setCountryName] = useState('');
  const [year, setYear] = useState(''); // setting state to type string because of input labels
  const [sliderInput, setSliderInput] = useState(0);

  // api data state
  const [axiosData, setAxiosData] = useState();

  // map tooltip state
  const [content, setContent] = useState('');

  // takes values from input boxes and hits api accordingly
  const handleSubmit = async () => {
    const translatedEntity = translateEntityToApi(entityInput);
    const translatedYear = Number(year);
    const translatedAttribute = translateAttributeToApi(attributeInput);
    const translatedOperator = translateOperatorToApi(operatorInput);
    const url = await handleAxios(
      translatedEntity,
      queryTypeInput,
      countryName,
      translatedYear,
      translatedAttribute,
      translatedOperator,
      sliderInput
    );
    const { data } = await axios.get(url);
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
