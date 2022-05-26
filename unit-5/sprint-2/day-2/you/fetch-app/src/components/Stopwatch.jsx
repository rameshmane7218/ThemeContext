import React from "react";

const Stopwatch = () => {
  const [timerId, setTimerId] = React.useState(null);
  const [watch, setWatch] = React.useState(0);
  
  const start = () => {
    if (!timerId) {
      let id = setInterval(() => {
        setWatch((pre) => pre + 1);
      },100);
      setTimerId(id);
    }
  };

  const pause = () => {
      clearInterval(timerId);
      setTimerId(null)
  }

  const reset = () => {
      clearInterval(timerId);
      setWatch(0);
      setTimerId(null)
  }

  return (
    <div>
      Stopwatch
      <h1>{watch}</h1>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
