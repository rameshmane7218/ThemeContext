import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

let token = localStorage.setItem("token");
const initialState = {
  loading: false,
  error: false,
  isAuth: token ? true : false,
  //   isAuth:  !!token, // here 1 exlimetry mark is used to convert string to boolen and second is used to toggle true and false
  token: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: true,
        token: payload.token,
      };
    }
    case LOGIN_ERROR: {
      return { ...state, loading: false, error: true, isAuth: false };
    }
    case LOGOUT: {
      return { ...state, loading: false, error: false, isAuth: false };
    }
    default: {
      return state;
    }
  }
};
