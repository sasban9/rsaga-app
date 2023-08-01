import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

export const cartData = (data = [], action) => {
  console.log("reducer called", action.type);
  switch (action.type) {
    case ADD_TO_CART:
      return data;
    case REMOVE_FROM_CART:
      return true;
    default:
      return false;
  }
};
