import './Styles/index.css';
import NavBar from '../../Components/NavBar';
import {getOrderListStart} from '../../Core/Actions/cartItemsAction';
import { connect } from 'react-redux';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
const OrderHistory = (props) => {
    useEffect(()=>{
        props.getOrderListStart();
    },[])
    return (
        <>
        {console.log(props.orderList)}
            <NavBar />
            <div>
                <h1>My Orders</h1>
                <div>

                </div>
            </div>
        </>
    )
}
const mapStateToProps = ({user,cart}) => {
    return{
        orderList: cart.orderList,
        currentUser: user.currentUser
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getOrderListStart: ()=>dispatch(getOrderListStart()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);