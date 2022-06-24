import useStyles from './Styles/useStyles';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/NavBar';
import ButtonC from '../../Components/Button';
import SuccessImg from '../../Assets/OrderSuccessfull/orderSuccessfull.gif'

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
                <h2 className={classes.pageHeading}>Your order has been placed successfully!</h2>
                <p className={classes.subHeader}>Thank you for shopping with us</p>
                <ButtonC
                    text='Continue Shopping'
                    handleBtnClick={handleContinueShopping}
                    variant='contained'
                    color='primary'
                />
            </div>

        </>
    )
}
export default OrderSuccessfull;