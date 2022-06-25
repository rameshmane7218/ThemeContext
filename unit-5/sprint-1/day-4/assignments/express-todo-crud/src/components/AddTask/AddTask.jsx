import React, { useContext } from "react";
import styles from "./addTask.module.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodosAPI, getTodosAPI } from "../../store/action";
import { useEffect } from "react";

const AddTask = () => {
  const [todo, setTodo] = React.useState("");
  const { data: task } = useSelector((state) => state);
  const dispatch = useDispatch();

  // NOTE: do not delete `data-cy` key value pair

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = (value) => {
    let flag = true;
    if (value.trim() == "") {
      flag = false;
    }
    let ans = task.filter((data) => {
      if (data.text == value) {
        flag = false;
      }
      return false;
    });

    if (flag) {
      const payload = {
        id: uuidv4(),
        text: value,
        done: false,
        count: 1,
      };
      dispatch(addTodosAPI(payload));
    }
    setTodo("");
  };


  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        type="text"
        value={todo}
        placeholder="Add Task..."
        onChange={handleInput}
      />
      <button data-cy="add-task-button" onClick={() => addTodo(todo)}>
        +
      </button>
    </div>
  );
};

export default AddTask;
