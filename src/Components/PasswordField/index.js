import { InputLabel, Input, InputAdornment, IconButton, FormControl } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {useState} from 'react';
import useStyles from './Styles/useStyles'


const PasswordField = (props) => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <div >
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" className={classes.textField}>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={props.password}
                        onChange={(e) => props.setPassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
        </>
    )
}
export default PasswordField;