import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "./counter/counter.reducer";
import { todoReducer } from "./todo/todo.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

// const thunkX = (state) => (next) => (action) => {
//   console.log({state});
//   console.log(typeof action);
//   if(typeof action === 'function'){
//     return action(state.dispatch).then(r) => {
//     };
//   }else{
//     return next(action)
//   }
// }

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// const a = () => () => () => () => console.log("hello");
// a()
