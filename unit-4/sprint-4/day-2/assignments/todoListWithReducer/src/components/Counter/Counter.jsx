import React, { useContext } from "react";
import { ReducerContext } from "../../context/ReducerContext";
import styles from "./counter.module.css";

const Counter = ({data}) => {
  const {setTask} = useContext(ReducerContext);

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>setTask({type:"Increment", id:data.id, payload:data.count})}>+</button>
      <span data-cy="task-counter-value">{data.count}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=>setTask({type:"Decrement", id:data.id, payload:data.count})}>-</button>
    </div>
  );
};

export default Counter;
