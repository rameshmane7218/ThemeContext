import React from "react";
import { useEffect } from "react";
import { getTodosAPI } from "../store/action";
import AddTask from "./AddTask/AddTask";
import { useDispatch } from "react-redux";

import styles from "./taskApp.module.css";
import { TaskHeader } from "./TaskHeader";
import { Tasks } from "./Tasks";

const TaskApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAPI());
  }, []);
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader />
      {/* Add Task */}
      <AddTask />
      {/* Tasks */}
      <Tasks />
    </div>
  );
};

export default TaskApp;
