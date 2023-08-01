import { createStore } from "redux";

const dummyReducer =  () => {
    return true;
}
const store = createStore(dummyReducer);

export default store;