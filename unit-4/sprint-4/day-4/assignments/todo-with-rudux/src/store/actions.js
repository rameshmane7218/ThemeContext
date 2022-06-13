import * as types from "./action.types";
import axios from "axios";
const signUpLoading = (payload) => {
  return {
    type: types.SIGN_UP_LOADING,
    payload,
  };
};
const signUpSuccess = (payload) => {
  return {
    type: types.SIGN_UP_SUCCESS,
    payload,
  };
};
const signUpError = (payload) => {
  return {
    type: types.SIGN_UP_ERROR,
    payload,
  };
};

const signUpAPI = (payload) => (dispatch) => {
  dispatch(signUpLoading(payload));
  axios
    .post(`https://masai-api-mocker.herokuapp.com/auth/register`, payload)
    .then((r) => dispatch(signUpSuccess(r.data)))
    .catch((e) => dispatch(signUpError(e.data)));
};

// login request

const loginLoading = (payload) => {
  return {
    type: types.LOGIN_LOADING,
    payload,
  };
};
const loginSuccess = (payload) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
};
const loginError = (payload) => {
  return {
    type: types.LOGIN_ERROR,
    payload,
  };
};

const loginAPI = (payload) => (dispatch) => {
  dispatch(loginLoading(payload));
  axios
    .post(`https://masai-api-mocker.herokuapp.com/auth/login`, payload)
    .then((r) => dispatch(loginSuccess(r.data)))
    .catch((e) => dispatch(loginError(e.data)));
};
// login request

const fetchUserDetailsLoading = (payload) => {
  return {
    type: types.FETCH_USER_DETAILS_LOADING,
    payload,
  };
};
const fetchUserDetailsSuccess = (payload) => {
  return {
    type: types.FETCH_USER_DETAILS_SUCCESS,
    payload,
  };
};
const fetchUserDetailsError = (payload) => {
  return {
    type: types.FETCH_USER_DETAILS_ERROR,
    payload,
  };
};

const fetchUserDetailsAPI = (payload) => (dispatch) => {
  dispatch(fetchUserDetailsLoading(payload));
  axios
    .post(`https://masai-api-mocker.herokuapp.com/user/${payload.username}`, {
      headers: {
        Authorization: `Bearer ${payload.token}`,
      },
    })
    .then((r) => dispatch(fetchUserDetailsSuccess(r.data)))
    .catch((e) => dispatch(fetchUserDetailsError(e.data)));
};

const logoutRequest = (payload) => {
  return {
    type: types.LOGOUT,
    payload,
  };
};
const logoutAPI = (payload) => (dispatch) => {
  dispatch(logoutRequest);
};

export { signUpAPI, loginAPI, fetchUserDetailsAPI, logoutAPI };
