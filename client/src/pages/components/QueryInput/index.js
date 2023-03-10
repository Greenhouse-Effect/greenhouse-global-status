import React from 'react';

import InputBox from '../InputBox';
import { countries } from '@/labels/countrylist';
import SliderBar from '../SliderBar';
import {
  getEntityAttributes,
  getYears,
  entities,
  operatorTypes,
  queryTypes,
  getSliderInfo
} from './helperFunctions.js';

const QueryBoxes = ({
  entityInput,
  setEntityInput,
  queryTypeInput,
  setQueryTypeInput,
  attributeInput,
  setAttributeInput,
  operatorInput,
  setOperatorInput,
  countryName,
  setCountryName,
  year,
  setYear,
  sliderInput,
  setSliderInput
}) => {
  return (
    <div className="flex flex-row m-2">
      <InputBox
        title={'Entity'}
        data={entities}
        value={entityInput}
        setValue={setEntityInput}
      />
      <InputBox
        title={'Query Type'}
        data={queryTypes}
        value={queryTypeInput}
        setValue={setQueryTypeInput}
      />
      {queryTypeInput === 'Select One' && entityInput && (
        <>
          <InputBox
            title={'Country Name'}
            data={countries}
            value={countryName}
            setValue={setCountryName}
          />
          {entityInput != 'Country' && (
            <InputBox
              title={'Year'}
              data={getYears(entityInput)}
              value={year}
              setValue={setYear}
            />
          )}
        </>
      )}
      {queryTypeInput === 'Compare' && entityInput && (
        <>
          <InputBox
            title={'Attribute'}
            data={getEntityAttributes(entityInput)}
            value={attributeInput}
            setValue={setAttributeInput}
          />
          {entityInput != 'Country' && (
            <InputBox
              title={'Year'}
              data={getYears(entityInput)}
              value={year}
              setValue={setYear}
            />
          )}
          <InputBox
            title={'Operator'}
            data={operatorTypes}
            value={operatorInput}
            setValue={setOperatorInput}
          />
          {attributeInput && (
            <SliderBar
              min={getSliderInfo(attributeInput).min}
              max={getSliderInfo(attributeInput).max}
              value={sliderInput}
              setValue={setSliderInput}
            />
          )}
        </>
      )}
    </div>
  );
};

export default QueryBoxes;
