import React, { useContext } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
import removelogo from "../../assets/remove.svg";
import { ReducerContext } from "../../context/ReducerContext";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodoStatus } from "../../store/todo/todo.actions";
import UpdateTask from "../UpdateTask/UpdateTask";
const Task = ({ data }) => {
  // NOTE: do not delete `data-cy` key value pair
  const [isDisplay, setIsDisplay] = React.useState(false);

  const dispatch = useDispatch();

  const displayBtn = () => {
    // console.log("Mouse hoverd on me")
    setIsDisplay(true);
  };
  const hideBtn = () => {
    // console.log("Mouse leave")
    setIsDisplay(false);
  };

  return (
    <li
      data-cy="task"
      className={styles.task}
      onMouseOver={displayBtn}
      onMouseLeave={hideBtn}
    >
      <div className={styles.taskInfo}>
        <input
          type="checkbox"
          defaultChecked={data.done}
          data-cy="task-checkbox"
          onChange={() =>
            // console.log(data.id,data.done);
            dispatch(updateTodoStatus(data.id, data.done))
          }
        />
        <div data-cy="task-text" className={data.done ? styles.strike : ""}>
          <Link to={`/todo/${data.id}`} className={styles.linkTag}>
            {data.text}
          </Link>
        </div>
      </div>
      <div className={styles.taskCounter}>
        {/* Counter here */}
        {/* <Counter data={data} /> */}
        <Link to={`/todo/${data.id}/edit`}>
          <i className="fa-solid fa-pen-to-square" title="Edit Todo"></i>
        </Link>
        <button
          data-cy="task-remove-button"
          className={`${styles.removeBtn} ${
            isDisplay ? styles.displaybtn : ""
          }`}
          title="Remover item"
          onClick={() => dispatch(deleteTodo(data.id))}
        >
          <img src={removelogo} alt="Remove Logo" />
        </button>
      </div>
    </li>
  );
};

export default Task;
