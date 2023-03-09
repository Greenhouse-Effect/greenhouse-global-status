import React, { useState } from 'react';

import Slider from '@mui/material/Slider';

const SliderBar = ({ min, max }) => {
  const [value, setValue] = useState(max / 2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Slider
        className="m-5"
        defaultValue={max / 2}
        valueLabelDisplay="auto"
        min={min}
        max={max}
      />
    </>
  );
};

export default SliderBar;
