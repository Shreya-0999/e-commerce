import NavBar from "../../Components/NavBar/index";
import { useParams, useNavigate } from 'react-router-dom';
import { getItemDetails } from '../../Core/Actions/productItemsAction';
import { addToCart } from '../../Core/Actions/cartItemsAction';
import { addtoWishlist } from '../../Core/Actions/wishlistAction';
import { connect } from 'react-redux';
import { useEffect, useState } from "react";
import ButtonC from "../../Components/Button";
import RadioButtons from '../../Components/RadioButtons'
import Dropdown from '../../Components/Dropdown'
import './Styles/index.css';

const ProductDetail = (props) => {
    const navigate = useNavigate();
    const { section, id } = useParams();
    const [itemSize, setItemSize] = useState('');
    const [itemQuantity, setItemQuantity] = useState(1);
    const [cartValidation, setCardValidation] = useState(false);
    const [goCartVisible, setGoCartVisible] = useState(false);

    const handleAddToCart = () => {
        if (itemSize) {
            props.addToCart(id, itemQuantity, itemSize);
            setGoCartVisible(true)
        }
        else {
            setCardValidation(true)
        }
        // props.addToCart(id, itemQuantity, itemSize);
    }
    const handleAddToWishlist = () => {
        console.log("hello");
        props.addtoWishlist(id);
    }

    const handleGoToCart = () => {
        navigate("/cart");
    }

    useEffect(() => {
        props.getItemDetails({ section, id });
    }, [])

    return (
        <>
            <NavBar />
            {props.itemDetail && (<div className="details_innerContainer">
                <div className="imageSection">
                    {props?.itemDetail[0]?.details.images.map((ele, key) => (
                        <>
                            <div className="detail-item-imageBox">
                                <img src={ele} alt="item" key={key} className="detail-item-img" />
                            </div>
                        </>
                    ))}
                </div>
                <div className="detailSection">
                    <div className="detail-item-headerSetion">
                        <h1 className="detail-itemName">{props?.itemDetail[0]?.name}</h1>
                        <p>----</p>
                    </div>
                    <div className="detail-item-priceSetion">
                        <h2>Rs {props?.itemDetail[0]?.price}</h2>
                        <p>Price inclusive of all taxes</p>
                    </div>
                    <div className="detail-item-sizeSection">
                        <RadioButtons itemDetail={props?.itemDetail[0]?.details} setItemSize={setItemSize} setCardValidation={setCardValidation} />
                    </div>
                    <div className="detail-item-quantitySection">
                        <Dropdown label='quantity' value={itemQuantity} setValue={setItemQuantity} />
                    </div>
                    <div className="detail-item-buttonSection">
                        {cartValidation ? <p className="detail-validation">Select a size.</p> : <></>}
                        {
                            goCartVisible ?
                                <ButtonC text={'Go to Cart'} handleBtnClick={handleGoToCart} />
                                :
                                <ButtonC text={'Add to Cart'} handleBtnClick={handleAddToCart} />

                        }
                        <ButtonC text={'Add to Wishlist'} handleBtnClick={handleAddToWishlist} />
                    </div>
                    <div className="detail-item-description">
                        <p>{props?.itemDetail[0]?.details.description}</p>
                    </div>
                </div>
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);