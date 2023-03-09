import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const InputBox = ({ title, data }) => {
  return (
    <Autocomplete
      disablePortal
      options={data}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={title} />}
    />
  )
}

export default InputBox;