import productItemsTypes from "../Types/productItemsTypes";
import { put } from 'redux-saga/effects';
import items from '../../JSON/productDetails.json';

export function* productItemsSaga(action) {
    try {
        // bring the items from the server and pass it to the reducer
        const filteredItems= items.filter((ele)=>{
            if(ele.section === action.payload){
                return ele;
            }
        })
        yield put({ type: productItemsTypes.PRODUCT_ITEMS_SUCCESS, payload: filteredItems });
    }
    catch (err) {
        yield put({ type: productItemsTypes.PRODUCT_ITEMS_FAIL, payload: err })
    }
}

export function* itemDetailSaga(action) {
    try {
        // get the item detail
        const filteredItems= items.filter((ele)=>{
            if(ele.id == action.payload.id){
                return ele;
            }
        })
        yield put({ type: productItemsTypes.ITEM_DETAILS_SUCCESS, payload: filteredItems });
    }
    catch (err) {
        yield put({ type: productItemsTypes.ITEM_DETAILS_ERROR, payload: err })
    }
}
