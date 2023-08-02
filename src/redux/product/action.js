import { PRODUCT_LIST } from "../constants";

export const productList = async () => {
    // let data = "hello how are you?"
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    data = data.json
    console.log("PRODUCT_LIST action", data);
    return {
        type: PRODUCT_LIST,
        data
    }
} 