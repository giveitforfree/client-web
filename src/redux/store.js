import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/index";

const reducer = combineReducers(rootReducer)

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
