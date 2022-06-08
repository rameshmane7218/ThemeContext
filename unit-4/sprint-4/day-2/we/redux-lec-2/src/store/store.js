import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";

import { counterReducer } from "./counter/counter.reducer";
import { todoReducer } from "./todo/todo.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware()));
