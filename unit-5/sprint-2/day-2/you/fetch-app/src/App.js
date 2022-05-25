import axios from "axios";
import React from "react";
import "./App.css";
import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";
import Todo from "./components/Todo";

function App() {
  
  return (
    <div className="App">
      {/* <Todo/> */}
      {/* <Timer/> */}
      <Stopwatch/>
    </div>
  );
}

export default App;
