import wishlistItemTypes from "../Types/wishlistItemTypes";

export const addtoWishlist = (section, id) => ({
    type: wishlistItemTypes.WISHLIST_ITEM_ADD,
    section, id
})

export const getWishlistStart = () => ({
    type: wishlistItemTypes.WISHLIST_ITEM_GET,
})

export const getWishlistSuccess = (wishlistItems) => ({
    type: wishlistItemTypes.WISHLIST_ITEM_SUCCESS,
    payload: wishlistItems
})

export const deleteFromWishlist = (id) => ({
    type: wishlistItemTypes.WISHLIST_ITEM_DELETE,
    id
})