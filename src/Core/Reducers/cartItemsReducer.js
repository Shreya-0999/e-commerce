import cartItems from '../Types/cartItemstype';
import {addToCart, deleteFromCart, updateCartItem, emptyCart, updateOrderList} from './Utils/functions';
const INITIAL_STATE = {
    cartItems: null,
    orderList:null
}

const cartItemsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cartItems.CART_ITEM_ADD:
            return{
                ...state,
                cartItems: addToCart(action)
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
                cartItems: deleteFromCart(action)
            }
        case cartItems.CART_ITEM_UPDATE:
            return{
                ...state,
                cartItems: updateCartItem(action)
            }
        case cartItems.CART_ITEM_EMPTY:
            return{
                ...state,
                cartItems:emptyCart()
            }
        case cartItems.ORDER_LIST_GET:
            return{
                ...state,
            }
        case cartItems.ORDER_LIST_SUCCESS:
            return{
                ...state,
                orderList: action.payload,
            }
        case cartItems.ORDER_LIST_UPDATE:
            return{
                ...state,
                orderList: updateOrderList(action),
            }
        default: return state
    }
}
export default cartItemsReducer;