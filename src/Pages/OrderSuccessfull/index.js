import useStyles from './Styles/useStyles';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/NavBar';
import ButtonC from '../../Components/Button';
import SuccessImg from '../../Assets/OrderSuccessfull/orderSuccessfull.gif';
import constants from './Utils/constants'

const OrderSuccessfull = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const handleContinueShopping = () => {
        navigate('/');
    }
    return (
        <>
            <Navbar />
            <div className={classes.container}>
                <div className={classes.imgBox}>
                    <img src={SuccessImg} alt='img' />
                </div>
                <h2 className={classes.pageHeading}>{constants.SUCCESS_MSG}</h2>
                <p className={classes.subHeader}>{constants.THANKYOU_MSG}</p>
                <ButtonC
                    text='Continue Shopping'
                    handleBtnClick={handleContinueShopping}
                    variant='contained'
                    color='secondary'
                />
            </div>

        </>
    )
}
export default OrderSuccessfull;