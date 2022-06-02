import React, { useContext } from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";
import emptylogo from "../../assets/empty.svg";
import { ReducerContext } from "../../context/ReducerContext";

const Tasks = () => {
  // NOTE: do not delete `data-cy` key value pair
  const {task} = useContext(ReducerContext);
  return (
    <div className={styles.taskApp}>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {task.map((item)=>(
          <Task key={item.id} data={item}/>
        ))}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty} style={{display:task.length === 0 ? "block":"none"}}>
        {/* Show when No Tasks are present */}
        <img src={emptylogo} alt="emptylogo" />
        <p><b>Empty list</b></p>
        <p>Add a new task above</p>
      </div>
    </div>
  );
};

export default Tasks;
