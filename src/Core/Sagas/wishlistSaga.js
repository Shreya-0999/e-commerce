import wishlist from'../Types/wishlistItemTypes';
import {put} from 'redux-saga/effects';

export function *getWishlistSaga(action) {
    try {
        let wishlistArr = JSON.parse(window.localStorage.getItem('wishlist'));
        yield put({ type: wishlist.WISHLIST_ITEM_SUCCESS, payload: wishlistArr });
    }
    catch (err) {
        console.log("Wishlist Item Saga Error::: ", err)
    }
}