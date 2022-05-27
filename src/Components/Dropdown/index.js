import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Dropdown = (props) => {
  let quantitynumber = 5;
  const [value, setValue] = useState(props?.value);
  
  const handleDropdownChange = (e)=>{
    setValue(e.target.value);
    if(props?.section){
      props.handleDropdownChange(e.target.value, props?.label);
    }
    else{
      props?.setValue(e.target.value)
    }
  }

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props?.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={props?.label}
          onChange={(e) => { handleDropdownChange(e) }}
        >
          {props?.label === "quantity"
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