import { combineReducers } from "redux";
import userReducer from "../Reducers/userReducer";
import productItemsReducer from "../Reducers/productItemsReducer";
import cartItemsReducer from "../Reducers/cartItemsReducer";

const rootReducer = combineReducers({
    user: userReducer,
    productItems: productItemsReducer,
    cart: cartItemsReducer
});
export default rootReducer;