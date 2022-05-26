import React from "react";
import styles from "./Timer.module.css";

const Timer = ({ startTime, endTime }) => {
  const [timer, setTimer] = React.useState(startTime);

  React.useEffect(() => {
    let id = setInterval(() => {
      if (timer >= endTime) {
        clearInterval(id);
      } else {
        setTimer((pre)=>pre+1);
      }
    }, 1000);

    return () => {
        // call a api to inform that user has logged out
        clearInterval(id);
    };
  }, [timer]);

  return (
    <div>
      <h1>Timer App</h1>
      <h1>{timer}</h1>

      {/* <div className={styles.btns}>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
      </div> */}
    </div>
  );
};

export default Timer;
