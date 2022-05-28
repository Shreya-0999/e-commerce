import NavBar from "../../Components/NavBar";
import ProductCard from "../../Components/ProductCard"
import { connect } from 'react-redux';
import { getWishlistStart, deleteFromWishlist } from '../../Core/Actions/wishlistAction';
import { useEffect, useState } from "react";
import "./Styles/index.css";
const Wishlist = (props) => {
    const handleMoveToCart = ()=>{

    }

    const handleRemove= (id)=>{
        props.deleteFromWishlist(id);
        console.log("hello",id)

    }
    let action=[
        {
            text:'Move To Cart',
            // handleBtn: handleRemove
        },
        {
            text:'Remove',
            handleBtn: handleRemove
        }
    ]

    useEffect(() => {
        props.getWishlistStart();
    }, [])

    return (
        <>
            <NavBar />
            <div className="container">
                {
                    props?.wishlist.map((item, index) => (
                        <>
                            <ProductCard
                                key={index}
                                id={item.id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                action={action}
                            />
                        </>
                    ))
                }
            </div>
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
        deleteFromWishlist: (id) => dispatch(deleteFromWishlist(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);