import { TextField } from "@mui/material";
const TextFields = (props) => {
    return (
        <>
            <div className='login-inputField'>
                <TextField
                    id="filled-basic"
                    label={props.type}
                    variant="filled"
                    value={props.value}
                    onChange={(e) => props.setFunc(e.target.value)}
                />
            </div>
        </>
    )
}
export default TextFields;