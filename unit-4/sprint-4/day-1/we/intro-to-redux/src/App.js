import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Add, Substact } from "./store/action";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => dispatch(Add(10))}>+</button>
        <button onClick={() => dispatch(Substact(5))}>-</button>
      </div>
    </div>
  );
}

export default App;
