import NavBar from '../../Components/NavBar';
import ButtonC from '../../Components/Button';
import Dropdown from '../../Components/Dropdown';
import BasicTable from '../../Components/BasicTable';
import Message from '../../Components/Message';
import { connect } from 'react-redux';
import { getCartStart, deleteFromCart, updateCartItem, emptyCart } from '../../Core/Actions/cartItemsAction';
import './Styles/index.css';
import { useEffect } from 'react';
import { addtoWishlist } from '../../Core/Actions/wishlistAction';
import { useNavigate } from 'react-router-dom';

const Cart = (props) => {

    const handleRemoveFromCart = (item) => {
        props.deleteFromCart(item);
    }
    const handleMoveToWishlist=(item) =>{
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

    useEffect(() => {
        props.getCartStart();
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
                        <ButtonC text="Place Order" />
                    </div>
                </div>
                : <Message
                    text="Your cart is empty"                      
                />
            }

        </>
    )
}
const mapStateToProps = ({ cart }) => {
    return {
        cartItems: cart.cartItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCartStart: () => dispatch(getCartStart()),
        deleteFromCart: (item) => dispatch(deleteFromCart(item)),
        updateCartItem: (item) => dispatch(updateCartItem(item)),
        emptyCart: () => dispatch(emptyCart()),
        addtoWishlist: (id) => dispatch(addtoWishlist(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);