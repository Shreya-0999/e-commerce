import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import useStyle from './Styles/useStyle'

const RadioButtons = (props) => {
    const classes = useStyle();
    const handleRadioChange =(e) =>{
        props?.setItemSize(e.target.value)
        props?.setCardValidation(false);
    }
    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label" className={classes.header}>Please select a size. </FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e)=>{handleRadioChange(e)}}
            >
                {
                    props.itemDetail?.size.map((ele,key) => (
                        (<FormControlLabel className={classes.radio} key={key} value={ele} 
                            control={<Radio size='medium' color='secondary'/>} label={ele} 
                        />)
                    ))
                }

            </RadioGroup>
        </FormControl>
    );
}
export default RadioButtons;
