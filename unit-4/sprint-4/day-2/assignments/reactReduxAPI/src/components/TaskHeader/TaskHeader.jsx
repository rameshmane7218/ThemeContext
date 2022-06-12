import React from "react";
import styles from "./taskHeader.module.css";
import { useSelector } from "react-redux";

const TaskHeader = () => {
  const { data } = useSelector((state) => state);

  let totalTask = data.length;
  let unCompletedTask = data.filter((task) => task.done === false).length;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <p>
        {"You have "}
        <b data-cy="header-remaining-task">{unCompletedTask}</b>
        {" of "}
        <b data-cy="header-total-task">{totalTask}</b>
        {" tasks remaining"}
      </p>
    </div>
  );
};

export default TaskHeader;
