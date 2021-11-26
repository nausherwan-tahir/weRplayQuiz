import { createStore, applyMiddleware, compose } from "redux";
import mainReducer from "../reducers";
import thunk from "redux-thunk";

const initialState = {};
const middleware = [thunk];

const store = createStore(
    mainReducer,
    initialState,
    compose(applyMiddleware(...middleware))
);

export default store;