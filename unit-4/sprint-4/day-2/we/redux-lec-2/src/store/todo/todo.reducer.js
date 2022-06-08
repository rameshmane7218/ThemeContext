import {
  ADD_TOTO,
  COMPLETE_TOTO,
  DELETE_TOTO,
  UPDATE_TOTO,
} from "./todo.types";

export const todoReducer = (state = { todos: [] }, { type, payload }) => {
  switch (type) {
    case ADD_TOTO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            ...payload,
            id: state.todos.length,
          },
        ],
      };
    }
    case COMPLETE_TOTO: {
      return { ...state };
    }
    case UPDATE_TOTO: {
      return { ...state };
    }
    case DELETE_TOTO: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
