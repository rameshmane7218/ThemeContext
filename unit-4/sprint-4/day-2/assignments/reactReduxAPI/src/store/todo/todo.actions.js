import axios from "axios";
import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,

  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,

  UPDATE_TODO_LOADING,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
  UPDATE_TODO_STATUS_LOADING,
  UPDATE_TODO_STATUS_ERROR,
  UPDATE_TODO_STATUS_SUCCESS,
  DELETE_TODO_LOADING,
  DELETE_TODO_ERROR,
  DELETE_TODO_SUCCESS,
} from "./todo.types";

export const getTodosAPI = () => (dispatch) => {
  dispatch({ type: GET_TODO_LOADING });

  axios
    .get(`http://localhost:8080/todos`)
    .then((r) => dispatch({ type: GET_TODO_SUCCESS, payload: r.data }))
    .catch(() => dispatch({ type: GET_TODO_ERROR }));
};

export const addTodoAPI = (data) => (dispatch) => {
  dispatch({ type: ADD_TODO_LOADING });

  axios
    .post(`http://localhost:8080/todos`, data)
    .then((r) => dispatch({ type: ADD_TODO_SUCCESS, payload: r.data }))
    .catch(() => dispatch({ type: ADD_TODO_ERROR }));
};



// export const updateTodoStatus = (id)=> {
//   axios
//     .patch(`http://localhost:8080/todos/${id}`, {done: !status})
//     .then((r) => console.log(r.data))
//     // .then(()=> getTodosAPI())
//     .catch((err) => console.log(err));
// };
export const updateTodoStatus = (id,status) => (dispatch) => {
  dispatch({ type: UPDATE_TODO_STATUS_LOADING });

  axios
    .patch(`http://localhost:8080/todos/${id}`, {done: !status})
    .then((r) => dispatch({ type: UPDATE_TODO_STATUS_SUCCESS,payload: r.data}))
    .then(()=> dispatch(getTodosAPI()))
    .catch(() => dispatch({ type: UPDATE_TODO_STATUS_ERROR }));
};




export const updateTodo = (id) => (data) => (dispatch) => {
  dispatch({ type: UPDATE_TODO_LOADING });

  axios
    .patch(`http://localhost:8080/todos/${id}`, {})
    .then((r) => dispatch({ type: UPDATE_TODO_SUCCESS, payload: r.data }))
    .catch(() => dispatch({ type: UPDATE_TODO_ERROR }));
};


export const deleteTodo = (id) => (dispatch) => {
  dispatch({ type: DELETE_TODO_LOADING });

  axios
    .delete(`http://localhost:8080/todos/${id}`)
    .then((r) => dispatch({ type: DELETE_TODO_SUCCESS, payload: r.data }))
    .then(()=> dispatch(getTodosAPI()))
    .catch(() => dispatch({ type: DELETE_TODO_ERROR }));
};
