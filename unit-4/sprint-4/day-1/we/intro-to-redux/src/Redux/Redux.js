// const reducer =

class State {
  constructor(reducer, initState) {
    this.reducer = reducer;
    this.state = initState;
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }
}

var state = new State(reducer, { count: 0 });
