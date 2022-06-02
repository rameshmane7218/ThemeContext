import React, { useContext } from "react";
import { ReducerContext } from "../../context/ReducerContext";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ data }) => {

  const { task } = useContext(ReducerContext);
  let totalTask = task.length;
  let unCompletedTask = task.filter((task) => task.done === false).length;

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
