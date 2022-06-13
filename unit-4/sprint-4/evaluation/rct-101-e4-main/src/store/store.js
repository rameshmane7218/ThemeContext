import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { authReducer } from "./auth/auth.reducer";
import thunk from "redux-thunk";
import { productReducer } from "./product/product.reducer";
import { cartReducer } from "./cart/cart.reducer";
// TODO: use this store variable to create a store.
const rootReducer = combineReducers({
  auth: authReducer,
  cart : cartReducer,
  products: productReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
