import { useEffect } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductCard from "../../Components/ProductCard";
import NavBar from "../../Components/NavBar/index";
import './Styles/index.css'
import { itemsLoadStart } from '../../Core/Actions/productItemsAction';

const ProductList = (props) => {
    const navigate = useNavigate();
    const handleProductClick = (id, section) => {
        navigate('/' + section + '/' + id);
    }
    useEffect(() => {
        const url = window.location.href;
        let section = url.split('/');
        section = section[section.length - 1];
        props.itemsLoadStart(section)
    }, []);
    return (
        <>
            <NavBar />
            <div className="product-list-outerContainer">
                <div className="product-list-innerContainer">
                    {props.items.map((ele, key) => (
                        <div onClick={() => handleProductClick(ele.id, ele.section)}>
                            <ProductCard key={key} {...ele} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

const mapDispatchtoProps = (dispatch) => {
    return {
        itemsLoadStart: (section) => dispatch(itemsLoadStart(section))
    }
}

const mapStateToProps = ({ productItems }) => {
    return {
        items: productItems.items
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(ProductList);