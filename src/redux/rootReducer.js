import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./product/reducer";

export default combineReducers({
    cartData,
    productData
})