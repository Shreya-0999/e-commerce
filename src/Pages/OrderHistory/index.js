import useStyles from './Styles/useStyles';
import NavBar from '../../Components/NavBar';
import { getOrderListStart } from '../../Core/Actions/cartItemsAction';
import { connect } from 'react-redux';
import { Typography, Grid, ButtonBase } from '@mui/material';
import { useEffect } from 'react';
const OrderHistory = (props) => {
    const classes = useStyles();
    useEffect(() => {
        props.getOrderListStart();
    }, [])
    return (
        <>
            {console.log(props.orderList)}
            <NavBar />
            <div className={classes.container}>
                {/* <Stack className={classes.stack}> */}
                <h1>My Orders</h1>
                {
                    props.orderList.map((ele, key) => (
                        <Grid container className={classes.orderBox}>
                            <Grid item xs={12}>
                                <Typography className={classes.itemDetails}>#Order ID: {ele.orderId}</Typography>
                            </Grid>
                            <Grid item xs container className={classes.orderContainer}>
                                <Grid item xs={8} md={8}>
                                    {
                                        ele.orderItems.map((item, key) => (
                                            <Grid item xs={12} container className={classes.itemContainer}>
                                                <Grid item xs={12} md={4}>
                                                    <ButtonBase sx={{ width: 200, height: 230 }}>
                                                        <img alt="complex" src={item.image} className={classes.img}/>
                                                    </ButtonBase>
                                                </Grid>
                                                <Grid item xs={12} md={8}>
                                                    <Typography className={classes.itemDetails}>{item.name}</Typography>
                                                    <Typography className={classes.itemDetails}>Qty: {item.quantity}</Typography>
                                                    <Typography className={classes.itemDetails}>Size: {item.size}</Typography>
                                                    <Typography className={classes.itemDetails}>Price: {item.price}</Typography>
                                                </Grid>
                                            </Grid>
                                        ))
                                    }
                                </Grid>


                                <Grid item xs={4} md={4} container className={classes.priceSection}>
                                    <h5>Hello Name</h5>
                                </Grid>

                            </Grid>
                        </Grid>
                    ))
                }

                {/* </Stack> */}

            </div>
        </>
    )
}
const mapStateToProps = ({ user, cart }) => {
    return {
        orderList: cart.orderList,
        currentUser: user.currentUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getOrderListStart: () => dispatch(getOrderListStart()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);