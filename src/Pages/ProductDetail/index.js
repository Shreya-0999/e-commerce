import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, ImageList, ImageListItem, IconButton } from '@mui/material';
import { getItemDetails } from '../../Core/Actions/productItemsAction';
import { addToCart } from '../../Core/Actions/cartItemsAction';
import { addtoWishlist, deleteFromWishlist } from '../../Core/Actions/wishlistAction';
import NavBar from "../../Components/NavBar/index";
import ButtonC from "../../Components/Button";
import RadioButtons from '../../Components/RadioButtons'
import Dropdown from '../../Components/Dropdown'
import useStyle from './Styles/useStyles.js';
import constants from './Utils/constants';
import Breadcrumb from '../../Components/Breadcrums'

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
        if (props.currentUser) {
            if (itemSize) {
                props.addToCart(id, section, itemQuantity, itemSize);
                setGoCartVisible(true)
            }
            else {
                setCardValidation(true)
            }
        }
        else
            navigate('/login')
    }
    const handleAddToWishlist = () => {
        if (props.currentUser) {
            if (wishlisted) {
                props.deleteFromWishlist(id);
                setWishlisted(false);
            }
            else {
                props.addtoWishlist(section, id);
                setWishlisted(true);
            }
        }
        else
            navigate('/login')
    }

    const handleGoToCart = () => {
        navigate("/cart");
    }

    useEffect(() => {
        props.getItemDetails({ section, id });
        let activeUser = JSON.parse(window.localStorage.getItem("activeUser"));
        if (activeUser) {
            let newWishlistArr = activeUser.wishlist?.map(ele => {
                if (id == ele.id) {
                    setWishlisted(true);
                }
                else {
                    setWishlisted(false);
                }
            })
        }
    }, [])

    return (
        <>
            <NavBar />
            <div className={classes.container}>
                <Breadcrumb breadcrumItems={[section, props?.itemDetail[0]?.name]} />
                {props.itemDetail &&
                    (
                        <Grid container >
                            <Grid item md={7}>
                                <ImageList cols={2} className={classes.imgBox} gap={16}>
                                    {
                                        props?.itemDetail[0]?.imageURLs.map((ele, key) => (
                                            <ImageListItem key={key} className={classes.imageList}>
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
                            <Grid item md={5} xs={12} className={classes.paddingLeft}>
                                <Grid item md={12} xs={12} >
                                    <h1 className={classes.pageHeading}>{props?.itemDetail[0]?.name}</h1>
                                    <p className={classes.subHeader}>{props?.itemDetail[0]?.subHeader}</p>
                                    <p className={classes.underline}></p>
                                    <h1 className={classes.header}>{constants.RS} {props?.itemDetail[0]?.price}/-</h1>
                                    <p className={`${classes.subHeader} ${classes.mtZero}`}>{constants.TAX_MSG}</p>
                                    <div className={classes.space}>
                                        <Dropdown label='Quantity' value={itemQuantity} setValue={setItemQuantity} />
                                    </div>
                                    <div className={classes.space}>
                                        <RadioButtons itemDetail={props?.itemDetail[0]} setItemSize={setItemSize} setCardValidation={setCardValidation} />
                                        {cartValidation ? <p className={`${classes.subHeader} ${classes.errorMsg}`}>{constants.SIZE_MSG}</p> : <></>}
                                    </div>
                                    <Grid container className={classes.btnBox}>
                                        <Grid item md={9}>
                                            {
                                                goCartVisible ?
                                                    <ButtonC
                                                        text={'Go to Cart'}
                                                        handleBtnClick={handleGoToCart}
                                                        variant='contained'
                                                        color='secondary'
                                                        width='full'
                                                    />
                                                    :
                                                    <ButtonC
                                                        text={'Add to Cart'}
                                                        handleBtnClick={handleAddToCart}
                                                        variant='contained'
                                                        color='secondary'
                                                        width='full'
                                                    />

                                            }
                                            {
                                                wishlisted
                                                    ?
                                                    <ButtonC
                                                        text={'Wishlisted'}
                                                        handleBtnClick={handleAddToWishlist}
                                                        variant='outlined'
                                                        color='text'
                                                        width='full'

                                                    />
                                                    :
                                                    <ButtonC
                                                        text={'Add to Wishlist'}
                                                        handleBtnClick={handleAddToWishlist}
                                                        variant='outlined'
                                                        color='text'
                                                        width='full'
                                                    />
                                            }
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    )}
            </div>
        </>
    )
}
const mapStateToProps = ({ productItems, user }) => {
    return {
        itemDetail: productItems.itemDetail,
        currentUser: user.currentUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getItemDetails: (section, id) => dispatch(getItemDetails(section, id)),
        addToCart: (id, section, quantity, size) => dispatch(addToCart(id, section, quantity, size)),
        addtoWishlist: (section, id) => dispatch(addtoWishlist(section, id)),
        deleteFromWishlist: (id) => dispatch(deleteFromWishlist(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);