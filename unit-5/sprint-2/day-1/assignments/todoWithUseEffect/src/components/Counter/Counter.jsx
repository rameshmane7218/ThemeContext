import React from "react";
import styles from "./counter.module.css";

const Counter = ({ data, handleCounter }) => {
  // sample value to be replaced
  let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button
        data-cy="task-counter-increment-button"
        onClick={() => handleCounter(data.id, data.count + 1)}
      >
        +
      </button>
      <span data-cy="task-counter-value">{data.count}</span>
      <button
        disabled={data.count ===1}
        style={{opacity:data.count === 1 ? '0.7':"1"}}
        data-cy="task-counter-decrement-button"
        onClick={() => handleCounter(data.id, data.count - 1)}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
