import * as types from "./actionTypes";

import axios from "axios";

const fetchBlogPostRequestLoading = (payload) => {
  return {
    type: types.FETCH_BLOG_POST_REQUEST_LOADING,
    payload,
  };
};
const fetchBlogPostRequestSuccess = (payload) => {
  return {
    type: types.FETCH_BLOG_POST_REQUEST_SUCCESS,
    payload,
  };
};
const fetchBlogPostRequestError = (payload) => {
  return {
    type: types.FETCH_BLOG_POST_REQUEST_ERROR,
    payload,
  };
};

const fetchBlogPost = (payload) => (dispatch) => {
  dispatch(fetchBlogPostRequestLoading());

  axios
    .get(`/blogs`)
    .then((r) => dispatch(fetchBlogPostRequestSuccess(r.data)))
    .catch((e) => dispatch(fetchBlogPostRequestError(e.data)));
};

// Single blog post fetch request
const fetchSingleBlogRequestLoading = (payload) => {
  return {
    type: types.FETCH_SINGLE_BLOG_REQUEST_LOADING,
    payload,
  };
};
const fetchSingleBlogRequestSuccess = (payload) => {
  return {
    type: types.FETCH_SINGLE_BLOG_REQUEST_SUCCESS,
    payload,
  };
};
const fetchSingleBlogRequestError = (payload) => {
  return {
    type: types.FETCH_SINGLE_BLOG_REQUEST_ERROR,
    payload,
  };
};

const fetchSingleBlog = (payload) => (dispatch) => {
  dispatch(fetchSingleBlogRequestLoading());

  axios
    .get(`/blogs/${payload}`)
    .then((r) => dispatch(fetchSingleBlogRequestSuccess(r.data)))
    .catch((e) => dispatch(fetchSingleBlogRequestError(e.data)));
};

// CREATE BLOG POST;
const createBlogPostRequestLoading = (payload) => {
  return {
    type: types.CREATE_BLOG_POST_REQUEST_LOADING,
    payload,
  };
};
const createBlogPostRequestSuccess = (payload) => {
  return {
    type: types.CREATE_BLOG_POST_REQUEST_SUCCESS,
    payload,
  };
};
const createBlogPostRequestError = (payload) => {
  return {
    type: types.CREATE_BLOG_POST_REQUEST_ERROR,
    payload,
  };
};

const createBlogPost = (payload) => (dispatch) => {
  dispatch(createBlogPostRequestLoading());

  axios
    .post(`/blogs`, payload)
    .then((r) => dispatch(createBlogPostRequestSuccess(r.data)))
    .catch((e) => dispatch(createBlogPostRequestError(e.data)));
};

// UPDATE BLOG POST;
const updateBlogPostRequestLoading = (payload) => {
  return {
    type: types.UPDATE_BLOG_POST_REQUEST_LOADING,
    payload,
  };
};
const updateBlogPostRequestSuccess = (payload) => {
  return {
    type: types.UPDATE_BLOG_POST_REQUEST_SUCCESS,
    payload,
  };
};
const updateBlogPostRequestError = (payload) => {
  return {
    type: types.UPDATE_BLOG_POST_REQUEST_ERROR,
    payload,
  };
};

const updateBlogPost = (payload) => (dispatch) => {
  dispatch(updateBlogPostRequestLoading());

  axios
    .patch(`/blogs/${payload.id}`, payload)
    .then((r) => dispatch(updateBlogPostRequestSuccess(r.data)))
    .then(() => dispatch(fetchSingleBlog(payload.id)))
    .catch((e) => dispatch(updateBlogPostRequestError(e.data)));
};

export { fetchBlogPost, fetchSingleBlog, createBlogPost, updateBlogPost };
