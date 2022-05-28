import { combineReducers } from "redux";
import userReducer from "../Reducers/userReducer";
import productItemsReducer from "../Reducers/productItemsReducer";
import cartItemsReducer from "../Reducers/cartItemsReducer";
import wishlistReducer from "../Reducers/wishlistReducer";

const rootReducer = combineReducers({
    user: userReducer,
    productItems: productItemsReducer,
    cart: cartItemsReducer,
    wishlist: wishlistReducer
});
export default rootReducer;