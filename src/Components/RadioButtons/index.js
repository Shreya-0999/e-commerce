import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioButtons = (props) => {
    const handleRadioChange =(e) =>{
        props?.setItemSize(e.target.value)
        props?.setCardValidation(false);
    }
    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Please select a size. </FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e)=>{handleRadioChange(e)}}
            >
                {
                    props.itemDetail?.size.map((ele,key) => (
                        (<FormControlLabel key={key} value={ele} control={<Radio />} label={ele} />)
                    ))
                }

            </RadioGroup>
        </FormControl>
    );
}
export default RadioButtons;
