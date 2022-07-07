import useStyles from './Styles/useStyles';
import NavBar from '../../Components/NavBar';
import Message from "../../Components/Message";
import { getOrderListStart } from '../../Core/Actions/cartItemsAction';
import { connect } from 'react-redux';
import { Grid, ButtonBase } from '@mui/material';
import { useEffect } from 'react';
import constants from './Utils/constants'
const OrderHistory = (props) => {
    const classes = useStyles();
    useEffect(() => {
        props.getOrderListStart();
    }, [])
    return (
        <>
            <NavBar />
            {
                props?.orderList
                    ? <div className={classes.container}>
                        <h1 className={classes.pageHeading}>{constants.MY_ORDER}</h1>
                        <p className={classes.underline}></p>
                        <Grid container spacing={2}>
                            {
                                props.orderList.map((ele, key) => (
                                    <Grid item md={4} key={key}>
                                        <Grid container className={classes.orderBox}>
                                            <Grid item xs={12} className={`${classes.topSection} ${classes.bottomBorder}`} >
                                                <h3 className={classes.header}>{constants.ORDER}{ele.orderId}</h3>
                                                <p className={classes.subHeader}>{ele.date}</p>
                                            </Grid>
                                            <Grid item xs={12} className={`${classes.middleSection} ${classes.bottomBorder}`} >
                                                {
                                                    ele.orderItems.map((item, key) => (
                                                        <Grid container key={key} className={classes.itemBox}>
                                                            <Grid item md={4}>
                                                                <ButtonBase sx={{ width: 120, height: 100 }}>
                                                                    <img alt="complex" src={item.image} className={classes.img} />
                                                                </ButtonBase>
                                                            </Grid>
                                                            <Grid item md={8} container className={`${classes.bottomBorder} ${classes.paddingLeft}`}>
                                                                <Grid item md={12}>
                                                                    <h3 className={classes.header}>{item.name}</h3>
                                                                </Grid>
                                                                <Grid item md={5}>
                                                                    <p className={classes.subHeader}>{constants.SIZE} {item.size}</p>
                                                                </Grid>
                                                                <Grid item md={5}>
                                                                    <p className={classes.subHeader}>{constants.QTY} {item.quantity}</p>
                                                                </Grid>
                                                                <Grid item md={12}>
                                                                    <h3 className={classes.header}> {constants.RS} {item.price}/-</h3>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    ))
                                                }
                                            </Grid>
                                            <Grid item container xs={12} className={classes.bottomSection}>
                                                <Grid item md={8}>
                                                    <p className={classes.subHeader}>{ele.address.FullName}, {ele.address.MobileNo}</p>
                                                    <h3 className={classes.header}>Rs {ele.totalPrice} /-</h3>
                                                </Grid>
                                                <Grid item md={4}>
                                                    {
                                                        ele.orderStatus === 'Confirmed'
                                                            ? <div className={classes.orderSucess}>{ele.orderStatus}</div>
                                                            : <div className={classes.orderFailure}>{ele.orderStatus}</div>
                                                    }

                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                ))
                            }
                        </Grid>
                    </div>
                    : <Message
                        text='You have no previous order'
                    />
            }
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