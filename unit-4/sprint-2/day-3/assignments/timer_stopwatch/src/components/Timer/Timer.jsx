import React from "react";

import style from "./Timer.module.css";
import { getTime } from "../../function.js";

const Timer = () => {
  const [condition, setCondition] = React.useState(false);
  const [isOn, setIson] = React.useState(true);
  const [time, setTime] = React.useState(10);
  const [reset, setReset] = React.useState(true);

  const handleCondition = () => {
    setCondition(!condition);
    setIson(!isOn);
  };
  const handleReset = () => {
    setTime(0);
    setReset(!reset);
    setTime(10);
  };
  React.useEffect(() => {
    let timer;
    if (isOn === false) {
      timer = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      if (time === 0) {
        clearInterval(timer);
      } else if (reset === false) {
        clearInterval(timer);
      }
    }
    return () => clearInterval(timer);
  }, [isOn, time, reset]);
  return (
    <div className={style.view}>
      <h1>{getTime(time)}</h1>

      <div>
        <button onClick={handleCondition} className={style.buttons}>
          {!condition ? "Start" : "Stop"}
        </button>
        <button onClick={handleReset} className={style.buttons}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
