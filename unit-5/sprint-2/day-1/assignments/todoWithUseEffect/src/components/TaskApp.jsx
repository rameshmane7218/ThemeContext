import React from "react";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";
import { TaskHeader } from "./TaskHeader";
import { Tasks } from "./Tasks";
// import data from "../data/tasks.json";

const TaskApp = ({
  task,
  setTask,
  getTodos,
  page,
  setPage,
  disablelastPage,
}) => {
  console.log("disablelastPage", disablelastPage);

  const removeItem = (value) => {
    fetch(`${process.env.REACT_APP_BASE_URL}/todos/${value}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    getTodos(page);
  };

  const handleDoneStatus = (value, status) => {
    // console.log("completed",value,status);
    fetch(`${process.env.REACT_APP_BASE_URL}/todos/${value}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        done: !status,
      }),
    });
    getTodos(page);
  };

  const handleCounter = (value, countValue) => {
    // console.log(value,countValue);
    fetch(`${process.env.REACT_APP_BASE_URL}/todos/${value}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        count: countValue,
      }),
    });
    getTodos(page);
  };

  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader data={task} />
      {/* Add Task */}
      <AddTask data={task} setData={setTask} getTodos={getTodos} page={page}/>
      {/* Tasks */}
      <Tasks
        data={task}
        removeItem={removeItem}
        handleDoneStatus={handleDoneStatus}
        handleCounter={handleCounter}
      />

      <div
        className={styles.pageDiv}
        style={{ display: task.length !== 0 ? "flex" : "none" }}
      >
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        {page}
        <button disabled={disablelastPage} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TaskApp;
