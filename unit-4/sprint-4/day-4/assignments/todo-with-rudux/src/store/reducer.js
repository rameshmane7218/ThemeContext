import * as types from "./action.types";

const initialState = {
  userData: {},
  loading: false,
  error: "",
  isAuth: false,
};
export const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.SIGN_UP_LOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        // userData: payload,
      };
    case types.SIGN_UP_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case types.LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        error: "",
        isAuth: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        isAuth: true,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        isAuth: false,
      };
    case types.FETCH_USER_DETAILS_LOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        userData: payload,
      };
    case types.FETCH_USER_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        loading: false,
        error: "",
        isAuth: false,
      };
    default:
      return state;
  }
};
