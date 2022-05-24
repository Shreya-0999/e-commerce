import NavBar from '../../Components/NavBar';
import ButtonC from '../../Components/Button';
import Dropdown from '../../Components/Dropdown';
import { connect } from 'react-redux';
import { getCartStart, deleteFromCart } from '../../Core/Actions/cartItemsAction';
import './Styles/index.css';
import { useEffect } from 'react';

const Cart = (props) => {

    const handleRemoveFromCart = (item) => {
        props.deleteFromCart(item);
    }

    useEffect(() => {
        props.getCartStart();
    }, [])
    return (
        <>
            <NavBar />
            <div className="cart">
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
                                        <Dropdown label='Quantity' value={ele.quantity} />
                                        <Dropdown label='Sizes' value={ele.size} itemArr={ele.sizeAvailable} />
                                    </div>
                                    <div className="item-price">
                                        <p>{ele.price * ele.quantity}</p>
                                    </div>
                                </div>
                                <div className="itemSection-item-action">
                                    <ButtonC text="Remove" handleBtnClick={()=>{handleRemoveFromCart(ele)}} />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="cart-priceSection">Price</div>
            </div>

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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);