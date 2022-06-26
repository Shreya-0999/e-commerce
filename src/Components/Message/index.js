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
                <div className={classes.imgBox}>
                    <img src={props.img} alt={props.text} className={classes.img}/>
                </div>
                <h1 className={classes.pageHeading}>{props.text}</h1>
                <ButtonC
                    text="Continue Shopping"
                    handleBtnClick={handleContinueShopping}
                    variant='contained'
                    color='secondary'
                />
            </div>
        </>
    )
}
export default Message;