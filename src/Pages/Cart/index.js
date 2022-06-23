import NavBar from '../../Components/NavBar';
import ButtonC from '../../Components/Button';
import Dropdown from '../../Components/Dropdown';
import BasicTable from './Components/BasicTable';
import AddressModal from '../../Components/AddressModal';
import Message from '../../Components/Message';
import { CardActions, Card, CardContent, Typography } from '@mui/material';
import { loginSuccess } from '../../Core/Actions/userActions';
import { connect } from 'react-redux';
import { getCartStart, deleteFromCart, updateCartItem, emptyCart, updateOrderList } from '../../Core/Actions/cartItemsAction';
import useStyles from './Styles/useStyles.js';
import { useEffect, useState } from 'react';
import { addtoWishlist } from '../../Core/Actions/wishlistAction';
import { useNavigate } from 'react-router-dom';

const Cart = (props) => {
    const classes = useStyles();
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [address, setAddress] = useState('');
    const [totalPrice, setTotalprice] = useState();
    const handleRemoveFromCart = (item) => {
        props.deleteFromCart(item);
    }
    const handleMoveToWishlist = (item) => {
        props.addtoWishlist(item.id);
        props.deleteFromCart(item);
    }
    const handleDropdownUpdate = (item, value, label) => {
        item[label] = value;
        props.updateCartItem(item)
    }
    const handleEmptyCart = () => {
        props.emptyCart();
    }
    const handlePlaceOrder = () => {
        if (props.currentUser) {
            props.updateOrderList(props.cartItems, address, totalPrice);
            props.emptyCart();
            navigate('/orderSuccessfull');
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
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            props.loginSuccess(user);
            if (user.address) {
                setAddress(user.address);
            }
        }

    }, [])
    return (
        <>
            <NavBar />
            {props?.cartItems
                ? <div className={classes.cart}>
                    <h1 className={classes.pageHeading}>My Bag</h1>
                    <p className={classes.underline}></p>
                    <div className={classes.flex}>
                        <div className={classes.cartItemSection}>
                            <div className={classes.itemContainer}>
                                {
                                    props?.cartItems?.map((ele) => (
                                        <div className={classes.cartItemBox} key={ele.id}>
                                            <div className={classes.detailsBox}>
                                                <div className={classes.itemImage}>
                                                    <img src={ele.image} alt="" className={classes.img} />
                                                </div>
                                                <div className={classes.itemDetails}>
                                                    <h2 className={classes.header}>{ele.name}</h2>
                                                    <div className={classes.flex}>
                                                        <Dropdown
                                                            section='Cart'
                                                            label='quantity'
                                                            value={ele.quantity}
                                                            handleDropdownChange={(val, label) => { handleDropdownUpdate(ele, val, label) }}
                                                        />
                                                        <Dropdown section='Cart' label='size' value={ele.size} itemArr={ele.sizeAvailable} handleDropdownChange={(val, label) => { handleDropdownUpdate(ele, val, label) }} />
                                                    </div>
                                                </div>
                                                <div className={classes.itemPrice}>
                                                    <h2 className={classes.header}>Rs {ele.price * ele.quantity}</h2>
                                                </div>
                                            </div>
                                            <div className={classes.itemSectionItemAction}>
                                                <ButtonC
                                                    text="Remove"
                                                    handleBtnClick={() => { handleRemoveFromCart(ele) }}
                                                    variant="text"
                                                    color="text"
                                                />
                                                <ButtonC
                                                    text="Move to wishlist"
                                                    handleBtnClick={() => { handleMoveToWishlist(ele) }}
                                                    variant="text"
                                                    color="text"
                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={classes.cartPriceSection}>
                            <div>
                                <h3 className={classes.subheader}>Billing Details</h3>
                                <BasicTable totalPrice={setTotalprice} />
                            </div>
                            <div className={classes.margin}>
                                {
                                    address
                                        ? <>
                                            <Card>
                                                <CardContent>
                                                    <Typography gutterBottom variant="p" component="div">{Object.values(address).join(", ")}</Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <ButtonC text="Edit" handleBtnClick={handleAddAddress} />
                                                </CardActions>
                                            </Card>
                                            <ButtonC text="Place Order" handleBtnClick={handlePlaceOrder} />
                                        </>
                                        : <ButtonC
                                            text="Add Address"
                                            handleBtnClick={handleAddAddress}
                                            variant="contained"
                                            color="success"
                                            width='full'
                                        />
                                }

                                <div>
                                    <ButtonC
                                        text="Empty Cart"
                                        handleBtnClick={handleEmptyCart}
                                        variant="outlined"
                                        color="primary"
                                        width='full'
                                    />
                                </div>
                            </div>
                            <AddressModal handleOpen={setOpen} open={open} setAddress={setAddress} />
                        </div>
                    </div>
                </div>
                : <Message
                    text="Your cart is empty"
                />
            }

        </>
    )
}
const mapStateToProps = ({ cart, user }) => {
    return {
        cartItems: cart.cartItems,
        orderList: cart.orderList,
        currentUser: user.currentUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCartStart: () => dispatch(getCartStart()),
        deleteFromCart: (item) => dispatch(deleteFromCart(item)),
        updateCartItem: (item) => dispatch(updateCartItem(item)),
        emptyCart: () => dispatch(emptyCart()),
        addtoWishlist: (id) => dispatch(addtoWishlist(id)),
        loginSuccess: (user) => dispatch(loginSuccess(user)),
        updateOrderList: (orderList, address, totalPrice) => dispatch(updateOrderList(orderList, address, totalPrice))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);