import "./App.css";
import { Stopwatch } from "./components/stopwatch";
import { Timer } from "./components/Timer";
import { GiSandsOfTime } from "react-icons/gi";
import { IoMdStopwatch } from "react-icons/io";
import { useState, useEffect } from "react";

function App() {
  //mount timer or stopwatch
  const [change, setChange] = useState(false);
  //timer ui
  const [timer, setTimer] = useState(300);
  //checking timer running or not
  const [id, setId] = useState(null);
  const [iid, setIid] = useState(null);
  //to mount Timer/Stopwatch
  const [mount, setMount] = useState(false);
  //to start Timer
  const [start, setStart] = useState(false);
  //to start Stopwatch
  const [start1, setStart1] = useState(false);
  const handleStart = () => {
    setStart(!start);
  };
  const handleStart1 = () => {
    setStart1(!start1);
  };
  //getting input for timer
  const [input, setInput] = useState({ hr: 0, min: 5, sec: 0 });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleTimer = () => {
    setTimer(input.hr * 3600 + input.min * 60 + input.sec * 1);
  };
  useEffect(() => {
    handleTimer();
  }, [input]);
  //Timer function
  const TimerFn = () => {
    if (id !== null) {
      return;
    }
    if (timer === 0) {
      alert("Please set the time first...");
      setStart(false);
      setMount(false);
      return;
    }
    const Id = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    setId(Id);
  };

  useEffect(() => {
    if (timer === 0) {
      clearInterval(id);
      setStart(false);
    }
  }, [timer]);

  //stopwatch ui
  const [watch, setWatch] = useState(0);
  const StopwatchFn = () => {
    if (iid !== null) {
      return;
    }
    const _Id = setInterval(() => {
      setWatch((pre) => pre + 1);
    }, 10);
    setIid(_Id);
  };
  return (
    <div className="App">
      <div id="header">
        <div
          id={change ? "timerDiv" : "timerDiv1"}
          onClick={() => {
            setChange(false);
            setStart((pre) => pre);
          }}
        >
          <GiSandsOfTime></GiSandsOfTime>TIMER
        </div>
        <div
          className={change ? "StopWatchDiv1" : "StopWatchDiv"}
          onClick={() => {
            setChange(true);
            setStart((pre) => pre);
          }}
        >
          <IoMdStopwatch></IoMdStopwatch> STOPWATCH
        </div>
      </div>

      <div id="container">
        {change ? (
          <Stopwatch watch={watch}></Stopwatch>
        ) : (
          <Timer
            timer={timer}
            input={input}
            handleChange={handleChange}
            mount={mount}
          ></Timer>
        )}
      </div>

      <div id="footer">
        {!change ? (
          <>
            <button
              id="startBtn"
              onClick={() => {
                if (!start) {
                  setMount(true);
                  handleStart();
                  TimerFn();
                } else if (start) {
                  clearInterval(id);
                  handleStart();
                  setId(null);
                }
              }}
            >
              {!start ? "START" : "STOP"}
            </button>
            <button
              id="resetBtn"
              onClick={() => {
                setMount(false);
                setTimer(300);
                setStart(false);
                clearInterval(id);
                setId(null);
              }}
            >
              RESET
            </button>
          </>
        ) : (
          <>
            <button
              id="startBtn"
              onClick={() => {
                if (!start1) {
                  handleStart1();
                  StopwatchFn();
                } else if (start1) {
                  clearInterval(iid);
                  handleStart1();
                  setIid(null);
                }
              }}
            >
              {!start1 ? "START" : "STOP"}
            </button>
            <button
              id="resetBtn"
              onClick={() => {
                setStart1(false);
                clearInterval(iid);
                setWatch(0);
                setIid(null);
              }}
            >
              RESET
            </button>{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
