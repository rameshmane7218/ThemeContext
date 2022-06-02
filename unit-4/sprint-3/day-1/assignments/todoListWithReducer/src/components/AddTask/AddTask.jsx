import React, { useContext } from "react";
import styles from "./addTask.module.css";
import { v4 as uuidv4 } from "uuid";
import { ReducerContext } from "../../context/ReducerContext";

const AddTask = () => {
  const {task, setTask} = useContext(ReducerContext);
  const [todo, setTodo] = React.useState("");

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
      setTask({type:"addItem", value})
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
