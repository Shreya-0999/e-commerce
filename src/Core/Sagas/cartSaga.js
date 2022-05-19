import cartItems from '../Types/cartItemstype';
import { getItemFromJSON } from './Utils/functionUtils';
import { put, takeLatest } from 'redux-saga/effects';

export function* addToCartSaga(action) {
    try {
        let cartArr = JSON.parse(window.localStorage.getItem('cart'));
        let itemObj = getItemFromJSON(action.id);
        console.log("itemObj::: ", itemObj);

        const cartObj = {
            id: action.id,
            quantity: action.quantity,
            size: action.size,
            image: itemObj.image,
            name: itemObj.name,
            price: itemObj.price,
            sizeAvailable: itemObj.details.size
        }
        cartArr? cartArr.push(cartObj) : cartArr = [cartObj];
        window.localStorage.setItem("cart", JSON.stringify(cartArr));
    }
    catch (err) {
        console.log("Cart Item Saga Error::: ", err)
    }
}

export function* getCartSaga(action) {
    try {
        let cartArr = JSON.parse(window.localStorage.getItem('cart'));
        yield put({ type: cartItems.CART_ITEM_SUCCESS, payload: cartArr });
    }
    catch (err) {
        console.log("Cart Item Saga Error::: ", err)
    }
}