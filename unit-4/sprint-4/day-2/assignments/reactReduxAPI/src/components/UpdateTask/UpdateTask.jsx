import React from "react";
import AddTask from "../AddTask/AddTask";
import { TaskHeader } from "../TaskHeader";
import { Tasks } from "../Tasks";

import styles from "./UpdateTask.module.css";

const UpdateTask = () => {
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <div data-cy="task-header" className={styles.taskHeader}>
        <h1>Update Task</h1>
      </div>
      {/* Add Task */}
      {/* <div className={styles.todoForm}>
        <input
          data-cy="add-task-input"
          type="text"
          placeholder="Add Task..."
          // onChange={handleInput}
        />
        <button data-cy="add-task-button">+</button>
      </div> */}

      {/* Tasks */}
      <div className={styles.taskEdit}>
        <form>
          <label htmlFor="task">Edit Task</label>
          <input type="text" />
          <br />
          <br />
          <br />
          <label htmlFor="">select task status</label>
          
          <div>
            <input type="radio" name="status" />
            <label htmlFor="">Completed</label>
            <input type="radio" name="status" />
            <label htmlFor="">Pending</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
