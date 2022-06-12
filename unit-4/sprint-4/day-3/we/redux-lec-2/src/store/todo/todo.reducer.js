import {
  ADD_TOTO,
  ADD_TOTO_ERROR,
  ADD_TOTO_LOADING,
  ADD_TOTO_SUCCESS,
  COMPLETE_TOTO,
  DELETE_TOTO,
  GET_TOTOS_ERROR,
  GET_TOTOS_LOADING,
  GET_TOTOS_SUCCESS,
  UPDATE_TOTO,
} from "./todo.types";

const initialState = {
  addTodo: {
    loading: false,
    error: false,
  },
  getTodos: {
    loading: false,
    error: false,
  },
  data: [],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TOTOS_LOADING: {
      return {
        ...state,
        getTodos: {
          loading: true,
          error: false,
        },
      };
    }
    case GET_TOTOS_SUCCESS: {
      return {
        ...state,
        getTodos: {
          loading: false,
          error: false,
        },
        data: payload,
      };
    }
    case GET_TOTOS_ERROR: {
      return {
        ...state,
        getTodos: {
          loading: false,
          error: true,
        },
      };
    }
    case ADD_TOTO_LOADING: {
      return {
        ...state,
        addTodo: {
          loading: true,
          error: false,
        },
      };
    }
    case ADD_TOTO_SUCCESS: {
      return {
        ...state,
        addTodo:{
          loading: false,
          error:false,
        },
        data:[...state.data, payload]
      };
    }
    case ADD_TOTO_ERROR: {
      return {
        ...state,
        addTodo: {
          loading: false,
          error: true,
        },
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
