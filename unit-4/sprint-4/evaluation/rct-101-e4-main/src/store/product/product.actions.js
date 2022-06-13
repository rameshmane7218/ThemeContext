import * as types from "./product.types";
import axios from "axios";


// Product actions here


const getProductsLoading = (payload) => {
  return {
    type: types.GET_PRODUCTS_LOADING,
    payload,
  };
};
const getProductsSuccess = (payload) => {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    payload,
  };
};
const getProductsError = (payload) => {
  return {
    type: types.GET_PRODUCTS_ERROR,
    payload,
  };
}

const getProductsAPI = (payload) => (dispatch) => {
  dispatch(getProductsLoading(payload));
  axios
    .get(`http://localhost:8080/products`)
    .then((r) => dispatch(getProductsSuccess(r.data)))
    .catch((e) => dispatch(getProductsError(e.data)));
};


export {getProductsAPI}