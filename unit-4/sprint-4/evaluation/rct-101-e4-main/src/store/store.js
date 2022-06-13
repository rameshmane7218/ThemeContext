import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { authReducer } from "./auth/auth.reducer";
import thunk from "redux-thunk";
// TODO: use this store variable to create a store.
const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
