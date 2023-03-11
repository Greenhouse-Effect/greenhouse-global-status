import React from 'react';

import InputBox from './InputBox';
import SliderBar from './SliderBar';
import {
  getEntityAttributes,
  getYears,
  entities,
  operatorTypes,
  getSliderInfo
} from '../utils/queryInputUtil.js';

// conditionally render input boxes based on the type of query a user wants to see data for
const QueryBoxes = ({
  entityInput,
  setEntityInput,
  attributeInput,
  setAttributeInput,
  operatorInput,
  setOperatorInput,
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
      {entityInput && (
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
