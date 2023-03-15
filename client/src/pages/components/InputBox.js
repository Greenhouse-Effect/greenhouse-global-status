import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const InputBox = ({ title, data, value, setValue }) => {
  return (
    <Autocomplete
      className="p-2"
      inputValue={value}
      defaultValue={ title == 'Operator (optional)' ? data[0] : undefined} // only default comparator, data[0] = 'None'
      onInputChange={(event, newInputValue) => {
        setValue(newInputValue);
      }}
      clearOnEscape={true}
      options={data}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label={title} />}
    />
  );
};

export default InputBox;
