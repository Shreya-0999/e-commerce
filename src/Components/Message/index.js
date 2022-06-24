import ButtonC from "../Button";
import useStyles from './Styles/useStyles.js';
import { useNavigate } from 'react-router-dom';

const Message = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const handleContinueShopping = () => {
        navigate('/');
    }
    return (
        <>
            <div className={classes.container}>
                <h1 className={classes.pageHeading}>{props.text}</h1>
                <ButtonC
                    text="Continue Shopping"
                    handleBtnClick={handleContinueShopping}
                    variant='contained'
                    color='primary'
                />
            </div>
        </>
    )
}
export default Message;