import { PRODUCT_LIST } from "../constants";

export const productData = (data = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      console.log("reducer called 1", action.type);
        return [action.data]
    default:
      return data;
  }
};
