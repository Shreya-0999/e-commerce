import cartItems from '../Types/cartItemstype';
import { put } from 'redux-saga/effects';


export function* getCartSaga(action) {
    try {
        let cartArr = JSON.parse(window.localStorage.getItem('cart'));
        yield put({ type: cartItems.CART_ITEM_SUCCESS, payload: cartArr });
    }
    catch (err) {
        console.log("Cart Item Saga Error::: ", err)
    }
}