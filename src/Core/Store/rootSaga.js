import {all, call} from 'redux-saga/effects';
import authSaga from '../Sagas/authSaga';
import cartSaga from '../Sagas/cartSaga';
import productItemsSaga from '../Sagas/productItemsSaga';
import wishlistSaga from '../Sagas/wishlistSaga';

export default function* rootSaga(){
    yield all([
        call(authSaga),
        call(cartSaga),
        call(productItemsSaga),
        call(wishlistSaga),
    ])
}
