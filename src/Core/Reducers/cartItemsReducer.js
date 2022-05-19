import cartItems from '../Types/cartItemstype';
const INITIAL_STATE = {
    cartItems: [],
    orderList:[]
}

const cartItemsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cartItems.CART_ITEM_ADD:
            return{
                ...state,
                cartItems: action.payload
            } 
        case cartItems.CART_ITEM_GET:
            return{
                ...state,
            }
        case cartItems.CART_ITEM_SUCCESS:
            return{
                ...state,
                cartItems: action.payload,
            }       
        case cartItems.CART_ITEM_DELETE:
            return{
                ...state,
                cartItems: action.payload
            }
        default: return state
    }
}
export default cartItemsReducer;