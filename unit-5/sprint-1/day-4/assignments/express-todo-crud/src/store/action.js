import axios from "axios";
import * as types from "./action.types";

const getTodosAPI = (payload) => (dispatch) => {
  dispatch({ type: types.GET_TODOS_LOADING, payload });
  axios
    .get(`http://localhost:5000`)
    .then((r) =>
      // console.log(r.data)
      dispatch({ type: types.GET_TODOS_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: types.GET_TODOS_ERROR, payload: e.data }));
};

const addTodosAPI = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_TODOS_LOADING, payload });
  axios
    .post(`http://localhost:5000`, payload)
    .then((r) => dispatch({ type: types.ADD_TODOS_SUCCESS, payload: r.data }))
    // .then(dispatch(getTodosAPI()))
    .catch((e) => dispatch({ type: types.ADD_TODOS_ERROR, payload: e.data }));
};
const updateTodosAPI = (payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_TODOS_LOADING, payload });
  axios
    .put(`http://localhost:5000/${payload.id}`, payload)
    .then((r) =>
      dispatch({ type: types.UPDATE_TODOS_SUCCESS, payload: r.data })
    )
    // .then(dispatch(getTodosAPI()))
    .catch((e) =>
      dispatch({ type: types.UPDATE_TODOS_ERROR, payload: e.data })
    );
};

const deleteTodosAPI = (payload) => (dispatch) => {
  dispatch({ type: types.DELETE_TODOS_LOADING, payload });
  axios
    .delete(`http://localhost:5000/${payload}`)
    .then((r) =>
      dispatch({ type: types.DELETE_TODOS_SUCCESS, payload: r.data })
    )
    // .then(dispatch(getTodosAPI()))
    .catch((e) =>
      dispatch({ type: types.DELETE_TODOS_ERROR, payload: e.data })
    );
};

export { getTodosAPI, addTodosAPI, updateTodosAPI, deleteTodosAPI };
