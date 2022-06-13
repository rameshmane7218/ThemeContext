import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

// const rootReducer = combineReducers({
//   auth: reducer,
// });

export const store = legacy_createStore(reducer, applyMiddleware(thunk));
