import React from 'react';
import Slider from '@mui/material/Slider';

import { numberWithCommas } from './../../utils/mapUtil.js';

const SliderBar = ({ min, max, value, setValue }) => {
  return (
    <Slider
      className="m-5"
      defaultValue={max / 2}
      valueLabelDisplay="auto"
      min={min}
      max={max}
      value={value}
      onChange={(event, newSliderValue) => {
        setValue(newSliderValue);
      }}
      track={false}
      valueLabelFormat={numberWithCommas(value)}
    />
  );
};

export default SliderBar;
