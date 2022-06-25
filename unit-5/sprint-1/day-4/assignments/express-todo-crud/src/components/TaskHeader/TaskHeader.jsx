import React, { useContext } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosAPI } from "../../store/action";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  const {data:task} = useSelector((state)=>state);
  // const task = useSelector((state) => state);
  // console.log("data: ",task);
  // console.log("task: ", task)
  const dispatch = useDispatch();
  let totalTask = task?.length;
  let unCompletedTask = task?.filter((task) => task.done === false).length;

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
