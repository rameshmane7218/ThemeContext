import React, { useEffect } from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";
import emptylogo from "../../assets/empty.svg";
import { getTodosAPI } from "../../store/todo/todo.actions";
import { useDispatch, useSelector } from "react-redux";

const Tasks = () => {
  const dispatch = useDispatch();

  const {
    getTodo: gTodo,
    data,
  } = useSelector((state) => state);
  console.log(data[0]);

  useEffect(() => {
    console.log("times")
    dispatch(getTodosAPI());
  }, [getTodosAPI]);

  if (gTodo.loading)
    return (
      <div className={styles.taskApp}>
        <h1>Loading...</h1>
      </div>
    );
  if (gTodo.error)
    return (
      <div className={styles.taskApp}>
        <h1>Something went wrong</h1>
      </div>
    );
  return (
    <div className={styles.taskApp}>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {data.map((item) => (

          <Task key={item.id} data={item} />
        ))}
      </ul>
      <div
        data-cy="tasks-empty"
        className={styles.empty}
        style={{ display: data.length === 0 ? "block" : "none" }}
      >
        {/* Show when No Tasks are present */}
        <img src={emptylogo} alt="emptylogo" />
        <p>
          <b>Empty list</b>
        </p>
        <p>Add a new task above</p>
      </div>
    </div>
  );
};

export default Tasks;
