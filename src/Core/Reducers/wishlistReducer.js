import wishlistItemTypes from "../Types/wishlistItemTypes";
import { addtoWishlist, deleteFromWishlist } from "./Utils/functions";
const INITIAL_STATE = {
    wishlistItems: [],
}

const wishlistReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case wishlistItemTypes.WISHLIST_ITEM_ADD:
            return{
                ...state,
                wishlistItems: addtoWishlist(action)
            }
        case wishlistItemTypes.WISHLIST_ITEM_GET:
            return{
                ...state,
            }
        case wishlistItemTypes.WISHLIST_ITEM_SUCCESS:
            return{
                ...state,
                wishlistItems: action.payload
            }
        case wishlistItemTypes.WISHLIST_ITEM_DELETE:
            return{
                ...state,
                wishlistItems: deleteFromWishlist(action)
            }
        default:
            return state;
    }
}
export default wishlistReducer;