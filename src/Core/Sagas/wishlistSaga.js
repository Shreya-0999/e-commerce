import wishlist from'../Types/wishlistItemTypes';
import {put, all, takeLatest} from 'redux-saga/effects';

export function *getWishlistSaga(action) {
    try {
        let activeUser = JSON.parse(window.localStorage.getItem('activeUser'));
        yield put({ type: wishlist.WISHLIST_ITEM_SUCCESS, payload: activeUser.wishlist });
    }
    catch (err) {
        console.log("Wishlist Item Saga Error::: ", err)
    }
}
export default function* cartSaga() {
    yield all([
        yield takeLatest(wishlist.WISHLIST_ITEM_GET, getWishlistSaga),
    ])
}