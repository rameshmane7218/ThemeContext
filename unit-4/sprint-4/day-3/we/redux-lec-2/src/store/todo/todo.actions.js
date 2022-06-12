import {
  ADD_TOTO,
  ADD_TOTO_ERROR,
  ADD_TOTO_LOADING,
  ADD_TOTO_SUCCESS,
  COMPLETE_TOTO,
  DELETE_TOTO,
  GET_TOTOS,
  GET_TOTOS_ERROR,
  GET_TOTOS_LOADING,
  GET_TOTOS_SUCCESS,
  UPDATE_TOTO,
} from "./todo.types";
import axios from "axios";

// export const getTodos = async () => {
//   let res = axios.get("http://localhost:8080/todos");
//   console.log(res.data);
// };

export const getTodos = (dispatch) => {
  // this time is waiting
  dispatch({ type: GET_TOTOS_LOADING });
  return axios
    .get("http://localhost:8080/todos")
    .then((r) =>
      // loading ends
      //success
      dispatch({ type: GET_TOTOS_SUCCESS, payload: r.data })
    )
    .catch((err) => {
      // loading field
      //fail
      dispatch({ type: GET_TOTOS_ERROR });
      console.log(err);
    });
};

export const AddTodo = (payload) => (dispatch) =>{
  dispatch({ type: ADD_TOTO_LOADING });
  axios
    .post("http://localhost:8080/todos", payload)
    .then((r) =>
      // loading ends
      //success
      dispatch({ type: ADD_TOTO_SUCCESS, payload: r.data })
    )
    .catch((err) => {
      // loading field
      //fail
      dispatch({ type: ADD_TOTO_ERROR });
      console.log(err);
    });
};
export const CompleteTodo = (id) => ({ type: COMPLETE_TOTO, payload: id });
export const UpdateTodo = (payload) => ({
  type: UPDATE_TOTO,
  payload,
});
export const DeleteTodo = (id) => ({ type: DELETE_TOTO, payload: id });
