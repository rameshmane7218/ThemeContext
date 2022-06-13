import * as types from "./cart.types";

// Note: Do not update/change the initial state
const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
  },
  addCartItem: {
    loading: false,
    error: false,
  },
  updateCartItem: {
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: [],
};
export const cartReducer = (state = cartInitalState, { type, payload }) => {
  switch (type) {
    // Get Cart data ....
    case types.GET_CART_ITEMS_LOADING:
      return {
        ...state,
        getCartItems: {
          loading: true,
          error: false,
        },
      };
    case types.GET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        getCartItems: {
          loading: false,
          error: false,
        },
        data: payload,
      };
    case types.GET_CART_ITEMS_ERROR:
      return {
        ...state,
        getCartItems: {
          loading: false,
          error: true,
        },
      };
    // Add To Cart Items ....
    case types.ADD_ITEM_TO_CART_LOADING:
      return {
        ...state,
        addCartItem: {
          loading: true,
          error: false,
        },
      };
    case types.ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        addCartItem: {
          loading: false,
          error: false,
        },
        data: [...state.data, payload],
      };
    case types.ADD_ITEM_TO_CART_ERROR:
      return {
        ...state,
        addCartItem: {
          loading: false,
          error: true,
        },
      };
    // Update Cart Items ....
    case types.UPDATE_CART_ITEMS_LOADING:
      return {
        ...state,
        updateCartItem: {
          loading: true,
          error: false,
        },
      };
    case types.UPDATE_CART_ITEMS_SUCCESS:
      return {
        ...state,
        updateCartItem: {
          loading: false,
          error: false,
        },
        data: [...state.data, payload],
      };
    case types.UPDATE_CART_ITEMS_ERROR:
      return {
        ...state,
        updateCartItem: {
          loading: false,
          error: true,
        },
      };
    // Remove Cart Items ....
    case types.REMOVE_CART_ITEMS_LOADING:
      return {
        ...state,
        removeCartItem: {
          loading: true,
          error: false,
        },
      };
    case types.REMOVE_CART_ITEMS_SUCCESS:
      return {
        ...state,
        removeCartItem: {
          loading: false,
          error: false,
        },
        data: [...state.data, payload],
      };
    case types.REMOVE_CART_ITEMS_ERROR:
      return {
        ...state,
        removeCartItem: {
          loading: false,
          error: true,
        },
      };

    default:
      return state;
  }
};
