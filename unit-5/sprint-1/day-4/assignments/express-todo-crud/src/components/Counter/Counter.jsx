import React, { useContext } from "react";
import styles from "./counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateTodosAPI } from "../../store/action";

const Counter = ({ data }) => {
  const { data: task } = useSelector((state) => state);
  const dispatch = useDispatch();
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button
        data-cy="task-counter-increment-button"
        onClick={() =>
          dispatch(
            updateTodosAPI({
              id: data.id,
              text: data.text,
              done: data.done,
              count: Number(data.count) + 1,
              createdAt: data.createdAt,
            })
          )
        }
      >
        +
      </button>
      <span data-cy="task-counter-value">{data.count}</span>
      <button
        disabled={data.count <= 1}
        data-cy="task-counter-decrement-button"
        onClick={() =>
          dispatch(
            updateTodosAPI({
              id: data.id,
              text: data.text,
              done: data.done,
              count: Number(data.count) - 1,
              createdAt: data.createdAt,
            })
          )
        }
      >
        -
      </button>
    </div>
  );
};

export default Counter;
