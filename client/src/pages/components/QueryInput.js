import React from 'react';

import InputBox from './InputBox';
import SliderBar from './SliderBar';
import {
  getEntityAttributes,
  getYears,
  entities,
  operatorTypes,
  getSliderInfo
} from '../../utils/queryInputUtil.js';

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
  setSliderInput,
  entityInputComp,
  setEntityInputComp,
  attributeInputComp,
  setAttributeInputComp,
  yearComp,
  setYearComp
}) => {
  return (
    <>
      <div className="flex flex-col mt-10  items-center">
        <div className="flex flex-row">
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
                title={'Operator (optional)'}
                data={operatorTypes}
                value={operatorInput}
                setValue={setOperatorInput}
              />
            </>
          )}
          {!entityInput && (
            <>
              {setAttributeInput('')}
              {setYear('')}
              {console.log('hello')}
            </>
          )}
        </div>
        <div
          style={{ visibility: entityInput && attributeInput && operatorInput && operatorInput != 'None' ? 'visible' : 'hidden' }}
          className={ operatorInput != 'Compare With' ? "flex flex-row w-[50%]" : "flex flex-row items-center" }
        >
          {
            operatorInput == 'Compare With'
            ?
            <div className="flex flex-row">
              <InputBox
                title={'Comparing Entity'}
                data={entities}
                value={entityInputComp}
                setValue={setEntityInputComp}
              />
              {entityInputComp && (
                <>
                  <InputBox
                    title={'Comparing Attribute'}
                    data={getEntityAttributes(entityInputComp)}
                    value={attributeInputComp}
                    setValue={setAttributeInputComp}
                  />
                  {entityInputComp != 'Country' && (
                    <InputBox
                      title={'Comparing Year'}
                      data={getYears(entityInputComp)}
                      value={yearComp}
                      setValue={setYearComp}
                    />
                  )}
                </>
              )}
            </div>
            :
            <SliderBar
              min={attributeInput ? getSliderInfo(attributeInput).min : 0}
              max={attributeInput ? getSliderInfo(attributeInput).max : 1}
              value={sliderInput}
              setValue={setSliderInput}
            />
          }
          
        </div>
      </div>
    </>
  );
};

export default QueryBoxes;
