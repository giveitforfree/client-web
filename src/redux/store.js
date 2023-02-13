import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const reducer = combineReducers( rootReducer )

const store = createStore(  reducer , applyMiddleware(thunk));

export default store;
