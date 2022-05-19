import {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Dropdown =(props)=> {

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props?.itemQuatity}
          label="Quantity"
          onChange={(e)=>{props?.setItemQuantity(e.target.value)}}
        >
          <MenuItem value={1}>01</MenuItem>
          <MenuItem value={2}>02</MenuItem>
          <MenuItem value={3}>03</MenuItem>
          <MenuItem value={4}>04</MenuItem>
          <MenuItem value={5}>05</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default Dropdown;