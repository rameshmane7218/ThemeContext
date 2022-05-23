import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";
import emptylogo from "../../assets/empty.svg";

const Tasks = ({data,removeItem,completed}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.taskApp}>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {data.map((task)=>(
          <Task key={task.id} data={task} removeItem={removeItem} completed={completed}/>
        ))}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty} style={{display:data.length === 0 ? "block":"none"}}>
        {/* Show when No Tasks are present */}
        <img src={emptylogo} alt="emptylogo" />
        <p><b>Empty list</b></p>
        <p>Add a new task above</p>
      </div>
    </div>
  );
};

export default Tasks;
