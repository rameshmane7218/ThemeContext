import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  add,
  decrement,
  divide,
  increment,
  multiply,
  subtact,
} from "./store/action";
import { useState } from "react";
function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const [inputValue, setInputValue] = useState(0);
  const handleInput = (e) => {
    console.log(e.target.value);
    setInputValue(Number(e.target.value));
  };

  return (
    <div className="App">
      <h1>Value: {count}</h1>
      <button onClick={() => dispatch(increment(1))}>INCREMENT</button>
      {" "}
      <button onClick={() => dispatch(decrement(1))}>DECREMENT</button>
      <br />
      <br />

      <div style={{display:"flex",flexDirection:"row", alignItems:"center", gap:"20px", justifyContent:"center" }}>
        <div>
          <input
            name="x"
            type="number"
            placeholder="Enter value of 'x'"
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <button onClick={() => dispatch(add(inputValue))}>Add</button>
          <br/>
          <button onClick={() => dispatch(multiply(inputValue))}>
            Multiply
          </button>
        </div>
        <div>
          <button onClick={() => dispatch(subtact(inputValue))}>
            Subtract
          </button>
          <br/>
          <button onClick={() => dispatch(divide(inputValue))}>Divide</button>
        </div>
      </div>
    </div>
  );
}

export default App;
