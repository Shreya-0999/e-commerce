import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Dropdown = (props) => {
  let quantitynumber = 5;

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props?.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props?.value}
          label="Quantity"
          onChange={(e) => { props?.setValue(e.target.value) }}
        >
          {props?.label === "Quantity"
            ?
              [...Array(quantitynumber)].map((ele, key)=>(
                <MenuItem key={key} value={key+1}>{key+1}</MenuItem>
              ))
            :
              props?.itemArr?.map((ele,key) => (
                <MenuItem value={ele} key={key}>{ele}</MenuItem>
              ))
          }
        </Select>
      </FormControl>
    </Box>
  );
}
export default Dropdown;