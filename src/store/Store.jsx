// store/store.js

import { createStore } from "redux";
import CartReducer from "./reducers/CartReducers";

const store = createStore(CartReducer);

export default store;