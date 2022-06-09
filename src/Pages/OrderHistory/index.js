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
                <h1 className={classes.pageHeading}>My Orders</h1>
                <p className={classes.underline}></p>
                {
                    props.orderList.map((ele, key) => (
                        <Grid container className={classes.orderBox}>
                            <Grid item xs={12}>
                                <Typography className={`${classes.itemDetails} ${classes.bold}`}>#Order ID: {ele.orderId}</Typography>
                            </Grid>
                            <Grid item xs container className={classes.orderContainer}>
                                <Grid item xs={12} md={8}>
                                    {
                                        ele.orderItems.map((item, key) => (
                                            <Grid item xs={12} container className={classes.itemContainer} key={key}>
                                                <Grid item xs={12} md={4}>
                                                    <ButtonBase sx={{ width: 200, height: 230 }}>
                                                        <img alt="complex" src={item.image} className={classes.img}/>
                                                    </ButtonBase>
                                                </Grid>
                                                <Grid item xs={12} md={8} className = {classes.leftPadding}>
                                                    <Typography variant="h5" className={classes.productName}>{item.name}</Typography>
                                                    <Typography variant="body1" className={classes.itemDetails}>Qty: {item.quantity}</Typography>
                                                    <Typography variant="body1" className={classes.itemDetails}>Size: {item.size}</Typography>
                                                    <Typography variant="body1" className={classes.itemDetails}>Price: Rs {item.price}</Typography>
                                                </Grid>
                                            </Grid>
                                        ))
                                    }
                                </Grid>


                                <Grid item xs={4} md={4} container className={classes.priceSection}>
                                    <Grid item xs={12}>
                                        <h2 className={classes.orderHeading}>Shipping Details</h2>
                                        <p className={`${classes.itemDetails} ${classes.bold}`}>{ele.address.FullName}, {ele.address.MobileNo},</p>
                                        <p className={classes.itemDetails}>{ele.address.Locality}, {ele.address.Pincode}</p>
                                        <p variant="body1" className={classes.itemDetails}>{ele.address.State},</p>
                                        <p variant="body1" className={classes.itemDetails}>{ele.date}</p>
                                        <h2 className={classes.orderHeading}>Payment Summary</h2>
                                        <Typography variant="subtitle1" className={`${classes.itemDetails} ${classes.bold}`}>Amount Paid: Rs {ele.totalPrice}</Typography>
                                    </Grid>
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