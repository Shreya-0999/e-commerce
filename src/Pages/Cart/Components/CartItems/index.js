import { connect } from 'react-redux';
import ButtonC from '../../../../Components/Button';
import Dropdown from '../../../../Components/Dropdown';
import { getCartStart, deleteFromCart, updateCartItem } from '../../../../Core/Actions/cartItemsAction';
import useStyles from './Styles/useStyles.js';
import { addtoWishlist } from '../../../../Core/Actions/wishlistAction';
import constants from '../../Utils/constants';

const CartItems = (props) => {
    const classes = useStyles();
    const handleRemoveFromCart = (item) => {
        props.deleteFromCart(item);
    }
    const handleMoveToWishlist = (item) => {
        console.log(item.id);
        props.addtoWishlist(item.section, item.id);
        props.deleteFromCart(item);
    }
    const handleDropdownUpdate = (item, value, label) => {
        label = label.charAt(0).toLowerCase() + label.slice(1)
        item[label] = value;
        props.updateCartItem(item)
    }
    return (
        <>
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
                                                label='Quantity'
                                                value={ele.quantity}
                                                handleDropdownChange={(val, label) => { handleDropdownUpdate(ele, val, label) }}
                                            />
                                            <Dropdown
                                                section='Cart'
                                                label='Size'
                                                value={ele.size}
                                                itemArr={ele.sizeAvailable}
                                                handleDropdownChange={(val, label) => { handleDropdownUpdate(ele, val, label) }}
                                            />
                                        </div>
                                    </div>
                                    <div className={classes.itemPrice}>
                                        <h2 className={classes.header}>{constants.RS} {ele.price * ele.quantity}</h2>
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
        </>
    )

}
const mapStateToProps = ({ cart }) => {
    return {
        cartItems: cart.cartItems,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCartStart: () => dispatch(getCartStart()),
        deleteFromCart: (item) => dispatch(deleteFromCart(item)),
        updateCartItem: (item) => dispatch(updateCartItem(item)),
        addtoWishlist: (section, id) => dispatch(addtoWishlist(section, id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItems);