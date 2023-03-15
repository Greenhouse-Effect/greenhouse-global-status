import React, { useState } from 'react';
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
} from '../utils/apiUtil.js';
import { getSliderInfo } from '../utils/queryInputUtil.js';
import References from './components/References.js';

export default function Home() {
  // query input states
  const [entityInput, setEntityInput] = useState('');
  const [attributeInput, setAttributeInput] = useState('');
  const [operatorInput, setOperatorInput] = useState('');
  const [year, setYear] = useState(''); // setting state to type string because of input labels
  const [sliderInput, setSliderInput] = useState(0);
  // create comparison query input states
  const [entityInputComp, setEntityInputComp] = useState('');
  const [attributeInputComp, setAttributeInputComp] = useState('');
  const [yearComp, setYearComp] = useState('');
  // api data state
  const [axiosData, setAxiosData] = useState([]);
  const [axiosDataComp, setAxiosDataComp] = useState([]);

  // map tooltip state
  const [content, setContent] = useState('');

  // takes values from input boxes and hits api accordingly
  const handleSubmit = async () => {
    // for some reason return value of await axios.get must be named data or it will not work (naming it dataComp crashed the page)
    // if statement is workaround (should always be true) to limit scope so that both axios calls can be set to const { data }
    if (entityInput && attributeInput && (year || entityInput == 'Country')) {
      const translatedEntity = translateEntityToApi(entityInput);
      const translatedYear = Number(year);
      const translatedAttribute = translateAttributeToApi(attributeInput);
      const translatedOperator = translateOperatorToApi(operatorInput);
      const url = await handleAxios(
        translatedEntity,
        translatedYear,
        translatedAttribute,
        translatedOperator,
        operatorInput == 'Compare With' || operatorInput == 'None'
          ? getSliderInfo(attributeInput).min
          : sliderInput // slider value may be set and then derendered, so always use min value unless using slider with comparison
      );
      const { data } = await axios.get(url).catch((err) => {
        alert('Invalid query, please ensure all query parameters are valid');
      });
      setAxiosData(data);
    }
    if (
      entityInputComp &&
      attributeInputComp &&
      (yearComp || entityInputComp == 'Country') &&
      operatorInput == 'Compare With'
    ) {
      // only if user is comparing
      const translatedEntityComp = translateEntityToApi(entityInputComp);
      const translatedYearComp = Number(yearComp);
      const translatedAttributeComp =
        translateAttributeToApi(attributeInputComp);
      const urlComp = await handleAxios(
        translatedEntityComp,
        translatedYearComp,
        translatedAttributeComp,
        'g', // use default g
        getSliderInfo(attributeInputComp).min // same as above, use min value for attribute to get all entries
      );
      const { data } = await axios.get(urlComp).catch((err) => {
        alert('Invalid query, please ensure all query parameters are valid');
      });
      setAxiosDataComp(data);
    } // user is not comparing, clear comp data in case they swapped from compare to another operator (axiosDataComp would otherwise be untouched and mapchart would assume compare)
    else setAxiosDataComp([]);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[#63bf6e] text-4xl mt-5 tracking-wider font-semibold">
        Greenhouse Global Status
      </h1>
      <QueryInput
        entityInput={entityInput}
        setEntityInput={setEntityInput}
        attributeInput={attributeInput}
        setAttributeInput={setAttributeInput}
        operatorInput={operatorInput}
        setOperatorInput={setOperatorInput}
        year={year}
        setYear={setYear}
        sliderInput={sliderInput}
        setSliderInput={setSliderInput}
        entityInputComp={entityInputComp}
        setEntityInputComp={setEntityInputComp}
        attributeInputComp={attributeInputComp}
        setAttributeInputComp={setAttributeInputComp}
        yearComp={yearComp}
        setYearComp={setYearComp}
      />
      <Button variant="outlined" onClick={handleSubmit}>
        Submit Query
      </Button>
      <MapChart
        setToolTipContent={setContent}
        axiosData={axiosData}
        attribute={attributeInput}
        axiosDataComp={axiosDataComp}
        attributeComp={attributeInputComp}
      />
      <ReactToolTip id="my-tooltip" float={true}>
        {content}
      </ReactToolTip>
      <References />
    </div>
  );
}
