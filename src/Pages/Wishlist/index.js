import NavBar from "../../Components/NavBar";
import Message from "../../Components/Message";
import ProductCard from "../../Components/ProductCard"
import { Grid } from '@mui/material';
import { connect } from 'react-redux';
import { addToCart } from '../../Core/Actions/cartItemsAction';
import { getWishlistStart, deleteFromWishlist } from '../../Core/Actions/wishlistAction';
import { useEffect } from "react";
import useStyle from "./Styles/useStyle.js";
import Empty from '../../Assets/Message/empty.gif';
import constants from './Utils/constants'

const Wishlist = (props) => {
    const classes = useStyle();

    const handleMoveToCart = (id) => {
        props.addToCart(id, 1, 'M');
        props.deleteFromWishlist(id);
    }

    const handleRemove = (id) => {
        props.deleteFromWishlist(id);
    }

    let action = [
        {
            text: 'Move To Cart',
            handleBtn: handleMoveToCart,
            color: 'secondary',
            variant: 'contained'
        },
        {
            text: 'Remove',
            handleBtn: handleRemove,
            color: 'text',
            variant: 'outlined'
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
                    ? <div className={classes.container}>
                        <h1 className={classes.pageHeading}>{constants.WISHLIST}</h1>
                        <p className={classes.underline}></p>
                        <Grid container spacing={3}>
                            {
                                props?.wishlist.map((item, index) => (
                                    <>
                                        <Grid item md={3}>
                                            <ProductCard
                                                key={index}
                                                id={item.id}
                                                section={item.section}
                                                image={item.image}
                                                name={item.name}
                                                price={item.price}
                                                action={action}
                                            />
                                        </Grid>
                                    </>
                                ))
                            }
                        </Grid>
                    </div>
                    : <Message
                        text='Your wishlist is empty'
                        img={Empty}
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