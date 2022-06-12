import * as types from "./actionTypes";

const initialState = {
  blogs: [],
  loading: false,
  currentBlog: {},
  error: "",
};

export const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_BLOG_POST_REQUEST_LOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_BLOG_POST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: payload,
        error: "",
      };
    case types.FETCH_BLOG_POST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case types.FETCH_SINGLE_BLOG_REQUEST_LOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_SINGLE_BLOG_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        currentBlog: payload,
        error: "",
      };
    case types.FETCH_SINGLE_BLOG_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
