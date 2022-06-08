export const reducer = (state, {type,payload}) => {
//   console.log(state,type,payload);
  switch (type) {
    case "COUNTER_INCREMENT": {
      state.count = state.count + payload;
      return { ...state };
    }
    case "COUNTER_DECREMENT": {
        state.count = state.count - payload;
        return { ...state };
    }
    default: {
      return state;
    }
  }
};
