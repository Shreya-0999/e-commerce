import productItemsTypes from "../Types/productItemsTypes";
import { put, all, takeLatest } from 'redux-saga/effects';
import {getSectionWiseItem, itemDetails} from './Utils/funtions'

export function* productItems(action) {
    try {
        let  productItems = getSectionWiseItem(action.payload);
        yield put({ type: productItemsTypes.PRODUCT_ITEMS_SUCCESS, payload: productItems });
    }
    catch (err) {
        yield put({ type: productItemsTypes.PRODUCT_ITEMS_FAIL, payload: err })
    }
}

export function* itemDetailSaga(action) {
    try {
        let details = itemDetails(action.payload.id, action.payload.section)
        yield put({ type: productItemsTypes.ITEM_DETAILS_SUCCESS, payload: details });
    }
    catch (err) {
        yield put({ type: productItemsTypes.ITEM_DETAILS_ERROR, payload: err })
    }
}

export default function* productItemsSaga() {
    yield all([
        yield takeLatest(productItemsTypes.PRODUCT_ITEMS_GET, productItems),
        yield takeLatest(productItemsTypes.ITEM_DETAILS_GET, itemDetailSaga),
    ])
}