import { Button } from "@mui/material";
import { useStyles } from './Styles/useStyles';


const ButtonC = (props) => {
    const classes = useStyles(props);

    return (
        <>
            <Button
                variant={props.variant}
                color={props.color}
                onClick={props.handleBtnClick}
                className={`${classes.btn}`}
                size='large'
                sx={{ mt:'10px', mr:'10px'}}
            >
                {props.text}
            </Button>
        </>
    )
}
export default ButtonC;