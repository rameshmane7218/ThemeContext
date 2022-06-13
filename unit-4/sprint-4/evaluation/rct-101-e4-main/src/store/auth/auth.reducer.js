import * as types from "./auth.types";

// Note: Do not update/change the initial state
export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState, { type, payload }) => {
  switch (type) {
    case types.AUTH_SIGN_IN_LOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.AUTH_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          token: payload.token,
          isAuthenticated: true,
        },
        error: "",
      };
    case types.AUTH_SIGN_IN_ERROR:
      return {
        ...state,
        loading: false,
        data: {
          token: "",
          isAuthenticated: true,
        },
        error: payload,
      };

    case types.AUTH_SIGN_OUT:
      return {
        ...state,
        loading: false,
        data: {
          token: "",
          isAuthenticated: false,
        },
        error: "",
      };
    default:
      return state;
  }
};
