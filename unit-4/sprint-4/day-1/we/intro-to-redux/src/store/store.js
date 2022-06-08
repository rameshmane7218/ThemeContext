import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const initialState = {
  count: 10,
};

export const store = legacy_createStore(reducer, initialState);
