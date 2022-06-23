import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, ImageList, ImageListItem } from '@mui/material'
import { getItemDetails } from '../../Core/Actions/productItemsAction';
import { addToCart } from '../../Core/Actions/cartItemsAction';
import { addtoWishlist, deleteFromWishlist } from '../../Core/Actions/wishlistAction';
import NavBar from "../../Components/NavBar/index";
import ButtonC from "../../Components/Button";
import RadioButtons from '../../Components/RadioButtons'
import Dropdown from '../../Components/Dropdown'
import useStyle from './Styles/useStyles.js';

const ProductDetail = (props) => {
    const navigate = useNavigate();
    const classes = useStyle();
    const { section, id } = useParams();
    const [itemSize, setItemSize] = useState('');
    const [itemQuantity, setItemQuantity] = useState(1);
    const [cartValidation, setCardValidation] = useState(false);
    const [goCartVisible, setGoCartVisible] = useState(false);
    const [wishlisted, setWishlisted] = useState(false);

    const handleAddToCart = () => {
        if (itemSize) {
            props.addToCart(id, itemQuantity, itemSize);
            setGoCartVisible(true)
        }
        else {
            setCardValidation(true)
        }
    }
    const handleAddToWishlist = () => {
        if (wishlisted) {
            props.deleteFromWishlist(id);
            setWishlisted(false);
        }
        else {
            props.addtoWishlist(id);
            setWishlisted(true);
        }
    }

    const handleGoToCart = () => {
        navigate("/cart");
    }

    useEffect(() => {
        props.getItemDetails({ section, id });
        let wishlistArr = JSON.parse(window.localStorage.getItem("wishlist"));
        let newWishlistArr = wishlistArr?.map(ele => {
            if (id == ele.id) {
                setWishlisted(true);
            }
            else {
                setWishlisted(false);
            }
        })
    }, [])

    return (
        <>
            <NavBar />
            {props.itemDetail &&
                (
                    <div className={classes.container}>
                        <Grid container spacing={6}>
                            <Grid item md={7}>
                                <ImageList cols={2} className={classes.imgBox} gap={16}>
                                    {
                                        props?.itemDetail[0]?.details.images.map((ele, key) => (
                                            <ImageListItem key={key}>
                                                <img
                                                    className={classes.img}
                                                    src={`${ele}?w=150&h=150&fit=crop&auto=format`}
                                                    srcSet={`${ele}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
                                                    alt={ele}
                                                    loading="lazy"
                                                />
                                            </ImageListItem>
                                        ))
                                    }
                                </ImageList>
                            </Grid>
                            <Grid item md={5} xs={12} container>
                                <Grid item md={12} xs={12}>
                                    <h1 className={classes.pageHeading}>{props?.itemDetail[0]?.name}</h1>
                                    <p className={classes.subHeader}>Shreya</p>
                                    <p className={classes.underline}></p>
                                    <h1 className={classes.header}>Rs {props?.itemDetail[0]?.price}/-</h1>
                                    <p className={`${classes.subHeader} ${classes.mtZero}`}>Price inclusive of all taxes</p>
                                    <div className={classes.space}>
                                        <Dropdown label='Quantity' value={itemQuantity} setValue={setItemQuantity} />
                                    </div>
                                    <div className={classes.space}>
                                        <RadioButtons itemDetail={props?.itemDetail[0]?.details} setItemSize={setItemSize} setCardValidation={setCardValidation} />
                                    </div>
                                    <div className={classes.btnBox}>
                                        {cartValidation ? <p className="detail-validation">Select a size.</p> : <></>}
                                        {
                                            goCartVisible ?
                                                <ButtonC
                                                    text={'Go to Cart'}
                                                    handleBtnClick={handleGoToCart}
                                                    variant='contained'
                                                    color='primary'
                                                />
                                                :
                                                <ButtonC
                                                    text={'Add to Cart'}
                                                    handleBtnClick={handleAddToCart}
                                                    variant='contained'
                                                    color='primary'
                                                />

                                        }
                                        {
                                            wishlisted
                                                ? <ButtonC
                                                    text={'Wishlisted'}
                                                    handleBtnClick={handleAddToWishlist}
                                                    variant='outlined'
                                                    color='primary'

                                                />
                                                : <ButtonC
                                                    text={'Add to Wishlist'}
                                                    handleBtnClick={handleAddToWishlist}
                                                    variant='outlined'
                                                    color='primary'
                                                />
                                        }
                                    </div>
                                </Grid>
                            </Grid>

                        </Grid>

                    </div>)}
        </>
    )
}
const mapStateToProps = ({ productItems }) => {
    return {
        itemDetail: productItems.itemDetail
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getItemDetails: (section, id) => dispatch(getItemDetails(section, id)),
        addToCart: (id, quantity, size) => dispatch(addToCart(id, quantity, size)),
        addtoWishlist: (id) => dispatch(addtoWishlist(id)),
        deleteFromWishlist: (id) => dispatch(deleteFromWishlist(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);