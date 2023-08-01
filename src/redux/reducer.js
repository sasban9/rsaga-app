import { ADD_TO_CART } from "./constants";

export const cartData = (data = [], action) => {
    console.log("reducer called", action);
    switch (action.type) {
        case ADD_TO_CART:
            return data;
        default:
            return false;
    }
}