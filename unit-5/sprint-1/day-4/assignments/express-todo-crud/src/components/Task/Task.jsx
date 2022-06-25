import React, { useContext } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
import removelogo from "../../assets/remove.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodosAPI, updateTodosAPI } from "../../store/action";

const Task = ({ data }) => {
  // NOTE: do not delete `data-cy` key value pair
  const [isDisplay, setIsDisplay] = React.useState(false);
  const { data: task } = useSelector((state) => state);
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
            dispatch(
              updateTodosAPI({
                id: data.id,
                text: data.text,
                done: !data.done,
                count: data.count,
              })
            )
          }
        />
        <div data-cy="task-text" className={data.done ? styles.strike : ""}>
          {data.text}
        </div>
      </div>
      <div className={styles.taskCounter}>
        {/* Counter here */}
        <Counter data={data} />
        <button
          data-cy="task-remove-button"
          className={`${styles.removeBtn} ${
            isDisplay ? styles.displaybtn : ""
          }`}
          title="Remover item"
          onClick={() => dispatch(deleteTodosAPI(data.id))}
        >
          <img src={removelogo} alt="Remove Logo" />
        </button>
      </div>
    </li>
  );
};

export default Task;
