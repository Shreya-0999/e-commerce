import productItems from '../Types/productItemsTypes';
const INITIAL_STATE = {
    items: [],
    itemDetail: {},
    loading: false,
    error: ''
}

const productItemsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case productItems.PRODUCT_ITEMS_GET:
            return {
                ...state,
                loading: true
            }
        case productItems.PRODUCT_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload
            }
        case productItems.PRODUCT_ITEMS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case productItems.ITEM_DETAILS_GET:
            return {
                ...state,
                loading: true
            }
        case productItems.ITEM_DETAILS_SUCCESS:
            return {
                ...state,
                itemDetail: action.payload,
                loading: false
            }
        case productItems.ITEM_DETAILS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
}

export default productItemsReducer;