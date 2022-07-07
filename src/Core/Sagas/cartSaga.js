import cartItems from '../Types/cartItemstype';
import { all, takeLatest, put } from 'redux-saga/effects';


export function* getCartSaga(action) {
    try {
        let activeUser = JSON.parse(window.localStorage.getItem('activeUser'));
        yield put({ type: cartItems.CART_ITEM_SUCCESS, payload: activeUser.cart });
    }
    catch (err) {
        console.log("Cart Item Saga Error::: ", err)
    }
}
export function* getOrderListSaga(action) {
    try {
        let activeUser = JSON.parse(window.localStorage.getItem('activeUser'));
        yield put({ type: cartItems.ORDER_LIST_SUCCESS, payload: activeUser.orderHistory });
    }
    catch (err) {
        console.log("Order Item Saga Error::: ", err)
    }
}

export default function* cartSaga() {
    yield all([
        yield takeLatest(cartItems.CART_ITEM_GET, getCartSaga),
        yield takeLatest(cartItems.ORDER_LIST_GET, getOrderListSaga),
    ])
}