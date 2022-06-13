// Auth Actions here
import * as types from "./auth.types";
import axios from "axios";

const signInLoading = (payload) => {
  return {
    type: types.AUTH_SIGN_IN_LOADING,
    payload,
  };
};
const signInSuccess = (payload) => {
  return {
    type: types.AUTH_SIGN_IN_SUCCESS,
    payload,
  };
};
const signInError = (payload) => {
  return {
    type: types.AUTH_SIGN_IN_ERROR,
    payload,
  };
};

const signInAPI = (payload) => (dispatch) => {
  dispatch(signInLoading(payload));
  axios
    .post(`https://reqres.in/api/login`, payload)
    .then((r) => dispatch(signInSuccess(r.data)))
    .catch((e) => dispatch(signInError(e.data)));
};
const logoutReq = (payload) =>{
    return {
        type: types.AUTH_SIGN_OUT,
        payload,
    }
}
const logoutAPI = (payload) => (dispatch) =>{
    dispatch(logoutReq());
}
export {signInAPI,logoutAPI};
