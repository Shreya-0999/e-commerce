import cartItems from '../Types/cartItemstype';

export const addToCart = (id, section, quantity, size) =>({
    type: cartItems.CART_ITEM_ADD,
    id, section, quantity, size
})

export const getCartStart = () => ({
    type: cartItems.CART_ITEM_GET,
    // payload:
})

export const getCartSuccess = (cartItems) => ({
    type: cartItems.CART_ITEM_SUCCESS,
    payload: cartItems
})

export const deleteFromCart = (item) =>({
    type: cartItems.CART_ITEM_DELETE,
    item
})

export const updateCartItem = (item)=>({
    type: cartItems.CART_ITEM_UPDATE,
    item
})

export const emptyCart = ()=>({
    type: cartItems.CART_ITEM_EMPTY
})

export const getOrderListStart = () => ({
    type: cartItems.ORDER_LIST_GET,
})

export const getOrderListSuccess = (orderList) => ({
    type: cartItems.ORDER_LIST_SUCCESS,
    payload: orderList
})

export const updateOrderList = (item, address, totalPrice)=>({
    type: cartItems.ORDER_LIST_UPDATE,
    item, address, totalPrice
})