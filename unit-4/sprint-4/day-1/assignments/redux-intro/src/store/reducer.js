export const reducer = (state, { type, payload }) => {
//   console.log(state);
  switch (type) {
    case "INCREMENT_COUNTER": {
      state.count = state.count + payload;
      return { ...state };
    }
    case "DECREMENT_COUNTER": {
      state.count = state.count - payload;
      return { ...state };
    }
    case "ADD": {
      state.count = state.count + payload;
      return { ...state };
    }
    case "SUBTRACT": {
      state.count = state.count - payload;
      return { ...state };
    }
    case "MULTIPLY": {
      state.count = state.count * payload;
      return { ...state };
    }
    case "DIVIDE": {
      let result = (state.count % payload);
      if(result !== 0){
        alert("Division not possible");
        return { ...state };
      }else{
        state.count = state.count / payload;
        return { ...state };
      }
    }

    default: {
      return state;
    }
  }
};
