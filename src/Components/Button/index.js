import { Button } from "@mui/material";

const ButtonC = (props) => {
    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={props.handleBtnClick}
            >
                {props.text}
            </Button>
        </>
    )
}
export default ButtonC;