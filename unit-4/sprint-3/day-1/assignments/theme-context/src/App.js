import React,{useContext} from "react";
import "./App.css";
import Timer from "./components/Timer/Timer";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const {isLight} = useContext(ThemeContext);
 
  const [show, setShow] = React.useState(false);
  const handletoggle = () => {
    setShow(!show);
  };
  return (
    <div className={`App ${isLight?'light':'dark'}`}>
      <Navbar/>
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

