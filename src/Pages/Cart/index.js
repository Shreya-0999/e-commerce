import NavBar from '../../Components/NavBar';
import ButtonC from '../../Components/Button';
import BasicTable from './Components/BasicTable';
import AddressModal from './Components/AddressModal';
import Message from '../../Components/Message';
import CartItems from './Components/CartItems'
import DisplayAddress from './Components/DisplayAddress'
import { loginSuccess } from '../../Core/Actions/userActions';
import { connect } from 'react-redux';
import { getCartStart, emptyCart, updateOrderList } from '../../Core/Actions/cartItemsAction';
import useStyles from './Styles/useStyles.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Empty from '../../Assets/Message/empty.gif'
import constants from './Utils/constants';
import { loadScript, showRazorPay } from './Utils/functions';
import Loader from '../../Assets/Cart/loader.gif'

const Cart = (props) => {
    const classes = useStyles();
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [address, setAddress] = useState('');
    const [totalPrice, setTotalprice] = useState();
    const [paymentDisabled, setPaymentDisabled] = useState(false)
    const handleEmptyCart = () => {
        props.emptyCart();
    }
    const handlePlaceOrder = () => {
        if (props.currentUser) {
            setPaymentDisabled(true);
            showRazorPay(totalPrice, address, props.updateOrderList, props.cartItems, navigate, setPaymentDisabled);
        }
        else {
            navigate('/login')
        }
    }
    const handleAddAddress = () => {
        if (props.currentUser) {
            setOpen(true);
            console.log("checkout");
        }
        else {
            navigate('/login')
        }

    }
    useEffect(() => {
        props.getCartStart();
        let activeUser = JSON.parse(localStorage.getItem('activeUser'));
        if (activeUser) {
            props.loginSuccess(activeUser);
            if (activeUser.address) {
                setAddress(activeUser.address);
            }
        }

    }, [])
    useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
    });
    return (
        <>
            <NavBar />
            {props?.cartItems
                ? <div className={classes.cart}>
                    {
                        paymentDisabled
                            ? <div className={classes.paymentDisplay}>
                                <img src={Loader} alt='loader' />
                            </div>
                            : <></>
                    }

                    <h1 className={classes.pageHeading}>{constants.MY_BAG}</h1>
                    <p className={classes.underline}></p>
                    <div className={classes.flex}>
                        <CartItems />
                        <div className={classes.cartPriceSection}>
                            <h3 className={classes.subheader}>{constants.BILLING_DETAILS}</h3>
                            <BasicTable totalPrice={setTotalprice} />
                            <div className={classes.margin}>
                                {
                                    address
                                        ? <>
                                            <DisplayAddress address={address} handleAddAddress={handleAddAddress} />
                                            <ButtonC
                                                text="Place Order"
                                                handleBtnClick={handlePlaceOrder}
                                                variant="contained"
                                                color="secondary"
                                                width='full'
                                                disabled={paymentDisabled}
                                            />
                                        </>
                                        : <ButtonC
                                            text="Add Address"
                                            handleBtnClick={handleAddAddress}
                                            variant="contained"
                                            color="secondary"
                                            width='full'
                                        />
                                }
                                <ButtonC
                                    text="Empty Cart"
                                    handleBtnClick={handleEmptyCart}
                                    variant="outlined"
                                    color="text"
                                    width='full'
                                />
                            </div>
                            <AddressModal handleOpen={setOpen} open={open} setAddress={setAddress} />
                        </div>
                    </div>
                </div>
                : <Message
                    text="Your cart is empty"
                    img={Empty}
                />
            }

        </>
    )
}
const mapStateToProps = ({ cart, user }) => {
    return {
        cartItems: cart.cartItems,
        currentUser: user.currentUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCartStart: () => dispatch(getCartStart()),
        emptyCart: () => dispatch(emptyCart()),
        loginSuccess: (user) => dispatch(loginSuccess(user)),
        updateOrderList: (orderList, address, totalPrice) => dispatch(updateOrderList(orderList, address, totalPrice))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);