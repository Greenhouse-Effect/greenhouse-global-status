import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const InputBox = ({ title, data, value, setValue }) => {
  return (
    <>
      <Autocomplete
        className="p-2"
        inputValue={value}
        onInputChange={(event, newInputValue) => {
          setValue(newInputValue);
        }}
        options={data}
        sx={{ width: 250 }}
        renderInput={(params) => <TextField {...params} label={title} />}
      />
    </>
  );
};

export default InputBox;
