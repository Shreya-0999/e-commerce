import { TextField } from "@mui/material";
import useStyles from './Styles/useStyles'
const TextFields = (props) => {
    const classes = useStyles();
    return (
        <>
            <TextField
                required
                id="filled-basic"
                label={props.type}
                variant="standard"
                className={classes.textField}
                value={props.value}
                onChange={(e) => props.setFunc(e.target.value)}
            />
        </>
    )
}
export default TextFields;