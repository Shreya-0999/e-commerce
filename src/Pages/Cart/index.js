import NavBar from '../../Components/NavBar';
import ButtonC from '../../Components/Button'
import { connect } from 'react-redux';
import { getCartStart } from '../../Core/Actions/cartItemsAction';
import './Styles/index.css';
import { useEffect } from 'react';

const Cart = (props) => {

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
                                    </div>
                                    <div className="item-price">
                                        <p>{ele.price}</p>
                                    </div>
                                </div>
                                <div className="itemSection-item-action">
                                    <ButtonC text="Remove" />
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);