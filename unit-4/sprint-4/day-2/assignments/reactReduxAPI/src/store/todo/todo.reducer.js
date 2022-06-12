import {
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
  UPDATE_TODO_STATUS_LOADING,
  UPDATE_TODO_STATUS_ERROR,
  UPDATE_TODO_STATUS_SUCCESS,
} from "./todo.types";

const initialState = {
  getTodo: {
    loading: false,
    error: false,
  },
  addTodo: {
    loading: false,
    error: false,
  },
  data: [],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODO_LOADING: {
      return {
        ...state,
        getTodo: {
          loading: true,
          error: false,
        },
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        getTodo: {
          loading: false,
          error: false,
        },
        data: payload,
      };
    }
    case GET_TODO_ERROR: {
      return {
        ...state,
        getTodo: {
          loading: false,
          error: true,
        },
      };
    }
    case ADD_TODO_LOADING: {
      return {
        ...state,
        addTodo: {
          loading: true,
          error: false,
        },
      };
    }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        addTodo: {
          loading: false,
          error: false,
        },
        data: [...state.data, payload],
      };
    }
    case ADD_TODO_ERROR: {
      return {
        ...state,
        addTodo: {
          loading: false,
          error: true,
        },
      };
    }
    case UPDATE_TODO_STATUS_LOADING: {
      return {
        ...state,
        addTodo: {
          loading: true,
          error: false,
        },
      };
    }
    case UPDATE_TODO_STATUS_SUCCESS: {
      return {
        ...state,
        addTodo: {
          loading: false,
          error: false,
        },
        data: [...state.data, payload],
      };
    }
    case UPDATE_TODO_STATUS_ERROR: {
      return {
        ...state,
        addTodo: {
          loading: false,
          error: true,
        },
      };
    }
    default: {
      return state;
    }
  }
};
