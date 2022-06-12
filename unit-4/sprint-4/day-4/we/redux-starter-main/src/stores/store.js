import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { feedReducer } from "./feed/feed.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  feed: feedReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// reducer are not ready
