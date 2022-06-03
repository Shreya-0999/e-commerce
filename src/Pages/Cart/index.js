import NavBar from '../../Components/NavBar';
import ButtonC from '../../Components/Button';
import Dropdown from '../../Components/Dropdown';
import BasicTable from '../../Components/BasicTable';
import AddressModal from '../../Components/AddressModal';
import Message from '../../Components/Message';
import {CardActions, Card, CardContent,Typography} from '@mui/material';
import { loginSuccess } from '../../Core/Actions/userActions';
import { connect } from 'react-redux';
import { getCartStart, deleteFromCart, updateCartItem, emptyCart, updateOrderList } from '../../Core/Actions/cartItemsAction';
import './Styles/index.css';
import { useEffect, useState } from 'react';
import { addtoWishlist } from '../../Core/Actions/wishlistAction';
import { useNavigate } from 'react-router-dom';

const Cart = (props) => {
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [address, setAddress] = useState('');

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
            console.log("checkout");
            props.updateOrderList(props.cartItems);
            props.emptyCart();
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
                ? <div className="cart">
                    <div className="cart-itemSection">
                        {
                            props?.cartItems?.map((ele) => (
                                <div className="cart-itemSection-item" key={ele.id}>
                                    <div className="itemSection-item-details">
                                        <div className="item-image">
                                            <img src={ele.image} alt="" className="img" />
                                        </div>
                                        <div className="item-details">
                                            <h2>{ele.name}</h2>
                                            <Dropdown
                                                section='Cart'
                                                label='quantity'
                                                value={ele.quantity}
                                                handleDropdownChange={(val, label) => { handleDropdownUpdate(ele, val, label) }}
                                            />
                                            <Dropdown section='Cart' label='size' value={ele.size} itemArr={ele.sizeAvailable} handleDropdownChange={(val, label) => { handleDropdownUpdate(ele, val, label) }} />
                                        </div>
                                        <div className="item-price">
                                            <p>{ele.price * ele.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="itemSection-item-action">
                                        <ButtonC text="Remove" handleBtnClick={() => { handleRemoveFromCart(ele) }} />
                                        <ButtonC text="Move to wishlist" handleBtnClick={() => { handleMoveToWishlist(ele) }} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="cart-priceSection">
                        <ButtonC text="Empty Cart" handleBtnClick={handleEmptyCart} />
                        <h3>Billing Details</h3>
                        <BasicTable />
                        {
                            address
                                ? <>
                                    <Card>
                                        <CardContent>
                                            <Typography  gutterBottom variant="p" component="div">{Object.values(address).join(", ")}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <ButtonC text="Edit" handleBtnClick={handleAddAddress} />
                                        </CardActions>
                                    </Card>
                                    <ButtonC text="Place Order" handleBtnClick={handlePlaceOrder} />
                                </>
                                : <ButtonC text="Add Address" handleBtnClick={handleAddAddress} />
                        }
                        <AddressModal handleOpen={setOpen} open={open} setAddress={setAddress}/>
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
        updateOrderList: (orderList) => dispatch(updateOrderList(orderList))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);