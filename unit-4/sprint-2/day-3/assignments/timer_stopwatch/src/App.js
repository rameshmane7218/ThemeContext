import React from "react";
import "./App.css";
import Timer from "./components/Timer/Timer";
import Stopwatch from "./components/Stopwatch/Stopwatch";

function App() {
  const [show, setShow] = React.useState(false);
  const handletoggle = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      {/* <h1>Google StopWtach And Timer</h1> */}
      <div className="mainContainer">
        <div className="container">
          <div onClick={handletoggle} className={show ? "box" : "box active"}>
            StopWatch
          </div>
          <div onClick={handletoggle} className={!show ? "box" : "box active"}>
            Timer
          </div>
        </div>
        <div>{show && <Timer />}</div>
        <div>{!show && <Stopwatch />}</div>
      </div>
    </div>
  );
}

export default App;
