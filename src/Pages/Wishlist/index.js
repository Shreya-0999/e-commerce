import NavBar from "../../Components/NavBar";
import Message from "../../Components/Message";
import ProductCard from "../../Components/ProductCard"
import { connect } from 'react-redux';
import { addToCart } from '../../Core/Actions/cartItemsAction';
import { getWishlistStart, deleteFromWishlist } from '../../Core/Actions/wishlistAction';
import { useEffect, useState } from "react";
import "./Styles/index.css";
const Wishlist = (props) => {
    const handleMoveToCart = (id) => {
        props.addToCart(id,1,'M');
        props.deleteFromWishlist(id);
    }

    const handleRemove = (id) => {
        props.deleteFromWishlist(id);
    }
    let action = [
        {
            text: 'Move To Cart',
            handleBtn: handleMoveToCart
        },
        {
            text: 'Remove',
            handleBtn: handleRemove
        }
    ]

    useEffect(() => {
        props.getWishlistStart();
    }, [])

    return (
        <>
            <NavBar />
            {
                props?.wishlist
                    ? <div className="container">
                        {
                            props?.wishlist.map((item, index) => (
                                <>
                                    <div>
                                        <ProductCard
                                            key={index}
                                            id={item.id}
                                            section={item.section}
                                            image={item.image}
                                            name={item.name}
                                            price={item.price}
                                            action={action}
                                        />
                                    </div>
                                </>
                            ))
                        }
                    </div>
                    : <Message
                        text='Your wishlist is empty'
                    />
            }

        </>
    )
}

const mapStateToProps = ({ wishlist }) => {
    return {
        wishlist: wishlist.wishlistItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getWishlistStart: () => dispatch(getWishlistStart()),
        deleteFromWishlist: (id) => dispatch(deleteFromWishlist(id)),
        addToCart: (id, quantity, size) => dispatch(addToCart(id, quantity, size)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);