import React from "react";
import styles from "./counter.module.css";

const Counter = ({data,increament,decreament}) => {
  // sample value to be replaced
  let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>increament(data.id)}>+</button>
      <span data-cy="task-counter-value">{data.count}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=>decreament(data.id)}>-</button>
    </div>
  );
};

export default Counter;
