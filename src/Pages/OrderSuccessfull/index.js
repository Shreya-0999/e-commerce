import useStyles from './Styles/useStyles';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/NavBar';
import ButtonC from '../../Components/Button';
import { emptyCart, updateOrderList } from '../../Core/Actions/cartItemsAction';
import SuccessImg from '../../Assets/OrderSuccessfull/orderSuccessfull.gif';
import constants from './Utils/constants'

const OrderSuccessfull = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const handleContinueShopping = () => {
        navigate('/');
    }
    useEffect(() => {
        props.emptyCart();
    }, [])
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
const mapStateToProps = ({ cart, user }) => {
    return {
        cartItems: cart.cartItems,
        orderList: cart.orderList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        emptyCart: () => dispatch(emptyCart()),
        updateOrderList: (orderList, address, totalPrice) => dispatch(updateOrderList(orderList, address, totalPrice))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderSuccessfull);