import {all, takeEvery} from 'redux-saga/effects';
import {productItemsSaga, itemDetailSaga} from '../Sagas/productItemsSaga';
import {loginSaga, signupSaga, logoutSaga} from '../Sagas/authSaga';
import user from '../Types/userTypes';
import productItemsTypes from '../Types/productItemsTypes';
import cartItem from '../Types/cartItemstype';
import wishlist from'../Types/wishlistItemTypes';
import {getCartSaga} from '../Sagas/cartSaga';
import {getWishlistSaga} from '../Sagas/wishlistSaga';

function *rootSaga(){
    // yield all([authSaga()])
    yield takeEvery(user.LOGIN_START, loginSaga);
    yield takeEvery(user.SIGNUP_START, signupSaga);
    yield takeEvery(user.LOGOUT_START, logoutSaga);

    yield takeEvery(productItemsTypes.PRODUCT_ITEMS_GET, productItemsSaga);
    yield takeEvery(productItemsTypes.ITEM_DETAILS_GET, itemDetailSaga);

    yield takeEvery(cartItem.CART_ITEM_GET, getCartSaga);
    yield takeEvery(wishlist.WISHLIST_ITEM_GET, getWishlistSaga);
}

export default rootSaga;