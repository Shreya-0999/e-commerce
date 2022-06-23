import { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductCard from "../../Components/ProductCard";
import NavBar from "../../Components/NavBar/index";
import useStyles from './Styles/useStyles'
import { Grid } from '@mui/material';
import { itemsLoadStart } from '../../Core/Actions/productItemsAction';

const ProductList = (props) => {
    const [section, setSection] = useState()
    const navigate = useNavigate();
    const classes = useStyles();
    const handleProductClick = (id, section) => {
        navigate('/' + section + '/' + id);
    }
    useEffect(() => {
        const url = window.location.href;
        let section = url.split('/');
        section = section[section.length - 1];
        setSection(section.charAt(0).toUpperCase() + section.slice(1));
        props.itemsLoadStart(section)

    }, []);
    return (
        <>
            <NavBar />
            <div className={classes.container}>
                <h1 className={classes.pageHeading}>{section}</h1>
                <p className={classes.underline}></p>
                <Grid container spacing={2}>
                    {props.items.map((ele, key) => (
                        <Grid item md={4} key={key} onClick={() => handleProductClick(ele.id, ele.section)}>
                            <ProductCard key={key} {...ele} />
                        </Grid>
                    ))}
                </Grid>
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