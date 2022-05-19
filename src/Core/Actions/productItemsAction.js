import productItemsTypes from "../Types/productItemsTypes";

export const itemsLoadStart = (section) => ({
    type: productItemsTypes.PRODUCT_ITEMS_GET,
    payload: section
});

export const itemsLoadSuccess = (items) => ({
    type: productItemsTypes.PRODUCT_ITEMS_SUCCESS,
    payload: items,
})

export const itemsLoadFail = (err) => ({
    type: productItemsTypes.PRODUCT_ITEMS_FAIL,
    payload: err,
})

export const getItemDetails = ({section, id}) => ({
    type: productItemsTypes.ITEM_DETAILS_GET,
    payload: { section, id }
});
export const ItemDetailsSuccess = (itemDetail) => ({
    type: productItemsTypes.ITEM_DETAILS_GET,
    payload: itemDetail
});
export const errItemDetails = (err) => ({
    type: productItemsTypes.ITEM_DETAILS_GET,
    payload: err
});