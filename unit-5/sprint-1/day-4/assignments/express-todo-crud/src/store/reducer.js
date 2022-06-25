import * as types from "./action.types";
const initialState = {
  getTodoItems: {
    loading: false,
    error: false,
  },
  addTodoItem: {
    loading: false,
    error: false,
  },
  updateTodoItem: {
    loading: false,
    error: false,
  },
  removeTodoItem: {
    loading: false,
    error: false,
  },
  data: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_TODOS_LOADING:
      return {
        ...state,
        getTodoItems: {
          loading: true,
          error: false,
        },
      };
    case types.GET_TODOS_SUCCESS:
      return {
        ...state,
        getTodoItems: {
          loading: false,
          error: false,
        },
        data: payload,
      };
    case types.GET_TODOS_ERROR:
      return {
        ...state,
        getTodoItems: {
          loading: false,
          error: true,
        },
      };
    // add todo ADD
    case types.ADD_TODOS_LOADING:
      return {
        ...state,
        addTodoItem: {
          loading: true,
          error: false,
        },
      };
    case types.ADD_TODOS_SUCCESS:
      return {
        ...state,
        addTodoItem: {
          loading: false,
          error: false,
        },
      };
    case types.ADD_TODOS_ERROR:
      return {
        ...state,
        addTodoItem: {
          loading: false,
          error: true,
        },
      };
    //update todo item
    case types.UPDATE_TODOS_LOADING:
      return {
        ...state,
        updateTodoItem: {
          loading: true,
          error: false,
        },
      };
    case types.UPDATE_TODOS_SUCCESS:
      return {
        ...state,
        updateTodoItem: {
          loading: false,
          error: false,
        },
      };
    case types.UPDATE_TODOS_ERROR:
      return {
        ...state,
        updateTodoItem: {
          loading: false,
          error: true,
        },
      };
    //remove Todo Item
    case types.DELETE_TODOS_LOADING:
      return {
        ...state,
        removeTodoItem: {
          loading: true,
          error: false,
        },
      };
    case types.DELETE_TODOS_SUCCESS:
      return {
        ...state,
        removeTodoItem: {
          loading: false,
          error: false,
        },
      };
    case types.DELETE_TODOS_ERROR:
      return {
        ...state,
        removeTodoItem: {
          loading: false,
          error: true,
        },
      };
    default:
      return state;
  }
};
