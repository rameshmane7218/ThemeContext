import {
  ADD_TOTO,
  COMPLETE_TOTO,
  DELETE_TOTO,
  UPDATE_TOTO,
} from "./todo.types";

export const AddTodo = (payload) => ({ type: ADD_TOTO, payload });
export const CompleteTodo = (id) => ({ type: COMPLETE_TOTO, payload: id });
export const UpdateTodo = (payload) => ({
  type: UPDATE_TOTO,
  payload,
});
export const DeleteTodo = (id) => ({ type: DELETE_TOTO, payload: id });
